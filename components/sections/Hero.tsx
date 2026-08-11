'use client'

import { personalData } from '@/data/pages/01-personal'
import { Container } from '@/components/ui'
import Link from 'next/link'
import { motion, Variants } from 'motion/react'
import { ArrowRight, Brain, BookOpen } from 'lucide-react'

export default function Hero() {
  const { personal } = personalData

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <header className='relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-background'>
      <Container size='xl' className='relative z-10 w-full'>
        <motion.div 
          className='max-w-4xl mx-auto flex flex-col items-center text-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={itemVariants} className='mb-8 inline-flex items-center gap-3 bg-accent/50 px-4 py-2 rounded-full border border-border'>
            <Brain className='w-4 h-4 text-primary animate-pulse' />
            <span className='text-sm font-medium tracking-widest uppercase text-muted-foreground'>
              Data Scientist & Researcher
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8'
          >
            Engineering Intelligence<br className='hidden md:block' /> for the Future.
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className='text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12'
          >
            I am {personal.firstName} {personal.lastName}. {personal.bio}
          </motion.p>

          <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center gap-6'>
            <Link
              href='/projects'
              className='group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm text-sm font-medium transition-transform hover:-translate-y-1'
            >
              Explore Projects
              <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
            </Link>
            
            <Link
              href='/about'
              className='group inline-flex items-center gap-3 border border-border bg-transparent text-foreground px-8 py-4 rounded-sm text-sm font-medium transition-colors hover:bg-accent'
            >
              <BookOpen className='w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors' />
              Read Narrative
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </header>
  )
}
