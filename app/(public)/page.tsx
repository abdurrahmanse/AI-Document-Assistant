/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeFeature } from '@/features/home/HomeFeature'
import { aboutPage, recognitionHistory } from '@/data'

export const metadata = {
  title: aboutPage.page.title,
  description: aboutPage.page.metaDescription,
}

export default function Home() {
  const { introduction, mission, values, statistics, highlight } = aboutPage.sections
  const recognitionByYear: any = recognitionHistory.recognitionByYear
  const allAwards = recognitionByYear
    .flatMap((year: any) => year.awards.map((award: any) => ({ ...award, year: year.year })))
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const data = {
    introduction,
    mission,
    values,
    statistics,
    highlight,
    awards: allAwards,
  }

  return <HomeFeature data={data as any} />
}
