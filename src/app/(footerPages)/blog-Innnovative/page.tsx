import React from 'react'
import Navbar from '../../../components/NavbarWhite'
import { Arizonia } from 'next/font/google'
import CTA from '../../../components/CTA'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'
import Image from 'next/image'
import suprise from './images/suprise.jpg'
import photoboth from './images/photoboth.jpg'
import dance from './images/dance.jpg'
import games from './images/games.jpg'
import live from './images/live.jpg'

export const metadata: Metadata = {
  title: 'Wedding Destinations in South India',
  description: "Embark on a journey through South India's enchanting locales, each offering a unique backdrop for your dream  weddings",
}

export default function page() {
  const destinations = [
    { name: "Photobooth", description:" Interactive Photo Experiences: Set up themed photo booths for candid memories.    " },
    { name: "Live performance", description: "Live Performances: Hire musicians or dancers for cocktail hour entertainment.     " },
    { name: "Engaging games    ", description: "Engaging Games: Include giant Jenga or cornhole for guest enjoyment    " },
    { name: "Dance workshops", description: "Dance Workshops: Offer dance lessons to get guests moving    " },
    { name: "Surprise acts memorable moments", description: "Surprise Acts: Arrange unexpected performances for added excitement. These unique wedding entertainment ideas promise memorable moments for you and your guests." },
  ];
  return (
    <>
      <Navbar />
      <div className='h-20'></div>
      <div className="text mb-12  py-10 text-center flex-col flex space-y-3">
        <div className={`" ${dancing.className} text-4xl md:text-6xl tracking-wide font-bold"`}>
        Traditional South Indian Wedding Rituals
        </div>
        <div className='w-9/12 mx-auto text-lg font-light'>
        In South India, weddings aren't merely ceremonies; they're elaborate celebrations steeped in cultural heritage and ancient traditions. Traditional South Indian wedding rituals are a beautiful amalgamation of customs and symbolisms, reflecting the region's profound values.
        </div>
      </div>

      <div className="grid md:mx-36 grid-cols-1 sm:grid-cols-6 gap-8">

        {/* First line */}
        <div className="col-span-1 sm:col-span-4 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[0].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[0].description}
            </p>
            <center>
              <Image
                    src={photoboth}
                    className='h-[660px] w-[400px]'
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 ">
          <div className="bg-white p-6 h-[600px] rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[1].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[1].description}
            </p>
            <center>
              <Image
                    src={live}
                    className='mt-20'
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>

        {/* Second line */}
        <div className="col-span-1 sm:col-span-3 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[2].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[2].description}
            </p>
            <center>
              <Image
                    src={games}
                    className=''
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3   ">
          <div className="bg-white p-6 h-[880px] rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[4].name}</h2>
            <p className="text-gray-700 mb-4">
              {destinations[4].description}
            </p>
            <center>
              <Image
                    src={suprise}
                    className=''
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>

                
        <div className="col-span-1 sm:col-span-4 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[3].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[3].description}
            </p>
            <center>
              <Image
                    src={dance}
                    className=''
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>
   
      </div>


      <CTA/>
    </>
  )
}
