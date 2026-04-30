/**
 * Projects Page Data
 * Generated from pages/03-projects.json
 * This file contains featured projects with detailed case studies
 */

import type { ProjectsPage } from '../../entities/types';

export const projectsPage: ProjectsPage = {
    page: {
        id: "projects",
        title: "Projects",
        description: "Featured AI and machine learning projects",
        metaDescription: "Portfolio of AI, machine learning, and deep learning projects with quantified impact and business value",
    },
    sections: {
        hero: {
            title: "Featured Projects",
            subtitle: "A showcase of AI and machine learning solutions I've built",
            description:
                "Each project represents a complete AI or ML solution from research and development to production deployment. All projects achieved measurable business impact.",
        },
        filters: [
            { name: "All", id: "all" },
            { name: "Machine Learning", id: "ml" },
            { name: "Deep Learning", id: "dl" },
            { name: "NLP", id: "nlp" },
            { name: "Time Series", id: "timeseries" },
            { name: "Computer Vision", id: "cv" },
        ],
    },
    projects: [
        {
            id: 1,
            title: "Customer Churn Prediction System",
            category: "Machine Learning",
            categoryId: "ml",
            description:
                "End-to-end ML system designed to predict customer churn, enabling proactive retention strategies and significantly improving customer lifetime value.",
            shortDescription: "Predictive model for customer retention and churn prediction",
            featured: true,
            image: "/images/projects/churn-prediction.jpg",
            startDate: "2022-01",
            endDate: "2022-06",
            duration: "6 months",
            teamSize: 3,
            status: "Completed & Deployed",
            technologies: ["Python", "XGBoost", "Scikit-learn", "PostgreSQL", "AWS SageMaker", "Flask", "Docker"],
            highlights: {
                accuracy: "89%",
                retention_improvement: "+23%",
                revenue_impact: "$2.3M",
                latency: "50ms",
                users_impacted: "5M+",
            },
            features: [
                "Real-time churn probability scoring",
                "Feature importance analysis and SHAP values",
                "Automated model retraining pipeline",
                "Interactive prediction dashboard",
                "A/B testing framework for intervention strategies",
            ],
            businessOutcomes: [
                "Reduced customer churn by 23% in first year of deployment",
                "Generated $2.3M in incremental revenue",
                "Successfully scaled to 5M+ customers globally",
                "Achieved 99.9% system uptime with SLA guarantees",
            ],
            technicalApproach:
                "Developed an ensemble ML model combining XGBoost, LightGBM, and logistic regression. Implemented comprehensive feature engineering including behavioral, demographic, and transactional features. Built automated ETL pipeline and real-time scoring API.",
            challenges: [
                "Class imbalance (90% retained vs 10% churn)",
                "Data quality issues requiring extensive cleaning",
                "Real-time inference performance optimization",
            ],
            solutions: [
                "SMOTE and class weighting for handling imbalance",
                "Data validation pipeline and profiling",
                "Model compression and inference optimization reducing latency to 50ms",
            ],
            links: {
                github: "https://github.com/S M Masfequier Rahman-Swapno/churn-prediction",
                demo: "https://churn-demo.S M Masfequier Rahman-ds.com",
                blog: "/blog/churn-prediction-case-study",
            },
            testimonial: {
                text: "This churn prediction model has been transformational for our customer retention strategy. The 23% improvement has directly contributed to our revenue growth.",
                author: "Dr. Sarah Chen",
                title: "VP of Engineering, TechCore Solutions",
            },
        },
        {
            id: 2,
            title: "Real-time Fraud Detection Engine",
            category: "Deep Learning",
            categoryId: "dl",
            description:
                "Production-grade deep learning system for detecting fraudulent transactions in real-time across multiple payment channels with exceptional accuracy.",
            shortDescription: "Advanced fraud detection using neural networks for financial services",
            featured: true,
            image: "/images/projects/fraud-detection.jpg",
            startDate: "2021-08",
            endDate: "2022-03",
            duration: "7 months",
            teamSize: 5,
            status: "Completed & Deployed",
            technologies: [
                "TensorFlow",
                "Python",
                "Apache Spark",
                "Kafka",
                "Elasticsearch",
                "Docker",
                "Kubernetes",
                "AWS EC2",
            ],
            highlights: {
                accuracy: "94.2%",
                fraud_prevented: "$1.8M",
                latency: "50ms",
                throughput: "10K TPS",
                false_positive_reduction: "-35%",
            },
            features: [
                "Neural network ensemble for multi-class classification",
                "Real-time transaction scoring and decision making",
                "Anomaly detection module for unknown fraud patterns",
                "Interactive fraud investigation and case management tool",
                "Adaptive threshold management based on business rules",
            ],
            businessOutcomes: [
                "Prevented $1.8M in fraud losses in the first year",
                "Maintained sub-100ms latency for 10,000 transactions per second",
                "Reduced false positives by 35%, improving customer experience",
                "Achieved 99.99% system availability SLA",
            ],
            technicalApproach:
                "Built neural network ensemble combining autoencoders for anomaly detection and fully-connected networks for transaction classification. Implemented distributed training using Spark and real-time inference with Kafka streams.",
            challenges: [
                "Massive data volume (100M+ daily transactions)",
                "Severe class imbalance (99.9% legitimate transactions)",
                "Extremely tight latency requirements",
                "Concept drift due to evolving fraud patterns",
            ],
            solutions: [
                "Stream processing with Kafka for scalable data ingestion",
                "Focal loss and weighted sampling for class imbalance",
                "Model quantization and GPU inference for 50ms latency",
                "Continuous model monitoring and retraining pipeline",
            ],
            links: {
                github: "https://github.com/S M Masfequier Rahman-Swapno/fraud-detection",
                blog: "/blog/fraud-detection-architecture",
            },
            testimonial: {
                text: "The fraud detection system has exceeded all expectations. Not only has it prevented millions in losses, but it's also given us a competitive advantage in identifying emerging fraud patterns.",
                author: "Michael Thompson",
                title: "Chief Data Officer, FinanceHub Corp",
            },
        },
    ],
} as const;

export default projectsPage;
