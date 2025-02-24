import React, { useState } from "react";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("Annual Subscription");
  const [billingCycle, setBillingCycle] = useState("basicmonthly");
  const imagePath = import.meta.env.VITE_PATH || "/";
  const basciplans = [
    {
      name: "Six-Month Subscription",
      description: "₹299 for Six Months",
      features: [
        "Genuine Leads",
        "Collaboration Opportunities",
        "Priority Access",
        "Tools & Resources",
        "Community Support",
        "Portfolio Showcase",
        "Webinars",
      ],
      buttontitle: "Six Months",
      permonth: "₹50 per month",
      prices: {
        basicmonthly: "₹299",
      },
      paymentLink: "https://rzp.io/rzp/trustopay",
    },
    {
      name: "Annual Subscription",
      description: "₹499 for 12 Months",
      features: [
        "Genuine Leads",
        "Collaboration Opportunities",
        "Priority Access",
        "Tools & Resources",
        "Community Support",
        "Portfolio Showcase",
        "Webinars",
      ],
      buttontitle: "Annual",
      permonth: "₹41 per month",
      prices: {
        basicmonthly: "₹499",
      },
      paymentLink: "https://rzp.io/rzp/Trustopaycommunity",
    },
  ];

  const handlePlanSelection = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="container flex flex-col gap-0 lg:gap-10 md:gap-10  lg:flex-row bg-[#f3ebff] lg:p-6 md:p-0 p-6"
      id="Pricing"
    >
      <div className="flex flex-col justify-between items-start w-full mb-6 mt-10  rounded-3xl  text-white bg-[#7D3DF9] lg:w-1/3 lg:p-10 p-8">
        <h2 className="mb-4 text-3xl font-semibold ">
          Join the community that grows with you
        </h2>
        <div className="">
          <div className="w-16 h-2 mb-6 rounded-xl bg-[#f3ebff]"></div>
          <p className="text-sm">
            Access genuine leads, collaboration opportunities, and exclusive
            tools with our affordable Six-Month or Annual Subscription plans.
            Unlock priority access, community support, and resources to boost
            your growth!
          </p>
        </div>
        <img
          src={`./${imagePath}/pricing-2.png`}
          alt="Product"
          className="mx-auto mt-8"
        />
      </div>

      {/* Pricing Section */}
      <div className="w-full py-8 lg:w-2/3 lg:pt-20" id="pricing">
        <h2 className="mb-8 text-3xl font-semibold text-left text-[#19154E]">
          With Just starting at ₹299, Get more than you expect!
        </h2>

        <div className="flex flex-col justify-center space-y-8 cursor-pointer lg:flex-row lg:space-y-0 lg:space-x-8">
          {basciplans.map((plan, index) => (
            <div
              key={index}
              className={`w-full lg:w-1/2  border-2  p-8 ${
                selectedPlan === plan.name
                  ? "border-[#7D3DF9]"
                  : "border-gray-300"
              } rounded-3xl shadow-md flex flex-col justify-between`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#7D3DF9] text-center">
                  {plan.name}
                </h3>
                <p className="mb-4 text-lg  text-[#19154E] text-center">
                  {plan.description}
                </p>
                <ul className="mb-4 list-disc list-inside">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 text-[#19154E]">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center px-2 py-4 space-x-2 border-2 border-gray-400 rounded-xl">
                  <input
                    type="radio"
                    id={`${plan.name}-monthly`}
                    name={`${plan.name}-billing`}
                    value="basicmonthly"
                    checked={billingCycle === "basicmonthly"}
                    onChange={() => setBillingCycle("basicmonthly")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`${plan.name}-monthly`}
                    className={`w-4 h-4 flex items-center justify-center border-2 border-gray-300 rounded-full cursor-pointer 
              peer-checked:bg-[#7D3DF9] peer-checked:border-gray-500`}
                  >
                    <span className="hidden w-2 h-2 bg-white rounded-full peer-checked:block"></span>
                  </label>

                  <div className="flex items-center w-full justify-evenly">
                    <div>
                      <p className="text-[#19154E] text-lg lg:text-xl font-medium ">
                        {plan.buttontitle}
                      </p>
                      <p className="text-gray-500 ">{plan.permonth}</p>
                    </div>
                    <div>
                      <p className="text-lg font-medium lg:text-xl">
                        {plan.prices[billingCycle]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="w-full py-4 mt-4 text-white bg-[#7D3DF9] rounded-xl hover:bg-[#6A33D4]"
                  id="mobile-pricing"
                  onClick={() => handlePlanSelection(plan.paymentLink)}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
