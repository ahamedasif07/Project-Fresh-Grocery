import React from "react";
import mainCategoryOne from "../../../public/assets/c-bg-img-1.webp";
import mainCategoryTow from "../../../public/assets/c-bg-img-2.webp";
import mainCategoryThree from "../../../public/assets/c-bg-img-3.webp";
import SectionContainer from "../SectionContainer/SectionContainer";
import mainCategoryItemOne from "../../../public/assets/c-shop-img-1.webp";
import mainCategoryItemTwo from "../../../public/assets/c-shop-img-2.webp";
import mainCategoryItemTheree from "../../../public/assets/c-shop-img-3.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

const MainCategory = () => {
  return (
    <div>
      <SectionContainer>
        <div className="flex justify-between md:flex-row flex-col gap-4 mx-auto my-[30px] rounded-md">
          {/* image one */}
          <div
            className="relative overflow-hidden w-full h-[400px] md:w-[400px] md:h-[430px] bg-cover bg-center"
            style={{ backgroundImage: `url(${mainCategoryOne})` }}
          >
            <div className=" overflow-hidden">
              <div className="space-y-[-7px] sm:space-y-[-20px] md:space-y-[-35px]">
                <div className="p-4 space-y-[14px]">
                  <h4 className="text-[15px] mt-[30px] font-semibold">
                    FRUITS
                  </h4>
                  <h3 className="text-3xl font-bold">
                    Healthy & Goods <br /> Fruits
                  </h3>
                  <PrimaryButton
                    text="Shop Now"
                    colour="#34A853"
                    hoverColour="black"
                  />
                </div>
                <img src={mainCategoryItemOne} alt="Item One" />
              </div>
            </div>
          </div>

          {/* image two */}
          <div
            className="relative overflow-hidden w-full h-[400px] md:w-[400px] md:h-[430px] bg-cover bg-center"
            style={{ backgroundImage: `url(${mainCategoryTow})` }}
          >
            <img
              className="absolute top-1"
              src={mainCategoryItemTwo}
              alt="Item Two"
            />

            <div className="absolute bottom-[15px] overflow-hidden">
              <div className="space-y-[-7px] sm:space-y-[-20px] md:space-y-[-35px]">
                <div className="p-4 space-y-[14px]">
                  <h4 className="text-[15px] mt-[30px] font-semibold">
                    FRUITS
                  </h4>
                  <h3 className="text-3xl font-bold">
                    Healthy & Goods <br /> Fruits
                  </h3>
                  <PrimaryButton
                    text="Shop Now"
                    colour="#FE0600"
                    hoverColour="black"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* image three */}
          <div
            className="relative overflow-hidden w-full h-[400px] md:w-[400px] md:h-[430px] bg-cover bg-center"
            style={{ backgroundImage: `url(${mainCategoryThree})` }}
          >
            <div className=" overflow-hidden">
              <div className="space-y-[-7px] sm:space-y-[-20px] md:space-y-[-35px]">
                <div className="p-4 space-y-[14px]">
                  <h4 className="text-[15px] mt-[30px] font-semibold">
                    FRUITS
                  </h4>
                  <h3 className="text-3xl font-bold">
                    Healthy & Goods <br /> Fruits
                  </h3>
                  <PrimaryButton
                    text="Shop Now"
                    colour="#921DFF"
                    hoverColour="black"
                  />
                </div>
                <img src={mainCategoryItemTheree} alt="Item Three" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MainCategory;
