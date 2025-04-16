import React from "react";
import mainCategoryOne from "../../../public/assets/c-bg-img-1.webp";
import mainCategoryTow from "../../../public/assets/c-bg-img-2.webp";
import mainCategoryThree from "../../../public/assets/c-bg-img-3.webp";
import SectionContainer from "../SectionContainer/SectionContainer";
import mainCategoryItemOne from "../../../public/assets/c-shop-img-1.webp";
import mainCategoryItemTwo from "../../../public/assets/c-img-2.webp";
import mainCategoryItemTheree from "../../../public/assets/c-shop-img-3.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

const MainCategory = () => {
  return (
    <div>
      <SectionContainer>
        <div className="grid grid-cols-3 mx-auto mt-[30px] gap-3 rounded-md">
          {/* image one */}
          <div className="relative  overflow-hidden max-w-[400px] ">
            <img className="" src={mainCategoryOne}></img>

            <div className="absolute bottom-1 overflow-hidden">
              <div className=" space-y-[-35px]">
                <div className="  p-4 space-y-[14px]  ">
                  <h4 className="text-[15px]  mt-[30px] font-semibold">
                    FRUITS
                  </h4>
                  <h3 className="text-3xl font-bold">
                    Healthy & Goods <br /> Fruits
                  </h3>
                  <PrimaryButton
                    text="Shop Now"
                    colour="green-600"
                    hoverColour="black"
                  ></PrimaryButton>
                </div>
                <img src={mainCategoryItemOne}></img>
              </div>
            </div>
          </div>
          {/* image tow */}
          <img src={mainCategoryTow}></img>
          {/* image 3 */}
          <div className="relative  overflow-hidden max-w-[400px] ">
            <img className="" src={mainCategoryThree}></img>

            <div className="absolute bottom-1 overflow-hidden">
              <div className=" space-y-[-35px]">
                <div className="  p-4 space-y-[14px]  ">
                  <h4 className="text-[15px]  mt-[30px] font-semibold">
                    FRUITS
                  </h4>
                  <h3 className="text-3xl font-bold">
                    Healthy & Goods <br /> Fruits
                  </h3>
                  <PrimaryButton
                    text="Shop Now"
                    colour="#921DFF"
                    hoverColour="black"
                  ></PrimaryButton>
                </div>
                <img src={mainCategoryItemTheree}></img>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MainCategory;
