import React from 'react'
import Navbar from '../../../components/NavbarWhite'
import { Arizonia } from 'next/font/google'
import CTA from '../../../components/CTA'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
export default function page() {
  return (
    <>
      <Navbar />
      <div className='h-20'></div>
      <div className="text mb-12  py-10 text-center flex-col flex space-y-3">
        <div className={`" ${dancing.className} text-4xl md:text-6xl tracking-wide font-bold"`}>
        Innovative Wedding Entertainment Ideas
        </div>
        <div className='text-2xl font-light'>Here are some innovative suggestions to craft your special day:</div>
      </div>
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Interactive Photo Experiences: Set up themed photo booths for candid memories.
        </div>
        <div>
          <img className='rounded-lg' src='/work1.jpg'/>
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div>
          <img className='rounded-lg' src='/work1.jpg'/>
        </div>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Live Performances: Hire musicians or dancers for cocktail hour entertainment.
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Engaging Games: Include giant Jenga or cornhole for guest enjoyment.
        </div>
        <div>
          <img className='rounded-lg' src='/work1.jpg'/>
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div>
          <img className='rounded-lg' src='/work1.jpg'/>
        </div>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Dance Workshops: Offer dance lessons to get guests moving.
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Culinary Stations: Feature gourmet food and drink options for mingling.
        </div>
        <div>
          <img className='rounded-lg' src='/work1.jpg'/>
        </div>
        </div>
        <div className='text-4xl font-normal p-6'>Surprise Acts: Arrange unexpected performances for added excitement.
These unique wedding entertainment ideas promise memorable moments for you and your guests.
</div>
        <CTA/>
    </>
  )
}
