import React from 'react'
import { Arizonia } from 'next/font/google'
import Navbar from '../../../components/NavbarWhite'
import { GenCarousel } from '../../../utils'
import Link from 'next/link'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { Metadata } from 'next'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
    import one  from './images/1.jpg'
    import t2 from './images/2.jpg'
    import t3 from './images/3.jpg'
    import t4 from './images/4.jpg'
    import t5 from './images/5.jpg'
    import t6 from './images/6.jpg'
    import t7 from './images/7.jpg'
    import t8 from './images/8.jpg'
    import t9 from './images/9.jpg'
    import t10 from './images/10.jpg'
import Image from 'next/image'


const itemData = [
    {
        img: './images/1.jpg',
        title: 'Coffee table',
    },
];

export const metadata: Metadata = {
    title: 'Wedding theme parties',
    description: 'Discover the perfect theme party ideas for your dream wedding at our website.',
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
                    Theme parties
                </div>
                <div className='text-2xl font-light'>Where every details spark joy</div>
            </div>
            {/** bullet points  */}
            <div className='justify-center space-y-6 shadow-2xl rounded-2xl border-4 p-8 m-10  md:text-xl font align-middle flex'>
                <div className='space-y-6 md:text-xl font'>
                    <li>Bachelor's Bash Bollywood Night: An evening filled with Bollywood glitz and glamour for the groom and his friends
                        to dance the night away</li>
                    <li>Sangeet Spectacular: Dancing Under the Stars: A vibrant and lively celebration featuring colorful décor, traditional
                        music, and dance performances to kick off the wedding festivities</li>
                    <li>Reception Royale: A Night of Elegance and Opulence: An elegant affair reminiscent of royalty, with regal décor, live
                        music, and gourmet cuisine to celebrate the newlyweds.
                    </li>
                    <li>Rajasthani Rendezvous: A Cultural Extravaganza: Immerse in the rich heritage of Rajasthan with traditional music,
                        dance, and cuisine, perfect for a pre-wedding event or reception.
                    </li>
                    <li>Goa Beach Bash: Sun, Sand, and Celebrations: A laid-back beach party for the wedding party and guests to enjoy
                        live music, fresh seafood, and beachside fun.

                    </li>
                    <li>Punjabi Party: Bhangra Beats and Bonhomie: A lively and energetic celebration featuring Punjabi music, dance
                        performances, and delicious cuisine for the sangeet or bachelor's party.
                    </li>
                    <li>Desert Safari Delight: Adventure in the Sands: An exhilarating desert adventure with camel rides, folk
                        performances, and Rajasthani cuisine, perfect for a pre-wedding event or bachelor's party.
                    </li>
                </div>
            </div>{/** bullet points --end */}
           
            <div className='m-7'>

                <Box >
                    <ImageList variant="masonry" cols={3} gap={8}>
                       {/* <ImageListItem>
                       <Image src={one} alt='kasn'/>
                       </ImageListItem> */}
                       <ImageListItem>
                       <Image src={t2} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t3} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t4} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t5} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t6} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t7} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t8} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t9} alt='kasn'/>
                       </ImageListItem>
                       <ImageListItem>
                       <Image src={t10} alt='kasn'/>
                       </ImageListItem>     
                    </ImageList>
                </Box>

            </div>
        </>
    )
}
