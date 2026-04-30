/**
 * Publications Page Data
 * Generated from pages/07-publications.json
 */

import type { PublicationsPage } from '../../entities/types';

export const publicationsPage: PublicationsPage = {
    page: {
        id: "publications",
        title: "Publications & Research Recognition",
        description: "Research papers, presentations, and awards",
        metaDescription: "3 peer-reviewed publications with 127+ citations and growing research recognition",
    },
    sections: {
        hero: {
            title: "Publications & Research Recognition",
            subtitle: "Papers, presentations, and the ideas behind them",
            description:
                "My publication trail follows the same pattern as my projects: ask a question, test a hypothesis, write clearly, and measure what changed.",
        },
    },
    publications: [
        {
            id: "pub-1",
            title: "Efficient Transfer Learning Approaches for Limited Data Scenarios",
            authors: [
                {
                    name: "S M Masfequier Rahman Swapno",
                    position: "Lead Author",
                },
                {
                    name: "Prof. Dr. Andrew Ng",
                    position: "Advisor",
                    affiliation: "Stanford University",
                },
            ],
            publishedDate: "2023-06",
            journal: {
                name: "IEEE Transactions on Machine Learning",
                issn: "2379-8793",
            },
            volume: 12,
            issue: 3,
            pages: "245-267",
            doi: "10.1109/ITML.2023.3098765",
            url: "https://ieeexplore.ieee.org/document/3098765",
            citations: 45,
            description: "Novel approach combining meta-learning and fine-tuning for improved transfer learning with limited data.",
            keywords: ["Transfer Learning", "Meta-Learning", "Few-Shot Learning", "Deep Learning"],
            impact: "High impact research with 45+ citations advancing transfer learning methodologies",
        },
        {
            id: "pub-2",
            title: "Real-time Fraud Detection in High-Velocity Transaction Streams",
            authors: [
                {
                    name: "S M Masfequier Rahman Swapno",
                    position: "Lead Author",
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
            publishedDate: "2022-11",
            journal: {
                name: "ACM Transactions on Data Science",
                issn: "2476-1249",
            },
            volume: 8,
            issue: 4,
            pages: "1-25",
            doi: "10.1145/ACTDS.2022.9876543",
            url: "https://dl.acm.org/doi/abs/10.1145/ACTDS.2022.9876543",
            citations: 52,
            description:
                "Ensemble methods and feature engineering techniques for detecting fraud at 10K transactions per second.",
            keywords: ["Fraud Detection", "Ensemble Learning", "Real-time Processing", "Financial Security"],
            impact: "Highly cited work with 52+ citations influencing fraud detection industry practices",
        },
        {
            id: "pub-3",
            title: "Interpretable Machine Learning Models for Business Decision-Making",
            authors: [
                {
                    name: "S M Masfequier Rahman Swapno",
                    position: "Solo Author",
                },
            ],
            publishedDate: "2022-05",
            journal: {
                name: "Journal of Business Analytics",
                issn: "2329-6283",
            },
            volume: 5,
            issue: 2,
            pages: "112-135",
            doi: "10.1016/JBA.2022.112",
            url: "https://sciencedirect.com/science/article/pii/JBA2022112",
            citations: 30,
            description: "SHAP values and LIME techniques for explaining black-box ML models to business stakeholders.",
            keywords: ["Model Interpretability", "SHAP", "LIME", "Explainable AI", "Business Analytics"],
            impact: "Important contribution to interpretable AI with 30+ citations supporting explainability research",
        },
    ],
} as const;

export default publicationsPage;
