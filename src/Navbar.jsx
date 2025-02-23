import React from "react";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      {/* top navbar start */}
      <div className="bg-[#F3FAF5] py-4 ">
        <SectionContainer>
          <div className="flex  justify-between place-items-center">
            <div className="flex place-items-center gap-7 ">
              <h3 className="md:text-[15px] text-[13px]">Account</h3>
              <h3 className="md:text-[15px] text-[13px]">Track Order</h3>
              <h3 className="md:text-[15px] text-[13px]">Support</h3>
            </div>
            {/* contact section */}
            <div className="md:block hidden">
              <div className="flex place-items-center gap-7">
                <h3 className="flex place-items-center gap-2">
                  <p className="text-[18px] text-green-500">
                    <BsTelephonePlus></BsTelephonePlus>
                  </p>
                  + 00645 4568
                </h3>

                <h3 className="flex place-items-center gap-2">
                  <p className="text-[18px] text-green-500">
                    <MdOutlineEmail />
                  </p>
                  Youremai@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
      {/* top navbar end */}
    </div>
  );
};

export default Navbar;
