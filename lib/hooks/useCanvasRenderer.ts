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

        // Ensure we are within bounds
        const idx = Math.max(0, Math.min(frameIndex, totalFrames - 1));
        const img = imagesRef.current[idx];

        // Some images may not have loaded or errored out
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // Cover-fit math
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Scale image to fill the canvas, cropping the overflow
        const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
        const renderWidth = img.width * scale;
        const renderHeight = img.height * scale;

        // Center the image
        const offsetX = (canvasWidth - renderWidth) / 2;
        const offsetY = (canvasHeight - renderHeight) / 2;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        // Use high quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    }, [canvasRef, imagesRef, totalFrames]);

    // Handle window resize
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Make canvas display resolution match its physical size
        const handleResize = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            // Re-trigger the draw context immediately
            drawFrame(lastDrawnFrameRef.current);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Init

        return () => window.removeEventListener("resize", handleResize);
    }, [canvasRef, drawFrame]);

    return { drawFrame };
};
