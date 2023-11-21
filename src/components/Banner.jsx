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


export default function Banner() {
    const size = useWindowSize();

    return (
        <div className=''>
            <Carousel showArrows={false} showIndicators={true} interval={4000} showThumbs={false} infiniteLoop={true} autoPlay={true}>

                <div className="image banner-img">
                    {size.width > 740
                        ? <img src="/1.1.png" alt="" />
                        : <img src="/1.1-small.png" alt="" />}
                </div>
                <div className="image banner-img">
                    {size.width > 740
                        ? <img src="/3.png" alt="" />
                        : <img src="/3-small.png" alt="" />}
                </div>
                <div className="image banner-img">
                    {size.width > 740
                        ? <img src="/5.png" alt="" />
                        : <img src="/5-small.png" alt="" />}
                </div>
                <div className="image banner-img">
                    {size.width > 740
                        ? <img src="/4.1.png" alt="" />
                        : <img src="/4.1-small.png" alt="" />}
                </div>
                <div className="image banner-img">
                    {size.width > 740
                        ? <img src="/6.png" alt="" />
                        : <img src="/6-small.png" alt="" />}
                </div>


            </Carousel>
        </div>
    )
}
