import React from 'react'
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
// import work1 from '../images/work1.jpg'
// import work2 from '../images/work2.jpg'
// import work3 from '../images/work3.jpg'
// import work4 from '../images/work4.jpg'
// import work5 from '../images/work5.jpg'
// import work6 from '../images/work6.jpg'
// import work7 from '../images/work7.jpg'

export default function Gallery() {
    return (
        <div className='px-1 sm:px-6 md:px-28 my-56  text-center'>

            <div className="text my-12">
                <h2 className={`text-6xl text-[#df1d74] font-bold ${dancing.className}`}>Gallery</h2>
                <h3 className='text-2xl font-light'>Pictures speak louder than words</h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work1.jpg'})` }}></div>
                <div class="bg-co ver bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work2.jpg'})` }}></div>
                <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work3.jpg'})` }}></div>
                <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work4.jpg'})` }}></div>
                <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work5.jpg'})` }}></div>
                <div class="bg-cover bg-center image-wrapper h-64" style={{ backgroundImage: `url(${'/work6.jpg'})` }}></div>



            </div>
        </div>
    )
}
