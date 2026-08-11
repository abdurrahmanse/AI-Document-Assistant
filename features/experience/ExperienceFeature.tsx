/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { ExperienceTimelineSection } from '@/components/sections/ExperienceTimelineSection'
import { ExperienceStatisticsSection } from '@/components/sections/ExperienceStatisticsSection'
import { CoreCompetenciesSection } from '@/components/sections/CoreCompetenciesSection'
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
    <main className='overflow-hidden'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
      />
      
      {/* We add description for experience hero manually here or update PageHeroSection to accept description.
          Since PageHeroSection doesn't currently accept description, let's just wrap it or extend PageHeroSection later.
          Let's assume PageHeroSection can be extended or we just inline the description for now.
          Actually, I will just extend PageHeroSection to accept description. */}
          
      <ExperienceTimelineSection jobs={sortedJobs} />
      <ExperienceStatisticsSection jobsLength={jobs.length} />
      <CoreCompetenciesSection />
      
      <CTASection
        heading="Ready to work together?"
        description="With years of experience building impactful data science solutions, I'm excited to tackle new challenges and help drive your business forward."
        primaryButtonText="View Projects"
        primaryButtonUrl="/projects"
        secondaryButtonText="Contact Me"
        secondaryButtonUrl="/contact"
      />
    </main>
  )
}
