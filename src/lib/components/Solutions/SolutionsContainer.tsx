import { quicksand } from '@/lib/core/fonts/quicksand';
import { useTranslations } from 'next-intl';
import SolutionsItem from './SolutionsItem';
import { francois_one } from '@/lib/core/fonts/francois-one';
import access_control_01 from 'public/solutions/access_control/access_control_01.jpg'
import access_control_02 from 'public/solutions/access_control/access_control_02.jpg'
import access_control_03 from 'public/solutions/access_control/access_control_03.jpg'
import luminary_fix from 'public/solutions/luminary/luminary_fix.jpg'
import luminary_installation from 'public/solutions/luminary/luminary_installation.jpg'
import luminary_01 from 'public/solutions/luminary/luminary_01.jpg';
import biometric from 'public/solutions/access_control/biometric.jpg'


import * as React from "react";
import Image from 'next/image';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/components/ui/carousel";

export default function SolutionsContainer() {
  const t = useTranslations('Index');
  const intl = useTranslations('solutions');

  const items = [
    {
      image: biometric,
      title: intl('biometrics'),
      description: t('access_control_system'),
    },
    {
      image: access_control_02,
      title: intl('biometrics'),
      description: t('access_control_system'),
    },
    {
      image: access_control_03,
      title: intl('vehicle_control'),
      description: intl('access_control_system'),
    },
    {
      image: luminary_fix,
      title: intl('biometrics'),
      description: t('access_control_system'),
    },
    {
      image: luminary_installation,
      title: intl('biometrics'),
      description: t('access_control_system'),
    },
    {
      image: luminary_01,
      title: intl('biometrics'),
      description: t('access_control_system'),
    },
   
  ]

  return (
    <article className='flex flex-col gap-4 md:gap-12 px-[5%] py-12 lg:py-24 bg-primary-500/5'>
      <div className='flex flex-col xl:gap-1'>
        <h6 className={`${francois_one.className}`}>{t('solutions_up_title')}</h6>
        <div className='flex flex-col gap-2'>
          <h2 className={`${quicksand.className} font-bold`}>{t('solutions_title')}</h2>
          <div className='bg-primary-500 h-1 w-24 lg:w-48'></div>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {items.map(({ image, title, description }, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <Card>                  
                  <CardContent className=" flex aspect-square items-center justify-center rounded-lg">
                    <div className="relative size-full">
                      <Image className='rounded-t-lg' fill src={image} alt={description} />
                    </div>
                  </CardContent>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </article>
  );
}
