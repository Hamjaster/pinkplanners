import React from 'react'
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })

export default function Events() {
    return (
        <div className='flex my-24 w-full flex-col items-center justify-center'>

            <section className="py-12 w-10/12">

                <div className="container mx-auto text-center mb-8">
                    <h2 className={`text-6xl text-[#df1d74] font-bold ${dancing.className}`}>Events</h2>
                    <h3 className='text-2xl font-light'>Giving you Lifetime of Memories</h3>
                </div>

                <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-8">

                    {/* Card 1 */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Logo */}
                            <div className="relative h-56">
                                <Image fill
                                    src="/corporate.jpg" // Replace with your image path
                                    alt="Event Logo 1"
                                    className="w-full h-56 object-cover object-center"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
                                <p className="text-[#df1d74] cursor-pointer hover:underline">

                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Logo */}
                            <div className="relative h-56">

                                <Image fill
                                    src="/destination-weddings.jpg" // Replace with your image path
                                    alt="Event Logo 2"
                                    className="w-full h-56 object-cover object-center"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Destination Weddings</h3>
                                <p className="text-[#df1d74] cursor-pointer hover:underline">

                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Logo */}
                            <div className="relative h-56">
                                <Image fill
                                    src="/wedding.jpg" // Replace with your image path
                                    alt="Event Logo 3"
                                    className="w-full h-56 object-cover object-center"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Weddings</h3>
                                <p className="text-[#df1d74] cursor-pointer hover:underline">
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
