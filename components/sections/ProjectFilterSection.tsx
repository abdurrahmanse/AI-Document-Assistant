import React from 'react'
import { Container } from '@/components/ui'

interface ProjectFilterSectionProps {
  filters: Array<{ id: string; name: string }>
  selectedFilter: string
  onSelectFilter: (filterId: string) => void
}

export function ProjectFilterSection({ filters, selectedFilter, onSelectFilter }: ProjectFilterSectionProps) {
  return (
    <section className='py-8 bg-background border-b border-border sticky top-[73px] z-30'>
      <Container size='xl'>
        <div className='flex flex-wrap gap-2 md:gap-4'>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onSelectFilter(filter.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors border ${
                selectedFilter === filter.id
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-accent'
              } rounded-sm`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
