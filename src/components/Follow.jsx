import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { FaInstagram } from 'react-icons/fa6'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })

export default function Follow() {
    return (
        <div className='bg-[#ffe2ef] space-y-12 px-28 py-28 flex flex-col items-center'>
            <div className="text-center">
                <h1 className={` text-6xl font-bold ${dancing.className} text-[#c40c5b]`}>Instagram</h1>
                <h3 className='text-2xl mt-2 font-thin' >Follow us to get more updates</h3>
            </div>

            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-8 flex items-center space-x-4 rounded-lg px-12 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg bg-[#df1d74] hover:bg-[#c40c5b]  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >

                <FaInstagram color='white' size={40} />

                <span className='text-2xl'>Follow</span>
            </button>

        </div>
    )
}
