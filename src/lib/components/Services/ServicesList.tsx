import React from 'react'
import { mainServices } from '@/lib/data/services'
import ServicesCard from './ServicesCard'
import { useTranslations } from 'next-intl';
export default function ServicesList() {
    const t = useTranslations('Index');

    return (

        <article id='services' className='flex flex-col sm:flex-row flex-wrap sm:p-8 lg:p-16 '>

            <article className='flex flex-col md:flex-row gap-4'>
                <h2 className='h2 text-center md:text-start'>{t('services_title')}</h2>
                <p className='p  text-center md:text-start'>{t('services_description')}</p>
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
