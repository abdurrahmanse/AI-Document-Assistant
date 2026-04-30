import { cn } from '@/utils'
import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

export function Badge({ className, variant = 'primary', size = 'md', icon, children, ...props }: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold whitespace-nowrap'

  const variantClasses = {
    primary: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    secondary: 'bg-slate-500/20 text-slate-300 border border-slate-500/30',
    success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    error: 'bg-red-500/20 text-red-300 border border-red-500/30',
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs rounded',
    md: 'px-3 py-1.5 text-sm rounded-md',
    lg: 'px-4 py-2 text-base rounded-lg',
  }

  return (
    <span className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
      {icon && <span className='flex-shrink-0'>{icon}</span>}
      {children}
    </span>
  )
}
