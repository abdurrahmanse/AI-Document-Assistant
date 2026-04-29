'use client'

import { projectsPage } from '@/data'
import Link from 'next/link'
import { useState } from 'react'

export default function ProjectsPage() {
  const { sections, projects } = projectsPage
  const { hero, filters } = sections
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const filteredProjects = selectedFilter === 'all' ? projects : projects.filter((p) => p.categoryId === selectedFilter)

  return (
    <main className='overflow-hidden'>
      {/* Hero Section */}
      <section className='bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <h1 className='text-5xl sm:text-6xl font-bold text-white leading-tight'>{hero.title}</h1>
          <p className='text-xl text-slate-300'>{hero.subtitle}</p>
          <p className='text-lg text-slate-400'>{hero.description}</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className='py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800 sticky top-20 z-30'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950'>
        <div className='max-w-6xl mx-auto'>
          {filteredProjects.length === 0 ? (
            <div className='text-center py-20'>
              <p className='text-xl text-slate-400'>No projects found in this category.</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {filteredProjects.map((project: (typeof projects)[0]) => (
                <article
                  key={project.id}
                  className='bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group'
                >
                  {/* Project Image */}
                  <div className='h-48 bg-linear-to-r from-blue-500/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-300'></div>
                    <div className='relative text-center'>
                      <p className='text-6xl mb-2'>🚀</p>
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
                      {Object.entries(project.highlights).map(([key, value]: [string, string | number]) => (
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
                        {project.technologies.slice(0, 5).map((tech: string, idx) => (
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
                        <p className='text-slate-500 text-xs uppercase mb-1'>Duration</p>
                        <p className='text-slate-300'>{project.duration}</p>
                      </div>
                      <div>
                        <p className='text-slate-500 text-xs uppercase mb-1'>Team Size</p>
                        <p className='text-slate-300'>{project.teamSize} members</p>
                      </div>
                    </div>

                    {/* Business Outcomes */}
                    {project.businessOutcomes.length > 0 && (
                      <div className='mb-6'>
                        <p className='text-sm text-slate-400 mb-3 font-semibold'>Key Outcomes:</p>
                        <ul className='space-y-2'>
                          {project.businessOutcomes.slice(0, 2).map((outcome: string, idx) => (
                            <li key={idx} className='flex items-start gap-2 text-sm text-slate-300'>
                              <span className='text-green-400 mt-1 shrink-0'>✓</span>
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
                          GitHub
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300 text-sm font-medium text-center'
                        >
                          View Demo
                        </a>
                      )}
                      {project.links.blog && (
                        <Link
                          href={project.links.blog}
                          className='flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors duration-300 text-sm font-medium text-center'
                        >
                          Case Study
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

      {/* Statistics Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-16 text-center'>Project Impact</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                    {projects.length}
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Projects</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                    $4.1M
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Revenue Impact</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    15+
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Models Deployed</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-amber-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent'>
                    99.9%
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-950 to-cyan-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>Have an interesting project in mind?</h2>
          <p className='text-xl text-slate-300 mb-8'>
            I'm always open to discussing new opportunities and solving complex data science challenges.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105'
            >
              Start a Project
            </Link>
            <Link
              href='/about'
              className='px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300'
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
