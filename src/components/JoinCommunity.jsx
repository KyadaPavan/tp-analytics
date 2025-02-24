import React, { useEffect } from "react";

const JoinCommunity = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "t" || event.key === "T") {
        window.open("https://rzp.io/rzp/trustopay", "_blank");
      } else if (event.key === "p" || event.key === "P") {
        window.open("https://rzp.io/rzp/Trustopaycommunity", "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="fixed hidden px-4 py-2  rounded-md shadow-lg top-24 right-4 lg:block glass-effect "
      style={{ zIndex: 1000 }}
    >
      Press <span className="font-bold">T</span> for Six month plan and{" "}
      <span className="font-bold">P</span> for Annual plan.
    </div>
  );
};

export default JoinCommunity;
