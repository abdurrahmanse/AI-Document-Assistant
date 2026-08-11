import React from 'react'
import { Container } from '@/components/ui'
import ContactForm from '../forms/ContactForm'
import { ArrowUpRight } from 'lucide-react'

interface ContactMainSectionProps {
  cta: { heading: string; description: string }
  contactInfo: any
  socialLinks: Array<any>
}

export function ContactMainSection({ cta, contactInfo, socialLinks }: ContactMainSectionProps) {
  return (
    <section className='py-24 bg-background border-b border-border'>
      <Container size='xl'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24'>
          
          {/* Contact Info */}
          <div className='md:col-span-5 flex flex-col gap-16'>
            <div className='flex flex-col gap-6'>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>
                {cta.heading}
              </h2>
              <p className='text-lg leading-relaxed text-muted-foreground'>
                {cta.description}
              </p>
            </div>

            <div className='flex flex-col gap-10 border-t border-border pt-10'>
              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium tracking-widest uppercase text-muted-foreground'>
                  {contactInfo.email.label}
                </div>
                <a 
                  href={`mailto:${contactInfo.email.address}`}
                  className='text-xl md:text-2xl font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors'
                >
                  {contactInfo.email.address}
                </a>
                <div className='text-sm text-muted-foreground'>
                  Response time: {contactInfo.email.responseTime}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='text-sm font-medium tracking-widest uppercase text-muted-foreground'>
                  {contactInfo.location.label}
                </div>
                <div className='text-xl font-medium tracking-tight text-foreground'>
                  {contactInfo.location.city}, {contactInfo.location.state}
                </div>
                {contactInfo.location.remote && (
                  <div className='text-sm text-muted-foreground'>
                    Open to remote work
                  </div>
                )}
              </div>
            </div>

            <div className='flex flex-col gap-6 border-t border-border pt-10'>
              <div className='text-sm font-medium tracking-widest uppercase text-muted-foreground'>
                Social
              </div>
              <div className='flex flex-wrap gap-x-8 gap-y-4'>
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 text-base font-medium text-foreground hover:text-muted-foreground transition-colors'
                  >
                    {link.platform}
                    <ArrowUpRight className='w-4 h-4' />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='md:col-span-7 bg-accent/20 p-8 md:p-12 border border-border'>
            <ContactForm />
          </div>

        </div>
      </Container>
    </section>
  )
}
