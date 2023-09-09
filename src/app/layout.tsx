import NavBar from '@/components/navBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'

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
    <html lang="en">

      <link rel="icon" href="logo01.png" />
      <body >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
