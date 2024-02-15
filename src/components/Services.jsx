"use client"
import React, { useState } from 'react'
import { Dancing_Script } from 'next/font/google'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })

export const services = {
    wedding: ["Weddings", "Whispers of Romance, Echoes of Elegance", 'Explore Diamol Weddings','./12.jpg'],
    destination: ["Destinations", "Beyond expectations, beyond borders ", 'Explore Destination Events', "./destination-weddings.jpg"],
    theme: ["Theme Parties", "Where Creativity Meets Atmosphere", 'Explore Theme Parties', "./work9.jpg"],
    Celebinspiredwed: ["Celeb inspired weds", "Get your Weeds as a celebrity", 'Explore celeb wedings', "./work9.jpg"],
}
export default function Services() {

    const [service, setService] = useState('wedding')

    return (
        <div className='mb-44'>

            <h1 className={`' text-6xl my-12 text-center font-semibold ${dancing.className} '`}>Our Services</h1>

            <div className='px-6 flex flex-col md:flex-row justify-between items-center w-full'>

                <ul className='[&>*]:py-4 text-sm sm:text-md grid grid-cols-2 sm:grid-cols-3 md:block font-light relative'>
                    <li onClick={() => setService('destination')} className={` ${service === "destination" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-4 pr-8 sm:pl-7 pl-4 pr-8 sm:pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Destinations</li>

                    <li onClick={() => setService('theme')} className={` ${service === "theme" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-4 pr-8 sm:pl-7 pl-4 pr-8 sm:pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Theme Parties</li>

                    <li onClick={() => setService('wedding')} className={` ${service === "wedding" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-4 pr-8 sm:pl-7 pl-4 pr-8 sm:pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Weddings</li>
                    <li onClick={() => setService('Celebinspiredwed')} className={` ${service ==="Celebinspiredwed" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-4 pr-8 sm:pl-7 pl-4 pr-8 sm:pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Celeb inspired weds</li>



                    {/* white box in PC */}
                    <div className="hidden md:flex w-[25rem] lg:w-[36rem] pl-7 lg:pl-28 pr-7 lg:pr-12 flex-col justify-center space-y-5 h-[110%] lg:h-[150%] mx-8 bg-white absolute top-1/2 left-full -translate-y-1/2">
                        <div className="font-mono uppercase tracking-[0.1rem]">{services[service][0]}</div>
                        <div className="text-3xl font-normal">
                            {services[service][1]}
                        </div>
                        <div className="text-xl underline cursor-pointer">{services[service][2]}</div>
                    </div>
                </ul>

                <div className="flex md:hidden items-start w-full py-8 flex-col justify-center space-y-3  h-[150%] mx-8 bg-white">

                    <div className="font-mono uppercase tracking-[0.1rem]">{services[service][0]}</div>
                    <div className="text-2xl font-normal">
                        {services[service][1]}
                    </div>
                    <div className="text-base underline cursor-pointer">{services[service][2]}</div>

                </div>

                {/* <img className='w-[47rem]' src={services[service][3]} alt="" srcset="" /> */}
                <div style={{ backgroundImage: `url(${services[service][3]})` }} className="image bg-center bg-cover w-full h-[40rem] md:w-[40rem]">

                </div>
            </div>
        </div>
    )
}
