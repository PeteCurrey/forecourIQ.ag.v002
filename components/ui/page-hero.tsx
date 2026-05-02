"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string | React.ReactNode;
  description: string;
  backgroundImage: string;
}

export default function PageHero({ eyebrow, title, description, backgroundImage }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#07080B] flex items-center overflow-hidden"
    >
      {/* Background Treatment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080B] via-[#07080B] via-40% to-transparent z-10" />
        <div 
          className="absolute right-0 top-0 w-full h-full lg:w-[80%] bg-cover lg:bg-contain bg-no-repeat bg-right opacity-90 transition-transform duration-1000 scale-100"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        <div ref={contentRef} className="max-w-4xl">
          <Eyebrow className="mb-8">{eyebrow}</Eyebrow>
          
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[84px] text-[#EDE8DC] leading-[0.92] tracking-[-0.03em] mb-12">
            {title}
          </h1>

          <p className="font-cormorant font-300 italic text-[20px] lg:text-[22px] text-[#9DA8B7] max-w-[600px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
