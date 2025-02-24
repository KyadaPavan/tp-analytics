import { useState } from "react";
import { motion } from "framer-motion";

const MarketingAnalytics = () => {
  const [companySize, setCompanySize] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033]
 px-6 md:px-20 py-12"
    >
      {/* Left Section */}
      <div className="max-w-lg mb-10 text-center text-white md:text-left md:mb-0">
        <h1 className="mb-4 text-5xl font-semibold">
          Trustopay Marketing Analytics
        </h1>
        <p className="mt-10 text-lg text-white/80">
          Combine your marketing & product data to understand the full user
          journey and optimize all of your marketing efforts.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="mt-10">
        <div className="w-full max-w-xl p-6 bg-white shadow-lg md:p-10 rounded-2xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-gray-700">First name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#896DFF]"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#896DFF]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-gray-700">Company email</label>
              <input
                type="email"
                placeholder="you@mail.com"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#896DFF]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-gray-700">Phone number</label>
              <input
                type="text"
                placeholder="123-555-555"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#896DFF]"
              />
            </div>
          </div>

          {/* Company Size Selection */}
          <div className="mt-4">
            <label className="block mb-2 text-gray-600">Company size</label>
            <div className="flex gap-2">
              {["1-250", "251-1000", "1000+"].map((size) => (
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full p-3 border rounded-full transition-all ${
                    companySize === size
                      ? "bg-[#896DFF] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-[#EDEAFF]"
                  }`}
                  onClick={() => setCompanySize(size)}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Terms & Privacy */}
          <p className="mt-4 text-xs text-gray-500">
            By clicking "Get in Touch" I agree to the{" "}
            <a href="#" className="text-[#896DFF]">
              Terms of Use
            </a>{" "}
            and the{" "}
            <a href="#" className="text-[#896DFF]">
              Privacy Statement
            </a>
            .
          </p>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#896DFF] text-white text-lg font-semibold py-3 rounded-full w-full"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MarketingAnalytics;
