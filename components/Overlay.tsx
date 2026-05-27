"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Overlay — 3 scroll-driven text panels layered on top of ScrollyCanvas.
 * Absolute positioning within the 500vh ScrollyCanvas container.
 * Panels fade in/out as user scrolls through the sequence.
 */
export const Overlay: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

    // Panel 1: 0 – 33%
    const p1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.30, 0.34], [1, 1, 0.5, 0]);
    const p1Y      = useTransform(scrollYProgress, [0, 0.22, 0.30, 0.34], [0, 0,  -16, -32]);

    // Panel 2: 33 – 66%
    const p2Opacity = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.66], [0, 1, 1, 0]);
    const p2Y       = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.66], [24, 0,  0, -24]);

    // Panel 3: 66 – 100%
    const p3Opacity = useTransform(scrollYProgress, [0.66, 0.73, 0.93, 1], [0, 1, 1, 0]);
    const p3Y       = useTransform(scrollYProgress, [0.66, 0.73, 0.93, 1], [24, 0,  0, -20]);

    // Scroll indicator fades out at 5%
    const chevronOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

    return (
        <div ref={ref} className="absolute inset-0 z-10 pointer-events-none">

            {/* ── Panel 1: Identity ── */}
            <motion.div
                style={{ opacity: p1Opacity, y: p1Y }}
                className="sticky top-0 flex h-screen w-full flex-col items-center justify-center text-center px-6"
            >
                <h1 className="font-display font-bold tracking-tight text-balance"
                    style={{
                        color: "var(--text-primary)",
                        fontSize: "clamp(2.5rem, 8vw, 6rem)",
                        lineHeight: 1.05,
                        textShadow: "0 0 80px rgba(0,0,0,0.8)",
                    }}
                >
                    Savyasachi Thati
                </h1>
                <p
                    className="mt-4 font-sans text-lg md:text-2xl"
                    style={{
                        color: "var(--text-secondary)",
                        textShadow: "0 2px 20px rgba(0,0,0,0.9)",
                    }}
                >
                    LLM Agents · RAG ·{" "}
                    <span style={{ color: "var(--color-primary)" }}>Distributed Systems</span>
                </p>
            </motion.div>

            {/* ── Panel 2: Domain ── */}
            <motion.div
                style={{ opacity: p2Opacity, y: p2Y }}
                className="sticky top-0 flex h-screen w-full flex-col items-start justify-center px-8 md:px-20 xl:px-40"
            >
                <span
                    className="eyebrow mb-6 pointer-events-none"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                >
                    Research Focus
                </span>
                <h2
                    className="font-display font-semibold text-balance max-w-3xl"
                    style={{
                        color: "var(--text-primary)",
                        fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
                        lineHeight: 1.1,
                        textShadow: "0 0 60px rgba(0,0,0,0.8)",
                    }}
                >
                    Orchestrating autonomous control{" "}
                    <span style={{ color: "var(--color-primary)" }}>at scale.</span>
                </h2>
            </motion.div>

            {/* ── Panel 3: Thesis ── */}
            <motion.div
                style={{ opacity: p3Opacity, y: p3Y }}
                className="sticky top-0 flex h-screen w-full flex-col items-end justify-center px-8 md:px-20 xl:px-40 text-right"
            >
                <h2
                    className="font-display font-semibold max-w-xl"
                    style={{
                        color: "var(--text-primary)",
                        fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                        lineHeight: 1.2,
                        textShadow: "0 0 60px rgba(0,0,0,0.9)",
                    }}
                >
                    Bridging physical systems and AI —
                </h2>
                <p
                    className="font-sans font-semibold italic mt-3"
                    style={{
                        color: "var(--color-accent)",
                        fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                        textShadow: "0 0 40px rgba(0,0,0,0.8)",
                    }}
                >
                    engineered for zero failure.
                </p>
            </motion.div>

            {/* ── Scroll indicator ── */}
            <motion.div
                style={{ opacity: chevronOpacity }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
                <p
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                >
                    Scroll
                </p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="h-5 w-5" style={{ color: "var(--color-primary)" }} />
                </motion.div>
            </motion.div>
        </div>
    );
};
