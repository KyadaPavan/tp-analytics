import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
const Groups = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <div className="py-16 ">
      <div className="container grid items-center grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-[#19154E]">
            Trustopay Community
          </h2>
          <p className="px-4 mb-6 text-base sm:text-lg sm:px-0 ">
            Join the Trustopay Community and be part of exciting discussions
            near you. Connect with peers, share insights, learn from industry
            experts, and grow together while having fun along the way!
          </p>

          {isBrowser ? (
            <ScrollLink to="pricing" smooth={true} duration={500}>
              <button className="hidden lg:block px-7 py-3 overflow-hidden text-white rounded-full bg-[#7D3DF9] transition shadow-md font-semibold text-lg hover:bg-[#6A33D4]">
                JOIN NOW
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
              <button className="block lg:hidden px-7 py-3 overflow-hidden text-white rounded-full bg-[#7D3DF9] transition shadow-md font-semibold text-lg  hover:bg-[#6A33D4] mx-auto">
                JOIN NOW
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
        {/* Image Section */}
        <div className="relative">
          <img
            src={`./${imagePath}/usergroup.png`}
            alt="Trustopay User Groups"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Groups;
