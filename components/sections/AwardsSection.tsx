import React from 'react'
import Link from 'next/link'
import { SiteIcon } from '@/components/ui'
import { AwardCard } from '@/components/cards/AwardCard'

interface AwardsSectionProps {
  awards: Array<{
    title: string
    date: string
    description?: string
  }>
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  if (awards.length === 0) return null

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3'>
          <SiteIcon name='trophy' className='h-8 w-8 text-amber-300' /> Recent Recognition
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {awards.slice(0, 3).map((award, idx) => (
            <AwardCard
              key={idx}
              title={award.title}
              date={award.date}
              description={award.description}
            />
          ))}
        </div>
        {awards.length > 3 && (
          <div className='text-center mt-8'>
            <Link
              href='/publications'
              className='inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors duration-300 text-sm font-medium'
            >
              <span className='inline-flex items-center gap-2'>
                <SiteIcon name='arrowRight' className='h-4 w-4' /> View All Awards
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
