import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

// Main Hover Effect Component
export const HoverEffect = ({ items = [], className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="text-5xl text-[#886DFE] font-semibold mx-auto mt-10 text-center">
        Resources to get you started
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10 max-w-[90%] mx-auto ${className}`}
      >
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, idx) => (
            <Link
              to={item?.link || "#"}
              key={idx}
              className="relative block w-full h-full p-2 group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-[#886DFE]/80 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <p className="text-sm font-semibold tracking-wide text-purple-400">
                  {item.category}
                </p>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <div className="mt-auto">
                  <Link
                    to={item.link}
                    className="inline-block mt-4 font-semibold text-purple-300 transition-all duration-300 hover:text-purple-400"
                  >
                    {item.linkText} →
                  </Link>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No items available
          </p>
        )}
      </div>
    </>
  );
};

// Card Component
export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`flex flex-col rounded-2xl h-full w-full p-6 bg-[#1B0A38] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-300 hover:bg-[#2C1252] hover:scale-105 hover:shadow-lg ${className}`}
    >
      <div className="relative z-50 flex flex-col h-full">{children}</div>
    </div>
  );
};

// Card Title Component
export const CardTitle = ({ className = "", children }) => {
  return (
    <h4
      className={`text-zinc-100 font-bold tracking-wide text-lg mt-4 ${className}`}
    >
      {children}
    </h4>
  );
};

// Card Description Component
export const CardDescription = ({ className = "", children }) => {
  return (
    <p
      className={`mt-6 text-zinc-400 tracking-wide leading-relaxed text-sm line-clamp-3 ${className}`}
    >
      {children}
    </p>
  );
};
