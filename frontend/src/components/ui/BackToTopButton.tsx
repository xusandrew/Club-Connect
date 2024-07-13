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
      className='fixed bottom-6 right-6 inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:text-gray-600 hover:bg-white transition-colors duration-300'
    >
      <ArrowUpIcon className='mr-2 h-4 w-4' />
      top
    </button>
  )
}
