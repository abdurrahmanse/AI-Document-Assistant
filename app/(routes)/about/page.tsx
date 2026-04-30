import { SiteIcon } from '@/components/ui'
import { aboutPage } from '@/data'
import Link from 'next/link'

export const metadata = {
  title: aboutPage.page.title,
  description: aboutPage.page.metaDescription,
}

export default function AboutPage() {
  const { hero, introduction, mission, values, highlight, statistics } = aboutPage.sections

  return (
    <main className='overflow-hidden'>
      {/* Hero Section */}
      <section className='bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <h1 className='text-5xl sm:text-6xl font-bold text-white leading-tight'>{hero.title}</h1>
          <p className='text-xl text-slate-300'>{hero.subtitle}</p>
          <Link
            href={hero.ctaButton.url}
            className='inline-block px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105'
          >
            {hero.ctaButton.text}
          </Link>
        </div>
      </section>

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

      {/* Values Section */}
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

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-950 to-cyan-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Work Together?</h2>
          <p className='text-xl text-slate-300 mb-8'>
            I&apos;m always interested in connecting with people who share my passion for data and solving complex
            problems.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105'
            >
              Get In Touch
            </Link>
            <Link
              href='/projects'
              className='px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300'
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
