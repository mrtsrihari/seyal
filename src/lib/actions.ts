"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { Redis } from "@upstash/redis";

const dataFilePath = path.join(process.cwd(), "data.json");

// Only initialize Redis if environment variables exist
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = redisUrl && redisToken ? new Redis({ url: redisUrl, token: redisToken }) : null;

// Fallback initial data in case Redis is empty and file fails
const DEFAULT_DATA = {
  stats: {
    projectsCompleted: 50,
    yearsExperience: 5,
    happyClients: 40,
    awardsWon: 12
  },
  projects: [],
  testimonials: []
};

export async function getSiteData() {
  try {
    if (redis) {
      const cachedData = await redis.get("seyal_site_data");
      if (cachedData) {
        return cachedData;
      }
    }

    // Fallback to local file if Redis is not configured or is empty
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    const parsed = JSON.parse(fileContents);
    
    // Seed Redis if it's configured but empty
    if (redis) {
      await redis.set("seyal_site_data", parsed);
    }
    return parsed;
  } catch (error) {
    console.error("Error reading site data:", error);
    return DEFAULT_DATA;
  }
}

async function saveSiteData(data: any) {
  if (redis) {
    await redis.set("seyal_site_data", data);
  } else {
    // Only write to file if Redis isn't set up (e.g. local dev without KV)
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  }
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateStats(formData: FormData) {
  const data = (await getSiteData()) as any;
  data.stats = {
    projectsCompleted: Number(formData.get("projectsCompleted")),
    yearsExperience: Number(formData.get("yearsExperience")),
    happyClients: Number(formData.get("happyClients")),
    awardsWon: Number(formData.get("awardsWon")),
  };
  await saveSiteData(data);
}

export async function addProject(formData: FormData) {
  const data = (await getSiteData()) as any;
  const newProject = {
    id: Date.now(),
    title: formData.get("title"),
    category: formData.get("category"),
    tech: formData.get("tech"),
    image: formData.get("image"),
  };
  data.projects.push(newProject);
  await saveSiteData(data);
}

export async function deleteProject(id: number) {
  const data = (await getSiteData()) as any;
  data.projects = data.projects.filter((p: any) => p.id !== id);
  await saveSiteData(data);
}

export async function addTestimonial(formData: FormData) {
  const data = (await getSiteData()) as any;
  const newTestimonial = {
    id: Date.now(),
    name: formData.get("name"),
    role: formData.get("role"),
    content: formData.get("content"),
  };
  data.testimonials.push(newTestimonial);
  await saveSiteData(data);
}

export async function deleteTestimonial(id: number) {
  const data = (await getSiteData()) as any;
  data.testimonials = data.testimonials.filter((t: any) => t.id !== id);
  await saveSiteData(data);
}
