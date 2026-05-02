"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation
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

      gsap.fromTo(
        bottomRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          delay: 0.6,
        }
      );

      // Scroll indicator animation
      gsap.to(".scroll-cue-rect", {
        y: 32,
        repeat: -1,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen h-[100dvh] w-full bg-[#07080B] flex items-center overflow-hidden"
    >
      {/* Background Treatment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080B] via-[#07080B] via-40% to-transparent z-10" />
        <div 
          className="absolute right-0 top-0 w-full h-full lg:w-[80%] bg-contain bg-no-repeat bg-right-bottom lg:bg-right opacity-90"
          style={{ backgroundImage: "url('/images/supercar-hero.png')" }}
        >
          {/* Subtle CSS Noise placeholder */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        <div ref={contentRef} className="max-w-[50%] pt-[5vh]">
          <Eyebrow className="mb-8">The platform for independent dealers</Eyebrow>
          
          <h1 className="font-cormorant font-600 text-[72px] lg:text-[96px] text-[#EDE8DC] leading-[0.92] tracking-[-0.03em] mb-12">
            Intelligence.<br />
            The unfair<br />
            advantage.
          </h1>

          <p className="font-cormorant font-300 italic text-[20px] lg:text-[22px] text-[#9DA8B7] max-w-[480px] mb-10 leading-relaxed">
            The unified ecosystem for the modern forecourt. Bespoke dealer websites, a cloud-native DMS, and AI buying intelligence — all natively integrated with the UK&apos;s leading vehicle marketplaces.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button href="/demo" variant="primary">
              Book a Demonstration
            </Button>
            <Button href="/features" variant="ghost">
              View the Platform
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Elements */}
      <div ref={bottomRef} className="absolute bottom-12 left-0 w-full px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-end gap-8 z-20">
        {/* Scroll Cue */}
        <div className="flex flex-col items-start">
          <div className="w-[1px] h-10 bg-[#252B37] relative overflow-hidden mb-4">
            <div className="scroll-cue-rect absolute top-0 left-[-1.5px] w-1 h-2 bg-[#0EA5E9]" />
          </div>
          <span className="font-mono text-[11px] text-[#5C6678] tracking-[0.12em] uppercase">
            Scroll to explore ↓
          </span>
        </div>

        {/* Data Pills */}
        <div className="flex flex-col gap-3">
          <div className="px-5 py-3 border border-[#0EA5E9]/25 rounded-[2px] font-mono text-[11px] text-[#EDE8DC] uppercase tracking-[0.12em] bg-[#0EA5E9]/[0.08] backdrop-blur-sm">
            100+ Active Dealers
          </div>
          <div className="px-5 py-3 border border-[#0EA5E9]/25 rounded-[2px] font-mono text-[11px] text-[#EDE8DC] uppercase tracking-[0.12em] bg-[#0EA5E9]/[0.08] backdrop-blur-sm">
            48hr Onboarding
          </div>
          <div className="px-5 py-3 border border-[#0EA5E9]/25 rounded-[2px] font-mono text-[11px] text-[#EDE8DC] uppercase tracking-[0.12em] bg-[#0EA5E9]/[0.08] backdrop-blur-sm">
            14-Day Trial
          </div>
        </div>
      </div>
    </section>
  );
}
