

import { quicksand } from '@/lib/core/fonts/quicksand';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image'
import elonprods_logo from '/public/elonprods_logo.png'
import segurtec_logo from '/public/logo01.png'
import CompanyAvatar from '../commons/CompanyAvatar';
import Link from 'next/link';
import { Facebook } from 'react-feather';
const currentYear = new Date().getFullYear();

const our_company_items = [
  {
    key: "home",
    link: ""
  },
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
    link: ""
  }
]

const contact_items = [
  {
    key: "write_us",
    link: ""
  },
  {
    key: "call_us",
    link: ""
  },
  {
    key: "follow_us",
    link: ""
  },
]
const work_with_us_items = [
  {
    key: "vacancies",
    link: ""
  },
  {
    key: "for_students",
    link: ""
  },

]

export default function Footer() {
  const t = useTranslations('Index');

  return (
    <div id='footer' className='flex flex-col lg:py-12 px-8 lg:px-32 lg:gap-16 bg-primary-50'>

      <div className='w-full flex flex-row justify-center items-center gap-2'>
        <h2 className={`${quicksand.className} text-primary-500`}>{t('would_glad_help_you')}</h2>
        <button className="btn btn-outline btn-xs sm:btn-sm lg:btn-md rounded-none">{t('contact_us')}</button>
      </div>

      <div className='flex lg:flex-row lg:px-32 justify-center'>
        <div className='lg:basis-1/4 flex flex-col justify-center items-center'>
          <div className='flex justify-start items-center gap-2'>
            <div className="avatar ">
              <div className="w-12 border border-primary-500 rounded-full relative">
                <Image
                  alt=''
                  src={segurtec_logo} />
              </div>
            </div>
            <div className={` flex justify-start items-center gap-2`}>
              <h6 className='text-primary-500'>SegurTec</h6>
              <h6 className='text-neutral-500'>S.U.R.L</h6>
            </div>
          </div>
          <div>
            <p>{t('follow_us')}</p>
            <button className='btn btn-ghost btn-circle '>
              <Facebook />
            </button>

          </div>
        </div>

        <section className='lg:basis-1/6 px-2'>
          <h4 className='font-bold text-nowrap'>{t('our_company')}</h4>
          <ul className='p-2 flex flex-col gap-2'>
            {our_company_items.map(({ key, link }) => (
              <li><Link href={link}><p className='opacity-80 hover:underline'>{t(key)}</p></Link> </li>
            ))}
          </ul>
        </section>
        <section className='lg:basis-1/6 px-2'>
          <h4 className='font-bold text-nowrap'>{t('work_with_us')}</h4>
          <ul className='p-2 flex flex-col gap-2'>
            {work_with_us_items.map(({ key, link }) => (
              <li><Link href={link}><p className='opacity-80 hover:underline'>{t(key)}</p></Link> </li>
            ))}
          </ul>
        </section>
        <section className='lg:basis-1/6 px-2'>
          <section className='lg:basis-1/4 '>
            <h4 className='font-bold text-nowrap'>{t('contact')}</h4>
            <ul className='p-2 flex flex-col gap-2'>
              {contact_items.map(({ key, link }) => (
                <li><Link href={link}><p className='opacity-80 hover:underline'>{t(key)}</p></Link> </li>
              ))}
            </ul>
          </section>
        </section>
      </div>

      <div className='basis-full flex items-center justify-between'>
        <p className='text-sm opacity-90'>© {currentYear} SEGURTEC S.U.R.L</p>
        <div className='flex justify-end items-center gap-2'>
          <p className='text-sm opacity-90'>{t('developed_by')}</p>
          <div className='flex justify-start items-center gap-2'>
            <div className="avatar">
              <div className="w-12 rounded-full relative">
                <Image
                  alt=''
                  src={elonprods_logo} />
              </div>
            </div>
            <div className={` flex justify-start items-center`}>
              <h6 className='text-orange-500'>Elon</h6>
              <h6 className='text-neutral-500'>Prods</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
