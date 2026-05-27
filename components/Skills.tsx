"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES, TOP_SKILLS } from "@/lib/constants/skills";

/**
 * Skills Section
 * Skill: high-end-visual-design — Asymmetrical Bento layout
 * Animated skill rings + categorized tech badge grid
 */
export const Skills: React.FC = () => {
    return (
        <section id="skills" className="w-full py-24 md:py-36" style={{ background: "var(--bg-surface)" }}>
            <div className="mx-auto max-w-6xl px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 flex flex-col items-start"
                >
                    <span className="eyebrow mb-5 inline-flex">Built With</span>
                    <h2
                        className="font-display text-4xl font-bold tracking-tight md:text-6xl"
                        style={{ color: "var(--text-primary)" }}
                    >
                        My Toolkit
                    </h2>
                    <p className="mt-4 max-w-xl text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
                        From multi-agent LLM orchestration to GPU-accelerated robotics simulation — the full stack of an AI engineer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

                    {/* Core competency bars */}
                    <div>
                        <h3 className="mb-8 font-display text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                            Core Competencies
                        </h3>
                        <div className="space-y-5">
                            {TOP_SKILLS.map((skill, i) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-40px" }}
                                        transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex flex-col gap-2"
                                    >
                                        <div className="flex items-center justify-between text-sm">
                                            <span
                                                className="flex items-center gap-2 font-medium"
                                                style={{ color: "var(--text-primary)" }}
                                            >
                                                <Icon className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                                {skill.name}
                                            </span>
                                            <span style={{ color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>
                                                {skill.value}%
                                            </span>
                                        </div>
                                        {/* Animated progress track */}
                                        <div
                                            className="h-[3px] w-full overflow-hidden rounded-full"
                                            style={{ background: "rgba(255,255,255,0.06)" }}
                                        >
                                            <motion.div
                                                className="h-full rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: i * 0.06 + 0.2,
                                                    duration: 1.2,
                                                    ease: [0.32, 0.72, 0, 1],
                                                }}
                                                style={{
                                                    background: `linear-gradient(90deg, var(--color-primary), hsl(18,100%,75%))`,
                                                    boxShadow: "0 0 8px rgba(255,107,53,0.4)",
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Technologies bento grid */}
                    <div>
                        <h3 className="mb-8 font-display text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                            Technologies &amp; Tools
                        </h3>
                        <div className="flex flex-col gap-6">
                            {SKILL_CATEGORIES.map((category, i) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col gap-2.5"
                                >
                                    <h4
                                        className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {category.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 cursor-default"
                                                style={{
                                                    background: "rgba(255,255,255,0.04)",
                                                    border: "1px solid rgba(255,255,255,0.07)",
                                                    color: "var(--text-secondary)",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = "rgba(255,107,53,0.35)";
                                                    e.currentTarget.style.color = "var(--text-primary)";
                                                    e.currentTarget.style.background = "rgba(255,107,53,0.06)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                                    e.currentTarget.style.color = "var(--text-secondary)";
                                                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
