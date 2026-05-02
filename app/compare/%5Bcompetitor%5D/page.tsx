import Eyebrow from "@/components/ui/eyebrow";
import ClosingCTA from "@/components/home/closing-cta";

interface CompetitorData {
  name: string;
  description: string;
  founded: string;
  target: string;
  headline: string;
  seo_target: string;
  summary_paragraph: string;
  comparison_rows: { feature: string; forecouriq: string; competitor: string }[];
}

const COMPARISON_DATA: Record<string, CompetitorData> = {
  "click-dealer": {
    name: "Click Dealer",
    description: "Click Dealer is one of the longest-established dealer platform providers in the UK, serving approximately 1,800 dealers. It offers websites, DMS, and advertising feed management.",
    founded: "2003",
    target: "Independent and franchise dealers, particularly in the volume end of the market",
    headline: "ForecourIQ vs Click Dealer — Which platform is right for your dealership?",
    seo_target: "Click Dealer alternative UK",
    summary_paragraph: "Click Dealer is a trusted name built over two decades. ForecourIQ is built for the next two. If you are a dealer who wants modern infrastructure, AI buying intelligence, and a website that competes with franchise brands — this comparison explains the difference.",
    comparison_rows: [
      { feature: "AI Buying Intelligence", forecouriq: "✓", competitor: "—" },
      { feature: "Regional Market Demand Data", forecouriq: "✓", competitor: "—" },
      { feature: "Private Seller Monitoring", forecouriq: "✓", competitor: "—" },
      { feature: "Website Design Standard", forecouriq: "Bespoke, Next.js 15", competitor: "Template-based" },
      { feature: "Pricing Transparency", forecouriq: "Published", competitor: "Quote-required" },
      { feature: "Lock-in Contract", forecouriq: "None", competitor: "Typically 12 months" },
      { feature: "Local SEO Architecture", forecouriq: "Native", competitor: "Add-on" },
      { feature: "Onboarding Time", forecouriq: "48 hours", competitor: "Variable" },
      { feature: "Unified Lead Inbox", forecouriq: "✓", competitor: "✓" },
      { feature: "AutoTrader Sync", forecouriq: "✓", competitor: "✓" },
      { feature: "DVLA Lookup", forecouriq: "✓", competitor: "✓" },
      { feature: "HMRC MTD Compliant", forecouriq: "✓", competitor: "✓" },
      { feature: "FCA Audit Trail", forecouriq: "✓", competitor: "✓" },
      { feature: "Part-Exchange Widget", forecouriq: "✓", competitor: "✓" },
      { feature: "API Access", forecouriq: "✓ (Elite)", competitor: "Restricted" },
      { feature: "Cloud-Native Infrastructure", forecouriq: "✓", competitor: "Partial" },
      { feature: "Page Load Speed", forecouriq: "<1s", competitor: "2s - 4s" },
      { feature: "Mobile-First DMS", forecouriq: "✓", competitor: "Partial" },
      { feature: "Automated SMS/Email", forecouriq: "✓", competitor: "✓" },
      { feature: "White-Glove Onboarding", forecouriq: "✓ (Elite)", competitor: "Varies" },
    ]
  },
  "spidersnet": {
    name: "SpidersNet",
    description: "SpidersNet (operating as Autopromotor) is a UK dealer platform offering bespoke website design and DMS functionality. It won Dealer Management System of the Year 2023-24.",
    founded: "2000s",
    target: "Independent dealers, particularly regional independents",
    headline: "ForecourIQ vs SpidersNet — Choosing the right dealer platform",
    seo_target: "SpidersNet alternative",
    summary_paragraph: "SpidersNet produces well-regarded dealer websites and has earned strong industry trust. ForecourIQ adds the intelligence layer — AI buying signals, regional market data, and private seller monitoring — that SpidersNet does not offer.",
    comparison_rows: [
      { feature: "AI Buying Intelligence", forecouriq: "✓", competitor: "—" },
      { feature: "Regional Market Demand Data", forecouriq: "✓", competitor: "—" },
      { feature: "Private Seller Monitoring", forecouriq: "✓", competitor: "—" },
      { feature: "Bespoke Design", forecouriq: "✓", competitor: "✓" },
      { feature: "Next.js 15 Framework", forecouriq: "✓", competitor: "—" },
      { feature: "DMS Functionality", forecouriq: "Full", competitor: "Full" },
      { feature: "Pricing Transparency", forecouriq: "Published", competitor: "Quote-required" },
      { feature: "Onboarding Time", forecouriq: "48 hours", competitor: "Variable" },
      { feature: "Lead Management", forecouriq: "Unified", competitor: "Unified" },
      { feature: "Finance Integrations", forecouriq: "✓", competitor: "✓" },
      { feature: "Part-Exchange Data", forecouriq: "CAP HPI", competitor: "CAP HPI" },
      { feature: "Automated Follow-up", forecouriq: "✓", competitor: "Limited" },
      { feature: "SEO Performance", forecouriq: "Native Architecture", competitor: "Service-based" },
      { feature: "Days-to-Sell Intelligence", forecouriq: "✓", competitor: "—" },
      { feature: "Portfolio Health Scoring", forecouriq: "✓", competitor: "—" },
      { feature: "Auction Feed Monitoring", forecouriq: "✓", competitor: "—" },
      { feature: "MTD VAT Compliance", forecouriq: "✓", competitor: "✓" },
      { feature: "FCA Compliance Logs", forecouriq: "✓", competitor: "✓" },
      { feature: "Support Model", forecouriq: "Dedicated", competitor: "Ticket-based" },
      { feature: "Commitment", forecouriq: "None", competitor: "Contractual" },
    ]
  },
  "vehiso": {
    name: "Vehiso",
    description: "Vehiso is a modern SaaS dealer platform operating at the entry-level of the market, with plans from £49/month. It offers a fast-launch website and basic DMS functionality.",
    founded: "2019",
    target: "Small independent dealers, new-to-market dealers, budget-conscious operators",
    headline: "ForecourIQ vs Vehiso — Comparing UK dealer platforms",
    seo_target: "Vehiso alternative",
    summary_paragraph: "Vehiso is a capable entry-level platform at a competitive price. ForecourIQ is a different proposition — bespoke design, AI intelligence, and a platform that scales with a growing dealership. The right choice depends on where you want your dealership to be in three years.",
    comparison_rows: [
      { feature: "AI Buying Intelligence", forecouriq: "✓", competitor: "—" },
      { feature: "Regional Market Demand Data", forecouriq: "✓", competitor: "—" },
      { feature: "Design Standard", forecouriq: "Bespoke / Luxury", competitor: "Template / Functional" },
      { feature: "Entry Price", forecouriq: "£149/mo", competitor: "£49/mo" },
      { feature: "Enterprise DMS", forecouriq: "✓", competitor: "Basic" },
      { feature: "Managed Onboarding", forecouriq: "✓", competitor: "Self-serve" },
      { feature: "Finance Integrations", forecouriq: "Codeweavers/iVendi", competitor: "Basic" },
      { feature: "SEO Architecture", forecouriq: "Full Programmatic", competitor: "Standard" },
      { feature: "Lead Automation", forecouriq: "✓", competitor: "—" },
      { feature: "DVLA/HPI Sync", forecouriq: "✓", competitor: "✓" },
      { feature: "Multi-Portal Sync", forecouriq: "✓", competitor: "✓" },
      { feature: "HMRC Compliance", forecouriq: "✓", competitor: "✓" },
      { feature: "FCA Compliance", forecouriq: "✓", competitor: "✓" },
      { feature: "Days-to-Sell Forecast", forecouriq: "✓", competitor: "—" },
      { feature: "Auction Integrations", forecouriq: "✓", competitor: "—" },
      { feature: "Custom Domain Support", forecouriq: "✓", competitor: "✓" },
      { feature: "SSL & Security", forecouriq: "Managed", competitor: "Managed" },
      { feature: "Analytics & Reporting", forecouriq: "Advanced", competitor: "Standard" },
      { feature: "Team Management", forecouriq: "Unlimited (Elite)", competitor: "Limited" },
      { feature: "Account Management", forecouriq: "Dedicated", competitor: "Email Only" },
    ]
  }
};

export async function generateStaticParams() {
  return [
    { competitor: 'click-dealer' },
    { competitor: 'spidersnet' },
    { competitor: 'vehiso' }
  ];
}

export default async function ComparePage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor: competitorSlug } = await params;
  const competitor = COMPARISON_DATA[competitorSlug];

  if (!competitor) return null;

  return (
    <div className="flex flex-col w-full bg-[#07080B]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 lg:px-20 pt-20">
        <div className="max-w-container mx-auto w-full">
          <Eyebrow className="mb-8">Comparison</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[72px] text-[#EDE8DC] leading-[0.95] max-w-4xl mb-8">
            {competitor.headline}
          </h1>
          <p className="font-cormorant font-300 italic text-[20px] text-[#9DA8B7] max-w-2xl">
            {competitor.summary_paragraph}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0D0F14] py-[100px] px-6 lg:px-20 border-y border-[#252B37]/30">
        <div className="max-w-container mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-syne font-700 text-[24px] text-[#EDE8DC] mb-6">About {competitor.name}</h2>
            <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed mb-8">
              {competitor.description}
            </p>
            <p className="font-mono text-[11px] text-[#5C6678] tracking-[0.12em] uppercase">
              FOUNDED: {competitor.founded} · TARGET MARKET: {competitor.target}
            </p>
          </div>
        </div>
      </section>

      {/* Head to Head */}
      <section className="bg-[#07080B] py-[180px] px-6 lg:px-20 overflow-x-auto">
        <div className="max-w-container mx-auto min-w-[800px]">
          <h2 className="font-syne font-700 text-[32px] text-[#EDE8DC] mb-12">Head to head</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#252B37]">
                <th className="py-8 text-left w-2/5 font-mono text-[11px] text-[#5C6678] uppercase">Feature</th>
                <th className="py-8 text-center w-[30%] font-syne font-700 text-[18px] text-[#39FF14]">ForecourIQ</th>
                <th className="py-8 text-center w-[30%] font-syne font-700 text-[18px] text-[#EDE8DC]">{competitor.name}</th>
              </tr>
            </thead>
            <tbody>
              {competitor.comparison_rows.map((row, i) => (
                <tr key={i} className="border-b border-[#252B37]/10 hover:bg-[#EDE8DC]/[0.02] transition-colors">
                  <td className="py-5 px-4 font-cormorant text-[18px] text-[#9DA8B7]">{row.feature}</td>
                  <td className="py-5 text-center font-mono text-[14px] text-[#EDE8DC]">{row.forecouriq}</td>
                  <td className="py-5 text-center font-mono text-[14px] text-[#5C6678]">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Making the switch */}
      <section className="bg-[#0D0F14] py-[180px] px-6 lg:px-20">
        <div className="max-w-container mx-auto">
          <h2 className="font-syne font-700 text-[32px] text-[#EDE8DC] mb-16">Migrating from {competitor.name} to ForecourIQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { t: "Consultation", b: "We review your existing setup, portal feeds, and data volume to build a specific migration plan." },
              { t: "Data Export", b: "We work with you to export your stock and customer records from your current platform safely." },
              { t: "Parallel Run", b: "We configure your ForecourIQ environment and test portal feeds while your old site stays live." },
              { t: "Switchover", b: "A clean cut-over with 1:1 URL redirects to protect your SEO ranking during the transition." }
            ].map((step, i) => (
              <div key={i} className="space-y-6">
                <span className="font-mono text-[24px] text-[#39FF14]">0{i+1}</span>
                <h3 className="font-syne font-700 text-[18px] text-[#EDE8DC] uppercase tracking-wide">{step.t}</h3>
                <p className="font-cormorant font-300 text-[16px] text-[#9DA8B7] leading-relaxed">{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
