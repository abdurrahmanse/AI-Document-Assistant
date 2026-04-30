import { SiteIcon } from '@/components/ui'
import { personalData } from '@/data/pages/01-personal'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const { personal, social, availability } = personalData

  return (
    <section className='relative min-h-screen overflow-hidden bg-slate-950 text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#020617_100%)]' />
      <div className='absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[72px_72px]' />
      <div className='absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl' />
      <div className='absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28'>
        <div className='mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.35)]'>
          <span className='relative flex h-2.5 w-2.5'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60' />
            <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400' />
          </span>
          {availability.status}
        </div>

        <div className='grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>
          <div className='space-y-8'>
            <div className='space-y-5'>
              <div className='inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl'>
                <span className='h-2 w-2 rounded-full bg-cyan-300' />
                Portfolio Overview
              </div>

              <h1 className='max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl'>
                <span className='block text-slate-100'>{personal.firstName}</span>
                <span className='mt-2 block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent'>
                  {personal.lastName}
                </span>
              </h1>

              <p className='max-w-2xl text-xl font-medium text-slate-300 sm:text-2xl'>{personal.title}</p>

              <p className='max-w-2xl text-base leading-8 text-slate-300/90 sm:text-lg'>{personal.bio}</p>
            </div>

            <div className='flex flex-wrap gap-4'>
              <Link
                href='#projects'
                className='inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-100'
              >
                <span className='mr-2 inline-flex'>
                  <SiteIcon name='rocket' className='h-4 w-4' />
                </span>
                View My Work
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10'
              >
                <span className='mr-2 inline-flex'>
                  <SiteIcon name='message' className='h-4 w-4' />
                </span>
                Get in Touch
              </Link>
            </div>

            <div className='flex flex-wrap gap-3 pt-2'>
              {social.github && (
                <a
                  href={social.github.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  title='GitHub'
                  className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white'
                >
                  <SiteIcon name='github' className='h-5 w-5' />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  title='LinkedIn'
                  className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white'
                >
                  <SiteIcon name='linkedin' className='h-5 w-5' />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'
                  title='Twitter'
                  className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white'
                >
                  <SiteIcon name='twitter' className='h-5 w-5' />
                </a>
              )}
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-xl'>
            <div className='absolute inset-0 translate-y-8 rounded-4xl bg-cyan-400/20 blur-3xl' />
            <div className='relative rounded-4xl border border-white/10 bg-white/7 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.55)] backdrop-blur-2xl sm:p-5'>
              <div className='rounded-3xl border border-white/10 bg-slate-950/40 p-3 sm:p-4'>
                <div className='relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-slate-900'>
                  <Image
                    src='/images/profile/masfiq.png'
                    alt='Masfiq profile portrait'
                    fill
                    priority
                    sizes='(max-width: 1024px) 100vw, 40vw'
                    className='object-cover object-center'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60' />
                </div>
              </div>

              <div className='mt-4 grid grid-cols-2 gap-3 sm:mt-5'>
                <div className='rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl'>
                  <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                    <SiteIcon name='briefcase' className='h-4 w-4' />
                  </div>
                  <div className='text-2xl font-semibold text-white'>5+</div>
                  <div className='mt-1 text-sm text-slate-300'>Years Experience</div>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl'>
                  <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                    <SiteIcon name='rocket' className='h-4 w-4' />
                  </div>
                  <div className='text-2xl font-semibold text-white'>18+</div>
                  <div className='mt-1 text-sm text-slate-300'>Projects Shipped</div>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl'>
                  <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                    <SiteIcon name='chart' className='h-4 w-4' />
                  </div>
                  <div className='text-2xl font-semibold text-white'>$4.1M</div>
                  <div className='mt-1 text-sm text-slate-300'>Total Impact</div>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl'>
                  <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                    <SiteIcon name='brain' className='h-4 w-4' />
                  </div>
                  <div className='text-2xl font-semibold text-white'>23+</div>
                  <div className='mt-1 text-sm text-slate-300'>Models Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
