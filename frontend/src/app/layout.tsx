import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
const roboto = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'ClubsConnect',
  description: 'Explore a centralized hub for clubs',
  icons: {
    icon: '/static/rabbit.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute='data-theme' defaultTheme='system' enableSystem>
          <div className='flex flex-col min-h-screen bg-background'>
            <Navbar />
            <main className='flex-1 flex items-center justify-center bg-background'>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
