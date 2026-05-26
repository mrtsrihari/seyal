"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

export function Testimonials({ initialTestimonials = [] }: { initialTestimonials?: any[] }) {
  return (
    <section className="relative py-32 overflow-hidden bg-brand-primary">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <GradientText>Testimonials</GradientText>
            </h2>
            <p className="text-lg text-white/60">
              Hear from the innovators who trusted us to build their digital future.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialTestimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <GlassCard interactive className="h-full">
                <Quote className="text-brand-purple/50 mb-6" size={40} />
                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content || testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan to-brand-electric p-0.5">
                    <div className="w-full h-full bg-brand-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-brand-cyan text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
