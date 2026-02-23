"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Overlay: React.FC = () => {
    // Use the window scroll since the overlay sits on top spanning the body or wrap it appropriately.
    // We'll calculate the progress locally based on viewport.
    // But wait! This overlay should be layered on top of ScrollyCanvas, meaning it should read the same progress.
    // A cleaner approach for global layout is to pass scrollYProgress via context or rely on window scroll here too.
    // For the sake of the prompt "Three text panels layered on top of the canvas (position: absolute, z-index: 10)":
    // We will position this container over the 500vh area relative to the parent.

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

    // Panel 1: 0 - 33%
    const p1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.30, 0.33], [1, 1, 1, 0]);
    const p1Y = useTransform(scrollYProgress, [0, 0.25, 0.30, 0.33], [0, 0, 0, -30]);

    // Panel 2: 33 - 66%
    const p2Opacity = useTransform(scrollYProgress, [0.33, 0.38, 0.60, 0.66], [0, 1, 1, 0]);
    const p2Y = useTransform(scrollYProgress, [0.33, 0.38, 0.60, 0.66], [30, 0, 0, -30]);

    // Panel 3: 66 - 100%
    const p3Opacity = useTransform(scrollYProgress, [0.66, 0.71, 0.95, 1], [0, 1, 1, 0]);
    const p3Y = useTransform(scrollYProgress, [0.66, 0.71, 0.95, 1], [30, 0, 0, -30]);

    // Scroll Indicator Chevron
    const chevronOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    return (
        <div ref={ref} className="absolute inset-0 z-10 pointer-events-none">

            {/* Panel 1 */}
            <motion.div
                style={{ opacity: p1Opacity, y: p1Y }}
                className="sticky top-0 flex h-screen w-full flex-col items-center justify-center text-center px-4"
            >
                <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-text-primary">
                    <span className="block mb-2">Savyasachi Thati</span>
                </h1>
                <p className="font-sans text-xl md:text-2xl text-text-muted mt-4">
                    HPC, AI & <span className="text-primary">Distributed Systems.</span>
                </p>
            </motion.div>

            {/* Panel 2 */}
            <motion.div
                style={{ opacity: p2Opacity, y: p2Y }}
                className="sticky top-0 flex h-screen w-full flex-col items-start justify-center px-8 md:px-24 xl:px-48"
            >
                <h2 className="font-display text-4xl md:text-7xl font-semibold max-w-4xl">
                    Orchestrating autonomous control <span className="text-primary">at scale.</span>
                </h2>
            </motion.div>

            {/* Panel 3 */}
            <motion.div
                style={{ opacity: p3Opacity, y: p3Y }}
                className="sticky top-0 flex h-screen w-full flex-col items-end justify-center px-8 md:px-24 xl:px-48 text-right"
            >
                <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-2xl text-text-primary">
                    Bridging physical systems and AI —
                </h2>
                <p className="font-sans text-xl md:text-2xl text-accent font-medium mt-4 italic">
                    engineered for zero failure.
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: chevronOpacity }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <p className="text-xs uppercase tracking-widest text-muted mb-2 font-medium">Scroll</p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="h-6 w-6 text-primary" />
                </motion.div>
            </motion.div>

        </div>
    );
};
