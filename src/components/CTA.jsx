import Link from 'next/link'
import React from 'react'

export default function CTA() {
    return (
        <div className='my-7'>
            <section class="bg-[#f3f4f6] dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Plan the next event with us</h2>
                        <p class="mb-8 font-light text-gray-500 dark:text-gray-400 md:text-lg">Let's get into a call and explore the hidden potential you are looking for. </p>
                        <Link href={"/contact"} class="border border-black text-black hover:bg-black hover:text-white transition-all font-medium text-lg px-9 py-2.5 mr-2 mb-2 ">Contact us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
