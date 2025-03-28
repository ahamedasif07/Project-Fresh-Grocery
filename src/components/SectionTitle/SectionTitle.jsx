import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      {/* titel */}

      <div className="flex overflow-hidden items-center justify-between">
        <h2 className="text-[28px] text-black font-semibold">{title}</h2>
        <div className="group">
          <h2 className="text-[16px] text-black font-semibold">View All</h2>
          <p className="h-[2px] w-[65px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-black origin-left"></p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
