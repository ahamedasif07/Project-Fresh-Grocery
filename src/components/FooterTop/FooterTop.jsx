import React from "react";
import footerImage from "../../../public/assets/footer-top-bg.webp";

const FooterTop = () => {
  return (
    <div>
      <div
        className="w-full h-[450px] bg-cover bg-center border-2 border-yellow-400"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="border-2 border-red-800 pt-[120px] pr-[20px] sm:pr-[40px] md:pr-[80px] lg:pr-[180px]">
          <div className="">
            <div className="text-center max-w-[600px] ml-auto">
              <h2 className="text-[25px] sm:text-[33px] md:text-[40px] text-white font-semibold">
                Get <span className="text-yellow-400">20% </span>Off Discount
                Coupon
              </h2>
              <p className="text-white text-[20px]">
                by Subscribe our Newsletter
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
