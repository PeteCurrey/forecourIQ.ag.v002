import Hero from "@/components/home/hero";
import TrustStrip from "@/components/home/trust-strip";
import Problem from "@/components/home/problem";
import ProductShowcase from "@/components/home/product-showcase";
import Stats from "@/components/home/stats";
import HowItWorks from "@/components/home/how-it-works";
import Integrations from "@/components/home/integrations";
import PricingPreview from "@/components/home/pricing-preview";
import Testimonials from "@/components/home/testimonials";
import ClosingCTA from "@/components/home/closing-cta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <Problem />
      <ProductShowcase />
      <Stats />
      <HowItWorks />
      <Integrations />
      <PricingPreview />
      <Testimonials />
      <ClosingCTA />
    </div>
  );
}
