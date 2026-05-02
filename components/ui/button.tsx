import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 rounded-[2px] font-syne font-700 text-[13px] tracking-[0.08em] uppercase whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#39FF14] text-[#07080B] px-6 py-3 hover:bg-[#C79260]",
    secondary: "bg-transparent text-[#EDE8DC] border border-[#252B37] px-6 py-3 hover:border-[#EDE8DC]",
    ghost: "bg-transparent text-[#EDE8DC] font-400 normal-case tracking-normal hover:text-[#39FF14] p-0 h-auto",
  };

  const content = (
    <>
      {children}
      {variant === "ghost" && <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], variant === "ghost" && "group", className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], variant === "ghost" && "group", className)} {...props}>
      {content}
    </button>
  );
}
