import { ProjectsFeature } from '@/features/projects/ProjectsFeature'
import { projectsPage } from '@/data'

export const metadata = {
  title: projectsPage.page.title,
  description: projectsPage.page.metaDescription,
}

export default function ProjectsPage() {
  const { sections, projects } = projectsPage

  const data = {
    hero: sections.hero,
    filters: sections.filters,
    projects,
  }

  return <ProjectsFeature data={data} />
}
