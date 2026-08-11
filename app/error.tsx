'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-200'>
      <div className='max-w-md w-full space-y-8 text-center'>
        <h2 className='text-3xl font-extrabold text-white'>Something went wrong!</h2>
        <p className='text-slate-400'>We apologize for the inconvenience. An unexpected error occurred.</p>
        <div className='mt-8'>
          <Button
            onClick={() => reset()}
            variant='primary'
            className='w-full'
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}
