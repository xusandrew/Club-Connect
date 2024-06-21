import ScrollTopButton from '@/components/events/back-to-top-button'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='flex-grow p-6  '>{children}</div>
      <ScrollTopButton />
    </div>
  )
}
