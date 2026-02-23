"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

const TERMINAL_LINES = [
    "> whoami",
    "Savyasachi Thati — AI Engineer & Full-Stack Developer",
    "> location",
    "San Marcos, TX → Open to remote & relocation",
    "> contact",
    "savyasachi.thati@gmail.com",
    "> status",
    "Available for full-time roles — Feb 2026",
    "_"
];

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative w-full overflow-hidden bg-surface py-24 md:py-32">
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: "radial-gradient(var(--border-subtle) 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />

            <div className="relative mx-auto max-w-4xl px-6 md:px-12">
                <div className="mb-12 text-center md:text-left">
                    <span className="mb-4 block text-xs font-semibold tracking-widest text-primary uppercase">
                        Let&apos;s Talk
                    </span>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
                        Get In Touch
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
                >
                    <div className="flex items-center gap-2 border-b border-border bg-surface/50 px-4 py-3">
                        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                        <div className="ml-4 text-xs font-mono text-text-muted">guest@sthm ~ /contact</div>
                    </div>

                    <div className="p-6 md:p-8 font-mono text-sm md:text-base text-[var(--color-accent)]">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col space-y-4"
                        >
                            {TERMINAL_LINES.map((line, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 5 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className={line.startsWith(">") ? "text-primary mt-4 first:mt-0 font-semibold" : "text-text-primary pl-4"}
                                >
                                    {line === "_" ? (
                                        <motion.span
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            {line}
                                        </motion.span>
                                    ) : line}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <div className="mt-12 flex justify-center">
                    <div className="flex gap-6">
                        <a href="https://github.com/savyasachi6" target="_blank" rel="noopener noreferrer">
                            <IconButton icon={<Github className="h-5 w-5" />} aria-label="Github" />
                        </a>
                        <a href="https://linkedin.com/in/savyasachi-thati" target="_blank" rel="noopener noreferrer">
                            <IconButton icon={<Linkedin className="h-5 w-5" />} aria-label="LinkedIn" />
                        </a>
                        <a href="mailto:savyasachi.thati@gmail.com">
                            <IconButton icon={<Mail className="h-5 w-5" />} aria-label="Email" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
