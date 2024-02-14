"use client";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Arizonia } from "next/font/google";

export const MansoryGallery = () => {
  // Replace these URLs with your image URLs
  const images = [
    "/gallery (1).jpg",
    "/gallery (2).jpg",
    "/gallery (3).jpg",
    "/gallery (4).jpg",
    "/gallery (5).jpg",
    "/gallery (6).jpg",
    "/gallery (7).jpg",
    "/gallery (8).jpg",
    "/gallery (9).jpg",
    "/gallery (10).jpg",
    "/gallery (11).jpg",
    "/gallery (12).jpg",
    "/gallery (13).jpg",
    "/gallery (14).jpg",
    "/gallery (15).jpg",
    "/gallery (20).jpg",
    "/gallery (16).jpg",
    "/gallery (17).jpg",
    "/gallery (18).jpg",
    "/gallery (19).jpg",
    // Add more image URLs as needed
  ];

  const images2 = [
    "/work1.jpg",
    "/work2.jpg",
    "/work3.jpg",
    "/work4.jpg",
    "/work5.jpg",
    "/work6.jpg",
    "/work7.jpg",
    "/work8.jpg",
  ];

  return (
    <>
      {/* gallery */}
      <div className="gallery mx-5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.25rem">
            {images.map((image, index) => (
              <div key={index} className="relative cursor-pointer group">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70  transition duration-300 ease-in-out flex justify-center items-center">
                  {/* <p className="text-white text-2xl font-extralight uppercase text-center">Your Text Here</p> */}
                </div>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  layout="responsive"
                  width={300}
                  height={200}
                  className=""
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
