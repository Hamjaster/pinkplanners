"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Dancing_Script } from 'next/font/google'
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Gallery.css"
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Gallery() {
  return (
    <div className='my-24'>
      <div className={`${dancing.className} text-center  text-6xl font-thin`}>Our Gallery</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={150}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work1.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work2.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work3.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work4.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work5.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work6.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work7.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${'/work8.jpg'})` }} className="h-64 w-64 bg-center bg-cover">
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
