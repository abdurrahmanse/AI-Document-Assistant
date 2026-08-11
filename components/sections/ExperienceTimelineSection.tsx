'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Container } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

interface ExperienceTimelineSectionProps {
  jobs: Array<any>
}

export function ExperienceTimelineSection({ jobs }: ExperienceTimelineSectionProps) {
  return (
    <section className='py-32 bg-background'>
      <Container size='xl'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-20'>Experience</h2>
          
          <div className='space-y-24'>
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className='relative group'
              >
                {/* Timeline metadata */}
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-border pb-6'>
                  <div>
                    <h3 className='text-2xl font-bold tracking-tight mb-2'>{job.title}</h3>
                    <div className='text-lg font-medium text-muted-foreground'>
                      {job.company.name}
                    </div>
                  </div>
                  <div className='text-sm font-medium tracking-wider uppercase text-muted-foreground text-left md:text-right'>
                    <div className='mb-1'>
                      {job.startDate.split('-')[0]} — {job.current ? 'Present' : job.endDate.split('-')[0]}
                    </div>
                    <div>{job.duration}</div>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
                  <div className='md:col-span-8'>
                    <p className='text-lg leading-relaxed text-muted-foreground mb-8'>
                      {job.summary}
                    </p>

                    <div className='space-y-4'>
                      <h4 className='text-sm font-semibold uppercase tracking-wider text-foreground mb-4'>Impact & Responsibilities</h4>
                      <ul className='space-y-3'>
                        {job.responsibilities.slice(0, 4).map((resp: string, i: number) => (
                          <li key={i} className='flex items-start gap-4 text-muted-foreground'>
                            <ArrowRight className='w-5 h-5 text-foreground shrink-0 mt-0.5' />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='md:col-span-4 space-y-8'>
                    {/* Achievements */}
                    {job.achievements.length > 0 && (
                      <div>
                        <h4 className='text-sm font-semibold uppercase tracking-wider text-foreground mb-4'>Key Metrics</h4>
                        <div className='flex flex-col gap-4'>
                          {job.achievements.map((ach: any, i: number) => (
                            <div key={i} className='border-l-2 border-foreground pl-4'>
                              <div className='text-2xl font-bold tracking-tighter mb-1'>{ach.metric}</div>
                              <div className='text-sm text-muted-foreground'>{ach.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h4 className='text-sm font-semibold uppercase tracking-wider text-foreground mb-4'>Stack</h4>
                      <div className='flex flex-wrap gap-2'>
                        {job.technologies.map((tech: string, i: number) => (
                          <span
                            key={i}
                            className='px-3 py-1 border border-border bg-accent/30 rounded-sm text-xs font-medium'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
