'use client'

import React from 'react'
import { Container } from '@/components/ui'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface Publication {
  id: string
  title: string
  authors: Array<{ name: string; position: string; affiliation?: string }>
  publishedDate: string
  journal: { name: string; issn?: string }
  volume?: number
  issue?: number
  pages?: string
  doi: string
  url: string
  citations: number
  description: string
  keywords: string[]
  impact: string
}

interface PublicationListSectionProps {
  publications: Publication[]
}

export function PublicationListSection({ publications }: PublicationListSectionProps) {
  return (
    <section className='py-24 bg-background'>
      <Container size='xl'>
        <div className='flex flex-col border-t border-border'>
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-16 border-b border-border hover:bg-accent/50 transition-colors px-4 -mx-4 sm:mx-0 sm:px-0'
            >
              {/* Meta */}
              <div className='md:col-span-3 flex flex-col gap-4'>
                <div className='text-sm text-muted-foreground'>
                  {new Date(pub.publishedDate).getFullYear()}
                </div>
                <div className='text-xs font-mono uppercase tracking-widest text-muted-foreground'>
                  Citations: {pub.citations}
                </div>
              </div>

              {/* Content */}
              <div className='md:col-span-8 flex flex-col gap-6'>
                <h3 className='text-2xl font-bold tracking-tight text-foreground'>
                  {pub.title}
                </h3>
                
                <p className='text-lg leading-relaxed text-muted-foreground'>
                  {pub.description}
                </p>

                <div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground'>
                  {pub.authors.map((author, index) => (
                    <React.Fragment key={index}>
                      <span className={author.position === 'Lead Author' || author.position === 'Solo Author' ? 'text-foreground font-medium' : ''}>
                        {author.name}
                      </span>
                      {index < pub.authors.length - 1 && <span>&bull;</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className='text-sm text-muted-foreground italic mt-2'>
                  {pub.journal.name} {pub.volume && `Vol. ${pub.volume}`} {pub.issue && `Issue ${pub.issue}`}
                </div>
              </div>

              {/* Action */}
              <div className='md:col-span-1 flex md:justify-end mt-4 md:mt-0'>
                <Link
                  href={pub.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
                >
                  View Paper
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
