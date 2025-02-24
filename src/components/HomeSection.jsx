import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Spotlight } from "./ui/Spotlight";
import { Link as ScrollLink } from "react-scroll";
const HomeSection = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-full px-4 mt-20 text-center text-white bg-center bg-cover"
      style={{
        backgroundImage: `url('./${imagePath}/background.jpg')`,
      }}
    >
      <div>
        <Spotlight
          className="h-screen top-8 left-10 md:-left-40 md:-top-20"
          fill="white"
        />

        <Spotlight className="h-screen left-20 -top-8" fill="#7D3DF9" />
      </div>

      <div className="max-w-4xl px-4 mx-auto sm:px-6 md:px-8">
        <p className="mt-8 mb-4 text-xs tracking-wide text-center text-gray-400 uppercase sm:text-sm md:text-base">
          FOR FREELANCERS, AGENCIES, STARTUPS & BUSINESSES
        </p>
        <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-snug lg:leading-[4rem]">
          Building India's Largest Network for &nbsp;
          <span className="block sm:inline text-[#7D3DF9]">
            <TypeAnimation
              sequence={[
                "Growth",
                1000,
                "Collaboration",
                1000,
                "Opportunity",
                1000,
                "Success",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-center text-gray-300 sm:text-base md:text-lg">
          Build, connect, and scale your business within India’s largest
          community for freelancers, IT agencies, and startup founders & unlock
          unparalleled resources and growth.
        </p>
        <div className="flex justify-center">
          {isBrowser ? (
            <ScrollLink to="pricing" smooth={true} duration={500}>
              <button className="hidden lg:block  px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white rounded-full bg-[#7D3DF9] transition shadow-md font-semibold hover:bg-[#6A33D4] mx-auto">
                Join the Community Now
              </button>
            </ScrollLink>
          ) : (
            <a
              href="/pricing"
              className="text-[white] font-normal text-base hover:text-[#4169E1] transition-colors duration-300 cursor-pointer"
            >
              Join the Community Now
            </a>
          )}

          {isBrowser ? (
            <ScrollLink to="mobile-pricing" smooth={true} duration={500}>
              <button className="block lg:hidden  px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white rounded-full bg-[#7D3DF9] transition shadow-md font-semibold hover:bg-[#6A33D4] mx-auto">
                Join the Community Now
              </button>
            </ScrollLink>
          ) : (
            <a
              href="/pricing"
              className="text-[white] font-normal text-base hover:text-[#4169E1] transition-colors duration-300 cursor-pointer"
            >
              Join the Community Now
            </a>
          )}
        </div>
      </div>

      <div className="mt-20">
        <img
          src={`./${imagePath}/hero-img.png`}
          alt="Trustopay"
          className="container"
        />
      </div>
    </div>
  );
};

export default HomeSection;
