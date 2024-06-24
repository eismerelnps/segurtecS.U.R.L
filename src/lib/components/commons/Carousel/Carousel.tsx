import * as React from "react";
import Image, { StaticImageData } from 'next/image';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/components/ui/carousel";

type ItemType = {
  image: StaticImageData | string;
  description: string
}
type PropsType = {
  items: ItemType[]
}

export function CarouselSpacing({ items }: PropsType) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {items.map(({ image, description }, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader>header</CardHeader>
                <CardTitle>algo interesane</CardTitle>
                <CardDescription>sasas</CardDescription>
                <CardContent className=" flex aspect-square items-center justify-center">
                  <div className="relative size-full">
                    <Image fill src={image} alt={description} />
                  </div>
                  {/* <span className="text-2xl font-semibold">{description}</span> */}
                </CardContent>
                <CardFooter>footer</CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
