import React from "react";
import HeaderBg from "../../../public/assets/new-arrival-bg.webp";

const PageHeader = () => {
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
      ></div>
    </div>
  );
};

export default PageHeader;
