import React, { useState } from "react";
import FILLEDOUTLINE from "../img/FILLEDOUTLINE.png";
import villa1 from "../img/villa1.png";
import location from "../img/location-pin.png";

const Budget = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleMinChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMaxValue(event.target.value);
  };

  return (
    <div>
      <div className="px-12 pt-6 text-sm font-bold">
        <span>Budget</span>
      </div>
      <div className="flex justify-evenly pt-6 ">
        <div className="text-sm">
          <select
            className="w-40"
            id="minValue"
            name="minValue"
            value={minValue}
            onChange={handleMinChange}
          >
            <option value="">Min</option>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="text-sm">
          <select
            className="w-40"
            id="maxValue"
            name="maxValue"
            value={maxValue}
            onChange={handleMaxChange}
          >
            <option value="">Max</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
        </div>
      </div>
      <div className="px-12 py-6 text-sm font-bold">
        <span>Property Type</span>
      </div>
      <div className="flex justify-center gap-1">
        <div className="text-[10px] w-24 h-24 border border-[#B7C9F0] flex flex-col items-center justify-center rounded-md">
          <img src={FILLEDOUTLINE} className="h-10 w-20 px-2" alt="" />
          <span>Flat</span>
        </div>
        <div className="text-[10px] w-24 h-24 border border-[#B7C9F0] flex flex-col items-center justify-center rounded-md">
          <img src={villa1} className="h-10 w-20 px-2" alt="" />
          <span>House / Villa</span>
        </div>
        <div className="text-[10px] w-24 h-24 border border-[#B7C9F0] flex flex-col items-center justify-center rounded-md">
          <img src={location} className="h-10 w-20 px-2" alt="" />
          <span>Plot</span>
        </div>
      </div>
      <div className="px-12 pt-6 text-sm font-bold">
        <span>Number of Bedroom</span>
      </div>
      <div className="flex text-xs gap-2 justify-center">
        <div className="border border-[#A5A5A5] px-2 py-1 rounded-md">
          <span>1 BHK</span>
        </div>
        <div className="border border-[#A5A5A5] px-2 py-1 rounded-md">
          <span>2 BHK</span>
        </div>
        <div className="border border-[#A5A5A5] px-2 py-1 rounded-md">
          <span>3 BHK</span>
        </div>
        <div className="border border-[#A5A5A5] px-2 py-1 rounded-md">
          <span>4 BHK</span>
        </div>
        <div className="border border-[#A5A5A5] px-2 py-1 rounded-md">
          <span>4+BHK</span>
        </div>
      </div>
      <div className="px-12 py-6 text-sm font-bold">
        <span> Exclusively for  Pirimal Members</span>
      </div>
    </div>
  );
};

export default Budget;
