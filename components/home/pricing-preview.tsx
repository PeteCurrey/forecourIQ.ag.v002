"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

const TIERS = [
  {
    name: "Starter",
    tagline: "For boutique independents",
    monthly: 149,
    annual: 124,
    features: [
      { label: "Bespoke dealer website", active: true },
      { label: "DMS — up to 30 vehicles", active: true },
      { label: "AutoTrader + eBay sync", active: true },
      { label: "Lead inbox", active: true },
      { label: "DVLA lookup", active: true },
      { label: "HMRC MTD compliant", active: true },
      { label: "FCA audit trail", active: true },
      { label: "AI Command Centre", active: false },
      { label: "Multi-portal sync", active: false },
      { label: "Dedicated account manager", active: false },
    ],
  },
  {
    name: "Professional",
    tagline: "For scaling dealerships",
    monthly: 299,
    annual: 249,
    recommended: true,
    features: [
      { label: "Everything in Starter", active: true },
      { label: "DMS — up to 100 vehicles", active: true },
      { label: "All portal sync (5 platforms)", active: true },
      { label: "AI Buying Command Centre", active: true },
      { label: "Regional demand intelligence", active: true },
      { label: "CAP HPI integration", active: true },
      { label: "Finance calculator (Codeweavers)", active: true },
      { label: "Priority support", active: true },
      { label: "Private seller monitoring", active: false },
      { label: "Dedicated account manager", active: false },
    ],
  },
  {
    name: "Elite",
    tagline: "For multi-site groups",
    monthly: 499,
    annual: 415,
    features: [
      { label: "Everything in Professional", active: true },
      { label: "Unlimited vehicles", active: true },
      { label: "Private seller monitoring", active: true },
      { label: "BCA + Manheim auction feeds", active: true },
      { label: "Advanced portfolio analytics", active: true },
      { label: "Dedicated account manager", active: true },
      { label: "White-glove onboarding", active: true },
      { label: "Quarterly business reviews", active: true },
      { label: "API access", active: true },
    ],
  },
];

export default function PricingPreview() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-[#0D0F14] py-[180px] px-6 lg:px-20">
      <div className="max-w-container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <Eyebrow className="justify-center mb-8">Investment</Eyebrow>
          <h2 className="font-cormorant font-600 text-[56px] lg:text-[72px] text-[#EDE8DC] leading-[0.95] mb-6">
            Three tiers. No surprises.
          </h2>
          <p className="font-cormorant font-300 italic text-[20px] text-[#9DA8B7] max-w-2xl mx-auto">
            All pricing published. No setup fees. No lock-in contracts. 14-day complimentary trial on all plans.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-6">
            <span className={`font-syne text-[14px] transition-colors duration-300 ${!isAnnual ? 'text-[#EDE8DC]' : 'text-[#5C6678]'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-[#1C2029] border border-[#252B37] rounded-full p-1 relative transition-colors duration-300"
            >
              <div className={`w-5 h-5 bg-[#0EA5E9] rounded-full transition-all duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`font-syne text-[14px] transition-colors duration-300 ${isAnnual ? 'text-[#EDE8DC]' : 'text-[#5C6678]'}`}>Annual</span>
          </div>
          {isAnnual && (
            <span className="font-mono text-[11px] text-[#0EA5E9] tracking-wider uppercase animate-fade-in">
              Save two months
            </span>
          )}
        </div>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <div 
              key={i}
              className={`relative flex flex-col bg-[#13161C] border ${tier.recommended ? 'border-[#0EA5E9]/40' : 'border-[#252B37]'} rounded-[2px] p-10 lg:p-14`}
            >
              {tier.recommended && (
                <>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#0EA5E9]" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <span className="font-mono text-[11px] text-[#0EA5E9] tracking-[0.16em] uppercase">Recommended</span>
                  </div>
                </>
              )}

              <h3 className="font-syne font-700 text-[24px] text-[#EDE8DC] uppercase tracking-[0.04em] mb-2">{tier.name}</h3>
              <p className="font-cormorant font-300 italic text-[18px] text-[#9DA8B7] mb-8">{tier.tagline}</p>
              
              <div className="h-[1px] bg-[#252B37]/40 mb-8" />
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-mono text-[32px] text-[#EDE8DC] align-top">£</span>
                <span className="font-mono text-[80px] text-[#EDE8DC] leading-none tracking-tight">
                  {isAnnual ? tier.annual : tier.monthly}
                </span>
                <span className="font-mono text-[16px] text-[#5C6678] ml-2">/mo</span>
              </div>

              {isAnnual && (
                <p className="font-cormorant font-300 italic text-[16px] text-[#9DA8B7] mb-8">
                  £{tier.annual * 12} billed annually
                </p>
              )}

              <div className="h-[1px] bg-[#252B37]/40 mb-8" />

              <ul className="space-y-4 flex-1 mb-10">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className={`font-mono text-[12px] ${feature.active ? 'text-[#0EA5E9]' : 'text-[#353D4C]'}`}>
                      {feature.active ? '✓' : '—'}
                    </span>
                    <span className={`font-mono text-[12px] ${feature.active ? 'text-[#EDE8DC]' : 'text-[#353D4C]'}`}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.recommended ? "prominent" : "primary"} 
                className="w-full"
                href={`/enquire?plan=${tier.name.toLowerCase()}`}
              >
                Enquire — {tier.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-16 text-center font-cormorant font-300 italic text-[18px] text-[#9DA8B7]">
          All plans begin with a 14-day complimentary trial. We don&apos;t require a payment card to start.
        </p>
      </div>
      
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
