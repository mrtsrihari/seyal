"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Lightbulb, Target, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { id: "01", title: "Idea", desc: "Conceptualizing the core vision.", icon: Lightbulb },
  { id: "02", title: "Strategy", desc: "Formulating a digital roadmap.", icon: Target },
  { id: "03", title: "Design", desc: "Crafting cinematic UI/UX.", icon: PenTool },
  { id: "04", title: "Development", desc: "Building scalable architecture.", icon: Code2 },
  { id: "05", title: "Launch", desc: "Deploying the digital reality.", icon: Rocket },
];

export function Process() {
  return (
    <section className="relative py-32 overflow-hidden bg-[url('/noise.png')] bg-blend-overlay">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-primary via-transparent to-brand-primary opacity-90 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <GradientText>Process</GradientText>
            </h2>
            <p className="text-lg text-white/60">
              A streamlined, futuristic approach to transforming ideas into reality.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-electric via-brand-purple to-brand-cyan shadow-[0_0_20px_rgba(168,85,247,1)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          
          {/* Animated Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 left-12 w-1 h-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-brand-electric via-brand-purple to-brand-cyan shadow-[0_0_20px_rgba(168,85,247,1)]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="flex md:flex-col items-center gap-6 md:gap-4 group relative"
                >
                  <div className="w-24 h-24 md:w-20 md:h-20 shrink-0 rounded-2xl bg-brand-primary border-2 border-white/10 flex items-center justify-center group-hover:border-brand-purple/80 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-500 relative shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 overflow-hidden">
                    <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon size={32} className="text-white/50 group-hover:text-white transition-colors z-10" />
                  </div>
                  
                  <div className="md:text-center md:absolute md:top-28 md:w-40 md:-left-10">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
