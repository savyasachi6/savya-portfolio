"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check, ExternalLink } from "lucide-react";

const EMAIL = "savyasachi.thati@gmail.com";

const TERMINAL_LINES = [
    { cmd: true,  text: "whoami" },
    { cmd: false, text: "Savyasachi Thati — AI Engineer & Distributed Systems Builder" },
    { cmd: true,  text: "location" },
    { cmd: false, text: "San Marcos, TX  →  Open to remote & relocation" },
    { cmd: true,  text: "status" },
    { cmd: false, text: "Available for full-time · contract · research collab" },
    { cmd: true,  text: "contact" },
    { cmd: false, text: EMAIL },
    { cmd: false, text: "_cursor_" },
];

const SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/savyasachi6",
        icon: Github,
        hint: "savyasachi6",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/savyasachi-thati",
        icon: Linkedin,
        hint: "savyasachi-thati",
    },
    {
        label: "Medium",
        href: "https://medium.com/@savyasachi.thati",
        icon: ExternalLink,
        hint: "9 articles",
    },
];

export const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden py-24 md:py-36"
            style={{ background: "var(--bg-surface)" }}
        >
            {/* Dot grid background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
                style={{
                    background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            <div className="relative mx-auto max-w-4xl px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 text-center"
                >
                    <span className="eyebrow mb-5 inline-flex">Let&apos;s Talk</span>
                    <h2
                        className="font-display text-4xl font-bold tracking-tight md:text-6xl"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
                        Open to full-time roles, research collaborations, and interesting problems.
                    </p>
                </motion.div>

                {/* Terminal card — Double-Bezel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="doppelrand mb-10"
                >
                    <div className="doppelrand-inner overflow-hidden rounded-[calc(2rem-0.375rem)]">
                        {/* macOS-style title bar */}
                        <div
                            className="flex items-center gap-2 px-4 py-3"
                            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
                        >
                            <div className="h-3 w-3 rounded-full" style={{ background: "#FF5F56" }} />
                            <div className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
                            <div className="h-3 w-3 rounded-full" style={{ background: "#27C93F" }} />
                            <span
                                className="ml-4 font-mono text-xs"
                                style={{ color: "var(--text-muted)" }}
                            >
                                guest@sthm ~ /contact
                            </span>
                        </div>

                        {/* Terminal body */}
                        <div className="p-6 md:p-8">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-col gap-3 font-mono text-sm md:text-base"
                            >
                                {TERMINAL_LINES.map((line, i) => {
                                    if (line.text === "_cursor_") {
                                        return (
                                            <motion.div
                                                key={i}
                                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                            >
                                                <motion.span
                                                    animate={{ opacity: [1, 0, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                    style={{ color: "var(--color-primary)" }}
                                                >
                                                    ▌
                                                </motion.span>
                                            </motion.div>
                                        );
                                    }
                                    return (
                                        <motion.div
                                            key={i}
                                            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                                            className={line.cmd ? "mt-2 first:mt-0 font-semibold" : "pl-4"}
                                            style={{
                                                color: line.cmd
                                                    ? "var(--color-primary)"
                                                    : "var(--text-primary)",
                                            }}
                                        >
                                            {line.cmd ? `> ${line.text}` : line.text}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    {/* Primary: email */}
                    <a
                        href={`mailto:${EMAIL}`}
                        className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.97]"
                        style={{ background: "var(--color-primary)", color: "#000" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(18,100%,68%)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-primary)")}
                    >
                        <Mail className="h-4 w-4" />
                        Send Email
                        <span
                            className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ background: "rgba(0,0,0,0.15)" }}
                        >
                            ↗
                        </span>
                    </a>

                    {/* Copy email — design spell */}
                    <button
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.97]"
                        style={{
                            borderColor: "rgba(255,255,255,0.08)",
                            color: "var(--text-primary)",
                            background: "rgba(255,255,255,0.03)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)";
                            e.currentTarget.style.background = "rgba(255,107,53,0.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        }}
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4" style={{ color: "var(--color-emerald)" }} />
                                <span style={{ color: "var(--color-emerald)" }}>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                Copy Email
                            </>
                        )}
                    </button>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-12 flex flex-wrap justify-center gap-4"
                >
                    {SOCIALS.map(({ label, href, icon: Icon, hint }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300"
                            style={{
                                borderColor: "rgba(255,255,255,0.07)",
                                background: "rgba(255,255,255,0.02)",
                                color: "var(--text-secondary)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)";
                                e.currentTarget.style.color = "var(--text-primary)";
                                e.currentTarget.style.background = "rgba(255,107,53,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                e.currentTarget.style.color = "var(--text-secondary)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                            }}
                        >
                            <Icon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                            {label}
                            <span className="text-xs opacity-50">{hint}</span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
