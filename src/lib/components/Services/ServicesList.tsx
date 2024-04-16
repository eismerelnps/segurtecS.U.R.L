import React from 'react'
import { mainServices } from '@/lib/data/services'
import ServicesCard from './ServicesCard'
import { useTranslations } from 'next-intl';

export default function ServicesList() {
    const t = useTranslations('Index');

    return (
        <article id='services' className='flex flex-col sm:flex-row flex-wrap lg:gap-12 p-2 lg:p-32 '>

            <article className='flex flex-col md:flex-row gap-4'>

                <div className='basis-1/2 lg:px-32 flex flex-col gap-4 items-start justify-center'>
                    <h2 className=' '>{t('services_title')}</h2>
                    <div className='bg-primary-500  h-1 w-12 lg:w-24 my-2'></div>
                    <p className=''>{t('services_description')}</p>
                </div>
                <div className='basis-1/2 lg:pe-44 flex justify-center items-center'>
                    <div className='size-72 lg:size-96 bg-neutral-500'></div>
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
