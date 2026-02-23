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
        surface: "var(--bg-surface)",
        border: "var(--border-subtle)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        "text-primary": "var(--text-primary)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
