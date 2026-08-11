 
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
    <section className='py-32 border-b border-border bg-accent/30'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8'>
        <div>
          <h2 className='text-5xl md:text-7xl font-bold tracking-tighter mb-6'>{heading}</h2>
          <p className='text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed'>{description}</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
          <Link
            href={primaryButtonUrl}
            className='px-8 py-4 bg-foreground text-background rounded-sm font-medium transition-transform hover:-translate-y-1 w-full sm:w-auto'
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonUrl}
            className='px-8 py-4 border border-border bg-transparent text-foreground rounded-sm font-medium hover:bg-accent transition-colors w-full sm:w-auto'
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
