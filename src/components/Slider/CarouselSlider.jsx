import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImgOne from "../../../public/assets/hero-img-1.webp";
import heroImgTwo from "../../../public/assets/hero-img-2.webp";
import heroImgTheree from "../../../public/assets/hero-img-3.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="py-10 relative z-0">
        {" "}
        {/* Lower z-index */}
        <Slider {...settings} className="relative z-">
          <div className="!flex flex-col-reverse md:flex-row p-6 place-items-center w-full">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-green-600 text-[30px] font-semibold">
                FRESH GROCERY
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-2 leading-[1.5] -tracking-wide">
                There's you can Buy your all of Grocery Products.
              </h2>
              <PrimaryButton
                text="Shop Now"
                colour="[#FFBB38]"
                hoverColour="black"
              />
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="h-[450px] w-[450px]">
                <img src={heroImgOne} alt="Grocery" className="" />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="!flex flex-col-reverse md:flex-row place-items-center w-full p-6">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-green-600 text-[30px] font-semibold">
                HEALTHY FOODS
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-2 leading-[1.5] -tracking-wide">
                We Provide Fresh And Organic Food to Your Door.
              </h2>
              <PrimaryButton
                text="Shop Now"
                colour="[#FFBB38]"
                hoverColour="black"
              />
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="max-h-[450px] mx-auto max-w-[450px]">
                <img src={heroImgTwo} alt="Grocery" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="!flex flex-col-reverse md:flex-row w-full place-items-center p-6">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-green-600 text-[30px] font-semibold">
                HEALTHY FOODS
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-2 leading-[1.5] -tracking-wide">
                You Can Buy All The Grocery Items Hassle-Free.
              </h2>
              <PrimaryButton
                text="Shop Now"
                colour="[#FFBB38]"
                hoverColour="black"
              />
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="max-h-[450px] mx-auto max-w-[450px]">
                <img
                  src={heroImgTheree}
                  alt="Grocery"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSlider;
