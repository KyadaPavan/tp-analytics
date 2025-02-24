import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start p-8 glass-effect lg:w-2/5">
      <div className="px-4 mx-auto text-center sm:px-6 md:px-8">
        <h4 className="tracking-wide text-[#7D3DF9] uppercase text-sm sm:text-md">
          The Trustopay Community Advantage
        </h4>
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#19154E]">
          What sets us apart from other platforms?
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-base leading-relaxed text-gray-600 sm:text-lg md:text-lg">
          Designed for freelancers, IT agencies, and startup founders, Trustopay
          Community connects you to exclusive resources and growth opportunities
          to elevate your career.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
