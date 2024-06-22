import React from 'react'
import { mainServices } from '@/lib/data/services'
import ServicesCard from './ServicesCard'
import { useTranslations } from 'next-intl';
import { quicksand } from '@/lib/core/fonts/quicksand';

export default function ServicesList() {
    const t = useTranslations('Index');

    return (
        <article id='services' className='flex flex-col sm:flex-row flex-wrap p-2 py-16 lg:px-32 justify-center items-center '>

            <article className='flex flex-col md:flex-row gap-4 px-[10%] sm:px-[20%] md:px-12'>
                <div className='basis-1/2 w-full  flex flex-col items-start justify-center '>
                    <h3 className={`${quicksand.className} font-bold`}>{t('services_title')}</h3>
                    <div className='bg-primary-500  h-1 w-12 lg:w-24 my-2'></div>
                    <p className={`${quicksand.className} font-normal`}>{t('services_description')}</p>
                </div>
                <div className='basis-1/2 w-full flex justify-center items-center '>
                    <div className='size-44 md:size-72 lg:size-96 bg-neutral-500 rounded-full'></div>
                </div>
            </article>


            <article className='flex flex-col sm:flex-row flex-wrap  content-center sm:justify-center'>
                {
                    mainServices.map((service) => (
                        <ServicesCard key={service.id} service={service} />
                    ))
                }
            </article>

        </article>
    )
}
