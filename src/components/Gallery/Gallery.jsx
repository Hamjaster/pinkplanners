"use client"
import React from 'react'
import { Arizonia } from 'next/font/google'
const dancing = Arizonia({ subsets: ['latin'], weight: ['400'] })
import { GenCarousel } from '../../utils';



export default function Gallery() {

  const images = [
    "/work1.jpg", "/work2.jpg", "/work3.jpg", "/work4.jpg", "/work5.jpg", "/work6.jpg", "/work7.jpg", "/work8.jpg"
  ]
  return (
    <div className='my-24  '>
      <div className={`${dancing.className} text-center my-7 text-6xl font-thin`}>Our Gallery</div>

      <GenCarousel images={images} />

    </div >
  )
}
