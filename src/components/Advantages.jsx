import React, { useRef, useEffect, useState } from "react";

const Advantages = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [parallaxFactor, setParallaxFactor] = useState(0.1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setParallaxFactor(0);
      } else {
        setParallaxFactor(0.1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const advantagesData = [
    {
      image: "/leads-1.png",
      title: "Genuine Leads",
      description:
        "Access verified, pre-screened leads that provide real opportunities for growth and project success.",
    },
    {
      image: "/Collaboration-1.png",
      title: "Collaboration Opportunities",
      description:
        "Connect with like-minded professionals, share knowledge, and collaborate on projects that drive innovation.",
    },
    {
      image: "/WebConfiguration-1.png",
      title: "Essential Tools",
      description:
        "Get free or discounted tools like Canva, Grammarly, legal templates, and marketing resources to enhance your work.",
    },
    {
      image: "/EmployeTraining-1.png",
      title: "Expert Mentorship",
      description:
        "Join virtual meetups with experts who provide insights, advice, and guidance to sharpen your skills.",
    },
  ];

  return (
    <div
      className="container relative flex flex-col overflow-y-hidden h-fit lg:flex-row"
      id="Benefits"
    >
      {/* Left Section */}
      <div
        ref={leftSectionRef}
        className="sticky top-0 flex flex-col justify-start p-8 overflow-y-auto lg:w-2/5"
        style={{
          transform: `translateY(${scrollPosition * parallaxFactor}px)`,
        }}
      >
        <div className="px-4 mx-auto text-center sm:px-6 md:px-8">
          <h4 className="tracking-wide text-[#7D3DF9] uppercase text-sm sm:text-md">
            The Trustopay Community Advantage
          </h4>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#19154E]">
            What sets us apart from other platforms?
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-base leading-relaxed text-gray-600 sm:text-lg md:text-lg">
            Designed for freelancers, IT agencies, and startup founders,
            Trustopay Community connects you to exclusive resources and growth
            opportunities to elevate your career.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        ref={rightSectionRef}
        className="flex-1 p-12 overflow-y-auto scrollbar-hide"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
          {advantagesData.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-8 sm:p-12 !py-8 sm:!py-16 bg-white shadow-lg rounded-3xl lg:flex-row"
            >
              <div className="flex items-center justify-center w-20 h-12 overflow-hidden bg-purple-100 rounded-full lg:mr-4">
                <img
                  src={advantage.image}
                  alt={advantage.title}
                  className="object-cover p-2"
                />
              </div>

              <div className="mt-2 sm:mt-4 lg:mt-0 lg:ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
