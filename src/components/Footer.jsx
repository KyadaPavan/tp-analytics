import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import { Link } from "react-router-dom";
const Footer = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  return (
    <footer className="container px-4 pt-20 pb-0 text-white lg:pb-10 md:px-12 ">
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
        {/* Left Side */}
        <div className="mb-0 text-center lg:mb-6 md:mb-0 md:text-left">
          <h1 className="flex items-center justify-center gap-2 text-3xl font-bold lg:justify-start">
            <img
              src={`./${imagePath}/tp_whitelogo.svg`}
              alt="Trustopay Logo"
              className="w-48 h-12 cursor-pointer"
            />
          </h1>

          <div className="w-full md:w-4/6">
            <p className="p-4 mt-2 mb-6 text-sm text-center md:mb-0 sm:text-left md:text-base text-slate-300 lg:p-0">
              Join the Trustopay Community to connect with industry leaders and
              peers, fostering meaningful relationships and knowledge exchange.
              Collaborate, learn, and share ideas to stay ahead in an
              ever-evolving landscape.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 mt-10 md:items-start">
            <div className="flex gap-3 ">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className="w-5 h-5 text-white hover:text-[#7421FC] "
              />
              <a
                href="mailto:community@trustopay.com"
                aria-label="Email Support"
                className="text-white hover:text-[#7421FC] flex gap-3"
              >
                community@trustopay.com
              </a>
            </div>

            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                size="1x"
                className="w-5 h-5 text-white hover:text-[#7421FC] "
              />
              <a
                href="tel:+916353093171"
                aria-label="Call Support"
                className="text-white hover:text-[#7421FC] flex gap-3"
              >
                6353093171
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center mt-6 md:items-end md:mt-20">
          {/* Socials */}
          <div className="flex space-x-4">
            <a
              href="mailto:community@trustopay.com"
              className="text-white hover:text-[#7421FC] transition-colors "
              aria-label="socials-mail-icon"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className="w-5 h-5"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/trustopayy/"
              target="_blank"
              className="text-white hover:text-[#7421FC] transition-colors"
              aria-label="socials-linkedin-icon"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="1x"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://youtube.com/@trustopay.?si=qk8MTOeL6pVfQv4o"
              target="_blank"
              className="text-white hover:text-[#7421FC] transition-colors "
              aria-label="socials-youtube-icon"
            >
              <FontAwesomeIcon icon={faYoutube} size="1x" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/trustopay_official?igsh=MTBhcmg5bXJobHliYQ=="
              target="_blank"
              className="text-white hover:text-[#7421FC] transition-colors"
              aria-label="socials-instagram-icon"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-wrap pt-4 mt-10 text-center border-t border-gray-600 lg:mt-20 md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 md:justify-between">
          <div>© Copyright 2025 </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/privacy-policy" className="hover:text-[#7421FC]">
              Privacy Policy
            </a>
            <a href="/terms-&-conditions" className="hover:text-[#7421FC]">
              Terms & Conditions
            </a>
            <a href="/contact-us" className="hover:text-[#7421FC]">
              Contact Us
            </a>
            {/* <a href="/refund-policy" className="hover:text-[#7421FC]">
              Refund Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
