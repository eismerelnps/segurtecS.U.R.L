import Image from 'next/image'

import main_portrait from '/public/main_portrait.jpg'

export default function Promo() {
  return (
    <section className='relative'>
      <Image
        src={main_portrait}
        alt="portrait Segurtec"
      />
      <article className='absolute bg-transparent h-full w-2/3  top-0 left-0 '>
        <div className='   flex flex-col justify-center  h-full ps-1.5 lg:mx-12'>
          <div className='my-1 ms-4'>
            <p className='text-lg lg:text-6xl text-white font-bold '>SEGURTEC S.U.R.L</p>
          </div>
          <div className=' bg-transparent  flex flex-col justify-center  '>
          <div className='mx-4 lg:my-8 '>
        
            <p className='text-[10px] lg:text-xl text-white font-bold'>No dejes que la inseguridad te preocupe</p>
            <p className='text-[11px] lg:text-2xl text-white  font-bold'>Déjanos proteer lo que más te importa</p>
           <p className='text-[8px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquid, ullam accusamus maiores enim ipsum quas eaque dolorem maxime ea?</p>
          
          </div>
        </div>
        </div>
        






      </article>
    </section>
  )
}
