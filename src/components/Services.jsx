"use client"
import React, { useState } from 'react'
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function Services() {
    const [service, setService] = useState('wedding')

    const data = {
        wedding: ["Weddings", "Your big day, infused with magic.", 'Explore Diamol Weddings', "./work6.jpg"],
        destination: ["Destinations", "When the Wanderlust strikes!", 'Explore Destination Events', "./destination-weddings.jpg"],
        theme: ["Theme Parties", "It's much more than an event. It's your mission.", 'Explore Theme Parties', "./work9.jpg"],
    }

    return (
        <div className='my-44'>

            <h1 className={`' text-6xl my-28 text-center font-semibold ${dancing.className} '`}>Our Services</h1>

            <div className='px-6 flex flex-col md:flex-row justify-between items-center w-full'>

                <ul className='[&>*]:py-4 text-sm sm:text-md grid grid-cols-2 sm:grid-cols-3 md:block font-light relative'>
                    <li onClick={() => setService('destination')} className={` ${service === "destination" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-4 pr-8 sm:pl-7 pl-4 pr-8 sm:pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Destinations</li>

                    <li onClick={() => setService('theme')} className={` ${service === "theme" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-4 pr-8 sm:pl-7 pl-4 pr-8 sm:pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Theme Parties</li>

                    <li onClick={() => setService('wedding')} className={` ${service === "wedding" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-4 pr-8 sm:pl-7 pl-4 pr-8 sm:pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Weddings</li>



                    {/* white box in PC */}
                    <div className="hidden md:flex w-[25rem] lg:w-[36rem] pl-7 lg:pl-28 pr-7 lg:pr-12 flex-col justify-center space-y-5 h-[110%] lg:h-[150%] mx-8 bg-white absolute top-1/2 left-full -translate-y-1/2">
                        <div className="font-mono uppercase tracking-[0.1rem]">{data[service][0]}</div>
                        <div className="text-3xl font-normal">
                            {data[service][1]}
                        </div>
                        <div className="text-xl underline cursor-pointer">{data[service][2]}</div>
                    </div>

                </ul>

                <div className="flex md:hidden items-start w-full py-8 flex-col justify-center space-y-3  h-[150%] mx-8 bg-white">

                    <div className="font-mono uppercase tracking-[0.1rem]">{data[service][0]}</div>
                    <div className="text-2xl font-normal">
                        {data[service][1]}
                    </div>
                    <div className="text-base underline cursor-pointer">{data[service][2]}</div>

                </div>

                {/* <img className='w-[47rem]' src={data[service][3]} alt="" srcset="" /> */}
                <div style={{ backgroundImage: `url(${data[service][3]})` }} className="image bg-center bg-cover w-full h-[40rem] md:w-[40rem]">

                </div>
            </div>
        </div>
    )
}