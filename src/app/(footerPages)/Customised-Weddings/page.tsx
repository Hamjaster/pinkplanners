import React from 'react'
import { Arizonia } from 'next/font/google'
import Navbar from '../../../components/NavbarWhite'
import { GenCarousel } from '../../../utils'
import Link from 'next/link'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'
import w1 from './1.jpg'
import w2 from './2.jpg'
import w3 from './3.jpg'
import w4 from './4.jpg'
import w5 from './5.jpg'
import w6 from './6.jpg'
import w7 from './7.jpg'
import w8 from './8.jpg'
import w9 from './9.jpg'
import w10 from './10.jpg'
import w11 from './11.jpg'
import w12 from './12.jpg'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Customised Weddings',
    description: 'Unparalleled commitment to creating unforgettable moments for you and your loved one.',
  }
export default function page() {
    const images = [
        "/work1.jpg", "/work2.jpg", "/work3.jpg", "/work4.jpg", "/work5.jpg", "/work6.jpg", "/work7.jpg", "/work8.jpg"
    ]
    return (
        <>
            <Navbar />
            <div className="pt-28">
                {/* <GenCarousel images={images} /> */}
            </div>
            <div className="text mb-12  py-10 text-center flex-col flex space-y-3">
                <div className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}>
                    Customised Weddings

                </div>
                <div className='text-2xl font-light'>Where every details spark joy</div>
            </div>
            {/** bullet points  */}
            <div className='justify-center m-8 mx-10 align-middle flex'>
                <div className='space-y-6 shadow-2xl rounded-2xl border-4 p-8   md:text-xl font'>
                    <li>Tailored wedding planning services to reflect your unique love story</li>
                    <li>Expert team of planners and designers dedicated to bringing your vision to life</li>
                    <li>Customized services for venue selection, décor design, catering, and
                        entertainment</li>
                    <li>Meticulous attention to detail to ensure every aspect of your wedding is
                        personalized</li>
                    <li>Seamless execution on your special day for a stress-free experience
                    </li>
                    <li>Unparalleled commitment to creating unforgettable moments for you and your
                        loved ones
                    </li>
                </div>
            </div>{/** bullet points --end */}
           
            <div className='my-7'>
              
            <div className='m-7'>

                <Box >
                    <ImageList variant="masonry" cols={3} gap={8}>
                       <ImageListItem>
                       <Image src={w1} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w2} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w3} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w4} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w5} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w6} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w7} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w8} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w9} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w10} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w11} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={w12} alt='kasn'/>
                       </ImageListItem>
                    </ImageList>
                </Box>

            </div>
        </div>
        </>
    )
}
