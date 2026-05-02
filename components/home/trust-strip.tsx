"use client";

import React from "react";

const LOGOS = [
  "AutoTrader",
  "CAP HPI",
  "eBay Motors",
  "DVLA",
  "Codeweavers",
  "BCA Auctions",
  "Manheim",
  "CarGurus",
  "iVendi",
];

export default function TrustStrip() {
  return (
    <section className="h-16 bg-[#0D0F14] border-y border-[#252B37]/30 flex items-center px-6 lg:px-20 overflow-hidden">
      <div className="flex justify-between items-center w-full max-w-container mx-auto">
        <span className="font-mono text-[11px] text-[#5C6678] uppercase tracking-[0.16em] whitespace-nowrap">
          Connected to
        </span>

        <div className="flex-1 px-12 overflow-hidden relative">
          {/* Marquee Gradient Mask */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0D0F14] via-transparent via-20% to-transparent" />
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-l from-[#0D0F14] via-transparent via-20% to-transparent" />

          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <React.Fragment key={index}>
                <span className="font-mono text-[12px] text-[#9DA8B7] tracking-tight">
                  {logo}
                </span>
                {index < (LOGOS.length * 2) - 1 && (
                  <span className="text-[#39FF14] opacity-60">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <span className="font-mono text-[11px] text-[#5C6678] uppercase tracking-[0.16em] whitespace-nowrap">
          UK&apos;s Leading Dealer Integrations
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
