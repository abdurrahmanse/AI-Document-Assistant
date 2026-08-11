/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'

interface ProjectGridSectionProps {
  projects: Array<any>
}

export function ProjectGridSection({ projects }: ProjectGridSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950'>
      <div className='max-w-6xl mx-auto'>
        {projects.length === 0 ? (
          <div className='text-center py-20'>
            <p className='text-xl text-slate-400'>No projects found in this category.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {projects.map((project: any) => (
              <article
                key={project.id}
                className='bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group'
              >
                {/* Project Image */}
                <div className='h-48 bg-linear-to-r from-blue-500/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute inset-0 bg-linear-to-r from-blue-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-300'></div>
                  <div className='relative text-center'>
                    <div className='mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-300'>
                      
                    </div>
                    <p className='text-slate-400 text-sm'>{project.status}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className='p-8'>
                  {/* Header */}
                  <div className='mb-6'>
                    <div className='flex items-start justify-between gap-4 mb-3'>
                      <h3 className='text-2xl font-bold text-white flex-1'>{project.title}</h3>
                      <span className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold shrink-0'>
                        {project.category}
                      </span>
                    </div>
                    <p className='text-slate-400'>{project.shortDescription}</p>
                  </div>

                  {/* Description */}
                  <p className='text-slate-300 text-sm leading-relaxed mb-6'>{project.description}</p>

                  {/* Highlights */}
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6'>
                    {Object.entries(project.highlights).map(([key, value]: [string, any]) => (
                      <div key={key} className='bg-slate-700/30 rounded-lg p-3'>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mb-1'>
                          {key.replace(/_/g, ' ')}
                        </p>
                        <p className='text-lg font-bold text-blue-400'>{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className='mb-6'>
                    <p className='text-xs text-slate-500 uppercase tracking-wider mb-3'>Technologies</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.slice(0, 5).map((tech: string, idx: number) => (
                        <span key={idx} className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs'>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs'>
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Metadata */}
                  <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>
                    <div>
                      <p className='text-slate-500 text-xs uppercase mb-1 flex items-center gap-2'>
                         Duration
                      </p>
                      <p className='text-slate-300'>{project.duration}</p>
                    </div>
                    <div>
                      <p className='text-slate-500 text-xs uppercase mb-1 flex items-center gap-2'>
                         Team Size
                      </p>
                      <p className='text-slate-300'>{project.teamSize} members</p>
                    </div>
                  </div>

                  {/* Business Outcomes */}
                  {project.businessOutcomes.length > 0 && (
                    <div className='mb-6'>
                      <p className='text-sm text-slate-400 mb-3 font-semibold'>Key Outcomes:</p>
                      <ul className='space-y-2'>
                        {project.businessOutcomes.slice(0, 2).map((outcome: string, idx: number) => (
                          <li key={idx} className='flex items-start gap-2 text-sm text-slate-300'>
                            
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links */}
                  <div className='flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-700'>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors duration-300 text-sm font-medium text-center'
                      >
                        <span className='inline-flex items-center gap-2'>
                           GitHub
                        </span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300 text-sm font-medium text-center'
                      >
                        <span className='inline-flex items-center gap-2'>
                           View Demo
                        </span>
                      </a>
                    )}
                    {project.links.blog && (
                      <Link
                        href={project.links.blog}
                        className='flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors duration-300 text-sm font-medium text-center'
                      >
                        <span className='inline-flex items-center gap-2'>
                           Case Study
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
