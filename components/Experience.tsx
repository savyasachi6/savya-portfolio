"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const EXPERIENCES = [
    {
        title: "Graduate Research — Autonomous Systems",
        company: "Texas State University",
        location: "San Marcos, TX",
        period: "Jan 2024 – Dec 2025",
        type: "Research",
        icon: GraduationCap,
        color: "var(--color-accent)",
        tag: "RL · Robotics · HPC",
        achievements: [
            "Architected a CUDA-accelerated simulation pipeline in Isaac Sim, implementing memory optimization and distributed batching across dual-GPU clusters — accelerating training by 45% and lifting hardware utilization from 68% to 94%.",
            "Enabled 200-hour stress tests without memory degradation, validating long-horizon autonomous navigation at scale.",
            "Developed custom C++ reward functions via pybind11 for ROS2-based navigation; eliminated 'Vibrating Agent' local optima artifact, improving navigation safety by 38% (92% collision-free on edge cases).",
            "Re-engineered HPC checkpoint pipeline on TACC Frontera: reduced 57,000 Lustre I/O ops to 1 via node-local /tmp staging, cutting checkpoint time from 45 min to under 2 min.",
        ],
    },
    {
        title: "Teaching Assistant — CS Department",
        company: "Texas State University",
        location: "San Marcos, TX",
        period: "Jan 2024 – Dec 2025",
        type: "Teaching",
        icon: Code2,
        color: "var(--color-emerald)",
        tag: "Education · Mentorship",
        achievements: [
            "Delivered lab sessions and office hours for graduate-level AI and systems courses, mentoring 80+ students on distributed computing, ML pipelines, and software engineering fundamentals.",
            "Designed supplementary materials on LLM prompt engineering and RAG architectures, bridging academic theory with industry practice.",
        ],
    },
    {
        title: "Software Engineer",
        company: "Innova Solutions",
        location: "Hyderabad, India",
        period: "Jun 2021 – Dec 2023",
        type: "Industry",
        icon: Briefcase,
        color: "var(--color-primary)",
        tag: "Backend · ML · Distributed Systems",
        achievements: [
            "Redesigned SQL Server indexing strategy and refactored .NET microservices on Kubernetes for better fault domain isolation — reducing median query latency by 57% (4.2s → 1.8s).",
            "Diagnosed and resolved Azure App Service SNAT port exhaustion for 100K+ daily API requests: migrated to connection pooling via global using patterns, cutting outbound TCP connections by 70%.",
            "Implemented distributed session persistence for 50K+ concurrent users, achieving 99.99% service availability across a platform serving 50+ enterprise clients.",
            "Integrated PyTorch-based deep learning models into production infrastructure using ONNX Runtime optimization and INT8 quantization — achieving <100ms inference latency at 10K+ daily predictions.",
            "Built LLM-powered document search prototype using FAISS + sentence-transformers: sub-50ms retrieval at 91% accuracy across 1,000+ enterprise documents.",
            "Established Azure DevOps + GitHub Actions CI/CD pipeline — reduced deployment time by 40% (45 min → 27 min) with 99.9% deployment success rate.",
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="w-full py-24 md:py-36" style={{ background: "var(--bg-base)" }}>
            <div className="mx-auto max-w-4xl px-6 md:px-12">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <span className="eyebrow mb-5 inline-flex">Career</span>
                    <h2
                        className="font-display text-4xl font-bold tracking-tight md:text-6xl"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Experience
                    </h2>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="relative space-y-16"
                    style={{
                        borderLeft: "1px solid rgba(255,255,255,0.06)",
                        marginLeft: "1.25rem",
                    }}
                >
                    {EXPERIENCES.map((exp) => {
                        const Icon = exp.icon;
                        return (
                            <motion.div
                                key={exp.title}
                                variants={itemVariants}
                                className="relative pl-10 md:pl-14"
                            >
                                {/* Timeline dot — Double-Bezel */}
                                <span
                                    className="absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full"
                                    style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        boxShadow: `0 0 20px ${exp.color}22`,
                                    }}
                                >
                                    <span
                                        className="flex h-9 w-9 items-center justify-center rounded-full"
                                        style={{
                                            background: "var(--bg-elevated)",
                                            boxShadow: `inset 0 1px 1px rgba(255,255,255,0.08), 0 0 12px ${exp.color}33`,
                                        }}
                                    >
                                        <Icon className="h-4 w-4" style={{ color: exp.color }} />
                                    </span>
                                </span>

                                {/* Header row */}
                                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-3">
                                    <h3
                                        className="font-display text-xl font-semibold md:text-2xl"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {exp.title}
                                    </h3>
                                    <span
                                        className="font-mono text-xs whitespace-nowrap"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Meta row */}
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span
                                        className="text-sm font-semibold"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {exp.company}
                                    </span>
                                    <span
                                        className="h-1 w-1 rounded-full"
                                        style={{ background: "var(--text-muted)" }}
                                    />
                                    <span
                                        className="text-sm"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {exp.location}
                                    </span>
                                    <span
                                        className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                                        style={{
                                            background: `${exp.color}14`,
                                            color: exp.color,
                                            border: `1px solid ${exp.color}30`,
                                        }}
                                    >
                                        {exp.tag}
                                    </span>
                                </div>

                                {/* Achievement bullets */}
                                <ul className="space-y-3">
                                    {exp.achievements.map((item, j) => (
                                        <li
                                            key={j}
                                            className="relative pl-5 text-sm leading-relaxed md:text-base"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            <span
                                                className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full flex-shrink-0"
                                                style={{ background: `${exp.color}60` }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
