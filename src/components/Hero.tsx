"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Sparkles, MessageSquare, Zap } from "lucide-react";
import { Logo } from "./Logo";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden mesh-bg pt-20">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-40" />

      {/* Decorative Glowing Mesh Orbs */}
      <div className="glow-orb top-[-10%] left-[5%] w-[45vw] h-[45vw] bg-primary/20" />
      <div className="glow-orb bottom-[-10%] right-[5%] w-[40vw] h-[40vw] bg-accent-pink/15" />
      <div className="glow-orb top-[30%] right-[20%] w-[35vw] h-[35vw] bg-light-blue/15" />

      <div className="relative max-w-7xl mx-auto px-6 xl:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 py-20 lg:py-0 min-h-[calc(100svh-80px)] items-center">

        {/* LEFT — Typography & Description */}
        <div className="flex flex-col items-start text-left z-10">

          {/* Label Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse-soft" />
            <span className="text-[#a78bfa] text-[11px] font-bold tracking-widest uppercase font-heading">
              PROFESSIONAL WEBSITE DEVELOPMENT
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-heading"
          >
            We Build{" "}
            <span className="text-gradient-purple-pink">Websites</span> <br />
            That Grow Your <span className="text-gradient-cyan-blue">Business</span>.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-[520px] mb-8 font-sans"
          >
            Your business deserves to be seen, trusted, and remembered. We build custom websites that reflect your vision, inspire confidence, and help your business stand out from the very first visit.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-primary text-[14px] font-bold tracking-wide transition-all duration-300 hover:shadow-xl font-heading text-white cursor-pointer"
            >
              Let's Build Your Website
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#advantages"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border text-gray-200 hover:text-white text-[14px] font-semibold hover:border-gray-500 hover:bg-light-gray transition-all duration-300 font-heading cursor-pointer"
            >
              OUR PROMISE
            </a>
          </motion.div>

          {/* Core Focus Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 w-full max-w-[500px]"
          >
            {[
              "Built for Your Business",
              "Mobile-Friendly Website",
              "Easy to Use",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[12.5px] font-medium text-gray-300 font-heading">
                <CheckCircle2 className="w-4 h-4 text-accent-pink shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Animated Custom Mastermind Composition */}
        <div className="flex items-center justify-center lg:justify-end relative z-10">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

            {/* Soft inner glow behind central logo */}
            <div className="absolute w-64 h-64 rounded-full bg-primary/20 blur-[60px] pointer-events-none animate-pulse-soft" />

            {/* Orbit Ring 1 - Dashed Accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-gray-700/50"
            />

            {/* Orbit Ring 2 - Solid Accent */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-[60%] h-[60%] rounded-full border border-gray-800/40"
            />

            {/* Central Mastermind Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.3 }}
              className="absolute w-[45%] h-[45%] rounded-full glass-card border border-white/10 flex items-center justify-center p-6 shadow-2xl select-none"
            >
              <Logo size={180} />
            </motion.div>

            {/* Floating Orbiter Card 1: Custom Codes */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[8%] left-[10%] glass-card p-3 rounded-2xl border border-primary/20 shadow-lg flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-semibold leading-none uppercase tracking-wider font-sans">CUSTOM DESIGN
                </p>
                <p className="text-[12px] text-white font-bold font-heading">Made for You</p>
              </div>
            </motion.div>

            {/* Floating Orbiter Card 2: Speed / UX */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[10%] left-[5%] glass-card p-3 rounded-2xl border border-accent-pink/20 shadow-lg flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-pink/10 text-accent-pink flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-semibold leading-none uppercase tracking-wider font-sans">FAST LOADING</p>
                <p className="text-[12px] text-white font-bold font-heading">Better Experience</p>
              </div>
            </motion.div>

            {/* Floating Orbiter Card 3: Interactive Animations */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[28%] right-[-5%] glass-card p-3 rounded-2xl border border-cyan-400/20 shadow-lg flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-semibold leading-none uppercase tracking-wider font-sans">MOBILE READY</p>
                <p className="text-[12px] text-white font-bold font-heading">Looks Great Everywhere</p>
              </div>
            </motion.div>

            {/* Floating Orbiter Card 4: Strategy */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[15%] right-[5%] glass-card p-3 rounded-2xl border border-amber-500/20 shadow-lg flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-semibold leading-none uppercase tracking-wider font-sans">ONGOING SUPPORT</p>
                <p className="No AI text-[12px] text-white font-bold font-heading">We're Here to Help</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
