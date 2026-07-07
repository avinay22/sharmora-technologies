"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Menu } from "lucide-react";
import { Logo } from "./Logo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Advantages", href: "/#advantages" },
    { label: "Founder", href: "/#founder" },
    { label: "Let's Connect", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <Logo size={48} />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13.5px] font-medium transition-colors duration-200 relative group font-heading"
                style={{ color: "hsl(38 18% 70%)" }}
              >
                <span className="group-hover:text-[hsl(38,60%,94%)] transition-colors duration-200">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[hsl(38,92%,56%)] to-[hsl(20,85%,55%)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA - WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/917896554039"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary text-[13px] font-bold tracking-wide transition-all duration-300 cursor-pointer font-heading"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-colors"
            style={{
              borderColor: "rgba(217,130,43,0.2)",
              color: "hsl(38 18% 70%)",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 md:hidden"
            style={{
              background: "rgba(12,8,7,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-4 text-2xl font-bold border-b font-heading transition-colors duration-200"
                    style={{
                      color: "hsl(38 60% 94%)",
                      borderColor: "rgba(217,130,43,0.12)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "hsl(38,92%,56%)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "hsl(38 60% 94%)")
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="mt-8"
              >
                <a
                  href="https://wa.me/917896554039"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full btn-primary text-base font-bold font-heading"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
