"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import PageHero from "@/components/ui/page-hero";
import ClosingCTA from "@/components/home/closing-cta";
import Eyebrow from "@/components/ui/eyebrow";

export default function AutomatedLeadsPage() {
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
        eyebrow="Automated Lead Follow-up"
        title={<>Zero Lead Leakage.<br />Respond first, win the sale.</>}
        description="70% of buyers go with the dealer who responds first. ForecourIQ unifies leads from every platform into a single inbox and automates instant, personalized follow-ups 24/7."
        backgroundImage="/images/racing-hero.png"
      />

      {/* Deep Dive Feature */}
      <section className="reveal-section bg-[#0D0F14] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mb-12 leading-tight">
              One inbox for every platform.
            </h2>
            <div className="space-y-10">
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#0EA5E9] mb-4 uppercase tracking-widest">Unified Lead Inbox</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Stop checking six different portals. Enquiries from your website, AutoTrader, eBay Motors, and WhatsApp all land in one centralized dashboard.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#0EA5E9] mb-4 uppercase tracking-widest">Instant Auto-Response</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  When a lead comes in at 11 PM, the system instantly replies via SMS or email with the vehicle brochure, a walkaround video link, and an option to book a morning call.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* UI Mockup */}
            <div className="relative aspect-[4/3] bg-[#07080B] border border-[#252B37] rounded-[2px] p-6 lg:p-10 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center border-b border-[#252B37] pb-6 mb-6">
                <span className="font-mono text-[12px] text-[#5C6678] tracking-widest uppercase">Unified Inbox</span>
                <span className="font-mono text-[12px] text-[#0EA5E9] uppercase">3 Unread</span>
              </div>
              <div className="flex-1 space-y-4">
                {[
                  { n: "David Smith", s: "AutoTrader", t: "Just now", v: "Porsche 911 GT3 (992)", stat: "New" },
                  { n: "Sarah Jenkins", s: "Website", t: "14 mins ago", v: "Aston Martin Vantage V8", stat: "Auto-replied" },
                  { n: "Mark Taylor", s: "eBay", t: "1 hour ago", v: "Ferrari Roma", stat: "In discussion" },
                ].map((lead, i) => (
                  <div key={i} className="flex flex-col border border-[#252B37] bg-[#0D0F14] p-4 rounded-[2px] border-l-4 border-l-[#0EA5E9]">
                    <div className="flex justify-between mb-2">
                      <span className="font-syne font-700 text-[14px] text-[#EDE8DC]">{lead.n}</span>
                      <span className="font-mono text-[10px] text-[#5C6678]">{lead.t}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-cormorant font-300 text-[14px] text-[#9DA8B7]">Re: {lead.v}</span>
                      <div className="flex gap-4 items-center">
                        <span className="font-mono text-[10px] text-[#5C6678] bg-[#252B37]/30 px-2 py-1 rounded-full">{lead.s}</span>
                        <span className="font-mono text-[10px] text-[#0EA5E9] uppercase">{lead.stat}</span>
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
