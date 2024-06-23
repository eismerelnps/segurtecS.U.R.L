import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import NavBar from '@/lib/components/navBar/NavBar';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import './globals.css'

export const metadata: Metadata = {
  title: 'SegurTec S.U.R.L',
  description: 'Servicios de seguridad, electricidad, corrientes débiles, controles de acceso, cierres mecánicos y automáticos para tu hogar, negocio o empresa.',
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
      <body className=' bg-white dark:bg-black  dark:bg-carbon-50 text-primary-950 dark:text-primary-50 ' >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}