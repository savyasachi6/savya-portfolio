"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
    return (
        <section className="flex min-h-[40vh] w-full flex-col items-center justify-center bg-background px-6 pt-4 pb-24 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex max-w-4xl flex-col items-center space-y-6"
            >
                <div className="relative mb-4 overflow-hidden rounded-full border border-border bg-surface shadow-2xl h-32 w-32 md:h-40 md:w-40">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/porfolio.webp`}
                        alt="Savyasachi Thati"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text-primary text-balance">
                    The intersection of <span className="text-primary">AI</span> and craft.
                </h2>
                <p className="max-w-2xl font-sans text-lg md:text-xl text-text-muted text-balance">
                    Exploring reinforcement learning architectures, scalable inference servers, and immersive web experiences. Graduate Researcher & Teaching Assistant at Texas State University.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#work'}>
                        View My Work
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://medium.com/@savyasachi.thati', '_blank')}>
                        Read My Writing
                    </Button>
                </div>
            </motion.div>
        </section>
    );
};
