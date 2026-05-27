"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, Zap } from "lucide-react";
import { PROJECTS } from "@/lib/constants/projects";

export const Projects: React.FC = () => {
    const featured = PROJECTS.find((p) => p.featured);
    const rest = PROJECTS.filter((p) => !p.featured);

    return (
        <section id="work" className="w-full py-24 md:py-36" style={{ background: "var(--bg-base)" }}>
            <div className="mx-auto max-w-6xl px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <span className="eyebrow mb-5 inline-flex">Work &amp; Research</span>
                    <h2
                        className="font-display text-4xl font-bold tracking-tight md:text-6xl"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Selected Projects
                    </h2>
                </motion.div>

                {/* Featured card — full width */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 gradient-border group relative overflow-hidden"
                        style={{
                            background: "var(--bg-surface)",
                            borderRadius: "1.5rem",
                            border: "1px solid rgba(255,255,255,0.07)",
                        }}
                    >
                        {/* Glow header band */}
                        <div
                            className="relative h-2 w-full"
                            style={{
                                background: "linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-emerald))",
                            }}
                        />

                        <div className="p-8 md:p-10">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span
                                        className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                                        style={{
                                            background: "rgba(255,107,53,0.12)",
                                            color: "var(--color-primary)",
                                            border: "1px solid rgba(255,107,53,0.25)",
                                        }}
                                    >
                                        ★ Featured
                                    </span>
                                    <span
                                        className="rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            color: "var(--text-muted)",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                        }}
                                    >
                                        {featured.tag}
                                    </span>
                                </div>
                                {/* Impact metric */}
                                <span
                                    className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                                    style={{
                                        background: "rgba(255,107,53,0.08)",
                                        color: "var(--color-primary)",
                                        border: "1px solid rgba(255,107,53,0.2)",
                                    }}
                                >
                                    <Zap className="h-3 w-3" />
                                    {featured.impact}
                                </span>
                            </div>

                            <h3
                                className="font-display text-3xl font-bold tracking-tight mb-4 md:text-4xl"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {featured.title}
                            </h3>
                            <p
                                className="mb-8 text-base leading-relaxed md:text-lg max-w-3xl"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {featured.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {featured.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full px-3 py-1 text-xs font-medium"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            color: "var(--text-secondary)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div
                                className="flex items-center justify-between pt-6"
                                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                            >
                                <a
                                    href={featured.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97]"
                                    style={{ background: "var(--color-primary)", color: "#000" }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.background = "hsl(18,100%,68%)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.background = "var(--color-primary)")
                                    }
                                >
                                    <Github className="h-4 w-4" />
                                    View on GitHub
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Remaining projects — 2-col grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {rest.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.32, 0.72, 0, 1] } }}
                            transition={{ delay: i * 0.09, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="gradient-border group flex flex-col justify-between overflow-hidden"
                            style={{
                                background: "var(--bg-surface)",
                                borderRadius: "1.25rem",
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <div className="p-7">
                                {/* Tags row */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                                    <span
                                        className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        {project.tag}
                                    </span>
                                    {project.impact && (
                                        <span
                                            className="flex items-center gap-1 text-[10px] font-semibold"
                                            style={{ color: "var(--color-primary)" }}
                                        >
                                            <Zap className="h-2.5 w-2.5" />
                                            {project.impact.split(" · ")[0]}
                                        </span>
                                    )}
                                </div>

                                <h3
                                    className="mb-3 font-display text-xl font-semibold md:text-2xl"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="mb-6 text-sm leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] font-medium"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div
                                className="flex items-center justify-between px-7 py-4"
                                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                            >
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                                    style={{ color: "var(--text-secondary)" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                                >
                                    View Project
                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} on GitHub`}
                                    style={{ color: "var(--text-muted)" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                                >
                                    <Github className="h-4 w-4 transition-colors" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
