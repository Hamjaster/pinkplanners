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
                    Customised Weddings

                </div>
                <div className='text-2xl font-light'>Where every details spark joy</div>
            </div>
            {/** bullet points  */}
            <div className='justify-center m-8 mx-10 align-middle flex'>
                <div className='space-y-6 shadow-lg rounded-2xl border-4 p-8 border-gray-900  md:text-xl font'>
                    <li>Tailored wedding planning services to reflect your unique love story</li>
                    <li>Expert team of planners and designers dedicated to bringing your vision to life</li>
                    <li>Customized services for venue selection, décor design, catering, and
                        entertainment</li>
                    <li>Meticulous attention to detail to ensure every aspect of your wedding is
                        personalized</li>
                    <li>Seamless execution on your special day for a stress-free experience
                    </li>
                    <li>Unparalleled commitment to creating unforgettable moments for you and your
                        loved ones
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
                            <h2 className="mb-8 text-4xl tracking-tight  font-extrabold leading-tight text-gray-900 dark:text-white">RContact us today to start planning your dream wedding! </h2>
                            <Link href={"/contact"} className="border border-black text-white hover:bg-black hover:text-white transition-all font-medium text-lg px-9 py-2.5 mr-2 mb-2 ">Click to Begin Your Journey</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
