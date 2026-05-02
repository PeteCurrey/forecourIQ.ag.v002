import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-4 h-[1px] bg-[#39FF14] opacity-60" />
      <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}
