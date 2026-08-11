/**
 * About Page Data
 * Generated from pages/02-about.json
 */

import type { AboutPage } from '@/types/common';

export const aboutPage: AboutPage = {
    page: {
        id: "about",
        title: "My Research Story",
        description: "A research-first journey through AI, experiments, and production systems",
        metaDescription: "Research-first data scientist with 5+ years of experience turning hypotheses into models, papers, and production systems",
    },
    sections: {
        hero: {
            title: "S M Masfequier Rahman Swapno",
            subtitle: "Research-First Data Scientist | Applied AI Researcher | Experiment Designer",
            ctaButton: {
                text: "Start a Research Conversation",
                url: "/contact",
            },
        },
        introduction: {
            heading: "My Research Story",
            content:
                "I did not start in data science by chasing a title. I started by chasing questions. Why did one pattern appear here and not there? Which feature truly mattered? What would the model say if I changed the assumptions? That curiosity turned into a research habit, and that habit became my career.\n\nToday I work like a researcher inside a product environment. I read, test, compare, and document. I build baselines before I build sophistication. I prefer experiments to opinions, and reproducibility to intuition alone. The result is a portfolio of models, papers, and systems that are grounded in evidence and built to last.",
            image: "/images/about-hero.jpg",
        },
        mission: {
            heading: "My Research Mission",
            content:
                "To turn research questions into dependable systems by moving from literature review to experimentation, from experimentation to deployment, and from deployment back to measurement. I want every model I touch to explain something, improve something, or reveal the next better question.",
        },
        values: [
            {
                icon: "target",
                title: "Question First",
                description:
                    "Every project begins with a research question, a hypothesis, and a clear way to test whether the answer actually matters.",
            },
            {
                icon: "code",
                title: "Reproducible Work",
                description:
                    "Experiments, code, and notebooks should be easy to revisit, rerun, and explain months later without losing the thread.",
            },
            {
                icon: "users",
                title: "Research Collaboration",
                description:
                    "The best research becomes stronger when it is discussed, challenged, and refined with people who bring different perspectives.",
            },
            {
                icon: "book",
                title: "Constant Reading",
                description:
                    "I keep reading because the field evolves quickly and every new paper can change how I frame the next experiment.",
            },
        ],
        highlight: {
            heading: "Research Milestones",
            items: [
                "5+ years of hands-on research in AI and data science",
                "15+ production models tested, deployed, and monitored",
                "Generated $4.1M+ in measured impact from research-led work",
                "Led cross-functional teams of 3-5 data scientists and engineers",
                "Published 3 peer-reviewed papers with 127+ citations",
                "AWS ML Specialist and Google Cloud Professional certified",
                "Kaggle Master ranking (top 0.1%)",
                "Keynote speaker sharing research and production lessons",
            ],
        },
        statistics: {
            heading: "Research By The Numbers",
            stats: [
                {
                    number: "5+",
                    label: "Years Researching",
                },
                {
                    number: "15+",
                    label: "Research Projects",
                },
                {
                    number: "23+",
                    label: "Models in Production",
                },
                {
                    number: "$4.1M",
                    label: "Measured Impact",
                },
                {
                    number: "3",
                    label: "Peer-Reviewed Papers",
                },
                {
                    number: "8",
                    label: "Research Environments",
                },
            ],
        },
    },
} as const;

export default aboutPage;
