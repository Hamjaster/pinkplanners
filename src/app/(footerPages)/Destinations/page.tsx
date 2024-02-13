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
          Destination Weddings
        </div>
        <div className='text-2xl font-light'>Where every details spark joy</div>
      </div>
      {/** bullet points  */}
      <div className='justify-center shadow-lg rounded-2xl border-4 border-gray-900 p-6 m-8 mx-10 align-middle flex'>
       <div className='space-y-6 md:text-xl font'>
       <li>Pick Your Perfect Place: Choose from a variety of beautiful destinations like beaches, historic sites, or
          lush landscapes</li>
        <li>We Handle Everything: Our team takes care of all the details for your destination wedding, from travel
          and lodging to finding the right venue and coordinating with vendors.</li>
        <li>Customized for You: We create personalized packages to fit your style and budget, making sure your
          wedding reflects your unique vision.</li>
        <li>Experience Local Culture: Dive into the local culture with special activities and experiences designed to
          showcase the best of your destination</li>
        <li>Expert Guidance: Our experienced team will guide you through the planning process, ensuring
          everything runs smoothly from start to finish.
        </li>
        <li>On-Site Support: We have dedicated coordinators on-site to make sure your wedding day goes off
          without a hitch, allowing you to relax and enjoy the moment.</li>
        <li>Make Memories: Your destination wedding will be a time to cherish forever, surrounded by the beauty of
          your chosen location and the love of your friends and family.
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
                        <h2 className="mb-8 text-4xl tracking-tight  font-extrabold leading-tight text-gray-900 dark:text-white">Reach out to us and begin your journey toward your perfect day. </h2>
                        <Link href={"/contact"} className="border border-black text-white hover:bg-black hover:text-white transition-all font-medium text-lg px-9 py-2.5 mr-2 mb-2 ">Start Planning Today</Link>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
