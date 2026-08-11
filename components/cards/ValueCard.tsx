import React from 'react'

interface ValueCardProps {
  title: string
  description: string
}

export function ValueCard({ title, description }: ValueCardProps) {

  return (
    <div className='bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300'>
      <div className='flex items-start gap-4'>
        <div className='text-blue-400 shrink-0 pt-1'>
          
        </div>
        <div className='flex-1'>
          <h3 className='text-xl font-bold text-white mb-3'>{title}</h3>
          <p className='text-slate-400 leading-relaxed'>{description}</p>
        </div>
      </div>
    </div>
  )
}
