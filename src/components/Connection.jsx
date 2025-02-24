import React from "react";

const Connection = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  return (
    <div
      className="w-full bg-center bg-cover h-fit"
      style={{ backgroundImage: `url('./${imagePath}/newconn.png')` }}
    >
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center text-center text-white lg:max-w-4xl">
          <div className="mt-10 mb-6 text-xs font-semibold tracking-wide text-gray-200 uppercase sm:mt-16 sm:mb-10 sm:text-sm md:text-base">
            Create Closer Connections
          </div>
          <div className="mb-16 sm:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-[4rem] text-gray-100 max-w-3xl">
            Our community brings you closer to like-minded professionals, tools,
            and insights to fuel your success.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
