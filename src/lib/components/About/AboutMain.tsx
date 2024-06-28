import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import about_01 from '/public/about_Section/about_01.jpeg'
import about_02 from '/public/about_Section/about_02.jpeg'
import about_03 from '/public/about_Section/about_03.jpeg'
import about_04 from '/public/about_Section/about_04.jpeg'
import { quicksand } from '@/lib/core/fonts/quicksand'
import { francois_one } from '@/lib/core/fonts/francois-one'
import Separator from './components/Separator'

export default function AboutMain() {
    const t = useTranslations('Index');
    const intl = useTranslations('about');
    return (
        <div className=' '>
            <div className='flex flex-col md:flex-row justify-center px-4 py-8 sm:px-2 sm:py-4 lg:px-2 lg:py-16'>
                <div className='basis-full md:basis-1/2 '>
                    <div className='md:hidden my-8 flex flex-col justify-center items-center gap-4'>
                        <h2 className=''>{intl('title')}</h2>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, modi. Exercitationem dolor inventore ipsa quibusdam culpa odit ab nihil molestiae, nostrum, sint natus sit aliquid, aliquam laudantium eius deserunt deleniti.</p>
                    </div>


                    <div className='flex flex-col gap-2 items-center h-full px-8'>
                        <div className='flex gap-8 w-full relative justify-end items-end'>
                            <div className=''>
                                <Image
                                    width={200}
                                    height={200}
                                    className='rounded-2xl'
                                    src={about_01}
                                    alt={'Segurtec banner'}
                                />
                            </div>

                            <div className=' '>
                                <Image
                                    width={200}
                                    height={200}
                                    className='rounded-2xl'
                                    src={about_04}
                                    alt={'Segurtec banner'}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full items-center'>
                            <Image
                                className='rounded-2xl self-end'
                                src={about_03}
                                alt={'Segurtec banner'}
                                width={200}
                                height={200}
                            />
                            <Image
                                className='rounded-2xl self-center'
                                src={about_02}
                                alt={'Segurtec banner'}
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>



                <div className='basis-full md:basis-1/2 p-2 sm:p-6 lg:p-8  2xl:py-8'>
                    <div className='flex  items-center  h-full'>
                        <div className='flex flex-col gap-4'>
                            <div className='hidden gap-2 md:flex flex-col'>
                                <h2 className={`${quicksand.className}`}>{intl('title')}</h2>
                                <h6 className={`${francois_one.className} opacity-80 font-thin`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, modi. Exercitationem dolor inventore ipsa quibusdam culpa odit ab nihil molestiae, nostrum, sint natus sit aliquid, aliquam laudantium eius deserunt deleniti.</h6>

                            </div>
                            <div className='flex flex-row flex-wrap justify-center  my-2 lg:my-8'>
                                <div className='basis-1/2 p-2 '>
                                    <Separator />
                                    <h4 className='font-bold'>{intl('item_1')}</h4>
                                    <h6 className={`${quicksand.className} opacity-60 font-thin`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut</h6>
                                </div>

                                <div className='basis-1/2 p-2 '>
                                    <Separator />
                                    <h4 className='font-bold'>{intl('item_2')}</h4>
                                    <h6 className={`${quicksand.className} opacity-60 font-thin`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut</h6>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <Separator />
                                    <h4 className='font-bold'>{intl('item_3')}</h4>
                                    <h6 className={`${quicksand.className} opacity-60 font-thin`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut</h6>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <Separator />
                                    <h4 className='font-bold'>{intl('item_4')}</h4>
                                    <h6 className={`${quicksand.className} opacity-60 font-thin`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut</h6>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <Separator />
                                    <h4 className='font-bold'>{intl('item_5')}</h4>
                                    <h6 className={`${quicksand.className} opacity-60 font-thin`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut</h6>
                                </div>
                                <div className='basis-1/2 p-2 '>
                                    <Separator />
                                    <h4 className='font-bold'>{intl('item_6')}</h4>
                                    <h6 className={`${quicksand.className} opacity-60 font-thin`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ut</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
