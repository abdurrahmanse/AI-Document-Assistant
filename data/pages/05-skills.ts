/**
 * Skills Page Data
 * Generated from pages/05-skills.json
 */

import type { SkillsPage } from '../../entities/types';

export const skillsPage: SkillsPage = {
    page: {
        id: "skills",
        title: "Skills",
        description: "Technical skills and expertise",
        metaDescription: "Data science skills including AI, machine learning, deep learning, NLP, computer vision, and data engineering",
    },
    sections: {
        hero: {
            title: "Data Science & ML Skills",
            subtitle: "A focused skill set across AI, machine learning, deep learning, NLP, computer vision, and data engineering",
            description:
                "Over 5 years of hands-on experience building production-grade data science solutions, analytical products, and AI systems.",
        },
    },
    skillCategories: [
        {
            id: "foundations",
            categoryName: "Data Science Foundations",
            categoryIcon: "code",
            description: "Core analytical skills for statistical reasoning, storytelling, and data manipulation",
            skills: [
                {
                    name: "Statistics",
                    proficiency: "Expert",
                    level: 5,
                    years: 5,
                    description: "Statistical thinking for inference, experiment design, and decision-making",
                    expertise: ["Hypothesis Testing", "A/B Testing", "Probability", "Causal Inference"],
                },
                {
                    name: "Data Visualization",
                    proficiency: "Expert",
                    level: 5,
                    years: 5,
                    description: "Turning complex analysis into clear, decision-ready narratives",
                    expertise: ["Dashboards", "Storytelling", "Executive Reporting", "Exploratory Analysis"],
                },
                {
                    name: "Domain Knowledge",
                    proficiency: "Advanced",
                    level: 4,
                    years: 5,
                    description: "Translating business context into practical analytical and AI solutions",
                    expertise: ["Stakeholder Discovery", "Problem Framing", "Decision Support"],
                },
                {
                    name: "Pandas",
                    proficiency: "Expert",
                    level: 5,
                    years: 5,
                    description: "Fast tabular data wrangling, preprocessing, and feature engineering",
                    expertise: ["Data Cleaning", "Feature Engineering", "EDA"],
                    libraries: ["Pandas", "NumPy"],
                },
                {
                    name: "NumPy",
                    level: 5,
                    proficiency: "Expert",
                    years: 5,
                    description: "Vectorized numerical computing for scalable analysis and modeling",
                    expertise: ["Linear Algebra", "Array Operations", "Performance Optimization"],
                },
            ],
        },
        {
            id: "ai-ml",
            categoryName: "Artificial Intelligence & Machine Learning",
            categoryIcon: "brain",
            description: "Modeling skills spanning classic ML, automation, and AI system design",
            skills: [
                {
                    name: "Artificial Intelligence",
                    proficiency: "Expert",
                    level: 5,
                    years: 5,
                    description: "Designing intelligent systems that automate decisions and augment workflows",
                    expertise: ["AI Strategy", "Automation", "Predictive Systems"],
                },
                {
                    name: "Machine Learning",
                    proficiency: "Expert",
                    level: 5,
                    years: 5,
                    description: "Supervised and unsupervised learning for business-critical outcomes",
                    techniques: ["Classification", "Regression", "Clustering", "Ensemble Learning", "Model Evaluation"],
                    useCases: ["Fraud Detection", "Churn Prediction", "Risk Modeling"],
                },
                {
                    name: "Scikit-learn",
                    proficiency: "Expert",
                    level: 5,
                    years: 5,
                    description: "Primary toolkit for classical machine learning workflows",
                    useCases: ["Preprocessing", "Model Selection", "Pipelines"],
                },
            ],
        },
        {
            id: "deep-learning",
            categoryName: "Deep Learning & Vision",
            categoryIcon: "tools",
            description: "Neural architectures and visual intelligence for complex prediction tasks",
            skills: [
                {
                    name: "Deep Learning",
                    proficiency: "Expert",
                    level: 5,
                    description: "Neural architectures for high-dimensional and sequential problems",
                    techniques: ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers"],
                    useCases: ["Image Classification", "Sequence Prediction", "Anomaly Detection"],
                },
                {
                    name: "Neural Networks",
                    proficiency: "Expert",
                    level: 5,
                    description: "Core building blocks for modern AI systems",
                    techniques: ["Feedforward Networks", "Backpropagation", "Attention Mechanisms"],
                },
                {
                    name: "Computer Vision",
                    proficiency: "Advanced",
                    level: 4,
                    description: "Image understanding and visual inference",
                    techniques: ["Image Classification", "Object Detection", "Segmentation", "OCR"],
                    models: ["ResNet", "YOLO", "Faster R-CNN"],
                },
                {
                    name: "TensorFlow",
                    proficiency: "Expert",
                    level: 5,
                    years: 4,
                    description: "Production-ready deep learning framework for training and deployment",
                    useCases: ["Training", "Deployment", "Computer Vision", "Sequence Modeling"],
                },
                {
                    name: "PyTorch",
                    proficiency: "Advanced",
                    level: 4,
                    years: 3,
                    description: "Research-friendly deep learning framework",
                    useCases: ["Research", "NLP", "Custom Architectures"],
                },
            ],
        },
        {
            id: "nlp-llm",
            categoryName: "Natural Language Processing & LLMs",
            categoryIcon: "brain",
            description: "Language understanding, prompt workflows, and LLM application design",
            skills: [
                {
                    name: "Natural Language Processing",
                    proficiency: "Advanced",
                    level: 4,
                    years: 4,
                    description: "Text analysis and language understanding",
                    techniques: ["Tokenization", "NER", "Sentiment Analysis", "Topic Modeling", "Embeddings"],
                    models: ["BERT", "GPT", "Word2Vec", "GloVe"],
                },
                {
                    name: "LangChain",
                    proficiency: "Intermediate",
                    level: 3,
                    years: 1,
                    description: "Composable tooling for LLM workflows and agents",
                    useCases: ["RAG", "Agents", "Prompt Orchestration"],
                },
            ],
        },
        {
            id: "data-engineering",
            categoryName: "Data Engineering & Big Data",
            categoryIcon: "tools",
            description: "Reliable pipelines and distributed systems for large-scale data and AI workloads",
            skills: [
                {
                    name: "Data Engineering",
                    proficiency: "Advanced",
                    level: 4,
                    years: 4,
                    description: "Building dependable ETL and ELT workflows for analytical and ML products",
                    expertise: ["ETL", "ELT", "Data Modeling", "Orchestration"],
                },
                {
                    name: "SQL",
                    proficiency: "Expert",
                    level: 5,
                    years: 5,
                    description: "Data access, transformation, and performance optimization",
                    expertise: ["Query Optimization", "Database Design", "ETL", "Data Warehousing"],
                    databases: ["PostgreSQL", "MySQL", "BigQuery", "Snowflake"],
                },
                {
                    name: "Apache Spark",
                    proficiency: "Advanced",
                    level: 4,
                    years: 3,
                    description: "Distributed processing for large-scale data workflows",
                    useCases: ["Batch Processing", "ETL", "Feature Pipelines"],
                },
                {
                    name: "Kafka",
                    proficiency: "Intermediate",
                    level: 3,
                    years: 2,
                    description: "Real-time event streaming and pipeline orchestration",
                    useCases: ["Event Streaming", "Real-time Scoring", "Message Queues"],
                },
            ],
        },
    ],
} as const;

export default skillsPage;
