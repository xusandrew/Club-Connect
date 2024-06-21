'use client'
import { Category } from '@prisma/client'
import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'

interface FilterProps {
  categories: Category[]
}

export default function Filter({ categories }: FilterProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const { replace } = useRouter()

  function handleFilter(type: string) {
    const params = new URLSearchParams(searchParams)

    if (type) {
      params.set('category', type)
    } else {
      params.delete('category')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='bg-background p-4 rounded-lg flex-col align-middle'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl font-semibold '>Categories</h3>
      </div>
      <div className='grid gap-3 mt-20'>
        {categories.map((category, index) => {
          const isActive = searchParams.get('category') === category.type
          return (
            <button
              onClick={() => handleFilter(category.type)}
              key={index}
              className='flex items-center gap-2 flex-col md:flex-row justify-center md:justify-start'
            >
              <h1
                className={clsx('text-gray-500', {
                  'text-yellow-500': isActive,
                })}
              >
                {category.type}
              </h1>
            </button>
          )
        })}
        <button
          onClick={() => handleFilter('')}
          className='rounded-lg bg-black px-4 py-2 flex items-center gap-2 justify-center md:justify-start text-white hover:text-gray-600 hover:bg-white transition-colors duration-300'
        >
          reset
        </button>
      </div>
    </div>
  )
}
