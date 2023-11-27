import React from 'react'
import Banner from '../../components/Banner'
import Experience from '../../components/Experience'
import About from '../../components/About'
import Events from '../../components/Events'
import WhyUs from '../../components/WhyUs'
import Destinations from '../../components/Destinations'
import Quotes from '../../components/Quotes'
import Footer from '../../components/Footer'
import Follow from '../../components/Follow'
import Gallery from '../../components/Gallery/Gallery'

export default function page() {
    return (
        <div>
            <Banner />
            <About />
            {/* <WhyUs /> */}
            {/* <Events /> */}
            <Destinations />
            {/* <Quotes /> */}
            {/* <Follow /> */}
            <Gallery />
            <Footer />
        </div>
    )
}
