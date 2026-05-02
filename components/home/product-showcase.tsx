"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

const MODULES = [
  {
    id: "01",
    eyebrow: "The Website",
    title: "A dealer website built for the search engine and the buyer.",
    description: "Every vehicle gets its own indexed page. Every location gets its own SEO footprint. Your website becomes your most reliable salesperson.",
    specs: [
      { k: "FRAMEWORK", v: "Next.js 15" },
      { k: "LOAD TIME", v: "Sub 1 second" },
      { k: "SEO", v: "Local + national" },
      { k: "PORTALS", v: "AT / eBay / CG / M.co.uk" },
      { k: "DESIGN", v: "Bespoke per dealer" },
      { k: "ONBOARDING", v: "24 hours" },
    ],
    cta: "Explore dealer websites",
  },
  {
    id: "02",
    eyebrow: "The DMS",
    title: "The operating system for your forecourt.",
    description: "Stock management, lead pipeline, compliance documentation, and feed syndication — unified in one platform. No more parallel systems.",
    specs: [
      { k: "VEHICLES", v: "Unlimited" },
      { k: "PORTALS", v: "Single-source publish" },
      { k: "LEADS", v: "Unified inbox" },
      { k: "COMPLIANCE", v: "HMRC MTD + FCA" },
      { k: "VALUATIONS", v: "CAP HPI integrated" },
      { k: "SUPPORT", v: "Priority, UK-based" },
    ],
    cta: "Explore the DMS",
  },
  {
    id: "03",
    eyebrow: "The Command Centre",
    title: "The intelligence layer your competitors don't have.",
    description: "AI-driven buying recommendations, regional demand intelligence, private seller monitoring, and portfolio health scoring. Updated daily. Specific to your market.",
    specs: [
      { k: "BUYING SIGNALS", v: "Daily AI recommendations" },
      { k: "MARKET DATA", v: "Regional, real-time" },
      { k: "PORTFOLIO", v: "Health scored daily" },
      { k: "PRIVATE SELLERS", v: "FB Marketplace + Gumtree" },
      { k: "AUCTIONS", v: "BCA + Manheim feeds" },
      { k: "INSIGHT", v: "90-day trade horizon" },
    ],
    cta: "Explore the Command Centre",
  }
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const nextModule = Math.min(
            Math.floor(progress * MODULES.length),
            MODULES.length - 1
          );
          if (nextModule !== activeModule) {
            setActiveModule(nextModule);
          }
        },
      });

      // Crossfade text and visual
      gsap.to(".showcase-content", {
        opacity: 1,
        duration: 0.4,
        overwrite: "auto"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeModule]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0D0F14]">
      <div className="sticky top-0 h-screen w-full flex items-center px-6 lg:px-20 overflow-hidden">
        <div className="max-w-container mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          
          {/* Left Panel Content */}
          <div className="lg:col-span-5 pr-12">
            <div className="showcase-content transition-opacity duration-500 min-h-[500px] flex flex-col justify-center">
              <Eyebrow className="mb-6">
                {MODULES[activeModule].id} / 03 · {MODULES[activeModule].eyebrow}
              </Eyebrow>
              <h2 className="font-cormorant font-600 text-[44px] lg:text-[56px] text-[#EDE8DC] leading-[0.95] mb-8">
                {MODULES[activeModule].title}
              </h2>
              <p className="font-cormorant font-300 italic text-[18px] lg:text-[20px] text-[#9DA8B7] mb-12 max-w-sm">
                {MODULES[activeModule].description}
              </p>
              
              <div className="space-y-3 mb-12 max-w-sm">
                {MODULES[activeModule].specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-baseline gap-4 group">
                    <span className="font-mono text-[11px] text-[#5C6678] uppercase tracking-[0.12em] whitespace-nowrap">
                      {spec.k}
                    </span>
                    <div className="flex-1 border-b border-[#252B37]/40 border-dotted mb-1" />
                    <span className="font-mono text-[12px] text-[#EDE8DC] whitespace-nowrap">
                      {spec.v}
                    </span>
                  </div>
                ))}
              </div>

              <Button variant="ghost" href={`/${MODULES[activeModule].eyebrow.toLowerCase().replace(' ', '-')}`}>
                {MODULES[activeModule].cta}
              </Button>
            </div>
          </div>

          {/* Progress Rail */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative h-[84vh]">
            <div className="w-[1px] h-full bg-[#252B37] opacity-50" />
            <div className="absolute top-0 flex flex-col justify-between h-full py-0">
              {MODULES.map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 border transition-all duration-500 ${
                    activeModule === i ? 'bg-[#0EA5E9] border-[#0EA5E9]' : 'bg-[#252B37] border-[#252B37]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Panel Visual */}
          <div className="lg:col-span-6 h-[84vh]">
            <div className="relative w-full h-full bg-[#13161C] border border-[#252B37] rounded-[2px] overflow-hidden shadow-2xl">
              {/* Module Visuals */}
              <div className="absolute inset-0 transition-opacity duration-700 p-8" style={{ opacity: activeModule === 0 ? 1 : 0 }}>
                {/* Website Mockup */}
                <div className="w-full h-full bg-[#0D0F14] border border-[#252B37] rounded-[2px] flex flex-col">
                  <div className="h-10 border-b border-[#252B37] flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#252B37]" />
                    <div className="w-2 h-2 rounded-full bg-[#252B37]" />
                    <div className="w-2 h-2 rounded-full bg-[#252B37]" />
                  </div>
                  <div className="p-8 space-y-8">
                    <div className="h-4 w-32 bg-[#252B37]" />
                    <div className="h-40 w-full bg-[#0D0F14] border border-[#1C2029] flex flex-col items-center justify-center gap-3">
                      <span className="font-mono text-[11px] text-[#252B37] uppercase tracking-[0.16em]">Vehicle Photography · Pending</span>
                      <div className="w-[60px] h-[1px] bg-[#1C2029]" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-24 bg-[#13161C] border border-[#252B37]/20" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 transition-opacity duration-700 p-8" style={{ opacity: activeModule === 1 ? 1 : 0 }}>
                {/* DMS Mockup */}
                <div className="w-full h-full bg-[#0D0F14] border border-[#252B37] rounded-[2px] flex flex-col">
                  <div className="h-12 border-b border-[#252B37] flex items-center px-6 justify-between">
                    <div className="flex gap-4">
                      <div className="w-16 h-2 bg-[#0EA5E9]" />
                      <div className="w-12 h-2 bg-[#252B37]" />
                      <div className="w-12 h-2 bg-[#252B37]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#252B37]" />
                  </div>
                  <div className="flex-1 flex">
                    <div className="w-20 border-r border-[#252B37] p-4 space-y-4">
                      {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-1 bg-[#252B37]" />)}
                    </div>
                    <div className="flex-1 p-6 space-y-6">
                      <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => <div key={i} className="h-12 bg-[#13161C] border border-[#252B37]/40" />)}
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-8 bg-[#13161C] border-b border-[#252B37]/20" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 transition-opacity duration-700 p-8" style={{ opacity: activeModule === 2 ? 1 : 0 }}>
                {/* Command Centre Mockup */}
                <div className="w-full h-full bg-[#0D0F14] border border-[#252B37] rounded-[2px] p-6 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-[#0EA5E9] tracking-widest">BUYING SIGNALS</span>
                    <div className="w-4 h-4 bg-[#0EA5E9]/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full animate-pulse-slow" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 flex-1">
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="p-3 bg-[#1C2029] border border-[#252B37]/40 rounded-[2px] flex justify-between">
                          <div className="w-20 h-2 bg-[#9DA8B7]/50" />
                          <div className="w-8 h-2 bg-[#0EA5E9]" />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      <div className="h-32 bg-[#1C2029] border border-[#252B37]/40 p-4 flex items-end gap-2">
                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                          <div key={i} className="flex-1 bg-[#252B37]" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="h-24 bg-[#1C2029] border border-[#252B37]/40 p-4">
                        <div className="w-full h-full border-b border-l border-[#252B37] relative">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,80 L20,60 L40,70 L60,40 L80,50 L100,20" fill="none" stroke="#0EA5E9" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
