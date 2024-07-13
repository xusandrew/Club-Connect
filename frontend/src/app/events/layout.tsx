import ScrollTopButton from '@/components/ui/BackToTopButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='flex-grow p-6  '>{children}</div>
      <ScrollTopButton />
    </div>
  )
}
