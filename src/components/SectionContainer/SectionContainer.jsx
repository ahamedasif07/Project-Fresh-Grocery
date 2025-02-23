import React from "react";

const SectionContainer = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto  lg:px-[100px] md:px-[40px] px-4 ">
      {children}
    </div>
  );
};

export default SectionContainer;
