"use client"
import React from 'react'
import CountUp from 'react-countup';
import { RiBankFill } from "react-icons/ri";
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react'
import { BsCalendar2EventFill, BsFillCalendarEventFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidCalendarEvent } from "react-icons/bi";

export default function Experience() {
    const [start, setStart] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setStart(true)} onExit={() => setStart(false)} className='flemy-44 text-xl px-20 grid grid-cols-1 md:grid-cols-3 gap-7 my-36'>

            <div className="card w-full group group-hover:text-white text-[#df1d74] cursor-pointer rounded-lg  py-4 flex flex-col items-center space-y-5">
                <div className="img group-hover:text-white text-9xl">
                    <RiBankFill />
                </div>
                <div className="text-5xl group-hover:text-[#ffb1d4] text-[#991c55]  font-bold">
                    2019
                </div>
                <div className='group-hover:text-white'>
                    Established In
                </div>
            </div>

            <div className="card group group-hover:text-white text-[#df1d74] cursor-pointer rounded-lg  py-4 flex flex-col items-center space-y-5">
                <div className="img group-hover:text-white text-9xl">
                    <BiSolidCalendarEvent />
                </div>
                <div className="text-5xl group-hover:text-[#ffb1d4] text-[#991c55]  font-bold">
                    {start ? <CountUp
                        start={0}
                        end={350}
                        duration={1.5}
                        suffix=' +'
                    />
                        : <span>0 +</span>
                    }
                </div>
                <div className='group-hover:text-white'>
                    Events organized
                </div>
            </div>

            <div className="card w-full group group-hover:text-white text-[#df1d74] cursor-pointer rounded-lg py-4 flex flex-col items-center space-y-5">
                <div className="img group-hover:text-white text-9xl">
                    <FaMapLocationDot />
                </div>
                <div className="text-5xl group-hover:text-[#ffb1d4] text-[#991c55]  font-bold">
                    {start ? <CountUp
                        start={0}
                        end={30}
                        duration={1.5}
                        suffix=' +'
                    />
                        : <span>0 +</span>
                    }
                </div>
                <div className='group-hover:text-white'>
                    Destinations covered
                </div>
            </div>


        </ScrollTrigger>
    )
}
