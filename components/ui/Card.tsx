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
  const baseClasses = 'rounded-md border border-border bg-card text-card-foreground overflow-hidden'

  const hoverClasses = hoverable
    ? 'transition-all duration-500 hover:border-foreground/20 hover:bg-accent/50'
    : ''

  const clickableClasses = clickable ? 'cursor-pointer' : ''
  const elevatedClasses = elevated ? 'shadow-lg shadow-black/10' : ''

  return (
    <div className={cn(baseClasses, hoverClasses, clickableClasses, elevatedClasses, className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('border-b border-border px-6 py-5', className)} {...props}>
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
    <div className={cn('border-t border-border px-6 py-5', className)} {...props}>
      {children}
    </div>
  )
}
