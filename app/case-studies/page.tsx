"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";
import ClosingCTA from "@/components/home/closing-cta";

export default function CaseStudiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 lg:px-20 pt-20 overflow-hidden">
        <div className="max-w-container mx-auto w-full relative z-10">
          <Eyebrow className="mb-8">Success Stories</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[80px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8">
            Real dealerships.<br />Measured results.
          </h1>
          <p className="font-cormorant font-300 italic text-[22px] text-[#9DA8B7] max-w-2xl">
            We don&apos;t just build websites; we transform operational performance. These case studies highlight the impact of intelligent buying and high-performance engineering.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="reveal-section bg-[#0D0F14] py-[180px] px-6 lg:px-20 border-y border-[#252B37]/30">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-6">
            <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-[0.2em] mb-6 block">Featured Study · Sheffield, UK</span>
            <h2 className="font-syne font-700 text-[32px] lg:text-[56px] text-[#EDE8DC] leading-tight mb-8">
              Heritage Motor Group
            </h2>
            <p className="font-cormorant font-300 italic text-[24px] text-[#9DA8B7] mb-12 leading-relaxed">
              &quot;Moving to ForecourIQ wasn&apos;t just a website upgrade. It was an operational reset. We reduced our average days-to-sell by 60% in the first quarter.&quot;
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-[#07080B] border border-[#252B37] rounded-[2px]">
                <span className="font-mono text-[10px] text-[#5C6678] uppercase mb-2 block">Days to Sell</span>
                <span className="font-syne font-700 text-[32px] text-[#39FF14]">-60%</span>
              </div>
              <div className="p-8 bg-[#07080B] border border-[#252B37] rounded-[2px]">
                <span className="font-mono text-[10px] text-[#5C6678] uppercase mb-2 block">Enquiry Volume</span>
                <span className="font-syne font-700 text-[32px] text-[#39FF14]">+240%</span>
              </div>
              <div className="p-8 bg-[#07080B] border border-[#252B37] rounded-[2px]">
                <span className="font-mono text-[10px] text-[#5C6678] uppercase mb-2 block">Stock Turn</span>
                <span className="font-syne font-700 text-[32px] text-[#39FF14]">3.2x</span>
              </div>
              <div className="p-8 bg-[#07080B] border border-[#252B37] rounded-[2px]">
                <span className="font-mono text-[10px] text-[#5C6678] uppercase mb-2 block">Portals ROI</span>
                <span className="font-syne font-700 text-[32px] text-[#39FF14]">14:1</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 space-y-12 flex flex-col justify-center">
            <div>
              <h3 className="font-syne font-700 text-[18px] text-[#EDE8DC] uppercase tracking-widest mb-4">The Challenge</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                Heritage was struggling with a legacy WordPress site that took 4 seconds to load. Their DMS was disconnected from their portals, requiring manual entry across AutoTrader, eBay, and their own site. Stock turn was averaging 45 days, tying up significant working capital.
              </p>
            </div>
            <div>
              <h3 className="font-syne font-700 text-[18px] text-[#EDE8DC] uppercase tracking-widest mb-4">The Solution</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                We deployed a bespoke Next.js 15 website and migrated their inventory to the ForecourIQ DMS. We implemented the AI Buying Command Centre to help them identify higher-margin, faster-turning stock in the Yorkshire region.
              </p>
            </div>
            <div>
              <h3 className="font-syne font-700 text-[18px] text-[#EDE8DC] uppercase tracking-widest mb-4">The Result</h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                Page loads dropped to 400ms. SEO traffic increased by 240% within 90 days. The intelligent buying signals allowed them to source three vehicles per month that they previously would have missed, with an average margin of £3,200 per unit.
              </p>
            </div>
            <Button variant="primary" href="/demo">Read Full Analysis</Button>
          </div>
        </div>
      </section>

      {/* Other Studies */}
      <section className="reveal-section bg-[#07080B] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto">
          <h2 className="font-syne font-700 text-[32px] text-[#EDE8DC] mb-16">Further Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                name: "Prestige Collection",
                metric: "£42k saved in portal overspend",
                tagline: "Optimising multi-portal advertising through data-driven attribution.",
                tags: ["Efficiency", "Cost Control"]
              },
              {
                name: "Direct Motors Ltd",
                metric: "0 to 1,200 organic leads per month",
                tagline: "Building a localized SEO powerhouse for a Sheffield-based independent.",
                tags: ["SEO", "Lead Gen"]
              },
              {
                name: "Yorkshire EV Specialists",
                metric: "New market dominance in 6 months",
                tagline: "Using market intelligence to pivot a legacy dealership into the EV sector.",
                tags: ["Strategy", "Intelligence"]
              },
              {
                name: "The Van Centre",
                metric: "Stock turn improved from 58 to 22 days",
                tagline: "Applying performance retail metrics to the commercial vehicle sector.",
                tags: ["Operations", "DMS"]
              }
            ].map((study, i) => (
              <div key={i} className="p-12 bg-[#0D0F14] border border-[#252B37] rounded-[2px] hover:border-[#39FF14]/40 transition-colors group">
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 border border-[#252B37] rounded-full font-mono text-[9px] text-[#5C6678] uppercase tracking-wider group-hover:border-[#39FF14]/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-syne font-700 text-[24px] text-[#EDE8DC] mb-2">{study.name}</h3>
                <p className="font-mono text-[14px] text-[#39FF14] mb-6 uppercase tracking-wider">{study.metric}</p>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed mb-10">
                  {study.tagline}
                </p>
                <a href="#" className="font-mono text-[11px] text-[#EDE8DC] uppercase tracking-[0.2em] inline-flex items-center group-hover:text-[#39FF14] transition-colors">
                  View Study →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
