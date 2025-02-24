import "../App.css";
import "../index.css";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
const FixedBar = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);
  return (
    <div className="container  flex items-center justify-between p-5 text-white z-[200] gap-2">
      {/* <div>
        <h2 className="text-lg font-bold">Trustopay Community</h2>
        <p className="text-sm">2000+ Members Already Joined The Community</p>
      </div> */}
      <div className="items-center hidden lg:flex">
        {/* <Link
          to="freebtn"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <img
            src={`./${imagePath}/SOWThumbnail.jpg`}
            alt="Thumbnail"
            className="h-16 border-2 border-[#E8D8FF] mr-4 rounded-xl w-28"
          />
        </Link> */}
        <div>
          <h2 className="text-lg font-bold">Trustopay Community</h2>
          <p className="text-sm">2000+ Members Already Joined</p>
        </div>
      </div>

      <div className="">
        <span className="text-sm text-gray-300 line-through md:text-xl">
          ₹2,000
        </span>
        <span className="ml-2 text-base md:text-2xl">Starting at ₹299</span>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="text-[#7D3DF9] absolute md:hidden block h-10 w-14 right-[130px] mt-2 top-3"
        >
          <path
            d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            className="svg-path animate-svg"
          ></path>
        </svg> */}
      </div>

      <div className="flex items-center justify-between ">
        {isBrowser ? (
          <ScrollLink to="pricing" smooth={true} duration={500}>
            <button className="hidden lg:block  px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white rounded-xl bg-[#7D3DF9] transition shadow-md font-semibold hover:bg-[#6A33D4] mx-auto shine">
              Join Now
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
            <button className="block lg:hidden  px-2 py-2 text-sm md:px-10 md:py-3 md:text-base sm:text-base text-white rounded-xl bg-[#7D3DF9] transition shadow-md font-medium hover:bg-[#6A33D4] mx-auto shine">
              Join Now
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
  );
};

export default FixedBar;
