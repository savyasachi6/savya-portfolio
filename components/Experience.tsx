"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Brain, Cpu } from "lucide-react";

const EXPERIENCES = [
    {
        title: "Teaching Assistant — Data Structures & Algorithms",
        company: "Texas State University",
        location: "San Marcos, TX",
        period: "Jan 2025 – Aug 2025",
        type: "Teaching",
        icon: GraduationCap,
        color: "var(--color-accent)",
        tag: "Python · Algorithms",
        achievements: [
            "Guided graduate and undergraduate students in advanced Data Structures & Algorithms, focusing on Python-based problem solving crucial for scalable AI engineering and data science.",
            "Evaluated technical assignments covering graph traversal, dynamic programming, and optimization—core concepts underpinning modern AI systems, RAG retrieval, and search algorithms.",
            "Mentored students on writing highly optimized, memory-efficient code, bridging the gap between theoretical algorithms and scalable machine learning development.",
        ],
    },
    {
        title: "Software Engineer",
        company: "Clinithink (via Innova Solutions)",
        location: "London, UK",
        period: "Jul 2022 – Jan 2024",
        type: "Industry",
        icon: Briefcase,
        color: "var(--color-primary)",
        tag: "Backend · Python · AI Integration",
        achievements: [
            "Architected enterprise infrastructure and high-throughput microservices using FastAPI and Python, supporting clinical data workflows and large-scale NLP inference pipelines.",
            "Integrated Large Language Models (LLMs) and embeddings for healthcare text analysis, building secure RAG (Retrieval-Augmented Generation) architectures over vector databases.",
            "Engineered event-driven backend patterns using Azure WebJobs and Azure Storage for asynchronous data processing, accelerating the turnaround of ML predictions and data ingestion.",
            "Built end-to-end MLOps pipelines using Azure DevOps CI/CD, enabling zero-downtime deployments and continuous monitoring for deployed AI models.",
        ],
    },
    {
        title: "Associate Software Engineer",
        company: "Clinithink (via Innova Solutions)",
        location: "Atlanta, GA",
        period: "Jun 2021 – Jul 2022",
        type: "Industry",
        icon: Code2,
        color: "var(--color-emerald)",
        tag: "Backend · AWS · Data Pipelines",
        achievements: [
            "Built robust backend data integration pipelines and Python-based utilities, establishing the foundational data layer for downstream machine learning and AI-driven healthcare applications.",
            "Engineered scalable RESTful services using AWS Lambda and API Gateway, exposing predictive models and data endpoints to internal clinical applications.",
            "Optimized SQL database interactions and implemented feature engineering pipelines utilizing Pandas and NumPy, ensuring high-quality data retrieval for analytical workflows.",
            "Developed automated operational scripts and CI/CD enhancements using Python, improving the reliability and reproducibility of testing and deployment processes for data services.",
        ],
    },
    {
        title: "Deep Learning & AI Engineer",
        company: "Unisys",
        location: "Hyderabad, India",
        period: "Jul 2019 – Jan 2020",
        type: "AI/ML",
        icon: Brain,
        color: "hsl(270,80%,65%)",
        tag: "Deep Learning · PyTorch · MLOps",
        achievements: [
            "Developed CNN-based computer vision models and deep learning classification workflows using PyTorch and TensorFlow, achieving high accuracy for enterprise use cases.",
            "Designed production-ready inference APIs utilizing Flask, optimizing data throughput and latency for real-time model execution in compute-aware environments.",
            "Implemented robust data preprocessing, normalization, and augmentation pipelines, improving model generalizability and training stability.",
            "Integrated deep-learning outputs directly into enterprise backend systems, demonstrating strong end-to-end systems engineering and deployment capabilities.",
        ],
    },
    {
        title: "MLOps Intern",
        company: "Verzeo",
        location: "Hyderabad, India",
        period: "Feb 2020 – Apr 2020",
        type: "MLOps",
        icon: Cpu,
        color: "hsl(200,80%,55%)",
        tag: "MLOps · Python · Automation",
        achievements: [
            "Automated end-to-end model training, evaluation, and validation workflows in Python, significantly reducing manual experimentation cycles for predictive models.",
            "Scripted parameterized machine learning experiments using Scikit-Learn, enhancing hyper-parameter tuning and validation throughput across multiple datasets.",
            "Established rigorous logging and benchmarking discipline using ML tracking tools, creating reproducible and scalable ML pipelines.",
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
        <section id="experience" className="w-full pt-16 pb-24 md:pt-20 md:pb-36" style={{ background: "var(--bg-base)" }}>
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
                    <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
                        6+ years building scalable AI systems, NLP inference pipelines, and production-grade MLOps environments across healthcare and enterprise software.
                    </p>
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
                                key={`${exp.title}-${exp.period}`}
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
