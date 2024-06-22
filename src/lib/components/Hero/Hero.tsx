import { francois_one } from '@/lib/core/fonts/francois-one';
import { quicksand } from '@/lib/core/fonts/quicksand';
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <div className='bg-gradient-to-r from-black via-red-700 to-red-500 dark:from-black dark:via-primary-950 dark:to-primary-800 ero_background w-full h-full flex flex-col gap-8 md:flex-row pt-24 px-[5%] lg:px-[8%] lg:py-[5%] xl:px-[5%] xl:pt-[10%] '>
      <div className='basis-full md:basis-1/2 lg:basis-full lg:h-full flex flex-col justify-center items-start lg:gap-2'>
        <div>
          <h3 className={`${quicksand.className} font-bold text-primary-950 dark:text-primary-50`}>{t('hero_text_1')}</h3>
          <h3 className={`${francois_one.className} text-primary-950 dark:text-red-100 `}>{t('hero_text_1_1')}</h3>
          <h1 className={`${quicksand.className} font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black dark:to-white `}>{t('hero_text_1_2')}</h1>
        </div>

        <div>
          <p className={`${francois_one.className} text-purple opacity-90 mb-[2.625rem] text-[0.9375rem] leading-5 pr-1 md:w-11/12 md:pr-0 lg:pr-4 lg:text-xl 2xl:text-xl 2xl:leading-[1.875rem] lg:mb-11 2xl:pr-4`}>{t('hero_text_3')}</p>
        </div>



        <div className='w-full flex items-center justify-start gap-2'>
          <button className="btn btn-xs sm:btn-sm lg:btn-md rounded-s-xl">{t('follow_us')}</button>
          <button className="btn btn-outline btn-xs sm:btn-sm lg:btn-md  rounded-e-xl">{t('contact_us')}</button>
        </div>
      </div>
      <div className='relative basis-full md:basis-1/2 lg:basis-full lg:h-full flex flex-col justify-center items-center gap-4'>
        <div className='size-44 lg:size-96 bg-primary-900/20 rounded-2xl'></div>
      </div>
    </div>
  )
}
