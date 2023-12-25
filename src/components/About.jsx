import Image from 'next/image'
import React from 'react'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })

export default function About() {
    return (
        <section className=" flex space-y-6 flex-col pt-20 sm:py-36 px-10 sm:px-36 text-center items-center justify-center">

            <p className=' text-xl sm:text-3xl font-thin'>DIAMOL - Combining inventive concepts with an  organized event planning process</p>

            <strong className='text-lg sm:text-2xl'>We are an creative event agency.</strong>

        </section>
    )
}
