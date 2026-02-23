import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-border bg-background py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
                <p className="text-sm font-medium text-text-muted">
                    &copy; {new Date().getFullYear()} Savyasachi Thati. All rights reserved.
                </p>
                <p className="text-sm font-medium text-text-muted">
                    Designed & built by Savyasachi Thati
                </p>
                <p className="font-mono text-[10px] tracking-widest text-text-muted/50 uppercase">
                    Made with Next.js + Framer Motion
                </p>
            </div>
        </footer>
    );
};
