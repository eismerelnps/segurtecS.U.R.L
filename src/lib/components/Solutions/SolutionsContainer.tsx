import { quicksand } from '@/lib/core/fonts/quicksand';
import { useTranslations } from 'next-intl';
import React from 'react';
import SolutionsItem from './SolutionsItem';
import { francois_one } from '@/lib/core/fonts/francois-one';
import access_control_01 from 'public/solutions/access_control/access_control_01.jpg'
import access_control_02 from 'public/solutions/access_control/access_control_02.jpg'
import access_control_03 from 'public/solutions/access_control/access_control_03.jpg'
import luminary_fix from 'public/solutions/luminary/luminary_fix.jpg'
import luminary_installation from 'public/solutions/luminary/luminary_installation.jpg'
import luminary_01 from 'public/solutions/luminary/luminary_01.jpg'


export default function SolutionsContainer() {
  const t = useTranslations('Index');

  return (
    <article className='flex flex-col gap-4 md:gap-12 xl:gap-16 px-[5%] py-12 lg:py-32 bg-primary-500/5'>
      <div className='flex flex-col xl:gap-4'>
        <h6 className={`${francois_one.className}`}>{t('solutions_up_title')}</h6>
        <div className='flex flex-col gap-2'>
          <h2 className={`${quicksand.className} font-bold`}>{t('solutions_title')}</h2>
          <div className='bg-primary-500 h-1 w-24'></div>
        </div>
        {/* <p>{t('solutions_sub_title')}</p> */}
      </div>

      <div className='basis-full flex flex-col gap-4 xl:gap-8 overflow-x-auto'>
        <h4 className='text-primary-500'>{t('access_control_system')}</h4>
        <div className='grid grid-flow-col gap-2 xl:gap-4 grid-rows-1 overflow-x-auto'>
          <SolutionsItem image={access_control_01} title={t('access_control_system')} />
          <SolutionsItem image={access_control_02} title={t('access_control_system')} />
          <SolutionsItem image={access_control_03} title={t('access_control_system')} />

          <SolutionsItem image={access_control_01} title={t('access_control_system')} />
        </div>
      </div>

      <div className='basis-full flex flex-col gap-4 xl:gap-8 overflow-x-auto'>
        <h4 className='text-primary-500'>{t('luminary')}</h4>
        <div className='grid grid-flow-col gap-2 xl:gap-4 grid-rows-1 overflow-x-auto'>
          <SolutionsItem image={luminary_installation} title={t('access_control_system')} />
          <SolutionsItem image={luminary_fix} title={t('access_control_system')} />
          <SolutionsItem image={luminary_01} title={t('access_control_system')} />
        </div>
      </div>
    </article>
  );
}
