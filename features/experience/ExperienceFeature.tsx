import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { ExperienceTimelineSection } from '@/components/sections/ExperienceTimelineSection'
import { CTASection } from '@/components/sections/CTASection'

interface ExperienceFeatureProps {
  data: {
    hero: { title: string; subtitle: string; description: string }
    jobs: Array<any>
  }
}

export function ExperienceFeature({ data }: ExperienceFeatureProps) {
  const { hero, jobs } = data

  const sortedJobs = [...jobs].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

  return (
    <main className='bg-background min-h-screen'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
      />
      
      <ExperienceTimelineSection jobs={sortedJobs} />
      
      <CTASection
        heading="Ready to collaborate?"
        description="With years of experience building impactful data science solutions, I'm excited to tackle new challenges and help drive your business forward."
        primaryButtonText="View Projects"
        primaryButtonUrl="/projects"
        secondaryButtonText="Contact Me"
        secondaryButtonUrl="/contact"
      />
    </main>
  )
}
