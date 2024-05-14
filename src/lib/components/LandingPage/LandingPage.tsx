import React from 'react'
import ServicesList from '@/lib/components/Services/ServicesList'
import SlideshowContainer from '@/lib/components/slideshow/SlideshowContainer'
import Promo from '@/lib/components/Promo/Promo'
import AboutMain from '@/lib/components/About/AboutMain'
import Hero from '../Hero/Hero'
import BussinessArea from '../BussinessArea/BussinessArea'
import Footer from '../Footer/Footer'
import Clients from '../Clients/Clients'
import SolutionsContainer from '../Solutions/SolutionsContainer'

export default function LandingPage() {

  return (
    <main className='flex flex-col gap-8'>
      <Hero />
      {/* <Promo /> */}
      <SlideshowContainer />
      <AboutMain />
      <SolutionsContainer />
      <ServicesList />
      <BussinessArea />
      <Clients />
      <Footer />
    </main>
  )
}
