"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap-init";
import Button from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { 
    label: "Platform", 
    href: "/features",
    dropdown: [
      { 
        label: "Bespoke Websites", 
        href: "/websites",
        description: "High-performance Next.js 15 platforms engineered for conversion.",
        gradient: "bg-gradient-to-br from-[#1C2029] to-[#07080B]"
      },
      { 
        label: "Cloud DMS", 
        href: "/the-dms",
        description: "The operational core. Manage stock, track margins, stay compliant.",
        gradient: "bg-gradient-to-br from-[#252B37] to-[#0D0F14]"
      },
      { 
        label: "Intelligent Buying", 
        href: "/intelligent-buying",
        description: "Data-driven acquisitions with live market signals.",
        gradient: "bg-gradient-to-br from-[#182B21] to-[#0D0F14]"
      },
      { 
        label: "Automated Leads", 
        href: "/automated-leads",
        description: "Unify every portal enquiry into one inbox with instant replies.",
        gradient: "bg-gradient-to-br from-[#2B1D18] to-[#0D0F14]"
      },
      { 
        label: "Competitor Monitoring", 
        href: "/competitor-monitoring",
        description: "Track local rivals and get alerted on price drops.",
        gradient: "bg-gradient-to-br from-[#1C2029] to-[#0D0F14]"
      },
      { 
        label: "Daily Briefing", 
        href: "/daily-briefing",
        description: "The morning wire. Your forecourt's performance synthesized.",
        gradient: "bg-gradient-to-br from-[#2A2318] to-[#0D0F14]"
      },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(".mobile-menu", { opacity: 1, duration: 0.4, display: "flex" });
      gsap.fromTo(
        ".mobile-link",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, delay: 0.2 }
      );
    } else {
      gsap.to(".mobile-menu", { opacity: 0, duration: 0.4, display: "none" });
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[72px] z-50 transition-all duration-400 flex items-center px-6 lg:px-20 ${
          isScrolled
            ? "bg-[#07080B]/92 backdrop-blur-md border-bottom border-[#252B37]/40 border-b"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="font-syne font-700 text-[18px] text-[#EDE8DC] tracking-[-0.04em]">
            Forecour
          </span>
          <span className="font-syne font-700 text-[18px] text-[#39FF14] tracking-[-0.04em]">
            IQ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group/nav">
              <Link
                href={link.href}
                className="relative font-syne font-400 text-[14px] text-[#9DA8B7] hover:text-[#EDE8DC] tracking-[0.02em] group py-4 block"
              >
                {link.label}
                <span className="absolute bottom-3 left-0 w-0 h-[1px] bg-[#39FF14] transition-all duration-300 group-hover:w-full" />
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 pointer-events-none group-hover/nav:pointer-events-auto">
                  <div className="bg-[#0D0F14]/95 backdrop-blur-md border border-[#252B37]/60 rounded-[2px] w-[800px] lg:w-[960px] grid grid-cols-3 gap-6 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="group/item flex flex-col gap-4 p-4 border border-transparent hover:border-[#252B37]/40 hover:bg-[#07080B]/50 rounded-[2px] transition-all duration-300"
                      >
                        <div className={`w-full aspect-video rounded-[2px] border border-[#252B37]/40 flex items-center justify-center relative overflow-hidden ${sublink.gradient}`}>
                           <div className="absolute inset-0 bg-[#39FF14]/0 group-hover/item:bg-[#39FF14]/5 transition-colors duration-300" />
                           <div className="w-8 h-8 rounded-full border border-[#39FF14]/30 flex items-center justify-center scale-90 group-hover/item:scale-100 group-hover/item:border-[#39FF14] transition-all duration-300">
                             <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full opacity-50 group-hover/item:opacity-100 transition-opacity" />
                           </div>
                        </div>
                        <div>
                          <h4 className="font-syne font-700 text-[16px] text-[#EDE8DC] mb-1 group-hover/item:text-[#39FF14] transition-colors">
                            {sublink.label}
                          </h4>
                          <p className="font-cormorant font-300 text-[14px] text-[#9DA8B7] leading-snug">
                            {sublink.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden lg:block ml-auto">
          <Button href="/demo">Book a Demo</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden ml-auto text-[#EDE8DC]"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} strokeWidth={2} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu fixed inset-0 bg-[#07080B] z-[60] flex-col items-center justify-center hidden opacity-0">
        <button
          className="absolute top-6 right-6 text-[#EDE8DC]"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={24} strokeWidth={2} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="flex flex-col items-center gap-4">
              <Link
                href={link.href}
                className="mobile-link font-cormorant font-600 italic text-[40px] text-[#EDE8DC]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col items-center gap-3 mt-2 mb-6">
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.label}
                      href={sublink.href}
                      className="mobile-link font-syne font-400 text-[16px] text-[#9DA8B7]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-8 mobile-link">
            <Button href="/demo" onClick={() => setIsMenuOpen(false)}>
              Book a Demo
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
