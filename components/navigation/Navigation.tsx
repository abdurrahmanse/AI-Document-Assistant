'use client'

import { Container, SiteIcon } from '@/components/ui'
import { useScroll, useToggle } from '@/hooks'
import { ROUTES } from '@/utils'
import Link from 'next/link'

export default function Navigation() {
  const { isAtTop } = useScroll()
  const [mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen] = useToggle(false)

  const navLinks = [
    { label: 'Home', href: ROUTES.HOME, icon: 'sparkles' as const },
    { label: 'About', href: ROUTES.ABOUT, icon: 'users' as const },
    { label: 'Experience', href: ROUTES.EXPERIENCE, icon: 'briefcase' as const },
    { label: 'Projects', href: ROUTES.PROJECTS, icon: 'rocket' as const },
    { label: 'Skills', href: ROUTES.SKILLS, icon: 'layers' as const },
    { label: 'Publications', href: ROUTES.PUBLICATIONS, icon: 'book' as const },
    { label: 'Contact', href: ROUTES.CONTACT, icon: 'message' as const },
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
            <div className='w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all'>
              <SiteIcon name='sparkles' className='h-5 w-5' />
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
                <span className='mr-2 inline-flex align-middle text-cyan-400'>
                  <SiteIcon name={link.icon} className='h-4 w-4' />
                </span>
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
            <SiteIcon name={mobileMenuOpen ? 'x' : 'menu'} className='h-6 w-6' />
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
                <span className='mr-2 inline-flex align-middle text-cyan-400'>
                  <SiteIcon name={link.icon} className='h-4 w-4' />
                </span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  )
}
