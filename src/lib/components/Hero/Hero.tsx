import { useTranslations } from 'next-intl'
import React from 'react'

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <div className='w-full py-16 lg:py-32 h-full flex flex-col md:flex-row gap-2 lg:gap-4 px-2 lg:px-32'>
      <div className='basis-full md:basis-4/6 lg:basis-full lg:h-full flex justify-center items-center lg:px-32'>
        <h1 className=''>{t('hero_text_1')}</h1>
      </div>
      <div className='md:basis-2/6 lg:basis-full lg:h-full flex flex-col justify-center items-center gap-4 lg:pe-32'>
        <p className='p'>{t('hero_text_2')}</p>
        <div className='w-full flex items-center justify-start gap-2'>
          <button className="btn btn-xs sm:btn-sm lg:btn-md rounded-none">{t('follow_us')}</button>
          <button className="btn btn-outline btn-xs sm:btn-sm lg:btn-md  rounded-none">{t('contact_us')}</button>
        </div>
      </div>
    </div>
  )
}
