import { getSiteData, updateStats, addProject, deleteProject, addTestimonial, deleteTestimonial } from "@/lib/actions";
import { GlowButton } from "@/components/ui/GlowButton";
import { Trash2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const data = await getSiteData();

  return (
    <div className="min-h-screen bg-brand-primary text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
        
        <div className="bg-brand-purple/20 border border-brand-purple/50 rounded-xl p-4 mb-10">
          <h2 className="text-xl font-bold text-brand-cyan mb-2">Vercel KV Database Ready</h2>
          <p className="text-sm text-white/80">
            This dashboard is now integrated with <strong>Upstash Redis (Vercel KV)</strong>. 
            If you have added the Vercel KV integration in your Vercel dashboard, changes made here will be permanently saved to the cloud database.
            Otherwise, it will fallback to a local <code>data.json</code> file (which won't persist on Vercel deployments).
          </p>
        </div>

        {/* Stats Section */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-10">
          <h2 className="text-2xl font-bold mb-6 text-brand-cyan">Update Stats</h2>
          <form action={updateStats} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">Projects Completed</label>
              <input name="projectsCompleted" type="number" defaultValue={data.stats.projectsCompleted} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-cyan" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Years Experience</label>
              <input name="yearsExperience" type="number" defaultValue={data.stats.yearsExperience} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-cyan" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Happy Clients</label>
              <input name="happyClients" type="number" defaultValue={data.stats.happyClients} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-cyan" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Awards Won</label>
              <input name="awardsWon" type="number" defaultValue={data.stats.awardsWon} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-cyan" />
            </div>
            <div className="md:col-span-2">
              <GlowButton type="submit" className="px-8 py-3 w-full sm:w-auto">Save Stats</GlowButton>
            </div>
          </form>
        </section>

        {/* Projects Section */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-10">
          <h2 className="text-2xl font-bold mb-6 text-brand-purple">Manage Projects</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Add New Project</h3>
            <form action={addProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required name="title" placeholder="Project Title" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" />
              <input required name="category" placeholder="Category (e.g. Website Projects)" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" />
              <input required name="tech" placeholder="Tech Stack" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" />
              <input required name="image" placeholder="Image URL (Unsplash or path)" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" />
              <div className="md:col-span-2">
                <GlowButton type="submit" className="px-6 py-2">Add Project</GlowButton>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Existing Projects</h3>
            <div className="space-y-4">
              {data.projects.map((p: any) => (
                <div key={p.id} className="flex items-center justify-between bg-black/30 p-4 rounded-lg border border-white/5">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <h4 className="font-bold">{p.title}</h4>
                      <p className="text-xs text-white/50">{p.category} • {p.tech}</p>
                    </div>
                  </div>
                  <form action={async () => {
                    "use server";
                    await deleteProject(p.id);
                  }}>
                    <button type="submit" className="text-red-400 hover:text-red-300 p-2">
                      <Trash2 size={20} />
                    </button>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-brand-electric">Manage Testimonials</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Add New Testimonial</h3>
            <form action={addTestimonial} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required name="name" placeholder="Client Name" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" />
              <input required name="role" placeholder="Client Role/Company" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" />
              <textarea required name="content" placeholder="Testimonial content..." rows={3} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white md:col-span-2" />
              <div className="md:col-span-2">
                <GlowButton type="submit" className="px-6 py-2">Add Testimonial</GlowButton>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Existing Testimonials</h3>
            <div className="space-y-4">
              {data.testimonials.map((t: any) => (
                <div key={t.id} className="flex items-center justify-between bg-black/30 p-4 rounded-lg border border-white/5">
                  <div className="pr-4">
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-brand-cyan mb-2">{t.role}</p>
                    <p className="text-sm text-white/70 italic">&quot;{t.content}&quot;</p>
                  </div>
                  <form action={async () => {
                    "use server";
                    await deleteTestimonial(t.id);
                  }}>
                    <button type="submit" className="text-red-400 hover:text-red-300 p-2">
                      <Trash2 size={20} />
                    </button>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
