import Image from 'next/image'
import React from 'react'
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function About() {
    return (
        <section className="flex my-44 flex-col items-center justify-center">

            <div className="w-full lg:w-4/5">

                <div className="lg:flex px-36 lg:px-0 lg:flex-row justify-center items-center lg:space-x-8">

                    <div className="mx-auto lg:w-1/2 mb-6 lg:mb-0">
                        {/* Image component from Next.js */}
                        <Image
                            src="/about.webp" // Replace with your image path
                            alt="About Us"
                            width={500}
                            height={500}
                            className='about-img text-center mx-auto'
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="text-center lg:text-left">
                            <h2 className={`text-5xl text-[#df1d74] font-bold mb-4 ${dancing.className}`}>About Us</h2>
                            <p className="text-lg">
                                We provide all you need for a perfect party whatever the size, theme or location. From the importance of delectable catering, perfect venue sourcing or beautiful marquees, fabulous props, creative floral displays, stunning lighting, music and entertainment.
                                <br /><br />


                                With meticulous attention to detail, whatever the size or budget. Providing you and your guests a unique experience in the UK or Overseas
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
