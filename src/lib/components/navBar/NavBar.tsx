'use client'
import { Bars3Icon, ChatBubbleLeftIcon, LanguageIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import segurtec_logo from '/public/logo01.png'
import Image from 'next/image'
import useDeviceType from '@/lib/hooks/useDeviceType';
import { quicksand } from '@/lib/core/fonts/quicksand';
import { ListItem, NavigationMenuDemo } from '../commons/NavigationMenu/NavigationMenu';
import { Button } from "@/lib/components/ui/button"
import { ChevronRightIcon, Search } from 'lucide-react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/lib/components/ui/navigation-menu"

type SubItem = {
    title: string;
    description: string;
    href: string
}
type MenuItem = {
    title: string;
    subItems: SubItem[]
}
type IndexItem = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    href: string
    subItems: SubItem[]
}

function NavbarItems() {
    const path = usePathname();
    const t = useTranslations('Index');
    return (
        <section className='col-span-8 '>
            <ul className='flex flex-col md:flex-row gap-4 justify-start items-start md:justify-center md:items-center w-full h-full bg-primary-50 dark:bg-primary-950 md:bg-transparent px-2'>
                {/* {
     items.map(({ key, link }, index) => (
         <li key={index} className={` ${path === '/' && 'border-b-2'}  border-b-2 border-transparent hover:border-primary-200 transition-all duration-100 `}><Link href={link}><p>{t(key)}</p></Link></li>
        ))
    } */}
            </ul>
        </section>
    )
}

const availableLanguages = [
    {
        name: 'es',
        href: 'es'
    },
    {
        name: 'en',
        href: 'en'
    }
]

export default function Navbar() {
    const t = useTranslations('Index');
    const solutions_intl = useTranslations('navbar');
    const intl = useTranslations('Index');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isMobile } = useDeviceType();

    const indexItem: IndexItem = {
        icon: <>icon</>,
        title: t('us'),
        subtitle: t('company_name'),
        description: t('services_title'),
        href: '/',
        subItems: [
            {
                title: intl('solutions'),
                description: intl('solutions_up_title'),
                href: "/",
            },
            {
                title: intl('services'),
                description: intl('solutions_up_title'),
                href: "/",
            },
            {
                title: intl('where_we_work'),
                description: intl('solutions_up_title'),
                href: "/",
            }
        ]
    }

    const menuItems: MenuItem[] = [
        {
            title: solutions_intl('solutions'),
            subItems: [
                {
                    title: solutions_intl('access_control'),
                    description: solutions_intl('access_control_navbar_description'),
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                }
            ]
        },
        {
            title: solutions_intl('services'),
            subItems: [
                {
                    title: solutions_intl('electrical'),
                    description: solutions_intl('electrical_description'),
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                },
                {
                    title: "Control de accesso",
                    description: "Facilita la manera en la que controlas el acceso a tu hogar o negocio",
                    href: '/'
                }
            ]
        },
    ]

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
            <article className={`${isScrolled ? 'transition-all duration-150 bg-primary-50/90 dark:bg-primary-950/80 border-b border-white/20' : 'dark:bg-black/10'} z-[1000] fixed top-0 right-0 left-0 h-16 flex justify-between items-center p-2   `}>
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
                                <h5 className={`${quicksand.className} `}><span className='text-primary-500 font-bold'>SegurTec</span> <span className='text-black dark:text-primary-50 text-sm'>S.U.R.L</span></h5>
                            </div>
                        </div>
                    </Link>
                </section>
                <div className={`${isMobile && drawerOpen ? 'fixed top-16 right-0 left-0' : 'hidden'}`}><NavbarItems /></div>
                {
                    !isMobile && <NavigationMenuDemo indexItem={indexItem} items={menuItems} />
                }
                <section className='flex justify-center items-center gap-1'>
                    {isMobile ? <Button variant="ghost" size="icon"><ChatBubbleLeftIcon className='icon' /></Button> : <Button variant="ghost" size="icon"><Search /></Button>}
                    {/* {!isMobile && <Button><LanguageIcon className='icon' /></Button>} */}
                    <NavigationMenu >
                        <NavigationMenuList >
                            <NavigationMenuItem>
                                <NavigationMenuTrigger><LanguageIcon className='icon' /></NavigationMenuTrigger>
                                <NavigationMenuContent className='w-4'>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {availableLanguages.map((item, index) => (
                                            <ListItem
                                                key={index}
                                                title={item.name}
                                                href={item.href}
                                            >
                                                {item.name}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>

                            </NavigationMenuItem>
                        </NavigationMenuList>

                    </NavigationMenu>
                </section>
            </article>
        </div>
    )
}