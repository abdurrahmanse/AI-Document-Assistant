/**
 * Projects Page Data
 * Generated from pages/03-projects.json
 * This file contains featured projects with detailed case studies
 */

import type { ProjectsPage } from '../../entities/types';

export const projectsPage: ProjectsPage = {
    page: {
        id: "projects",
        title: "Research Projects",
        description: "Featured research-backed AI and machine learning case studies",
        metaDescription: "Portfolio of research-backed AI, machine learning, and deep learning projects with measured impact",
    },
    sections: {
        hero: {
            title: "Research Projects",
            subtitle: "A record of questions, experiments, and production systems",
            description:
                "Each project begins as a question, moves through experimentation, and ends as a system that can be measured in the real world. The common thread is research rigor from first draft to deployment.",
        },
        filters: [
            { name: "All", id: "all" },
            { name: "Applied ML", id: "ml" },
            { name: "Deep Learning", id: "dl" },
            { name: "Language Research", id: "nlp" },
            { name: "Forecasting", id: "timeseries" },
            { name: "Computer Vision", id: "cv" },
        ],
    },
    projects: [
        {
            id: 1,
            title: "Customer Retention Research System",
            category: "Machine Learning",
            categoryId: "ml",
            description:
                "Research program that compared multiple retention hypotheses, tested intervention strategies, and turned the best approach into a production scoring system.",
            shortDescription: "Research-backed model for retention and churn prediction",
            featured: true,
            image: "/images/projects/churn-prediction.jpg",
            startDate: "2022-01",
            endDate: "2022-06",
            duration: "6 months",
            teamSize: 3,
            status: "Completed, Deployed, and Monitored",
            technologies: ["Python", "XGBoost", "Scikit-learn", "PostgreSQL", "AWS SageMaker", "Flask", "Docker"],
            highlights: {
                accuracy: "89%",
                retention_improvement: "+23%",
                revenue_impact: "$2.3M",
                latency: "50ms",
                users_impacted: "5M+",
            },
            features: [
                "Real-time retention probability scoring",
                "Feature importance analysis and SHAP values",
                "Automated model retraining pipeline",
                "Interactive experiment dashboard",
                "A/B testing framework for intervention strategies",
            ],
            businessOutcomes: [
                "Reduced customer churn by 23% in first year of deployment",
                "Generated $2.3M in incremental revenue",
                "Successfully scaled to 5M+ customers globally",
                "Achieved 99.9% system uptime with SLA guarantees",
            ],
            technicalApproach:
                "Developed an ensemble ML model combining XGBoost, LightGBM, and logistic regression after evaluating several baselines. Implemented feature engineering across behavioral, demographic, and transactional signals. Built an automated ETL pipeline and real-time scoring API so the research could live in production.",
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
                blog: "/blog/churn-retention-study",
            },
            testimonial: {
                text: "The retention research gave us a clearer way to think about churn, and the 23% improvement directly changed how we prioritized interventions.",
                author: "Dr. Sarah Chen",
                title: "VP of Engineering, TechCore Solutions",
            },
        },
        {
            id: 2,
            title: "Real-time Fraud Detection Research Engine",
            category: "Deep Learning",
            categoryId: "dl",
            description:
                "Research and production system for detecting fraudulent transactions in real time across multiple payment channels with exceptional accuracy.",
            shortDescription: "Neural network fraud detection for financial services",
            featured: true,
            image: "/images/projects/fraud-detection.jpg",
            startDate: "2021-08",
            endDate: "2022-03",
            duration: "7 months",
            teamSize: 5,
            status: "Completed, Deployed, and Monitored",
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
                "Built a neural network ensemble combining autoencoders for anomaly detection and fully connected networks for transaction classification. Distributed training with Spark and real-time inference with Kafka let the research survive production scale.",
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
                blog: "/blog/fraud-detection-research",
            },
            testimonial: {
                text: "The fraud detection engine turned research into a reliable advantage, helping us catch emerging fraud patterns before they spread.",
                author: "Michael Thompson",
                title: "Chief Data Officer, FinanceHub Corp",
            },
        },
    ],
} as const;

export default projectsPage;
