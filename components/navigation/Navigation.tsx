'use client'

import { Container, ThemeToggle } from '@/components/ui'
import { useScroll, useToggle } from '@/hooks'
import { ROUTES } from '@/lib/utils'
import Link from 'next/link'
import { Menu, X, Home, User, Microscope, Briefcase, FolderCode, Send } from 'lucide-react'

export default function Navigation() {
  const { isAtTop } = useScroll()
  const [mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen] = useToggle(false)

  const navLinks = [
    { label: 'About', href: ROUTES.ABOUT, icon: <User className="w-4 h-4" /> },
    { label: 'Research', href: ROUTES.RESEARCH, icon: <Microscope className="w-4 h-4" /> },
    { label: 'Experience', href: ROUTES.EXPERIENCE, icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Projects', href: ROUTES.PROJECTS, icon: <FolderCode className="w-4 h-4" /> },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${!isAtTop ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
        }`}
    >
      <Container size='xl'>
        <div className='flex items-center justify-between'>
          {/* Brand */}
          <div className='flex-1 flex justify-start'>
            <Link href={ROUTES.HOME} className='group flex items-center gap-3'>
              <div className='w-8 h-8 rounded-sm bg-foreground flex items-center justify-center text-background font-bold tracking-tighter transition-transform group-hover:scale-95'>
                M.
              </div>
              <span className='font-bold text-lg tracking-tight hidden sm:block'>Masfiqur</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex shrink-0 items-center gap-6'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm font-bold flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className='hidden lg:flex flex-1 justify-end items-center gap-4'>
            <ThemeToggle />
            <Link 
              href={ROUTES.CONTACT} 
              className='text-sm font-bold flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors'
            >
              Get in Touch
              <Send className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className='lg:hidden flex-1 flex justify-end items-center gap-3'>
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className='p-2 text-foreground hover:bg-accent rounded-sm transition-colors'
              aria-label='Toggle navigation'
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
            }`}
        >
          <div className='flex flex-col gap-4 py-4 border-t border-border'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-lg font-bold flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <Link 
              href={ROUTES.CONTACT} 
              className='text-lg font-bold flex items-center gap-3 text-primary hover:text-primary/80 transition-colors mt-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              <Send className="w-5 h-5" />
              Get in Touch
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}
