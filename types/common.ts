// ============= Site Configuration Types =============
export interface MenuItem {
    label: string;
    url: string;
}

export interface PageConfig {
    id: number;
    name: string;
    title: string;
    path: string;
    displayInNav: boolean;
    order: number;
}

export interface SiteConfig {
    siteConfig: {
        title: string;
        description: string;
        url: string;
        siteOwner: string;
        copyright: string;
    };
    pages: PageConfig[];
    navigation: {
        mainMenu: MenuItem[];
        footerLinks: Record<string, MenuItem[]>;
    };
    theme: {
        colors: Record<string, string>;
    };
}

// ============= Career Narrative Types =============
export interface TimelineEntry {
    year: number | string;
    phase: string;
    title: string;
    company: string;
    focus: string;
    keyAchievements: string[];
    projectsCount: number;
    publicationsCount: number;
    skillsAdded: string[];
    highlights: string;
}

export interface Promotion {
    from: string;
    to: string;
    date: string;
    company: string;
}

export interface CareerProgression {
    startDate: string;
    startRole: string;
    currentRole: string;
    yearsExperience: number;
    rolesHeld: number;
    companiesWorked: number;
    promotions: number;
    promotionTimeline: Promotion[];
}

export interface CareerNarrative {
    careerNarrative: {
        title: string;
        period: string;
        summary: string;
    };
    timeline: TimelineEntry[];
    careerProgression: CareerProgression;
}

// ============= Project Types =============
export interface ProjectMetrics {
    year: number;
    company: string;
    count: number;
    totalImpact: string;
    focus: string;
}

export interface ProjectHighlights {
    [key: string]: string | number;
}

export interface Project {
    id: string;
    title: string;
    company: string;
    date: string;
    duration: string;
    phase: string;
    type: string;
    technologies: string[];
    team: number;
    impact: string;
    description: string;
    achievements: string[];
}

export interface ProjectHistory {
    projectHistory: {
        title: string;
        totalProjects: number;
        totalImpact: string;
        deployedModels: number;
        projectsByYear: Record<number, ProjectMetrics>;
    };
    projectsTimeline: Array<{
        year: number;
        projects: Project[];
    }>;
}

// ============= Publication Types =============
export interface Author {
    name: string;
    position: string;
    role?: string;
    affiliation?: string;
}

export interface Publication {
    id: string;
    title: string;
    publishedDate: string;
    journal: string;
    volume: number;
    issue: number;
    pages: string;
    doi: string;
    authors: Author[];
    citations: number;
    description: string;
    keywords: string[];
    projectBased: string;
    url: string;
    impact: string;
}

export interface PublicationPhase {
    period: string;
    status: string;
    focus: string;
    description: string;
}

export interface PublicationHistory {
    publicationHistory: {
        title: string;
        totalPublications: number;
        totalCitations: number;
        researchStartDate: string;
        researchPhase: string;
    };
    publicationsByYear: Record<
        number,
        {
            year: number;
            count: number;
            note?: string;
            publications?: Publication[];
        }
    >;
    researchProgression: Record<string, PublicationPhase>;
    researchImpact: {
        totalCitations: number;
        averageCitationsPerPaper: number;
        h_index: number;
    };
}

// ============= Skill Evolution Types =============
export interface Skill {
    skill: string;
    level: string;
    context?: string;
}

export interface YearlySkillProgression {
    year: number;
    role: string;
    company: string;
    phase: string;
    newSkillsAcquired: Skill[];
    levelSummary: string;
    focusArea: string;
}

export interface SkillEvolution {
    skillEvolution: {
        title: string;
        period: string;
        summary: string;
    };
    yearlyProgression: YearlySkillProgression[];
}

// ============= Recognition Types =============
export interface Award {
    id: string;
    title: string;
    issuer: string;
    category: string;
    date: string;
    description: string;
    project?: string;
    significance: string;
    rank?: string;
    medals?: number;
    competitions?: number;
    competitors?: string;
}

export interface Recognition {
    type: string;
    title: string;
    description?: string;
    date: string;
    reason?: string;
    event?: string;
    topic?: string;
    journal?: string;
    citations?: number;
    organization?: string;
    role?: string;
    mentees?: number;
    focus?: string;
    audience?: number;
}

export interface SpeakingEngagement {
    event: string;
    topic: string;
    date: string;
    type?: string;
    audience?: number;
    institution?: string;
}

export interface RecognitionByYear {
    year: number;
    role: string;
    company: string;
    awards: Award[];
    recognition: Recognition[];
    speakingEngagements: number;
    speaking?: SpeakingEngagement[];
    publications: number;
    highlight: string;
    note?: string;
}

export interface RecognitionHistory {
    recognitionHistory: {
        title: string;
        period: string;
        summary: string;
    };
    recognitionByYear: RecognitionByYear[];
    recognitionSummary: {
        totalAwards: number;
        industryAwards: number;
        internalRecognitions: number;
        publications: number;
        totalCitations: number;
        speakingEngagements: number;
        totalAudience: number;
        recognitionProgression: string;
    };
}

// ============= Personal Information Types =============
export interface Location {
    city: string;
    state: string;
    country: string;
    zipCode?: string;
    displayText: string;
}

export interface SocialLink {
    url: string;
    display: string;
    followers?: number;
    stars?: number;
    rank?: string;
    medals?: number;
}

export interface Availability {
    status: string;
    availableFor: string[];
    noticeRequired: string;
    remote: boolean;
    relocation: boolean;
}

export interface PersonalData {
    personal: {
        firstName: string;
        lastName: string;
        fullName: string;
        title: string;
        subtitle: string;
        bio: string;
        professionalSummary: string;
        profileImage: string;
        coverImage: string;
    };
    contact: {
        email: string;
        phone: string;
        location: Location;
        website: string;
        timezone: string;
    };
    social: Record<string, SocialLink>;
    availability: Availability;
}

// ============= About Page Types =============
export interface Value {
    icon: string;
    title: string;
    description: string;
}

export interface Statistic {
    number: string;
    label: string;
}

export interface AboutPage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            ctaButton: {
                text: string;
                url: string;
            };
        };
        introduction: {
            heading: string;
            content: string;
            image: string;
        };
        mission: {
            heading: string;
            content: string;
        };
        values: Value[];
        highlight: {
            heading: string;
            items: string[];
        };
        statistics: {
            heading: string;
            stats: Statistic[];
        };
    };
}

// ============= Projects Page Types =============
export interface ProjectDetail {
    id: number;
    title: string;
    category: string;
    categoryId: string;
    description: string;
    shortDescription: string;
    featured: boolean;
    image: string;
    startDate: string;
    endDate: string;
    duration: string;
    teamSize: number;
    status: string;
    technologies: string[];
    highlights: Record<string, string | number>;
    features: string[];
    businessOutcomes: string[];
    technicalApproach: string;
    challenges: string[];
    solutions: string[];
    links: {
        github?: string;
        demo?: string;
        blog?: string;
    };
    testimonial: {
        text: string;
        author: string;
        title: string;
    };
}

export interface ProjectsPage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
        };
        filters: Array<{
            name: string;
            id: string;
        }>;
    };
    projects: ProjectDetail[];
}

// ============= Experience Page Types =============
export interface JobAchievement {
    metric: string;
    description: string;
}

export interface Job {
    id: number;
    title: string;
    company: {
        name: string;
        website: string;
        logo: string;
    };
    location: {
        city: string;
        state: string;
        remote?: boolean;
    };
    employmentType: string;
    startDate: string;
    endDate: string;
    duration: string;
    current: boolean;
    description: string;
    summary: string;
    responsibilities: string[];
    achievements: JobAchievement[];
    technologies: string[];
    highlights: string[];
}

export interface ExperiencePage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
        };
    };
    jobs: Job[];
}

// ============= Skills Page Types =============
export interface Expertise {
    name: string;
    proficiency: string;
    level: number;
    years?: number;
    description: string;
    expertise?: string[];
    libraries?: string[];
    databases?: string[];
    frameworks?: string[];
    techniques?: string[];
    useCases?: string[];
    models?: string[];
    category?: string;
    category_icon?: string;
}

export interface SkillCategory {
    id: string;
    categoryName: string;
    categoryIcon: string;
    description: string;
    skills: Expertise[];
}

export interface SkillsPage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
        };
    };
    skillCategories: SkillCategory[];
}

// ============= Education Page Types =============
export interface Course {
    course: string;
    credits: number;
}

export interface Thesis {
    title: string;
    advisor: string;
    summary: string;
}

export interface Education {
    id: number;
    degree: string;
    field: string;
    institution: {
        name: string;
        location: string;
        website: string;
    };
    graduationDate: string;
    gpa: string;
    honors: string;
    duration: string;
    description: string;
    highlights: string[];
    relevantCoursework: Course[];
    thesis?: Thesis;
    projects?: string[];
}

export interface EducationPage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
        };
    };
    education: Education[];
}

// ============= Publications Page Types =============
export interface PublicationDetail {
    id: string;
    title: string;
    authors: Author[];
    publishedDate: string;
    journal: string | { name: string; issn: string };
    volume: number;
    issue: number;
    pages: string;
    doi: string;
    citations: number;
    description: string;
    keywords: string[];
    url: string;
    impact: string;
}

export interface PublicationsPage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
        };
    };
    publications: PublicationDetail[];
}

// ============= Blog Types =============
export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    description?: string;
    publishedDate: string;
    updatedDate?: string;
    author: string;
    readTime: string;
    featured?: boolean;
    tags: string[];
    cover: string;
    summary?: string;
    sections?: string[];
}

export interface BlogPage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
        };
        categories: Array<{
            id: string;
            name: string;
            count: number;
        }>;
    };
    posts: BlogPost[];
}

// ============= Contact Page Types =============
export interface ContactInfo {
    address?: string;
    label: string;
    responseTime?: string;
    availability?: string;
    number?: string;
    remote?: boolean;
    city?: string;
    state?: string;
    country?: string;
}

export interface FormField {
    name: string;
    label: string;
    type: string;
    required: boolean;
    options?: string[];
    placeholder?: string;
}

export interface ContactForm {
    enabled: boolean;
    fields: FormField[];
    submitButton: string;
    successMessage: string;
    errorMessage: string;
}

export interface AvailabilityItem {
    type: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface AdditionalPage {
    title: string;
    url: string;
    description: string;
}

export interface ContactPage {
    page: {
        id: string;
        title: string;
        description: string;
        metaDescription: string;
    };
    sections: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
        };
        cta: {
            heading: string;
            description: string;
        };
    };
    contactInfo: Record<string, ContactInfo>;
    socialLinks: Array<{
        platform: string;
        url: string;
        icon: string;
        label: string;
    }>;
    contactForm: ContactForm;
    availability: {
        status: string;
        availableFor: AvailabilityItem[];
        noticeRequired: string;
    };
    faq: FAQ[];
    additionalPages: AdditionalPage[];
}
