/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { ContactMainSection } from '@/components/sections/ContactMainSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'

interface ContactFeatureProps {
  data: {
    hero: { title: string; subtitle: string; description: string }
    cta: { heading: string; description: string }
    contactInfo: any
    socialLinks: Array<any>
  }
}

export function ContactFeature({ data }: ContactFeatureProps) {
  const { hero, cta, contactInfo, socialLinks } = data

  return (
    <main className='bg-slate-900 min-h-screen'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        badge={{ icon: 'message', text: 'Get in Touch' }}
      />
      
      <ContactMainSection
        cta={cta}
        contactInfo={contactInfo}
        socialLinks={socialLinks}
      />
      
      <FAQSection />
      
      <CTASection
        heading="Let's Create Something Amazing Together"
        description="Whether you have a specific project in mind or just want to chat about data science, I'm here to help."
        primaryButtonText="View Experience"
        primaryButtonUrl="/experience"
        secondaryButtonText="Browse Projects"
        secondaryButtonUrl="/projects"
      />
    </main>
  )
}
