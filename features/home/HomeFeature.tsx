import React from 'react'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import { CTASection } from '@/components/sections/CTASection'

export function HomeFeature() {
  return (
    <main className='overflow-hidden bg-background'>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <CTASection
        heading="Ready to collaborate?"
        description="I'm available for consulting projects, speaking engagements, and full-time opportunities to help solve complex data science challenges."
        primaryButtonText="Get in Touch"
        primaryButtonUrl="/contact"
        secondaryButtonText="View My Work"
        secondaryButtonUrl="/projects"
      />
    </main>
  )
}
