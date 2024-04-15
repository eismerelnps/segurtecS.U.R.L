import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import NavBar from '@/lib/components/navBar/NavBar';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import './globals.css'

export const metadata: Metadata = {
  title: 'SegurtecS.U.R.L',
  description: 'Segurtec SURL servcios de seguridad, cierres de seguridad automaticos y mecanicos',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {

  const messages = useMessages();

  return (
    <html className='' lang="es">
      <link rel="icon" href="logo01.png" />
      <body className=' bg-white text-black dark:bg-carbon-50 dark:text-white-50 ' >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
