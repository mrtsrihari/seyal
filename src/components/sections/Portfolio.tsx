"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { ExternalLink } from "lucide-react";

export function Portfolio({ initialProjects = [] }: { initialProjects?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(initialProjects.map((p) => p.category)))];

  const filteredProjects = activeCategory === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.category.includes(activeCategory) || p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 bg-brand-primary">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <GradientText>Projects</GradientText>
            </h2>
            <p className="text-lg text-white/60">
              A cinematic showcase of our finest digital creations, blending technology with art.
            </p>
          </motion.div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-brand-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.8)]" 
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 cursor-pointer hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-500"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-brand-cyan text-sm font-bold mb-2 tracking-wider uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-white/60 text-sm">{project.tech}</p>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-brand-electric transition-colors">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
