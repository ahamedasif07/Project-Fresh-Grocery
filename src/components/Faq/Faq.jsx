import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer international shipping?",
    answer: `Yes, we offer international shipping to many countries around the world.
However, shipping times and fees may vary depending on your location.
Please check our shipping policy page for more information about international shipping.`,
  },
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows returns within 30 days of purchase with a valid receipt.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, PayPal, and other major credit/debit cards.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we’ll send you a tracking number via email.",
  },
  {
    question: "How do I place an order on your website?",
    answer:
      "Simply browse our products, add to cart, and follow the checkout steps.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`mb-4 border rounded transition-colors duration-300 ${
              isOpen ? "bg-green-600 text-white" : "bg-white text-black"
            }`}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {isOpen ? <FaMinus /> : <FaPlus />}
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              }}
            >
              <div className="px-6 pb-4 text-sm">
                {faq.answer.split("\n").map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
