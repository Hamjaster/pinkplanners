import Image from 'next/image'
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'
import Gallery from '../components/Gallery/Gallery'
import Services from '../components/Services'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <div>

        <Banner />
        <About />
        <Services />
        <Gallery />
        {/* <WhyUs /> */}
        {/* <Events /> */}
        <Destinations />
        {/* <Quotes /> */}
        {/* <Follow /> */}
      </div>
      <CTA />
      <Footer />
    </>
  )
}
