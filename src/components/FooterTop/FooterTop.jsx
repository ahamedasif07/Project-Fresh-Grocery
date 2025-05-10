import React from "react";
import footerImage from "../../../public/assets/footer-top-bg.webp";

const FooterTop = () => {
  return (
    <div>
      <div
        className="w-full h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${footerImage})` }}
      ></div>
    </div>
  );
};

export default FooterTop;
