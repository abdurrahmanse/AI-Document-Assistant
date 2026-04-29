'use client'

import { personalData, siteConfig } from '@/data'
import Link from 'next/link'

export default function Footer() {
  const { siteConfig: config, navigation } = siteConfig
  const { contact, social } = personalData
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-slate-950 border-t border-slate-800'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <Link href='/' className='flex items-center gap-2 group'>
              <div className='w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>SM</span>
              </div>
              <div>
                <p className='text-white font-bold leading-tight'>S M Rahman</p>
                <p className='text-xs text-blue-400'>Data Scientist</p>
              </div>
            </Link>
            <p className='text-slate-400 text-sm leading-relaxed'>
              Building intelligent solutions through data science and machine learning. 5+ years of experience
              delivering impactful results.
            </p>
            <div className='flex gap-3 pt-2'>
              {social.github && (
                <a
                  href={social.github.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300'
                  title='GitHub'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300'
                  title='LinkedIn'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.949v5.42h-3.554s.046-8.789 0-9.708h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.568zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.95-1.71 1.179 0 1.914.755 1.938 1.71 0 .951-.759 1.71-1.973 1.71zm1.581 11.597H3.757V9.044h3.161v11.408zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
                  </svg>
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300'
                  title='Twitter'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Navigation</h3>
            <ul className='space-y-3'>
              {navigation.mainMenu.slice(0, 4).map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className='text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Resources</h3>
            <ul className='space-y-3'>
              {navigation.mainMenu.slice(4, 7).map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className='text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href='mailto:contact@example.com'
                  className='text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm'
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Get in Touch</h3>
            <div className='space-y-4'>
              <div>
                <p className='text-slate-500 text-xs uppercase tracking-wider mb-1'>Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm break-all'
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <p className='text-slate-500 text-xs uppercase tracking-wider mb-1'>Phone</p>
                <a
                  href={`tel:${contact.phone}`}
                  className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className='text-slate-500 text-xs uppercase tracking-wider mb-1'>Location</p>
                <p className='text-slate-300 text-sm'>{contact.location.displayText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-linear-to-r from-transparent via-slate-700 to-transparent'></div>

        {/* Footer Bottom */}
        <div className='pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div className='text-slate-400 text-sm'>
            <p>© {currentYear} S M Masfequier Rahman Swapno. All rights reserved.</p>
            <p className='mt-2 text-slate-500'>
              Crafted with <span className='text-red-400'>❤</span> for excellence
            </p>
          </div>

          <div className='flex flex-wrap gap-6'>
            <a href='#' className='text-slate-400 hover:text-slate-300 text-sm transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='text-slate-400 hover:text-slate-300 text-sm transition-colors'>
              Terms of Service
            </a>
            <a href='#' className='text-slate-400 hover:text-slate-300 text-sm transition-colors'>
              Sitemap
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium'
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
