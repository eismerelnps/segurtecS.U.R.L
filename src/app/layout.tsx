import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import NavBar from '@/components/navBar/NavBar'
import './globals.css'

export const metadata: Metadata = {
  title: 'SegurtecS.U.R.L',
  description: 'Segurtec SURL servcios de seguridad, cierres de seguridad automaticos y mecanicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className=' bg-white text-black dark:bg-carbon-50 dark:text-white-50' lang="es">

      <link rel="icon" href="logo01.png" />
      <body  >
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
