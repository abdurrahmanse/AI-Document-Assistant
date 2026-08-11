import { BlogFeature } from '@/features/blog/BlogFeature'
import { blogPage } from '@/data/pages/08-blog'

export const metadata = {
  title: blogPage.page.title,
  description: blogPage.page.metaDescription,
}

export default function BlogPage() {
  const { hero } = blogPage.sections
  const { posts } = blogPage

  const data = {
    hero,
    posts: posts as unknown as any[], // Type casting to bypass strict types for now
  }

  return <BlogFeature data={data} />
}
