import React from 'react'
import { mainServices } from '@/lib/data/services'
import ServicesCard from './ServicesCard'
export default function ServicesList() {
    return (

        <section className='flex flex-col sm:flex-row flex-wrap sm:p-8 lg:p-16 '>
            <article className='w-full text-center px-4 py-8 sm:px-2 sm:py-4 lg:px-8 lg:py-16'>
                <h2 className='text-xl lg:text-4xl 2xl:text-6xl text-neutral-950 font-bold'>Nuestros servicios</h2>
                <p className='my-4 mx-4 lg:mx-16 xl:mx-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore praesentium officiis, reprehenderit tempora dolorum iure consequatur, earum dignissimos doloribus fuga voluptates libero, accusantium et quaerat itaque sunt eligendi quod.</p>
            </article>
            <article className='flex flex-col sm:flex-row flex-wrap  content-center sm:justify-center'>
                {
                    mainServices.map((service) => (
                        <ServicesCard key={service.id} service={service} />
                    ))
                }
            </article>

        </section>
    )
}
