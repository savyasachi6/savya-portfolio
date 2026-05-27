import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Skill: high-end-visual-design — Replace banned Inter with Plus Jakarta Sans
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savyasachi Thati — AI Engineer | LLMs · RAG · Agentic AI",
  description:
    "AI Engineer with 6+ years building production-grade LLM systems, RAG pipelines, agentic AI workflows, and cloud-native backends. M.S. Computer Science — Texas State University.",
  keywords: [
    "AI Engineer", "ML Engineer", "LLM", "RAG", "LangChain", "LangGraph",
    "Agentic AI", "Python", "Azure", "AWS", "MLOps", "Generative AI", "Savyasachi Thati",
  ],
  authors: [{ name: "Savyasachi Thati" }],
  openGraph: {
    type: "website",
    url: "https://savyasachi.dev",
    title: "Savyasachi Thati — AI Engineer",
    description:
      "6+ years building production LLMs, RAG architectures, agentic systems, and enterprise backends.",
    siteName: "Savyasachi Thati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savyasachi Thati — AI Engineer",
    description:
      "6+ years building production-grade LLMs, RAG, and Agentic AI systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${plusJakarta.variable} ${syne.variable} font-sans antialiased`}
        style={{
          backgroundColor: "var(--bg-base)",
          color: "var(--text-primary)",
        }}
      >
        <main className="overflow-x-hidden min-h-screen">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
