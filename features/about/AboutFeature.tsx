import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { IntroductionSection } from '@/components/sections/IntroductionSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { CoreValuesSection } from '@/components/sections/CoreValuesSection'
import { HighlightSection } from '@/components/sections/HighlightSection'
import { StatisticsSection } from '@/components/sections/StatisticsSection'
import { CTASection } from '@/components/sections/CTASection'

interface AboutFeatureProps {
  data: {
    hero: { title: string; subtitle: string; ctaButton: { text: string; url: string } }
    introduction: { heading: string; content: string }
    mission: { heading: string; content: string }
    values: Array<{ title: string; description: string; icon: string }>
    highlight: { heading: string; items: string[] }
    statistics: { heading: string; stats: Array<{ number: string; label: string }> }
  }
}

export function AboutFeature({ data }: AboutFeatureProps) {
  const { hero, introduction, mission, values, highlight, statistics } = data

  return (
    <main className='overflow-hidden'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaButton.text}
        ctaUrl={hero.ctaButton.url}
      />
      <IntroductionSection heading={introduction.heading} content={introduction.content} />
      <MissionSection heading={mission.heading} content={mission.content} />
      <CoreValuesSection values={values} />
      <HighlightSection heading={highlight.heading} items={highlight.items} />
      <StatisticsSection heading={statistics.heading} stats={statistics.stats} />
      <CTASection
        heading="Ready to Work Together?"
        description="I'm always interested in connecting with people who share my passion for data and solving complex problems."
        primaryButtonText="Get In Touch"
        primaryButtonUrl="/contact"
        secondaryButtonText="View My Work"
        secondaryButtonUrl="/projects"
      />
    </main>
  )
}
