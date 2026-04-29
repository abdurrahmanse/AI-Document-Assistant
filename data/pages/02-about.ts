/**
 * About Page Data
 * Generated from pages/02-about.json
 */

import type { AboutPage } from '../../entities/types';

export const aboutPage: AboutPage = {
    page: {
        id: "about",
        title: "About Me",
        description: "Learn about S M Masfequier Rahman Swapno - Senior Data Scientist",
        metaDescription: "Senior Data Scientist with 5+ years of experience in machine learning, AI, and data engineering",
    },
    sections: {
        hero: {
            title: "S M Masfequier Rahman Swapno",
            subtitle: "Senior Data Scientist | ML Engineer | Data Enthusiast",
            ctaButton: {
                text: "Get In Touch",
                url: "/contact",
            },
        },
        introduction: {
            heading: "About Me",
            content:
                "I'm a Senior Data Scientist with 5+ years of experience building machine learning solutions that drive real business impact. My journey started with a passion for understanding data and has evolved into a career solving complex problems using statistical analysis, machine learning, and data engineering.\n\nI believe that the best solutions come from understanding both the data AND the business. That's why I focus on creating interpretable, scalable, and production-ready ML systems that stakeholders can trust and act upon.",
            image: "/images/about-hero.jpg",
        },
        mission: {
            heading: "My Mission",
            content:
                "To bridge the gap between cutting-edge machine learning research and practical business applications, creating data-driven solutions that generate measurable value and drive strategic decision-making.",
        },
        values: [
            {
                icon: "target",
                title: "Impact-Driven",
                description:
                    "Every project is measured by business value, not just technical metrics. I focus on delivering solutions that move the needle.",
            },
            {
                icon: "code",
                title: "Quality Code",
                description:
                    "Production-ready code with best practices, testing, documentation, and maintainability are non-negotiable.",
            },
            {
                icon: "users",
                title: "Collaboration",
                description:
                    "Great solutions come from collaboration. I communicate clearly with both technical and non-technical stakeholders.",
            },
            {
                icon: "book",
                title: "Continuous Learning",
                description:
                    "The ML field evolves rapidly. I stay current with latest research, tools, and best practices through continuous education.",
            },
        ],
        highlight: {
            heading: "Key Highlights",
            items: [
                "5+ years of hands-on data science experience",
                "15+ production ML models deployed and maintaining 99.9%+ uptime",
                "Generated $4.1M+ in quantifiable business value",
                "Led cross-functional teams of 3-5 data scientists",
                "Published 3 peer-reviewed research papers with 127+ citations",
                "AWS ML Specialist and Google Cloud Professional certified",
                "Kaggle Master ranking (top 0.1%)",
                "Keynote speaker at major ML conferences",
            ],
        },
        statistics: {
            heading: "By The Numbers",
            stats: [
                {
                    number: "5+",
                    label: "Years Experience",
                },
                {
                    number: "15+",
                    label: "Projects Delivered",
                },
                {
                    number: "23+",
                    label: "Models in Production",
                },
                {
                    number: "$4.1M",
                    label: "Business Impact",
                },
                {
                    number: "3",
                    label: "Publications",
                },
                {
                    number: "8",
                    label: "Companies",
                },
            ],
        },
    },
} as const;

export default aboutPage;
