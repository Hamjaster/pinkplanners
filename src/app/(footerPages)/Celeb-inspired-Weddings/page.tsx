import React from 'react'
import { Arizonia } from 'next/font/google'
import Navbar from '../../../components/NavbarWhite'
import { GenCarousel } from '../../../utils'
import Link from 'next/link'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Celeb Inspired Weddings',
    description: "Our offerings are personalized to fit your vision and budget, whether you're planning a grand celebration or an intimate gathering like your ideal.",
  }
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
                Celeb inspired Weddings
                </div>
                <div className='text-2xl font-light'>Where every details spark joy</div>
            </div>
            {/** bullet points  */}
            <div className='justify-center m-8 mx-10 align-middle flex'>
                <div className='space-y-6 shadow-lg rounded-2xl border-4 p-8 border-gray-900  md:text-xl font'>
                    <li>Personalized Red Carpet Experience: Enjoy the elegance of Hollywood's red carpet events with tailored
décor and floral arrangements designed to match your unique style.
</li>
                    <li>Celeb-Inspired Themes: Draw inspiration from your favorite celebrities, whether it's the grandeur of royal
weddings or the modern chic of Hollywood affairs</li>
                    <li>Customized Services: Our offerings are personalized to fit your vision and budget, whether you're
planning a grand celebration or an intimate gathering.</li>
                    <li>Guidance at Every Step: Our experienced team provides expert advice and support throughout the
planning process to ensure that every detail reflects your dream wedding.</li>
                    <li>Your Star-Studded Celebration Awaits: Let us help you create a wedding day that shines as bright as
your favorite celebrities'.
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
                            <h2 className="mb-8 text-4xl tracking-tight  font-extrabold leading-tight text-gray-900 dark:text-white">To kick-start the journey to your dream celebrity-inspired wedding.</h2>
                            <Link href={"/contact"} className="border border-black text-white hover:bg-black hover:text-white transition-all font-medium text-lg px-9 py-2.5 mr-2 mb-2 ">Get in touch</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
