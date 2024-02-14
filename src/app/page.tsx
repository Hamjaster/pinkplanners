import Image from 'next/image'
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'
import Gallery from '../components/Gallery/Gallery'
import Services from '../components/Services'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CTA from '../components/CTA'
import Head from 'next/head';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamol - Events as you imagine	",
  description:
    "Unlock the world of flawless event management with our captivating home page..",
};
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
