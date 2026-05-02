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
              <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: activeModule === 0 ? 1 : 0 }}>
                {/* Stunning Dealer Website Mockup */}
                <div className="w-full h-full bg-[#060709] border border-[#222730] rounded-[2px] flex flex-col overflow-hidden group/browser">
                  {/* Browser Bar */}
                  <div className="h-10 bg-[#0D0F14] border-b border-[#222730] flex items-center px-4 gap-2 shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#222730]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#222730]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#222730]" />
                    </div>
                    <div className="ml-4 flex-1 h-6 bg-[#060709] rounded-sm border border-[#222730] flex items-center px-3">
                      <div className="w-20 h-1.5 bg-[#222730] rounded-full" />
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="flex-1 overflow-y-auto no-scrollbar relative">
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-8 z-20">
                      <div className="flex flex-col">
                        <span className="font-syne font-700 text-[12px] text-[#F0EDE6] tracking-wider leading-none">HARTWELL</span>
                        <span className="font-syne font-700 text-[6px] text-[#6B7280] tracking-[0.2em] mt-0.5">MOTOR GROUP</span>
                      </div>
                      <div className="flex gap-6">
                        {['Stock', 'Finance', 'About', 'Contact'].map(item => (
                          <span key={item} className="font-syne font-700 text-[8px] text-[#C8CDD6] uppercase tracking-widest">{item}</span>
                        ))}
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div className="relative h-2/3 flex items-center px-12 overflow-hidden">
                      <div className="absolute inset-0 z-0">
                        <img 
                          src="/images/supercar-hero.png" 
                          className="w-full h-full object-cover opacity-60 scale-105 group-hover/browser:scale-110 transition-transform duration-10000 ease-linear" 
                          alt="Prestige vehicle" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#060709] via-[#060709]/40 to-transparent" />
                      </div>
                      <div className="relative z-10 max-w-[240px]">
                        <span className="font-mono text-[8px] text-[#B8975A] tracking-[0.2em] uppercase mb-2 block">── CHESTERFIELD · DERBYSHIRE</span>
                        <h3 className="font-cormorant font-600 text-[42px] text-[#F0EDE6] leading-[0.9] mb-4">
                          Prestige.<br />Performance.<br />Provenance.
                        </h3>
                        <div className="flex gap-3">
                          <div className="px-3 py-1.5 border border-[#B8975A] text-[#F0EDE6] text-[7px] font-syne uppercase tracking-widest">Browse Stock</div>
                          <div className="px-3 py-1.5 text-[#B8975A] text-[7px] font-syne uppercase tracking-widest">Enquire →</div>
                        </div>
                      </div>
                    </div>

                    {/* Stock Grid Preview */}
                    <div className="p-8 bg-[#0C0E12]">
                      <div className="flex justify-between items-end mb-6">
                        <div>
                          <span className="font-mono text-[7px] text-[#B8975A] uppercase tracking-widest">── LATEST ARRIVALS</span>
                          <h4 className="font-cormorant font-600 text-[24px] text-[#F0EDE6]">On the forecourt.</h4>
                        </div>
                        <span className="font-syne text-[8px] text-[#B8975A] border-b border-[#B8975A]/40 pb-1">VIEW ALL STOCK</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2].map(i => (
                          <div key={i} className="bg-[#111318] border border-[#222730] p-3 space-y-3">
                            <div className="aspect-[16/9] bg-[#181C23] relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-[#060709]/80 to-transparent" />
                            </div>
                            <div>
                              <span className="font-mono text-[6px] text-[#6B7280] uppercase tracking-widest">2021 · 12,500 mi</span>
                              <p className="font-syne font-700 text-[11px] text-[#F0EDE6] mt-1">BMW M4 COMPETITION</p>
                              <div className="flex justify-between items-end mt-3 pt-3 border-t border-[#222730]">
                                <span className="font-cormorant font-600 text-[18px] text-[#F0EDE6]">£58,950</span>
                                <span className="font-mono text-[7px] text-[#6B7280]">£845 / MO</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 transition-opacity duration-700 p-8" style={{ opacity: activeModule === 1 ? 1 : 0 }}>
                {/* High-Fidelity DMS Mockup */}
                <div className="w-full h-full bg-[#07080B] border border-[#252B37] rounded-[2px] flex flex-col overflow-hidden shadow-2xl">
                  {/* Top Bar */}
                  <div className="h-12 border-b border-[#252B37] flex items-center px-6 justify-between bg-[#0D0F14]">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                        <span className="font-syne font-700 text-[10px] text-[#EDE8DC] tracking-wider leading-none">FORECOURTIQ</span>
                        <span className="font-syne font-700 text-[6px] text-[#0EA5E9] tracking-[0.2em] mt-0.5">DMS · v2.4</span>
                      </div>
                      <div className="h-6 w-[1px] bg-[#252B37]" />
                      <div className="flex gap-4">
                        {['Inventory', 'Leads', 'Intelligence', 'Feeds'].map((item, i) => (
                          <span key={item} className={`font-mono text-[9px] uppercase tracking-widest ${i === 0 ? 'text-[#0EA5E9]' : 'text-[#5C6678]'}`}>{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-[1px] bg-[#1C2029] border border-[#252B37] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#252B37] border border-[#333A47]" />
                    </div>
                  </div>

                  <div className="flex-1 flex">
                    {/* Sidebar */}
                    <div className="w-16 border-r border-[#252B37] bg-[#0D0F14] p-4 flex flex-col gap-6 items-center">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-[1px] border border-[#252B37] flex items-center justify-center ${i === 1 ? 'bg-[#0EA5E9]/10 border-[#0EA5E9]/40 text-[#0EA5E9]' : 'text-[#5C6678]'}`}>
                          <div className="w-3 h-3 bg-current" />
                        </div>
                      ))}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-8 space-y-8 bg-[#07080B] overflow-hidden">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="font-syne font-700 text-[18px] text-[#EDE8DC]">Inventory Overview</h4>
                          <p className="font-mono text-[10px] text-[#5C6678] uppercase mt-1">Hartwell Motor Group · 42 Vehicles</p>
                        </div>
                        <div className="flex gap-2">
                          <div className="px-3 py-1 bg-[#1C2029] border border-[#252B37] font-mono text-[9px] text-[#EDE8DC]">ADD VEHICLE</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { l: 'Total Value', v: '£1.42M', c: 'text-[#EDE8DC]' },
                          { l: 'Projected Margin', v: '£214K', c: 'text-[#0EA5E9]' },
                          { l: 'Aging > 60d', v: '04', c: 'text-[#F43F5E]' },
                          { l: 'Inbound', v: '12', c: 'text-[#EDE8DC]' },
                        ].map((stat, i) => (
                          <div key={i} className="p-4 bg-[#0D0F14] border border-[#252B37] rounded-[1px]">
                            <span className="block font-mono text-[8px] text-[#5C6678] uppercase mb-2">{stat.l}</span>
                            <span className={`block font-mono text-[16px] ${stat.c}`}>{stat.v}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between font-mono text-[8px] text-[#5C6678] uppercase border-b border-[#252B37] pb-2">
                          <span className="w-1/3">Vehicle</span>
                          <span className="w-1/6">Status</span>
                          <span className="w-1/6">Price</span>
                          <span className="w-1/6">Aging</span>
                          <span className="w-1/6">Feeds</span>
                        </div>
                        {[
                          { v: '2021 BMW M4 Comp', s: 'Available', p: '£58,950', a: '12d', f: '4/4' },
                          { v: '2022 Porsche 911', s: 'Reserved', p: '£112,400', a: '04d', f: '2/4' },
                          { v: '2020 Range Rover', s: 'Available', p: '£42,900', a: '45d', f: '4/4' },
                        ].map((row, i) => (
                          <div key={i} className="flex justify-between font-mono text-[10px] py-2 border-b border-[#252B37]/30 text-[#EDE8DC]">
                            <span className="w-1/3">{row.v}</span>
                            <span className={`w-1/6 ${row.s === 'Reserved' ? 'text-[#F59E0B]' : 'text-[#0EA5E9]'}`}>{row.s}</span>
                            <span className="w-1/6">{row.p}</span>
                            <span className="w-1/6">{row.a}</span>
                            <span className="w-1/6 text-[#5C6678]">{row.f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 transition-opacity duration-700 p-8" style={{ opacity: activeModule === 2 ? 1 : 0 }}>
                {/* High-Fidelity Command Centre Mockup */}
                <div className="w-full h-full bg-[#07080B] border border-[#0EA5E9]/20 rounded-[2px] p-8 flex flex-col gap-8 shadow-[0_0_50px_rgba(14,165,233,0.1)]">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-mono text-[10px] text-[#0EA5E9] tracking-[0.3em] uppercase">Intelligence Terminal</span>
                      <h4 className="font-syne font-700 text-[20px] text-[#EDE8DC] mt-1 tracking-tight">Market Opportunity Map</h4>
                    </div>
                    <div className="flex items-center gap-4 bg-[#0D0F14] border border-[#252B37] px-4 py-2 rounded-[1px]">
                      <div className="w-2 h-2 rounded-full bg-[#0EA5E9] shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                      <span className="font-mono text-[9px] text-[#EDE8DC] uppercase tracking-widest">Live Engine</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-8 flex-1 overflow-hidden">
                    {/* Left: Signals */}
                    <div className="col-span-5 space-y-6">
                      <div className="space-y-4">
                        <span className="font-mono text-[8px] text-[#5C6678] uppercase tracking-widest block border-b border-[#252B37] pb-2">Active Buying Signals</span>
                        {[
                          { n: 'BMW M2 (F87)', s: 'HIGH', t: '+12% demand', c: 'text-[#0EA5E9]' },
                          { n: 'PORSCHE 718', s: 'MID', t: 'Supply drop', c: 'text-[#EDE8DC]' },
                          { n: 'VW GOLF R', s: 'STRONG', t: 'Underpriced (Private)', c: 'text-[#0EA5E9]' },
                          { n: 'LAND ROVER DEF.', s: 'AVOID', t: 'Market saturation', c: 'text-[#F43F5E]' },
                        ].map((sig, i) => (
                          <div key={i} className="group cursor-pointer">
                            <div className="flex justify-between items-center p-3 bg-[#0D0F14] border border-[#252B37] rounded-[1px] hover:border-[#0EA5E9]/40 transition-colors">
                              <div className="space-y-1">
                                <span className="block font-mono text-[11px] text-[#EDE8DC]">{sig.n}</span>
                                <span className="block font-mono text-[8px] text-[#5C6678] uppercase">{sig.t}</span>
                              </div>
                              <span className={`font-mono text-[10px] ${sig.c}`}>{sig.s}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Visualization */}
                    <div className="col-span-7 flex flex-col gap-6">
                      <div className="flex-1 bg-[#0D0F14] border border-[#252B37] rounded-[1px] p-6 relative overflow-hidden">
                        <span className="font-mono text-[8px] text-[#5C6678] uppercase tracking-widest block mb-4">Price Performance Matrix</span>
                        <div className="h-full w-full relative pt-4">
                          {/* Grid Lines */}
                          <div className="absolute inset-0 border-l border-b border-[#252B37]/40 flex flex-col justify-between">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-[1px] bg-[#252B37]/20" />)}
                          </div>
                          {/* Data Path */}
                          <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path d="M0,80 Q10,75 20,40 T40,60 T60,20 T80,30 T100,50" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
                            <path d="M0,80 Q10,75 20,40 T40,60 T60,20 T80,30 T100,50 V100 H0 Z" fill="url(#lineGrad)" />
                            {/* Hotspots */}
                            <circle cx="20" cy="40" r="2" fill="#0EA5E9">
                              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="60" cy="20" r="2" fill="#0EA5E9" />
                          </svg>
                        </div>
                      </div>

                      <div className="h-24 grid grid-cols-2 gap-4">
                        <div className="bg-[#0D0F14] border border-[#252B37] p-4 flex flex-col justify-center">
                          <span className="block font-mono text-[8px] text-[#5C6678] uppercase mb-1">Market Velocity</span>
                          <div className="flex items-end gap-2">
                            <span className="font-mono text-[16px] text-[#0EA5E9]">84%</span>
                            <span className="font-mono text-[8px] text-[#0EA5E9] mb-1">↑ 2.4%</span>
                          </div>
                        </div>
                        <div className="bg-[#0D0F14] border border-[#252B37] p-4 flex flex-col justify-center">
                          <span className="block font-mono text-[8px] text-[#5C6678] uppercase mb-1">Avg. Margin Spike</span>
                          <div className="flex items-end gap-2">
                            <span className="font-mono text-[16px] text-[#EDE8DC]">£1,420</span>
                            <span className="font-mono text-[8px] text-[#5C6678] mb-1">VS REGION</span>
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
      </div>
    </section>
  );
}
