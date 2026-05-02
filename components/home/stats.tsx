"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-init";

export default function Stats() {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          const obj = { value: 0 };
          gsap.to(obj, {
            value: 38,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setCount(Math.floor(obj.value));
            },
          });
        },
        once: true,
      });

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#07080B] py-[160px] px-6 lg:px-20 overflow-hidden">
      <div className="max-w-container mx-auto text-center">
        <p className="font-cormorant font-300 italic text-[22px] text-[#9DA8B7] mb-8">
          Our dealers reduce days-to-sell by an average of
        </p>

        <div ref={numberRef} className="font-cormorant font-700 text-[150px] lg:text-[200px] text-[#EDE8DC] leading-none tracking-[-0.04em] mb-8 flex justify-center items-baseline">
          <span>{count}</span>
          <span className="text-[100px] lg:text-[120px]">%</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-[#252B37]" />
          <p className="font-mono text-[11px] text-[#5C6678] tracking-[0.2em] uppercase">
            Within 90 days · Based on active dealer portfolio · 2026
          </p>
          <div className="h-[1px] w-8 bg-[#252B37]" />
        </div>
      </div>
    </section>
  );
}
