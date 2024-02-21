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
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F1.jpg?alt=media&token=7e88cf2f-7ac1-4ffa-8a47-552fb3fa485c"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F2.jpg?alt=media&token=63c6518a-98aa-4b1e-a154-e436923be5c7"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F3.jpg?alt=media&token=13fdce40-af78-406d-b1e1-2b675a9acd92"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F4.jpg?alt=media&token=5784da45-7c67-40b6-90ae-d2f52e9fe751"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F5.jpg?alt=media&token=78d0ee37-6571-48e0-8e8e-169154607b22"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F6.jpg?alt=media&token=90347d9e-dc75-4334-a9d7-c7061efb7c0a"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F7.jpg?alt=media&token=29933e66-227c-4d50-861e-8ce7e089c38b"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F8.jpg?alt=media&token=a70f8619-7b88-47c4-85b1-75f0eea13d5c"} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <img src={"https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FDestination-theme%2F9.jpg?alt=media&token=f521d717-bfcd-453a-be53-8b7f4287ccd0"} alt='kasn'/>
                       </ImageListItem>
                    </ImageList>
                </Box>

            </div>
        </div>
    </>
  )
}
