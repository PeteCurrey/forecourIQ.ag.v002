"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";
import ClosingCTA from "@/components/home/closing-cta";

export default function IntelligentBuyingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
      
      gsap.fromTo(
        ".reveal-section",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reveal-section",
            start: "top 80%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-[#07080B]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 lg:px-20 pt-20 overflow-hidden">
        <div className="max-w-container mx-auto w-full relative z-10">
          <Eyebrow className="mb-8 reveal-text">Intelligent Stock Buying</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[80px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8 reveal-text">
            Data-Driven Acquisitions.<br />Identify appreciating assets.
          </h1>
          <p className="font-cormorant font-300 italic text-[22px] text-[#9DA8B7] max-w-2xl reveal-text">
            ForecourIQ continuously analyzes high-end market trends, global price movements, and auction data to spot appreciating prestige assets before the curve. Stop guessing, start investing.
          </p>
        </div>
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] aspect-square bg-[#3DB87A]/[0.02] rounded-full blur-[120px]" />
      </section>

      {/* Deep Dive Feature */}
      <section className="reveal-section bg-[#0D0F14] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mb-12 leading-tight">
              Actionable intelligence for the prestige market.
            </h2>
            <div className="space-y-10">
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#39FF14] mb-4 uppercase tracking-widest">Trend & Asset Analysis</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  We process millions of data points from global auctions to identify macro trends. Detect when specific limited-run models transition from depreciation to appreciation.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#39FF14] mb-4 uppercase tracking-widest">Margin Forecasting</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Input a direct-to-seller or auction price, and our system calculates your projected net margin based on historic prep costs for that specific marque, alongside the current retail ceiling.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* UI Mockup */}
            <div className="relative aspect-[4/3] bg-[#07080B] border border-[#252B37] rounded-[2px] p-6 lg:p-10 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center border-b border-[#252B37] pb-6 mb-6">
                <span className="font-mono text-[12px] text-[#5C6678] tracking-widest uppercase">Command Centre</span>
                <span className="font-mono text-[12px] text-[#3DB87A] uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3DB87A] animate-pulse" />
                  Live Feeds
                </span>
              </div>
              <div className="flex-1 space-y-4">
                {[
                  { v: "Porsche 911 GT3 (992) 2022", d: "APPRECIATING", r: "Up 4.2% (90d)", m: "+£12.5k", a: "STRONG BUY", c: "#3DB87A" },
                  { v: "Aston Martin Vantage V8 2020", d: "STABLE", r: "Up 1.1% (90d)", m: "+£8.2k", a: "BUY", c: "#3DB87A" },
                  { v: "Ferrari Roma 2021", d: "SOFTENING", r: "Down 2.4% (90d)", m: "+£6.5k", a: "HOLD", c: "#D4922A" },
                  { v: "Bentley Continental GT 2019", d: "DEPRECIATING", r: "Down 5.1% (90d)", m: "+£4.1k", a: "PASS", c: "#C94040" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#252B37]/10 pb-3">
                    <span className="font-mono text-[11px] text-[#EDE8DC]">{row.v}</span>
                    <div className="flex gap-6 items-center">
                      <span className="font-mono text-[10px] text-[#5C6678]">Trend: {row.d}</span>
                      <span className="font-mono text-[10px] text-[#5C6678]">Mvmt: {row.r}</span>
                      <span className="font-mono text-[10px] text-[#5C6678]">Est. Margin: {row.m}</span>
                      <span className="font-mono text-[11px] font-700" style={{ color: row.c }}>{row.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
