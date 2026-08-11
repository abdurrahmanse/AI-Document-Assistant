import React from 'react'
import Hero from '@/components/sections/Hero'
import { IntroductionSection } from '@/components/sections/IntroductionSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { CoreValuesSection } from '@/components/sections/CoreValuesSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Skills from '@/components/sections/Skills'
import { HighlightSection } from '@/components/sections/HighlightSection'
import { StatisticsSection } from '@/components/sections/StatisticsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { CTASection } from '@/components/sections/CTASection'

interface HomeFeatureProps {
  data: {
    introduction: { heading: string; content: string }
    mission: { heading: string; content: string }
    values: Array<{ title: string; description: string; icon: string }>
    highlight: { heading: string; items: string[] }
    statistics: { heading: string; stats: Array<{ number: string; label: string }> }
    awards: Array<{ title: string; date: string; description?: string; year: number }>
  }
}

export function HomeFeature({ data }: HomeFeatureProps) {
  const { introduction, mission, values, highlight, statistics, awards } = data

  return (
    <main className='overflow-hidden'>
      <Hero />
      <IntroductionSection heading={introduction.heading} content={introduction.content} />
      <MissionSection heading={mission.heading} content={mission.content} />
      <CoreValuesSection values={values} />
      <FeaturedProjects />
      <Skills />
      <HighlightSection heading={highlight.heading} items={highlight.items} />
      <StatisticsSection heading={statistics.heading} stats={statistics.stats} />
      <AwardsSection awards={awards} />
      <CTASection
        heading="Ready to discuss your next project?"
        description="I'm available for consulting projects, speaking engagements, and full-time opportunities to help solve complex data science challenges."
        primaryButtonText="Get in Touch"
        primaryButtonUrl="/contact"
        secondaryButtonText="View My Work"
        secondaryButtonUrl="/projects"
      />
    </main>
  )
}
