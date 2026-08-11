import Link from 'next/link'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-200'>
      <div className='max-w-md w-full space-y-8 text-center'>
        <h2 className='text-3xl font-extrabold text-white'>404 - Not Found</h2>
        <p className='text-slate-400'>Could not find the requested resource.</p>
        <div className='mt-8'>
          <Link href="/">
            <Button variant='primary' className='w-full'>
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
