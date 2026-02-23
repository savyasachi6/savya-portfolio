import { useState, useEffect, useRef } from "react";

export const useImagePreloader = (getFrameUrl: (index: number) => string, totalFrames: number) => {
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        const handleImageLoad = () => {
            loadedCount++;
            setImagesLoaded(loadedCount);
            if (loadedCount === totalFrames) {
                setIsReady(true);
            }
        };

        const handleImageError = () => {
            loadedCount++;
            setImagesLoaded(loadedCount);
            if (loadedCount === totalFrames) {
                setIsReady(true);
            }
        };

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            img.src = getFrameUrl(i);
            img.onload = handleImageLoad;
            img.onerror = handleImageError;
            images.push(img);
        }

        imagesRef.current = images;

        return () => {
            imagesRef.current = [];
        };
    }, [getFrameUrl, totalFrames]);

    return { isReady, imagesLoaded, imagesRef };
};
