import { experiencePage } from '@/data'
import Link from 'next/link'

export const metadata = {
  title: experiencePage.page.title,
  description: experiencePage.page.metaDescription,
}

export default function ExperiencePage() {
  const { sections, jobs } = experiencePage
  const { hero } = sections

  // Sort jobs by start date (most recent first)
  const sortedJobs = [...jobs].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

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

      {/* Experience Timeline */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto'>
          {/* Timeline */}
          <div className='relative'>
            {/* Vertical Line */}
            <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-cyan-500 md:left-1/2 md:transform md:-translate-x-1/2'></div>

            {/* Job Items */}
            <div className='space-y-12'>
              {sortedJobs.map((job: (typeof jobs)[0], idx) => (
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
                            <p className='text-lg text-blue-400 font-semibold'>{job.company.name}</p>
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
                          {job.responsibilities.slice(0, 4).map((responsibility: string, respIdx) => (
                            <li key={respIdx} className='flex items-start gap-3 text-sm text-slate-300'>
                              <span className='text-blue-400 mt-1 shrink-0'>→</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {job.achievements.length > 0 && (
                        <div className='mb-6 grid grid-cols-2 md:grid-cols-auto gap-4'>
                          {job.achievements.map((achievement: (typeof job.achievements)[0], achIdx) => (
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
                          {job.technologies.map((tech: string, techIdx) => (
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
                            {job.highlights.map((highlight: string, highlightIdx) => (
                              <li key={highlightIdx} className='text-sm text-slate-400 flex items-start gap-2'>
                                <span className='text-green-400 mt-1'>✓</span>
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

      {/* Experience Statistics */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-16 text-center'>Career Overview</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                    5+
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Years Experience</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                    {jobs.length}
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Companies</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    4+
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Teams Led</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-amber-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent'>
                    $4.1M+
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Business Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-12 text-center'>Core Competencies</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              {
                title: 'Machine Learning',
                skills: ['Supervised Learning', 'Unsupervised Learning', 'Ensemble Methods', 'Neural Networks'],
              },
              {
                title: 'Data Engineering',
                skills: ['ETL Pipelines', 'Data Warehousing', 'Stream Processing', 'Big Data'],
              },
              {
                title: 'Cloud & DevOps',
                skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
              },
              {
                title: 'Leadership',
                skills: ['Team Management', 'Mentoring', 'Project Leadership', 'Stakeholder Management'],
              },
            ].map((competency, idx) => (
              <div
                key={idx}
                className='bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'
              >
                <h3 className='text-xl font-bold text-white mb-4'>{competency.title}</h3>
                <div className='space-y-2'>
                  {competency.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                      <p className='text-slate-300'>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-950 to-cyan-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to work together?</h2>
          <p className='text-xl text-slate-300 mb-8'>
            With years of experience building impactful data science solutions, I&apos;m excited to tackle new
            challenges and help drive your business forward.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105'
            >
              Let&apos;s Connect
            </Link>
            <Link
              href='/projects'
              className='px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300'
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
