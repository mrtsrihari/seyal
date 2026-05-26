"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { GradientText } from "@/components/ui/GradientText";
import { Code, Cpu, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Lighting & Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-cyan/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 text-brand-cyan text-sm font-semibold tracking-wide">
            <Sparkles size={16} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-electric to-brand-cyan">
              Next-Gen Design Studio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight">
            Turning Vision Into <br className="hidden md:block" />
            <GradientText>Digital Reality</GradientText>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-white/80 italic tracking-wide">
            "உலகின் தலைசிறந்த சொல் செயல்"
          </h2>

          <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
            Seyal.net creates futuristic websites, AI-powered solutions, modern branding, cinematic visuals, and immersive digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <GlowButton className="text-lg px-8 py-4">Start Your Project</GlowButton>
            <GlowButton variant="outline" className="text-lg px-8 py-4">View Our Work</GlowButton>
          </div>
          
          <div className="flex items-center gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-white/50 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-white/50 uppercase tracking-wider">Execution</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Futuristic Visuals */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
          <motion.div
            animate={{ 
              rotateY: [0, 10, -10, 0],
              rotateX: [0, -5, 5, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center transform-style-3d"
          >
            {/* Hologram Core */}
            <div className="relative w-64 h-64 border border-brand-cyan/30 rounded-full flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-brand-purple/30 before:scale-110 before:animate-spin-slow after:absolute after:inset-0 after:rounded-full after:border after:border-brand-electric/30 after:scale-125 after:animate-reverse-spin">
              <Cpu size={64} className="text-brand-cyan animate-pulse drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
            </div>

            {/* Floating Glass Cards */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 p-4 rounded-xl glass border border-brand-cyan/40 shadow-[0_0_30px_rgba(6,182,212,0.2)] backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-electric to-brand-cyan flex items-center justify-center">
                  <Code size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">AI Engine</p>
                  <p className="text-xs text-brand-cyan">Active</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 left-10 p-4 rounded-xl glass border border-brand-purple/40 shadow-[0_0_30px_rgba(139,92,246,0.2)] backdrop-blur-md w-48"
            >
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-brand-purple to-brand-pink"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <p className="text-xs text-white/70 font-mono">Processing data...</p>
            </motion.div>

            {/* Glowing Particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(6,182,212,1)]"
                animate={{
                  y: [0, -100, 0],
                  x: [0, (i % 2 === 0 ? 50 : -50), 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
