"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlowButton } from "@/components/ui/GlowButton";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Send, Loader2 } from "lucide-react";

export default function StartProjectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", purpose: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-primary pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-brand-purple/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-brand-cyan/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Start Your <GradientText>Project</GradientText>
            </h1>
            <p className="text-lg text-white/70">
              Tell us about your vision, and we'll help you bring it to life. Fill out the details below and we'll get back to you shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.1)]">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-brand-cyan w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-white/70 mb-8">Thank you for reaching out. We will get back to you at seyallabs@gmail.com shortly.</p>
                  <GlowButton onClick={() => setStatus("idle")} className="px-8 py-3">
                    Send Another Message
                  </GlowButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-white/70 mb-2">Project Purpose / Details</label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      required
                      rows={5}
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about what you want to build..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="text-red-400 text-sm bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                      There was an error sending your message. Please try again or email us directly.
                    </div>
                  )}

                  <GlowButton 
                    type="submit" 
                    className="w-full py-4 text-lg flex items-center justify-center gap-2"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="animate-spin" size={24} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        Submit Request
                      </>
                    )}
                  </GlowButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
