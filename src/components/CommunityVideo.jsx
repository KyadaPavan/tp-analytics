import React from "react";
import { CheckCircle } from "lucide-react";

const CommunityVideo = () => {
  const features = [
    "Community of Founders",
    "Exclusive Webinars",
    "Tools & Resources",
    "Virtual Meetups",
    "Offline Events",
    "Updates on Funding Events",
    "Networking & Collaborations",
    "Regular Feedback Sessions",
  ];
  const imagePath = import.meta.env.VITE_PATH || "/";
  return (
    <div className="relative w-full ">
      <div className="w-full px-4 pt-16 pb-40 bg-[#F6F4FF] md:px-8 lg:px-16 md:pb-72">
        <div className="mx-auto">
          <h1 className="mb-4 text-3xl font-semibold text-center md:text-4xl lg:text-5xl text-[#19154E]">
            Community Built with Love
          </h1>

          <div className="mb-12 text-center">
            <p className="text-base text-gray-700 md:text-xl">
              Experience the power of community. Gain exclusive access to
              resources,
            </p>
            <p className="text-base text-gray-700 md:text-xl">
              insights, and a network of like-minded founders.
            </p>
          </div>

          {/* Features  */}
          <div className="flex justify-center">
            <div className="grid max-w-4xl grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-40 md:gap-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#7D3DF9]" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video  */}
      <div className="relative flex justify-center -mt-24 md:-mt-60">
        <video
          src={`./${imagePath}/web.mp4`}
          autoPlay
          loop
          muted
          className="object-cover w-4/6 border-2 rounded-2xl border-[#7D3DF9] mb-16"
        />
      </div>
    </div>
  );
};

export default CommunityVideo;
