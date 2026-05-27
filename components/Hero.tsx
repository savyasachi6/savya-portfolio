"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, BrainCircuit, Zap, Globe } from "lucide-react";

const ROLES = [
    "AI Engineer",
    "LLM Systems Architect",
    "RAG Pipeline Builder",
    "Multi-Agent Systems Designer",
    "Distributed Systems Engineer",
];

const STATS = [
    { value: "6+ Years", label: "Production Engineering", icon: Terminal },
    { value: "<50ms", label: "RAG Inference Latency", icon: Zap },
    { value: "99.99%", label: "Service Availability", icon: Globe },
    { value: "92%", label: "Collision-Free RL", icon: BrainCircuit },
];

export const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const target = ROLES[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (typing) {
            if (displayed.length < target.length) {
                timeout = setTimeout(() => {
                    setDisplayed(target.slice(0, displayed.length + 1));
                }, 55);
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1));
                }, 28);
            } else {
                setRoleIndex((i) => (i + 1) % ROLES.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    return (
        <section className="relative flex w-full flex-col items-center px-6 pb-20 pt-32 text-center md:pb-32 md:pt-40">

            {/* Ambient glow orbs — GPU composited */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div
                    className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.07]"
                    style={{
                        background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-[0.05]"
                    style={{
                        background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex max-w-4xl flex-col items-center space-y-8"
            >
                {/* Profile image — Double-Bezel architecture */}
                <div className="relative">
                    {/* Outer shell */}
                    <div
                        className="rounded-full p-1"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,107,53,0.2)",
                            boxShadow: "0 0 40px rgba(255,107,53,0.12), 0 0 80px rgba(255,107,53,0.05)",
                        }}
                    >
                        {/* Inner core */}
                        <div
                            className="relative h-32 w-32 overflow-hidden rounded-full md:h-36 md:w-36"
                            style={{
                                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12)",
                            }}
                        >
                            <Image
                                src="/porfolio.webp"
                                alt="Savyasachi Thati"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>
                    {/* Animated pulse ring */}
                    <div
                        className="absolute inset-0 rounded-full pulse-ring"
                        style={{ border: "1px solid rgba(255,107,53,0.3)" }}
                    />
                </div>

                {/* Eyebrow tag */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="eyebrow">
                        <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: "var(--color-emerald)" }}
                        />
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-5xl font-bold tracking-tight text-balance md:text-7xl lg:text-8xl"
                    style={{ color: "var(--text-primary)" }}
                >
                    Savyasachi Thati
                </motion.h1>

                {/* Typewriter role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="font-display text-xl font-semibold md:text-3xl"
                    style={{ color: "var(--color-primary)", minHeight: "2.5rem" }}
                >
                    {displayed}
                    <span className="blink-cursor" style={{ color: "var(--color-primary)" }}>|</span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl font-sans text-lg text-balance md:text-xl"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                >
                    AI Engineer with 6+ years building production-grade backends,
                    LLM-powered applications, and cloud-native systems.{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                        M.S. Computer Science
                    </span>{" "}
                    · Texas State University · Austin, TX.
                </motion.p>

                {/* CTAs — Magnetic button-in-button pattern */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-4 pt-2 sm:flex-row"
                >
                    <a
                        href="#work"
                        className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 active:scale-[0.97]"
                        style={{ background: "var(--color-primary)", color: "#000" }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "hsl(18,100%,68%)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "var(--color-primary)")
                        }
                    >
                        View My Work
                        <span
                            className="flex h-7 w-7 items-center justify-center rounded-full text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ background: "rgba(0,0,0,0.15)" }}
                        >
                            ↗
                        </span>
                    </a>

                    <a
                        href="https://medium.com/@savyasachi.thati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-base font-semibold transition-all duration-300 active:scale-[0.97]"
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
                        Read My Writing
                        <span
                            className="flex h-7 w-7 items-center justify-center rounded-full text-xs"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                        >
                            ✍
                        </span>
                    </a>
                </motion.div>

                {/* Stats row — Premium Bento Style */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.95, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 w-full"
                >
                    {STATS.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="group relative flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-300"
                                style={{ 
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    boxShadow: "0 4px 24px -4px rgba(0,0,0,0.4)"
                                }}
                            >
                                {/* Subtle hover glow */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                                    style={{ background: "radial-gradient(circle at center, rgba(255,107,53,0.08), transparent 70%)" }} 
                                />
                                
                                {/* Icon wrapper */}
                                <div 
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300" 
                                    style={{ 
                                        background: "rgba(255,107,53,0.1)", 
                                        color: "var(--color-primary)",
                                        border: "1px solid rgba(255,107,53,0.15)"
                                    }}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>
                                
                                <div className="flex flex-col items-start text-left z-10">
                                    <span 
                                        className="font-display text-2xl font-bold tracking-tight" 
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {stat.value}
                                    </span>
                                    <span 
                                        className="text-xs font-semibold uppercase tracking-wider mt-0.5" 
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {stat.label}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};
