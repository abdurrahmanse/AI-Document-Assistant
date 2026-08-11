import React from 'react'
import { StatCard } from '@/components/cards/StatCard'

interface StatisticsSectionProps {
  heading: string
  stats: Array<{
    number: string
    label: string
  }>
}

export function StatisticsSection({ heading, stats }: StatisticsSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-16 text-center'>{heading}</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
          {stats.map((stat, idx) => (
            <StatCard key={idx} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
