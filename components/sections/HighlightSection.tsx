import React from 'react'

interface HighlightSectionProps {
  heading: string
  items: string[]
}

export function HighlightSection({ heading, items }: HighlightSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>{heading}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {items.map((item, idx) => (
            <div key={idx} className='flex items-start gap-4'>
              <div className='shrink-0 pt-1'>
                <div className='flex items-center justify-center h-6 w-6 rounded-full bg-linear-to-r from-blue-500 to-cyan-500'>
                  
                </div>
              </div>
              <div>
                <p className='text-lg text-slate-300'>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
