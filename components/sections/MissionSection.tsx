import { SiteIcon } from '@/components/ui'
import React from 'react'

interface MissionSectionProps {
  heading: string
  content: string
}

export function MissionSection({ heading, content }: MissionSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-950/30 to-cyan-950/30 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-12'>
          <h2 className='text-3xl font-bold text-white mb-6 flex items-center gap-3'>
            <SiteIcon name='target' className='h-7 w-7 text-cyan-300' />
            {heading}
          </h2>
          <p className='text-xl text-slate-300 leading-relaxed'>{content}</p>
        </div>
      </div>
    </section>
  )
}
