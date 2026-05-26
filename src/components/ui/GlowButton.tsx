"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden px-8 py-3";
    
    const variants = {
      primary: "bg-brand-electric text-white shadow-[0_0_20px_rgba(0,102,255,0.6)] hover:shadow-[0_0_40px_rgba(0,102,255,1)]",
      secondary: "bg-brand-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,1)]",
      outline: "bg-transparent border border-brand-cyan/50 text-brand-cyan hover:border-brand-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] backdrop-blur-sm",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant !== "outline" && (
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        )}
      </motion.button>
    );
  }
);

GlowButton.displayName = "GlowButton";
