'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight, Code2, ExternalLink, FileText, Tag, Calendar } from 'lucide-react'
import { Container } from '@/components/ui'

interface ProjectGridSectionProps {
  projects: Array<any>
}

export function ProjectGridSection({ projects }: ProjectGridSectionProps) {
  return (
    <section className='py-20 bg-background'>
      <Container size='xl'>
        {projects.length === 0 ? (
          <div className='text-center py-32'>
            <p className='text-xl text-muted-foreground'>No projects found for this category.</p>
          </div>
        ) : (
          <div className='flex flex-col border-t border-border'>
            {projects.map((project: any) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className='group border-b border-border py-12 flex flex-col md:flex-row gap-8 md:gap-16 hover:bg-accent/10 transition-colors'
              >
                {/* Meta Column */}
                <div className='w-full md:w-1/4 shrink-0 flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2'>
                      <Calendar className="w-4 h-4" />
                      {project.startDate.split('-')[0]} — {project.endDate.split('-')[0]}
                    </div>
                    <div className='flex items-center gap-1.5 text-sm font-medium px-2 py-1 bg-accent/30 border border-border inline-block rounded-sm'>
                      <Tag className="w-3 h-3" />
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className='w-full md:w-3/4 flex flex-col'>
                  <h3 className='text-3xl font-bold tracking-tight mb-4 group-hover:text-muted-foreground transition-colors'>
                    {project.title}
                  </h3>
                  
                  <p className='text-lg leading-relaxed text-muted-foreground mb-8'>
                    {project.description}
                  </p>

                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8'>
                    {Object.entries(project.highlights).map(([key, value]: [string, any]) => (
                      <div key={key}>
                        <div className='text-xl font-bold tracking-tighter mb-1'>{value}</div>
                        <div className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                          {key.replace(/_/g, ' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='flex flex-wrap gap-2 mb-8'>
                    {project.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className='px-3 py-1 border border-border rounded-sm text-xs font-medium bg-accent/30'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-wrap gap-6 mt-auto pt-6 border-t border-border/50'>
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors'
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                        <ArrowUpRight className='w-3 h-3 opacity-50' />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors'
                      >
                        <Code2 className="w-4 h-4" />
                        Source Code
                        <ArrowUpRight className='w-3 h-3 opacity-50' />
                      </a>
                    )}
                    {project.links.blog && (
                      <Link
                        href={project.links.blog}
                        className='inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors'
                      >
                        <FileText className="w-4 h-4" />
                        Read Case Study
                        <ArrowUpRight className='w-3 h-3 opacity-50' />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
