"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Sparkles, Send } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom Website Development",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMessageString = () => {
    return `Hello Avinay, I would like to inquire about a project:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Project Interest:* ${formData.projectType}\n\n*Message Details:* ${formData.message}`;
  };

  const getEmailBodyString = () => {
    return `Hello Avinay,\n\nI would like to inquire about a project:\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Interest: ${formData.projectType}\n\nProject Details:\n${formData.message}`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    const whatsappUrl = `https://wa.me/917896554039?text=${encodeURIComponent(getMessageString())}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    const mailtoUrl = `mailto:sharmoratechnologies@gmail.com?subject=Project Inquiry - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(getEmailBodyString())}`;
    window.open(mailtoUrl, "_self");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(217,130,43,0.18)",
    background: "rgba(24,18,15,0.7)",
    color: "hsl(38,60%,94%)",
    fontSize: "14px",
    fontWeight: 500,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "hsl(38,92%,56%)";
    e.target.style.boxShadow = "0 0 0 3px rgba(217,130,43,0.12)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(217,130,43,0.18)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0c0807" }}
    >
      {/* Warm glow blobs */}
      <div
        className="absolute top-[40%] left-[-15%] w-[45vw] h-[45vw] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(217,130,43,0.05)" }}
      />
      <div
        className="absolute top-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(210,100,50,0.05)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-5xl mx-auto">

          {/* LEFT: Info & Quick Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <div
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
                Connect
              </span>
            </div>

            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 font-heading"
              style={{ color: "hsl(38,60%,94%)" }}
            >
              Let&apos;s Build Your{" "}
              <span className="text-gradient-purple-pink">Vision</span>.
            </h2>

            <p
              className="text-base leading-relaxed mb-8 max-w-md font-sans"
              style={{ color: "hsl(38,18%,70%)" }}
            >
              Have a custom project in mind? Fill out the form, choose your preferred communication channel, and send it directly to founder Avinay Sharma.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-4 w-full">

              <a
                href="https://wa.me/917896554039"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group"
                style={{
                  border: "1px solid rgba(217,130,43,0.1)",
                  background: "rgba(217,130,43,0.03)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(217,130,43,0.3)";
                  el.style.background = "rgba(217,130,43,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(217,130,43,0.1)";
                  el.style.background = "rgba(217,130,43,0.03)";
                }}
              >
                <div
                  className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(217,130,43,0.12)", color: "hsl(38,92%,56%)" }}
                >
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="text-[10px] font-extrabold tracking-wider uppercase font-sans"
                    style={{ color: "hsl(38,18%,60%)" }}
                  >
                    WhatsApp Chat
                  </span>
                  <span
                    className="font-bold text-sm font-heading"
                    style={{ color: "hsl(38,60%,94%)" }}
                  >
                    Direct Reply (+91 78965 54039)
                  </span>
                </div>
              </a>

              <a
                href="mailto:sharmoratechnologies@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group"
                style={{
                  border: "1px solid rgba(210,100,50,0.1)",
                  background: "rgba(210,100,50,0.03)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(210,100,50,0.3)";
                  el.style.background = "rgba(210,100,50,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(210,100,50,0.1)";
                  el.style.background = "rgba(210,100,50,0.03)";
                }}
              >
                <div
                  className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(210,100,50,0.12)", color: "hsl(20,85%,55%)" }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="text-[10px] font-extrabold tracking-wider uppercase font-sans"
                    style={{ color: "hsl(38,18%,60%)" }}
                  >
                    Email Address
                  </span>
                  <span
                    className="font-bold text-sm font-heading"
                    style={{ color: "hsl(38,60%,94%)" }}
                  >
                    sharmoratechnologies@gmail.com
                  </span>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-4 rounded-2xl font-sans"
                style={{
                  border: "1px solid rgba(50,200,100,0.1)",
                  background: "rgba(50,200,100,0.03)",
                }}
              >
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "rgba(50,200,100,0.1)", color: "hsl(145,75%,52%)" }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="text-[10px] font-extrabold tracking-wider uppercase"
                    style={{ color: "hsl(38,18%,60%)" }}
                  >
                    Direct Call
                  </span>
                  <span
                    className="font-bold text-sm font-heading"
                    style={{ color: "hsl(38,60%,94%)" }}
                  >
                    +91 78965 54039
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:col-span-7 w-full"
          >
            <div
              className="glass-card rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden text-left"
              style={{ border: "1px solid rgba(217,130,43,0.1)" }}
            >
              <div className="flex items-center gap-2 mb-6 select-none">
                <Sparkles
                  className="w-4 h-4 animate-pulse-soft"
                  style={{ color: "hsl(20,85%,55%)" }}
                />
                <span
                  className="text-[11px] font-extrabold uppercase tracking-widest font-heading"
                  style={{ color: "hsl(38,18%,70%)" }}
                >
                  Compose Project Details
                </span>
              </div>

              <form className="flex flex-col gap-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-extrabold tracking-wider uppercase font-heading"
                      style={{ color: "hsl(38,18%,70%)" }}
                    >
                      Your Name{" "}
                      <span style={{ color: "hsl(20,85%,55%)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-extrabold tracking-wider uppercase font-heading"
                      style={{ color: "hsl(38,18%,70%)" }}
                    >
                      Your Email{" "}
                      <span style={{ color: "hsl(20,85%,55%)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="projectType"
                    className="text-[10px] font-extrabold tracking-wider uppercase font-heading"
                    style={{ color: "hsl(38,18%,70%)" }}
                  >
                    Project Requirements
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    >
                      <option style={{ background: "#160f0a" }} value="Custom Website Development">Custom Website Development</option>
                      <option style={{ background: "#160f0a" }} value="E-Commerce Storefront">E-Commerce Storefront</option>
                      <option style={{ background: "#160f0a" }} value="Business Automation Dashboard">Business Automation Dashboard</option>
                      <option style={{ background: "#160f0a" }} value="Mobile UI & Web Experience">Mobile UI &amp; Web Experience</option>
                      <option style={{ background: "#160f0a" }} value="Mastermind Consultation">Mastermind Consultation</option>
                    </select>
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4"
                      style={{ color: "hsl(38,18%,60%)" }}
                    >
                      ▼
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-extrabold tracking-wider uppercase font-heading"
                    style={{ color: "hsl(38,18%,70%)" }}
                  >
                    Describe your custom features{" "}
                    <span style={{ color: "hsl(20,85%,55%)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Provide details about your custom integrations, business objectives, and desired layout style..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                {/* Send Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full btn-primary text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer font-heading"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    Send via WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer font-heading"
                    style={{
                      border: "1px solid rgba(217,130,43,0.2)",
                      color: "hsl(38,18%,70%)",
                      background: "rgba(217,130,43,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(217,130,43,0.4)";
                      el.style.color = "hsl(38,60%,94%)";
                      el.style.background = "rgba(217,130,43,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(217,130,43,0.2)";
                      el.style.color = "hsl(38,18%,70%)";
                      el.style.background = "rgba(217,130,43,0.03)";
                    }}
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    Send via Email
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
