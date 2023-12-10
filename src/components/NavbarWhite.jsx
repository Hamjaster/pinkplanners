"use client"
import React, { useEffect, useRef, useState, } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link';
// import logo from '../images/logo.jpg'

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [show, setshow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='sm:mb-20'>
            {/* <Navbar/> */}
            <div className={`transition-all shadow-lg hidden lg:flex duration-300 w-full text-md bg-transparent bg-white text-black space-x-4 flex-row justify-evenly py-6 items-center `}>

                <Link href={'/home'}>
                    <div className={`item text-2xl text-black font-bold `}>Diamol</div>
                </Link>

                <div className="items hidden [&>div]:cursor-pointer  flex-col space-y-1 sm:space-y-0 lg:flex sm:space-x-8 sm:flex-row justify-evenly items-start sm:items-center [&>*]:uppercase ">

                    <div className="item">Services</div>

                    <Link href='/destination'>
                        <div className="item">Destinations</div>
                    </Link>
                    <div className="item">About Me</div>
                    <Link href='/gallery'>
                        <div className="item">Gallery</div>
                    </Link>
                    <div className="item">Journals</div>
                </div>

                <Link href={'/contact'} >
                    <div className={`"contact border-black hover:text-white hover:bg-black transition-all duration-500 cursor-pointer border px-6 py-2 "`}>
                        CONTACT US
                    </div>
                </Link>


            </div>
            {/* Nav menu on small screens */}
            <div className={`${show ? '' : "hidden"} bg-black z-50 fixed overflow-y-hidden  text-white top-0 right-0 w-full h-full flex flex-col items-center justify-start space-y-6 pt-20 text-xl `}>
                <div onClick={() => setshow(false)} className="absolute cursor-pointer top-4 right-4">
                    <AiOutlineClose />
                </div>
                <div className="item">Home</div>
                <div className="item">My Orders</div>
                <div className="item">Create a Product</div>
                <div className='item'>Logout</div>
            </div>
            {/* Mobile nav */}
            <div className={`bg-white shadow-lg text-black py-5 transition-all lg:hidden w-full flex px-12 flex-row bg-transparent items-center justify-between`}>
                <span className='text-3xl font-bold'>Logo</span>
                <span onClick={() => setshow(true)} className='text-3xl cursor-pointer'><VscMenu /></span>
            </div>

        </div>
    )
}
