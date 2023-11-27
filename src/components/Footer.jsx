import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-black space-y-12 flex flex-col items-center px-12 py-8 text-lg text-white'>

            <div className="logos  items-center flex flex-row space-x-12">
                <div className='text-4xl cursor-pointer'><FaInstagram /></div>
                <div className='text-4xl cursor-pointer'><FaFacebook /></div>
                <div className='text-4xl cursor-pointer'><FaTwitter /></div>
                <div className='text-4xl cursor-pointer'><FaWhatsapp /></div>
            </div>

            <div className='text-gray-300 font-extralight'>
                © 2023 Rafanelli Events. All rights reserved.
            </div>

        </div>
    )
}
