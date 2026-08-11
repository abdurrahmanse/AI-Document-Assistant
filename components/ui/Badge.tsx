import { cn } from '@/lib/utils'
import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

export function Badge({ className, variant = 'primary', size = 'md', icon, children, ...props }: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 font-medium whitespace-nowrap tracking-wide uppercase'

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground border border-border',
    success: 'bg-emerald-950 text-emerald-400 border border-emerald-900/50',
    warning: 'bg-amber-950 text-amber-400 border border-amber-900/50',
    error: 'bg-red-950 text-red-400 border border-red-900/50',
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px] rounded-sm',
    md: 'px-2.5 py-1 text-xs rounded-sm',
    lg: 'px-3 py-1.5 text-sm rounded-md',
  }

  return (
    <span className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
      {icon && <span className='flex-shrink-0'>{icon}</span>}
      {children}
    </span>
  )
}
