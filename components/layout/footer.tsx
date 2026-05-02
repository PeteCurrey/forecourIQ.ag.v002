import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: [
      { label: "Bespoke Websites", href: "/websites" },
      { label: "Cloud DMS", href: "/the-dms" },
      { label: "Intelligent Buying", href: "/intelligent-buying" },
      { label: "Automated Leads", href: "/automated-leads" },
      { label: "Competitor Monitoring", href: "/competitor-monitoring" },
      { label: "Daily Briefing", href: "/daily-briefing" },
      { label: "All Features", href: "/features" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs Click Dealer", href: "/compare/click-dealer" },
      { label: "vs SpidersNet", href: "/compare/spidersnet" },
      { label: "vs Vehiso", href: "/compare/vehiso" },
      { label: "vs DealerWeb", href: "/compare/dealerweb" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Margin Calculator", href: "/tools/margin" },
      { label: "Days to Sell Tool", href: "/tools/days-to-sell" },
      { label: "AutoTrader Guide", href: "/resources/autotrader" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Demo", href: "/demo" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "FCA Compliance", href: "/compliance" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0F14] border-t border-[#252B37]/40 pt-20 pb-12 px-6 lg:px-20">
      <div className="max-w-container mx-auto">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <Link href="/" className="flex items-center">
            <span className="font-syne font-700 text-[18px] text-[#EDE8DC] tracking-[-0.04em]">
              Forecour
            </span>
            <span className="font-syne font-700 text-[18px] text-[#0EA5E9] tracking-[-0.04em]">
              IQ
            </span>
          </Link>
          <p className="font-cormorant font-300 italic text-[18px] text-[#9DA8B7] max-w-sm lg:text-right">
            The platform for independent dealers who compete on intelligence.
          </p>
        </div>

        {/* Hairline */}
        <div className="h-[1px] bg-[#252B37]/40 my-12" />

        {/* Link Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-[11px] text-[#0EA5E9] uppercase tracking-[0.16em] mb-8">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-syne font-400 text-[14px] text-[#9DA8B7] hover:text-[#0EA5E9] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-[#252B37]/20 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-[#5C6678]">
            © 2026 ForecourIQ Ltd · Registered in England and Wales
          </p>
          <div className="flex items-center gap-8 font-mono text-[11px] text-[#5C6678]">
            <Link href="/linkedin" className="hover:text-[#9DA8B7]">LinkedIn</Link>
            <Link href="/privacy" className="hover:text-[#9DA8B7]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#9DA8B7]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
