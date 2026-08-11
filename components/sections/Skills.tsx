'use client'

import { useState } from 'react'
import { skillsPage } from '@/data'
import { Container } from '@/components/ui'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export default function Skills() {
  const { sections, skillCategories } = skillsPage
  const [expandedId, setExpandedId] = useState<string | null>(skillCategories[0]?.id || null)

  return (
    <section className='py-24 bg-background border-y border-border'>
      <Container size='xl'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24'>
          {/* Header Area */}
          <div className='lg:col-span-5 space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter'>
              Core<br />Capabilities
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              {sections.hero.description}
            </p>
          </div>

          {/* Progressive Disclosure List */}
          <div className='lg:col-span-7 flex flex-col'>
            {skillCategories.map((category) => {
              const isExpanded = expandedId === category.id

              return (
                <div 
                  key={category.id} 
                  className='border-b border-border last:border-0'
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : category.id)}
                    className='w-full py-6 flex items-center justify-between text-left group transition-colors'
                  >
                    <h3 className={`text-2xl font-medium tracking-tight transition-colors ${isExpanded ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                      {category.categoryName}
                    </h3>
                    <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-foreground text-background' : 'bg-transparent text-muted-foreground group-hover:text-foreground'}`}>
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='overflow-hidden'
                      >
                        <div className='pb-8 pt-2'>
                          <p className='text-muted-foreground mb-6 max-w-xl'>
                            {category.description}
                          </p>
                          <div className='flex flex-wrap gap-3'>
                            {category.skills.map((skill) => (
                              <span 
                                key={skill.name}
                                className='px-4 py-2 border border-border rounded-sm text-sm font-medium tracking-wide text-foreground bg-accent/30'
                              >
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
