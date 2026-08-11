/**
 * Publication History Data
 * Generated from publication-history.json
 */

import type { PublicationHistory } from '@/types/common';

export const publicationHistory: PublicationHistory = {
    publicationHistory: {
        title: "Research Publication Timeline",
        totalPublications: 3,
        totalCitations: 127,
        researchStartDate: "2020-06",
        researchPhase: "Started during Data Scientist role, continued at Senior level",
    },
    publicationsByYear: {
        "2020": {
            year: 2020,
            count: 0,
            note: "Focus on ML application and skill building",
        },
        "2021": {
            year: 2021,
            count: 0,
            note: "Transition period - first research groundwork laid",
        },
        "2022": {
            year: 2022,
            count: 2,
            publications: [
                {
                    id: "pub-2022-001",
                    title: "Real-time Fraud Detection in High-Velocity Transaction Streams",
                    publishedDate: "2022-11",
                    journal: "ACM Transactions on Data Science",
                    volume: 8,
                    issue: 4,
                    pages: "1-25",
                    doi: "10.1145/ACTDS.2022.9876543",
                    authors: [
                        {
                            name: "S M Masfequier Rahman Swapno",
                            position: "Lead Author",
                            role: "Senior Data Scientist at TechCore Solutions",
                        },
                        {
                            name: "Sarah Martinez",
                            position: "Co-Author",
                        },
                        {
                            name: "Prof. Dr. Juan Rodriguez",
                            position: "Advisor",
                            affiliation: "UC Berkeley",
                        },
                    ],
                    citations: 52,
                    description: "Ensemble methods and feature engineering for fraud detection at 10K transactions/second",
                    keywords: ["Fraud Detection", "Ensemble Learning", "Real-time Processing"],
                    projectBased: "Real-time Fraud Detection Engine",
                    url: "https://dl.acm.org/doi/abs/10.1145/ACTDS.2022.9876543",
                    impact: "High-impact publication with strong industry adoption",
                },
                {
                    id: "pub-2022-002",
                    title: "Interpretable Machine Learning Models for Business Decision-Making",
                    publishedDate: "2022-05",
                    journal: "Journal of Business Analytics",
                    volume: 5,
                    issue: 2,
                    pages: "112-135",
                    doi: "10.1016/JBA.2022.112",
                    authors: [
                        {
                            name: "S M Masfequier Rahman Swapno",
                            position: "Solo Author",
                            role: "Senior Data Scientist at TechCore Solutions",
                        },
                    ],
                    citations: 30,
                    description: "SHAP values and LIME for explaining black-box models to business stakeholders",
                    keywords: ["Interpretability", "SHAP", "LIME", "Explainable AI"],
                    projectBased: "Customer Churn Prediction System",
                    url: "https://sciencedirect.com/science/article/pii/JBA2022112",
                    impact: "Bridges ML complexity with business understanding",
                },
            ],
        },
        "2023": {
            year: 2023,
            count: 1,
            publications: [
                {
                    id: "pub-2023-001",
                    title: "Efficient Transfer Learning Approaches for Limited Data Scenarios",
                    publishedDate: "2023-06",
                    journal: "IEEE Transactions on Machine Learning",
                    volume: 12,
                    issue: 3,
                    pages: "245-267",
                    doi: "10.1109/ITML.2023.3098765",
                    authors: [
                        {
                            name: "S M Masfequier Rahman Swapno",
                            position: "Lead Author",
                            role: "Senior Data Scientist at TechCore Solutions",
                        },
                        {
                            name: "Prof. Dr. Andrew Ng",
                            position: "Advisor",
                            affiliation: "Stanford University",
                        },
                    ],
                    citations: 45,
                    description: "Novel meta-learning techniques for transfer learning with limited training data",
                    keywords: ["Transfer Learning", "Meta-Learning", "Few-Shot Learning"],
                    projectBased: "Graph Neural Networks Research + Transfer Learning",
                    url: "https://ieeexplore.ieee.org/document/3098765",
                    impact: "Advances transfer learning methodology for practical scenarios",
                },
            ],
        },
        "2024": {
            year: 2024,
            count: 0,
            note: "Papers under review / in preparation",
        },
    },
    researchProgression: {
        phase1: {
            period: "2019-2020",
            status: "Pre-Research",
            focus: "Applied ML, gaining experience",
            description: "Building foundational skills, no publications yet",
        },
        phase2: {
            period: "2021",
            status: "Research Foundation",
            focus: "Real-world ML problems, theoretical understanding",
            description: "Laying groundwork for research contributions",
        },
        phase3: {
            period: "2022-2023",
            status: "Active Researcher",
            focus: "Publishing from practical implementations",
            description: "Transitioning to thought leader with 3 publications",
        },
        phase4: {
            period: "2024+",
            status: "Established Researcher",
            focus: "Deeper theoretical contributions",
            description: "Building on research foundation with more complex problems",
        },
    },
    researchImpact: {
        totalCitations: 127,
        averageCitationsPerPaper: 42.3,
        h_index: 3,
    },
} as const;

export default publicationHistory;
