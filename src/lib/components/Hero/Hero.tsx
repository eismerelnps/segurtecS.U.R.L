import { useTranslations } from 'next-intl'
import React from 'react'

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <div className='w-full h-screen flex flex-row'>
      <div className='basis-full'>
        <h1>{t('hero_text_1')}</h1>
      </div>
      <div className='basis-full'>
        <h2>{t('hero_text_2')}</h2>
      </div>
    </div>
  )
}
