import React from 'react'
import Navbar from '../../../components/NavbarWhite'
import { Arizonia } from 'next/font/google'
import CTA from '../../../components/CTA'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'
// import muhurtham from './images/muhurtham.jpg'
import sutra from  './images/sutra.jpg'
import steps from './images/steps.jpg'
import garlands from './images/garlands.jpg'
import dhanam from './images/dhanam.jpg'
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
              <img
                    src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Ftraadiotional-blog%2Fmuhurtham.jpg?alt=media&token=4b5cd01f-bd37-48c3-bb57-9efd09dbf1d4"}
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
              <img
                    src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Ftraadiotional-blog%2Fdhanam.jpg?alt=media&token=de486c79-56f1-4bab-90b1-c92a5c0d3394"}
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
              <img
                    src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Ftraadiotional-blog%2Fsutra.jpg?alt=media&token=61fcf27a-edee-49a4-8c58-11bb5cb5a458"}
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
              <img
                    src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Ftraadiotional-blog%2Fgarlands.jpg?alt=media&token=e70dd212-a7de-4eae-b388-66b644a6f78a"}
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
              <img
                    src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Ftraadiotional-blog%2Fsteps.jpg?alt=media&token=ce3c1746-d53b-4a6b-851b-78dae92a39fc"}
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
