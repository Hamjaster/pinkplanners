"use client"
import { useEffect, useState } from "react";

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive'
import "./utils.css"
import { Swiper, SwiperSlide } from 'swiper/react';


// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function GenCarousel({ images }) {

  const isSmall = useMediaQuery({ query: '(max-width: 640px)' })

  return <Swiper
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
    {images.map((img) => {
      return <SwiperSlide>
        <div style={{ backgroundImage: `url(${img})` }} className="h-64 sm:w-64 w-full bg-center bg-cover">
        </div>
      </SwiperSlide>
    })}
  </Swiper>

}