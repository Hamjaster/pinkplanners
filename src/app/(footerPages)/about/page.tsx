import React from 'react'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { FaAddressCard } from 'react-icons/fa6';
import { SlNote } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import Footer from '../../../components/Footer';
import NavbarWhite from '../../../components/NavbarWhite'
import Image from 'next/image';
import Gallery from '../../../components/Gallery/Gallery';
import { GenCarousel } from '../../../utils';

export default function page() {

    const cardInfo = [
        {
            number: '20+',
            description: 'Years of Experience',
            icon: () => {
                return (
                    <SlNote style={{ margin: 'auto' }} />
                )
            }
        },
        {
            number: '450+',
            description: 'Happy Clients',
            icon: () => {
                return (
                    <FaRegUser style={{ margin: 'auto' }} />
                )
            }
        },
        {
            number: '10K+',
            description: 'Projects Completed',
            icon: () => {
                return (
                    <CiGlobe style={{ margin: 'auto' }} />
                )
            }
        },
        {
            number: '24/7',
            description: 'Support Available',
            icon: () => {
                return (
                    <MdSupportAgent style={{ margin: 'auto' }} />
                )
            }
        },
    ];

    const Journals = [
        {
            title: 'Journal Title 1',
            image: './work1.jpg', // Replace with your image URL
            link: '/blog/1', // Replace with your blog link
        },
        {
            title: 'Journal Title 2',
            image: './work2.jpg', // Replace with your image URL
            link: '/blog/2', // Replace with your blog link
        },
        {
            title: 'Journal Title 3',
            image: './work4.jpg', // Replace with your image URL
            link: '/blog/3', // Replace with your blog link
        },
    ];

    const images = [
        "/work1.jpg", "/work2.jpg", "/work3.jpg", "/work4.jpg", "/work5.jpg", "/work6.jpg", "/work7.jpg", "/work8.jpg"
    ]

    return (
        <div className='text-black'>
            <NavbarWhite />
            <div className="pt-28">
                <GenCarousel images={images} />
            </div>

            <div className="text mb-12 py-10 text-center flex-col flex space-y-1">
                <div className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}>
                    About Us
                </div>
                <div className='text-2xl font-light'>Explore more about us</div>
            </div>

            {/* Info */}
            <div className="quote  my-24 text-center space-y-5 w-11/12 mx-auto">
                <div className="text-3xl sm:text-5xl leading-tight font-semibold ">
                    We Don’t Simply Plan Events –
                    We Craft Extraordinary Experiences.
                </div>
                <div className='text-base sm:text-lg w-11/12 sm:w-9/12 mx-auto'>
                    At JUGS, we set out to create exceptional corporate events that exceed expectations and empower both our clients and our team. We embrace challenges with passion and commit to realising every big dream trusted to us.
                </div>

                {/* WhyUS cards */}
                <div className="max-w-screen-xl mx-auto py-12">

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                        {cardInfo.map((card, index) => (
                            <div
                                key={index}
                                className="w-full lg:w-1/4 bg-white border-2 mb-3 lg:mb-0"
                            >
                                <div className="text-center py-8">

                                    <div className="icon font-light text-7xl mb-4 text-gray-700 mx-auto text-center">
                                        {card.icon()}
                                    </div>

                                    <div className=" text-4xl font-semibold text-gray-600 mb-4 ">{`${card.number}`}</div>
                                    <div className="text-base text-gray-500">{card.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>


            {/* Core values */}
            <div className="flex my-24 text-black flex-col lg:flex-row items-center justify-center lg:justify-between py-8 px-4 lg:px-14">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        src="/work3.jpg" // Replace with your image path
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 lg:pl-12">

                    <div className="text-center lg:text-left">
                        <h2 className={`" text-3xl sm:text-5xl font-semibold mb-4 "`}>Our Core Values</h2>
                        <p className="text-base sm:text-lg space-y-2 mb-3 sm:mb-6">
                            <div>
                                Guided by our core values, we are able to consistently surpass client expectations – empowering our team along the way.
                            </div>
                            <ul className="lg:list-disc ml-4">
                                <li>We nurture potential</li>
                                <li>We collaborate and respect</li>
                                <li>We empower with integrity</li>
                                <li>We thrive with fun</li>
                            </ul>

                        </p>
                        <button className="bg-[rgb(29,29,29)] transition-all hover:bg-[rgb(40,40,40)] text-base sm:text-xl text-white font-semibold w-full sm:w-auto py-2 sm:py-3 px-5 sm:px-8 rounded-2xl ">
                            Discover Us
                        </button>
                    </div>
                </div>
            </div>

            {/* get in touch */}
            <div className="bg-[rgb(40,40,40)] p-20 my-36 ">

                <div className="max-w-screen-xl h-full  mx-auto px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between">

                    {/* Left Section */}
                    <div className="text-center w-full mx-auto lg:text-left lg:mr-8">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-200 mb-2">
                            Get in Touch
                        </h2>
                        <p className="text-sm lg:text-base text-gray-400 mb-4">
                            Have a question or want to collaborate?
                        </p>
                        <a
                            href="/contact" // Replace with your contact page link
                            className="text-blue-700 hover:text-blue-600 transition duration-300"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Vertical Bar */}
                    <div className="hidden lg:block bg-gray-600 h-44 w-px mx-8"></div>

                    {/* Right Section */}
                    <div className="text-center w-full mx-auto lg:text-left lg:ml-8 mt-6 lg:mt-0">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-200 mb-2">
                            Let's Collaborate
                        </h2>
                        <p className="text-sm lg:text-base text-gray-400 mb-4">
                            Explore partnership opportunities.
                        </p>
                        <a
                            href="/partnership" // Replace with your partnership page link
                            className="text-blue-700 hover:text-blue-600 transition duration-300"
                        >
                            Partner With Us
                        </a>
                    </div>

                </div>

            </div>

            {/* Journals */}
            <div className="py-16 my-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center">
                        <h2 className="text-3xl sm:text-5xl font-semibold sm:text-5xl">
                            Latest Journals
                        </h2>
                        <p className="mt-3 text-base sm:text-lg font-light text-gray-600 w-11/12  sm:w-1/2 mx-auto">
                            We don’t just plan events – we craft experiences.
                            <br />
                            Discover captivating case studies, expert tips, and endless inspiration for your next corporate event.
                        </p>
                    </div>

                    <div className="mt-12 mx-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {Journals.map((blog, index) => (
                            <a
                                key={index}
                                href={blog.link}
                                className="relative hover:shadow-2xl rounded-lg overflow-hidden hover:scale-105 transition duration-300"
                            >
                                <div className="h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${blog.image})` }}>

                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                                        <h3 className="text-white text-xl font-semibold">{blog.title}</h3>
                                        <button className="mt-2 text-blue-400 hover:underline transition duration-300">
                                            Read more
                                        </button>
                                    </div>

                                </div>
                            </a>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}
