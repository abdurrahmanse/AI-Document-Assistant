/**
 * SEO and metadata utilities
 */

export interface SEOMetadata {
    title: string
    description: string
    canonical?: string
    ogImage?: string
    ogType?: 'website' | 'article'
    twitterCard?: 'summary' | 'summary_large_image'
    author?: string
    publishedDate?: string
    modifiedDate?: string
    keywords?: string[]
}

export function generateSEOMetadata(data: Partial<SEOMetadata>): SEOMetadata {
    return {
        title: data.title || 'Professional Portfolio',
        description: data.description || 'Welcome to my professional portfolio',
        canonical: data.canonical,
        ogImage: data.ogImage || '/og-image.png',
        ogType: data.ogType || 'website',
        twitterCard: data.twitterCard || 'summary_large_image',
        author: data.author,
        publishedDate: data.publishedDate,
        modifiedDate: data.modifiedDate,
        keywords: data.keywords || [],
    }
}

export function createStructuredData(data: Record<string, unknown>): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        ...data,
    })
}

export function generateMetaTags(metadata: SEOMetadata): Record<string, string> {
    return {
        'og:title': metadata.title,
        'og:description': metadata.description,
        ...(metadata.ogImage && { 'og:image': metadata.ogImage }),
        ...(metadata.ogType && { 'og:type': metadata.ogType }),
        'twitter:card': metadata.twitterCard || 'summary_large_image',
        'twitter:title': metadata.title,
        'twitter:description': metadata.description,
        ...(metadata.author && { 'author': metadata.author }),
        ...(metadata.keywords && { 'keywords': metadata.keywords.join(', ') }),
    }
}
