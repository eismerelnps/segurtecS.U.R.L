import React from 'react'
import ServicesList from '@/lib/components/Services/ServicesList'
import SlideshowContainer from '@/lib/components/slideshow/SlideshowContainer'
import Promo from '@/lib/components/Promo/Promo'
import AboutMain from '@/lib/components/About/AboutMain'
import Hero from '../Hero/Hero'

export default function LandingPage() {

  return (
    <main>
      <Hero />
      <Promo />
      <SlideshowContainer />
      <AboutMain />
      <ServicesList />
    </main>
  )
}
