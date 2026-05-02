"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import Image from "next/image";

const TESTIMONIALS = [
  {
    location: "Derbyshire",
    quote: "The buying command centre paid for the platform in three weeks. We're buying better stock and selling it faster.",
    author: "James Harrison",
    dealership: "Harrison Prestige Motors",
    year: "Active since 2024",
    metric: "−38% Days to sell · Q1 2026",
    image: "/images/testimonial-01.jpg"
  },
  {
    location: "South Yorkshire",
    quote: "We went from page four to page one for our key local searches in 60 days. Enquiries doubled.",
    author: "Sarah Watkins",
    dealership: "Watkins Independent",
    year: "Active since 2023",
    metric: "2× Monthly enquiries · 60 days",
    image: "/images/testimonial-02.jpg"
  },
  {
    location: "Leicestershire",
    quote: "The onboarding was two days. By day three we had leads coming in through channels we'd never had before.",
    author: "David Miller",
    dealership: "Miller & Sons Automotive",
    year: "Active since 2025",
    metric: "Live in 48 hours",
    image: "/images/testimonial-03.jpg"
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-block",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#07080B] py-[180px] px-6 lg:px-20 overflow-hidden">
      <div className="max-w-container mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <Eyebrow className="mb-8">Dealer Accounts</Eyebrow>
          <h2 className="font-cormorant font-600 text-[56px] lg:text-[72px] text-[#EDE8DC] leading-[0.95]">
            From the forecourt.
          </h2>
        </div>

        {/* Blocks */}
        <div className="flex flex-col">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialBlock key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
interface Testimonial {
  location: string;
  quote: string;
  author: string;
  dealership: string;
  year: string;
  metric: string;
  image: string;
}

function TestimonialBlock({ t }: { t: Testimonial }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="testimonial-block grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-20 border-t border-[#252B37]/30 first:border-t-0">
      {/* Image Panel */}
      <div className="lg:col-span-5 relative aspect-[3/4] bg-[#0D0F14] border border-[#1C2029] rounded-[2px] overflow-hidden group">
        {!imgError ? (
          <Image 
            src={t.image} 
            alt={t.author}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0D0F14]">
            <span className="font-mono text-[11px] text-[#353D4C]">PORTRAIT · PENDING</span>
          </div>
        )}
        
        {/* Fades */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(7,8,11,0)_30%,rgba(7,8,11,0.95)_100%)]" />
        
        {/* Nameplate */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-[#07080B]/75 backdrop-blur-sm border border-[#1C2029] rounded-[2px] p-4 lg:px-6">
            <p className="font-syne font-700 text-[14px] text-[#EDE8DC] mb-1">{t.author}</p>
            <p className="font-mono text-[10px] text-[#9DA8B7] tracking-wider">
              {t.dealership} · {t.location}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <Eyebrow className="mb-8">{t.location}</Eyebrow>
        <blockquote className="font-cormorant font-600 italic text-[32px] lg:text-[36px] text-[#EDE8DC] leading-[1.1] mb-12 max-w-lg">
          &quot;{t.quote}&quot;
        </blockquote>
        
        <div className="space-y-1 mb-6">
          <p className="font-syne font-700 text-[16px] text-[#EDE8DC]">{t.author}</p>
          <p className="font-mono text-[11px] text-[#5C6678] tracking-wider uppercase">
            {t.dealership} · {t.location} · {t.year}
          </p>
        </div>

        <span className="font-mono text-[11px] text-[#0EA5E9] tracking-[0.16em] uppercase">
          {t.metric}
        </span>
      </div>
    </div>
  );
}
