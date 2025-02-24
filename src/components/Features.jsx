import React from "react";

const Features = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const features = [
    {
      title: "Verified Leads",
      description:
        "Get access to trustworthy, authentic leads that increase your chances of landing quality projects.",
      image: "/verifiedLeads.png",
    },
    {
      title: "Networking Opportunities",
      description:
        "Build valuable connections with professionals in your industry to foster growth and collaboration.",
      image: "/Collaboration-1.png",
    },
    {
      title: "Learning Resources",
      description:
        "Take advantage of a wealth of learning materials to sharpen your skills and stay ahead of the curve.",
      image: "/logicalResources.png",
    },
    {
      title: "Exclusive Tools",
      description:
        "Benefit from discounted or free access to premium tools that streamline your work and boost your productivity.",
      image: "WebConfiguration.png",
    },
    {
      title: "Expert Mentorship",
      description:
        " Gain practical advice and guidance from seasoned industry experts to accelerate your career development.",
      image: "/expertMembership.png",
    },
    {
      title: "Community Support",
      description:
        "Tap into a strong support network where knowledge is shared, and everyone is invested in mutual success.",
      image: "/communitysupport.png",
    },
    {
      title: "Showcase Portfolio",
      description:
        "Display your best work in front of potential clients and collaborators to gain new opportunities.",
      image: "/portfolio.png",
    },
    {
      title: "Industry Updates",
      description:
        "Stay up to date with the latest trends, tools, and insights to maintain a competitive edge in the industry.",
      image: "/industryupdates.png",
    },
    {
      title: "Career Growth",
      description:
        "Discover new avenues for career advancement, supported by resources, networking, and mentorship.",
      image: "/CareerGrowth.png",
    },
  ];

  return (
    <div className="container p-4 py-16 mx-auto text-center" id="Features">
      <div className="px-4 mx-auto text-center sm:px-6 md:px-8">
        <p className=" tracking-wide text-[#7D3DF9] mb-6 uppercase text-sm sm:text-md">
          PACKED WITH FEATURES
        </p>

        <h2 className="w-5/6 sm:w-4/6 mx-auto mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#19154E]">
          Everything you need to Learn, Succeed and Scale.
        </h2>

        <p className="max-w-3xl mx-auto mt-6 mb-8 text-base leading-relaxed text-gray-600 sm:text-lg md:text-lg">
          The complete toolkit for growing and thriving.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-0 md:p-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center bg-white shadow-md rounded-2xl w-full sm:w-[90%] md:w-auto"
          >
            <div className="mb-4 bg-purple-100 rounded-full">
              <img
                src={`./${imagePath}${feature.image} `}
                alt={feature.title}
                className="object-cover w-12 h-12 p-2 "
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-[#19154E]">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
