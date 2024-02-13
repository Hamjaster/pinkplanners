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
        Traditional South Indian Wedding Rituals
        </div>
      </div>
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        In South India, weddings aren't merely ceremonies; they're elaborate celebrations steeped in cultural heritage and ancient traditions. Traditional South Indian wedding rituals are a beautiful amalgamation of customs and symbolisms, reflecting the region's profound values.
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
        Among the most significant rituals is the "Muhurtham," marking the auspicious moment for the marriage ceremony, determined by celestial alignments. The "Kanyadaanam" symbolizes the bride's parents entrusting her to the groom, signifying their blessings for her future happiness.
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        The exchange of garlands, or "Jaimala," signifies mutual acceptance and union, while the "Saptapadi" involves taking seven sacred steps together, representing their journey through life as companions.
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
        Other rituals include the "Mangalsutra Dharana," where the groom adorns the bride with a sacred thread, and the "Sindoor Daanam," where he applies vermilion in her hair parting, symbolizing her marital status.
        </div>
        </div>
        <div className='text-4xl font-normal p-6'>Traditional South Indian weddings embody not just the union of two souls but a celebration of love, family, and cultural heritage passed down through generations.</div>
        <CTA/>
    </>
  )
}
