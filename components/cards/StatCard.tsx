import { SiteIcon } from '@/components/ui'
import React from 'react'

interface StatCardProps {
  number: string
  label: string
}

export function StatCard({ number, label }: StatCardProps) {
  return (
    <div className='text-center group'>
      <div className='relative'>
        <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
        <div className='relative bg-slate-900 rounded-lg p-6'>
          <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
            <SiteIcon name='sparkles' className='h-4 w-4' />
          </div>
          <p className='text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            {number}
          </p>
          <p className='text-slate-400 text-sm mt-2'>{label}</p>
        </div>
      </div>
    </div>
  )
}
