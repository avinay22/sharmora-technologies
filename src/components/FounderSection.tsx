"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Sparkles } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section
      id="founder"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0c0807" }}
    >
      {/* Decorative Orbs */}
      <div
        className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(217,130,43,0.06)" }}
      />
      <div
        className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(210,100,50,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{
              background: "rgba(210,100,50,0.1)",
              border: "1px solid rgba(210,100,50,0.25)",
            }}
          >
            <span
              className="text-xs font-bold tracking-widest uppercase font-heading"
              style={{ color: "hsl(20,85%,55%)" }}
            >
              Meet The Founder
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight font-heading"
            style={{ color: "hsl(38,60%,94%)" }}
          >
            Meet the Person Behind{" "}
            <span className="text-gradient-purple-pink">Sharmora</span>.
          </motion.h2>
        </div>

        {/* Profile Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* LEFT: Image Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Multi-layer animated glowing border */}
            <div
              className="absolute inset-0 -m-3 rounded-[32px] opacity-35 blur-lg animate-pulse-soft pointer-events-none"
              style={{
                background: "linear-gradient(135deg, hsl(38,92%,56%), hsl(20,85%,55%), hsl(42,95%,52%))",
              }}
            />
            <div
              className="absolute inset-0 -m-1 rounded-[32px] opacity-45 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, hsl(38,92%,56%), hsl(20,85%,55%), hsl(42,95%,52%))",
              }}
            />

            {/* Picture Frame */}
            <div
              className="relative w-full aspect-[4/5] sm:max-w-[340px] rounded-[28px] overflow-hidden shadow-2xl z-10 group"
              style={{
                border: "1px solid rgba(217,130,43,0.25)",
                background: "rgba(24,18,15,0.8)",
              }}
            >
              <Image
                src="/founder.png"
                alt="Avinay Sharma, Founder"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Name overlay */}
              <div
                className="absolute bottom-4 left-4 right-4 py-2 px-3.5 rounded-xl glass-card text-center select-none"
                style={{ border: "1px solid rgba(217,130,43,0.15)" }}
              >
                <p
                  className="text-[10px] font-semibold tracking-wider leading-none uppercase"
                  style={{ color: "hsl(38,18%,70%)" }}
                >
                  Avinay Sharma
                </p>
                <p
                  className="text-[9px] font-bold mt-1 tracking-wide leading-none"
                  style={{ color: "hsl(20,85%,55%)" }}
                >
                  Founder • Sharmora Technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Bio details */}
          <div className="lg:col-span-7 text-left flex flex-col items-start z-10">

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <div className="flex flex-col mb-6">
                <span
                  className="text-[13px] font-bold tracking-widest uppercase font-heading"
                  style={{ color: "hsl(20,85%,55%)" }}
                >
                  Founder | Sharmora Technologies
                </span>
                <h3
                  className="text-3xl sm:text-4xl font-extrabold mt-1 font-heading"
                  style={{ color: "hsl(38,60%,94%)" }}
                >
                  Avinay Sharma
                </h3>
              </div>

              <p
                className="text-base sm:text-lg leading-relaxed mb-4 font-sans"
                style={{ color: "hsl(38,18%,70%)" }}
              >
                &quot;I&apos;m Avinay Sharma, Founder. I believe a great website should do more than look beautiful.
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed mb-8 font-sans"
                style={{ color: "hsl(38,18%,70%)" }}
              >
                My goal isn&apos;t just to build a website. It&apos;s to help your business create a strong first impression, earn people&apos;s trust, and grow online with confidence.&quot;
              </p>

              {/* Credentials */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 w-full"
                style={{ borderTop: "1px solid rgba(217,130,43,0.1)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg mt-0.5 shrink-0"
                    style={{ background: "rgba(217,130,43,0.1)", color: "hsl(38,92%,56%)" }}
                  >
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4
                      className="text-[13px] font-bold font-heading"
                      style={{ color: "hsl(38,60%,94%)" }}
                    >
                      Personal Attention
                    </h4>
                    <p
                      className="text-[11px] font-sans mt-0.5"
                      style={{ color: "hsl(38,18%,60%)" }}
                    >
                      Every project is handled with care, from the first conversation to the final launch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg mt-0.5 shrink-0"
                    style={{ background: "rgba(210,100,50,0.1)", color: "hsl(20,85%,55%)" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4
                      className="text-[13px] font-bold font-heading"
                      style={{ color: "hsl(38,60%,94%)" }}
                    >
                      Direct Communication
                    </h4>
                    <p
                      className="text-[11px] font-sans mt-0.5"
                      style={{ color: "hsl(38,18%,60%)" }}
                    >
                      You&apos;ll always communicate directly with me. No middlemen. No confusion.
                    </p>
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
