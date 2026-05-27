import { Brain, Database, Cloud, Code2, GitBranch, Cpu, Globe, Zap } from "lucide-react";

export const SKILL_CATEGORIES = [
    {
        name: "Languages",
        skills: ["Python", "TypeScript", "C++", "Go", "SQL", "Bash"],
    },
    {
        name: "AI / GenAI Frameworks",
        skills: ["LangChain", "LangGraph", "LlamaIndex", "AutoGen", "LangFlow", "Hugging Face", "OpenAI API", "Vertex AI", "AWS Bedrock"],
    },
    {
        name: "LLMs & NLP",
        skills: ["GPT-4o", "Claude", "Gemini", "BERT", "T5", "LoRA / PEFT", "Prompt Engineering", "RAG", "GraphRAG"],
    },
    {
        name: "ML / Deep Learning",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "ONNX", "CUDA", "H2O.ai"],
    },
    {
        name: "Vector Databases & Search",
        skills: ["FAISS", "Pinecone", "Milvus", "pgvector", "OpenSearch", "ChromaDB", "Neo4j"],
    },
    {
        name: "MLOps & Infra",
        skills: ["MLflow", "Docker", "Kubernetes", "AWS SageMaker", "Kubeflow", "CI/CD", "Terraform", "Airflow"],
    },
    {
        name: "Robotics & HPC",
        skills: ["ROS2", "Isaac Sim", "Isaac Lab", "Nav2", "pybind11", "Slurm", "MPI", "HDF5"],
    },
    {
        name: "Cloud & Data",
        skills: ["AWS", "Azure", "GCP", "PySpark", "Kafka", "Apache Spark", "Databricks", "Apache Iceberg"],
    },
];

export const TOP_SKILLS = [
    { name: "LLMs, RAG & Agentic AI Architecture",    value: 95, icon: Brain },
    { name: "Multi-Agent Systems (LangGraph / AutoGen)", value: 93, icon: Cpu },
    { name: "MLOps & Production AI Deployment",       value: 90, icon: GitBranch },
    { name: "Vector Databases & Semantic Search",     value: 90, icon: Database },
    { name: "Python Engineering & Backend Services",  value: 92, icon: Code2 },
    { name: "Distributed Systems Architecture",       value: 88, icon: Globe },
    { name: "Cloud Platforms (AWS / Azure / GCP)",   value: 85, icon: Cloud },
    { name: "High-Performance Computing & Robotics",  value: 82, icon: Zap },
];
