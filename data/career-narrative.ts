/**
 * Career Narrative Data
 * Generated from career-narrative.json
 */

import type { CareerNarrative } from '../entities/types';

export const careerNarrative: CareerNarrative = {
    careerNarrative: {
        title: "5-Year Data Science Journey: From Practitioner to Research Leader",
        period: "2019-2024",
        summary:
            "Progressive career advancement from Junior Data Scientist to Senior Data Scientist and Research Contributor, with increasing responsibility, impact, and thought leadership. Built expertise across multiple ML domains while maintaining focus on delivering measurable business value.",
    },
    timeline: [
        {
            year: 2019,
            phase: "Foundation Building",
            title: "Junior Data Scientist",
            company: "InsightHub Inc.",
            focus: "Statistical Analysis & Analytics",
            keyAchievements: [
                "Reduced customer acquisition cost (CAC) by 15% through statistical analysis",
                "Built 5+ automated reporting dashboards",
                "Performed 20+ statistical analyses supporting product decisions",
            ],
            projectsCount: 3,
            publicationsCount: 0,
            skillsAdded: ["Python", "SQL", "Statistical Analysis", "Data Visualization", "A/B Testing"],
            highlights: "First data science role focusing on fundamental analytics skills",
        },
        {
            year: "2019-2021",
            phase: "Skill Expansion",
            title: "Data Scientist",
            company: "DataVision Analytics",
            focus: "Predictive Modeling & ML Solutions",
            keyAchievements: [
                "Built fraud detection model: 94.2% accuracy, $1.8M annual impact",
                "Deployed 8+ production ML models",
                "Analyzed 50M+ row datasets",
                "Published 1 peer-reviewed paper",
            ],
            projectsCount: 8,
            publicationsCount: 1,
            skillsAdded: ["Machine Learning", "XGBoost", "TensorFlow", "Cloud (GCP)", "Tableau"],
            highlights: "Transitioned from analytics to full ML development, published first research paper",
        },
        {
            year: "2021-2024",
            phase: "Leadership & Innovation",
            title: "Senior Data Scientist",
            company: "TechCore Solutions",
            focus: "Advanced ML & Strategic Initiatives",
            keyAchievements: [
                "Led team of 4 data scientists",
                "Improved customer retention by 23% ($2.3M revenue)",
                "Built data pipeline: 500M+ daily records",
                "Published 2 peer-reviewed papers",
                "Achieved Kaggle Master ranking",
                "Received Data Scientist of the Year award",
            ],
            projectsCount: 7,
            publicationsCount: 2,
            skillsAdded: ["Leadership", "MLOps", "Deep Learning", "Advanced Python", "Kubernetes"],
            highlights: "Strategic leadership role with focus on research and innovation",
        },
    ],
    careerProgression: {
        startDate: "2018-07",
        startRole: "Junior Data Scientist",
        currentRole: "Senior Data Scientist",
        yearsExperience: 5.5,
        rolesHeld: 3,
        companiesWorked: 3,
        promotions: 2,
        promotionTimeline: [
            {
                from: "Junior Data Scientist",
                to: "Data Scientist",
                date: "2019-06",
                company: "DataVision Analytics",
            },
            {
                from: "Data Scientist",
                to: "Senior Data Scientist",
                date: "2021-03",
                company: "TechCore Solutions",
            },
        ],
    },
} as const;

export default careerNarrative;
