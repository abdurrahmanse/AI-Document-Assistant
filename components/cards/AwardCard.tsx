import { SiteIcon } from '@/components/ui'
import React from 'react'

interface AwardCardProps {
  title: string
  date: string
  description?: string
}

export function AwardCard({ title, date, description }: AwardCardProps) {
  return (
    <div className='bg-linear-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 hover:border-amber-400/60 transition-all duration-300'>
      <div className='flex items-start gap-3 mb-3'>
        <SiteIcon name='trophy' className='h-8 w-8 text-amber-300' />
        <div className='flex-1'>
          <h3 className='text-lg font-bold text-white'>{title}</h3>
          <p className='text-xs text-amber-300 mt-1'>{date}</p>
        </div>
      </div>
      {description && <p className='text-slate-300 text-sm leading-relaxed'>{description}</p>}
    </div>
  )
}
