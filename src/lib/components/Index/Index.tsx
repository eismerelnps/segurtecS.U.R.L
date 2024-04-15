import React from 'react'
import ServicesList from '../Services/ServicesList'
import SlideshowContainer from '../slideshow/SlideshowContainer'
import Promo from '../Promo/Promo'
import AboutMain from '../About/AboutMain'

export default function Index() {

  return (
    <main>
      <Promo />
      <SlideshowContainer />
      <AboutMain />
      <ServicesList />
    </main>
  )
}
