import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { GrAssistListening } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { TiTabsOutline } from "react-icons/ti";
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function WhyUs() {
    return (
        <div><section className="container bg-[#ffe2ef] mx-auto py-20 space-y-12">
            <h2 className={`" text-5xl text-[#c40a5b] font-bold text-center mb-8 ${dancing.className}`}>Why US</h2>

            <div className=" px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

                {/* Card 1 */}
                <div className="flex flex-col items-center text-center w-full overflow-hidden">
                    <div className="hover:bg-[#df1d74] hover:text-white cursor-pointer hover:border-[#df1d74] transition-all border-8 border-[#c29bac] text-4xl bg-white p-8 rounded-full duration-500">
                        <GrUserExpert />
                    </div>
                    <div className="p-4 space-y-8">
                        <h3 className="text-xl  relative font-semibold mb-2 ">Expertise & Experience
                            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2  w-1/2 h-1 bg-black"></div>
                        </h3>
                        <p className="text-gray-600 font-mono text-sm" >
                            With more than 8 years, we have versatile experience with the industry and understand the inside know-hows and we have cracked the code of being able to apprehend client's emotional connect to any event, which we meet bang on, with their expectations.
                        </p>
                    </div>
                </div>

                {/* Card 1 */}
                <div className="flex flex-col items-center text-center w-full overflow-hidden">
                    <div className="hover:bg-[#df1d74] hover:text-white cursor-pointer hover:border-[#df1d74] transition-all border-8 border-[#c29bac] text-4xl bg-white p-8 rounded-full duration-500 ">
                        <GrAssistListening />
                    </div>
                    <div className="p-4 space-y-8">
                        <h3 className="text-xl  relative font-semibold mb-2 ">Attention to Details
                            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2  w-1/2 h-1 bg-black"></div>
                        </h3>
                        <p className="text-gray-600 font-mono text-sm" >
                            Smallest and Minutest details are taken into consideration when the event is conceptualized. We are known for delivering nothing but a perfect and memorable event for our clients.
                        </p>
                    </div>
                </div>

                {/* Card 1 */}
                <div className="flex flex-col items-center text-center w-full overflow-hidden">
                    <div className="hover:bg-[#df1d74] hover:text-white cursor-pointer hover:border-[#df1d74] transition-all border-8 border-[#c29bac] text-4xl bg-white p-8 rounded-full duration-500 ">
                        <TbMoneybag />
                    </div>
                    <div className="p-4 space-y-8">
                        <h3 className="text-xl  relative font-semibold mb-2 ">Value for Money

                            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2  w-1/2 h-1 bg-black"></div>
                        </h3>
                        <p className="text-gray-600 font-mono text-sm" >
                            Whatever Budget is there for the client, we make sure we give them 100% in that, and sometimes even more. We believe that be it a small or big budget, the emotional aspect always remain the same.


                        </p>
                    </div>
                </div>

                {/* Card 1 */}
                <div className="flex flex-col items-center text-center w-full overflow-hidden">
                    <div className="hover:bg-[#df1d74] hover:text-white cursor-pointer hover:border-[#df1d74] transition-all border-8 border-[#c29bac] text-4xl bg-white p-8 rounded-full duration-500 ">
                        <TiTabsOutline />
                    </div>
                    <div className="p-4 space-y-8">
                        <h3 className="text-xl  relative font-semibold mb-2 ">Transparent
                            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2  w-1/2 h-1 bg-black"></div>
                        </h3>
                        <p className="text-gray-600 font-mono text-sm" >
                            When planning an event, we make sure that our client is in every loop of the planning and thats our biggest asset. Transparency is our valued possession and we follow it at every step.


                        </p>
                    </div>
                </div>


            </div>
        </section></div>
    )
}
