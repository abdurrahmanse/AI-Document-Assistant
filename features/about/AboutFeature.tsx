import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { BiographySection } from '@/components/sections/BiographySection'
import { CTASection } from '@/components/sections/CTASection'

interface AboutFeatureProps {
  data: {
    hero: { title: string; subtitle: string; ctaButton: { text: string; url: string } }
    introduction: { heading: string; content: string }
    mission: { heading: string; content: string }
    values: Array<{ title: string; description: string; icon: string }>
  }
}

export function AboutFeature({ data }: AboutFeatureProps) {
  const { hero, introduction, mission, values } = data

  return (
    <main className='bg-background min-h-screen'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaButton.text}
        ctaUrl={hero.ctaButton.url}
      />
      <BiographySection 
        introduction={introduction} 
        mission={mission} 
        values={values} 
      />
      <CTASection
        heading="Ready to collaborate?"
        description="I'm always interested in connecting with people who share my passion for data and solving complex problems."
        primaryButtonText="Get In Touch"
        primaryButtonUrl="/contact"
        secondaryButtonText="View My Work"
        secondaryButtonUrl="/projects"
      />
    </main>
  )
}
