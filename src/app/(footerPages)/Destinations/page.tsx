import React from 'react'
import { Arizonia } from 'next/font/google'
import Navbar from '../../../components/NavbarWhite'
import { GenCarousel } from '../../../utils'
import Link from 'next/link'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import d1 from './1.jpg'
import d2 from './2.jpg'
import d3 from './3.jpg'
import d4 from './4.jpg'
import d5 from './5.jpg'
import d6 from './6.jpg'
import d7 from './7.jpg'
import d8 from './8.jpg'
import d9 from './9.jpg'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image'

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
          Destination Weddings
        </div>
        <div className='text-2xl font-light'>Where every details spark joy</div>
      </div>
      {/** bullet points  */}
      <div className='justify-centerspace-y-6 shadow-2xl rounded-2xl border-4 p-8   md:text-xl font my-10 mx-10 align-middle flex'>
       <div className='space-y-6 md:text-xl font'>
       <li>Pick Your Perfect Place: Choose from a variety of beautiful destinations like beaches, historic sites, or
          lush landscapes</li>
        <li>We Handle Everything: Our team takes care of all the details for your destination wedding, from travel
          and lodging to finding the right venue and coordinating with vendors.</li>
        <li>Customized for You: We create personalized packages to fit your style and budget, making sure your
          wedding reflects your unique vision.</li>
        <li>Experience Local Culture: Dive into the local culture with special activities and experiences designed to
          showcase the best of your destination</li>
        <li>Expert Guidance: Our experienced team will guide you through the planning process, ensuring
          everything runs smoothly from start to finish.
        </li>
        <li>On-Site Support: We have dedicated coordinators on-site to make sure your wedding day goes off
          without a hitch, allowing you to relax and enjoy the moment.</li>
        <li>Make Memories: Your destination wedding will be a time to cherish forever, surrounded by the beauty of
          your chosen location and the love of your friends and family.
        </li>
       </div>
      </div>{/** bullet points --end */}
     
     <div className='my-7'>
              
            <div className='m-7'>

                <Box >
                    <ImageList variant="masonry" cols={3} gap={8}>
                       <ImageListItem>
                       <Image src={d1} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d2} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d3} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d4} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d5} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d6} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d7} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d8} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={d9} alt='kasn'/>
                       </ImageListItem>
                    </ImageList>
                </Box>

            </div>
        </div>
    </>
  )
}
