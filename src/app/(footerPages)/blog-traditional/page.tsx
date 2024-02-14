import React from 'react'
import Navbar from '../../../components/NavbarWhite'
import { Arizonia } from 'next/font/google'
import CTA from '../../../components/CTA'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'
import muhurtham from './images/Muhurtham.jpg'
import dhanam from './images/dhanam.jpg'
import garlands from './images/garlands.jpg'
import steps from './images/steps.jpg'
import sutra from './images/sutra.jpg'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Traditional weddings in South India',
    description: 'Traditional South Indian weddings embody not just the union of two souls but a celebration of love, family, and cultural heritage passed down through generations. ',
  }
  
export default function page() {
  const headings = [
    "Muhurtam",
    "Kanyadhanam",
    "Exchange of Garlands",
    "Saptapadi",
    "Mangal Sutra Dhrana",
  ];

  const descriptions = [
    "Among the most significant rituals is the 'Muhurtham,' marking the auspicious moment for the marriage ceremony, determined by celestial alignments.",
    "The 'Kanyadaanam' symbolizes the bride's parents entrusting her to the groom, signifying their blessings for her future happiness.",
    "The exchange of garlands, or 'Jaimala,' signifies mutual acceptance and union.",
    "The 'Saptapadi' involves taking seven sacred steps together, representing their journey through life as companions.",
    "The 'Mangalsutra Dharana' where the groom adorns the bride with a sacred thread.",
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
            <h2 className="text-xl font-semibold mb-4">{headings[0]}</h2>
            <p className="text-gray-700 mb-4">
             {descriptions[0]}
            </p>
            <center>
              <Image
                    src={muhurtham}
                    className=''
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{headings[1]}</h2>
            <p className="text-gray-700 mb-4">
            {descriptions[1]}
            </p>
            <center>
              <Image
                    src={dhanam}
                    className=''
                    alt="Picture of the author"
                />

            </center>
          </div>
          <div className="col-span-1 sm:col-span-4 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{headings[4]}</h2>
            <p className="text-gray-700 mb-4">
             {descriptions[4]}
            </p>
            <center>
              <Image
                    src={sutra}
                    className=''
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>
        </div>

        {/* Second line */}
        <div className="col-span-1 sm:col-span-3 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{headings[2]}</h2>
            <p className="text-gray-700 mb-4">
             {descriptions[2]} 
            </p>
            <center>
              <Image
                    src={garlands}
                    className=''
                    alt="Picture of the author"
                />

            </center>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3   ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{headings[3]}</h2>
            <p className="text-gray-700 mb-4">
              {descriptions[3]}
            </p>
            <center>
              <Image
                    src={steps}
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
