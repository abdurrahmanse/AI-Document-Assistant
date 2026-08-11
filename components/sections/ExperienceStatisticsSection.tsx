import React from 'react'

interface ExperienceStatisticsSectionProps {
  jobsLength: number
}

export function ExperienceStatisticsSection({ jobsLength }: ExperienceStatisticsSectionProps) {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 border-b border-slate-800'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-16 text-center'>Career Overview</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative bg-slate-900 rounded-lg p-6'>
                <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                  
                </div>
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
                <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                  
                </div>
                <p className='text-4xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                  {jobsLength}
                </p>
                <p className='text-slate-400 text-sm mt-2'>Companies</p>
              </div>
            </div>
          </div>

          <div className='text-center group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative bg-slate-900 rounded-lg p-6'>
                <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                  
                </div>
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
                <div className='mb-2 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300'>
                  
                </div>
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
  )
}
