import React from 'react'

export default function AboutMain() {
    return (
        <div className='py-12 px-8 bg-neutral-950 shadow-xl shadow-neutral-500'>
            <div className='flex flex-col space-y-4'>
                <div className='shadow-xl shadow-neutral-900'>
                <h1 className='text-2xl text-center text-white font-bold'>¿Quienes somos?</h1>

                </div>
                <p className='text-center text-neutral-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, modi. Exercitationem dolor inventore ipsa quibusdam culpa odit ab nihil molestiae, nostrum, sint natus sit aliquid, aliquam laudantium eius deserunt deleniti.</p>
            </div>
            <div className='flex justify-end p-4'>
        <button className='bg-neutral-50 text-neutral-950 p-2.5 rounded-xl'>Conozca más</button>

      </div>
        </div>
    )
}
