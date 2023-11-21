"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const quotes = [
    "expectation.We pride ourselves on our creativity, attention to detail, and unwavering commitment to making your vision come to life. With a team of experienced professionals and a passion for creating unforgettable moments",
    "At Pink Planners, we don’t just plan events; we craft dreams into reality. Our team of seasoned event architects understands the importance of turning your vision",
    "Our journey is paved with years of expertise in event planning. We have successfully executed a diverse range of events, each with its own unique charm and requirements. Our portfolio boasts ",
    "During the consultation, we will discuss the details of your event and how we can make it a memorable and stress-free experience for you & your guests"
]
export default function Quotes() {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${'/work1.jpg'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }} className='sm:p-4 md:p-36 my-56'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {quotes.map((quote) => {
                    return <>
                        <SwiperSlide>
                            <div className="italic text-2xl text-white ">" {quote} "</div>
                        </SwiperSlide>
                    </>
                })}
            </Swiper>

        </div>
    )
}
