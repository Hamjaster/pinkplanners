import React from 'react'
import Navbar from '../../../components/NavbarWhite'
import { Arizonia } from 'next/font/google'
import CTA from '../../../components/CTA'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wedding Destinations in South India',
  description: "Embark on a journey through South India's enchanting locales, each offering a unique backdrop for your dream  weddings",
}

export default function page() {
  return (
    <>
      <Navbar />
      <div className='h-20'></div>
      <div className="text mb-12  py-10 text-center flex-col flex space-y-3">
        <div className={`" ${dancing.className} text-4xl md:text-6xl tracking-wide font-bold"`}>
        Wedding Destinations in South India
        </div>
        <div className='text-2xl font-light'>Here are some innovative suggestions to craft your special day:</div>
        <div className='text-4xl font-normal p-6'>Embark on a journey through South India's enchanting locales, each offering a unique backdrop for your dream wedding:
</div>
      </div>
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
       Kerala Backwaters: Experience the serenity of Kerala's backwaters, where traditional houseboats or lakeside resorts provide a tranquil setting for exchanging vows.

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
        Udaipur, Rajasthan: Revel in regal splendor in Udaipur, known as the "City of Lakes," where majestic palaces offer breathtaking views of shimmering waters and lush gardens.
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Coorg, Karnataka: Find solace amidst Coorg's misty hills and verdant coffee plantations, ideal for intimate celebrations immersed in natural beauty.
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
        Goa Beaches: Embrace the romance of Goa's pristine beaches, where golden sands and turquoise waters create a picturesque backdrop for seaside ceremonies.
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Pondicherry French Quarter: Transport guests to a bygone era in Pondicherry's charming French Quarter, characterized by colonial architecture and quaint streets perfect for intimate gatherings.
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
        Munnar Tea Gardens: Lose yourselves in the tranquility of Munnar's tea gardens, where rolling hills and lush landscapes offer a fairy-tale setting for your special day.
        </div>
        </div>
        {/*  part  */}
      <div className='flex flex-1 m-10 shadow-2xl p-4'>
        <div className='w-[70%] text-4xl font-normal p-6 flex align-middle justify-center'>
        Hampi, Karnataka: Immerse yourselves in history amidst Hampi's ancient ruins and majestic temples, providing a culturally rich backdrop for a one-of-a-kind wedding celebration.
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
        Pondicherry French Quarter: Transport guests to a bygone era in Pondicherry's charming French Quarter, characterized by colonial architecture and quaint streets perfect for intimate gatherings.
        </div>
        </div>
        <div className='text-4xl font-normal p-6'>Each destination in South India offers a blend of culture, natural beauty, and charm, promising an unforgettable wedding tailored to your desires.
        </div>
        <CTA/>
    </>
  )
}
