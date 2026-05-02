"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";

const STEPS = [
  {
    day: "Day 01",
    title: "Your website goes live.",
    body: "We take your brand, stock feed, and service offering. A bespoke Next.js 15 dealer website is configured, connected to your AutoTrader feed, and deployed to your domain. Every vehicle gets an indexed page.",
    deliverables: [
      "Domain configured",
      "Stock feed imported",
      "AutoTrader sync active",
      "Analytics installed",
      "FCA compliance pages live",
    ],
  },
  {
    day: "Day 02",
    title: "Your DMS is operational.",
    body: "The platform is populated with your existing stock. Lead routing is configured from every source — website, AutoTrader, eBay, CarGurus — into a single inbox. Finance integrations are tested. Your team is shown the platform.",
    deliverables: [
      "All portals live",
      "Lead inbox routing active",
      "Finance calculator configured",
      "Team accounts created",
      "HMRC MTD enabled",
    ],
  },
  {
    day: "Day 03+",
    title: "The intelligence activates.",
    body: "With 24 hours of stock data in the system, the Buying Command Centre begins generating buying signals. Regional demand intelligence populates. Private seller monitoring activates. AI buying recommendations appear daily.",
    deliverables: [
      "AI buying signals daily",
      "Regional demand live",
      "Portfolio health scored",
      "Private seller monitoring",
      "Quarterly account reviews",
    ],
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".step-col",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0D0F14] pt-[240px] pb-[180px] px-6 lg:px-20 overflow-hidden">
      <div className="max-w-container mx-auto">
        {/* Heading */}
        <div className="max-w-[640px] mb-20">
          <Eyebrow className="mb-8">The Process</Eyebrow>
          <h2 className="font-cormorant font-600 text-[56px] lg:text-[72px] text-[#EDE8DC] leading-[0.95] mb-6">
            From signature to selling smarter in 48 hours.
          </h2>
          <p className="font-cormorant font-300 italic text-[20px] text-[#9DA8B7]">
            We do not offer a self-service platform. Every ForecourIQ dealer receives a managed onboarding — website configured, stock imported, portals connected, team trained.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-[#252B37]/50 relative">
          {STEPS.map((step, i) => (
            <div key={i} className="step-col pt-12 pb-16 lg:px-12 lg:first:pl-0 lg:last:pr-0 border-b lg:border-b-0 lg:border-r border-[#252B37]/20 last:border-r-0 relative">
              {/* Node Anchor */}
              <div 
                className={`absolute top-[-4.5px] left-0 w-[9px] h-[9px] border rounded-[1px] bg-[#07080B] z-20 transition-colors duration-500 ${
                  i === 0 ? "border-[#0EA5E9] bg-[#0EA5E9]" : "border-[#252B37]"
                }`} 
              />
              <span className="font-mono text-[13px] text-[#0EA5E9] tracking-[0.16em] uppercase mb-8 block">
                {step.day}
              </span>
              <h3 className="font-syne font-700 text-[28px] text-[#EDE8DC] mb-6 leading-tight">
                {step.title}
              </h3>
              <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] mb-10 leading-relaxed">
                {step.body}
              </p>
              <ul className="space-y-3">
                {step.deliverables.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#0EA5E9] opacity-60" />
                    <span className="font-mono text-[11px] text-[#5C6678] tracking-wider uppercase">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-10 border-t border-[#0EA5E9]/20">
          <p className="font-cormorant font-300 italic text-[18px] text-[#EDE8DC] text-center mb-4">
            &quot;Most dealers see a measurable change in stock turn within the first 30 days.&quot;
          </p>
          <p className="font-mono text-[11px] text-[#5C6678] text-center tracking-[0.2em] uppercase">
            Based on active dealer data · Q1 2026
          </p>
        </div>
      </div>
    </section>
  );
}
