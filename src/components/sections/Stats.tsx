"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { useEffect, useState } from "react";

export function Stats({ statsData }: { statsData: any }) {
  const stats = [
    { label: "Projects Completed", value: statsData?.projectsCompleted || 50, suffix: "+" },
    { label: "Years Experience", value: statsData?.yearsExperience || 5, suffix: "+" },
    { label: "Happy Clients", value: statsData?.happyClients || 40, suffix: "+" },
    { label: "Awards Won", value: statsData?.awardsWon || 12, suffix: "" },
  ];

  return (
    <section className="relative py-20 bg-brand-primary border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard interactive className="text-center p-8 group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-electric group-hover:to-brand-cyan transition-all duration-300">
                  <AnimatedCounter value={stat.value} />{stat.suffix}
                </div>
                <p className="text-white/50 text-sm md:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}
