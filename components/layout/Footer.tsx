'use client'

import { Container } from '@/components/ui'
import { personalData } from '@/data'
import Link from 'next/link'
import { ArrowUpRight, Code2, Briefcase, Hash, MessageSquare, Mail } from 'lucide-react'

const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase()
  if (p.includes('github')) return <Code2 className="w-4 h-4" />
  if (p.includes('linkedin')) return <Briefcase className="w-4 h-4" />
  if (p.includes('twitter') || p.includes('x')) return <Hash className="w-4 h-4" />
  return <MessageSquare className="w-4 h-4" />
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { contact } = personalData

  return (
    <footer className='border-t border-border bg-background pt-24 pb-12'>
      <Container size='xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mb-24'>
          <div>
            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6'>
              Let&apos;s build<br/>something great.
            </h2>
            <a
              href={`mailto:${contact.email}`}
              className='inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors group'
            >
              <Mail className='w-6 h-6' />
              {contact.email}
              <ArrowUpRight className='w-6 h-6 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </a>
          </div>
          
          <div className='grid grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold tracking-wider uppercase text-muted-foreground'>Socials</h3>
              <div className='flex flex-col gap-2'>
                {Object.entries(personalData.social).map(([platform, social]: [string, any]) => (
                  <a
                    key={platform}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors capitalize'
                  >
                    {getSocialIcon(platform)}
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold tracking-wider uppercase text-muted-foreground'>Navigation</h3>
              <div className='flex flex-col gap-2'>
                <Link href='/about' className='text-foreground hover:text-muted-foreground transition-colors'>About</Link>
                <Link href='/projects' className='text-foreground hover:text-muted-foreground transition-colors'>Projects</Link>
                <Link href='/research' className='text-foreground hover:text-muted-foreground transition-colors'>Research</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-sm text-muted-foreground'>
          <p>© {currentYear} S M Masfequier Rahman Swapno. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='hover:text-foreground transition-colors'
          >
            Back to Top
          </button>
        </div>
      </Container>
    </footer>
  )
}
