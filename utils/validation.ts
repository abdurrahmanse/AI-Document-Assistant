/**
 * Validation utilities
 */

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\d\s+\-().]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

export function isValidUrl(url: string): boolean {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

export function validateContactForm(data: {
    name: string
    email: string
    message: string
}): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {}

    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters'
    }

    if (!isValidEmail(data.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    }
}
