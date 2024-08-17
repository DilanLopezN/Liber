import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Navbar from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsButton'

const serrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Liber Parafusos',
  description: 'Empresa especializada em parafusos'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${serrat.className} m-0 p-0 w-full h-full box-border `}>
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
