import React, { useEffect, useState } from "react";
import flashSale from "../../../public/assets/flash_sale.webp";
import SectionContainer from "../SectionContainer/SectionContainer";
import PrimaryButton from "../PrymaryButton/PrimaryButton";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-[70px]">
      <SectionContainer>
        <div
          className="w-full max-h-[700px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${flashSale})`,
          }}
        >
          <div className="  py-10 px-4 md:px-[60px] ">
            <div className="flex  gap-6 mb-8 flex-wrap">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
                const colors = [
                  "text-red-500",
                  "text-sky-500",
                  "text-green-500",
                  "text-red-500",
                ];
                const values = [
                  timeLeft.days,
                  timeLeft.hours,
                  timeLeft.minutes,
                  timeLeft.seconds,
                ];
                return (
                  <div key={label}>
                    <div className="bg-white w-24 h-24 rounded-full flex flex-col justify-center items-center shadow">
                      <span className={`text-3xl font-bold ${colors[index]}`}>
                        {values[index]}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-semibold ml-[18px] mt-1">
                      {label}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="py-[8px] md:py-[20px]">
              <h2 className="text-5xl font-extrabold text-gray-900 my-4">
                WOO! Flash Sale
              </h2>
              <p className="text-gray-900 max-w-xl text-[18px] my-[20px]">
                You get into the 2k+ best Products in <br />
                Flash offer with as in shaped sofa for sale.
              </p>
              <div>
                <PrimaryButton
                  text="Shop Now"
                  colour="#34A853"
                  hoverColour="#1D1D1D"
                ></PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default FlashSale;
