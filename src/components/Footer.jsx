import React from 'react'
import { FaInstagram, FaPinterest } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-black mt-7 flex flex-row-reverse justify-between items-center px-12 py-8 text-base text-white'>

            <div className="logos gap-4 text-2xl sm:text-3xl items-center grid grid-cols-2 sm:grid-cols-4">
                <div className='hover:text-gray-300 cursor-pointer'><FaWhatsapp /></div>
                <div className='hover:text-gray-300 cursor-pointer'><FaInstagram /></div>
                <div className='hover:text-gray-300 cursor-pointer'><FaPinterest /></div>
                <div className='hover:text-gray-300 cursor-pointer'><FaFacebook /></div>
            </div>

            <div className='text-gray-300 text-sm sm:text-base font-extralight flex flex-col sm:flex-row sm:space-x-3 space-y-1 sm:space-y-0 '>
                <span className=''>© 2023 Diamol Events. All rights reserved.</span>

            </div>

        </div>
    )
}
