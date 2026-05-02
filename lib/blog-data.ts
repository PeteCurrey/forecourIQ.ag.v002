export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-a-dms",
    title: "What Is a Dealer Management System?",
    category: "Platform Guide",
    excerpt: "Everything you need to know about the core operating system of a modern used car dealership.",
    readTime: "5 min",
    date: "May 12, 2026",
    featured: true
  },
  {
    slug: "how-to-rank-dealer-website",
    title: "How to Rank Your Dealer Website on Google",
    category: "SEO",
    excerpt: "The specific local SEO strategies that help independent dealers compete with national aggregators.",
    readTime: "8 min",
    date: "May 10, 2026"
  },
  {
    slug: "autotrader-guide-2026",
    title: "AutoTrader for Independent Dealers: 2026 Complete Guide",
    category: "Advertising",
    excerpt: "Optimising your spend and performance on the UK's largest vehicle marketplace.",
    readTime: "7 min",
    date: "May 08, 2026"
  },
  {
    slug: "reduce-days-to-sell",
    title: "How to Reduce Days to Sell Your Used Car Stock",
    category: "Operations",
    excerpt: "Data-driven techniques to increase stock turn and free up your working capital.",
    readTime: "6 min",
    date: "May 05, 2026"
  },
  {
    slug: "hmrc-mtd-compliance",
    title: "HMRC Making Tax Digital: What UK Car Dealers Must Do",
    category: "Compliance",
    excerpt: "Navigating the digital record-keeping requirements for VAT-registered car dealerships.",
    readTime: "5 min",
    date: "May 01, 2026"
  },
  {
    slug: "ai-car-buying-intelligence",
    title: "AI Car Buying: How Intelligence Is Changing the Forecourt",
    category: "Intelligence",
    excerpt: "How machine learning is helping dealers identify high-margin stock before it hits the auction floor.",
    readTime: "9 min",
    date: "April 28, 2026"
  },
  {
    slug: "cap-hpi-vs-glass",
    title: "CAP HPI vs Glass's: Which Valuation Tool for Your DMS?",
    category: "Data",
    excerpt: "Comparing the UK's leading vehicle data providers for accuracy and integration.",
    readTime: "5 min",
    date: "April 25, 2026"
  },
  {
    slug: "ebay-motors-2026",
    title: "eBay Motors for Dealers: Is It Worth It in 2026?",
    category: "Advertising",
    excerpt: "Evaluating the return on investment for the UK's second-largest vehicle portal.",
    readTime: "6 min",
    date: "April 20, 2026"
  },
  {
    slug: "fca-consumer-duty-guide",
    title: "FCA Consumer Duty: What Car Dealers Need to Know",
    category: "Compliance",
    excerpt: "Ensuring your dealership meets the higher standards of consumer protection in finance sales.",
    readTime: "7 min",
    date: "April 15, 2026"
  },
  {
    slug: "vehicle-descriptions-convert",
    title: "How to Write Vehicle Descriptions That Convert",
    category: "Copywriting",
    excerpt: "Moving beyond spec lists to create compelling narratives that drive enquiries.",
    readTime: "4 min",
    date: "April 10, 2026"
  },
  {
    slug: "platform-comparison-guide",
    title: "Click Dealer, SpidersNet, or ForecourIQ: Choosing Your Platform",
    category: "Comparison",
    excerpt: "A transparent look at the leading UK dealer management systems and website providers.",
    readTime: "10 min",
    date: "April 05, 2026"
  },
  {
    slug: "rise-of-ev-resale",
    title: "The Rise of EV Resale: What Independent Dealers Need to Know",
    category: "Market",
    excerpt: "Preparing your forecourt and your team for the transition to electric vehicle stock.",
    readTime: "8 min",
    date: "April 01, 2026"
  }
];
