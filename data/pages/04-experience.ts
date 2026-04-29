/**
 * Experience Page Data
 * Generated from pages/04-experience.json
 */

import type { ExperiencePage } from '../../entities/types';

export const experiencePage: ExperiencePage = {
    page: {
        id: "experience",
        title: "Experience",
        description: "Professional experience and career progression",
        metaDescription: "5+ years of data science experience at leading tech companies",
    },
    sections: {
        hero: {
            title: "Professional Experience",
            subtitle: "5+ years building data science solutions at leading companies",
            description:
                "My career has progressed from Junior Data Scientist to Senior Data Scientist, leading teams and delivering high-impact ML projects at Fortune 500 companies.",
        },
    },
    jobs: [
        {
            id: 1,
            title: "Senior Data Scientist",
            company: {
                name: "TechCore Solutions",
                website: "https://techcore-solutions.com",
                logo: "/images/companies/techcore.png",
            },
            location: {
                city: "San Francisco",
                state: "California",
                remote: true,
            },
            employmentType: "Full-time",
            startDate: "2021-03",
            endDate: "Present",
            duration: "3+ years",
            current: true,
            description: "Lead data science initiatives for enterprise clients; develop and deploy production-grade ML models at scale.",
            summary:
                "Led end-to-end machine learning projects from conception through production deployment, managing cross-functional teams and delivering measurable business impact.",
            responsibilities: [
                "Designed and implemented advanced machine learning models that improved customer retention by 23%",
                "Architected and built data pipeline processing 500M+ records daily using PySpark and AWS",
                "Led cross-functional team of 4 data scientists in developing and deploying production ML systems",
                "Mentored junior data scientists and conducted code reviews for quality assurance",
                "Implemented MLOps best practices reducing model deployment time by 60%",
                "Established monitoring and alerting for model drift and performance degradation",
            ],
            achievements: [
                {
                    metric: "$2.3M",
                    description: "Generated through churn prediction model",
                },
                {
                    metric: "23%",
                    description: "Improvement in customer retention",
                },
                {
                    metric: "500M+",
                    description: "Daily records processed in data pipeline",
                },
                {
                    metric: "60%",
                    description: "Reduction in model deployment time",
                },
                {
                    metric: "4",
                    description: "Data scientists mentored and led",
                },
            ],
            technologies: [
                "Python",
                "TensorFlow",
                "PySpark",
                "AWS SageMaker",
                "PostgreSQL",
                "Docker",
                "Kubernetes",
                "Tableau",
            ],
            highlights: [
                "Led implementation of ML governance framework",
                "Established data science best practices and standards",
                "Delivered presentations at internal tech talks",
                "Recognized for exceptional leadership and impact",
            ],
        },
        {
            id: 2,
            title: "Data Scientist",
            company: {
                name: "DataVision Analytics",
                website: "https://datavision-analytics.com",
                logo: "/images/companies/datavision.png",
            },
            location: {
                city: "New York",
                state: "New York",
                remote: false,
            },
            employmentType: "Full-time",
            startDate: "2019-06",
            endDate: "2021-02",
            duration: "1.8 years",
            current: false,
            description: "Developed machine learning models and analytics solutions for Fortune 500 companies.",
            summary: "Built diverse ML solutions for enterprise clients across various industries, from fraud detection to customer analytics.",
            responsibilities: [
                "Built classification models for fraud detection achieving 94.2% accuracy on financial transaction data",
                "Conducted exploratory data analysis on large-scale datasets with 50M+ rows",
                "Created automated reporting dashboards using Tableau and Plotly for C-suite executives",
                "Collaborated with product and engineering teams to deploy models in production environments",
                "Performed statistical analysis and A/B testing for product features",
                "Documented model development processes and findings for stakeholder communication",
            ],
            achievements: [
                {
                    metric: "$1.8M",
                    description: "Reduced fraud losses annually",
                },
                {
                    metric: "94.2%",
                    description: "Fraud detection model accuracy",
                },
                {
                    metric: "40%",
                    description: "Improved model inference speed",
                },
                {
                    metric: "2x",
                    description: "Employee of the Quarter awards",
                },
            ],
            technologies: ["Python", "XGBoost", "SQL", "Tableau", "Google Cloud", "MongoDB", "Scikit-learn"],
            highlights: [
                "Developed fraud detection system saving $1.8M annually",
                "Created data pipelines for automated reporting",
                "Recognized as Employee of the Quarter twice",
                "Successfully deployed 8+ models to production",
            ],
        },
        {
            id: 3,
            title: "Junior Data Scientist",
            company: {
                name: "InsightHub Inc.",
                website: "https://insighthub.com",
                logo: "/images/companies/insighthub.png",
            },
            location: {
                city: "Boston",
                state: "Massachusetts",
                remote: false,
            },
            employmentType: "Full-time",
            startDate: "2018-07",
            endDate: "2019-05",
            duration: "0.8 years",
            current: false,
            description: "Developed statistical models and performed data analysis for business intelligence.",
            summary: "Started data science career with focus on statistical analysis and exploratory data analysis for business intelligence.",
            responsibilities: [
                "Performed statistical analysis and A/B testing for product features and experiments",
                "Created data visualizations and dashboards to communicate insights to business stakeholders",
                "Cleaned, preprocessed, and validated large datasets for analysis",
                "Conducted user behavior analysis and cohort analysis",
                "Assisted senior data scientists with model development and deployment",
            ],
            achievements: [
                {
                    metric: "15%",
                    description: "Reduction in customer acquisition cost",
                },
                {
                    metric: "20+",
                    description: "Statistical analyses completed",
                },
                {
                    metric: "5",
                    description: "Dashboards created for stakeholders",
                },
            ],
            technologies: ["Python", "R", "SQL", "Matplotlib", "Pandas", "Excel"],
            highlights: [
                "Identified key factors driving customer acquisition",
                "Learned foundational data science skills",
                "Built strong analytical foundation",
            ],
        },
    ],
} as const;

export default experiencePage;
