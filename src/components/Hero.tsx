"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Sparkles, MessageSquare, Zap } from "lucide-react";
import { Logo } from "./Logo";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lineReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.72, ease: EASE_OUT },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden mesh-bg pt-20">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />

      {/* Warm Glow Orbs - Gold, Emerald, Rust */}
      <div
        className="glow-orb top-[-10%] left-[5%] w-[45vw] h-[45vw]"
        style={{ background: "hsl(38,92%,56%)" }}
      />
      <div
        className="glow-orb bottom-[-10%] right-[5%] w-[40vw] h-[40vw]"
        style={{ background: "hsl(20,85%,55%)" }}
      />
      <div
        className="glow-orb top-[30%] right-[20%] w-[35vw] h-[35vw]"
        style={{ background: "hsl(145,75%,52%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 xl:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 py-20 lg:py-0 min-h-[calc(100svh-80px)] items-center">

        {/* LEFT — Typography & Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left z-10"
        >

          {/* Label Pill */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(217,130,43,0.08)",
              border: "1px solid rgba(217,130,43,0.22)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-soft"
              style={{ background: "hsl(20,85%,55%)" }}
            />
            <span
              className="text-[11px] font-bold tracking-widest uppercase font-heading"
              style={{ color: "hsl(38,92%,56%)" }}
            >
              PROFESSIONAL WEBSITE DEVELOPMENT
            </span>
          </motion.div>

          {/* Heading — clip-path line reveal */}
          <div className="overflow-visible mb-6">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[2.5rem] sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading"
              style={{ color: "hsl(38,60%,94%)" }}
            >
              <motion.span variants={lineReveal} className="block overflow-hidden">
                We Build{" "}
                <span className="text-gradient-purple-pink">Websites</span>
              </motion.span>
              <motion.span variants={lineReveal} className="block overflow-hidden">
                That Grow Your{" "}
                <span className="text-gradient-cyan-blue">Business.</span>
              </motion.span>
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg leading-relaxed max-w-[520px] mb-8 font-sans"
            style={{ color: "hsl(38,18%,70%)" }}
          >
            Your business deserves to be seen, trusted, and remembered. We build custom websites that reflect your vision, inspire confidence, and help your business stand out from the very first visit.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-primary text-[14px] font-bold tracking-wide transition-all duration-300 font-heading cursor-pointer"
            >
              Let&apos;s Build Your Website
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#advantages"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[14px] font-semibold transition-all duration-300 font-heading cursor-pointer"
              style={{
                border: "1px solid rgba(217,130,43,0.2)",
                color: "hsl(38,18%,70%)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(217,130,43,0.45)";
                el.style.color = "hsl(38,60%,94%)";
                el.style.background = "rgba(217,130,43,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(217,130,43,0.2)";
                el.style.color = "hsl(38,18%,70%)";
                el.style.background = "transparent";
              }}
            >
              OUR PROMISE
            </a>
          </motion.div>

          {/* Core Focus Items */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-6 w-full max-w-[500px]"
            style={{ borderTop: "1px solid rgba(217,130,43,0.12)" }}
          >
            {[
              "Built for Your Business",
              "Mobile-Friendly Website",
              "Easy to Use",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[12.5px] font-medium font-heading"
                style={{ color: "hsl(38,18%,70%)" }}
              >
                <CheckCircle2
                  className="w-4 h-4 shrink-0"
                  style={{ color: "hsl(145,75%,52%)" }}
                />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Animated Custom Composition */}
        <div className="flex items-center justify-center lg:justify-end relative z-10">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

            {/* Inner glow behind logo */}
            <div
              className="absolute w-64 h-64 rounded-full blur-[60px] pointer-events-none animate-pulse-soft"
              style={{ background: "hsl(38,92%,56%,0.18)" }}
            />

            {/* Orbit Ring 1 - Gold dashed */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] rounded-full border-dashed"
              style={{ border: "1px dashed rgba(217,130,43,0.22)" }}
            />

            {/* Orbit Ring 2 - Rust solid */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              className="absolute w-[60%] h-[60%] rounded-full"
              style={{ border: "1px solid rgba(210,100,50,0.18)" }}
            />

            {/* Central Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.3 }}
              className="absolute w-[45%] h-[45%] rounded-full glass-card flex items-center justify-center p-6 shadow-2xl select-none"
              style={{ border: "1px solid rgba(217,130,43,0.15)" }}
            >
              <Logo size={180} />
            </motion.div>

            {/* Floating Card 1: Custom Design */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.06 }}
              className="absolute top-[8%] left-[10%] glass-card p-3 rounded-2xl shadow-lg flex items-center gap-2.5 backdrop-blur-md"
              style={{ border: "1px solid rgba(217,130,43,0.2)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(217,130,43,0.12)", color: "hsl(38,92%,56%)" }}
              >
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p
                  className="text-[10px] font-semibold leading-none uppercase tracking-wider font-sans"
                  style={{ color: "hsl(38,18%,70%)" }}
                >
                  CUSTOM DESIGN
                </p>
                <p className="text-[12px] font-bold font-heading" style={{ color: "hsl(38,60%,94%)" }}>
                  Made for You
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2: Fast Loading */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.06 }}
              className="absolute bottom-[10%] left-[5%] glass-card p-3 rounded-2xl shadow-lg flex items-center gap-2.5 backdrop-blur-md"
              style={{ border: "1px solid rgba(210,100,50,0.2)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(210,100,50,0.1)", color: "hsl(20,85%,55%)" }}
              >
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p
                  className="text-[10px] font-semibold leading-none uppercase tracking-wider font-sans"
                  style={{ color: "hsl(38,18%,70%)" }}
                >
                  FAST LOADING
                </p>
                <p className="text-[12px] font-bold font-heading" style={{ color: "hsl(38,60%,94%)" }}>
                  Better Experience
                </p>
              </div>
            </motion.div>

            {/* Floating Card 3: Mobile Ready */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.06 }}
              className="absolute top-[28%] right-[-5%] glass-card p-3 rounded-2xl shadow-lg flex items-center gap-2.5 backdrop-blur-md"
              style={{ border: "1px solid rgba(50,200,100,0.2)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(50,200,100,0.1)", color: "hsl(145,75%,52%)" }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p
                  className="text-[10px] font-semibold leading-none uppercase tracking-wider font-sans"
                  style={{ color: "hsl(38,18%,70%)" }}
                >
                  MOBILE READY
                </p>
                <p className="text-[12px] font-bold font-heading" style={{ color: "hsl(38,60%,94%)" }}>
                  Looks Great Everywhere
                </p>
              </div>
            </motion.div>

            {/* Floating Card 4: Ongoing Support */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.06 }}
              className="absolute bottom-[15%] right-[5%] glass-card p-3 rounded-2xl shadow-lg flex items-center gap-2.5 backdrop-blur-md"
              style={{ border: "1px solid rgba(217,130,43,0.2)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(217,130,43,0.1)", color: "hsl(42,95%,52%)" }}
              >
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p
                  className="text-[10px] font-semibold leading-none uppercase tracking-wider font-sans"
                  style={{ color: "hsl(38,18%,70%)" }}
                >
                  ONGOING SUPPORT
                </p>
                <p className="text-[12px] font-bold font-heading" style={{ color: "hsl(38,60%,94%)" }}>
                  We&apos;re Here to Help
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
