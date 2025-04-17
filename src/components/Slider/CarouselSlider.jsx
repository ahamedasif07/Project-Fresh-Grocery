import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImgOne from "../../../public/assets/hero-img-1.webp";
import heroImgTwo from "../../../public/assets/hero-img-2.webp";
import heroImgTheree from "../../../public/assets/hero-img-3.webp";
import PrimaryButton from "../PrymaryButton/PrimaryButton";
import SectionContainer from "../SectionContainer/SectionContainer";

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
    <div className="relative z-0">
      {" "}
      {/* Ensures slider is below the navbar */}
      <SectionContainer>
        <div className="py-10 relative !z-0">
          <Slider {...settings} className="relative !z-[-1]">
            {/* Slide 1 */}
            <div className="!flex flex-col-reverse md:flex-row p-6 place-items-center w-full">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-green-600 text-[30px] font-semibold">
                  FRESH GROCERY
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-2 leading-[1.5]">
                  There's you can Buy your all of Grocery Products.
                </h2>
                <PrimaryButton
                  text="Shop Now"
                  colour="#FFBB38"
                  hoverColour="black"
                />
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src={heroImgOne} alt="Grocery" className="max-h-[450px]" />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="!flex flex-col-reverse md:flex-row place-items-center w-full p-6">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-green-600 text-[30px] font-semibold">
                  HEALTHY FOODS
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-2 leading-[1.5]">
                  We Provide Fresh And Organic Food to Your Door.
                </h2>
                <PrimaryButton
                  text="Shop Now"
                  colour="#FFBB38"
                  hoverColour="black"
                />
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src={heroImgTwo} alt="Grocery" className="max-h-[450px]" />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="!flex flex-col-reverse md:flex-row w-full place-items-center p-6">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-green-600 text-[30px] font-semibold">
                  HEALTHY FOODS
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-2 leading-[1.5]">
                  You Can Buy All The Grocery Items Hassle-Free.
                </h2>
                <PrimaryButton
                  text="Shop Now"
                  colour="#FFBB38"
                  hoverColour="black"
                />
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={heroImgTheree}
                  alt="Grocery"
                  className="max-h-[450px]"
                />
              </div>
            </div>
          </Slider>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CarouselSlider;
