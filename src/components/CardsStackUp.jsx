import React from "react";

const CardsStackUp = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const advantagesData = [
    {
      image: "/leads-1.png",
      title: "Genuine Leads",
      description:
        "Access verified, pre-screened leads that provide real opportunities for growth and project success.",
    },
    {
      image: "/Collaboration-1.png",
      title: "Community Support",
      description:
        "Find support and solutions in a trusted community focused on knowledge-sharing and collaboration.",
    },
    {
      image: "/WebConfiguration.png",
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
    {
      image: "/communitysupport.png",
      title: "Collaboration ",
      description:
        "Connect with like-minded professionals, share knowledge, and collaborate on projects that drive innovation.",
    },

    {
      image: "/industryupdates.png",
      title: "Industry Updates",
      description:
        "Stay ahead with regular updates on the latest IT trends, tools, and industry news to keep you informed.",
    },
  ];

  return (
    <div className="container flex flex-col lg:flex-row" id="Benefits">
      {/* Left Section */}
      <div className="relative lg:w-2/5">
        <div className="sticky p-8 top-20">
          <div className="px-4 mx-auto text-center sm:px-6 md:px-8">
            <div className="tracking-wide text-[#7D3DF9] uppercase text-sm sm:text-md">
              The Trustopay Community Advantage
            </div>
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
      </div>

      {/* Right Section */}
      <div className="flex-1 p-8 scrollbar-hide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
          {advantagesData.map((advantage, index) => (
            <div
              key={index}
              className={`sticky flex flex-col items-start p-2 bg-white shadow-lg sm:p-12 rounded-3xl lg:flex-col`}
              style={{
                top:
                  window.innerWidth < 640
                    ? `${20 + index * 65}px`
                    : `${40 + index * 100}px`,
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center justify-center w-12 h-12 overflow-hidden bg-purple-100 rounded-full md:h-12 md:w-12 lg:mr-4">
                  <img
                    src={`./${imagePath}${advantage.image} `}
                    alt={advantage.title}
                    className="object-cover p-2"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {advantage.title}
                </h2>
              </div>
              <div className="mt-2 sm:mt-4 lg:mt-0 lg:ml-4">
                <p className="mt-2 text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsStackUp;
