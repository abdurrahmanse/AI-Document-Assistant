import React from 'react'

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: 'blue-cyan' | 'purple-pink' | 'green-emerald' | 'amber-orange'
}

export function GradientText({ gradient = 'blue-cyan', children, className, ...props }: GradientTextProps) {
  const gradients = {
    'blue-cyan': 'bg-gradient-to-r from-blue-400 to-cyan-400',
    'purple-pink': 'bg-gradient-to-r from-purple-400 to-pink-400',
    'green-emerald': 'bg-gradient-to-r from-green-400 to-emerald-400',
    'amber-orange': 'bg-gradient-to-r from-amber-400 to-orange-400',
  }

  return (
    <span className={`bg-clip-text text-transparent ${gradients[gradient]} ${className}`} {...props}>
      {children}
    </span>
  )
}
