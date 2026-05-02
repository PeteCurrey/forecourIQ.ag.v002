import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/lenis-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ForecourIQ | Dealer Website, DMS & AI Buying Platform for UK Independent Car Dealers",
  description: "ForecourIQ is the all-in-one platform for UK independent car dealers — bespoke dealer websites, cloud DMS, and AI-powered buying intelligence. 14-day free trial.",
  openGraph: {
    title: "ForecourIQ | Intelligence. The unfair advantage.",
    description: "The operating platform for UK independent car dealers.",
    url: "https://forecouriq.com",
    siteName: "ForecourIQ",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${mono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#07080B] text-[#EDE8DC] antialiased selection:bg-[#0EA5E9] selection:text-[#07080B]" suppressHydrationWarning>
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
