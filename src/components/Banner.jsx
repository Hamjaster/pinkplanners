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
            <Carousel showArrows={false} showIndicators={true} interval={4000} showThumbs={false} infiniteLoop={true} autoPlay={true}>

                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-screen ">
                            <Image fill src="/1.1-small.png" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <Image fill src="/1.1.png" alt="" />
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-screen ">
                            <Image fill src="/3-small.png" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <Image fill src="/3.png" alt="" />
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-screen ">
                            <Image fill src="/5-small.png" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <Image fill src="/5.png" alt="" />
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-screen ">
                            <Image fill src="/4.1-small.png" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <Image fill src="/4.1.png" alt="" />
                        </div>
                    }
                </div>
                <div className="image banner-Image">
                    {size.width < 740
                        ?
                        <div className="relative h-screen ">
                            <Image fill src="/6-small.png" alt="" />
                        </div>
                        :
                        <div className="relative h-screen ">
                            <Image fill src="/6.png" alt="" />
                        </div>
                    }
                </div>


            </Carousel>
        </div>
    )
}
