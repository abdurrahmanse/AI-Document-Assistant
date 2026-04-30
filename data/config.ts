/**
 * Site Configuration Data
 * Generated from config.json
 */

import type { SiteConfig } from '../entities/types';

export const siteConfig: SiteConfig = {
    siteConfig: {
        title: "S M Masfequier Rahman Swapno - Data Scientist",
        description: "Senior Data Scientist Portfolio - AI, machine learning, deep learning, NLP, computer vision, and data engineering",
        url: "www.S M Masfequier Rahman-ds.com",
        siteOwner: "S M Masfequier Rahman Swapno",
        copyright: "© 2024 S M Masfequier Rahman Swapno. All rights reserved.",
    },
    pages: [
        {
            id: 1,
            name: "home",
            title: "Home",
            path: "/",
            displayInNav: true,
            order: 1,
        },
        {
            id: 2,
            name: "about",
            title: "About",
            path: "/about",
            displayInNav: true,
            order: 2,
        },
        {
            id: 3,
            name: "publications",
            title: "Publications",
            path: "/publications",
            displayInNav: true,
            order: 6,
        },

        {
            id: 4,
            name: "experience",
            title: "Experience",
            path: "/experience",
            displayInNav: true,
            order: 4,
        },
        {
            id: 5,
            name: "skills",
            title: "Skills",
            path: "/skills",
            displayInNav: true,
            order: 5,
        },
        {
            id: 6,
            name: "projects",
            title: "Projects",
            path: "/projects",
            displayInNav: true,
            order: 3,
        },
        {
            id: 7,
            name: "contact",
            title: "Contact",
            path: "/contact",
            displayInNav: true,
            order: 7,
        },
    ],
    navigation: {
        mainMenu: [
            { label: "Home", url: "/" },
            { label: "About", url: "/about" },
            { label: "Publications", url: "/publications" },
            { label: "Projects", url: "/projects" },
            { label: "Experience", url: "/experience" },
            { label: "Skills", url: "/skills" },

            { label: "Contact", url: "/contact" },
        ],
        footerLinks: {
            Company: [
                { label: "Home", url: "/" },
                { label: "About", url: "/about" },
                { label: "Projects", url: "/projects" },
            ],
            Resources: [
                { label: "Publications", url: "/publications" },
                { label: "Speaking", url: "/speaking" },
            ],
            Social: [
                { label: "GitHub", url: "https://github.com/S M Masfequier Rahman-Swapno" },
                { label: "LinkedIn", url: "https://linkedin.com/in/S M Masfequier Rahman-Swapno" },
                { label: "Twitter", url: "https://twitter.com/S M Masfequier Rahman_ds" },
            ],
        },
    },
    theme: {
        colors: {
            primary: "#667eea",
            secondary: "#764ba2",
            accent: "#f093fb",
            dark: "#2d3748",
            light: "#f7fafc",
            gray: "#718096",
            success: "#48bb78",
            warning: "#ed8936",
            error: "#f56565",
        },
    },
} as const;

export default siteConfig;
