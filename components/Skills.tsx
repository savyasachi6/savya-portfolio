"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { SKILL_CATEGORIES, TOP_SKILLS } from "@/lib/constants/skills";

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="w-full bg-surface py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24 flex flex-col items-center text-center or md:items-start md:text-left"
                >
                    <span className="mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
                        Built With
                    </span>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
                        My Toolkit
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Top Skills Meters */}
                    <div>
                        <h3 className="mb-8 font-display text-2xl font-semibold text-text-primary">
                            Core Competencies
                        </h3>
                        <div className="space-y-6">
                            {TOP_SKILLS.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div key={skill.name} className="flex flex-col space-y-2">
                                        <div className="flex items-center justify-between text-sm font-medium text-text-muted">
                                            <span className="flex items-center gap-2 text-text-primary">
                                                <Icon className="w-4 h-4" />
                                                {skill.name}
                                            </span>
                                            <span>{skill.value}%</span>
                                        </div>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={{
                                                hidden: { opacity: 0 },
                                                visible: { opacity: 1 },
                                            }}
                                        >
                                            <Progress value={skill.value} />
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Skill Badges */}
                    <div>
                        <h3 className="mb-8 font-display text-2xl font-semibold text-text-primary">
                            Technologies & Tools
                        </h3>
                        <div className="flex flex-col space-y-8">
                            {SKILL_CATEGORIES.map((category, i) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col space-y-3"
                                >
                                    <h4 className="text-sm font-medium text-text-muted">{category.name}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} variant="outline" className="bg-background">
                                                {skill}
                                            </Badge>
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
