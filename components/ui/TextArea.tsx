import { cn } from '@/lib/utils'
import React from 'react'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  rows?: number
}

export function TextArea({ className, label, error, helperText, rows = 4, ...props }: TextAreaProps) {
  const baseClasses =
    'w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 resize-none'

  return (
    <div className='w-full'>
      {label && <label className='block text-sm font-medium text-slate-300 mb-2 capitalize'>{label}</label>}
      <textarea rows={rows} className={cn(baseClasses, className, error && 'border-red-500')} {...props} />
      {error && <p className='mt-1 text-sm text-red-400'>{error}</p>}
      {helperText && !error && <p className='mt-1 text-sm text-slate-400'>{helperText}</p>}
    </div>
  )
}
