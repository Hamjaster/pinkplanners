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
export default function Home() {
  return (
    <>
    <Head>
        <title>Cool Title</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
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
