/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeFeature } from '@/features/home/HomeFeature'
import { aboutPage, recognitionHistory } from '@/data'

export const metadata = {
  title: aboutPage.page.title,
  description: aboutPage.page.metaDescription,
}

export default function Home() {
  return <HomeFeature />
}
