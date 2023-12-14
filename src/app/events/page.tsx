// components/ServicesPage.js

import React from 'react';
import NavbarWhite from '../../components/NavbarWhite'
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const ServicesPage = () => {
    const services = [
        {
            heading: 'Theme parties',
            description: 'Do you need to reward your stellar leadership team and incentivize them to work together to achieve even more? Planning a corporate event is key. An investment in your company culture is an investment in your company. The return on investment is indisputable. Your employees will feel validated resulting in better quality output. Personal connections are cultivated leading to better work product and ownership. You plant seeds for creativity beyond the proverbial box improving your bottom line. We can help you curate a high touch point corporate event that is intentional, authentic and impactful.',
            buttonText: 'Learn More',
            image: '/work1.jpg', // Replace with your image URL
        },
        {
            heading: 'Wedding & Reception',
            description: 'Want to throw the dream weddings of all dreams in the most beautiful locations around the world? This is what we do. Create once in a lifetime experiences - not just for our couples, but their guests as well. We hear from a lot of wedding guests, that the weddings we produce create some of the best memories of their lives. It’s a privilege to work with clients who want to share these moments with their friends and loved ones.',
            buttonText: 'Discover',
            image: '/work2.jpg', // Replace with your image URL
        },
        {
            heading: 'Destination Weddings',
            description: 'Want to throw the dream weddings of all dreams in the most beautiful locations around the world? This is what we do. Create once in a lifetime experiences - not just for our couples, but their guests as well. We hear from a lot of wedding guests, that the weddings we produce create some of the best memories of their lives. It’s a privilege to work with clients who want to share these moments with their friends and loved ones.',
            buttonText: 'Discover',
            image: '/work3.jpg', // Replace with your image URL
        },
        {
            heading: 'Explore more! ',
            description: 'Want to throw the dream weddings of all dreams in the most beautiful locations around the world? This is what we do. Create once in a lifetime experiences - not just for our couples, but their guests as well. We hear from a lot of wedding guests, that the weddings we produce create some of the best memories of their lives. It’s a privilege to work with clients who want to share these moments with their friends and loved ones.',
            buttonText: 'Discover',
            image: '/work4.jpg', // Replace with your image URL
        },
        // Add more services as needed
    ];

    return (
        <>
            <NavbarWhite />
            <div className="text pt-36 mb-12 bg-[#f3f4f6] py-20 text-center flex-col flex space-y-3">
                <div className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}>
                    Events
                </div>
                <div className='text-2xl font-light'>Discover what we offer for your needs</div>
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
                                <img src={service.image} alt={`Service ${index + 1}`} className="w-full grayscale group-hover:grayscale-0 transition-all cursor-pointer h-auto" />
                            </div>

                            <div className="lg:w-1/2 p-4 flex flex-col justify-center">
                                <h3 className="text-4xl font-semibold mb-4">{service.heading}</h3>
                                <p className="text-sm font-light text-gray-700 mb-6">{service.description}</p>
                                <div className="hover:underline cursor-pointer">
                                    Read More
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
