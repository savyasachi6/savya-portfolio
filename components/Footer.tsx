"use client";

import React from "react";

import { Github, Linkedin, ExternalLink } from "lucide-react";

const LINKS = [
    { label: "GitHub",   href: "https://github.com/savyasachi6",                icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/savyasachi-thati",      icon: Linkedin },
    { label: "Medium",   href: "https://medium.com/@savyasachi.thati",          icon: ExternalLink },
];

export const Footer: React.FC = () => {
    return (
        <footer
            className="w-full py-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "var(--bg-base)" }}
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">

                <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                    &copy; {new Date().getFullYear()} Savyasachi Thati. All rights reserved.
                </p>

                {/* Social row */}
                <div className="flex items-center gap-4">
                    {LINKS.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex items-center gap-1.5 text-sm transition-colors duration-200"
                            style={{ color: "var(--text-muted)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                            <Icon className="h-4 w-4" />
                            {label}
                        </a>
                    ))}
                </div>

                {/* Stack badge */}
                <p
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                >
                    Next.js 14 · Framer Motion · Vercel
                </p>
            </div>
        </footer>
    );
};
