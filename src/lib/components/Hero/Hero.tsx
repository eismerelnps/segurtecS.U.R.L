import { quicksand } from '@/lib/core/fonts/quicksand';
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <div className='w-full h-full flex flex-col gap-8 md:flex-row pt-24 px-[5%] lg:px-[8%] lg:pt-[5%] xl:px-[15%] xl:pt-[10%] '>
      <div className='basis-full md:basis-1/2 lg:basis-full lg:h-full flex flex-col justify-center items-start lg:gap-2'>
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-700 to-black text-4xl leading-[2.1875rem] tracking-[0.045rem] mb-5 md:w-10/12 lg:w-full lg:tracking-[0.0875rem] lg:mb-[1.875rem] lg:pr-12 lg:text-[3.2rem] lg:leading-[3.5rem] xl:text-[4rem] xl:leading-[3.60rem] 2xl:pr-0 2xl:text-[4.375rem] 2xl:leading-[4.3125rem]">{t('hero_text_1')}</h1>

        <p className="text-purple opacity-90 mb-[2.625rem] text-[0.9375rem] leading-5 pr-1 md:w-11/12 md:pr-0 lg:pr-4 lg:text-xl 2xl:text-xl 2xl:leading-[1.875rem] lg:mb-11 2xl:pr-4">{t('hero_text_3')}</p>

        <div className='w-full flex items-center justify-start gap-2'>
          <button className="btn btn-xs sm:btn-sm lg:btn-md rounded-s-xl">{t('follow_us')}</button>
          <button className="btn btn-outline btn-xs sm:btn-sm lg:btn-md  rounded-e-xl">{t('contact_us')}</button>
        </div>
      </div>
      <div className='basis-full md:basis-1/2 lg:basis-full lg:h-full flex flex-col justify-center items-center gap-4'>
        <div className='size-44 lg:size-96 bg-gray-600'></div>
      </div>
    </div>
  )
}
