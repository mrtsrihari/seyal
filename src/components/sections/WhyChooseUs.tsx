"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Zap, Diamond, Layers, Bot, Rocket, Globe2, Clapperboard, PenTool } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Execution", desc: "Rapid delivery without compromising on premium quality.", colSpan: "md:col-span-2", bgGlow: "from-brand-electric/40" },
  { icon: Diamond, title: "Premium UI Design", desc: "Pixel-perfect, cinematic aesthetics.", colSpan: "md:col-span-1", bgGlow: "from-brand-purple/40" },
  { icon: Layers, title: "Scalable Architecture", desc: "Built to grow with your ambitious vision.", colSpan: "md:col-span-1", bgGlow: "from-brand-cyan/40" },
  { icon: Bot, title: "AI Integration", desc: "Next-gen AI capabilities embedded seamlessly.", colSpan: "md:col-span-2", bgGlow: "from-brand-electric/40" },
  { icon: Rocket, title: "Startup Friendly", desc: "Agile, dynamic, and ready for high-growth.", colSpan: "md:col-span-1", bgGlow: "from-brand-pink/40" },
  { icon: Globe2, title: "Tamil + Global", desc: "Cultural elegance meets global standards.", colSpan: "md:col-span-2", bgGlow: "from-brand-purple/40" },
  { icon: Clapperboard, title: "Creative Media", desc: "Cinematic videos & visuals.", colSpan: "md:col-span-1", bgGlow: "from-brand-cyan/40" },
  { icon: PenTool, title: "Modern Language", desc: "State-of-the-art tech stack.", colSpan: "md:col-span-2", bgGlow: "from-brand-electric/40" },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <GradientText>Choose Us</GradientText>
            </h2>
            <p className="text-lg text-white/60">
              We don't just build websites; we craft digital ecosystems designed for the future.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-8 backdrop-blur-sm group ${feature.colSpan}`}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Border trace effect */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/40 rounded-2xl transition-all duration-700 z-10 pointer-events-none" />

                <div className="relative z-20 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-white/80 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm mt-auto">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
