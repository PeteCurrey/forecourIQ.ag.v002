import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gold" | "prominent";
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
    primary: "bg-transparent text-[#EDE8DC] border border-[#0EA5E9] px-[28px] py-[12px] hover:bg-[#0EA5E9]/[0.08] hover:text-white",
    secondary: "bg-transparent text-[#EDE8DC] border border-[#252B37] px-6 py-3 hover:border-[#0EA5E9] hover:text-[#0EA5E9]",
    ghost: "bg-transparent text-[#EDE8DC] font-400 normal-case tracking-normal hover:text-[#0EA5E9] p-0 h-auto",
    gold: "bg-transparent text-[#EDE8DC] border border-[#0EA5E9] px-[28px] py-[12px] hover:bg-[#0EA5E9]/[0.08] hover:text-white",
    prominent: "bg-transparent text-[#EDE8DC] border-[1.5px] border-[#0EA5E9] px-[28px] py-[12px] hover:bg-[#0EA5E9]/[0.08] hover:text-white",
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
