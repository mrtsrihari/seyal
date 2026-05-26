"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { 
  Globe, BrainCircuit, MonitorSmartphone, Palette, 
  Settings, Smartphone, Video, Image as ImageIcon, 
  LayoutTemplate, CreditCard 
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance, futuristic websites built with modern frameworks." },
  { icon: BrainCircuit, title: "AI Solutions", desc: "Intelligent AI integrations and custom machine learning tools." },
  { icon: MonitorSmartphone, title: "UI/UX Design", desc: "Immersive, cinematic user interfaces that captivate users." },
  { icon: Palette, title: "Branding", desc: "Bold, modern brand identities with Tamil cultural elegance." },
  { icon: Settings, title: "Automation", desc: "Streamlined business workflows through advanced automation." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Cross-platform mobile experiences that feel premium." },
  { icon: Video, title: "Video Editing", desc: "Cinematic video production and high-end motion graphics." },
  { icon: ImageIcon, title: "Photo Editing", desc: "Professional retouching and creative image manipulation." },
  { icon: LayoutTemplate, title: "Poster Designing", desc: "Eye-catching, bold promotional materials and digital posters." },
  { icon: CreditCard, title: "Visiting Card Design", desc: "Premium, futuristic business card designs that stand out." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-cyan/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <GradientText>Expertise</GradientText>
            </h2>
            <p className="text-lg text-white/60">
              We deliver world-class digital services, combining cutting-edge technology with premium creative media.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard interactive className="h-full flex flex-col group">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-electric to-brand-purple opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Icon size={28} className="text-white/80 group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-electric group-hover:to-brand-cyan transition-all">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mt-auto">
                    {service.desc}
                  </p>
                  
                  {/* Decorative corner glow */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-purple/20 blur-xl group-hover:bg-brand-cyan/30 transition-colors duration-500 rounded-full" />
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
