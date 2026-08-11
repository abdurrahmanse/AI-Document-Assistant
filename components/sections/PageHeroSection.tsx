 
'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { motion } from 'motion/react'

interface PageHeroSectionProps {
  title: string
  subtitle: string
  description?: string
  badge?: {
    icon: string
    text: string
  }
  ctaText?: string
  ctaUrl?: string
}

export function PageHeroSection({ title, subtitle, description, badge, ctaText, ctaUrl }: PageHeroSectionProps) {
  return (
    <section className='pt-40 pb-24 bg-background border-b border-border'>
      <Container size='xl'>
        <div className='max-w-4xl space-y-8'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {badge && (
              <div className='inline-flex items-center px-3 py-1 mb-6 text-sm font-medium tracking-widest uppercase border border-border bg-accent/30 rounded-sm text-muted-foreground'>
                {badge.text}
              </div>
            )}
            <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8'>
              {title}
            </h1>
            <p className='text-2xl sm:text-3xl font-medium tracking-tight text-muted-foreground leading-snug max-w-2xl'>
              {subtitle}
            </p>
          </motion.div>
          
          {(description || (ctaText && ctaUrl)) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='pt-8 flex flex-col items-start gap-8'
            >
              {description && <p className='text-lg leading-relaxed text-muted-foreground max-w-2xl'>{description}</p>}
              
              {ctaText && ctaUrl && (
                <Link
                  href={ctaUrl}
                  className='inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-colors bg-foreground text-background hover:bg-foreground/90 rounded-sm'
                >
                  {ctaText}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}
