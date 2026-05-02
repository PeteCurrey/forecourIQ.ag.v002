"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturesPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((ref) => {
        if (!ref) return;
        gsap.fromTo(
          ref.querySelectorAll(".animate-reveal"),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 70%",
            },
          }
        );
      });
    }, sectionRefs);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-[#07080B] flex items-center px-6 lg:px-20 pt-20 overflow-hidden">
        <div className="max-w-container mx-auto w-full">
          <Eyebrow className="mb-8">The Platform</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[80px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8">
            Everything a modern dealership needs. In one platform.
          </h1>
          <p className="font-cormorant font-300 italic text-[20px] text-[#9DA8B7] max-w-lg">
            Three modules. Unified data. One login.
          </p>
        </div>
      </section>

      {/* Features Directory Grid */}
      <section className="bg-[#0D0F14] py-[100px] lg:py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Website */}
            <Link href="/websites" className="group block bg-[#07080B] border border-[#252B37] p-8 lg:p-12 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-[#39FF14] w-6 h-6" />
              </div>
              <h3 className="font-syne font-700 text-[24px] lg:text-[32px] text-[#EDE8DC] mb-4">Bespoke Websites</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] mb-8">
                High-performance Next.js 15 platforms engineered for speed, local SEO dominance, and unparalleled conversion rates.
              </p>
              <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-widest group-hover:underline">Explore Websites</span>
            </Link>

            {/* DMS */}
            <Link href="/the-dms" className="group block bg-[#07080B] border border-[#252B37] p-8 lg:p-12 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-[#39FF14] w-6 h-6" />
              </div>
              <h3 className="font-syne font-700 text-[24px] lg:text-[32px] text-[#EDE8DC] mb-4">Cloud DMS</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] mb-8">
                The operational core. Manage stock, track real-time margins, ensure FCA compliance, and push inventory everywhere instantly.
              </p>
              <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-widest group-hover:underline">Explore DMS</span>
            </Link>

            {/* Intelligent Buying */}
            <Link href="/intelligent-buying" className="group block bg-[#07080B] border border-[#252B37] p-8 lg:p-12 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-[#39FF14] w-6 h-6" />
              </div>
              <h3 className="font-syne font-700 text-[24px] lg:text-[32px] text-[#EDE8DC] mb-4">Intelligent Buying</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] mb-8">
                Data-driven acquisitions. Receive live market signals to buy the right stock, at the right price, for maximum margin.
              </p>
              <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-widest group-hover:underline">Explore Buying Intel</span>
            </Link>

            {/* Automated Leads */}
            <Link href="/automated-leads" className="group block bg-[#07080B] border border-[#252B37] p-8 lg:p-12 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-[#39FF14] w-6 h-6" />
              </div>
              <h3 className="font-syne font-700 text-[24px] lg:text-[32px] text-[#EDE8DC] mb-4">Automated Leads</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] mb-8">
                Zero lead leakage. Unify AutoTrader, eBay, and web leads into a single inbox with instant automated follow-ups 24/7.
              </p>
              <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-widest group-hover:underline">Explore Lead Management</span>
            </Link>

            {/* Competitor Monitoring */}
            <Link href="/competitor-monitoring" className="group block bg-[#07080B] border border-[#252B37] p-8 lg:p-12 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-[#39FF14] w-6 h-6" />
              </div>
              <h3 className="font-syne font-700 text-[24px] lg:text-[32px] text-[#EDE8DC] mb-4">Competitor Monitoring</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] mb-8">
                Track local rivals in real-time. Receive instant alerts when they drop prices or sell vehicles you compete against.
              </p>
              <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-widest group-hover:underline">Explore Monitoring</span>
            </Link>

            {/* Daily Briefing */}
            <Link href="/daily-briefing" className="group block bg-[#07080B] border border-[#252B37] p-8 lg:p-12 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-[#39FF14] w-6 h-6" />
              </div>
              <h3 className="font-syne font-700 text-[24px] lg:text-[32px] text-[#EDE8DC] mb-4">Daily Briefing</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] mb-8">
                The morning wire. Wake up to a synthesized summary of overnight leads, pricing actions required, and market shifts.
              </p>
              <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-widest group-hover:underline">Explore Briefings</span>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}
