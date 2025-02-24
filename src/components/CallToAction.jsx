import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
const CallToAction = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <div className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="w-5/6 sm:w-4/6 mx-auto mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#19154E]">
          Ready to start building?
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 mt-2 sm:mt-8">
          <div>
            {isBrowser ? (
              <ScrollLink to="pricing" smooth={true} duration={500}>
                <button className="hidden lg:block  items-center justify-center w-full lg:px-8 py-3 text-base font-medium px-2  text-white border border-transparent rounded-full bg-[#7D3DF9] hover:bg-[#6A33D4] md:py-4 md:text-lg md:px-10">
                  Become a Part of the Community
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
                <button className="block lg:hidden  items-center justify-center w-full lg:px-8 py-3 text-base font-medium px-2  text-white border border-transparent rounded-full bg-[#7D3DF9] hover:bg-[#6A33D4] md:py-4 md:text-lg md:px-10">
                  Become a Part of the Community
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
          <div className="mt-0 sm:mt-0 sm:ml-3">
            <p className="flex items-center justify-center w-full  text-base font-medium text-[#7D3DF9]  border border-transparent rounded-md  md:py-4 md:text-lg md:px-10 px-12">
              Where ideas meet, connections grow, and everyone thrives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
