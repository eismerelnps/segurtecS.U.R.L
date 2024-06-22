import { francois_one } from '@/lib/core/fonts/francois-one';
import { quicksand } from '@/lib/core/fonts/quicksand';
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <div className='hero_background w-full h-full lg:h-dvh flex flex-col gap-8 sm:flex-row pt-24 px-[5%] lg:px-[8%] lg:py-[5%] xl:px-[5%] xl:pt-[10%] overflow-hidden'>
      <div className='basis-full sm:basis-1/2 lg:basis-full lg:h-full flex flex-col justify-center items-start lg:gap-2 relative z-50'>
        <div>
          <h3 className={`${quicksand.className} font-bold text-primary-950 dark:text-primary-50`}>{t('hero_text_1')}</h3>
          <h3 className={`${francois_one.className} text-primary-950 dark:text-red-100 `}>{t('hero_text_1_1')}</h3>
          <h1 className={`${quicksand.className} font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-primary-900 dark:to-white `}>{t('hero_text_1_2')}</h1>
        </div>
        <div>
          <p className={`${francois_one.className} opacity-60 mb-[2.625rem] text-[0.9375rem] leading-5 pr-1 md:w-11/12 md:pr-0 lg:pr-4 lg:text-xl 2xl:text-xl 2xl:leading-[1.875rem] lg:mb-11 2xl:pr-4`}>{t('hero_text_3')}</p>
        </div>
        <div className='w-full flex items-center justify-start gap-2'>
          <button className="btn btn-xs sm:btn-sm lg:btn-md rounded-s-xl">{t('follow_us')}</button>
          <button className="btn btn-outline btn-xs sm:btn-sm lg:btn-md  rounded-e-xl">{t('contact_us')}</button>
        </div>
      </div>
      <div className=' relative basis-full sm:basis-1/2 lg:basis-full lg:h-full flex flex-col justify-center items-center gap-4 z-0'>
        <div className='absolute bottom-0 sm:inset-0 md:left-44 md:top-0 lg:left-96 lg:-top-0 flex flex-col gap-4 lg:gap-12 justify-center items-center rotate-45'>
          <div className="flex gap-4 lg:gap-12 ">
            <div className='rounded-3xl size-44 lg:size-[24rem] bg-gradient-to-br from-red-500 via-primary-600 to-primary-900 dark:from-primary-800 dark:via-primary-600 dark:to-white opacity-5 md:opacity-20'></div>
            <div className='rounded-3xl size-44 lg:size-[24rem] bg-gradient-to-bl from-red-500 via-primary-600 to-primary-950 dark:from-primary-100 dark:via-primary-600 dark:to-primary-100 opacity-5 md:opacity-20'></div>
            <div className='rounded-3xl size-44 lg:size-[24rem] bg-gradient-to-bl from-red-500 via-primary-600 to-primary-950 dark:from-primary-100 dark:via-primary-600 dark:to-primary-100 opacity-5 md:opacity-20'></div>

          </div>
          <div className="flex gap-4 lg:gap-12">
            <div className='rounded-3xl size-44 lg:size-[24rem] bg-gradient-to-tl from-red-100 via-primary-200 to-primary-200 dark:from-primary-900 dark:via-primary-900 dark:to-primary-950 opacity-20 sm:opacity-55 z-0'></div>
            <div className='rounded-3xl size-44 lg:size-[24rem] bg-gradient-to-tl from-red-100 via-primary-200 to-primary-200 dark:from-primary-900 dark:via-primary-900 dark:to-primary-950 opacity-20 sm:opacity-55 z-0'></div>

          </div>
        </div>
      </div>
    </div>
  )
}


//bg-gradient-to-bl from-red-500 via-primary-600 to-black dark:from-primary-800 dark:via-primary-600 dark:to-black