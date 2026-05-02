import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#07080B",
        carbon: "#0D0F14",
        asphalt: "#13161C",
        steel: "#1C2029",
        slate: "#252B37",
        cream: "#EDE8DC",
        silver: "#9DA8B7",
        pewter: "#5C6678",
        muted: "#353D4C",
        electric: "#0EA5E9",
        signal: {
          positive: "#3DB87A",
          hold: "#D4922A",
          negative: "#C94040",
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        "3xl": "2px",
        full: "9999px",
      },
      spacing: {
        container: "80px",
        section: "180px",
        "section-mobile": "100px",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
