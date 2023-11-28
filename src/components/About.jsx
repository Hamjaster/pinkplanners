import Image from 'next/image'
import React from 'react'
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function About() {
    return (
        <section className="bg-gray-100 flex space-y-6 flex-col py-24 sm:py-44 px-10 sm:px-36 text-center items-center justify-center">

            <p className=' text-xl sm:text-2xl font-thin'>DIAMOL - Combining inventive concepts with an  organized event planning process</p>

            <strong className='text-lg sm:text-xl'>We are an inventive event agency.</strong>

        </section>
    )
}
