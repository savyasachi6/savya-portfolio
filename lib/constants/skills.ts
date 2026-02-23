import { Code2, Database, LayoutTemplate, Cpu, Cloud, Globe } from "lucide-react";

export const SKILL_CATEGORIES = [
    {
        name: "Languages",
        skills: ["C++", "Python", "Rust", "Golang", "C# / .NET", "SQL", "Assembly"],
    },
    {
        name: "HPC & AI",
        skills: ["CUDA", "PyTorch", "Slurm", "MPI", "Parallel I/O (Lustre)", "Transformers", "PPO / DQN"],
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
    { name: "Distributed Systems Architecture", value: 95, icon: Database },
    { name: "High-Performance Computing", value: 90, icon: Cpu },
    { name: "Applied Reinforcement Learning", value: 90, icon: Globe },
    { name: "Microservices & Kubernetes", value: 85, icon: Cloud },
    { name: "Low-Level Optimization (C++/CUDA)", value: 85, icon: Code2 },
    { name: "Simulation Environments (Isaac)", value: 80, icon: LayoutTemplate },
];
