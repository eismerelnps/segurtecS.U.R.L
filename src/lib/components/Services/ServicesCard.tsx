import { mainServicesInterface } from '@/lib/interfaces/ServicesInterface'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export default function ServicesCard({ service }: { service: mainServicesInterface }) {
  const intl = useTranslations('services');
  return (
    <article className='basis-full flex-none max-w-lg cursor-default sm:basis-1/2 xl:basis-1/4 p-4 justify-center'>
      <div className='h-full relative p-4 sm:p-6  border overflow-hidden rounded-2xl shadow-xl shadow-red-50 dark:shadow-primary-950 bg-primary-100 dark:bg-primary-950 transition delay-600 hover:scale-105 hover:bg-white dark:hover:bg-primary-900 hover-shadow-xl hover-shadow-300'>
        <div className='absolute rounded-full -top-20  -end-20 bg-red-100 dark:bg-primary-950/90 border border-red-100 dark:border-primary-900 opacity-60 shadow-xl shadow-red-200 dark:shadow-primary-950 h-60 w-60 z-[2] '></div>
        <div className='absolute rounded-full -top-16  -end-20 bg-red-50 dark:bg-primary-950/90 border border-white dark:border-primary-900 opacity-60 shadow-xl shadow-red-100 dark:shadow-primary-950 h-72 w-72 z-[1] '></div>
        <div className='absolute rounded-full -top-16  -end-20 bg-red-50 dark:bg-primary-950/90 border border-white dark:border-primary-900 opacity-60 shadow-xl shadow-red-50  dark:shadow-primary-900 h-80 w-80 z-0 '></div>
        <div className='absolute rounded-full -bottom-6  -start-6 bg-primary-50 dark:bg-primary-900 h-24 w-24 z-0 '></div>
        <div className='relative mt-1 mb-4 z-10'>
          <h3 className='text-2xl text-neutral-500 '>{service.name}</h3>
        </div>
        <div className='relative z-10 '>
          <p>{service.description}</p>
        </div>
        <div className='relative mt-4 flex justify-end  transition delay-400 hover:scale-y-105 z-10'>
          <Link href={'/services'} className='text-red-600 font-bold text-xl '
          >{intl('know_more')}</Link>
        </div>
      </div>

    </article>
  )
}
