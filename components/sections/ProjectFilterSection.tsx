import React from 'react'

interface ProjectFilterSectionProps {
  filters: Array<{ id: string; name: string }>
  selectedFilter: string
  onSelectFilter: (filterId: string) => void
}

export function ProjectFilterSection({ filters, selectedFilter, onSelectFilter }: ProjectFilterSectionProps) {
  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800 sticky top-20 z-30'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-wrap gap-3 justify-center'>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onSelectFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span className='inline-flex items-center gap-2'>
                
                {filter.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
