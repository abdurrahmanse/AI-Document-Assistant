import { cn } from '@/utils'
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
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200'

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-50',
    outline: 'border border-slate-500 text-slate-300 hover:bg-slate-800/50 disabled:opacity-50',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/50 disabled:opacity-50',
  }

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm rounded',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
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
