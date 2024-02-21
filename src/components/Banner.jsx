"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '../utils'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


export default function Banner() {
    const size = useWindowSize();

    return (
        <div className=''>
            <Carousel showArrows={false} showIndicators={true} interval={2000} showThumbs={false} infiniteLoop={true} autoPlay={true}>

                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-[70vh] sm:h-screen ">
                            <img className='h-' src='https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F1.1-small.png?alt=media&token=31194c11-afd9-426d-b842-01bd1dc48a29'/>
                        </div>
                        :
                        <div className="relative h-screen ">
                            <img className='h-screen' src='https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F1.1.png?alt=media&token=5c446c3e-0a7e-4b98-bf88-4805748dd1d2'/>
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-[70vh] sm:h-screen ">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F3-small.png?alt=media&token=6e3f59d1-f100-4011-9d90-34e58527af7d" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <img  className='h-screen' src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F3.png?alt=media&token=8858097d-6f3e-4ae4-95dd-7525c0dcb848" alt="" />
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-[70vh] sm:h-screen ">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F5-small.png?alt=media&token=c5974180-4433-464f-9943-bfaf4018c34b" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <img className='h-screen' src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F5.png?alt=media&token=660f5998-3397-41c7-a0cd-10f37001a9b6" alt="" />
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-[70vh] sm:h-screen ">
                            <img className='h-screen' src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F4.1-small.png?alt=media&token=059f08e6-e005-4abe-83a1-29e6583f5648" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <img className='h-screen' src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F4.1.png?alt=media&token=598cd252-c2e0-4372-8925-01fbb91caeb8" alt="" />
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-[70vh] sm:h-screen ">
                            <img className='h-screen' src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F6-small.png?alt=media&token=b2bce652-d4e8-4fc3-a89b-f89f11c838f2" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <img className='h-screen' src="https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2Fbanners-home%2F6.png?alt=media&token=e8a7f908-23ab-4b26-ac40-d6d77d44b6a7" alt="" />
                        </div>
                    }
                </div>


            </Carousel>
        </div>
    )
}
