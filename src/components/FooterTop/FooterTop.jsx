import React from "react";
import footerImage from "../../../public/assets/footer-top-bg.webp";
import { MdOutlineMail } from "react-icons/md";

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

              {/* input filde */}
              <div className="flex items-center ml-[50px] mt-[10px]">
                <div className="flex items-center gap-3 w-[250px] md:w-[300px] px-6 py-[14px]  bg-white ">
                  <span>
                    <MdOutlineMail />
                  </span>
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="outline-none w-full text-sm placeholder-black "
                  />
                </div>
                <button className="bg-yellow-400 text-black px-3 md:px-6 h-[48px] font-semibold">
                  Get the Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
