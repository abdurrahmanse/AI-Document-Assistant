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
                View My Work
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10'
              >
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
                  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
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
                  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.949v5.42h-3.554s.046-8.789 0-9.708h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.568zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.95-1.71 1.179 0 1.914.755 1.938 1.71 0 .951-.759 1.71-1.973 1.71zm1.581 11.597H3.757V9.044h3.161v11.408zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
                  </svg>
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
                  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
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
                  <div className='text-2xl font-semibold text-white'>5+</div>
                  <div className='mt-1 text-sm text-slate-300'>Years Experience</div>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl'>
                  <div className='text-2xl font-semibold text-white'>18+</div>
                  <div className='mt-1 text-sm text-slate-300'>Projects Shipped</div>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl'>
                  <div className='text-2xl font-semibold text-white'>$4.1M</div>
                  <div className='mt-1 text-sm text-slate-300'>Total Impact</div>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl'>
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
