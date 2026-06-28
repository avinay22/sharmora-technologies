"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Shield, Zap, Sparkles } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-pink/10 border border-accent-pink/20 mb-4">
            <span className="text-xs font-bold tracking-widest text-accent-pink uppercase font-heading">
              Meet The Founder
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            Meet the Person Behind <span className="text-gradient-purple-pink">Sharmora</span>.
          </h2>
        </div>

        {/* Profile Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* LEFT: Image Wrapper (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">

            {/* Multi-layered animated glowing borders */}
            <div className="absolute inset-0 -m-3 rounded-[32px] bg-gradient-to-tr from-primary via-accent-pink to-accent-amber opacity-30 blur-lg animate-pulse-soft pointer-events-none" />
            <div className="absolute inset-0 -m-1 rounded-[32px] bg-gradient-to-tr from-primary via-accent-pink to-accent-amber opacity-40 pointer-events-none" />

            {/* Main Picture Frame */}
            <div className="relative w-full aspect-[4/5] sm:max-w-[340px] rounded-[28px] overflow-hidden border border-white/20 shadow-2xl bg-secondary/80 z-10 group">
              <Image
                src="/founder.png"
                alt="Avinay Sharma, Founder"
                fill
                sizes="(max-w-768px) 100vw, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Authentication Overlay */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-3.5 rounded-xl glass-card border border-white/10 text-center select-none">
                <p className="text-[10px] text-gray-300 font-semibold tracking-wider leading-none uppercase">
                  Avinay Sharma
                </p>
                <p className="text-[9px] text-[#f472b6] font-bold mt-1 tracking-wide leading-none">
                  Founder • Sharmora Technologies
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Bio details (7 cols) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start z-10">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col mb-6">
                <span className="text-[13px] font-bold text-accent-pink tracking-widest uppercase font-heading">
                  Founder | Sharmora Technologies
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-heading">
                  Avinay Sharma
                </h3>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-sans">
                "I'm Avinay Sharma, Founder. I believe a great website should do more than look beautiful.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-sans">
                My goal isn't just to build a website. It's to help your business create a strong first impression, earn people's trust, and grow online with confidence."
              </p>

              {/* Small credentials / principles list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 w-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white font-heading">Personal Attention</h4>
                    <p className="text-[11px] text-gray-400 font-sans mt-0.5">Every project is handled with care, from the first conversation to the final launch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-pink/10 text-accent-pink mt-0.5 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white font-heading">Direct Communication</h4>
                    <p className="text-[11px] text-gray-400 font-sans mt-0.5">You'll always communicate directly with me. No middlemen. No confusion.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
