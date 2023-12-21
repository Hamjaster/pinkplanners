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
import Services from '../../components/Services'
import Navbar from '../../components/Navbar'

export default function page() {
    return (
        <>
            <Navbar />
            <div>
                <Banner />
                <About />
                <Services />
                <Gallery />
                <Destinations />
            </div>
            <Footer />
        </>
    )
}
