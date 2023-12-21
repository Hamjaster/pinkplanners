// components/BlogPage.js

import React from 'react';
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import NavbarWhite from '../../components/NavbarWhite'
import Footer from '../../components/Footer';

const BlogPage = () => {
    const blogPosts = [
        {
            title: 'Journal Title 1',
            date: 'January 1, 2023',
            img: "./work3.jpg"
            // Add other details as needed
        },
        {
            title: 'Journal Title 1',
            date: 'January 1, 2023',
            img: "./work4.jpg"
            // Add other details as needed
        },
        {
            title: 'Journal Title 1',
            date: 'January 1, 2023',
            img: "./work5.jpg"
            // Add other details as needed
        },
        {
            title: 'Journal Title 1',
            date: 'January 1, 2023',
            img: "./work6.jpg"
            // Add other details as needed
        },
        {
            title: 'Journal Title 1',
            date: 'January 1, 2023',
            img: "./work7.jpg"
            // Add other details as needed
        },
        {
            title: 'Journal Title 1',
            date: 'January 1, 2023',
            img: "./work8.jpg"
            // Add other details as needed
        },
        {
            title: 'Journal Title 1',
            date: 'January 1, 2023',
            img: "./work9.jpg"
            // Add other details as needed
        },
        // Add more blog posts similarly
    ];

    return (
        <>
            <NavbarWhite />
            <div className="text pt-36 mb-12 py-10 text-center flex-col flex space-y-3">
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
                                className={`${index % 3 === 0 ? 'col-span-2' : 'col-span-1'
                                    } rounded-lg overflow-hidden cursor-pointer sm:hover:-translate-y-5 duration-500    transition-all  bg-white shadow-md`}
                            >

                                <div style={{
                                    backgroundImage: `url(${post.img})`
                                }} className=" bg-cover flex saturate-50 flex-col  bg-center h-72">
                                    <div className='p-6 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent'>

                                        <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-2">{post.title}</h3>
                                        <p className="text-gray-200 mb-4">{post.date}</p>
                                    </div>
                                    {/* Add more details or buttons as needed */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPage;
