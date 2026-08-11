import { ExperienceFeature } from '@/features/experience/ExperienceFeature'
import { experiencePage } from '@/data'

export const metadata = {
  title: experiencePage.page.title,
  description: experiencePage.page.metaDescription,
}

export default function ExperiencePage() {
  const { sections, jobs } = experiencePage

  const data = {
    hero: sections.hero,
    jobs,
  }

  return <ExperienceFeature data={data} />
}
