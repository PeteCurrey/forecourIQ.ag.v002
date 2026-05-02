"use client";

import React, { useState } from "react";
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

const COMPARISON = [
  {
    group: "DEALER WEBSITE",
    rows: [
      { name: "Bespoke design", values: ["✓", "✓", "✓"] },
      { name: "Vehicle SEO pages", values: ["✓", "✓", "✓"] },
      { name: "AutoTrader + eBay sync", values: ["✓", "✓", "✓"] },
      { name: "Full portal sync (5 platforms)", values: ["—", "✓", "✓"] },
      { name: "Finance calculator (Codeweavers)", values: ["—", "✓", "✓"] },
      { name: "Part-exchange widget", values: ["✓", "✓", "✓"] },
      { name: "Custom domain", values: ["✓", "✓", "✓"] },
      { name: "Local SEO architecture", values: ["✓", "✓", "✓"] },
    ]
  },
  {
    group: "DEALER MANAGEMENT SYSTEM",
    rows: [
      { name: "Vehicles in DMS", values: ["30", "100", "Unlimited"] },
      { name: "DVLA lookup", values: ["✓", "✓", "✓"] },
      { name: "CAP HPI integration", values: ["—", "✓", "✓"] },
      { name: "Unified lead inbox", values: ["✓", "✓", "✓"] },
      { name: "Automated follow-up", values: ["—", "✓", "✓"] },
      { name: "Digital deal packs", values: ["✓", "✓", "✓"] },
      { name: "HMRC MTD compliant", values: ["✓", "✓", "✓"] },
      { name: "FCA audit trail", values: ["✓", "✓", "✓"] },
    ]
  },
  {
    group: "AI BUYING COMMAND CENTRE",
    rows: [
      { name: "AI daily buying signals", values: ["—", "✓", "✓"] },
      { name: "Regional demand intelligence", values: ["—", "✓", "✓"] },
      { name: "Price positioning alerts", values: ["—", "✓", "✓"] },
      { name: "Portfolio health scoring", values: ["—", "—", "✓"] },
      { name: "Private seller monitoring", values: ["—", "—", "✓"] },
      { name: "BCA + Manheim auction feeds", values: ["—", "—", "✓"] },
      { name: "Advanced analytics", values: ["—", "—", "✓"] },
    ]
  },
  {
    group: "SUPPORT & ONBOARDING",
    rows: [
      { name: "Onboarding", values: ["Self-serve", "Assisted", "White-glove"] },
      { name: "Support", values: ["Email", "Priority", "Dedicated manager"] },
      { name: "Locations", values: ["1", "3", "Unlimited"] },
      { name: "Team members", values: ["2", "5", "Unlimited"] },
      { name: "Quarterly business review", values: ["—", "—", "✓"] },
      { name: "API access", values: ["—", "—", "✓"] },
    ]
  }
];

const FAQS = [
  {
    q: "What happens after my 14-day trial?",
    a: "Your trial converts to the paid plan you selected. We'll email you three days before the trial ends. If you decide ForecourIQ isn't right for your dealership, cancel before the trial ends and you will not be charged. We do not require a payment card to start a trial."
  },
  {
    q: "Can I migrate from Click Dealer or another DMS?",
    a: "Yes. We have a migration process for dealers moving from Click Dealer, SpidersNet, Vehiso, and most other UK DMS providers. We import your existing stock data, transfer your lead history where possible, and reconfigure your portal feeds. Migration is included in the Professional and Elite onboarding. We aim to have migrated dealers operational within 48 hours of starting."
  },
  {
    q: "Is ForecourIQ compliant with HMRC Making Tax Digital?",
    a: "Yes. All pricing and transaction data is recorded in a MTD-compliant format. The platform supports VAT record-keeping requirements for digitally-linked records. We recommend confirming your specific VAT accounting requirements with your accountant — but ForecourIQ is designed to support MTD compliance from the ground up."
  },
  {
    q: "How does the AI Buying Command Centre generate recommendations?",
    a: "The Command Centre analyses your current stock position, your regional market demand data (sourced from AutoTrader market intelligence), your historical sales performance, and live classified pricing. It identifies gaps in your stock relative to what the market in your region is currently buying, and generates specific recommendations — make, model, year range, mileage band, target buy price, and projected margin — updated daily."
  },
  {
    q: "What portals does ForecourIQ sync with?",
    a: "Professional and Elite plans include full synchronisation with AutoTrader, eBay Motors, CarGurus, Motors.co.uk, and Facebook Marketplace. Starter plans include AutoTrader and eBay Motors. Stock is updated across all connected portals automatically when you update in ForecourIQ — no double-entry."
  },
  {
    q: "Do you offer a dedicated account manager?",
    a: "Elite plan dealers receive a dedicated UK-based account manager who is responsible for your account. They conduct quarterly business reviews, assist with platform configuration, and are available by direct phone and email. Professional plan dealers receive priority support. Starter plan dealers receive standard email support with a 24-hour response commitment."
  },
  {
    q: "Can I cancel at any time?",
    a: "Monthly plans can be cancelled at any time with 30 days notice. Annual plans can be cancelled with 30 days notice, with a pro-rata refund of remaining months less the first three. We do not operate long-term lock-in contracts. If you need to leave, we will export your stock data, customer records, and lead history in full."
  },
  {
    q: "What does 'white-glove onboarding' mean for Elite?",
    a: "Elite onboarding includes a full day at your dealership (or remote equivalent) with a ForecourIQ specialist. We configure the platform in full, photograph your setup for the account record, train your team in person, and stay until everything is operating correctly. We follow up at day 7, day 30, and day 90 to ensure you are getting maximum value."
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full bg-[#07080B]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 lg:px-20 pt-20">
        <div className="max-w-container mx-auto w-full">
          <Eyebrow className="mb-8">Investment</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[80px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8">
            Transparent pricing. No negotiations.
          </h1>
          <p className="font-cormorant font-300 italic text-[20px] text-[#9DA8B7] max-w-2xl">
            Every plan published. Every feature listed. What you see is what you pay.
          </p>
        </div>
      </section>

      {/* Pricing Panels */}
      <section className="bg-[#0D0F14] py-[100px] px-6 lg:px-20">
        <div className="max-w-container mx-auto">
          {/* Toggle */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <div className="flex items-center gap-6">
              <span className={`font-syne text-[14px] transition-colors duration-300 ${!isAnnual ? 'text-[#EDE8DC]' : 'text-[#5C6678]'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-7 bg-[#1C2029] border border-[#252B37] rounded-full p-1 relative transition-colors duration-300"
              >
                <div className={`w-5 h-5 bg-[#39FF14] rounded-full transition-all duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <span className={`font-syne text-[14px] transition-colors duration-300 ${isAnnual ? 'text-[#EDE8DC]' : 'text-[#5C6678]'}`}>Annual</span>
            </div>
            {isAnnual && (
              <span className="font-mono text-[11px] text-[#3DB87A] tracking-wider uppercase">
                Save two months
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TIERS.map((tier, i) => (
              <div 
                key={i}
                className={`relative flex flex-col bg-[#13161C] border ${tier.recommended ? 'border-[#39FF14]/40' : 'border-[#252B37]'} rounded-[2px] p-10 lg:p-14`}
              >
                {tier.recommended && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <span className="font-mono text-[11px] text-[#39FF14] tracking-[0.16em] uppercase">Recommended</span>
                  </div>
                )}
                <h3 className="font-syne font-700 text-[24px] text-[#EDE8DC] uppercase mb-2">{tier.name}</h3>
                <p className="font-cormorant font-300 italic text-[18px] text-[#9DA8B7] mb-8">{tier.tagline}</p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="font-mono text-[32px] text-[#EDE8DC]">£</span>
                  <span className="font-mono text-[80px] text-[#EDE8DC] leading-none tracking-tight">
                    {isAnnual ? tier.annual : tier.monthly}
                  </span>
                  <span className="font-mono text-[16px] text-[#5C6678] ml-2">/mo</span>
                </div>
                <div className="h-[1px] bg-[#252B37]/40 mb-8" />
                <ul className="space-y-4 flex-1 mb-10">
                  {tier.features.slice(0, 8).map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className={`font-mono text-[12px] ${feature.active ? 'text-[#3DB87A]' : 'text-[#353D4C]'}`}>
                        {feature.active ? '✓' : '—'}
                      </span>
                      <span className={`font-mono text-[12px] ${feature.active ? 'text-[#EDE8DC]' : 'text-[#353D4C]'}`}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button variant={tier.recommended ? "primary" : "secondary"} className="w-full" href="/demo">
                  Start 14-day trial
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#07080B] py-[180px] px-6 lg:px-20 overflow-x-auto">
        <div className="max-w-container mx-auto min-w-[800px]">
          <h2 className="font-syne font-700 text-[32px] text-[#EDE8DC] mb-12">Full feature comparison</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#252B37]">
                <th className="py-8 text-left w-1/4"></th>
                <th className="py-8 text-center w-1/4 font-syne font-700 text-[18px] text-[#EDE8DC]">Starter</th>
                <th className="py-8 text-center w-1/4 font-syne font-700 text-[18px] text-[#39FF14]">Professional</th>
                <th className="py-8 text-center w-1/4 font-syne font-700 text-[18px] text-[#EDE8DC]">Elite</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((group, i) => (
                <React.Fragment key={i}>
                  <tr className="bg-[#0D0F14]/30">
                    <td colSpan={4} className="py-6 px-4 font-mono text-[11px] text-[#39FF14] uppercase tracking-[0.2em]">
                      {group.group}
                    </td>
                  </tr>
                  {group.rows.map((row, j) => (
                    <tr key={j} className="border-b border-[#252B37]/10 hover:bg-[#EDE8DC]/[0.02] transition-colors">
                      <td className="py-5 px-4 font-cormorant text-[18px] text-[#9DA8B7]">{row.name}</td>
                      {row.values.map((val, k) => (
                        <td key={k} className={`py-5 text-center font-mono text-[14px] ${val === '✓' ? 'text-[#3DB87A]' : val === '—' ? 'text-[#353D4C]' : 'text-[#EDE8DC]'}`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0D0F14] py-[180px] px-6 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-syne font-700 text-[32px] text-[#EDE8DC] mb-16">Common questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-[#252B37]/30 pb-4">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span className={`font-syne font-700 text-[18px] transition-colors ${openFaq === i ? 'text-[#39FF14]' : 'text-[#EDE8DC] group-hover:text-[#39FF14]'}`}>
                    {faq.q}
                  </span>
                  <span className={`font-mono text-[18px] text-[#5C6678] transform transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed pb-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

