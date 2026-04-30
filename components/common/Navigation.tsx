'use client'

import { Container } from '@/components/ui'
import { useScroll, useToggle } from '@/hooks'
import { ROUTES } from '@/utils'
import Link from 'next/link'

export default function Navigation() {
  const { isAtTop } = useScroll()
  const [mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen] = useToggle(false)

  const navLinks = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Experience', href: ROUTES.EXPERIENCE },
    { label: 'Projects', href: ROUTES.PROJECTS },
    { label: 'Skills', href: ROUTES.SKILLS },
    { label: 'Publications', href: ROUTES.PUBLICATIONS },
    { label: 'Contact', href: ROUTES.CONTACT },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        !isAtTop ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50' : 'bg-transparent'
      }`}
    >
      <Container size='xl'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo */}
          <Link href={ROUTES.HOME} className='flex items-center gap-2 group'>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all'>
              SM
            </div>
            <span className='font-bold text-lg hidden sm:inline'>Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-all duration-200 text-sm'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className='lg:hidden p-2 hover:bg-slate-800/50 rounded-md transition-all'
            aria-label='Toggle navigation'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {mobileMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='lg:hidden pb-4 space-y-2 border-t border-slate-800'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-all'
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  )
}
