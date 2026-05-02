"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Button from "@/components/ui/button";

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content > *",
        { opacity: 0, y: 20 },
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
    <section ref={sectionRef} className="bg-[#0D0F14] py-[200px] px-6 lg:px-20 overflow-hidden">
      <div className="max-w-container mx-auto text-center cta-content flex flex-col items-center">
        <p className="font-cormorant font-300 italic text-[22px] text-[#9DA8B7] mb-8">
          For the dealers who understand that the forecourt is a precision instrument.
        </p>
        
        <h2 className="font-cormorant font-700 text-[96px] lg:text-[120px] text-[#EDE8DC] leading-[0.9] tracking-[-0.04em] mb-16">
          Enquire.
        </h2>

        <div className="w-[200px] h-[1px] bg-[#39FF14] mb-16" />

        <Button href="/demo" variant="primary" className="px-12 py-4">
          Book a Demonstration
        </Button>

        <p className="mt-8 font-mono text-[11px] text-[#5C6678] tracking-[0.16em] uppercase">
          14-day trial · 48-hour onboarding · No lock-in
        </p>
      </div>
    </section>
  );
}
