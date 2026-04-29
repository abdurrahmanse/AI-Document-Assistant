/**
 * Skill Evolution Data
 * Generated from skill-evolution.json
 */

import type { SkillEvolution } from '../entities/types';

export const skillEvolution: SkillEvolution = {
    skillEvolution: {
        title: "Technical Skills Development Timeline",
        period: "2019-2024",
        summary:
            "Progressive skill development from foundational statistics and Python to advanced deep learning, leadership, and research capabilities",
    },
    yearlyProgression: [
        {
            year: 2019,
            role: "Junior Data Scientist",
            company: "InsightHub Inc.",
            phase: "Foundation Building",
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
                    skill: "Statistical Analysis",
                    level: "Advanced",
                    context: "Hypothesis testing, experimental design",
                },
                {
                    skill: "Data Visualization",
                    level: "Intermediate",
                    context: "Matplotlib, Excel for reporting",
                },
                {
                    skill: "A/B Testing",
                    level: "Intermediate",
                    context: "Experimental design and analysis",
                },
            ],
            levelSummary: "Foundational analytics skills",
            focusArea: "Statistical methods and reporting",
        },
        {
            year: 2020,
            role: "Data Scientist",
            company: "DataVision Analytics",
            phase: "Skill Expansion - Phase 1",
            newSkillsAcquired: [
                {
                    skill: "Machine Learning",
                    level: "Intermediate",
                    context: "Supervised learning, classification, regression",
                },
                {
                    skill: "Scikit-learn",
                    level: "Advanced",
                    context: "Primary ML library for modeling",
                },
                {
                    skill: "XGBoost",
                    level: "Intermediate",
                    context: "Gradient boosting for tabular data",
                },
                {
                    skill: "TensorFlow",
                    level: "Beginner",
                    context: "Introduction to deep learning",
                },
                {
                    skill: "Feature Engineering",
                    level: "Advanced",
                    context: "Critical for model performance",
                },
                {
                    skill: "R",
                    level: "Intermediate",
                    context: "Statistical computing and visualization",
                },
                {
                    skill: "Tableau",
                    level: "Intermediate",
                    context: "Executive dashboards and reporting",
                },
            ],
            levelSummary: "Full ML stack - classical methods",
            focusArea: "Transitioning from analytics to machine learning",
        },
        {
            year: 2021,
            role: "Senior Data Scientist (Early Career)",
            company: "TechCore Solutions",
            phase: "Skill Expansion - Phase 2",
            newSkillsAcquired: [
                {
                    skill: "Deep Learning",
                    level: "Advanced",
                    context: "CNNs, RNNs, LSTMs for various domains",
                },
                {
                    skill: "PyTorch",
                    level: "Advanced",
                    context: "Research and custom architectures",
                },
                {
                    skill: "BERT / Transformers",
                    level: "Intermediate",
                    context: "NLP applications",
                },
                {
                    skill: "Apache Spark",
                    level: "Intermediate",
                    context: "Large-scale data processing",
                },
                {
                    skill: "AWS",
                    level: "Intermediate",
                    context: "SageMaker, EC2, S3 for ML infrastructure",
                },
                {
                    skill: "Docker",
                    level: "Intermediate",
                    context: "Model containerization",
                },
                {
                    skill: "Leadership",
                    level: "Beginner",
                    context: "Starting to manage small teams",
                },
                {
                    skill: "MLOps",
                    level: "Beginner",
                    context: "Model deployment and monitoring",
                },
            ],
            levelSummary: "Advanced ML engineer with deployment focus",
            focusArea: "Production ML systems and team leadership",
        },
        {
            year: 2022,
            role: "Senior Data Scientist",
            company: "TechCore Solutions",
            phase: "Leadership & Specialization",
            newSkillsAcquired: [
                {
                    skill: "Leadership",
                    level: "Advanced",
                    context: "Managing team of 4, strategic planning",
                },
                {
                    skill: "MLOps",
                    level: "Advanced",
                    context: "End-to-end ML lifecycle management",
                },
                {
                    skill: "Kubernetes",
                    level: "Intermediate",
                    context: "Container orchestration",
                },
                {
                    skill: "Kafka",
                    level: "Intermediate",
                    context: "Real-time data streaming",
                },
                {
                    skill: "Research Methods",
                    level: "Advanced",
                    context: "Academic writing and publishing",
                },
                {
                    skill: "Model Interpretability",
                    level: "Advanced",
                    context: "SHAP, LIME for explainability",
                },
                {
                    skill: "Advanced Python",
                    level: "Expert",
                    context: "Optimized code, libraries design",
                },
                {
                    skill: "GCP",
                    level: "Intermediate",
                    context: "BigQuery, Vertex AI",
                },
            ],
            levelSummary: "Research-focused senior engineer",
            focusArea: "Research contributions and team leadership",
        },
        {
            year: 2023,
            role: "Senior Data Scientist",
            company: "TechCore Solutions",
            phase: "Advanced Research",
            newSkillsAcquired: [
                {
                    skill: "Graph Neural Networks",
                    level: "Advanced",
                    context: "Complex relational data",
                },
                {
                    skill: "Bandit Algorithms",
                    level: "Advanced",
                    context: "Optimization and online learning",
                },
                {
                    skill: "Advanced Statistics",
                    level: "Expert",
                    context: "Causal inference, experiment design",
                },
                {
                    skill: "System Design",
                    level: "Advanced",
                    context: "Large-scale ML systems",
                },
                {
                    skill: "Mentoring",
                    level: "Advanced",
                    context: "Developing junior team members",
                },
                {
                    skill: "Public Speaking",
                    level: "Advanced",
                    context: "Conferences and webinars",
                },
            ],
            levelSummary: "Research leader and innovator",
            focusArea: "Cutting-edge ML research and thought leadership",
        },
        {
            year: 2024,
            role: "Senior Data Scientist",
            company: "TechCore Solutions",
            phase: "Established Expert",
            newSkillsAcquired: [
                {
                    skill: "Transfer Learning",
                    level: "Expert",
                    context: "Limited data scenarios",
                },
                {
                    skill: "Advanced MLOps",
                    level: "Expert",
                    context: "Industry-leading practices",
                },
                {
                    skill: "Strategic Planning",
                    level: "Advanced",
                    context: "ML roadmaps and initiatives",
                },
            ],
            levelSummary: "Established expert and innovator",
            focusArea: "Strategic research and innovation leadership",
        },
    ],
} as const;

export default skillEvolution;
