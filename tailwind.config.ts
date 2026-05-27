import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-base)",
        surface:    "var(--bg-surface)",
        elevated:   "var(--bg-elevated)",
        border:     "var(--border-subtle)",
        primary:    "var(--color-primary)",
        accent:     "var(--color-accent)",
        emerald:    "var(--color-emerald)",
        "text-primary":   "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        muted:            "var(--text-muted)",
      },
      fontFamily: {
        sans:    ["var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono:    ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        widest: "0.18em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "gradient-shift": "gradient-shift 4s linear infinite",
        "float-slow":     "float-slow 4s ease-in-out infinite",
        "pulse-ring":     "pulse-ring 2.5s ease-out infinite",
        "fade-up":        "fade-up 0.8s cubic-bezier(0.32,0.72,0,1) forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%":   { boxShadow: "0 0 0 0 rgba(255,107,53,0.4)" },
          "70%":  { boxShadow: "0 0 0 12px rgba(255,107,53,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,107,53,0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)", filter: "blur(4px)" },
          to:   { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
