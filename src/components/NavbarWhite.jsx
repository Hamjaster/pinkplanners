"use client"
import React, { useEffect, useRef, useState, } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from './Logo.png'
// import logo from '../images/logo.jpg'

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [show, setshow] = useState(false)
    const router = useRouter()

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

    const moveBy = (to) => {
        router.push(to)
        setshow(false)
    }

    return (
        <>
            {/* <Navbar/> */}
            <div className={`transition-all z-50 fixed shadow-lg hidden lg:flex duration-300 w-full text-md bg-transparent bg-white text-black space-x-4 flex-row justify-evenly py-6 items-center `}>

                <Link href={'/'}>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
                </Link>

                <div className="items hidden [&>div]:cursor-pointer  flex-col space-y-1 sm:space-y-0 lg:flex sm:space-x-8 sm:flex-row justify-evenly items-start sm:items-center [&>*]:uppercase ">
                    <Link href='/events'>
                        <div className="item">Events</div>
                    </Link>

                    <Link href='/destination'>
                        <div className="item">Destinations</div>
                    </Link>
                    <Link href={'/about'} className="item">About Us</Link>
                    <Link href='/gallery'>
                        <div className="item">Gallery</div>
                    </Link>
                    <Link href={'/blogs'}>
                        <div className="item">Journals</div>
                    </Link>
                </div>

                <Link href={'/contact'} >
                    <div className={`"contact border-black hover:text-white hover:bg-black transition-all duration-500 cursor-pointer border px-6 py-2 "`}>
                        CONTACT US
                    </div>
                </Link>


            </div>
            {/* menu on small screens */}
            <div className={`${show ? '' : "hidden"} bg-black z-50 fixed overflow-y-hidden  text-white top-0 right-0 w-full h-full flex flex-col items-center justify-start space-y-6 pt-20 text-xl `}>
                <div onClick={() => setshow(false)} className="absolute cursor-pointer top-4 right-4">
                    <AiOutlineClose />
                </div>

                <div className='cursor-pointer' onClick={() => moveBy('/events')}>Events</div>
                <div className='cursor-pointer' onClick={() => moveBy('/gallery')}>Gallery</div>
                <div className='cursor-pointer' onClick={() => moveBy('/destinations')}>Destinations</div>
                <div className='cursor-pointer' onClick={() => moveBy('/blogs')}>Journals</div>
                <div className='cursor-pointer' onClick={() => moveBy('/contact')}>Contact us</div>
            </div>
            {/* Mobile nav */}
            <div className={`bg-white shadow-lg text-black py-5 transition-all lg:hidden w-full flex px-12 flex-row bg-transparent items-center justify-between`}>
            <Link href={'/'}>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
                </Link>
                <span onClick={() => setshow(true)} className='text-3xl cursor-pointer'><VscMenu /></span>
            </div>



        </>
    )
}
