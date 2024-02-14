"use client"
import React, { useEffect, useRef, useState, } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from './Logo.png'
// import logo from '../../public/logo.jpg'

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

            <div className={`${isSticky ? "navbar-white shadow-xl" : ""} hidden transition-all duration-300 lg:flex fixed z-50 w-full text-md bg-transparent text-white space-x-4 flex-row justify-evenly py-12  items-center bg-gradient-to-b from-black to-transparent`}>
                <div href={'/'}>
                    <img src='' typeof='.png' className='' />
                </div>

                <div className="items hidden [&>div]:cursor-pointer  flex-col space-y-1 sm:space-y-0 lg:flex sm:space-x-8 sm:flex-row justify-evenly items-start sm:items-center [&>*]:uppercase ">

                    <Link href='/events'>
                        <div className="item">Events</div>
                    </Link>

                    <Link href='/destination'>
                        <div className="item">Destinations</div>
                    </Link>
                    <Link href='/about'>About Us</Link>
                    <Link href='/gallery'>
                        <div className="item">Gallery</div>
                    </Link>
                    <Link href='/blogs'>
                        <div className="item">Journals</div>
                    </Link>
                </div>

                <Link href={'/contact'} >
                    <div className={`"contact transition-all duration-500 cursor-pointer border px-6 py-2  ${isSticky ? "border-black hover:text-white hover:bg-black" : "border-white hover:bg-white hover:text-black"} "`}>
                        CONTACT US
                    </div>
                </Link>


            </div>

            {/* Nav menu on small screens */}
            <div className={`${show ? '' : "hidden"} bg-black overflow-y-hidden z-50 text-white top-0 right-0 w-full h-full flex flex-col items-center justify-start space-y-6 pt-20 text-xl fixed`}>
                <div onClick={() => setshow(false)} className="absolute cursor-pointer top-4 right-4">
                    <AiOutlineClose />
                </div>
                <div className='cursor-pointer' onClick={() => moveBy('/')}>Home</div>
                <div className='cursor-pointer' onClick={() => moveBy('/about')}>About</div>
                <div className='cursor-pointer' onClick={() => moveBy('/gallery')}>Gallery</div>
                <div className='cursor-pointer' onClick={() => moveBy('/destinations')}>Destinations</div>
                <div className='cursor-pointer' onClick={() => moveBy('/blogs')}>Journals</div>
                <div className='cursor-pointer' onClick={() => moveBy('/contact')}>Contact us</div>
            </div>
            {/* Mobile nav */}
            <div className={`${isSticky ? "bg-white text-black py-3 " : "bg-gradient-to-b from-black to-transparent text-white  py-6"} transition-all fixed lg:hidden w-full  z-40 flex px-12 flex-row bg-transparent items-center justify-between`}>
                <span className='text-3xl font-bold'>Logo</span>
                <span onClick={() => setshow(true)} className='text-3xl cursor-pointer'><VscMenu /></span>
            </div>

        </>
    )
}
