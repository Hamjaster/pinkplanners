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
  const destinations = [
    { name: "Kerala Backwaters", description: "Experience the serenity of Kerala's backwaters, where traditional houseboats or lakeside resorts provide a tranquil setting for exchanging vows." },
    { name: "Udaipur, Rajasthan", description: "Revel in regal splendor in Udaipur, known as the 'City of Lakes,' where majestic palaces offer breathtaking views of shimmering waters and lush gardens." },
    { name: "Coorg, Karnataka", description: "Find solace amidst Coorg's misty hills and verdant coffee plantations, ideal for intimate celebrations immersed in natural beauty." },
    { name: "Goa Beaches", description: "Embrace the romance of Goa's pristine beaches, where golden sands and turquoise waters create a picturesque backdrop for seaside ceremonies." },
    { name: "Pondicherry French Quarter", description: "Transport guests to a bygone era in Pondicherry's charming French Quarter, characterized by colonial architecture and quaint streets perfect for intimate gatherings." },
    { name: "Munnar Tea Gardens", description: "Lose yourselves in the tranquility of Munnar's tea gardens, where rolling hills and lush landscapes offer a fairy-tale setting for your special day." },
    { name: "Hampi, Karnataka", description: "Immerse yourselves in history amidst Hampi's ancient ruins and majestic temples, providing a culturally rich backdrop for a one-of-a-kind wedding celebration." },
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

      <div className="grid mx-36 grid-cols-1 sm:grid-cols-6 gap-8">

        {/* First line */}
        <div className="col-span-1 sm:col-span-4 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[0].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[0].description}
            </p>
            <div style={{
              backgroundImage : 'url(https://picsum.photos/200)'
            }} className='bg-cover bg-center w-full h-44' 
            >
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[1].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[1].description}
            </p>
            <div style={{
              backgroundImage : 'url(https://picsum.photos/200)'
            }} className='bg-cover bg-center w-full h-44' 
            >
            </div>
          </div>
        </div>

        {/* Second line */}
        <div className="col-span-1 sm:col-span-3 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[2].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[2].description}
            </p>
            <div style={{
              backgroundImage : 'url(https://picsum.photos/200)'
            }} className='bg-cover bg-center w-full h-44' 
            >
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3   ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[3].name}</h2>
            <p className="text-gray-700 mb-4">
              {destinations[3].description}
            </p>
            <div style={{
              backgroundImage : 'url(https://picsum.photos/200)'
            }} className='bg-cover bg-center w-full h-44' 
            >
            </div>
          </div>
        </div>

                
        {/* First line */}
        <div className="col-span-1 sm:col-span-4 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[4].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[4].description}
            </p>
            <div style={{
              backgroundImage : 'url(https://picsum.photos/200)'
            }} className='bg-cover bg-center w-full h-44' 
            >
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[5].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[5].description}
            </p>
            <div style={{
              backgroundImage : 'url(https://picsum.photos/200)'
            }} className='bg-cover bg-center w-full h-44' 
            >
            </div>
          </div>
        </div>

        {/* Second line */}
        <div className="col-span-1 sm:col-span-3 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{destinations[6].name}</h2>
            <p className="text-gray-700 mb-4">
            {destinations[6].description}
            </p>
            <div style={{
              backgroundImage : 'url(https://picsum.photos/200)'
            }} className='bg-cover bg-center w-full h-44' 
            >
            </div>
          </div>
        </div>
   
      </div>


      <CTA/>
    </>
  )
}
