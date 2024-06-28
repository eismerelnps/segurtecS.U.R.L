import ServicesList from '@/lib/components/Services/ServicesList'
import SlideshowContainer from '@/lib/components/slideshow/SlideshowContainer'
import AboutMain from '@/lib/components/About/AboutMain'
import Hero from '../Hero/Hero'
import BussinessArea from '../BussinessArea/BussinessArea'
import Footer from '../Footer/Footer'
import Clients from '../Clients/Clients'
import SolutionsContainer from '../Solutions/SolutionsContainer'

export default function LandingPage() {
  return (
    <main className='flex flex-col'>
      <Hero />
      <SlideshowContainer />
      <AboutMain />
      <SolutionsContainer />
      <ServicesList />
      <BussinessArea />
      {/* <Clients /> */}
      <Footer />
    </main>
  )
}
