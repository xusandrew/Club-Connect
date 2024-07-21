'use client'
import * as React from 'react'
import { Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/data/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button size='icon' className='bg-transparent relative'>
      <Moon
        className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:fill-foreground'
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
          console.log(theme)
        }}
      />
    </Button>
  )
}
