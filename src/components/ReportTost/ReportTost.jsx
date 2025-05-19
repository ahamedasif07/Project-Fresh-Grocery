import React, { useState } from "react";
import { FaCross } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ReportToast = ({ setRepot, report }) => {
  return (
    report && (
      <div className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-[500px] h-auto max-h-[90vh] overflow-y-auto p-5 bg-white rounded shadow-lg border border-gray-200 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Report Products
          </h3>
          <button
            onClick={() => setRepot(false)}
            className="text-3xl md:text-4xl text-white rounded-full bg-[#F34336] w-10 h-10 flex items-center justify-center"
          >
            <RxCross2 />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Enter Report Title*
            </label>
            <input
              type="text"
              placeholder="Reports Headline here"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Enter Report Note*
            </label>
            <textarea
              rows="4"
              placeholder="Type Here"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring focus:ring-green-200"
            ></textarea>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold">
            Submit Report
          </button>
        </div>
      </div>
    )
  );
};

export default ReportToast;
