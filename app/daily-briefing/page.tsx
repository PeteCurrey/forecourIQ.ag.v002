"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import PageHero from "@/components/ui/page-hero";

export default function DailyBriefingPage() {
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
      <PageHero 
        eyebrow="Daily Briefing & News"
        title={<>The Morning Wire.<br />Your forecourt, summarized.</>}
        description="Every morning at 7:00 AM, receive a synthesized brief of overnight leads, market shifts, competitor moves, and the latest prestige industry news, model launches, and recalls."
        backgroundImage="/images/hypercar-hero.png"
      />

      {/* Deep Dive Feature */}
      <section className="reveal-section bg-[#0D0F14] py-[180px] px-6 lg:px-20 border-y border-[#252B37]/30">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mb-12 leading-tight">
              Start your day with clarity, not chaos.
            </h2>
            <div className="space-y-10">
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#0EA5E9] mb-4 uppercase tracking-widest">Industry Monitoring</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  We monitor global automotive news feeds, DVSA recall databases, and OEM press releases. Get instant updates on new model launches or compliance changes that affect your current stock value.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#0EA5E9] mb-4 uppercase tracking-widest">Action Required</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Clear directives for the day. Which vehicles have crossed the 45-day threshold? Which hot prospects need an immediate follow-up call? Which of your vehicles was just subject to a manufacturer recall?
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* UI Mockup */}
            <div className="relative bg-[#07080B] border border-[#252B37] rounded-[2px] p-6 lg:p-10 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center border-b border-[#252B37] pb-6 mb-6">
                <span className="font-mono text-[12px] text-[#5C6678] tracking-widest uppercase">The Morning Wire</span>
                <span className="font-mono text-[12px] text-[#EDE8DC] uppercase">Wed, 14 May</span>
              </div>
              <div className="flex-1 space-y-6">
                
                <div>
                  <h4 className="font-syne font-700 text-[14px] text-[#0EA5E9] uppercase tracking-wider mb-3">Overnight Leads</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between font-mono text-[11px] text-[#9DA8B7]">
                      <span>1. James K. (Porsche 911) - Web</span>
                      <span className="text-[#0EA5E9]">Hot Lead</span>
                    </li>
                    <li className="flex justify-between font-mono text-[11px] text-[#9DA8B7]">
                      <span>2. Simon P. (Aston Martin DB11) - AutoTrader</span>
                      <span className="text-[#D4922A]">Follow-up</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#252B37]/20">
                  <h4 className="font-syne font-700 text-[14px] text-[#C94040] uppercase tracking-wider mb-3">Industry Alert: Recall</h4>
                  <p className="font-cormorant font-300 text-[16px] text-[#EDE8DC] leading-relaxed">
                    <span className="text-[#C94040]">WARNING:</span> DVSA has issued a recall for <span className="text-[#0EA5E9]">Porsche Taycan (2020-2022)</span> regarding high-voltage battery modules. You currently hold 1 of these in stock. Stop-sale recommended until inspected.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#252B37]/20">
                  <h4 className="font-syne font-700 text-[14px] text-[#5C6678] uppercase tracking-wider mb-3">Market News</h4>
                  <p className="font-cormorant font-300 text-[14px] text-[#9DA8B7] leading-relaxed">
                    Ferrari officially unveils the new 12Cilindri, causing a temporary 3% spike in search volume for late-model 812 Superfast inventory. Watch for increased lead velocity on your 812 listing.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
