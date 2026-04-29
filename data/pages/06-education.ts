/**
 * Education Page Data
 * Generated from pages/06-education.json
 */

import type { EducationPage } from '../../entities/types';

export const educationPage: EducationPage = {
    page: {
        id: "education",
        title: "Education & Certifications",
        description: "Academic background and professional certifications",
        metaDescription: "Education from Stanford and UC Berkeley, AWS and Google Cloud certified",
    },
    sections: {
        hero: {
            title: "Education & Professional Development",
            subtitle: "Strong academic foundation with continuous professional learning",
            description:
                "Graduated from top-tier universities with distinction and maintain current expertise through professional certifications and continuous learning.",
        },
    },
    education: [
        {
            id: 1,
            degree: "Master of Science in Data Science",
            field: "Data Science & Machine Learning",
            institution: {
                name: "Stanford University",
                location: "Stanford, CA",
                website: "https://www.stanford.edu",
            },
            graduationDate: "2018-05",
            gpa: "3.9/4.0",
            honors: "With Distinction",
            duration: "2 years",
            description: "Advanced degree focused on machine learning, statistics, and data engineering",
            highlights: ["Graduated with distinction", "3.9 GPA", "Thesis on Transfer Learning"],
            relevantCoursework: [
                { course: "Advanced Machine Learning", credits: 4 },
                { course: "Statistical Learning", credits: 4 },
                { course: "Deep Learning", credits: 4 },
                { course: "Natural Language Processing", credits: 4 },
                { course: "Computer Vision", credits: 4 },
                { course: "Reinforcement Learning", credits: 3 },
                { course: "Data Mining", credits: 3 },
                { course: "Probability Theory", credits: 3 },
            ],
            thesis: {
                title: "Efficient Transfer Learning for Limited Data Scenarios",
                advisor: "Prof. Andrew Ng",
                summary:
                    "Developed novel approaches combining meta-learning and fine-tuning for improved transfer learning with limited training data",
            },
            projects: [
                "End-to-end ML system for real-world datasets",
                "Research implementation of cutting-edge algorithms",
                "Published research findings",
            ],
        },
        {
            id: 2,
            degree: "Bachelor of Science in Statistics",
            field: "Statistics & Mathematics",
            institution: {
                name: "University of California, Berkeley",
                location: "Berkeley, CA",
                website: "https://www.berkeley.edu",
            },
            graduationDate: "2016-05",
            gpa: "3.8/4.0",
            honors: "Summa Cum Laude",
            duration: "4 years",
            description: "Comprehensive foundation in statistics, mathematics, and computer science",
            highlights: ["Summa Cum Laude (top 5% of class)", "3.8 GPA", "Math and Statistics excellence"],
            relevantCoursework: [
                { course: "Probability Theory", credits: 4 },
                { course: "Mathematical Statistics", credits: 4 },
                { course: "Statistical Inference", credits: 4 },
                { course: "Linear Algebra", credits: 4 },
                { course: "Multivariable Calculus", credits: 4 },
                { course: "Algorithms", credits: 4 },
                { course: "Database Systems", credits: 3 },
                { course: "Data Structures", credits: 3 },
            ],
        },
    ],
} as const;

export default educationPage;
