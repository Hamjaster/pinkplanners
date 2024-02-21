"use client";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Arizonia } from "next/font/google";

export const MansoryGallery = () => {
  // Replace these URLs with your image URLs
  const images = [
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(1).jpg?alt=media&token=78271fe0-4ad5-44d2-b304-1373104d6404",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(10).jpg?alt=media&token=8da06a80-f16e-4dce-8a3f-49fb472a3a31",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(11).jpg?alt=media&token=c193acd0-3b19-4587-8eee-b21192074216",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(12).jpg?alt=media&token=0cede30b-0fe5-4539-852f-2db69c9d74b3",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(12).jpg?alt=media&token=0cede30b-0fe5-4539-852f-2db69c9d74b3",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(14).jpg?alt=media&token=fa5c9f5e-e067-4144-a084-3f144163df68",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(16).jpg?alt=media&token=ce7f5bc4-a8f0-4621-81af-1c8397f4de1b",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(17).jpg?alt=media&token=9a134921-4323-44bb-9d16-57448e0663e0",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(18).jpg?alt=media&token=24c4f7c1-efd4-4d75-b621-34656f322ad2",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(19).jpg?alt=media&token=0dc552c6-622a-4e2d-a588-198d29ab4320",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(2).jpg?alt=media&token=ba8f4e2a-bc9c-4247-89d3-b44d8fca9807",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(20).jpg?alt=media&token=82d76339-b35e-4a1e-91be-1f88bba12f22",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(3).jpg?alt=media&token=0db103cd-6f30-47bb-9c12-73e6f4378246",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(4).jpg?alt=media&token=c5e4ecd9-ea7b-4438-b5fe-3f1cd95358ff",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(5).jpg?alt=media&token=5603cef5-fb2b-4ca2-a036-5af3e57386d4",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(6).jpg?alt=media&token=f6b5dc2d-bdc2-4c43-bf65-ce39d7ea042e",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(7).jpg?alt=media&token=36e93217-33cb-4b69-b188-925725099e58",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(8).jpg?alt=media&token=8e8cad73-7524-46ad-89f1-2df838ff984a",
   "https://firebasestorage.googleapis.com/v0/b/mern-estate-9bf09.appspot.com/o/diamol%2FGallery%2Fgallery%20(9).jpg?alt=media&token=fcd1e138-26c7-4f43-a666-45c4f7a4915a",
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
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  layout="responsive"

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
