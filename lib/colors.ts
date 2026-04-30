/**
 * Color and theme utilities
 */

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null
}

export function rgbToHex(r: number, g: number, b: number): string {
    return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export function getContrastColor(bgColor: string): 'white' | 'black' {
    const rgb = hexToRgb(bgColor)
    if (!rgb) return 'black'

    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
    return luminance > 0.5 ? 'black' : 'white'
}

export function getColorByCategory(
    category: string,
): { bg: string; text: string; border: string } {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
        tech: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
        design: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
        business: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
        featured: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    }

    return colors[category.toLowerCase()] || colors.tech
}
