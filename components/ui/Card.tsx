import { cn } from '@/lib/utils'
import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  clickable?: boolean
  elevated?: boolean
}

export function Card({
  className,
  hoverable = false,
  clickable = false,
  elevated = false,
  children,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm overflow-hidden'

  const hoverClasses = hoverable
    ? 'transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
    : ''

  const clickableClasses = clickable ? 'cursor-pointer' : ''
  const elevatedClasses = elevated ? 'shadow-xl shadow-black/50' : 'shadow-md shadow-black/20'

  return (
    <div className={cn(baseClasses, hoverClasses, clickableClasses, elevatedClasses, className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('border-b border-slate-700 px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('border-t border-slate-700 px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}
