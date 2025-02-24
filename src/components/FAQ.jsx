import React, { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is the Trustopay Community?",
      answer:
        "The Trustopay Community is the largest network for freelancers, IT agencies, and startup founders to collaborate, grow, and access exclusive resources and opportunities.",
    },
    {
      id: 2,
      question: "Who can join the Trustopay Community?",
      answer:
        "Freelancers, IT agencies, and startup founders looking to network, collaborate, and grow their businesses are welcome to join.",
    },
    {
      id: 3,
      question: "What are the membership plans for Trustopay Community?",
      answer:
        "We offer a 6-month plan for ₹299 and a yearly plan for ₹499, both providing full access to all community features and resources.",
    },

    {
      id: 5,
      question: "What tools and resources are available in the community?",
      answer:
        "Members get free or discounted access to essential tools like Canva Premium, Grammarly, legal templates, and marketing resources to enhance their work.",
    },

    {
      id: 6,
      question: "How can the community help me stay updated?",
      answer:
        "Trustopay Community provides regular updates on the latest IT trends, tools, and industry news to ensure you stay ahead in your field.",
    },
    {
      id: 7,
      question: "What benefits do I get with the 6-month or yearly plan?",
      answer:
        "Both plans give you access to verified leads, exclusive tools, virtual meetups, networking opportunities, and much more to help grow your career.",
    },
    {
      id: 8,
      question:
        "Are there any additional costs apart from the membership plans?",
      answer:
        "No, the membership fee covers access to all community resources. Some premium tools and services may come with discounts, but no hidden fees.",
    },
    {
      id: 9,
      question:
        "Can I upgrade my membership from the 6-month plan to the yearly plan?",
      answer:
        "Yes, you can easily upgrade your membership to the yearly plan at any time during your 6-month membership.",
    },
  ];

  const handleToggle = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="container max-w-4xl px-4 py-8 mx-auto" id="FAQs">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <h2 className="w-5/6 sm:w-4/6 mx-auto mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#886DFE] mt-10">
            Frequently Asked Questions
          </h2>
          <p className="border-[#886DFE] border-b-4 w-68 md:w-96 flex justify-center items-center"></p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {questions.map((item) => (
            <div
              key={item.id}
              className="max-w-lg mx-auto overflow-hidden rounded md:max-w-3xl lg:max-w-5xl"
            >
              {/* Question */}
              <div
                className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] text-white cursor-pointer rounded-t-md"
                onClick={() => handleToggle(item.id)}
              >
                {/* <h3 className="text-sm font-medium md:text-base">
                  {item.question}
                </h3> */}
                <h3
                  className={`text-sm md:text-base ${
                    activeQuestion === item.id
                      ? "font-semibold"
                      : " font-medium"
                  }`}
                >
                  {item.question}
                </h3>
                <span>
                  {activeQuestion === item.id ? (
                    <IoIosArrowDropupCircle className="text-lg md:text-2xl " />
                  ) : (
                    <IoIosArrowDropdownCircle className="text-lg md:text-2xl" />
                  )}
                </span>
              </div>

              {/* Animated Answer */}

              {activeQuestion === item.id && (
                <div
                  className="overflow-hidden px-4 py-3 text-sm text-white bg-gradient-to-r from-[#5A3A8A] via-[#7249B7] to-[#3E2371]
 md:text-base rounded-b-xl "
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
