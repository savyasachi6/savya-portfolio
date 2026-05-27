"use client";

import React, { useEffect, useRef } from "react";

/**
 * CursorSpotlight — design-spells skill
 * Mouse-following radial glow via CSS custom properties.
 * pointer-events-none, GPU-composited — no layout shifts.
 */
export const CursorSpotlight: React.FC = () => {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = spotlightRef.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            el.style.setProperty("--mouse-x", `${e.clientX}px`);
            el.style.setProperty("--mouse-y", `${e.clientY}px`);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <div
            ref={spotlightRef}
            aria-hidden="true"
            className="cursor-spotlight"
            style={
                {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                } as React.CSSProperties
            }
        />
    );
};
