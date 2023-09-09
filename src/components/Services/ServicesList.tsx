import React from 'react'
import { mainServices } from '@/data/services'
import ServicesCard from './ServicesCard'
export default function ServicesList() {
    return (

        <section className='flex flex-col sm:flex-row flex-wrap my-8 '>
            <article className='w-full text-center mt-4 mb-8'>
                <h2 className='text-4xl'>Nuestros servicios</h2>
                <p className='my-4 mx-4 sm:mx-8 xl:mx-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore praesentium officiis, reprehenderit tempora dolorum iure consequatur, earum dignissimos doloribus fuga voluptates libero, accusantium et quaerat itaque sunt eligendi quod.</p>
            </article>
            {
                mainServices.map((service) => (
                    <ServicesCard key={service.id} service={service} />
                ))
            }
        </section>
    )
}
