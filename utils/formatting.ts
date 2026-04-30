/**
 * Formatting utilities for professional display
 */

export function formatDate(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function formatYear(year: number | string): string {
    return year.toString()
}

export function formatCurrency(amount: string): string {
    return amount.startsWith('$') ? amount : `$${amount}`
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
}

export function truncate(text: string, length: number = 150): string {
    if (text.length <= length) return text
    return text.slice(0, length) + '...'
}

export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatLabel(text: string): string {
    return text
        .split('_')
        .map((word) => capitalize(word))
        .join(' ')
}
