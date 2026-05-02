"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";

const PROBLEMS = [
  {
    id: "01",
    eyebrow: "Problem One",
    title: "Your website is losing you customers you never knew you had.",
    description: "Buyers search. If you don't appear, you don't exist. Independent dealers have lost enormous ground to franchise sites and aggregators built on infrastructure they can't match. An outdated site isn't just aesthetic — it's revenue walking out the door.",
    solution: "ForecourIQ dealer websites: Next.js 15, sub-1s loads, full local SEO architecture.",
    visual: (
      <div className="bg-[#0D0F14] border border-[#252B37] rounded-[2px] p-12 flex flex-col justify-center h-full">
        <h4 className="font-mono text-[11px] text-[#5C6678] uppercase tracking-[0.16em] mb-8">Google Search Visibility</h4>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between font-mono text-[11px] text-[#9DA8B7] mb-2">
              <span>Average Independent Dealer</span>
              <span>Pos. 14</span>
            </div>
            <div className="h-2 bg-[#252B37] w-full">
              <div className="h-full bg-[#353D4C] w-[40%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-mono text-[11px] text-[#39FF14] mb-2">
              <span>ForecourIQ Dealer Average</span>
              <span>Pos. 3</span>
            </div>
            <div className="h-2 bg-[#252B37] w-full">
              <div className="h-full bg-[#39FF14] w-[90%]" />
            </div>
          </div>
        </div>
      </div>
    ),
    layout: "7/5"
  },
  {
    id: "02",
    eyebrow: "Problem Two",
    title: "Your operations are held together with spreadsheets.",
    description: "Stock in one tool. Leads in another. Finance enquiries in email. AutoTrader in a browser tab that's always out of date. For every car you sell, you spend 90 minutes on admin that earns you nothing.",
    solution: "ForecourIQ DMS: stock, leads, compliance, sync — one platform.",
    visual: (
      <div className="bg-[#0D0F14] border border-[#252B37] rounded-[2px] h-full overflow-hidden flex flex-col">
        <div className="p-4 border-b border-[#252B37]/40 flex justify-between items-center">
          <span className="font-mono text-[10px] text-[#5C6678] uppercase tracking-wider">Stock Management</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C94040]/50" />
            <div className="w-2 h-2 rounded-full bg-[#D4922A]/50" />
            <div className="w-2 h-2 rounded-full bg-[#3DB87A]/50" />
          </div>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left font-mono text-[10px]">
            <thead>
              <tr className="border-b border-[#252B37]/20 text-[#5C6678]">
                <th className="p-4 font-normal">REG</th>
                <th className="p-4 font-normal">VEHICLE</th>
                <th className="p-4 font-normal">PRICE</th>
                <th className="p-4 font-normal">MARGIN</th>
              </tr>
            </thead>
            <tbody className="text-[#9DA8B7]">
              <tr className="border-b border-[#252B37]/10">
                <td className="p-4">LR71 FKZ</td>
                <td className="p-4">BMW 320d M Sport</td>
                <td className="p-4">£28,450</td>
                <td className="p-4 text-[#3DB87A]">£3,200</td>
              </tr>
              <tr className="border-b border-[#252B37]/10">
                <td className="p-4">AV69 OXP</td>
                <td className="p-4">Audi A3 S Line</td>
                <td className="p-4">£19,990</td>
                <td className="p-4 text-[#D4922A]">£1,800</td>
              </tr>
              <tr>
                <td className="p-4">CP20 VLY</td>
                <td className="p-4">VW Golf GTI</td>
                <td className="p-4">£24,750</td>
                <td className="p-4 text-[#C94040]">£950</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    layout: "5/7"
  },
  {
    id: "03",
    eyebrow: "Problem Three",
    title: "You're buying on instinct. Your competitors are buying on data.",
    description: "Auction floors reward preparation. The dealer who knows what their local market wants — make, model, spec, colour, price point — before the auction starts wins the car and the margin. Most dealers never had access to that intelligence.",
    solution: "ForecourIQ Buying Command Centre: AI-driven market intelligence for the UK independent.",
    visual: (
      <div className="bg-[#0D0F14] border border-[#252B37] rounded-[2px] p-8 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <span className="font-mono text-[10px] text-[#5C6678] uppercase tracking-wider">Buying Command Centre</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3DB87A] animate-pulse" />
            <span className="font-mono text-[10px] text-[#3DB87A] tracking-widest">LIVE</span>
          </div>
        </div>
        <div className="space-y-4 flex-1">
          {[
            { v: "BMW 320d", d: "HIGH", m: "+£3.2k", a: "BUY" },
            { v: "Audi A3", d: "HIGH", m: "+£2.8k", a: "BUY" },
            { v: "VW Golf", d: "MED", m: "+£2.1k", a: "HOLD" },
            { v: "RR Evoque", d: "HIGH", m: "+£4.4k", a: "BUY" },
          ].map((row, i) => (
            <div key={i} className="flex justify-between items-center border-b border-[#252B37]/10 pb-3">
              <span className="font-mono text-[11px] text-[#EDE8DC]">{row.v}</span>
              <div className="flex gap-6 items-center">
                <span className="font-mono text-[10px] text-[#5C6678]">{row.d}</span>
                <span className={`font-mono text-[11px] ${row.a === 'BUY' ? 'text-[#39FF14]' : 'text-[#5C6678]'}`}>{row.a}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between border-t border-[#252B37]/40 pt-4">
          <div className="text-center">
            <div className="font-mono text-[10px] text-[#5C6678]">SCORE</div>
            <div className="font-mono text-[12px] text-[#EDE8DC]">84</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[10px] text-[#5C6678]">SIGNALS</div>
            <div className="font-mono text-[12px] text-[#EDE8DC]">8</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[10px] text-[#5C6678]">DAYS</div>
            <div className="font-mono text-[12px] text-[#EDE8DC]">16</div>
          </div>
        </div>
      </div>
    ),
    layout: "7/5"
  }
];

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      PROBLEMS.forEach((_, i) => {
        const block = `.problem-block-${i}`;
        const left = `${block} .col-left`;
        const right = `${block} .col-right`;

        gsap.fromTo(
          [left, right],
          { 
            opacity: 0, 
            x: (i, el) => el.classList.contains('col-left') ? -24 : 24 
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#07080B] py-[180px] px-6 lg:px-20 overflow-hidden">
      <div className="max-w-container mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <Eyebrow className="mb-8">The Problem</Eyebrow>
            <h2 className="font-cormorant font-600 text-[56px] lg:text-[80px] text-[#EDE8DC] leading-[0.95]">
              Most dealers are running tomorrow&apos;s market on yesterday&apos;s tools.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-16">
            <p className="font-cormorant font-300 italic text-[20px] lg:text-[22px] text-[#9DA8B7] leading-relaxed">
              The independent dealer sector is worth £40 billion annually. The tools serving it look like they were built in 2009.
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-[#252B37]/30 my-20" />

        {/* Problem Blocks */}
        <div className="space-y-[180px]">
          {PROBLEMS.map((problem, i) => (
            <div key={problem.id} className={`problem-block-${i} grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative`}>
              {/* Marginal Watermark */}
              <div className="absolute top-0 right-0 lg:right-4 font-syne font-700 text-[150px] lg:text-[200px] text-[#252B37]/10 pointer-events-none select-none -z-10 leading-none">
                {problem.id}
              </div>

              {problem.layout === "7/5" ? (
                <>
                  <div className="col-left lg:col-span-7">
                    <Eyebrow className="mb-6">{problem.eyebrow}</Eyebrow>
                    <h3 className="font-syne font-700 text-[32px] lg:text-[40px] text-[#EDE8DC] leading-tight mb-8">
                      {problem.title}
                    </h3>
                    <p className="font-cormorant font-300 text-[18px] lg:text-[20px] text-[#9DA8B7] leading-relaxed mb-8">
                      {problem.description}
                    </p>
                    <p className="font-cormorant font-300 italic text-[16px] lg:text-[18px] text-[#39FF14]">
                      {problem.solution}
                    </p>
                  </div>
                  <div className="col-right lg:col-span-5 h-[400px]">
                    {problem.visual}
                  </div>
                </>
              ) : (
                <>
                  <div className="col-left lg:col-span-5 h-[400px]">
                    {problem.visual}
                  </div>
                  <div className="col-right lg:col-span-7">
                    <Eyebrow className="mb-6">{problem.eyebrow}</Eyebrow>
                    <h3 className="font-syne font-700 text-[32px] lg:text-[40px] text-[#EDE8DC] leading-tight mb-8">
                      {problem.title}
                    </h3>
                    <p className="font-cormorant font-300 text-[18px] lg:text-[20px] text-[#9DA8B7] leading-relaxed mb-8">
                      {problem.description}
                    </p>
                    <p className="font-cormorant font-300 italic text-[16px] lg:text-[18px] text-[#39FF14]">
                      {problem.solution}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
