'use client'

import React from 'react'
import { Container } from '@/components/ui'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  slug: string
  category: string
  excerpt: string
  publishedDate: string
  readTime: string
  tags: string[]
}

interface BlogListSectionProps {
  posts: BlogPost[]
}

export function BlogListSection({ posts }: BlogListSectionProps) {
  return (
    <section className='py-24 bg-background'>
      <Container size='xl'>
        <div className='flex flex-col border-t border-border'>
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-16 border-b border-border hover:bg-accent/50 transition-colors px-4 -mx-4 sm:mx-0 sm:px-0'
            >
              {/* Meta */}
              <div className='md:col-span-3 flex flex-col gap-4'>
                <div className='text-sm text-muted-foreground'>
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <div className='text-xs font-mono uppercase tracking-widest text-muted-foreground'>
                  {post.readTime} Read
                </div>
              </div>

              {/* Content */}
              <div className='md:col-span-8 flex flex-col gap-6'>
                <h3 className='text-2xl font-bold tracking-tight text-foreground'>
                  {post.title}
                </h3>
                
                <p className='text-lg leading-relaxed text-muted-foreground'>
                  {post.excerpt}
                </p>

                <div className='flex flex-wrap items-center gap-2'>
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className='text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className='md:col-span-1 flex md:justify-end mt-4 md:mt-0'>
                <Link
                  href={`/blog/${post.slug}`}
                  className='inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
                >
                  Read
                  <ArrowUpRight className='w-4 h-4' />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
