// components/ServicesPage.js

import React from 'react';
import NavbarWhite from '../../../components/NavbarWhite'
import Footer from '../../../components/Footer';
import { Arizonia } from 'next/font/google'
import { GenCarousel } from '../../../utils';
import CTA from '../../../components/CTA';
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Diamol - Events as you imagine',
    description: 'Unlock the world of flawless event management with our captivating home page.',
  }
  
const ServicesPage = () => {
    const services = [
        {
            heading: 'Theme parties',
            description: 'We believe that every celebration should be a unique reflection of your personality and style. These theme parties are designed to elevate your events into extraordinary, immersive experiences that leave lasting memories',
            image: '/gallery (18).jpg', // Replace with your image URL
            to:"/Theme-parties"

        },
        {
            heading: 'Celeb inspired Weddings',
            description: 'Step into the magical realm of South Indian elegance, inspired by the style of your favorite celebrity.  Picture yourself exchanging vows surrounded by beautiful flowers and grand venues that reflect the sophistication you admire. Under gentle lights and soothing music, your love story shines bright, just like the ones you admire ',
            buttonText: 'Discover',
            image: 'https://www.weddingsutra.com/images/wedding-images/celeb_wed/celeb_wed/anushka_virat_07.jpg', // Replace with your image URL
            to:"/Celeb-inspired-Weddings"
        },
        {
            heading: 'Destination Weddings',
            description: 'Embark on a journey to say "I do" in a destination as unique as your love story.Diamol specializes in curating extraordinary destination weddings that transcend boundaries and create memories to last a lifetime.',
            buttonText: 'Discover',
            image: '/work8.jpg', // Replace with your image URL
            to:"/Destinations"
        },

        {
            heading: 'Customised Weddings',
            description: 'Your journey to forever begins here.  Enjoy the magic of your day while we take care of the details. Our experienced team ensures that your wedding and reception flow seamlessly, allowing you to savour every moment without worry.',
            buttonText: 'Discover',
            image: '/work9.jpg', // Replace with your image URL
            to:"/Customised-Weddings"
        },
        // Add more services as needed
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
            <div className="text mb-12  py-10 text-center flex-col flex space-y-3">
                <div className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}>
                    Events
                </div>
                <div className='text-2xl font-light'>Where every details spark joy</div>
            </div>

            <div className="font-roboto ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col group my-24 lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                        >

                            <div className="lg:w-1/2 m-4 relative">
                                {/* <div className="absolute inset-0 bg-black  rounded-lg"></div> */}
                                <img src={service.image} alt={`Service ${index + 1}`} className="w-full  transition-all cursor-pointer h-auto" />
                            </div>

                            <div className="lg:w-1/2 p-4 flex flex-col justify-center">
                                <h3 className="text-4xl font-semibold mb-4">{service.heading}</h3>
                                <p className="text-sm font-light text-gray-700 mb-6">{service.description}</p>
                               <Link href={service.to}>
                               <div className="hover:underline cursor-pointer">
                                    Read More
                                </div>
                               </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </>
    );
};

export default ServicesPage;
