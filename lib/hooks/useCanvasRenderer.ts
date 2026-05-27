import React, { useEffect, useCallback } from "react";

export const useCanvasRenderer = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    imagesRef: React.MutableRefObject<HTMLImageElement[]>,
    totalFrames: number
) => {
    const lastDrawnFrameRef = React.useRef<number>(0);

    const drawFrame = useCallback((frameIndex: number) => {
        lastDrawnFrameRef.current = frameIndex;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const idx = Math.max(0, Math.min(frameIndex, totalFrames - 1));
        const img = imagesRef.current[idx];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Cover-fit: fill canvas, crop overflow, center
        const scale = Math.max(canvasWidth / img.naturalWidth, canvasHeight / img.naturalHeight);
        const renderWidth = img.naturalWidth * scale;
        const renderHeight = img.naturalHeight * scale;
        const offsetX = (canvasWidth - renderWidth) / 2;
        const offsetY = (canvasHeight - renderHeight) / 2;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
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

            // Only resize if dimensions actually changed (avoid thrashing)
            if (canvas.width !== displayW * dpr || canvas.height !== displayH * dpr) {
                canvas.width = displayW * dpr;
                canvas.height = displayH * dpr;
                canvas.style.width = `${displayW}px`;
                canvas.style.height = `${displayH}px`;

                const ctx = canvas.getContext("2d");
                if (ctx) ctx.scale(dpr, dpr);
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
