"use client"
import React, { useState } from 'react'
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function Services() {
    const [service, setService] = useState('wedding')

    const data = {
        wedding: ["Weddings", "Your big day, infused with magic.", 'Explore Diamol Weddings', "./work10.jpg"],
        destination: ["Destinations", "When the Wanderlust strikes!", 'Explore Destination Events', "./destination-weddings.jpg"],
        photo: ["photo", "It's much more than an event. It's your mission.", 'Explore Non-profit Events', "./work6.jpg"],
        social: ["Social", "Unforgettable celebrations, timeless memories – we make it happen", 'Explore Social Events', "work9.jpg"],
        corporate: ["Corporate", "Behind the theater and magic of your corporate event, we are all business.", 'Explore Corporate Events', "./corporate.jpg"],
    }

    return (
        <div className='my-44'>
            <h1 className={`' text-6xl my-28 text-center font-semibold ${dancing.className} '`}>Our Services</h1>
            <div className='flex flex-row justify-between items-center w-full'>

                <ul className='[&>*]:py-4  font-light relative'>
                    <li onClick={() => setService('destination')} className={` ${service === "destination" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-7 pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Destinations</li>

                    <li onClick={() => setService('corporate')} className={` ${service === "corporate" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-7 pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Corporate</li>

                    <li onClick={() => setService('wedding')} className={` ${service === "wedding" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-7 pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Weddings</li>

                    <li onClick={() => setService('photo')} className={` ${service === "photo" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-7 pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Photography</li>


                    <li onClick={() => setService('social')} className={` ${service === "social" ? " bg-gray-100 text-black " : " text-gray-400 "} pl-7 pr-28 uppercase cursor-pointer  tracking-widest font-medium`}>Social</li>


                    <div className="w-[36rem] pl-28 pr-12 flex flex-col justify-center space-y-5  h-[150%] mx-8 bg-white absolute top-1/2 left-full -translate-y-1/2">
                        <div className="font-mono uppercase tracking-[0.1rem]">{data[service][0]}</div>
                        <div className="text-3xl font-normal">
                            {data[service][1]}
                        </div>
                        <div className="text-xl underline cursor-pointer">{data[service][2]}</div>
                    </div>

                </ul>
                <img className='w-[47rem]' src={data[service][3]} alt="" srcset="" />

            </div>
        </div>
    )
}
