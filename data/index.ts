/**
 * Main Export File for Portfolio Data
 * Re-exports all data files for convenient importing
 */

// Core Data Exports
export { careerNarrative } from './career-narrative';
export { siteConfig } from './config';
export { projectHistory } from './project-history';
export { publicationHistory } from './publication-history';
export { recognitionHistory } from './recognition-history';
export { skillEvolution } from './skill-evolution';

// Page Data Exports
export { personalData } from './pages/01-personal';
export { aboutPage } from './pages/02-about';
export { projectsPage } from './pages/03-projects';
export { experiencePage } from './pages/04-experience';
export { skillsPage } from './pages/05-skills';
export { educationPage } from './pages/06-education';
export { publicationsPage } from './pages/07-publications';
export { blogPage } from './pages/08-blog';
export { contactPage } from './pages/09-contact';

// Types Export
export * from '@/types/common';

// Convenience export for all data as an object
import { careerNarrative } from './career-narrative';
import { siteConfig } from './config';
import { personalData } from './pages/01-personal';
import { aboutPage } from './pages/02-about';
import { projectsPage } from './pages/03-projects';
import { experiencePage } from './pages/04-experience';
import { skillsPage } from './pages/05-skills';
import { educationPage } from './pages/06-education';
import { publicationsPage } from './pages/07-publications';
import { blogPage } from './pages/08-blog';
import { contactPage } from './pages/09-contact';
import { projectHistory } from './project-history';
import { publicationHistory } from './publication-history';
import { recognitionHistory } from './recognition-history';
import { skillEvolution } from './skill-evolution';

export const portfolioData = {
  // Core data
  config: siteConfig,
  careerNarrative,
  projectHistory,
  publicationHistory,
  skillEvolution,
  recognitionHistory,

  // Page data
  pages: {
    personal: personalData,
    about: aboutPage,
    projects: projectsPage,
    experience: experiencePage,
    skills: skillsPage,
    education: educationPage,
    publications: publicationsPage,
    blog: blogPage,
    contact: contactPage,
  },
} as const;

export default portfolioData;
