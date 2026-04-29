/**
 * Contact Page Data
 * Generated from pages/09-contact.json
 */

import type { ContactPage } from '../../entities/types';

export const contactPage: ContactPage = {
    page: {
        id: "contact",
        title: "Contact",
        description: "Get in touch",
        metaDescription: "Contact S M Masfequier Rahman Swapno - Senior Data Scientist",
    },
    sections: {
        hero: {
            title: "Let's Connect",
            subtitle: "Open to discussing opportunities, collaborations, and projects",
            description:
                "I'm always interested in hearing about interesting projects, collaboration opportunities, and connecting with fellow data enthusiasts.",
        },
        cta: {
            heading: "Get In Touch",
            description: "Feel free to reach out through any of the channels below. I typically respond within 24-48 hours.",
        },
    },
    contactInfo: {
        email: {
            address: "S M Masfequier Rahman.Swapno@email.com",
            label: "Email",
            responseTime: "24-48 hours",
        },
        phone: {
            number: "+1 (555) 123-4567",
            label: "Phone",
            availability: "By appointment",
        },
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA",
            label: "Location",
            remote: true,
        },
    },
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/S M Masfequier Rahman-Swapno",
            icon: "linkedin",
            label: "Connect on LinkedIn",
        },
        {
            platform: "GitHub",
            url: "https://github.com/S M Masfequier Rahman-Swapno",
            icon: "github",
            label: "Follow on GitHub",
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/S M Masfequier Rahman_ds",
            icon: "twitter",
            label: "Follow on Twitter",
        },
        {
            platform: "Medium",
            url: "https://medium.com/@S M Masfequier Rahman-Swapno",
            icon: "medium",
            label: "Read on Medium",
        },
    ],
    contactForm: {
        enabled: true,
        fields: [
            {
                name: "name",
                label: "Name",
                type: "text",
                required: true,
            },
            {
                name: "email",
                label: "Email",
                type: "email",
                required: true,
            },
            {
                name: "subject",
                label: "Subject",
                type: "text",
                required: true,
                options: ["Job Inquiry", "Collaboration Proposal", "Speaking Engagement", "Consulting", "Other"],
            },
            {
                name: "message",
                label: "Message",
                type: "textarea",
                required: true,
                placeholder: "Tell me about your inquiry...",
            },
        ],
        submitButton: "Send Message",
        successMessage: "Thank you for your message! I'll get back to you soon.",
        errorMessage: "There was an error sending your message. Please try again.",
    },
    availability: {
        status: "Open to Opportunities",
        availableFor: [
            {
                type: "Full-time Position",
                description: "Senior Data Scientist or leadership role",
            },
            {
                type: "Consulting Project",
                description: "Short-term ML/DS consulting",
            },
            {
                type: "Speaking Engagement",
                description: "Conferences, workshops, webinars",
            },
            {
                type: "Mentorship",
                description: "Guidance for junior data scientists",
            },
        ],
        noticeRequired: "2 weeks",
    },
    faq: [
        {
            question: "What type of projects are you interested in?",
            answer:
                "I'm interested in projects involving ML/AI, data engineering, and data science. I particularly enjoy working on problems with measurable business impact.",
        },
        {
            question: "Do you do freelance consulting?",
            answer: "Yes, I take on select consulting projects. Please reach out with details about your project.",
        },
        {
            question: "Can you speak at our event?",
            answer:
                "I'd be happy to discuss speaking opportunities. Send me details about your event and I'll let you know if I can participate.",
        },
        {
            question: "What's your typical response time?",
            answer: "I aim to respond to all inquiries within 24-48 hours. For urgent matters, you can also reach me by phone.",
        },
        {
            question: "Are you open to relocation?",
            answer: "I currently prefer remote roles but am open to discussing opportunities in San Francisco Bay Area.",
        },
    ],
    additionalPages: [
        {
            title: "Testimonials",
            url: "/testimonials",
            description: "What clients and colleagues say",
        },
        {
            title: "Speaking",
            url: "/speaking",
            description: "Conference talks and presentations",
        },
        {
            title: "Resources",
            url: "/resources",
            description: "Tools, templates, and guides",
        },
    ],
} as const;

export default contactPage;
