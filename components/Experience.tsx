"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCES = [
    {
        title: "Graduate Research: Autonomous Systems",
        company: "Texas State University",
        location: "San Marcos, TX",
        period: "Jan 2024 – Dec 2025",
        icon: GraduationCap,
        achievements: [
            "Architected a CUDA-accelerated simulation pipeline in Isaac Sim, implementing memory optimization and distributed batching across dual-GPU clusters.",
            "Accelerated training by 45% and increased hardware utilization from 68% to 94%, enabling 200-hour stress tests without memory degradation.",
            "Developed custom C++ reward functions via pybind11 for ROS2-based navigation; improved navigation safety by 38% on edge cases (92% collision-free)."
        ]
    },
    {
        title: "Software Engineer",
        company: "Innova Solutions",
        location: "Hyderabad, India",
        period: "Jun 2021 – Dec 2023",
        icon: Briefcase,
        achievements: [
            "Redesigned SQL Server indexing strategy and refactored .NET microservices on Kubernetes for better fault domain isolation.",
            "Implemented distributed session persistence for 50K+ concurrent users, achieving 99.99% service availability.",
            "Reduced median latency by 57% (1.8s) while maintaining <200ms response times under peak load across a platform serving 50+ enterprise clients.",
            "Integrated PyTorch-based deep learning models into production infrastructure with ONNX Runtime optimization and INT8 quantization, achieving <100ms inference latency."
        ]
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="w-full bg-background py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <span className="mb-4 block text-xs font-semibold tracking-widest text-primary uppercase">
                        Career
                    </span>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
                        Experience
                    </h2>
                </motion.div>

                <div className="relative border-l border-border/40 ml-4 md:ml-6 space-y-16">
                    {EXPERIENCES.map((exp, i) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-lg ring-8 ring-background">
                                <exp.icon className="h-5 w-5" />
                            </span>

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="font-display text-2xl font-semibold text-text-primary">
                                    {exp.title}
                                </h3>
                                <span className="font-mono text-sm text-text-muted mt-1 md:mt-0 whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted">
                                <span className="font-medium text-text-primary">{exp.company}</span>
                                <span className="h-1 w-1 rounded-full bg-border"></span>
                                <span>{exp.location}</span>
                            </div>

                            <ul className="space-y-4 text-text-muted font-sans leading-relaxed">
                                {exp.achievements.map((achievement, j) => (
                                    <li key={j} className="relative pl-5">
                                        <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-primary/40"></span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
