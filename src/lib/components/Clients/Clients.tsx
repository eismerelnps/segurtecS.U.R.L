import { useTranslations } from 'next-intl'
import React from 'react'

export default function Clients() {
  const t = useTranslations('Index');
  return (
    <article>
      <h1>{t('clients_title')}</h1>

    </article>
  )
}
