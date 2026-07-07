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
  borderHover: string;
  iconBg: string;
  iconColor: string;
  shadowHover: string;
}

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.6,
      ease: EASE_OUT,
    },
  }),
};

export const WhyChooseUs: React.FC = () => {
  const values: ValueProp[] = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Built Around You",
      description: "Every business is different. Your website is planned and designed to match your goals, your brand, and your vision.",
      borderHover: "rgba(217,130,43,0.45)",
      iconBg: "rgba(217,130,43,0.12)",
      iconColor: "hsl(38,92%,56%)",
      shadowHover: "0 0 28px rgba(217,130,43,0.18)",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "100% Custom Website",
      description: "No templates. No copied designs. Every website is built from the ground up for your business.",
      borderHover: "rgba(210,100,50,0.45)",
      iconBg: "rgba(210,100,50,0.12)",
      iconColor: "hsl(20,85%,55%)",
      shadowHover: "0 0 28px rgba(210,100,50,0.18)",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast & Smooth",
      description: "Quick loading, smooth browsing, and a better experience for every visitor.",
      borderHover: "rgba(50,200,100,0.45)",
      iconBg: "rgba(50,200,100,0.1)",
      iconColor: "hsl(145,75%,52%)",
      shadowHover: "0 0 28px rgba(50,200,100,0.15)",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Perfect on Every Device",
      description: "Whether it's a phone, tablet, laptop, or desktop, your website always looks its best.",
      borderHover: "rgba(217,130,43,0.45)",
      iconBg: "rgba(245,200,80,0.1)",
      iconColor: "hsl(42,95%,52%)",
      shadowHover: "0 0 28px rgba(217,130,43,0.18)",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Easy to Find",
      description: "Built with SEO best practices so your business has a stronger online presence.",
      borderHover: "rgba(217,130,43,0.45)",
      iconBg: "rgba(217,130,43,0.12)",
      iconColor: "hsl(38,92%,56%)",
      shadowHover: "0 0 28px rgba(217,130,43,0.18)",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Safe & Reliable",
      description: "Your website is built with modern security standards to keep your business protected.",
      borderHover: "rgba(210,100,50,0.45)",
      iconBg: "rgba(210,100,50,0.12)",
      iconColor: "hsl(20,85%,55%)",
      shadowHover: "0 0 28px rgba(210,100,50,0.18)",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "We're Always Here",
      description: "From planning to launch and beyond, we're just one message away whenever you need us.",
      borderHover: "rgba(50,200,100,0.45)",
      iconBg: "rgba(50,200,100,0.1)",
      iconColor: "hsl(145,75%,52%)",
      shadowHover: "0 0 28px rgba(50,200,100,0.15)",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Built to Build Trust",
      description: "A professional website that gives people confidence in your business from the very first visit.",
      borderHover: "rgba(245,200,80,0.45)",
      iconBg: "rgba(245,200,80,0.1)",
      iconColor: "hsl(42,95%,52%)",
      shadowHover: "0 0 28px rgba(245,200,80,0.18)",
    },
  ];

  return (
    <section
      id="advantages"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0c0807" }}
    >
      {/* Warm glow blobs */}
      <div
        className="absolute top-1/2 left-[-15%] w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(217,130,43,0.06)" }}
      />
      <div
        className="absolute top-1/3 right-[-15%] w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(210,100,50,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(217,130,43,0.08)",
              border: "1px solid rgba(217,130,43,0.2)",
            }}
          >
            <span
              className="text-xs font-bold tracking-widest uppercase font-heading"
              style={{ color: "hsl(38,92%,56%)" }}
            >
              OUR PROMISE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 font-heading"
            style={{ color: "hsl(38,60%,94%)" }}
          >
            WHY BUSINESSES CHOOSE{" "}
            <span className="text-gradient-purple-pink">SHARMORA</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-base md:text-lg leading-relaxed font-sans"
            style={{ color: "hsl(38,18%,70%)" }}
          >
            Every business deserves a website that looks professional, works smoothly, and gives customers confidence. Here&apos;s what you can expect when you choose Sharmora Technologies.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
              className="group flex flex-col gap-4 text-left p-6 rounded-2xl glass-card transition-all duration-400 cursor-default"
              style={{ borderColor: "rgba(217,130,43,0.08)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = val.borderHover;
                el.style.boxShadow = val.shadowHover;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(217,130,43,0.08)";
                el.style.boxShadow = "0 8px 32px 0 rgba(0,0,0,0.45)";
              }}
            >
              {/* Icon */}
              <div
                className="p-3 rounded-xl w-fit transition-transform duration-300 group-hover:scale-110"
                style={{ background: val.iconBg, color: val.iconColor }}
              >
                {val.icon}
              </div>
              <h3
                className="text-lg font-bold font-heading"
                style={{ color: "hsl(38,60%,94%)" }}
              >
                {val.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-sans"
                style={{ color: "hsl(38,18%,70%)" }}
              >
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
