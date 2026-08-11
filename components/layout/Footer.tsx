'use client'

import { Container } from '@/components/ui'
import { personalData } from '@/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { contact } = personalData

  return (
    <footer className='border-t border-slate-800 bg-slate-950'>
      <Container size='xl'>
        <div className='py-12'>
          <div className='mt-12 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:grid-cols-3'>
            <div>
              <p className='mb-2 text-xs uppercase tracking-[0.2em] text-slate-500'>Email</p>
              <a
                href={`mailto:${contact.email}`}
                className='break-all text-slate-300 transition-colors hover:text-blue-400'
              >
                <span className='mr-2 inline-flex align-middle text-blue-400'>
                  
                </span>
                {contact.email}
              </a>
            </div>
            <div>
              <p className='mb-2 text-xs uppercase tracking-[0.2em] text-slate-500'>Phone</p>
              <a href={`tel:${contact.phone}`} className='text-slate-300 transition-colors hover:text-blue-400'>
                <span className='mr-2 inline-flex align-middle text-blue-400'>
                  
                </span>
                {contact.phone}
              </a>
            </div>
            <div>
              <p className='mb-2 text-xs uppercase tracking-[0.2em] text-slate-500'>Location</p>
              <p className='text-slate-300 flex items-center gap-2'>
                
                {contact.location.displayText}
              </p>
            </div>
          </div>

          <div className='my-10 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent' />

          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <div className='text-sm text-slate-400'>
              <p>© {currentYear} S M Masfequier Rahman Swapno. All rights reserved.</p>
              <p className='mt-1 text-slate-500 flex items-center gap-2'>
                 Crafted with precision and care.
              </p>
            </div>

            <div className='flex flex-wrap gap-5 text-sm'>
              <a href='#' className='text-slate-400 transition-colors hover:text-slate-200'>
                Privacy Policy
              </a>
              <a href='#' className='text-slate-400 transition-colors hover:text-slate-200'>
                Terms of Service
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white'
              >
                <span className='mr-2 inline-flex align-middle text-blue-400'>
                  
                </span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
