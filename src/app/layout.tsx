import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proxium',
  description: 'Crafting the Web, Elevating Your Brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className='overflow-hidden'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
