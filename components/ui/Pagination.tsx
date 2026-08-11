import { cn } from '@/lib/utils'
import React from 'react'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const getVisiblePages = () => {
    if (totalPages <= 7) return pages
    if (currentPage <= 3) return [...pages.slice(0, 5), '...', totalPages]
    if (currentPage >= totalPages - 2) return [1, '...', ...pages.slice(-5)]
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
  }

  return (
    <nav className={cn('flex items-center justify-center gap-2', className)} aria-label='Pagination'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-2 rounded border border-slate-700 disabled:opacity-50 hover:bg-slate-700 disabled:cursor-not-allowed'
      >
        ← Prev
      </button>

      {getVisiblePages().map((page, idx) => (
        <React.Fragment key={idx}>
          {page === '...' ? (
            <span className='px-2 py-2'>...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={cn(
                'px-3 py-2 rounded border',
                currentPage === page ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-700 hover:bg-slate-700',
              )}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-2 rounded border border-slate-700 disabled:opacity-50 hover:bg-slate-700 disabled:cursor-not-allowed'
      >
        Next →
      </button>
    </nav>
  )
}
