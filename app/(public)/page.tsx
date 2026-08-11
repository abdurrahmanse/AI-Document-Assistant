import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import { SiteIcon } from '@/components/ui'
import { aboutPage, recognitionHistory, siteConfig } from '@/data'
import Link from 'next/link'

export const metadata = {
  title: siteConfig.siteConfig.title,
  description: siteConfig.siteConfig.description,
}

export default function Home() {
  const { introduction, mission, values, statistics, highlight } = aboutPage.sections
  const recognitionByYear = recognitionHistory.recognitionByYear
  const allAwards = recognitionByYear
    .flatMap((year) => year.awards.map((award) => ({ ...award, year: year.year })))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className='overflow-hidden'>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-12 text-center'>{introduction.heading}</h2>
          <div className='space-y-6 text-lg text-slate-300 leading-relaxed'>
            {introduction.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className='first-letter:text-2xl first-letter:font-bold first-letter:text-blue-400'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-950/30 to-cyan-950/30 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-12'>
            <h2 className='text-3xl font-bold text-white mb-6 flex items-center gap-3'>
              <SiteIcon name='target' className='h-7 w-7 text-cyan-300' />
              {mission.heading}
            </h2>
            <p className='text-xl text-slate-300 leading-relaxed'>{mission.content}</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-16 text-center'>Core Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {values.map((value, idx) => (
              <div
                key={idx}
                className='bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300'
              >
                <div className='flex items-start gap-4'>
                  <div className='text-blue-400 shrink-0 pt-1'>
                    <SiteIcon
                      name={
                        value.icon === 'code'
                          ? 'code'
                          : value.icon === 'users'
                            ? 'users'
                            : value.icon === 'book'
                              ? 'book'
                              : 'target'
                      }
                      className='h-8 w-8'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-white mb-3'>{value.title}</h3>
                    <p className='text-slate-400 leading-relaxed'>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Skills Section */}
      <Skills />

      {/* Highlights Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-12 text-center'>{highlight.heading}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {highlight.items.map((item, idx) => (
              <div key={idx} className='flex items-start gap-4'>
                <div className='shrink-0 pt-1'>
                  <div className='flex items-center justify-center h-6 w-6 rounded-full bg-linear-to-r from-blue-500 to-cyan-500'>
                    <SiteIcon name='check' className='h-4 w-4 text-white' />
                  </div>
                </div>
                <div>
                  <p className='text-lg text-slate-300'>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-16 text-center'>{statistics.heading}</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
            {statistics.stats.map((stat, idx) => (
              <div key={idx} className='text-center group'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative bg-slate-900 rounded-lg p-6'>
                    <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                      <SiteIcon name='sparkles' className='h-4 w-4' />
                    </div>
                    <p className='text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                      {stat.number}
                    </p>
                    <p className='text-slate-400 text-sm mt-2'>{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {allAwards.length > 0 && (
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3'>
              <SiteIcon name='trophy' className='h-8 w-8 text-amber-300' /> Recent Recognition
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {allAwards.slice(0, 3).map((award, idx) => (
                <div
                  key={idx}
                  className='bg-linear-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 hover:border-amber-400/60 transition-all duration-300'
                >
                  <div className='flex items-start gap-3 mb-3'>
                    <SiteIcon name='trophy' className='h-8 w-8 text-amber-300' />
                    <div className='flex-1'>
                      <h3 className='text-lg font-bold text-white'>{award.title}</h3>
                      <p className='text-xs text-amber-300 mt-1'>{award.date}</p>
                    </div>
                  </div>
                  {award.description && <p className='text-slate-300 text-sm leading-relaxed'>{award.description}</p>}
                </div>
              ))}
            </div>
            {allAwards.length > 3 && (
              <div className='text-center mt-8'>
                <Link
                  href='/publications'
                  className='inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors duration-300 text-sm font-medium'
                >
                  <span className='inline-flex items-center gap-2'>
                    <SiteIcon name='arrowRight' className='h-4 w-4' /> View All Awards
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className='py-20 md:py-32 bg-linear-to-r from-blue-950 to-cyan-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8'>
          <div>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Ready to discuss your next project?</h2>
            <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>
              I&apos;m available for consulting projects, speaking engagements, and full-time opportunities to help
              solve complex data science challenges.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105'
            >
              <span className='inline-flex items-center gap-2'>
                <SiteIcon name='message' className='h-4 w-4' /> Get in Touch
              </span>
            </Link>
            <Link
              href='/projects'
              className='px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300'
            >
              <span className='inline-flex items-center gap-2'>
                <SiteIcon name='rocket' className='h-4 w-4' /> View My Work
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
