import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
const Connection = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#6A33D4",
      transition: { duration: 0.3, type: "tween" },
    },
  };
  const imagePath = import.meta.env.VITE_PATH || "/";
  return (
    <div className="w-full bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] h-fit py-10">
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center text-center text-white lg:max-w-4xl">
          <section className="px-6 py-10 text-center text-white rounded-2xl">
            <h2 className="mb-10 text-3xl font-semibold md:text-5xl">
              Kickstart Your Journey with Trustopay!
            </h2>
            <p className="mb-10 text-lg">
              No fees, just opportunities! Trustopay offers you five free
              transactions and a complimentary first milestone to help you get
              started. Join now!
            </p>

            <ScrollLink to="services" smooth={true} duration={500}>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="px-6 py-2 font-semibold text-purple-600 transition bg-white rounded-full shadow-md hover:bg-gray-200 hover:text-white"
              >
                Get Started Now
              </motion.button>
            </ScrollLink>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Connection;
