/**
 * Animation and transition utilities
 */

export const ANIMATIONS = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scaleIn: 'animate-scale-in',
    pulse: 'animate-pulse',
}

export function getAnimationDelay(index: number, baseDelay: number = 50): string {
    return `${index * baseDelay}ms`
}

export function getTransitionClass(duration: 'fast' | 'normal' | 'slow' = 'normal'): string {
    const durations = {
        fast: 'duration-150',
        normal: 'duration-300',
        slow: 'duration-500',
    }
    return `transition-all ease-out ${durations[duration]}`
}

export function createKeyframes(name: string, keyframes: Record<string, string>): string {
    const rules = Object.entries(keyframes)
        .map(([key, value]) => `${key} { ${value} }`)
        .join('\n')
    return `@keyframes ${name} { ${rules} }`
}
