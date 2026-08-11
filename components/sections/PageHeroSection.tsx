 
import React from 'react'
import Link from 'next/link'

interface PageHeroSectionProps {
  title: string
  subtitle: string
  description?: string
  badge?: {
    icon: string
    text: string
  }
  ctaText?: string
  ctaUrl?: string
}

export function PageHeroSection({ title, subtitle, description, badge, ctaText, ctaUrl }: PageHeroSectionProps) {
  return (
    <section className='bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto text-center space-y-6'>
        {badge && (
          <div className='inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 mb-2'>
            <span className='inline-flex items-center gap-2'>
               {badge.text}
            </span>
          </div>
        )}
        <h1 className='text-5xl sm:text-6xl font-bold text-white leading-tight'>{title}</h1>
        <p className='text-xl text-slate-300'>{subtitle}</p>
        {description && <p className='text-lg text-slate-400'>{description}</p>}
        {ctaText && ctaUrl && (
          <Link
            href={ctaUrl}
            className='inline-block px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105'
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  )
}
