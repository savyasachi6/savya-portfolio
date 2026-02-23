"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useImagePreloader } from "@/lib/hooks/useImagePreloader";
import { useCanvasRenderer } from "@/lib/hooks/useCanvasRenderer";
import { Progress } from "@/components/ui/Progress";

const TOTAL_FRAMES = 90;

interface ScrollyCanvasProps {
    children?: React.ReactNode;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

    return (
        <div ref={containerRef} className="relative h-[150vh] w-full bg-background">
            {!isReady ? (
                <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center p-8 z-50 bg-background">
                    <p className="mb-4 text-sm font-medium tracking-widest text-muted uppercase">
                        Loading sequence ({imagesLoaded}/{TOTAL_FRAMES})
                    </p>
                    <Progress value={(imagesLoaded / TOTAL_FRAMES) * 100} className="max-w-md" />
                </div>
            ) : (
                <>
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
                        <canvas
                            ref={canvasRef}
                            className="absolute inset-0 h-full w-full will-change-transform bg-black"
                        />
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-base)] to-transparent z-0" />
                    </div>
                    {children}
                </>
            )}
        </div>
    );
};
