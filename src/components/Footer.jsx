import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-black flex flex-row-reverse justify-between items-center px-12 py-8 text-lg text-white'>

            <div className="logos text-3xl items-center flex flex-row space-x-8">
                <div className='hover:text-gray-300 cursor-pointer'><FaInstagram /></div>
                <div className='hover:text-gray-300 cursor-pointer'><FaFacebook /></div>
                <div className='hover:text-gray-300 cursor-pointer'><FaTwitter /></div>
                <div className='hover:text-gray-300 cursor-pointer'><FaWhatsapp /></div>
            </div>

            <div className='text-gray-300 font-extralight'>
                © 2023 Diamol Events. All rights reserved.
            </div>

        </div>
    )
}
