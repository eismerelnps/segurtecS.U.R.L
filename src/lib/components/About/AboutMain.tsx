import Image from 'next/image'
import React from 'react'
import banner_01 from '/public/banner_01.webp'
import wolf_banner from '/public/wolf_banner.jpg'

export default function AboutMain() {
    return (
        <div className=' shadow shadow-neutral-50 sm:p-8 lg:p-16'>
            <div className='flex flex-col lg:flex-row justify-center px-4 py-8 sm:px-2 sm:py-4 lg:px-8 lg:py-16'>
                <div className='basis-full lg:basis-1/2 '>
                    <div className='block lg:hidden my-8'>
                        <h1 className='text-2xl lg:text-4xl 2xl:text-6xl text-center text-neutral-950 font-bold my-2 2xl:mt-8 2xl:mb-4 '>¿Quienes somos?</h1>
                        <p className='text-base lg:text-lg  2xl:text-3xl sm:mx-16  text-center text-neutral-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, modi. Exercitationem dolor inventore ipsa quibusdam culpa odit ab nihil molestiae, nostrum, sint natus sit aliquid, aliquam laudantium eius deserunt deleniti.</p>
                    </div>
                    <div className='flex items-center h-full'>
                        <Image
                            className='rounded-2xl'
                            src={wolf_banner}
                            alt={'Segurtec banner'}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                objectPosition: 'top', 
                            }}
                        />
                    </div>



                </div>



                <div className='basis-full lg:basis-1/2 p-2 sm:p-6 lg:p-8  2xl:py-8'>
                    <div className='flex  items-center  h-full'>
                        <div>
                            <div className='hidden lg:block'>
                                <h1 className='text-xl lg:text-4xl 2xl:text-6xl text-center text-neutral-950 font-bold my-2 2xl:mt-8 2xl:mb-4 '>¿Quienes somos?</h1>
                                <p className='2xl:text-3xl text-center text-neutral-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, modi. Exercitationem dolor inventore ipsa quibusdam culpa odit ab nihil molestiae, nostrum, sint natus sit aliquid, aliquam laudantium eius deserunt deleniti.</p>

                            </div>
                            <div className='flex flex-row flex-wrap justify-center  my-2 2xl:my-8'>


                                <div className='basis-1/2 p-2 '>
                                    <hr className='my-2' />
                                    <h2 className='text-start text-sm 2xl:text-3xl font-bold my-0.5'>Lorem, ipsum.</h2>
                                    <p className='text-sm 2xl:text-xl sm:text-base ms-0.5 text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut totam voluptatibus molestiae fugiat at corrupti dolorem possimus!</p>
                                </div>

                                <div className='basis-1/2 p-2 '>
                                    <hr className='my-2' />
                                    <h2 className='text-start text-sm 2xl:text-3xl font-bold my-0.5'>Lorem, ipsum.</h2>
                                    <p className='text-sm 2xl:text-xl sm:text-base ms-0.5 text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut totam voluptatibus molestiae fugiat at corrupti dolorem possimus!</p>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <hr className='my-2' />
                                    <h2 className='text-start text-sm 2xl:text-3xl font-bold my-0.5'>Lorem, ipsum.</h2>
                                    <p className='text-sm 2xl:text-xl sm:text-base ms-0.5 text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut totam voluptatibus molestiae fugiat at corrupti dolorem possimus!</p>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <hr className='my-2' />
                                    <h2 className='text-start text-sm 2xl:text-3xl font-bold my-0.5'>Lorem, ipsum.</h2>
                                    <p className='text-sm 2xl:text-xl sm:text-base ms-0.5 text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut totam voluptatibus molestiae fugiat at corrupti dolorem possimus!</p>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <hr className='my-2' />
                                    <h2 className='text-start text-sm 2xl:text-3xl font-bold my-0.5'>Lorem, ipsum.</h2>
                                    <p className='text-sm 2xl:text-xl sm:text-base ms-0.5 text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut totam voluptatibus molestiae fugiat at corrupti dolorem possimus!</p>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <hr className='my-2' />
                                    <h2 className='text-start text-sm 2xl:text-3xl font-bold my-0.5'>Lorem, ipsum.</h2>
                                    <p className='text-sm 2xl:text-xl sm:text-base ms-0.5 text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut totam voluptatibus molestiae fugiat at corrupti dolorem possimus!</p>
                                </div>


                            </div>

                        </div>

                    </div>


                </div>
            </div>
            {/* <div className='flex justify-end p-4'>
        <button className='bg-neutral-50 text-neutral-950 p-2.5 rounded-xl'>Conozca más</button>

      </div> */}
        </div>
    )
}
