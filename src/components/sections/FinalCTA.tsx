"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-brand-purple/50 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-brand-cyan/40 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/noise.png')] opacity-30 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 p-12 md:p-20 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.3)] relative overflow-hidden group"
        >
          {/* Animated glow on card border */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-electric via-brand-purple to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Let’s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-brand-purple to-brand-cyan">
              Extraordinary
            </span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            From futuristic websites to cinematic creative designs — Seyal.net transforms ideas into powerful digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/start-project" className="w-full sm:w-auto">
              <GlowButton className="text-lg px-10 py-5 w-full">
                Start Project
              </GlowButton>
            </Link>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://api.whatsapp.com/send?phone=919047766887"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366]/20 border border-[#25D366]/50 text-white px-10 py-5 rounded-full hover:bg-[#25D366]/30 transition-colors w-full sm:w-auto text-lg font-medium shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
