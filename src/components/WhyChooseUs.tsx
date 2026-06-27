"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Zap,
  Smartphone,
  Search,
  ShieldCheck,
  MessageSquare,
  Layers
} from "lucide-react";

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowClass: string;
  iconBg: string;
  iconColor: string;
}

export const WhyChooseUs: React.FC = () => {
  const values: ValueProp[] = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Built Around You",
      description: "Every business is different. Your website is planned and designed to match your goals, your brand, and your vision.",
      glowClass: "group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "100% Custom Website",
      description: "No templates. No copied designs. Every website is built from the ground up for your business.",
      glowClass: "group-hover:border-accent-pink/40 group-hover:shadow-[0_0_25px_rgba(244,114,182,0.15)]",
      iconBg: "bg-accent-pink/10",
      iconColor: "text-accent-pink"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast & Smooth",
      description: "Quick loading, smooth browsing, and a better experience for every visitor.",
      glowClass: "group-hover:border-cyan-400/40 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
      iconBg: "bg-cyan-400/10",
      iconColor: "text-cyan-400"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Perfect on Every Device",
      description: "Whether it's a phone, tablet, laptop, or desktop, your website always looks its best.",
      glowClass: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-500"
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Easy to Find",
      description: "Built with SEO best practices so your business has a stronger online presence.",
      glowClass: "group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Safe & Reliable",
      description: "Your website is built with modern security standards to keep your business protected.",
      glowClass: "group-hover:border-accent-pink/40 group-hover:shadow-[0_0_25px_rgba(244,114,182,0.15)]",
      iconBg: "bg-accent-pink/10",
      iconColor: "text-accent-pink"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "We're Always Here",
      description: "From planning to launch and beyond, we're just one message away whenever you need us.",
      glowClass: "group-hover:border-cyan-400/40 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
      iconBg: "bg-cyan-400/10",
      iconColor: "text-cyan-400"
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Built to Build Trust",
      description: "A professional website that gives people confidence in your business from the very first visit.",
      glowClass: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-500"
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Mesh glows in background */}
      <div className="absolute top-1/2 left-[-15%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-15%] w-[40vw] h-[40vw] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-bold tracking-widest text-[#a78bfa] uppercase font-heading">
              OUR PROMISE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-heading">
            WHY BUSINESSES CHOOSE <span className="text-gradient-purple-pink">SHARMORA</span>.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans">
            Every business deserves a website that looks professional, works smoothly, and gives customers confidence. Here's what you can expect when you choose Sharmora Technologies.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group flex flex-col gap-4 text-left p-6 rounded-2xl glass-card transition-all duration-500 border border-white/5 ${val.glowClass}`}
            >
              {/* Animated icon ring */}
              <div className={`p-3 rounded-xl w-fit transition-transform duration-300 group-hover:scale-110 ${val.iconBg} ${val.iconColor}`}>
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                {val.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
