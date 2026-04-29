'use client'

import { siteConfig } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { pages } = siteConfig

  const isActive = (path: string) => pathname === path

  const navLinks = pages.filter((p) => p.displayInNav).sort((a, b) => a.order - b.order)

  return (
    <nav className='sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='w-10 h-10 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>SM</span>
            </div>
            <div className='hidden sm:flex flex-col'>
              <span className='text-white font-bold leading-none'>S M Rahman</span>
              <span className='text-xs text-blue-400'>Data Scientist</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.path) ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.title}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 text-slate-300 hover:text-white transition-colors'
            aria-label='Toggle menu'
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
