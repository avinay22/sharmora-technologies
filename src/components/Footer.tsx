"use client";

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
    <footer
      className="pt-16 pb-8 relative z-10"
      style={{
        background: "#080504",
        borderTop: "1px solid rgba(217,130,43,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Company Column */}
        <div className="flex flex-col gap-4 text-left">
          <Link href="/" className="w-fit">
            <Logo size={110} />
          </Link>
          <p
            className="text-sm leading-relaxed max-w-xs mt-2 font-sans"
            style={{ color: "hsl(38,14%,52%)" }}
          >
            Building solutions, delivering success. We engineer bespoke, feature-rich web systems refined by our mastermind strategy.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="text-left md:pl-12">
          <h4
            className="font-heading text-sm font-bold tracking-wider uppercase mb-4"
            style={{ color: "hsl(38,60%,94%)" }}
          >
            Navigation
          </h4>
          <ul className="flex flex-col gap-3 font-sans">
            {links.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "hsl(38,14%,52%)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "hsl(38,92%,56%)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "hsl(38,14%,52%)")
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="text-left">
          <h4
            className="font-heading text-sm font-bold tracking-wider uppercase mb-4"
            style={{ color: "hsl(38,60%,94%)" }}
          >
            Direct Contacts
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-sans">
            <li className="flex items-start gap-3">
              <Mail
                className="w-5 h-5 shrink-0 mt-0.5"
                style={{ color: "hsl(38,92%,56%)" }}
              />
              <a
                href="mailto:sharmoratechnologies@gmail.com"
                className="transition-colors duration-200"
                style={{ color: "hsl(38,14%,52%)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "hsl(38,92%,56%)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "hsl(38,14%,52%)")
                }
              >
                sharmoratechnologies@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone
                className="w-5 h-5 shrink-0 mt-0.5"
                style={{ color: "hsl(38,92%,56%)" }}
              />
              <a
                href="tel:+917896554039"
                className="transition-colors duration-200"
                style={{ color: "hsl(38,14%,52%)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "hsl(38,92%,56%)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "hsl(38,14%,52%)")
                }
              >
                +91 78965 54039
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageSquare
                className="w-5 h-5 shrink-0 mt-0.5"
                style={{ color: "hsl(38,92%,56%)" }}
              />
              <a
                href="https://wa.me/917896554039"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "hsl(38,14%,52%)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "hsl(38,92%,56%)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "hsl(38,14%,52%)")
                }
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                className="w-5 h-5 shrink-0 mt-0.5"
                style={{ color: "hsl(38,92%,56%)" }}
              />
              <span style={{ color: "hsl(38,14%,52%)" }}>Assam</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(217,130,43,0.08)" }}
      >
        <p className="text-xs font-sans" style={{ color: "hsl(38,10%,42%)" }}>
          &copy; {currentYear} Sharmora Technologies. All rights reserved. • Founded by Avinay Sharma.
        </p>
        <div className="flex gap-6 text-xs font-sans" style={{ color: "hsl(38,10%,42%)" }}>
          <span>100% Authentic Code &amp; Media</span>
        </div>
      </div>
    </footer>
  );
};
