/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { ProjectFilterSection } from '@/components/sections/ProjectFilterSection'
import { ProjectGridSection } from '@/components/sections/ProjectGridSection'
import { ProjectImpactSection } from '@/components/sections/ProjectImpactSection'
import { CTASection } from '@/components/sections/CTASection'

interface ProjectsFeatureProps {
  data: {
    hero: { title: string; subtitle: string; description: string }
    filters: Array<{ id: string; name: string }>
    projects: Array<any>
  }
}

export function ProjectsFeature({ data }: ProjectsFeatureProps) {
  const { hero, filters, projects } = data
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const filteredProjects = selectedFilter === 'all' ? projects : projects.filter((p) => p.categoryId === selectedFilter)

  return (
    <main className='bg-background min-h-screen'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
      />
      
      <ProjectFilterSection
        filters={filters}
        selectedFilter={selectedFilter}
        onSelectFilter={setSelectedFilter}
      />
      
      <ProjectGridSection projects={filteredProjects} />
      
      <ProjectImpactSection projectsCount={projects.length} />
      
      <CTASection
        heading="Have an interesting project in mind?"
        description="I'm always open to discussing new opportunities and solving complex data science challenges."
        primaryButtonText="View Experience"
        primaryButtonUrl="/experience"
        secondaryButtonText="Contact Me"
        secondaryButtonUrl="/contact"
      />
    </main>
  )
}
