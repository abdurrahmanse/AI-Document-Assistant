/**
 * Utility for merging Tailwind CSS class names
 */
export function cn(...classes: Array<string | number | boolean | null | undefined>): string {
    return classes
        .flatMap((cls) => (typeof cls === 'string' ? cls.split(' ') : []))
        .filter(Boolean)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()
}

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  SKILLS: '/skills',
  PUBLICATIONS: '/publications',
  RESEARCH: '/research',
  CONTACT: '/contact',
}
