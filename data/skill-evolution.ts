/**
 * Skill Evolution Data
 * Generated from skill-evolution.json
 */

import type { SkillEvolution } from '@/types/common';

export const skillEvolution: SkillEvolution = {
    skillEvolution: {
        title: "Data Science & AI Skills Development Timeline",
        period: "2019-2024",
        summary:
            "Progressive skill development from statistics and data visualization to machine learning, deep learning, NLP, and data engineering",
    },
    yearlyProgression: [
        {
            year: 2019,
            role: "Junior Data Scientist",
            company: "InsightHub Inc.",
            phase: "Foundations",
            newSkillsAcquired: [
                {
                    skill: "Python",
                    level: "Intermediate",
                    context: "For data analysis and scripting",
                },
                {
                    skill: "SQL",
                    level: "Intermediate",
                    context: "For data extraction and manipulation",
                },
                {
                    skill: "Statistics",
                    level: "Advanced",
                    context: "Hypothesis testing, experimental design, and inference",
                },
                {
                    skill: "Data Visualization",
                    level: "Intermediate",
                    context: "Storytelling dashboards and reporting",
                },
                {
                    skill: "Domain Knowledge",
                    level: "Intermediate",
                    context: "Understanding business constraints and decision goals",
                },
            ],
            levelSummary: "Foundational analytics and communication skills",
            focusArea: "Statistical methods, storytelling, and domain understanding",
        },
        {
            year: 2020,
            role: "Data Scientist",
            company: "DataVision Analytics",
            phase: "AI & ML Expansion",
            newSkillsAcquired: [
                {
                    skill: "Machine Learning",
                    level: "Advanced",
                    context: "Supervised and unsupervised learning for business problems",
                },
                {
                    skill: "Scikit-learn",
                    level: "Advanced",
                    context: "Primary toolkit for classical machine learning workflows",
                },
                {
                    skill: "Pandas",
                    level: "Expert",
                    context: "Data wrangling and feature engineering",
                },
                {
                    skill: "NumPy",
                    level: "Advanced",
                    context: "Vectorized numerical computing and optimization",
                },
                {
                    skill: "Data Engineering",
                    level: "Advanced",
                    context: "Reliable pipelines and data preparation for ML systems",
                },
            ],
            levelSummary: "Machine learning and model-building skills",
            focusArea: "Transitioning from analytics to production ML",
        },
        {
            year: 2021,
            role: "Senior Data Scientist (Early Career)",
            company: "TechCore Solutions",
            phase: "Deep Learning",
            newSkillsAcquired: [
                {
                    skill: "Deep Learning",
                    level: "Advanced",
                    context: "Neural architectures for image and sequence problems",
                },
                {
                    skill: "Neural Networks",
                    level: "Advanced",
                    context: "Feedforward networks, backpropagation, and attention",
                },
                {
                    skill: "TensorFlow",
                    level: "Advanced",
                    context: "Production-ready deep learning framework",
                },
                {
                    skill: "PyTorch",
                    level: "Advanced",
                    context: "Research-friendly experimentation and custom architectures",
                },
                {
                    skill: "Computer Vision",
                    level: "Advanced",
                    context: "Image understanding and visual inference",
                },
            ],
            levelSummary: "Deep learning and vision specialist",
            focusArea: "Production-grade neural network systems",
        },
        {
            year: 2022,
            role: "Senior Data Scientist",
            company: "TechCore Solutions",
            phase: "NLP & LLMs",
            newSkillsAcquired: [
                {
                    skill: "Natural Language Processing",
                    level: "Advanced",
                    context: "Text analysis, language understanding, and embeddings",
                },
                {
                    skill: "LangChain",
                    level: "Intermediate",
                    context: "Composable workflows for LLM applications and agents",
                },
                {
                    skill: "Apache Spark",
                    level: "Advanced",
                    context: "Distributed data processing and feature pipelines",
                },
                {
                    skill: "Kafka",
                    level: "Intermediate",
                    context: "Real-time event streaming and scoring pipelines",
                },
                {
                    skill: "MLOps",
                    level: "Advanced",
                    context: "End-to-end model lifecycle management",
                },
            ],
            levelSummary: "Language AI and data platform skills",
            focusArea: "NLP workflows, LLM tooling, and big data systems",
        },
        {
            year: 2023,
            role: "Senior Data Scientist",
            company: "TechCore Solutions",
            phase: "Artificial Intelligence",
            newSkillsAcquired: [
                {
                    skill: "Artificial Intelligence",
                    level: "Advanced",
                    context: "Designing intelligent systems and automation workflows",
                },
                {
                    skill: "Model Interpretability",
                    level: "Advanced",
                    context: "SHAP and LIME for explainable ML",
                },
                {
                    skill: "Advanced Statistics",
                    level: "Expert",
                    context: "Causal inference, experimental design, and uncertainty",
                },
                {
                    skill: "Leadership",
                    level: "Advanced",
                    context: "Managing teams and cross-functional planning",
                },
            ],
            levelSummary: "Broader AI systems and leadership",
            focusArea: "AI strategy, explainability, and team leadership",
        },
        {
            year: 2024,
            role: "Senior Data Scientist",
            company: "TechCore Solutions",
            phase: "Strategic Growth",
            newSkillsAcquired: [
                {
                    skill: "Transfer Learning",
                    level: "Expert",
                    context: "Adapting pre-trained models to new use cases",
                },
                {
                    skill: "Advanced MLOps",
                    level: "Expert",
                    context: "Industry-leading deployment and monitoring practices",
                },
                {
                    skill: "Strategic Planning",
                    level: "Advanced",
                    context: "Roadmaps for AI, data engineering, and analytics",
                },
            ],
            levelSummary: "Established expert and innovation leader",
            focusArea: "Strategic AI delivery and product planning",
        },
    ],
} as const;

export default skillEvolution;
