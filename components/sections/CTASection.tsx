import React from 'react'
import Link from 'next/link'
import { SiteIcon } from '@/components/ui'

export function CTASection() {
  return (
    <section className='py-20 md:py-32 bg-linear-to-r from-blue-950 to-cyan-950 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8'>
        <div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Ready to discuss your next project?</h2>
          <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>
            I&apos;m available for consulting projects, speaking engagements, and full-time opportunities to help
            solve complex data science challenges.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/contact'
            className='px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105'
          >
            <span className='inline-flex items-center gap-2'>
              <SiteIcon name='message' className='h-4 w-4' /> Get in Touch
            </span>
          </Link>
          <Link
            href='/projects'
            className='px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300'
          >
            <span className='inline-flex items-center gap-2'>
              <SiteIcon name='rocket' className='h-4 w-4' /> View My Work
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
