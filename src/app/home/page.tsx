import React from 'react'
import Banner from '../../components/Banner'
import Experience from '../../components/Experience'
import About from '../../components/About'
import Events from '../../components/Events'
import WhyUs from '../../components/WhyUs'
import Gallery from '../../components/Gallery'
import Quotes from '../../components/Quotes'
import Footer from '../../components/Footer'
import Follow from '../../components/Follow'

export default function page() {
    return (
        <div>
            <Banner />
            <Experience />
            <About />
            <WhyUs />
            <Events />
            <Gallery />
            <Quotes />
            <Follow />
            <Footer />
        </div>
    )
}