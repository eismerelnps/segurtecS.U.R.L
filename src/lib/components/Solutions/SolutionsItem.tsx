import Image from 'next/image'
import React from 'react'

export default function SolutionsItem({ image, title }: { image: any, title: string }) {
  return (
    <div className='relative size-72 xl:size-96 bg-black '>
      <Image
        fill
        src={image}
        alt={title}
      />
      <div className='absolute size-full flex items-center justify-center bg-black opacity-45 hover:opacity-90 hover:bg-transparent transition-all duration-200'>
        <h4 className='text-primary-50'>{title}</h4>
      </div>


    </div>
  )
}
