'use client'

import { Container } from '@/components/ui'
import { personalData } from '@/data'
import { ROUTES, formatLabel } from '@/utils'
import Link from 'next/link'

const footerLinks = {
  Quick: [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Projects', href: ROUTES.PROJECTS },
  ],
  Professional: [
    { label: 'Experience', href: ROUTES.EXPERIENCE },
    { label: 'Skills', href: ROUTES.SKILLS },
    { label: 'Publications', href: ROUTES.PUBLICATIONS },
  ],
  Connect: [
    { label: 'Contact', href: ROUTES.CONTACT },
    { label: 'GitHub', href: personalData.social.github?.url || 'https://github.com' },
    { label: 'LinkedIn', href: personalData.social.linkedin?.url || 'https://linkedin.com' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { contact, social } = personalData

  return (
    <footer className='border-t border-slate-800 bg-slate-950'>
      <Container size='xl'>
        <div className='py-12'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
            <div className='lg:col-span-2 space-y-5'>
              <Link href={ROUTES.HOME} className='inline-flex items-center gap-3 group'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20'>
                  SM
                </div>
                <div>
                  <p className='text-white font-bold text-lg leading-tight'>S M Rahman</p>
                  <p className='text-cyan-400 text-sm'>Senior Data Scientist</p>
                </div>
              </Link>

              <p className='max-w-xl text-slate-400 leading-relaxed'>
                Building structured, measurable, and scalable digital products with data science, machine learning, and
                practical product thinking.
              </p>

              <div className='flex flex-wrap gap-3'>
                {social.github && (
                  <a
                    href={social.github.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white'
                  >
                    GitHub
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white'
                  >
                    LinkedIn
                  </a>
                )}
                {social.twitter && (
                  <a
                    href={social.twitter.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white'
                  >
                    X / Twitter
                  </a>
                )}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className='mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white'>
                  {formatLabel(category)}
                </h3>
                <ul className='space-y-3'>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className='text-slate-400 transition-colors hover:text-blue-400'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='mt-12 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:grid-cols-3'>
            <div>
              <p className='mb-2 text-xs uppercase tracking-[0.2em] text-slate-500'>Email</p>
              <a
                href={`mailto:${contact.email}`}
                className='break-all text-slate-300 transition-colors hover:text-blue-400'
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className='mb-2 text-xs uppercase tracking-[0.2em] text-slate-500'>Phone</p>
              <a href={`tel:${contact.phone}`} className='text-slate-300 transition-colors hover:text-blue-400'>
                {contact.phone}
              </a>
            </div>
            <div>
              <p className='mb-2 text-xs uppercase tracking-[0.2em] text-slate-500'>Location</p>
              <p className='text-slate-300'>{contact.location.displayText}</p>
            </div>
          </div>

          <div className='my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent' />

          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <div className='text-sm text-slate-400'>
              <p>© {currentYear} S M Masfequier Rahman Swapno. All rights reserved.</p>
              <p className='mt-1 text-slate-500'>Crafted with precision and care.</p>
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
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
