import { useTranslations } from 'next-intl'
import React from 'react'

export default function BussinessArea() {
  const t = useTranslations('Index')
  return (
    <div id='business_area' className='flex flex-col-reverse md:flex-row gap-4 py-8 px-8 lg:px-32'>

      <div className='basis-full flex justify-center items-center'>
        <div className='size-32 lg:size-72 bg-neutral-500'></div>
      </div>

      <article className='basis-full flex flex-col lg:gap-8'>

        <article>
          <h2 className='h2'>{t('business_area_title')}</h2>
          <div className='bg-primary-500  h-1 w-12 lg:w-16 my-2'></div>
          <p className='p'>{t('business_area_subtitle')}</p>
        </article>

        <div className='flex flex-col gap-4'>
          <p className='p'>{t('business_area_description')}</p>
          <button className="btn btn-outline btn-xs sm:btn-sm lg:btn-md  rounded-none w-1/2">{t('know_more')}</button>
        </div>
      </article>
    </div>
  )
}
