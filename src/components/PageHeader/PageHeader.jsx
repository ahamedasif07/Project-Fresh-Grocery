import React from "react";
import HeaderBg from "../../../public/assets/new-arrival-bg.webp";
import SectionContainer from "../SectionContainer/SectionContainer";

const PageHeader = ({ heading, path }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${HeaderBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "200px",
        }}
      >
        <SectionContainer>
          <p className="pt-[60px] text-gray-700 text-[16px]">{path}</p>
          <h2 className="text-center text-[40px] font-bold ">{heading}</h2>
        </SectionContainer>
      </div>
    </div>
  );
};

export default PageHeader;
