import { Code2, Database, LayoutTemplate, Cpu, Cloud, Globe } from "lucide-react";

export const SKILL_CATEGORIES = [
    {
        name: "Languages",
        skills: ["TypeScript", "Python", "Go", "C++", "SQL"],
    },
    {
        name: "HPC & AI",
        skills: ["LangGraph", "LangChain", "pgvector", "RAG", "Multi-Agent Systems", "PyTorch"],
    },
    {
        name: "Robotics & Simulation",
        skills: ["ROS2", "Isaac Sim", "Isaac Lab", "Nav2", "pybind11"],
    },
    {
        name: "Distributed Systems",
        skills: ["Kubernetes", "Docker", "gRPC", "mTLS", "RBAC", "OpenTelemetry (OTel)"],
    },
    {
        name: "Infrastructure",
        skills: ["Azure", "AWS", "Terraform", "CI/CD", "Apache Iceberg"],
    }
];

export const TOP_SKILLS = [
    { name: "LLM Agents & Multi-Agent Systems", value: 95, icon: Database },
    { name: "Retrieval-Augmented Generation (RAG)", value: 90, icon: Cpu },
    { name: "Distributed Systems Architecture", value: 90, icon: Globe },
    { name: "AI Engineering & Applied ML", value: 85, icon: Cloud },
    { name: "Microservices & Kubernetes", value: 85, icon: Code2 },
    { name: "High-Performance Computing", value: 80, icon: LayoutTemplate },
];
