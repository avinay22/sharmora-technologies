import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Get a Professional Website That Grows Your Business | Sharmora Technologies",
  description: "Professional website design and development services for businesses, startups, professionals, and personal brands. Sharmora Technologies builds fast, responsive, SEO-friendly websites with custom features designed to help you succeed online.",
  keywords: [
    "Sharmora Technologies",
    "Website Design Company",
    "Website Development Company",
    "Web Development Agency",
    "Web Design Agency",
    "Professional Website Design",
    "Custom Website Development",
    "Business Website",
    "Personal Website",
    "Portfolio Website",
    "Landing Page Development",
    "Responsive Website",
    "SEO Friendly Website",
    "Next.js Development",
    "React Website Development",
    "Ecommerce Website",
    "Website Designer India",
    "Website Developer India",
    "Website Development Services",
    "Modern Website Design",
    "Websites for Small Business",
    "Affordable Website Design",
    "Best Website Design Company",
  ],
  authors: [{ name: "Avinay Sharma", url: "mailto:sharmoratechnologies@gmail.com" }],
  creator: "Avinay Sharma",
  publisher: "Sharmora Technologies",
  verification: {
    google: "HsQQuc8F8gob7Zg22kH1M9tv2YRxnFrpbj1z3pt1EBw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060913] text-[#f3f4f6] selection:bg-[#8b5cf6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
