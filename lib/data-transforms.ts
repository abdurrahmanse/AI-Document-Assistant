/**
 * Data transformation and filtering utilities
 */

export function filterByYear<T extends { year?: number | string; date?: string }>(
    items: T[],
    year: number,
): T[] {
    return items.filter((item) => {
        const itemYear = item.year || (item.date ? new Date(item.date).getFullYear() : null)
        return itemYear === year
    })
}

export function sortByDate<T extends { date: string }>(items: T[], order: 'asc' | 'desc' = 'desc'): T[] {
    return [...items].sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return order === 'asc' ? dateA - dateB : dateB - dateA
    })
}

export function groupByYear<T extends { year?: number | string; date?: string }>(
    items: T[],
): Record<number | string, T[]> {
    return items.reduce(
        (acc, item) => {
            const year = item.year || (item.date ? new Date(item.date).getFullYear() : 'unknown')
            if (!acc[year]) acc[year] = []
            acc[year].push(item)
            return acc
        },
        {} as Record<number | string, T[]>,
    )
}

export function getUniqueValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return [...new Set(items.map((item) => item[key]))]
}

export function findLatest<T extends { date: string }>(items: T[]): T | null {
    if (!items.length) return null
    return items.reduce((latest, current) => {
        return new Date(current.date) > new Date(latest.date) ? current : latest
    })
}

export function findOldest<T extends { date: string }>(items: T[]): T | null {
    if (!items.length) return null
    return items.reduce((oldest, current) => {
        return new Date(current.date) < new Date(oldest.date) ? current : oldest
    })
}
