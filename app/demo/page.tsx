"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col w-full bg-[#07080B]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 lg:px-20 pt-20">
        <div className="max-w-container mx-auto w-full">
          <Eyebrow className="mb-8">Book a Demonstration</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[72px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8">
            See the platform. Ask the questions.
          </h1>
          <p className="font-cormorant font-300 italic text-[20px] text-[#9DA8B7] max-w-md">
            A 15-minute walkthrough with a ForecourIQ specialist. No sales pressure. We show you the platform — you decide if it&apos;s right for your dealership.
          </p>
        </div>
      </section>

      <section className="py-[100px] px-6 lg:px-20">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: What to expect */}
          <div className="lg:col-span-5">
            <h2 className="font-syne font-700 text-[24px] text-[#EDE8DC] mb-12">What the demonstration covers</h2>
            <div className="space-y-12">
              {[
                { n: "01", h: "Your dealer website", b: "We show you what your dealership's ForecourIQ website would look like — built on your branding, your stock, your location." },
                { n: "02", h: "The DMS", b: "A live walkthrough of the stock management, lead inbox, and compliance tools relevant to your dealership size." },
                { n: "03", h: "The Command Centre", b: "We run a live buying signal generation for your region — you see the AI recommendations that would be generated for your specific market." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="font-mono text-[14px] text-[#0EA5E9] mt-1">{item.n}</span>
                  <div>
                    <h3 className="font-syne font-700 text-[18px] text-[#EDE8DC] mb-3">{item.h}</h3>
                    <p className="font-cormorant font-300 text-[16px] text-[#9DA8B7] leading-relaxed">
                      {item.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-[#252B37]/30">
              <p className="font-mono text-[11px] text-[#5C6678] tracking-[0.16em] uppercase">
                DURATION: 15 MINUTES · REMOTE OR IN-PERSON · NO OBLIGATION
              </p>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D0F14] border border-[#252B37] rounded-[2px] p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-20 animate-reveal">
                  <span className="font-mono text-[14px] text-[#0EA5E9] block mb-6">THANK YOU</span>
                  <h3 className="font-cormorant font-600 text-[32px] text-[#EDE8DC] mb-6">Request Received.</h3>
                  <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] max-w-sm mx-auto">
                    A ForecourIQ specialist will contact you within one business hour to confirm your demonstration time.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">Full Name</label>
                      <input required name="name" type="text" className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">Dealership Name</label>
                      <input required name="dealership" type="text" className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">Email Address</label>
                      <input required name="email" type="email" className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">Phone Number</label>
                      <input required name="phone" type="tel" className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">Vehicles in Stock</label>
                      <select required name="stockSize" className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors appearance-none">
                        <option value="under-20">Under 20</option>
                        <option value="20-50">20-50</option>
                        <option value="50-100">50-100</option>
                        <option value="over-100">Over 100</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">Current Platform</label>
                      <input name="currentPlatform" type="text" placeholder="Click Dealer, SpidersNet, none, etc." className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">How did you hear about us?</label>
                    <select required name="source" className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors appearance-none">
                      <option value="google">Google</option>
                      <option value="autotrader">AutoTrader</option>
                      <option value="referred">Referred</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-syne font-700 text-[13px] text-[#5C6678] uppercase">Anything specific you&apos;d like to see?</label>
                    <textarea name="message" rows={4} className="w-full bg-[#13161C] border border-[#252B37] rounded-[2px] p-4 text-[#EDE8DC] font-syne focus:border-[#0EA5E9]/40 outline-none transition-colors resize-none" />
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="primary" className="w-full justify-center py-5 text-[16px]">
                      {isSubmitting ? "Sending Request..." : "Book Demonstration"}
                    </Button>
                    <p className="mt-4 font-mono text-[10px] text-[#5C6678] text-center uppercase tracking-wider">
                      We respond to all requests within one business hour.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
