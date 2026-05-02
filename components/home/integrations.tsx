"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";

const INTEGRATIONS = [
  { name: "AutoTrader", category: "Advertising" },
  { name: "eBay Motors", category: "Advertising" },
  { name: "CarGurus", category: "Advertising" },
  { name: "Motors.co.uk", category: "Advertising" },
  { name: "Facebook Marketplace", category: "Advertising" },
  { name: "CAP HPI", category: "Vehicle Data" },
  { name: "DVLA", category: "Vehicle Data" },
  { name: "BCA Auctions", category: "Sourcing" },
  { name: "Manheim", category: "Sourcing" },
  { name: "HPI Check", category: "Vehicle Data" },
  { name: "Codeweavers", category: "Finance" },
  { name: "iVendi", category: "Finance" },
  { name: "Evolution Funding", category: "Finance" },
  { name: "Close Brothers", category: "Finance" },
  { name: "Stripe", category: "Payments" },
  { name: "Xero", category: "Accounting" },
  { name: "QuickBooks", category: "Accounting" },
  { name: "Twilio", category: "Communications" },
  { name: "SendGrid", category: "Communications" },
  { name: "Google Analytics 4", category: "Analytics" },
];

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".integration-cell",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
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
    <section ref={sectionRef} className="bg-[#07080B] py-[180px] px-6 lg:px-20">
      <div className="max-w-container mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <Eyebrow className="mb-8">The Ecosystem</Eyebrow>
          <h2 className="font-syne font-700 text-[44px] lg:text-[52px] text-[#EDE8DC] leading-tight mb-6">
            Connected to every platform that matters.
          </h2>
          <p className="font-cormorant font-300 italic text-[18px] lg:text-[20px] text-[#9DA8B7] max-w-lg leading-relaxed">
            ForecourIQ integrates directly with the tools and platforms UK dealers depend on. No middleware. No manual exports. One update — everywhere.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {INTEGRATIONS.map((item, i) => (
            <div 
              key={i} 
              className="integration-cell group flex flex-col gap-2 pb-6 border-b border-[#252B37]/30 transition-all duration-300 hover:border-[#C9A84C]/40"
            >
              <h4 className="font-syne font-700 text-[16px] text-[#EDE8DC] group-hover:text-[#C9A84C] transition-colors duration-300">
                {item.name}
              </h4>
              <span className="font-mono text-[10px] text-[#5C6678] uppercase tracking-[0.12em]">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="font-cormorant font-300 italic text-[18px] text-[#9DA8B7]">
            Further integrations available on request. API access included on Elite tier.
          </p>
        </div>
      </div>
    </section>
  );
}
