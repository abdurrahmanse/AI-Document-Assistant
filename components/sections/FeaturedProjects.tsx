'use client'

import { projectsPage } from '@/data'
import { Container } from '@/components/ui'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function FeaturedProjects() {
  const { projects } = projectsPage
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className='py-32 bg-background'>
      <Container size='xl'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row justify-between items-end mb-24 gap-8'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-6xl font-bold tracking-tighter mb-6'>
              Selected Work
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              A selection of research-driven products and scalable machine learning systems.
            </p>
          </div>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group'
          >
            View All Projects
            <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className='space-y-32'>
          {featuredProjects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className='w-full lg:w-3/5 aspect-[4/3] bg-accent/30 rounded-sm overflow-hidden relative group'>
                <div className='absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-sm tracking-widest uppercase'>
                  Image / Visual
                </div>
                {/* When actual images are ready: 
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                */}
              </div>

              {/* Project Details */}
              <div className='w-full lg:w-2/5 flex flex-col'>
                <div className='flex items-center gap-4 mb-6 text-sm font-medium tracking-wide text-muted-foreground uppercase'>
                  <span>{project.startDate}</span>
                  <span className='w-8 h-px bg-border' />
                  <span>{project.endDate}</span>
                </div>

                <h3 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>
                  {project.title}
                </h3>
                
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-12'>
                  {project.technologies.slice(0, 4).map((tech: any) => (
                    <span
                      key={tech}
                      className='px-3 py-1 border border-border rounded-sm text-xs font-medium bg-accent/30'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href='/projects'
                  className='inline-flex items-center gap-2 text-foreground font-medium group transition-colors hover:text-muted-foreground'
                >
                  Read Case Study
                  <ArrowUpRight className='w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
