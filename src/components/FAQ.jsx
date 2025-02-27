import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
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
    question: "Are there any additional costs apart from the membership plans?",
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl p-6 mx-auto text-[#D99BFF] " id="faqs">
      {/* Heading & Description */}

      <h2 className="w-5/6 sm:w-4/6 mx-auto mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4b3f95] mt-10 text-center">
        Frequently Asked Questions
      </h2>
      <p className="border-[#4b3f95] border-b-4 w-68 md:w-96 flex justify-center items-center mx-auto"></p>

      {/* FAQs */}
      <div className="relative mt-16 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-[#D99BFF]"
          >
            {/* Question */}
            <button
              className="flex items-center justify-between w-full p-4 text-base font-medium text-left md:text-lg bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] text-white"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="flex items-center justify-center w-6">
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" size={15} />
                ) : (
                  <FaChevronDown className="text-gray-400" size={15} />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#5A3A8A] via-[#7249B7] to-[#3E2371] ${
                openIndex === index
                  ? "max-h-40 opacity-100 p-4"
                  : "max-h-0 opacity-0 p-0"
              }`}
            >
              <p className="text-sm text-white md:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
