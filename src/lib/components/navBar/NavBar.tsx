'use client'
import { Bars3Icon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import segurtec_logo from '/public/logo01.png'
import Image from 'next/image'
import useDeviceType from '@/lib/hooks/useDeviceType';
import { quicksand } from '@/lib/core/fonts/quicksand';

const items = [
    {
        key: "solutions",
        link: ""
    },
    {
        key: "products",
        link: ""
    },
    {
        key: "services",
        link: "/#services"
    },
    {
        key: "where_we_work",
        link: "/#business_area"
    }
]

function NavbarItems() {
    const path = usePathname();
    const t = useTranslations('Index');

    return (
        <section className='col-span-8 '>
            <ul className='flex flex-col md:flex-row gap-4 justify-start items-start md:justify-center md:items-center w-full h-full bg-white md:bg-transparent px-2'>
                {
                    items.map(({ key, link }, index) => (
                        <li key={index} className={` ${path === '/' && 'border-b-2'}  border-b-2 border-transparent hover:border-primary-200 transition-all duration-100 `}><Link href={link}><p>{t(key)}</p></Link></li>
                    ))
                }
            </ul>
        </section>
    )
}

export default function Navbar() {
    const t = useTranslations('Index');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { isMobile } = useDeviceType();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleDrawerState = () => {
        setDrawerOpen(!drawerOpen)
    }
    return (
        <div className='relative '>
            <article className={`${isScrolled ? 'transition-all duration-150 bg-primary-50/90 dark:bg-primary-950/80 border-b border-white/20' : 'dark:bg-black/20'} z-[1000] fixed top-0 right-0 left-0 h-16 flex justify-between items-center p-2   `}>
                {
                    isMobile &&
                    <section>
                        <button onClick={handleToggleDrawerState} className={`text-primary-500 dark:text-primary-900 border-primary-950 text-lg font-semibold px-2 py-2 rounded-full  hover:opacity-80 outline-0 focus:outline-0 transition-all duration-200 `}>
                            {drawerOpen ? <XMarkIcon className='size-8' /> : <Bars3Icon className='size-8 dark:text-primary-50' />}
                        </button>
                    </section>
                }


                <section className='flex justify-start items-center gap-2 px-12'>
                    <Link href={'/'}>
                        <div className='flex justify-start items-center gap-2'>
                            <div className="avatar ">
                                <div className="w-12 border border-primary-500 rounded-full relative">
                                    <Image
                                        alt=''
                                        src={segurtec_logo} />
                                </div>
                            </div>
                            <div className={` flex justify-start items-center gap-2`}>
                                <h6 className={`${quicksand.className} font-bold`}><span className='text-primary-500'>SegurTec</span> <span className='text-black dark:text-primary-50 text-sm'>S.U.R.L</span></h6>
                            </div>
                        </div>
                    </Link>
                </section>
                <div className={`${isMobile && drawerOpen ? 'fixed top-16 right-0 left-0' : 'hidden'}`}><NavbarItems /></div>
                {
                    !isMobile && <NavbarItems />
                }
                <section className='flex justify-center items-center gap-4'>
                    {isMobile ? <button className="btn btn-circle bg-transparent border-0"><ChatBubbleLeftIcon className='size-8 text-primary-500' /></button> : <button className="btn btn-primary bg-primary-500  btn-xs sm:btn-sm  rounded-none">{t('contact_us')}</button>}
                    {!isMobile && <button className="btn btn-outline btn-xs sm:btn-sm  rounded-none">{t('follow_us')}</button>}
                </section>


            </article>
        </div>

    )
}