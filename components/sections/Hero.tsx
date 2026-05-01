import { SiteIcon } from '@/components/ui'
import { personalData } from '@/data/pages/01-personal'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const { personal, social } = personalData

  return (
    <header className='relative z-10 flex min-h-[84vh] items-center bg-gradient-to-b from-slate-900 via-slate-950 to-black/90 text-white'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='pointer-events-none absolute left-[-10%] top-6 h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-3xl' />
        <div className='pointer-events-none absolute right-[-8%] top-1/3 h-[420px] w-[420px] rounded-full bg-emerald-500/12 blur-3xl' />
        <svg
          className='absolute bottom-0 left-1/2 -z-20 translate-x-[-50%] opacity-10'
          width='1200'
          height='400'
          viewBox='0 0 1200 400'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden
        >
          <defs>
            <linearGradient id='g' x1='0' x2='1'>
              <stop offset='0' stopColor='#06b6d4' stopOpacity='0.12' />
              <stop offset='1' stopColor='#7c3aed' stopOpacity='0.06' />
            </linearGradient>
          </defs>
          <path d='M0 200 C300 80 900 320 1200 200 L1200 400 L0 400 Z' fill='url(#g)' />
        </svg>
      </div>

      <div className='container mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2'>
          <div className='space-y-6'>
            <div className='inline-flex items-center gap-3 rounded-full bg-white/6 px-3 py-1 text-sm font-medium text-slate-200'>
              <span className='inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-md' />
              Product-focused Research & ML
            </div>

            <h1 className='text-[2.6rem] leading-tight tracking-tight text-white sm:text-[3.2rem] lg:text-[3.8rem]'>
              <span className='block font-extrabold'>
                {personal.firstName} {personal.lastName}
              </span>
              <div className='block mt-2 bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-semibold'>
                <span className='inline-flex items-center gap-2'>Data Scientist and Researcher</span>
              </div>
            </h1>

            <p className='max-w-2xl text-lg text-slate-300'>{personal.bio}</p>

            <div className='flex flex-wrap items-center gap-4'>
              <Link
                href='#projects'
                className='group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-1'
              >
                <SiteIcon name='rocket' className='h-4 w-4 text-slate-900' />
                See Projects
              </Link>

              <Link
                href='/contact'
                className='inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/5'
              >
                Contact Me
              </Link>

              <div className='ml-2 flex items-center gap-3'>
                {social.github && (
                  <a
                    href={social.github.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full bg-white/6 p-2 text-slate-200 transition hover:bg-white/10'
                  >
                    <SiteIcon name='github' className='h-5 w-5' />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full bg-white/6 p-2 text-slate-200 transition hover:bg-white/10'
                  >
                    <SiteIcon name='linkedin' className='h-5 w-5' />
                  </a>
                )}
              </div>
            </div>

            <ul className='mt-6 flex flex-wrap gap-4 text-sm text-slate-400'>
              <li className='inline-flex items-center gap-2 rounded-lg bg-white/3 px-3 py-2'>
                <span className='inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/6 text-emerald-300'>
                  <SiteIcon name='chart' className='h-4 w-4' />
                </span>
                Research-led pipelines
              </li>
              <li className='inline-flex items-center gap-2 rounded-lg bg-white/3 px-3 py-2'>
                <span className='inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/6 text-emerald-300'>
                  <SiteIcon name='brain' className='h-4 w-4' />
                </span>
                Scalable model deployments
              </li>
              <li className='inline-flex items-center gap-2 rounded-lg bg-white/3 px-3 py-2'>
                <span className='inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/6 text-emerald-300'>
                  <SiteIcon name='briefcase' className='h-4 w-4' />
                </span>
                Cross-functional product impact
              </li>
            </ul>
          </div>

          <aside className='mx-auto w-full max-w-md'>
            <div className='relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 p-4 shadow-xl backdrop-blur-lg'>
              <div className='relative overflow-hidden rounded-2xl border border-white/6'>
                <div className='aspect-[4/5] relative h-0 w-full pb-[125%]'>
                  <Image
                    src='/images/profile/masfiq.png'
                    alt='Profile'
                    fill
                    sizes='(max-width: 768px) 100vw, 40vw'
                    className='object-cover'
                    priority
                  />
                </div>
                <div className='absolute left-4 bottom-4 flex flex-col gap-3'>
                  <div className='rounded-full bg-white/6 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur'>
                    Senior ML Researcher
                  </div>
                  <div className='rounded-full bg-white/6 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur'>
                    Open to consulting
                  </div>
                </div>
              </div>

              <div className='mt-4 grid grid-cols-2 gap-3'>
                <div className='rounded-lg bg-white/4 p-3 text-center'>
                  <div className='text-lg font-semibold'>5+</div>
                  <div className='text-xs text-slate-300'>Years</div>
                </div>
                <div className='rounded-lg bg-white/4 p-3 text-center'>
                  <div className='text-lg font-semibold'>18+</div>
                  <div className='text-xs text-slate-300'>Projects</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}
