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
        <div className=' bg-slate-100/50  flex flex-col justify-center  h-full  lg:mx-12'>
          <div className=''>
            <p className=' lg:text-6xl text-white font-bold'>SEGURTEC S.U.R.L</p>
          </div>
          <div className=' bg-transparent  flex flex-col justify-center  '>
          <div className=' lg:my-8'>
        
            <p className='text-[8px] lg:text-xl text-white font-bold'>No dejes que la inseguridad te preocupe</p>
            <p className='text-[8px] lg:text-2xl text-white  font-bold'>Déjanos proteer lo que más te importa</p>
            <p className='text-[8px]'> clasLorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto accusantium corporis doloremque cum perferendis nam dolor, nobis ullam dignissimos error repellat! Nobis, ullam nisi accusantium numquam dolorem vitae recusandae.</p>

          
          </div>
        </div>
        </div>
        






      </article>
    </section>
  )
}
