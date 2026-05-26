"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Globe, Link as LinkIcon, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-primary pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-brand-purple/20 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Seyal Logo" width={150} height={50} className="object-contain h-12 w-auto" />
            </Link>
            <p className="text-white/60 font-medium text-lg italic">
              "உலகின் தலைசிறந்த சொல் செயல்"
            </p>
            <p className="text-white/60 max-w-xs">
              Transforming ideas into powerful, futuristic digital experiences.
            </p>
            <div className="flex gap-4 pt-2">
              {[Globe, LinkIcon, MessageCircle].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-brand-purple/50 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Portfolio", "Process", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-brand-cyan transition-colors relative group inline-block">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <li>
                <Link href="/admin" className="text-white/60 hover:text-brand-purple transition-colors relative group inline-block">
                  Admin Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Expertise</h4>
            <ul className="space-y-4">
              {["AI Solutions", "Web Development", "UI/UX Design", "Branding", "Creative Media"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/60 hover:text-brand-purple transition-colors relative group inline-block">
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="text-brand-cyan shrink-0 mt-0.5" />
                <span>Seyal.net HQ<br/>Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone size={20} className="text-brand-purple shrink-0" />
                <a href="tel:+919047766887">Srihari T: +91 9047766887</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Mail size={20} className="text-brand-pink shrink-0" />
                <a href="mailto:hello@seyal.net">hello@seyal.net</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-medium">
          <p>© {currentYear} Seyal.net. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
