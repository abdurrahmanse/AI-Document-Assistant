 
import React from 'react'
import Link from 'next/link'

interface CTASectionProps {
  heading: string
  description: string
  primaryButtonText: string
  primaryButtonUrl: string
  secondaryButtonText: string
  secondaryButtonUrl: string
}

export function CTASection({
  heading,
  description,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
}: CTASectionProps) {
  return (
    <section className='py-20 md:py-32 bg-linear-to-r from-blue-950 to-cyan-950 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8'>
        <div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>{heading}</h2>
          <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>{description}</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href={primaryButtonUrl}
            className='px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105'
          >
            <span className='inline-flex items-center gap-2'>
              {primaryButtonText}
            </span>
          </Link>
          <Link
            href={secondaryButtonUrl}
            className='px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300'
          >
            <span className='inline-flex items-center gap-2'>
              {secondaryButtonText}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
