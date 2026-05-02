"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import ClosingCTA from "@/components/home/closing-cta";

export default function CompetitorMonitoringPage() {
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
          <Eyebrow className="mb-8 reveal-text">Competitor Monitoring</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[80px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8 reveal-text">
            Market Intelligence.<br />See what they sell, when they drop.
          </h1>
          <p className="font-cormorant font-300 italic text-[22px] text-[#9DA8B7] max-w-2xl reveal-text">
            Track up to 20 local or national competitors. Receive instant alerts when they acquire new stock, drop a price, or sell a vehicle you're competing against.
          </p>
        </div>
      </section>

      {/* Deep Dive Feature */}
      <section className="reveal-section bg-[#0D0F14] py-[180px] px-6 lg:px-20 border-y border-[#252B37]/30">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mb-12 leading-tight">
              Don't get caught out on price.
            </h2>
            <div className="space-y-10">
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#39FF14] mb-4 uppercase tracking-widest">Price Drop Alerts</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  If a monitored dealer drops the price of a vehicle that directly competes with one in your inventory, you get notified instantly so you can adjust strategy.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#39FF14] mb-4 uppercase tracking-widest">Stock Velocity Tracking</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  See exactly how many days a competitor's vehicles sit on the forecourt before selling. Learn from their slow movers to optimize your own buying.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* UI Mockup */}
            <div className="relative aspect-[4/3] bg-[#07080B] border border-[#252B37] rounded-[2px] p-6 lg:p-10 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center border-b border-[#252B37] pb-6 mb-6">
                <span className="font-mono text-[12px] text-[#5C6678] tracking-widest uppercase">Competitor Dashboard</span>
                <span className="font-mono text-[12px] text-[#39FF14] uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                  Live Sync
                </span>
              </div>
              <div className="flex-1 space-y-4">
                {[
                  { d: "Direct Motors", action: "Price Drop", v: "Aston Martin DB11 2021", old: "£98,000", new: "£94,500", c: "#D4922A" },
                  { d: "Elite Cars Ltd", action: "Sold", v: "Porsche 911 GT3 (992) 2022", old: "£185,000", new: "21 Days to Sell", c: "#3DB87A" },
                  { d: "Yorkshire Prestige", action: "New Stock", v: "Ferrari F8 Tributo", old: "Listed Today", new: "£210,990", c: "#39FF14" },
                ].map((row, i) => (
                  <div key={i} className="flex flex-col border-b border-[#252B37]/10 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-syne font-700 text-[14px] text-[#EDE8DC]">{row.d}</span>
                      <span className="font-mono text-[10px] uppercase font-700" style={{ color: row.c }}>{row.action}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-cormorant font-300 text-[16px] text-[#9DA8B7]">{row.v}</span>
                      <div className="flex gap-4 items-center">
                        <span className="font-mono text-[11px] text-[#5C6678] line-through">{row.old}</span>
                        <span className="font-mono text-[11px] text-[#EDE8DC]">{row.new}</span>
                      </div>
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
