/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface ExperienceTimelineSectionProps {
  jobs: Array<any>
}

export function ExperienceTimelineSection({ jobs }: ExperienceTimelineSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
      <div className='max-w-4xl mx-auto'>
        {/* Timeline */}
        <div className='relative'>
          {/* Vertical Line */}
          <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-cyan-500 md:left-1/2 md:transform md:-translate-x-1/2'></div>

          {/* Job Items */}
          <div className='space-y-12'>
            {jobs.map((job, idx) => (
              <div
                key={job.id}
                className={`relative ${idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'} md:ml-0`}
              >
                {/* Timeline Dot */}
                <div className='absolute left-0 top-6 w-4 h-4 bg-blue-500 rounded-full -translate-x-1.5 md:left-1/2 md:-translate-x-1/2 border-4 border-slate-950'></div>

                {/* Card */}
                <div className={`ml-8 md:ml-0 md:px-8 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className='bg-linear-to-r from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300'>
                    {/* Header */}
                    <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6'>
                      <div>
                        <h3 className='text-2xl font-bold text-white mb-2'>{job.title}</h3>
                        <div className='flex flex-col md:items-end gap-2'>
                          <p className='text-lg text-blue-400 font-semibold flex items-center gap-2 md:justify-end'>
                            
                            {job.company.name}
                          </p>
                          <p className='text-sm text-slate-400'>
                            {job.location.city}, {job.location.state}
                            {job.location.remote && ' • Remote'}
                          </p>
                          <p className='text-sm text-slate-500'>
                            {job.startDate.split('-')[0]}-{job.startDate.split('-')[1]} to{' '}
                            {job.current ? 'Present' : `${job.endDate.split('-')[0]}-${job.endDate.split('-')[1]}`}
                          </p>
                          <span className='inline-block px-3 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium mt-2 md:ml-auto md:mr-0'>
                            {job.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className='text-slate-300 mb-6 text-sm leading-relaxed'>{job.summary}</p>

                    {/* Responsibilities */}
                    <div className='mb-6'>
                      <p className='text-sm font-semibold text-slate-400 mb-3'>Key Responsibilities:</p>
                      <ul className='space-y-2'>
                        {job.responsibilities.slice(0, 4).map((responsibility: string, respIdx: number) => (
                          <li key={respIdx} className='flex items-start gap-3 text-sm text-slate-300'>
                            
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {job.achievements.length > 0 && (
                      <div className='mb-6 grid grid-cols-2 md:grid-cols-auto gap-4'>
                        {job.achievements.map((achievement: any, achIdx: number) => (
                          <div key={achIdx} className='bg-blue-500/10 border border-blue-500/20 rounded-lg p-3'>
                            <p className='text-lg font-bold text-blue-400'>{achievement.metric}</p>
                            <p className='text-xs text-slate-400 mt-1'>{achievement.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className='mb-4'>
                      <p className='text-xs text-slate-500 uppercase tracking-wider mb-3'>Technologies</p>
                      <div className='flex flex-wrap gap-2'>
                        {job.technologies.map((tech: string, techIdx: number) => (
                          <span
                            key={techIdx}
                            className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    {job.highlights.length > 0 && (
                      <div className='pt-4 border-t border-slate-700'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-3'>Highlights</p>
                        <ul className='space-y-1'>
                          {job.highlights.map((highlight: string, highlightIdx: number) => (
                            <li key={highlightIdx} className='text-sm text-slate-400 flex items-start gap-2'>
                              
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
