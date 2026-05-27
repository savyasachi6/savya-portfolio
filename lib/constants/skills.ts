import { BrainCircuit, Database, Globe, Network, Terminal } from "lucide-react";

export const TOP_SKILLS = [
    { name: "Python / Deep Learning", value: 98, icon: BrainCircuit },
    { name: "LLMs & Agentic AI (RAG, LangChain)", value: 95, icon: Network },
    { name: "Distributed Systems & APIs", value: 90, icon: Globe },
    { name: "Cloud & MLOps (AWS, Docker)", value: 88, icon: Terminal },
    { name: "Vector Databases & Data Eng", value: 92, icon: Database },
];

export const SKILL_CATEGORIES = [
    {
        title: "Languages & Core",
        skills: [
            { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
            { name: "Java", icon: "devicon-java-plain", color: "#007396" },
            { name: "Golang", icon: "devicon-go-plain", color: "#00ADD8" },
            { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
            { name: "SQL", icon: "devicon-mysql-plain", color: "#4479A1" },
            { name: "Bash/Shell", icon: "devicon-bash-plain", color: "#4EAA25" },
        ],
    },
    {
        title: "AI, ML & Data Science",
        skills: [
            { name: "PyTorch", icon: "devicon-pytorch-original", color: "#EE4C2C" },
            { name: "TensorFlow", icon: "devicon-tensorflow-original", color: "#FF6F00" },
            { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain", color: "#F7931E" },
            { name: "Hugging Face", icon: "devicon-python-plain", color: "#FFD21E" },
            { name: "Pandas/NumPy", icon: "devicon-pandas-original", color: "#150458" },
            { name: "PySpark", icon: "devicon-apachespark-original", color: "#E25A1C" },
        ],
    },
    {
        title: "LLMs & Agentic AI",
        skills: [
            { name: "LangChain", icon: "devicon-python-plain", color: "#121212" },
            { name: "LangGraph", icon: "devicon-python-plain", color: "#121212" },
            { name: "LlamaIndex", icon: "devicon-python-plain", color: "#121212" },
            { name: "OpenAI/Bedrock", icon: "devicon-amazonwebservices-original", color: "#FF9900" },
            { name: "Vertex AI", icon: "devicon-googlecloud-plain", color: "#4285F4" },
            { name: "RAG Pipelines", icon: "devicon-python-plain", color: "#4EAA25" },
        ],
    },
    {
        title: "Backend & APIs",
        skills: [
            { name: "FastAPI", icon: "devicon-fastapi-plain", color: "#009688" },
            { name: "Flask", icon: "devicon-flask-original", color: "#000000" },
            { name: "Django", icon: "devicon-django-plain", color: "#092E20" },
            { name: "Spring Boot", icon: "devicon-spring-plain", color: "#6DB33F" },
            { name: "REST/gRPC", icon: "devicon-nodejs-plain", color: "#339933" },
        ],
    },
    {
        title: "Databases & Vector Stores",
        skills: [
            { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#4169E1" },
            { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
            { name: "Neo4j", icon: "devicon-neo4j-plain", color: "#018BFF" },
            { name: "Redis", icon: "devicon-redis-plain", color: "#DC382D" },
            { name: "Pinecone/FAISS", icon: "devicon-python-plain", color: "#000000" },
            { name: "ChromaDB", icon: "devicon-python-plain", color: "#000000" },
        ],
    },
    {
        title: "Cloud & MLOps",
        skills: [
            { name: "AWS", icon: "devicon-amazonwebservices-original", color: "#FF9900" },
            { name: "Azure", icon: "devicon-azure-plain", color: "#0089D6" },
            { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
            { name: "Kubernetes", icon: "devicon-kubernetes-plain", color: "#326CE5" },
            { name: "MLflow", icon: "devicon-python-plain", color: "#0194E2" },
            { name: "Terraform", icon: "devicon-terraform-plain", color: "#7B42BC" },
        ],
    },
];
