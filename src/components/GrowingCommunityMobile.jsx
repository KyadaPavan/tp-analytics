import React, { useEffect, useState, useRef } from "react";

const AnimatedStat = ({ value, isVisible }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2500;
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCurrentValue(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const startAnimation = (timestamp) => {
      start = timestamp;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(startAnimation);
  }, [value, isVisible]);

  return <h2 className="mb-4 text-6xl font-bold">{currentValue}</h2>;
};

const GrowingCommunityMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(observerRef.current);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);
  const imagePath = import.meta.env.VITE_PATH || "/";
  return (
    <div
      ref={observerRef}
      className="relative py-16 text-white bg-center bg-cover"
      style={{
        backgroundImage: `url('./${imagePath}/pink-curve-mobile.png`,
      }}
    >
      <div className="container z-10 px-4 mx-auto !mt-16 text-center">
        <h1 className="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl md:text-5xl">
          We are here to turn your networking into growth.
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-start justify-center">
              <AnimatedStat value={2000} isVisible={isVisible} />
              <span className="text-3xl sm:text-4xl md:text-5xl">+</span>
            </div>
            <p className="px-8 text-base sm:text-lg md:text-xl">
              Community members who collaborate, learn, and grow together every
              day
            </p>
          </div>
          <div>
            <div className="flex items-start justify-center">
              <AnimatedStat value={1000} isVisible={isVisible} />
              <span className="text-3xl sm:text-4xl md:text-5xl">+</span>
            </div>
            <p className="px-8 text-base sm:text-lg md:text-xl">
              Resources shared, empowering individuals to achieve their goals
              and elevate their skills.
            </p>
          </div>
          <div>
            <div className="flex items-start justify-center">
              <AnimatedStat value={500} isVisible={isVisible} />
              <span className="text-3xl sm:text-4xl md:text-5xl">+</span>
            </div>
            <p className="px-8 text-base sm:text-lg md:text-xl">
              Leads distributed, helping businesses grow and connect with the
              right audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingCommunityMobile;
