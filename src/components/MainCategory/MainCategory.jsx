import React, { useEffect } from "react";
import mainCategoryOne from "../../../public/assets/c-bg-img-1.webp";
import mainCategoryTow from "../../../public/assets/c-bg-img-2.webp";
import mainCategoryThree from "../../../public/assets/c-bg-img-3.webp";
import SectionContainer from "../SectionContainer/SectionContainer";
import mainCategoryItemOne from "../../../public/assets/c-shop-img-1.webp";
import mainCategoryItemTwo from "../../../public/assets/c-shop-img-2.webp";
import mainCategoryItemTheree from "../../../public/assets/c-shop-img-3.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

const MainCategory = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 300, // Animation duration in milliseconds
  //     once: true, // Animation runs only once
  //     easing: "ease-in-out", // Easing style
  //   });
  // }, []);
  return (
    <div>
      <SectionContainer>
        <div className="flex justify-between md:flex-row flex-col gap-4 mx-auto my-[30px] rounded-md">
          {/* image one */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
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
            data-aos="fade-up"
            data-aos-duration="500"
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
            data-aos="fade-up"
            data-aos-duration="500"
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
