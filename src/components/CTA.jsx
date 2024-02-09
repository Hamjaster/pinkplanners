import Link from 'next/link'
import React from 'react'

export default function CTA() {
    return (
        <div className='my-7'>
            <section className="bg-[#f3f4f6] dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Your Perfect Event Awaits. </h2>
                        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 md:text-lg">Click to Begin Your Pink Planners Experience! </p>
                        <Link href={"/contact"} className="border border-black text-white hover:bg-black hover:text-white transition-all font-medium text-lg px-9 py-2.5 mr-2 mb-2 ">Contact us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
