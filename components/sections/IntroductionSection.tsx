import React from 'react'

interface IntroductionSectionProps {
  heading: string
  content: string
}

export function IntroductionSection({ heading, content }: IntroductionSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>{heading}</h2>
        <div className='space-y-6 text-lg text-slate-300 leading-relaxed'>
          {content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className='first-letter:text-2xl first-letter:font-bold first-letter:text-blue-400'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
