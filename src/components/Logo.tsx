"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image
        src="/logo.png"
        alt="Sharmora Technologies Logo"
        width={size}
        height={size}
        priority
        className="rounded-full"
        style={{ width: size, height: size, objectFit: "cover" }}
      />
    </div>
  );
};
