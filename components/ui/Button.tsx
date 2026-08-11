import { cn } from '@/lib/utils'
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300'

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50',
    outline: 'border border-border text-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50',
    ghost: 'text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-50',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-sm',
    md: 'px-5 py-2.5 text-base rounded-md',
    lg: 'px-8 py-4 text-lg rounded-md',
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isLoading && 'opacity-70 cursor-not-allowed',
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className='mr-2'>{icon}</span>}
      {isLoading ? <span className='animate-spin mr-2'>⟳</span> : null}
      {children}
      {icon && iconPosition === 'right' && <span className='ml-2'>{icon}</span>}
    </button>
  )
}
