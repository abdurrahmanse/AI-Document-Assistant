export default function Loading() {
  return (
    <div className='flex min-h-[50vh] items-center justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <div className='h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500' />
        <p className='text-sm text-slate-400'>Loading...</p>
      </div>
    </div>
  )
}
