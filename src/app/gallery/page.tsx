"use client"
// components/PictureGallery.js

import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const PictureGallery = () => {
    // Replace these URLs with your image URLs
    const images = [
        '/gallery (1).jpg',
        '/gallery (2).jpg',
        '/gallery (3).jpg',
        '/gallery (4).jpg',
        '/gallery (5).jpg',
        '/gallery (6).jpg',
        '/gallery (7).jpg',
        '/gallery (8).jpg',
        '/gallery (9).jpg',
        '/gallery (10).jpg',
        '/gallery (11).jpg',
        '/gallery (12).jpg',
        '/gallery (13).jpg',
        '/gallery (14).jpg',
        '/gallery (15).jpg',
        '/gallery (16).jpg',
        '/gallery (17).jpg',
        '/gallery (18).jpg',
        '/gallery (19).jpg',
        '/gallery (20).jpg',
        // Add more image URLs as needed
    ];

    return (
        <div className="">
            <div style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(./work1.jpg)'
            }} className="bg-image bg-cover bg-center w-full h-[34rem] text-white flex justify-center items-center mb-12">
                <div className="text mt-7 flex items-center flex-col space-y-4">

                    <div className="text-6xl font-semibold">
                        Our Portfolio
                    </div>
                    <div className='text-3xl font-extralight text-center'>Don't believe us, see our work</div>
                </div>

            </div>
            {/* gallery */}
            <div className="gallery mx-5">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="1.25rem">
                        {images.map((image, index) => (
                            <div key={index} className="relative cursor-pointer group">
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70  transition duration-300 ease-in-out flex justify-center items-center">
                                    <p className="text-white text-2xl font-extralight uppercase text-center">Your Text Here</p>
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
        </div>
    );
};

export default PictureGallery;
