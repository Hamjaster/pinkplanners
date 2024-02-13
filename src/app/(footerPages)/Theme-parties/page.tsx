import React from 'react'
import { Arizonia } from 'next/font/google'
import Navbar from '../../../components/NavbarWhite'
import { GenCarousel } from '../../../utils'
import Link from 'next/link'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
export default function page() {
    const images = [
        "/work1.jpg", "/work2.jpg", "/work3.jpg", "/work4.jpg", "/work5.jpg", "/work6.jpg", "/work7.jpg", "/work8.jpg"
    ]
    return (
        <>
            <Navbar />
            <div className="pt-28">
                {/* <GenCarousel images={images} /> */}
            </div>
            <div className="text mb-12  py-10 text-center flex-col flex space-y-3">
                <div className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}>
                    Theme parties
                </div>
                <div className='text-2xl font-light'>Where every details spark joy</div>
            </div>
            {/** bullet points  */}
            <div className='justify-center shadow-lg rounded-2xl border-4 border-gray-900 p-6 m-8 mx-10 align-middle flex'>
                <div className='space-y-6 md:text-xl font'>
                    <li>Bachelor's Bash Bollywood Night: An evening filled with Bollywood glitz and glamour for the groom and his friends
                        to dance the night away</li>
                    <li>Sangeet Spectacular: Dancing Under the Stars: A vibrant and lively celebration featuring colorful décor, traditional
                        music, and dance performances to kick off the wedding festivities</li>
                    <li>Reception Royale: A Night of Elegance and Opulence: An elegant affair reminiscent of royalty, with regal décor, live
                        music, and gourmet cuisine to celebrate the newlyweds.
                    </li>
                    <li>Rajasthani Rendezvous: A Cultural Extravaganza: Immerse in the rich heritage of Rajasthan with traditional music,
                        dance, and cuisine, perfect for a pre-wedding event or reception.
                    </li>
                    <li>Goa Beach Bash: Sun, Sand, and Celebrations: A laid-back beach party for the wedding party and guests to enjoy
                        live music, fresh seafood, and beachside fun.

                    </li>
                    <li>Punjabi Party: Bhangra Beats and Bonhomie: A lively and energetic celebration featuring Punjabi music, dance
                        performances, and delicious cuisine for the sangeet or bachelor's party.
                    </li>
                    <li>Desert Safari Delight: Adventure in the Sands: An exhilarating desert adventure with camel rides, folk
                        performances, and Rajasthani cuisine, perfect for a pre-wedding event or bachelor's party.
                    </li>
                </div>
            </div>{/** bullet points --end */}
            <center>
                <img src='/work1.jpg' />
            </center>
            <div className='my-7'>
                <section className="bg-[#f3f4f6] dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h2 className="mb-8 text-4xl tracking-tight  font-extrabold leading-tight text-gray-900 dark:text-white">Add extra excitement and charm to each stage of the wedding celebrations </h2>
                            <Link href={"/contact"} className="border border-black text-white hover:bg-black hover:text-white transition-all font-medium text-lg px-9 py-2.5 mr-2 mb-2 ">Make your guest talk</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
