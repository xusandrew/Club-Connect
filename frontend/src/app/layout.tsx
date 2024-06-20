import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
