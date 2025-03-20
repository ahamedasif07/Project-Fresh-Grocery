import React from "react";
import { FaShippingFast, FaUndo, FaLock, FaTrophy } from "react-icons/fa";
import SectionContainer from "../SectionContainer/SectionContainer";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaShippingFast size={28} />,
      title: "Free Shipping",
      description: "When ordering over $100",
    },
    {
      icon: <FaUndo size={28} />,
      title: "Free Return",
      description: "Get Return within 30 days",
    },
    {
      icon: <FaLock size={28} />,
      title: "Secure Payment",
      description: "100% Secure Online Payment",
    },
    {
      icon: <FaTrophy size={28} />,
      title: "Best Quality",
      description: "Original Product Guaranteed",
    },
  ];

  return (
    <div className="py-[50px]">
      <SectionContainer>
        <section className="bg-[#34A853] rounded-md text-white py-6">
          <div className="container mx-auto flex flex-wrap justify-between items-center gap-6 px-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-white">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionContainer>
    </div>
  );
};

export default FeaturesSection;
