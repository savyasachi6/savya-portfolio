"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import { useImagePreloader } from "@/lib/hooks/useImagePreloader";
import { useCanvasRenderer } from "@/lib/hooks/useCanvasRenderer";

const TOTAL_FRAMES = 90;

interface ScrollyCanvasProps {
    children?: React.ReactNode;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Vercel-compatible: public/ is served from root — no basePath prefix needed
    const getFrameUrl = useMemo(() => {
        return (index: number) => {
            const padded = index.toString().padStart(2, "0");
            return `/sequence/frame_${padded}.webp`;
        };
    }, []);

    const { isReady, imagesLoaded, imagesRef } = useImagePreloader(getFrameUrl, TOTAL_FRAMES);
    const { drawFrame } = useCanvasRenderer(canvasRef, imagesRef, TOTAL_FRAMES);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        requestAnimationFrame(() => drawFrame(Math.round(latest)));
    });

    useEffect(() => {
        if (isReady) {
            drawFrame(0);
        }
    }, [isReady, drawFrame]);

    const loadPercent = Math.round((imagesLoaded / TOTAL_FRAMES) * 100);

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: "200vh" }}>
            {!isReady ? (
                /* ── Loading state — matches design system ── */
                <div
                    className="sticky top-0 flex h-screen w-full flex-col items-center justify-center gap-6"
                    style={{ background: "var(--bg-base)" }}
                >
                    {/* Animated logo pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="font-display text-2xl font-bold"
                        style={{ color: "var(--color-primary)" }}
                    >
                        ST
                    </motion.div>

                    <div className="flex flex-col items-center gap-3 w-64">
                        {/* Progress track */}
                        <div
                            className="h-[2px] w-full overflow-hidden rounded-full"
                            style={{ background: "rgba(255,255,255,0.06)" }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    width: `${loadPercent}%`,
                                    background: "linear-gradient(90deg, var(--color-primary), hsl(18,100%,75%))",
                                    boxShadow: "0 0 8px rgba(255,107,53,0.5)",
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        <p
                            className="font-mono text-xs uppercase tracking-widest"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Loading sequence {loadPercent}%
                        </p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
                        <canvas
                            ref={canvasRef}
                            className="absolute inset-0 h-full w-full"
                            style={{
                                background: "var(--bg-base)",
                                willChange: "transform",
                            }}
                        />
                        {/* Bottom fade — blends canvas into page content below */}
                        <div
                            className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
                            style={{
                                background: "linear-gradient(to top, var(--bg-base) 0%, transparent 100%)",
                            }}
                        />
                        {/* Top fade — blends navbar area */}
                        <div
                            className="pointer-events-none absolute top-0 left-0 right-0 h-24 z-10"
                            style={{
                                background: "linear-gradient(to bottom, var(--bg-base) 0%, transparent 100%)",
                            }}
                        />
                    </div>
                    {children}
                </>
            )}
        </div>
    );
};
