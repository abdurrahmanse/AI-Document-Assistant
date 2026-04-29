import { personalData } from '@/data/pages/01-personal'
import Link from 'next/link'

export default function Hero() {
  const { personal, social, availability } = personalData

  return (
    <section className='min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32'>
        {/* Hero Content */}
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400'>
                ✨ Welcome to my portfolio
              </div>

              <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
                {personal.firstName}
                <br />
                <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                  {personal.lastName}
                </span>
              </h1>

              <p className='text-2xl text-slate-300 font-semibold'>{personal.title}</p>

              <p className='text-lg text-slate-400 leading-relaxed max-w-lg'>{personal.bio}</p>
            </div>

            {/* Availability Badge */}
            <div className='flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4 w-fit'>
              <span className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></span>
              <span className='text-green-300 font-medium'>{availability.status}</span>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 pt-4'>
              <Link
                href='#projects'
                className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'
              >
                View My Work
              </Link>
              <Link
                href='/contact'
                className='px-8 py-3 border-2 border-slate-400 hover:border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300'
              >
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className='flex gap-4 pt-4'>
              {social.github && (
                <a
                  href={social.github.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-white transition-colors'
                  title='GitHub'
                >
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-white transition-colors'
                  title='LinkedIn'
                >
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.949v5.42h-3.554s.046-8.789 0-9.708h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.568zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.95-1.71 1.179 0 1.914.755 1.938 1.71 0 .951-.759 1.71-1.973 1.71zm1.581 11.597H3.757V9.044h3.161v11.408zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
                  </svg>
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-white transition-colors'
                  title='Twitter'
                >
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className='hidden md:block'>
            <div className='relative'>
              <div className='absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur-3xl opacity-20'></div>
              <div className='relative bg-linear-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-700 h-96 flex items-center justify-center'>
                <div className='text-center text-slate-400'>
                  <div className='text-6xl mb-4'>📊</div>
                  <p className='text-lg'>Profile Image</p>
                  <p className='text-sm mt-2'>Add your image to</p>
                  <p className='text-xs text-slate-500'>public/images/profile.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-3 md:grid-cols-6 gap-6 mt-20 pt-20 border-t border-slate-700'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-400'>5+</div>
            <p className='text-slate-400 text-sm mt-2'>Years Experience</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-400'>18+</div>
            <p className='text-slate-400 text-sm mt-2'>Projects</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-400'>$4.1M</div>
            <p className='text-slate-400 text-sm mt-2'>Total Impact</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-400'>23+</div>
            <p className='text-slate-400 text-sm mt-2'>Models Deployed</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-400'>8.5K</div>
            <p className='text-slate-400 text-sm mt-2'>LinkedIn</p>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-400'>450★</div>
            <p className='text-slate-400 text-sm mt-2'>GitHub Stars</p>
          </div>
        </div>
      </div>
    </section>
  )
}
