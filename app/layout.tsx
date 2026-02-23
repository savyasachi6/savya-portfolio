import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Savyasachi Thati — AI Engineer & Full-Stack Developer",
  description: "Personal portfolio of Savyasachi Thati, featuring AI engineering, robotics, and full-stack development.",
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased bg-[var(--bg-base)] text-[var(--text-primary)]`}>
        <main className="overflow-x-hidden min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
