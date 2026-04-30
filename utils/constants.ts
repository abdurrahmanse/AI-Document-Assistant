/**
 * Global constants and configuration
 */

export const ANIMATION = {
    DURATION: {
        FAST: 150,
        NORMAL: 300,
        SLOW: 500,
    },
    EASING: {
        EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
        EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
        EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
}

export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
}

export const COLORS = {
    PRIMARY: '#3b82f6',
    SECONDARY: '#06b6d4',
    DARK: '#0f172a',
    LIGHT: '#f1f5f9',
    ACCENT: '#06b6d4',
}

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    EXPERIENCE: '/experience',
    PROJECTS: '/projects',
    SKILLS: '/skills',
    PUBLICATIONS: '/publications',
    CONTACT: '/contact',
}

export const SEO = {
    DEFAULT_OG_IMAGE: '/og-image.png',
    TWITTER_HANDLE: '@yourhandle',
}
