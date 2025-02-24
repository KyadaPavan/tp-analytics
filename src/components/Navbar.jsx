import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const navbarItems = [
    { to: "About", label: "About" },
    { to: "Benefits", label: "Benefits" },
    { to: "Features", label: "Features" },
    { to: "Pricing", label: "Pricing" },
    { to: "FAQs", label: "FAQs" },
  ];
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  const handleMobileLinkClick = (link) => {
    setMenuOpen(false);
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#7D3DF9",
      transition: { duration: 0.3, type: "tween" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#6A33D4",
      transition: { duration: 0.3, type: "tween" },
    },
  };

  const imagePath = import.meta.env.VITE_PATH || "/";

  return (
    <>
      <nav
        className={`fixed z-[100] w-screen  shadow-lg transition-all duration-300 bg-white text-black ${
          isScrollingDown ? "-top-20" : "top-0"
        }`}
      >
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          {/* Logo */}

          {isBrowser ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer "
              title="Trustopay Community - Home"
              aria-label="Trustopay Community Home"
            >
              <img
                src={`./${imagePath}/tp.svg`}
                alt="Trustopay"
                className="w-36 lg:w-44 md:w-44"
              />
            </ScrollLink>
          ) : (
            <a
              href="/"
              className=" font-normal text-black text-base hover:text-[#1D0C41] transition-colors duration-300 cursor-pointer"
            >
              <img
                src={`./${imagePath}/tp_whitelogo.svg`}
                alt="Trustopay"
                className="w-36 lg:w-44 md:w-44"
              />
            </a>
          )}

          {/* Desktop Menu */}

          <div className="items-center hidden space-x-8 text-lg lg:flex">
            {navbarItems.map((item) => (
              <React.Fragment key={item.to}>
                {isBrowser ? (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="relative inline-block text-black cursor-pointer"
                  >
                    <motion.span
                      variants={linkVariants}
                      whileHover="hover"
                      style={{ display: "inline-block" }}
                    >
                      {item.label}
                    </motion.span>
                  </ScrollLink>
                ) : (
                  <a
                    href={`/${item.to}`}
                    className="text-black font-normal text-base hover:text-[#1D0C41] transition-colors duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
                )}
              </React.Fragment>
            ))}

            <div className="relative hidden group lg:block md:block">
              {isBrowser ? (
                <ScrollLink to="pricing" smooth={true} duration={500}>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="px-6 py-2 overflow-hidden text-white rounded-full bg-[#1D0C41] shadow-md font-semibold text-base"
                  >
                    Join Now
                  </motion.button>
                </ScrollLink>
              ) : (
                <a
                  href="/pricing"
                  className="text-[white] font-normal text-base hover:text-[#1D0C41] transition-colors duration-300 cursor-pointer"
                >
                  Join Now
                </a>
              )}
            </div>
          </div>

          {/* Enroll Button */}

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              className="text-3xl text-[#4b3f95] focus:outline-none"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "tween" }}
              className="flex flex-col items-center justify-center p-4 space-y-4 text-white bg-black shadow-md lg:hidden"
            >
              {navbarItems.map((link) => (
                <React.Fragment key={link.to}>
                  {isBrowser ? (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="block text-[white] hover:text-[#4169E1] transition-colors duration-300 cursor-pointer"
                      onClick={() => handleMobileLinkClick(link)}
                    >
                      {link.label}
                    </ScrollLink>
                  ) : (
                    <a
                      href={`/${link.to}`}
                      className="block text-[white] hover:text-[#4169E1] transition-colors duration-300 cursor-pointer"
                      onClick={() => handleMobileLinkClick(link)}
                    >
                      {link.label}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </>
  );
};

export default Navbar;
