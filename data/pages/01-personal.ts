/**
 * Personal Information Page Data
 * Generated from pages/01-personal.json
 */

import type { PersonalData } from '../../entities/types';

export const personalData: PersonalData = {
    personal: {
        firstName: "S M Masfequier Rahman",
        lastName: "Swapno",
        fullName: "S M Masfequier Rahman Swapno",
        title: "Senior Data Scientist",
        subtitle: "AI | ML | Deep Learning | NLP | Data Engineering",
        bio: "Results-driven Data Scientist with 5+ years of experience across AI, machine learning, deep learning, natural language processing, computer vision, and data engineering. Passionate about turning data into measurable business value.",
        professionalSummary:
            "Experienced Data Scientist with proven expertise in building end-to-end AI and machine learning solutions, statistical modeling, data visualization, and data engineering. Strong background in Python, SQL, TensorFlow, PyTorch, Scikit-learn, and modern LLM tooling. Successfully delivered 15+ data science projects resulting in 8+ figure cost savings and revenue growth for Fortune 500 companies.",
        profileImage: "/images/profile.jpg",
        coverImage: "/images/cover.jpg",
    },
    contact: {
        email: "S M Masfequier Rahman.Swapno@email.com",
        phone: "+1 (555) 123-4567",
        location: {
            city: "Dhaka",
            state: "Dhaka",
            country: "Bangladesh",
            zipCode: "1213",
            displayText: "Dhaka, Bangladesh",
        },
        website: "www.S M Masfequier Rahman-ds.com",
        timezone: "BST (UTC+6)",
    },
    social: {
        linkedin: {
            url: "https://linkedin.com/in/S M Masfequier Rahman-Swapno",
            display: "@S M Masfequier Rahman-Swapno",
            followers: 8500,
        },
        github: {
            url: "https://github.com/S M Masfequier Rahman-Swapno",
            display: "@S M Masfequier Rahman-Swapno",
            followers: 2400,
            stars: 450,
        },
        twitter: {
            url: "https://twitter.com/S M Masfequier Rahman_ds",
            display: "@S M Masfequier Rahman_ds",
            followers: 5200,
        },
        kaggle: {
            url: "https://kaggle.com/S M Masfequier Rahman-Swapno",
            display: "S M Masfequier Rahman-Swapno",
            rank: "Master",
            medals: 15,
        },
        medium: {
            url: "https://medium.com/@S M Masfequier Rahman-Swapno",
            display: "@S M Masfequier Rahman-Swapno",
            followers: 3100,
        },
    },
    availability: {
        status: "Open to Opportunities",
        availableFor: ["Full-time positions", "Consulting projects", "Speaking engagements", "Mentorship"],
        noticeRequired: "2 weeks",
        remote: true,
        relocation: false,
    },
} as const;

export default personalData;
