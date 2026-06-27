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
  title: "Sharmora Technologies | Custom Premium Web Agency",
  description: "Founded by Avinay Sharma, Sharmora Technologies builds premium, fast, and highly customized websites with tailored business-driven features, refined by our mastermind.",
  keywords: [
    "Sharmora Technologies",
    "Avinay Sharma",
    "Web Design Agency",
    "Custom Website Development",
    "Premium Web Design",
    "Animated Websites",
    "Business Automation"
  ],
  authors: [{ name: "Avinay Sharma", url: "mailto:sharmoratechnologies@gmail.com" }],
  creator: "Avinay Sharma",
  publisher: "Sharmora Technologies",
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
