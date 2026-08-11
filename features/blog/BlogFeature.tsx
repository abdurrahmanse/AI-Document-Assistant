import React from 'react'
import { PageHeroSection } from '@/components/sections/PageHeroSection'
import { BlogListSection } from '@/components/sections/BlogListSection'
import { CTASection } from '@/components/sections/CTASection'

interface BlogFeatureProps {
  data: {
    hero: { title: string; subtitle: string; description: string }
    posts: Array<any>
  }
}

export function BlogFeature({ data }: BlogFeatureProps) {
  const { hero, posts } = data

  const sortedPosts = [...posts].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

  return (
    <main className='bg-background min-h-screen'>
      <PageHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
      />
      
      <BlogListSection posts={sortedPosts} />
      
      <CTASection
        heading="Never miss an update"
        description="I occasionally share my thoughts on machine learning, data engineering, and the technical challenges I face in production environments."
        primaryButtonText="Subscribe via RSS"
        primaryButtonUrl="/rss.xml"
        secondaryButtonText="Follow on Twitter"
        secondaryButtonUrl="https://twitter.com/masfiq"
      />
    </main>
  )
}
