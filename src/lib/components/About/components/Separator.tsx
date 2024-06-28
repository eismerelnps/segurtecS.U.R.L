import React from 'react'

export default function Separator() {
  return (
    <div className='flex my-2'>
      <div className='basis-1/6 h-px bg-primary-950 dark:bg-primary-50'></div>
      <div className='basis-5/6 h-[0.5px] bg-primary-950 dark:bg-primary-50/20'></div>
    </div>
  )
}
