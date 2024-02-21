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
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F1.jpg?alt=media&token=52ee6e93-43c2-40a2-8d61-a4aea90794c6"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F10.jpg?alt=media&token=45f5638b-94bb-4fdb-bade-ede7a5bd16f6"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F11.jpg?alt=media&token=29ef1f9a-a589-4402-b576-02a337728ffa"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F12.jpg?alt=media&token=ff7f55dc-b659-4d41-9bd9-6339628a5dba"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F2.jpg?alt=media&token=42f83233-72d8-4658-ace9-7a47c346dc61"} alt='kasn'/>
                       </ImageListItem> 
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F3.jpg?alt=media&token=4abfb27b-ea7c-4fbd-8651-93b73182ab93"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F4.jpg?alt=media&token=7f7ac6f9-7644-41f0-90eb-21996cd65a11"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F5.jpg?alt=media&token=93be345f-7aa5-4560-9321-3e01601cbb21"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F6.jpg?alt=media&token=88033dee-3ce1-4580-92a8-f3ea959c4db6"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F7.jpg?alt=media&token=49076491-790e-49b1-aeb3-16609175d12f"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fcustom-weedings%2F8.jpg?alt=media&token=e4e531a7-7767-44f7-b629-6a4a39396f44"} alt='kasn'/>
                       </ImageListItem>
     
                    </ImageList>
                </Box>

            </div>
        </div>
        </>
    )
}
