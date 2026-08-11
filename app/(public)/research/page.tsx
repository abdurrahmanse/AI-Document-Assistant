import { ResearchFeature } from '@/features/research/ResearchFeature'
import { publicationsPage } from '@/data/pages/07-publications'

export const metadata = {
  title: publicationsPage.page.title,
  description: publicationsPage.page.metaDescription,
}

export default function ResearchPage() {
  const { hero } = publicationsPage.sections
  const { publications } = publicationsPage

  const data = {
    hero,
    publications: publications as unknown as any[], // Type casting to bypass strict types for now
  }

  return <ResearchFeature data={data} />
}
