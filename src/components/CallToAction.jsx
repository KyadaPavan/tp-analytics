import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const CallToAction = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#6A33D4",
      transition: { duration: 0.3, type: "tween" },
    },
  };

  return (
    <div className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="w-5/6 sm:w-4/6 mx-auto mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4b3f95]">
          Ready to start building?
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 mt-2 sm:mt-8">
          <div>
            <ScrollLink to="services" smooth={true} duration={500}>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="px-6 py-2 overflow-hidden text-white rounded-full bg-[#1D0C41] shadow-md font-semibold text-base"
              >
                Opt for a Service
              </motion.button>
            </ScrollLink>
          </div>
          <div className="mt-0 sm:mt-0 sm:ml-3">
            <p className="flex items-center justify-center w-full  text-base font-medium text-[#4b3f95]  border border-transparent rounded-md  md:py-4 md:text-lg md:px-10 px-12">
              Where ideas meet, connections grow, and everyone thrives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
