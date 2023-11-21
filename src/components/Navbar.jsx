"use client"
import React, { useEffect, useRef, useState, } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
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
        <>
            <div className={`${isSticky ? "navbar-white shadow-xl" : ""} hidden transition-all duration-300 md:flex fixed z-50 w-full text-md bg-transparent text-white space-x-4 flex-row justify-center py-12  items-center bg-gradient-to-b from-black to-transparent`}>

                <div className="items hidden [&>div]:cursor-pointer  flex-col space-y-1 sm:space-y-0 md:flex sm:space-x-8 sm:flex-row justify-evenly items-start sm:items-center [&>*]:uppercase ">
                    <div className="item">Services</div>
                    <div className="item">About Me</div>
                    <div className="item">Destinations</div>
                    <div className={`item text-2xl font-bold ${isSticky ? 'text-[#df1d74]' : ""} `}>Logo</div>
                    <div className="item">Gallery</div>
                    <div className="item">Journals</div>
                    <div className="item">Inquire</div>
                </div>

            </div>

            {/* Nav on small screens */}
            <div className={`${show ? '' : "hidden"} bg-black overflow-y-hidden z-50 text-white top-0 right-0 w-full h-full flex flex-col items-center justify-start space-y-6 pt-20 text-xl fixed`}>
                <div onClick={() => setshow(false)} className="absolute cursor-pointer top-4 right-4">
                    <AiOutlineClose />
                </div>
                <div className="item">Home</div>
                <div className="item">My Orders</div>
                <div className="item">Create a Product</div>
                <div className='item'>Logout</div>
            </div>

            <div className={`${isSticky ? "bg-white text-black py-3 " : "bg-gradient-to-b from-black to-transparent  py-6"} transition-all fixed md:hidden w-full text-white z-40 flex px-12 flex-row bg-transparent items-center justify-between`}>
                <span className='text-3xl font-bold'>Logo</span>
                <span onClick={() => setshow(true)} className='text-3xl cursor-pointer'><VscMenu /></span>
            </div>

        </>
    )
}
