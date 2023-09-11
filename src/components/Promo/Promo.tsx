import React from 'react'
import './promo.css'

export default function Promo() {
  return (
    <section className='bg-neutral-200 '>
       

    
      <article className='flex flex-col sm:flex-row space-y-8 py-12 px-4 sm:p-16 '>
        <div className='basis-full sm:basis-1/2 self-center'>
          <div>
            <p className='text-md text-red-600 text-center font-bold'>No dejes que la inseguridad te preocupe;</p>
            <p className='text-sm text-red-600 text-center font-bold'>Déjanos proteer lo que más te importa</p>
          </div>

        </div>
        <div className='basis-full sm:basis-1/2'>
          <div>
            <p className='text-center'>En Segurtec S.U.R.L </p>
            <p className='text-center'> clasLorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto accusantium corporis doloremque cum perferendis nam dolor, nobis ullam dignissimos error repellat! Nobis, ullam nisi accusantium numquam dolorem vitae recusandae.</p>

          </div>

        </div>
      </article>
     
    </section>
  )
}
