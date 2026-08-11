import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { PublicationListSection } from '@/components/sections/PublicationListSection'
import { CTASection } from '@/components/sections/CTASection'

interface ResearchFeatureProps {
  data: {
    hero: { title: string; subtitle: string; description: string }
    publications: Array<any>
  }
}

export function ResearchFeature({ data }: ResearchFeatureProps) {
  const { hero, publications } = data

  const sortedPublications = [...publications].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

  return (
    <main className='bg-background min-h-screen'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
      />
      
      <PublicationListSection publications={sortedPublications} />
      
      <CTASection
        heading="Discuss research ideas?"
        description="I'm always open to discussing new research directions and how academic findings translate to industry applications."
        primaryButtonText="Contact Me"
        primaryButtonUrl="/contact"
        secondaryButtonText="View Experience"
        secondaryButtonUrl="/experience"
      />
    </main>
  )
}
