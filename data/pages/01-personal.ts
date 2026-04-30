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
        title: "Research-First Data Scientist",
        subtitle: "Research | Experiment Design | ML Systems | NLP | Data Engineering",
        bio: "I am a research-first data scientist who starts with a question, builds a hypothesis, and follows the evidence until it becomes a useful system. My work spans AI, machine learning, deep learning, natural language processing, computer vision, and data engineering, but the constant thread is research: reading, testing, measuring, and refining until the results are clear.",
        professionalSummary:
            "Research-driven data scientist with 5+ years of experience designing experiments, comparing models, and translating research findings into production systems. Strong background in Python, SQL, TensorFlow, PyTorch, Scikit-learn, and modern LLM tooling. Delivered 15+ research-backed initiatives that produced measurable business value, peer-reviewed publications, and long-lived production systems.",
        profileImage: "/images/profile.jpg",
        coverImage: "/images/cover.jpg",
    },
    contact: {
        email: "masfequier.cse.bubt@gmail.com",
        phone: "+8801569188285",
        location: {
            city: "Dhaka",
            state: "Dhaka",
            country: "Bangladesh",
            zipCode: "1213",
            displayText: "Rpnagar Residential Area, Mirpur, Dhaka",
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
        status: "Open to Research Collaborations",
        availableFor: ["Research partnerships", "Applied AI projects", "Speaking engagements", "Mentorship"],
        noticeRequired: "2 weeks",
        remote: true,
        relocation: false,
    },
} as const;

export default personalData;
