import React from "react";
import Marquee from "react-fast-marquee";

const MovingSlider = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const images = [
    { src: "people1.webp", alt: "VIHANG" },
    {
      src: "people2.webp",
      alt: "assimulate",
    },
    { src: "people3.webp", alt: "MOBILITY" },
    {
      src: "people4.jpg",
      alt: "Articulate",
    },
    {
      src: "people5.jpg",
      alt: "Creative Swatch",
    },

    { src: "people6.jpg", alt: "MOBILITY" },
    { src: "people7.jpg", alt: "USER7" },
    { src: "people8.webp", alt: "NAR" },

    {
      src: "profile1.jpg",
      alt: "Articulate",
    },
    { src: "profile5.jpg", alt: "NAR" },
  ];

  return (
    <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 moving-slider-container ">
      {/* Left fade effect */}
      <div className="absolute top-0 left-0 z-10 w-12 h-full pointer-events-none bg-gradient-to-r from-[#F6F4FF] to-transparent sm:w-16 md:w-20"></div>
      {/* Right fade effect */}
      <div className="absolute top-0 right-0 z-10 w-12 h-full pointer-events-none bg-gradient-to-l from-[#F6F4FF] to-transparent sm:w-16 md:w-20"></div>

      <Marquee gradient={false} speed={50} pauseOnHover={true} className="">
        {images.map((image, index) => (
          <img
            key={index}
            src={`./${imagePath}${image.src} `}
            alt={image.alt}
            className="object-contain w-24 h-auto mx-2 rounded-3xl sm:w-28 md:w-32 lg:w-36"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MovingSlider;
