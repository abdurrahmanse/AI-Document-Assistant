import React from 'react'
import { ValueCard } from '@/components/cards/ValueCard'

interface CoreValuesSectionProps {
  values: Array<{
    title: string
    description: string
    icon: string
  }>
}

export function CoreValuesSection({ values }: CoreValuesSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-16 text-center'>Core Values</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {values.map((value, idx) => (
            <ValueCard
              key={idx}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
