'use client'

import React from 'react'
import { Container } from '@/components/ui'

interface BiographySectionProps {
  introduction: { heading: string; content: string }
  mission: { heading: string; content: string }
  values: Array<{ title: string; description: string; icon: string }>
}

export function BiographySection({ introduction, mission, values }: BiographySectionProps) {
  return (
    <section className='py-32 bg-background'>
      <Container size='lg'>
        <div className='flex flex-col gap-32'>
          
          {/* Introduction */}
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16'>
            <div className='md:col-span-4'>
              <h2 className='text-3xl font-bold tracking-tight text-foreground'>
                {introduction.heading}
              </h2>
            </div>
            <div className='md:col-span-8'>
              <p className='text-xl leading-relaxed text-muted-foreground'>
                {introduction.content}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-16 border-t border-border'>
            <div className='md:col-span-4'>
              <h2 className='text-3xl font-bold tracking-tight text-foreground'>
                {mission.heading}
              </h2>
            </div>
            <div className='md:col-span-8'>
              <p className='text-xl leading-relaxed text-muted-foreground'>
                {mission.content}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className='pt-16 border-t border-border'>
            <h2 className='text-3xl font-bold tracking-tight text-foreground mb-16'>
              Operating Principles
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16'>
              {values.map((value, idx) => (
                <div key={idx} className='flex flex-col'>
                  <div className='text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4'>
                    0{idx + 1}
                  </div>
                  <h3 className='text-2xl font-bold tracking-tight mb-4'>
                    {value.title}
                  </h3>
                  <p className='text-lg leading-relaxed text-muted-foreground'>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
