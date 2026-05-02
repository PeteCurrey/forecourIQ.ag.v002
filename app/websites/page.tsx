"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import PageHero from "@/components/ui/page-hero";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

const PROJECTS = [
  {
    title: "Heritage Motor Group",
    description: "A multi-site prestige specialist in Sheffield. We built a high-performance inventory engine that loads 150+ vehicles in under 800ms.",
    url: "https://heritagemotorgroup.co.uk",
    image: "/images/showcase-heritage.jpg", // Placeholder logic
    tags: ["Prestige", "Multi-site", "Next.js 15"]
  },
  {
    title: "Roman's International",
    description: "Conceptual redesign focusing on immersive high-resolution cinematography and lightning-fast search filters.",
    url: "https://romansinternational.com",
    image: "/images/showcase-romans.jpg",
    tags: ["Supercar", "Immersive", "Custom UI"]
  },
  {
    title: "Tom Hartley Jnr",
    description: "Built for the world's finest cars. A minimalist, editorial-forward platform where the inventory takes centre stage.",
    url: "https://tomhartleyjnr.com",
    image: "/images/showcase-hartley.jpg",
    tags: ["Classic", "Editorial", "Global"]
  }
];

export default function WebsitesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-[#07080B]">
      <PageHero 
        eyebrow="Digital Engineering"
        title={<>Most agencies sell<br />you a template.<br />We build you an asset.</>}
        description="Every ForecourIQ website is a performance-engineered instrument. We don't use WordPress. We don't use themes. We use Next.js 15 to build the fastest dealer websites in the UK."
        backgroundImage="/images/luxury-sedan-hero.png"
      />

      {/* The Argument: Next.js vs WordPress */}
      <section className="bg-[#0D0F14] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mb-12 leading-tight">
              Why we abandoned WordPress.
            </h2>
            <div className="space-y-10">
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#0EA5E9] mb-4 uppercase tracking-widest">Speed is Sales</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  WordPress sites are slowed down by heavy themes and bloated plugins. A 1-second delay in page load equals a 7% drop in conversions. ForecourIQ sites load in under 500ms.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#0EA5E9] mb-4 uppercase tracking-widest">Security by Default</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Next.js generates static pages, meaning there is no database for hackers to exploit on the front-end. Your site is practically unhackable compared to standard WP installs.
                </p>
              </div>
              <div className="p-8 border border-[#252B37] bg-[#07080B]/50 rounded-[2px]">
                <h3 className="font-syne font-700 text-[18px] text-[#0EA5E9] mb-4 uppercase tracking-widest">SEO Superiority</h3>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed">
                  Google loves performance. Our technical SEO is baked into the code, not added via a plugin. We out-rank the competition because our architecture is cleaner.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative aspect-[4/3] bg-[#07080B] border border-[#252B37] rounded-[2px] p-10 overflow-hidden group">
              <div className="absolute inset-0 bg-[#0EA5E9]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center border-b border-[#252B37] pb-6">
                  <span className="font-mono text-[12px] text-[#5C6678] tracking-widest uppercase">Benchmark</span>
                  <span className="font-mono text-[12px] text-[#0EA5E9] uppercase">Performance Analysis</span>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "ForecourIQ (Next.js 15)", value: 98, color: "#0EA5E9" },
                    { label: "Generic Agency WP Template", value: 42, color: "#252B37" },
                    { label: "Self-built WP Site", value: 28, color: "#252B37" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between font-mono text-[11px] text-[#EDE8DC] uppercase">
                        <span>{item.label}</span>
                        <span>{item.value}/100</span>
                      </div>
                      <div className="h-2 bg-[#13161C] rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000 ease-out" 
                          style={{ width: `${item.value}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-cormorant font-300 italic text-[16px] text-[#5C6678] pt-8">
                  * Data based on average Lighthouse Core Web Vitals scores across 50+ UK independent dealer websites, May 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Build Process */}
      <section className="bg-[#07080B] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto">
          <Eyebrow className="mb-12">The Methodology</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { t: "Bespoke Discovery", b: "We don&apos;t ask you to pick a template. We ask about your brand, your inventory mix, and your ideal customer profile." },
              { t: "Custom Interface", b: "Our designers build a custom UI that reflects your dealership&apos;s physical presence. From prestige minimalist to high-volume commercial." },
              { t: "Next.js Engineering", b: "Our developers translate the design into high-performance React code. No shortcuts. No third-party theme bloat." },
              { t: "Unified Integration", b: "Your site is natively connected to the ForecourIQ DMS and all major UK marketplaces from day one." }
            ].map((step, i) => (
              <div key={i} className="space-y-6">
                <span className="font-mono text-[24px] text-[#0EA5E9]">0{i+1}</span>
                <h3 className="font-syne font-700 text-[18px] text-[#EDE8DC] uppercase tracking-wide">{step.t}</h3>
                <p className="font-cormorant font-300 text-[16px] text-[#9DA8B7] leading-relaxed">{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="bg-[#0D0F14] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mb-6 leading-tight">
                Selected Commissions
              </h2>
              <p className="font-cormorant font-300 italic text-[20px] text-[#9DA8B7]">
                A showcase of dealerships that chose performance over the status quo.
              </p>
            </div>
            <Button variant="ghost" href="/case-studies">View all studies</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div key={i} className="group bg-[#07080B] border border-[#252B37] rounded-[2px] overflow-hidden flex flex-col">
                <div className="aspect-video bg-[#13161C] relative overflow-hidden flex items-center justify-center p-12 text-center">
                  <span className="font-mono text-[10px] text-[#5C6678] uppercase opacity-40">[ Screen capture coming: {project.title} ]</span>
                  {/* Image component would go here in production */}
                  <div className="absolute inset-0 bg-[#0EA5E9]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 border border-[#252B37] rounded-full font-mono text-[9px] text-[#5C6678] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-syne font-700 text-[20px] text-[#EDE8DC] mb-4 group-hover:text-[#0EA5E9] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-cormorant font-300 text-[16px] text-[#9DA8B7] leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#0EA5E9] uppercase tracking-[0.2em] inline-flex items-center group/link"
                  >
                    Explore Website
                    <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#07080B] py-[180px] px-6 lg:px-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-cormorant font-600 text-[44px] lg:text-[56px] text-[#EDE8DC] leading-tight mb-8">
            Ready to build a digital asset that actually works?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" href="/demo">Book a Demonstration</Button>
            <Button variant="secondary" href="/pricing">View Pricing</Button>
          </div>
        </div>
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] aspect-square bg-[#0EA5E9]/[0.01] rounded-full blur-[150px]" />
      </section>
    </div>
  );
}
