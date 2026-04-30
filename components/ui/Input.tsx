import { cn } from '@/utils'
import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export function Input({ className, label, error, helperText, icon, iconPosition = 'left', ...props }: InputProps) {
  const baseClasses =
    'w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50'

  return (
    <div className='w-full'>
      {label && <label className='block text-sm font-medium text-slate-300 mb-2 capitalize'>{label}</label>}
      <div className='relative'>
        {icon && iconPosition === 'left' && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'>{icon}</div>
        )}
        <input
          className={cn(
            baseClasses,
            className,
            !!icon && iconPosition === 'left' && 'pl-10',
            error && 'border-red-500',
          )}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400'>{icon}</div>
        )}
      </div>
      {error && <p className='mt-1 text-sm text-red-400'>{error}</p>}
      {helperText && !error && <p className='mt-1 text-sm text-slate-400'>{helperText}</p>}
    </div>
  )
}
