import { SiteIcon } from '@/components/ui'
import { projectsPage } from '@/data'
import Link from 'next/link'

export default function FeaturedProjects() {
  const { sections, projects } = projectsPage
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2)

  return (
    <section id='projects' className='py-20 md:py-32 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 mb-4'>
            <span className='inline-flex items-center gap-2'>
              <SiteIcon name='sparkles' className='h-4 w-4' /> {sections.hero.title}
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>{sections.hero.title}</h2>
          <p className='text-xl text-slate-400 max-w-2xl mx-auto'>{sections.hero.description}</p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className='group bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'
            >
              <div className='flex items-start justify-between mb-6'>
                <div>
                  <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
                  <p className='text-slate-400 text-sm'>
                    {project.startDate} - {project.endDate}
                  </p>
                </div>
                <span className='text-3xl'>
                  {project.categoryId === 'ml' ? (
                    <SiteIcon name='target' className='h-8 w-8' />
                  ) : project.categoryId === 'dl' ? (
                    <SiteIcon name='brain' className='h-8 w-8' />
                  ) : project.categoryId === 'nlp' ? (
                    <SiteIcon name='message' className='h-8 w-8' />
                  ) : project.categoryId === 'cv' ? (
                    <SiteIcon name='layers' className='h-8 w-8' />
                  ) : (
                    <SiteIcon name='chart' className='h-8 w-8' />
                  )}
                </span>
              </div>

              <p className='text-slate-300 mb-4'>{project.description}</p>

              <div className='flex flex-wrap gap-2 mb-6'>
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex items-center justify-between pt-4 border-t border-slate-700'>
                <div className='text-sm text-slate-400'>
                  <span className='text-green-400 font-semibold'>{project.highlights.revenue_impact}</span> impact
                </div>
                <Link
                  href='/projects'
                  className='text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2 transition-colors'
                >
                  <SiteIcon name='arrowRight' className='h-4 w-4' />
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center pt-8'>
          <Link
            href='/projects'
            className='inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'
          >
            <span className='inline-flex items-center gap-2'>
              <SiteIcon name='rocket' className='h-4 w-4' /> View All {projects.length} Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
