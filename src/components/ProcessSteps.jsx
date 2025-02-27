import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
export default function ProcessSteps() {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const steps = [
    {
      icon: "/step1.png",
      title: "Select Your Service",
      description:
        "Choose the service that best fits your needs from our offerings.",
      step: "Step 1",
    },
    {
      icon: "/step2.png",
      title: "Receive a Call",
      description:
        "Our team will connect with you to discuss your requirements.",
      step: "Step 2",
    },
    {
      icon: "/step3.png",
      title: "Collaborative Discussion",
      description:
        "Engage with our experts via Google Meet to finalize the details of your service.",
      step: "Step 3",
    },
    {
      icon: "/step4.png",
      title: "Get Your Opted Service via Email",
      description:
        "Receive your selected service directly in your inbox, tailored to your needs.",
      step: "Step 4",
    },
  ];

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#6A33D4",
      transition: { duration: 0.3, type: "tween" },
    },
  };

  return (
    <div className="container px-6 py-2 text-center " id="process">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-[#4b3f95] mb-6 text-center mt-14 lg:mt-20">
        What&apos;s The Process
      </h1>
      <p className="mb-1 lg:mb-20 text-center text-[#727272] ">
        Just a few steps away from receiving your custom service from our
        offering—completely free!
      </p>

      {/* Process Steps */}
      <div className="relative flex flex-col items-center justify-between max-w-6xl mx-auto space-y-12 lg:flex-row md:space-y-8">
        <div className="container absolute right-0 z-0 hidden w-5/6 border-t-2 border-black border-dotted left-16 top-16 lg:flex" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center space-y-4 text-center"
          >
            {/* Icon */}
            <div className="p-4 bg-[#E8D8FF] rounded-full">
              <img
                src={`./${imagePath}${step.icon}`}
                alt={`Icon for ${step.title}`}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>

            {/* Title */}
            <h2 className="w-48 text-lg font-semibold text-center lg:h-12 lg:w-36 text-[#4b3f95]">
              {step.title}
            </h2>

            {/* Description */}
            <p className="w-64 text-sm text-gray-500 lg:h-20 lg:w-48">
              {step.description}
            </p>

            {/* Step Indicator */}
            <span className="inline-block px-3 py-1 text-sm text-white bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-full hover:from-[#503E94] hover:to-[#542282] cursor-pointer">
              {step.step}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button Mobile  */}
      <div className="block mt-12 lg:hidden">
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

      <div className="hidden mt-12 lg:block">
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
    </div>
  );
}
