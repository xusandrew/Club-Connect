'use client'

import { ArrowUpIcon } from '../icons'

export default function ScrollTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <button
      onClick={handleScrollToTop}
      className='fixed bottom-6 right-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
    >
      <ArrowUpIcon className='mr-2 h-4 w-4' />
      Back to Top
    </button>
  )
}
