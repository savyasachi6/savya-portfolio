export const PROJECTS = [
    {
        title: "Agentic OS",
        description: "Built a production-grade multi-agent operating system featuring a speculative fractal RAG pipeline, contextual bandit RL routing for LLMs, and a pgvector-backed knowledge graph memory schema.",
        tag: "LLM Agents & Multi-Agent Systems",
        stack: ["Python", "LangGraph", "LangChain", "pgvector", "FastAPI"],
        link: "https://github.com/savyasachi6/agentic_os"
    },
    {
        title: "SNAT Port Exhaustion Mitigation",
        description: "Diagnosed Azure App Service SNAT exhaustion for 100k+ daily API requests. Reduced SQL query time by 57% (4.2s to 1.8s) via global using patterns for data access objects, yielding a 70% reduction in outbound connections.",
        tag: "Distributed Systems",
        stack: ["C#", ".NET", "SQL Server", "Azure", "Microservices"],
        link: "https://github.com/savyasachi6"
    },
    {
        title: "MDS Saturation on Stampede3",
        description: "Orchestrated parallel neural network experiments across 560+ Sapphire Rapids HBM nodes. Mitigated Lustre Metadata Server saturation by re-engineering 57,000 I/O operations down to 1 via node-local /tmp checkpointing.",
        tag: "High-Performance Computing",
        stack: ["Slurm", "MPI", "HDF5", "Lustre", "C++"],
        link: "https://github.com/savyasachi6"
    },
    {
        title: "Reward Hacking in Isaac Sim",
        description: "Developed PPO navigation agents in Isaac Sim and ROS2. Eliminated the 'Vibrating Agent' local optima artifact by engineering custom potential-based C++ reward functions via pybind11, achieving 92% collision-free success.",
        tag: "Applied RL",
        stack: ["Python", "C++", "PyTorch", "ROS2", "Isaac Sim"],
        link: "https://github.com/savyasachi6"
    },
    {
        title: "Productionizing Deep Learning Inference",
        description: "Integrated PyTorch-based deep learning models into production infrastructure. Executed ONNX Runtime optimization and INT8 quantization, achieving <100ms inference latency while serving 10,000+ daily prediction requests.",
        tag: "Software Engineering",
        stack: ["PyTorch", "ONNX", "Kubernetes", "Python", "Docker"],
        link: "https://github.com/savyasachi6"
    }
];
