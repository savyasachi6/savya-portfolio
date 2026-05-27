import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
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
  title: "Savyasachi — Senior AI/ML Engineer | LLMs · RAG · Agentic AI",
  description:
    "Senior AI/ML Engineer with 11+ years building scalable LLM systems, RAG pipelines, agentic AI workflows, and enterprise ML platforms at Citi Bank, Glean, Progressive Insurance, and more.",
  keywords: [
    "AI Engineer", "ML Engineer", "LLM", "RAG", "LangChain", "LangGraph",
    "Agentic AI", "Python", "AWS", "MLOps", "Generative AI", "Savyasachi",
  ],
  authors: [{ name: "Savyasachi Thati" }],
  openGraph: {
    type: "website",
    url: "https://savyasachi6.github.io/savya-portfolio/",
    title: "Savyasachi — Senior AI/ML Engineer",
    description:
      "11+ years architecting production-grade LLMs, RAG architectures, agentic systems, and enterprise ML platforms across Fortune 500 clients.",
    siteName: "Savyasachi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savyasachi — Senior AI/ML Engineer",
    description:
      "11+ years architecting production-grade LLMs, RAG, and Agentic AI systems.",
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
      </body>
    </html>
  );
}
