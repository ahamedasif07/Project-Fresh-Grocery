import React, { useState } from "react";

const DualRangeSlider = () => {
  const [min, setMin] = useState(95);
  const [max, setMax] = useState(333);
  const minVal = 0;
  const maxVal = 400;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), max - 1);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), min + 1);
    setMax(value);
  };

  const getPercent = (value) => ((value - minVal) / (maxVal - minVal)) * 100;

  return (
    <div className="w-full ">
      {/* Tailwind-compatible thumb style */}
      <style>
        {`
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 18px;
            width: 18px;
            background: white;
            border: 2px solid #10b981;
            border-radius: 9999px;
            cursor: pointer;
            margin-top: 14px; /* Align with track */
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
          }

          input[type='range']::-moz-range-thumb {
            height: 20px;
            width: 20px;
            background: white;
            border: 2px solid #10b981;
            border-radius: 9999px;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
          }

          input[type='range'] {
            -webkit-appearance: none;
            background: transparent;
          }
        `}
      </style>

      <h2 className="font-bold text-lg mb-2">Price Range</h2>
      <div className="relative h-6 mb-4">
        {/* Slider Track Background */}
        <div className="absolute top-1/2 w-full h-2 rounded bg-gray-300 transform -translate-y-1/2" />

        {/* Active Range Highlight */}
        <div
          className="absolute h-2 bg-green-500 rounded transform -translate-y-1/2 top-1/2"
          style={{
            left: `${getPercent(min)}%`,
            width: `${getPercent(max) - getPercent(min)}%`,
          }}
        />

        {/* Min Thumb */}
        <input
          type="range"
          min={minVal}
          max={maxVal}
          value={min}
          onChange={handleMinChange}
          className="absolute w-full appearance-none h-2 bg-transparent"
          style={{ zIndex: min > max - 100 ? "5" : "3" }}
        />

        <input
          type="range"
          min={minVal}
          max={maxVal}
          value={max}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none h-2 bg-transparent"
        />
      </div>
      <p className="text-black font-medium">
        Price: ${min} - ${max}
      </p>
    </div>
  );
};

export default DualRangeSlider;
