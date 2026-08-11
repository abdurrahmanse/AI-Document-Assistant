import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { ContactMainSection } from '@/components/sections/ContactMainSection'
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
    <main className='bg-background min-h-screen'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
      />
      
      <ContactMainSection
        cta={cta}
        contactInfo={contactInfo}
        socialLinks={socialLinks}
      />
      
      <CTASection
        heading="Explore my work"
        description="Not ready to chat just yet? Feel free to browse through my projects and research to see how I approach problem solving."
        primaryButtonText="View Projects"
        primaryButtonUrl="/projects"
        secondaryButtonText="Read Research"
        secondaryButtonUrl="/research"
      />
    </main>
  )
}
