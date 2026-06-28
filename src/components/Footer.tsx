import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Advantages", href: "/#advantages" },
    { name: "Founder", href: "/#founder" },
    { name: "Let's Connect", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#04060d] text-gray-300 border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Company Column */}
        <div className="flex flex-col gap-4 text-left">
          <Link href="/" className="w-fit">
            <Logo size={110} />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-2 font-sans">
            Building solutions, delivering success. We engineer bespoke, feature-rich web systems refined by our mastermind strategy.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="text-left md:pl-12">
          <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-white mb-4">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3 font-sans">
            {links.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-[#8b5cf6] text-sm transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="text-left">
          <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-white mb-4">
            Direct Contacts
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400 font-sans">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
              <a href="mailto:sharmoratechnologies@gmail.com" className="hover:text-[#8b5cf6] transition-colors">
                sharmoratechnologies@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
              <a href="tel:+917896554039" className="hover:text-[#8b5cf6] transition-colors">
                +91 78965 54039
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
              <a
                href="https://wa.me/917896554039"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
              <span>
                Assam
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs font-sans">
          &copy; {currentYear} Sharmora Technologies. All rights reserved. • Founded by Avinay Sharma.
        </p>
        <div className="flex gap-6 text-xs text-gray-500 font-sans">
          <span>100% Authentic Code & Media</span>
        </div>
      </div>
    </footer>
  );
};
