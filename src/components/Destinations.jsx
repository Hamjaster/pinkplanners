import React from 'react'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })


export default function Destinations() {
    return (
        <div className='px-4 sm:px-6 md:px-28 mb-12 text-center'>

            <div className="text my-12">
                <h2 className={`text-6xl text-black font-thin ${dancing.className}`}>Our Results</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">


                <div className="parent cursor-pointer shadow-xl  rounded-br-xl rounded-bl-xl">
                    <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work1.jpg'})` }}></div>
                </div>

                <div className="parent cursor-pointer shadow-xl   rounded-br-xl rounded-bl-xl">
                    <div class="bg-co ver bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work2.jpg'})` }}></div>
                </div>

                <div className="parent cursor-pointer shadow-xl   rounded-br-xl rounded-bl-xl">
                    <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work3.jpg'})` }}></div>
                </div>

                <div className="parent cursor-pointer shadow-xl   rounded-br-xl rounded-bl-xl">
                    <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work4.jpg'})` }}></div>
                </div>

                <div className="parent cursor-pointer shadow-xl   rounded-br-xl rounded-bl-xl">
                    <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work5.jpg'})` }}></div>
                </div>

                <div className="parent cursor-pointer shadow-xl   rounded-br-xl rounded-bl-xl">
                    <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work6.jpg'})` }}></div>
                </div>



            </div>
        </div>
    )
}
