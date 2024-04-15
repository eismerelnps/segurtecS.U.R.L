import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function CompanyAvatar({ avatar, name, subname }: { avatar: string | StaticImageData, name: string, subname?: string }) {
  return (
    <div className='flex justify-start items-center'>
      <div className="avatar">
        <div className="w-16 rounded-full relative">
          <Image
            alt=''
            src={avatar} />
        </div>
      </div>
      <div className={` flex justify-start items-center gap-2`}>
        <h6 className='text-primary-500'>{name}</h6>
        <h6 className='text-neutral-500'>{subname}</h6>
      </div>
    </div>
  )
}
