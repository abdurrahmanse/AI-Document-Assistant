import { cn } from '@/utils'
import React from 'react'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'dark' | 'light' | 'gradient' | 'glass'
  padded?: boolean
  divider?: boolean
}

export function Section({
  background = 'dark',
  padded = true,
  divider = false,
  className,
  children,
  ...props
}: SectionProps) {
  const bgClasses = {
    dark: 'bg-slate-950',
    light: 'bg-slate-900',
    gradient: 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950',
    glass: 'bg-slate-900/50 backdrop-blur-sm border-t border-b border-slate-800',
  }

  return (
    <section
      className={cn(
        bgClasses[background],
        padded && 'py-20 px-4 sm:px-6 lg:px-8',
        divider && 'border-b border-slate-800',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
