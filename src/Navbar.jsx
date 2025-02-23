import React from "react";
import SectionContainer from "./components/SectionContainer/SectionContainer";

const Navbar = () => {
  return (
    <div>
      {/* top navbar start */}
      <div className="bg-[#F3FAF5] py-4 ">
        <SectionContainer>
          <div className="flex  justify-between place-items-center">
            <div className="flex place-items-center gap-7 ">
              <h3>Account</h3>
              <h3>Track Order</h3>
              <h3>Support</h3>
            </div>
            <div className="flex place-items-center gap-7">
              <h3 className="">+ 00645 4568</h3>

              <h3>Youremai@gmail.com</h3>
            </div>
          </div>
        </SectionContainer>
      </div>
      {/* top navbar end */}
    </div>
  );
};

export default Navbar;
