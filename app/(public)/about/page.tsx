import { AboutFeature } from '@/features/about/AboutFeature'
import { aboutPage } from '@/data'

export const metadata = {
  title: aboutPage.page.title,
  description: aboutPage.page.metaDescription,
}

export default function AboutPage() {
  const { hero, introduction, mission, values, highlight, statistics } = aboutPage.sections

  const data = {
    hero,
    introduction,
    mission,
    values,
    highlight,
    statistics,
  }

  return <AboutFeature data={data} />
}
