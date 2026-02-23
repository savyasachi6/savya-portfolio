"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS } from "@/lib/constants/projects";

export const Projects: React.FC = () => {
    return (
        <section id="work" className="w-full bg-background py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <span className="mb-4 block text-xs font-semibold tracking-widest text-primary uppercase">
                        Work & Research
                    </span>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
                        Selected Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,107,53,0.08)]"
                        >
                            <div>
                                <Badge variant="default" className="mb-6 pointer-events-none">
                                    {project.tag}
                                </Badge>
                                <h3 className="mb-3 font-display text-2xl font-semibold text-text-primary">
                                    {project.title}
                                </h3>
                                <p className="mb-6 font-sans text-text-muted leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mb-8 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="text-xs font-medium text-text-muted/70">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-border/50 pt-6">
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors group-hover:text-primary"
                                >
                                    View Case Study
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                                <a
                                    href={project.link}
                                    className="text-text-muted hover:text-text-primary transition-colors"
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
