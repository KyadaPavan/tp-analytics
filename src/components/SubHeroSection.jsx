import MovingSlider from "./MovingSlider";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
const SubHeroSection = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <>
      <div
        className="flex flex-col px-4 sm:px-6 md:px-8 items-center justify-center text-center text-black bg-[#F6F4FF]"
        id="About"
      >
        <div className="max-w-3xl mt-8 sm:mt-10">
          <p className="mt-6 mb-4 text-xs sm:text-sm md:text-base tracking-wide uppercase text-[#7D3DF9]">
            EXPAND YOUR NETWORK
          </p>
          <h1 className="mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug lg:leading-tight text-[#19154E]">
            Connecting You to Endless Opportunities
          </h1>
          <p className="mb-6 text-sm sm:text-base md:text-lg text-[#5C5E7A] leading-relaxed px-8 md:px-0">
            Welcome to the Trustopay Community, India’s fastest-growing network
            for freelancers, IT agencies, and startups. We’re here to empower
            professionals with verified leads, collaboration opportunities, and
            exclusive tools to help you grow and succeed. Our mission is to
            create a trusted, supportive space where like-minded individuals
            connect, learn, and thrive together.
          </p>

          {isBrowser ? (
            <ScrollLink to="pricing" smooth={true} duration={500}>
              <button className="hidden lg:block  px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white rounded-full bg-[#7D3DF9] transition shadow-md font-semibold hover:bg-[#6A33D4] mx-auto">
                Be a Part of Something Bigger
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
                Be a Part of Something Bigger
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

      <div className="bg-[#F6F4FF]">
        <MovingSlider />
      </div>
    </>
  );
};

export default SubHeroSection;
