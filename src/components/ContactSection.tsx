"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, ArrowRight, Sparkles, Send } from "lucide-react";

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

  return (
    <section id="contact" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-[40%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-5xl mx-auto">
          
          {/* LEFT: Info & Quick Contacts */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-4">
              <span className="text-xs font-bold tracking-widest text-[#a78bfa] uppercase font-heading">
                Connect
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-heading">
              Let's Build Your <span className="text-gradient-purple-pink">Vision</span>.
            </h2>
            
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md font-sans">
              Have a custom project in mind? Fill out the form, choose your preferred communication channel, and send it directly to founder Avinay Sharma.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 w-full">
              
              <a 
                href="https://wa.me/917896554039"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase font-sans">WhatsApp Chat</span>
                  <span className="font-bold text-white text-sm font-heading">Direct Reply (+91 78965 54039)</span>
                </div>
              </a>

              <a 
                href="mailto:sharmoratechnologies@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase font-sans">Email Address</span>
                  <span className="font-bold text-white text-sm font-heading">sharmoratechnologies@gmail.com</span>
                </div>
              </a>

              <div 
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/3 font-sans"
              >
                <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase">Direct Call</span>
                  <span className="font-bold text-white text-sm font-heading">+91 78965 54039</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Input Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden text-left">
              
              <div className="flex items-center gap-2 mb-6 select-none">
                <Sparkles className="w-4 h-4 text-accent-pink animate-pulse-soft" />
                <span className="text-[11px] font-extrabold text-gray-300 uppercase tracking-widest font-heading">Compose Project Details</span>
              </div>

              <form className="flex flex-col gap-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-extrabold text-gray-300 tracking-wider uppercase font-heading">
                      Your Name <span className="text-accent-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/3 text-white text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all placeholder:text-gray-500 font-medium"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-extrabold text-gray-300 tracking-wider uppercase font-heading">
                      Your Email <span className="text-accent-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/3 text-white text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all placeholder:text-gray-500 font-medium"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-[10px] font-extrabold text-gray-300 tracking-wider uppercase font-heading">
                    Project Requirements
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/3 text-white text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option className="bg-[#0b0f19] text-white" value="Custom Website Development">Custom Website Development</option>
                      <option className="bg-[#0b0f19] text-white" value="E-Commerce Storefront">E-Commerce Storefront</option>
                      <option className="bg-[#0b0f19] text-white" value="Business Automation Dashboard">Business Automation Dashboard</option>
                      <option className="bg-[#0b0f19] text-white" value="Mobile UI & Web Experience">Mobile UI & Web Experience</option>
                      <option className="bg-[#0b0f19] text-white" value="Mastermind Consultation">Mastermind Consultation</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-extrabold text-gray-300 tracking-wider uppercase font-heading">
                    Describe your custom features <span className="text-accent-pink">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Provide details about your custom integrations, business objectives, and desired layout style..."
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/3 text-white text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all resize-none placeholder:text-gray-500 font-medium"
                  />
                </div>

                {/* Automated Send Channels */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  {/* WhatsApp send button */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full btn-primary text-sm font-bold tracking-wide transition-all duration-300 text-white cursor-pointer font-heading"
                  >
                    <MessageSquare className="w-4.5 h-4.5 shrink-0" />
                    Send via WhatsApp
                  </button>
                  
                  {/* Email send button */}
                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/15 hover:border-white/30 bg-white/3 hover:bg-white/5 text-gray-200 hover:text-white text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer font-heading"
                  >
                    <Send className="w-4.5 h-4.5 shrink-0" />
                    Send via Email
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
