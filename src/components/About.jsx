import Image from 'next/image'
import React from 'react'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })

export default function About() {
    return (
        <section className=" flex space-y-6 flex-col pb-10 pt-16 sm:pt-28 px-10 sm:px-36 text-center items-center justify-center">

            <p className=' text-xl sm:text-3xl font-thin'>Diamol- Where dreams meet precision , Your event architects!</p>

            <strong className='text-lg sm:text-2xl'>Beyond events, we create experiences.</strong>

        </section>
    )
}
