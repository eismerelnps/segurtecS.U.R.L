import React from 'react'
import ServicesList from '@/lib/components/Services/ServicesList'
import SlideshowContainer from '@/lib/components/slideshow/SlideshowContainer'
import Promo from '@/lib/components/Promo/Promo'
import AboutMain from '@/lib/components/About/AboutMain'
import Hero from '../Hero/Hero'
import BussinessArea from '../BussinessArea/BussinessArea'
import Footer from '../Footer/Footer'

export default function LandingPage() {

  return (
    <main className='flex flex-col gap-8'>
      <Hero />
      <Promo />
      <SlideshowContainer />
      <AboutMain />
      <ServicesList />
      <BussinessArea />
      <Footer />
    </main>
  )
}
