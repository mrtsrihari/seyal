"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function GlassCard({ children, className, interactive = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden group",
        interactive && "hover:border-brand-cyan/70 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300 cursor-pointer",
        className
      )}
      whileHover={interactive ? { y: -5 } : {}}
      {...props}
    >
      {/* Interactive Glow Effect on Hover */}
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-brand-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
