"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Gallery.css"
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive'



export default function Gallery() {
  const isSmall = useMediaQuery({ query: '(max-width: 640px)' })
  return (
    <div className='my-24  '>
      <div className={`${dancing.className} text-center my-7 text-6xl font-thin`}>Our Gallery</div>
      <Swiper
        slidesPerView={!isSmall ? 5 : 1}
        spaceBetween={isSmall ? 0 : 150}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work1.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work2.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work3.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work4.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work5.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work6.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work7.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work8.jpg'})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
          </div>
        </SwiperSlide>

      </Swiper>
    </div >
  )
}
