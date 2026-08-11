'use client'

import React from 'react'
import { Container } from '@/components/ui'
import { motion } from 'motion/react'

interface ProjectImpactSectionProps {
  projectsCount: number
}

export function ProjectImpactSection({ projectsCount }: ProjectImpactSectionProps) {
  return (
    <section className='py-24 bg-background border-y border-border'>
      <Container size='xl'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-border/50'>
          {[
            { value: projectsCount, label: 'Projects' },
            { value: '$4.1M', label: 'Revenue Impact' },
            { value: '15+', label: 'Models Deployed' },
            { value: '99.9%', label: 'Uptime SLA' }
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='flex flex-col items-center md:items-start text-center md:text-left px-8'
            >
              <div className='text-5xl md:text-6xl font-bold tracking-tighter mb-4'>
                {metric.value}
              </div>
              <div className='text-sm font-medium tracking-widest uppercase text-muted-foreground'>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
