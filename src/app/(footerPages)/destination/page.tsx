import React from 'react'
import Footer from '../../../components/Footer';
import NavbarWhite from '../../../components/NavbarWhite';
import { Arizonia } from 'next/font/google'
import { GenCarousel } from '../../../utils';
import CTA from '../../../components/CTA';
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Diamol destinations',
    description: 'Discover the hidden gems of your dream destination with us',
  }
  
export default function page() {
    const cards = [
        {
            image: '/dest/kerala.jpg',
            text: 'Kerala ',
            desc:"Whispers of 'I do' in God's own land.    "
        },
        {
            image: '/dest/goa.jpg',
            text: 'Goa',
            desc:"Beachside vows, Goa's magic flows  "
        },
        {
            image: '/dest/udai.jpeg',
            text: 'Udaipur',
            desc:"Your love story, penned in the City of Lakes' timeless beauty"
        },
        {
            image: '/dest/bang.jpeg',
            text: 'Bangalore',
            desc:"Garden city vows, where love blooms a new"
        },
       
        {
            image: '/dest/pond.jpeg',
            text: 'Pondicherry',
            desc:"Fairytale affirm in French Riviera's embrace.   "
        },
        {
            image: '/dest/araku.jpeg',
            text: 'Araku & Vizag:',
            desc:"From mountains to the sea, your wedding story unfolds"            
        },
       
        // Add more cards as needed
    ];
    const images = [
        "/work1.jpg", "/work2.jpg", "/work3.jpg", "/work4.jpg", "/work5.jpg", "/work6.jpg", "/work7.jpg", "/work8.jpg"
    ]
    return (
        <>
            <NavbarWhite />
            <div className="pt-28">
                {/* <GenCarousel images={images} /> */}
            </div>
            <div className='mb-44'>
                {/* Heading */}
                <div className="text mb-12 py-10 text-center flex-col flex space-y-3">
                    <div className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}>
                        Destinations
                    </div>
                    <div className='text-2xl font-light'>We've covered every place for you</div>
                </div>
                {/* Cards */}
                <div className="grid mx-12 sm:mx-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-md cursor-pointer"
                        >
                            <div className="relative">
                                <div style={{
                                    backgroundImage: `url(${card.image})`
                                }} className='w-full h-80 bg-cover bg-center transition-transform duration-300 transform scale-100 group-hover:scale-110'>
                                </div>

                                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-20 ">
                                </div>
                                <p className="text-white text-base inset-0 flex flex-col items-center justify-center space-y-3 absolute text-center ">
                                    <div className="text-3xl">{card.text}</div>
                                    <div className="font-semibold text-xl w-11/12">{card.desc}</div>

                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </>
    )
}
