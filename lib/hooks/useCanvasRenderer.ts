import React, { useEffect, useCallback, useRef } from "react";

export const useCanvasRenderer = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    imagesRef: React.MutableRefObject<HTMLImageElement[]>,
    totalFrames: number
) => {
    const lastDrawnFrameRef = useRef<number>(0);
    // Track the last DPR used when sizing so we don't re-scale on every draw
    const currentDprRef = useRef<number>(1);

    const drawFrame = useCallback((frameIndex: number) => {
        lastDrawnFrameRef.current = frameIndex;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const idx = Math.max(0, Math.min(frameIndex, totalFrames - 1));
        const img = imagesRef.current[idx];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // Draw against the physical pixel dimensions (no DPR transform on ctx)
        const canvasW = canvas.width;
        const canvasH = canvas.height;

        // Cover-fit: fill canvas, crop overflow, center
        const scale = Math.max(canvasW / img.naturalWidth, canvasH / img.naturalHeight);
        const renderW = img.naturalWidth * scale;
        const renderH = img.naturalHeight * scale;
        const offsetX = (canvasW - renderW) / 2;
        const offsetY = (canvasH - renderH) / 2;

        ctx.clearRect(0, 0, canvasW, canvasH);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    }, [canvasRef, imagesRef, totalFrames]);

    // Sync canvas resolution to physical pixels (HiDPI / Retina support)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const syncSize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            const dpr = window.devicePixelRatio || 1;
            const displayW = parent.clientWidth;
            const displayH = parent.clientHeight;
            const physW = Math.round(displayW * dpr);
            const physH = Math.round(displayH * dpr);

            // Only resize if dimensions actually changed (avoid thrashing)
            if (canvas.width !== physW || canvas.height !== physH) {
                // Set the backing-store size to physical pixels
                canvas.width = physW;
                canvas.height = physH;
                // CSS display size stays at logical pixels
                canvas.style.width = `${displayW}px`;
                canvas.style.height = `${displayH}px`;
                // DO NOT scale the ctx — we draw at physical pixel coords directly
                currentDprRef.current = dpr;
            }

            drawFrame(lastDrawnFrameRef.current);
        };

        // Use ResizeObserver instead of window resize for accuracy
        const ro = new ResizeObserver(syncSize);
        if (canvas.parentElement) ro.observe(canvas.parentElement);
        syncSize(); // initial paint

        return () => ro.disconnect();
    }, [canvasRef, drawFrame]);

    return { drawFrame };
};
