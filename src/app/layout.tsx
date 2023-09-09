import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/navBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
