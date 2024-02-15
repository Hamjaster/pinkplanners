// components/BlogPage.js

import React from 'react';
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import NavbarWhite from '../../../components/NavbarWhite'
import Footer from '../../../components/Footer';
import { GenCarousel } from '../../../utils';
import CTA from '../../../components/CTA';
import { Metadata } from 'next'
import Link from 'next/link'
import third from './images/3.jpg'

export const metadata: Metadata = {
    title: 'Blogs',
    description: 'Discover what we offer for your needs. Your questions - our answers',
}
const BlogPage = () => {
    const blogPosts = [
        {
            title: 'Traditional wedding',
            date: 'Traditional South Indian Wedding Rituals',
            img: "./work3.jpg",
            to: "/blog-traditional"
            // Add other details as needed
        },
        {
            title: 'Innovative wedding',
            date: 'Innovative Wedding Entertainment Ideas',
            img: "./work4.jpg",
            to: "blog-Innnovative    "
            // Add other details as needed
        },
        {
            title: 'Wedding Destinations',
            date: 'Wedding Destinations in South India',
            img:'./blog4.jpg' ,
            to: "/blog-Wedding-Destinations"
            // Add other details as needed
        },
        // {
        //     title: 'Journal Title 1',
        //     date: 'January 1, 2023',
        //     img: "./work6.jpg"
        //     // Add other details as needed
        // },
        // {
        //     title: 'Journal Title 1',
        //     date: 'January 1, 2023',
        //     img: "./work7.jpg"
        //     // Add other details as needed
        // },
        // {
        //     title: 'Journal Title 1',
        //     date: 'January 1, 2023',
        //     img: "./work8.jpg"
        //     // Add other details as needed
        // },
        // {
        //     title: 'Journal Title 1',
        //     date: 'January 1, 2023',
        //     img: "./work9.jpg"
        //     // Add other details as needed
        // },
        // Add more blog posts similarly
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
            <div className="text  mb-12 py-10 text-center flex-col flex space-y-3">
                <div className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}>
                    Journals
                </div>
                <div className='text-2xl font-light'>Discover what we offer for your needs</div>
            </div>

            <div className="sm:mx-24 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                        {blogPosts.map((post, index) => (
                            
                            <div
                            key={index}
                            className={`${index  === 2 ? 'w-[1250px]' : ' '
                        } rounded-lg overflow-hidden cursor-pointer sm:hover:-translate-y-5 duration-500    transition-all  bg-white shadow-md`}
                        >
                                
                                <Link href={post.to}>

                                    <div style={{
                                        backgroundImage: `url(${post.img})`
                                    }} className=" bg-cover flex saturate-50 flex-col  bg-center h-72">
                                        <div className='p-6 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent'>
                                            <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-2">{post.title}</h3>
                                            <p className="text-gray-200 mb-4">{post.date}</p>
                                        </div>
                                        {/* Add more details or buttons as needed */}
                                    </div>
                                </Link>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CTA />
        </>
    );
};

export default BlogPage;
