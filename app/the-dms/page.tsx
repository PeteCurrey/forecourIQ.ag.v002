"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";
import ClosingCTA from "@/components/home/closing-cta";

export default function DMSPage() {
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
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 lg:px-20 pt-20 overflow-hidden">
        <div className="max-w-container mx-auto w-full relative z-10">
          <Eyebrow className="mb-8 reveal-text">The Operational Core</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[80px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8 reveal-text">
            Goodbye spreadsheets.<br />Hello control.
          </h1>
          <p className="font-cormorant font-300 italic text-[22px] text-[#9DA8B7] max-w-2xl reveal-text">
            The ForecourIQ Dealer Management System is cloud-native, infinitely scalable, and built specifically for the high-performance UK independent. Everything from stock to FCA compliance, unified in one tab.
          </p>
        </div>
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] aspect-square bg-[#39FF14]/[0.02] rounded-full blur-[120px]" />
      </section>

      {/* Core Features */}
      <section className="reveal-section bg-[#0D0F14] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mb-12 leading-tight">
              A single source of truth for your dealership.
            </h2>
            <div className="space-y-10">
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#39FF14] mb-4 uppercase tracking-widest">Stock Ledger</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Real-time inventory management. Add a vehicle once, and it instantly syncs to your website, AutoTrader, eBay, and Motors.co.uk. Track preparation costs and live margins down to the penny.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#39FF14] mb-4 uppercase tracking-widest">FCA Compliance</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Automated IDD documentation, Initial Disclosure tracking, and finance commission disclosures built directly into the sales workflow. You can&apos;t accidentally be non-compliant.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#39FF14] mb-4 uppercase tracking-widest">Margin Intelligence</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Stop guessing your net profit. Our DMS tracks buy price, transport, refurb, warranty, and portal advertising costs per unit to give you true Net Stand-in Value (NSV).
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* UI Mockup */}
            <div className="relative aspect-[4/3] bg-[#07080B] border border-[#252B37] rounded-[2px] p-6 lg:p-10 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center border-b border-[#252B37] pb-6 mb-6">
                <span className="font-mono text-[12px] text-[#5C6678] tracking-widest uppercase">Stock Ledger</span>
                <span className="font-mono text-[12px] text-[#3DB87A] uppercase">All Systems Synced</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-[10px]">
                  <thead>
                    <tr className="border-b border-[#252B37]/20 text-[#5C6678]">
                      <th className="p-4 font-normal">REG</th>
                      <th className="p-4 font-normal">VEHICLE</th>
                      <th className="p-4 font-normal">PORTALS</th>
                      <th className="p-4 font-normal text-right">NSV</th>
                      <th className="p-4 font-normal text-right">RETAIL</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#9DA8B7]">
                    <tr className="border-b border-[#252B37]/10">
                      <td className="p-4 text-[#EDE8DC]">GT22 RSX</td>
                      <td className="p-4">Porsche 911 GT3 (992)</td>
                      <td className="p-4 flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#1A5276]" title="AutoTrader" />
                        <span className="w-3 h-3 rounded-full bg-[#85C1E9]" title="Website" />
                      </td>
                      <td className="p-4 text-right">£165,500</td>
                      <td className="p-4 text-right text-[#39FF14]">£185,000</td>
                    </tr>
                    <tr className="border-b border-[#252B37]/10">
                      <td className="p-4 text-[#EDE8DC]">AM70 VNT</td>
                      <td className="p-4">Aston Martin Vantage V8</td>
                      <td className="p-4 flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#1A5276]" />
                        <span className="w-3 h-3 rounded-full bg-[#85C1E9]" />
                        <span className="w-3 h-3 rounded-full bg-[#C0392B]" title="eBay" />
                      </td>
                      <td className="p-4 text-right">£82,500</td>
                      <td className="p-4 text-right text-[#39FF14]">£94,990</td>
                    </tr>
                    <tr className="border-b border-[#252B37]/10">
                      <td className="p-4 text-[#EDE8DC]">FR21 ROM</td>
                      <td className="p-4">Ferrari Roma</td>
                      <td className="p-4 flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#85C1E9]" />
                      </td>
                      <td className="p-4 text-right">£142,800</td>
                      <td className="p-4 text-right text-[#39FF14]">£159,750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-auto pt-6 border-t border-[#252B37]/20 flex justify-between">
                 <span className="font-mono text-[10px] text-[#5C6678]">TOTAL INVENTORY VALUE</span>
                 <span className="font-mono text-[14px] text-[#EDE8DC]">£1,452,900</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="reveal-section bg-[#07080B] py-[180px] px-6 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Eyebrow className="mb-8 justify-center">The Connectivity</Eyebrow>
          <h2 className="font-cormorant font-600 text-[44px] lg:text-[56px] text-[#EDE8DC] leading-tight mb-8">
            Write once. Publish everywhere.
          </h2>
          <p className="font-cormorant font-300 italic text-[22px] text-[#9DA8B7] mb-12">
            The ForecourIQ DMS acts as the central hub. Price changes, spec updates, and sold statuses are pushed to your website and all third-party portals simultaneously.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             {["AutoTrader", "Motors.co.uk", "eBay Motors", "CarGurus", "PistonHeads", "Facebook Catalog"].map((portal, i) => (
                <div key={i} className="px-6 py-3 border border-[#252B37] rounded-full font-mono text-[11px] text-[#5C6678] uppercase tracking-wider bg-[#0D0F14]">
                  {portal}
                </div>
             ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
