import { publicationsPage, recognitionHistory } from '@/data'
import Link from 'next/link'

export const metadata = {
  title: publicationsPage.page.title,
  description: publicationsPage.page.metaDescription,
}

export default function PublicationsPage() {
  const { hero } = publicationsPage.sections
  const publications = publicationsPage.publications
  const recognitionByYear = recognitionHistory.recognitionByYear

  // Filter awards from recognition data
  const allAwards = recognitionByYear
    .flatMap((year) => year.awards.map((award) => ({ ...award, year: year.year })))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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

      {/* Publications Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>📚 Peer-Reviewed Publications</h2>
            <p className='text-xl text-slate-400'>
              {publications.length} peer-reviewed papers with{' '}
              {publications.reduce((sum: number, p) => sum + p.citations, 0)}+ total citations
            </p>
          </div>

          <div className='space-y-8'>
            {publications.map((publication: (typeof publications)[0], idx) => (
              <article
                key={publication.id}
                className='bg-linear-to-r from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300'
              >
                {/* Publication Header */}
                <div className='mb-6'>
                  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4'>
                    <div className='flex-1'>
                      <h3 className='text-2xl font-bold text-white mb-3'>{publication.title}</h3>
                      <div className='flex flex-wrap gap-4 text-sm text-slate-400'>
                        <span>
                          {typeof publication.journal === 'string' ? publication.journal : publication.journal.name}
                        </span>
                        <span>•</span>
                        <span>
                          Vol {publication.volume}, Issue {publication.issue} ({publication.publishedDate.split('-')[0]}
                          )
                        </span>
                        <span>•</span>
                        <span className='text-blue-400 font-semibold'>{publication.citations}+ citations</span>
                      </div>
                    </div>
                  </div>

                  {/* Authors */}
                  <div className='mb-4'>
                    <p className='text-sm text-slate-500 mb-2'>Authors:</p>
                    <div className='flex flex-wrap gap-4'>
                      {publication.authors.map((author: (typeof publication.authors)[0], authIdx) => (
                        <div key={authIdx} className='text-sm'>
                          <span className='text-slate-300 font-medium'>{author.name}</span>
                          <span className='text-slate-500'> ({author.position}</span>
                          {author.affiliation && <span className='text-slate-500'>, {author.affiliation}</span>}
                          <span className='text-slate-500'>)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className='text-slate-300 leading-relaxed mb-6'>{publication.description}</p>

                {/* Impact */}
                <div className='bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6'>
                  <p className='text-blue-300 text-sm'>{publication.impact}</p>
                </div>

                {/* Keywords */}
                <div className='mb-6'>
                  <p className='text-sm text-slate-500 mb-3'>Keywords:</p>
                  <div className='flex flex-wrap gap-2'>
                    {publication.keywords.map((keyword: string, keyIdx) => (
                      <span key={keyIdx} className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs'>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata and Links */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-700'>
                  <div className='flex flex-wrap gap-6 text-xs text-slate-400'>
                    <span>DOI: {publication.doi}</span>
                    <span>Pages: {publication.pages}</span>
                  </div>
                  <a
                    href={publication.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300 text-sm font-medium w-full sm:w-auto text-center'
                  >
                    Read Publication →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      {allAwards.length > 0 && (
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
          <div className='max-w-6xl mx-auto'>
            <div className='mb-16'>
              <h2 className='text-4xl font-bold text-white mb-4'>🏆 Awards & Recognition</h2>
              <p className='text-xl text-slate-400'>Industry recognition and accolades</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {allAwards.map((award, idx) => (
                <div
                  key={idx}
                  className='bg-linear-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-8 hover:border-amber-400/60 transition-all duration-300'
                >
                  <div className='flex items-start gap-4 mb-4'>
                    <span className='text-4xl'>🏅</span>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-white mb-1'>{award.title}</h3>
                      <p className='text-sm text-amber-300 font-semibold'>{award.issuer}</p>
                      <p className='text-xs text-slate-400 mt-1'>{award.date}</p>
                    </div>
                  </div>
                  {award.description && (
                    <p className='text-slate-300 text-sm leading-relaxed mb-3'>{award.description}</p>
                  )}
                  {award.project && (
                    <div className='inline-block px-3 py-1 bg-slate-700/50 text-slate-300 rounded text-xs'>
                      Project: {award.project}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Statistics Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-16 text-center'>Research Impact</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                    {publications.length}
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Publications</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    {publications.reduce((sum: number, p) => sum + p.citations, 0)}+
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Total Citations</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                    {allAwards.length}
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Awards</p>
                </div>
              </div>
            </div>

            <div className='text-center group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-r from-amber-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-900 rounded-lg p-6'>
                  <p className='text-4xl font-bold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent'>
                    127+
                  </p>
                  <p className='text-slate-400 text-sm mt-2'>Citations Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-950 to-cyan-950 border-b border-slate-800'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>Interested in Collaboration?</h2>
          <p className='text-xl text-slate-300 mb-8'>
            I'm always open to discussing research opportunities, speaking engagements, and collaborative projects.
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
