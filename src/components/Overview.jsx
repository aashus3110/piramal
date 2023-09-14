import React, { useState } from "react";
import Rectangle72 from "../img/Rectangle72.png";
import Rectangle123 from "../img/Rectangle123.png";
import Rectangle1234 from "../img/Rectangle1234.png";
import Sdata1 from "./Sdata1";
import Sdata2 from "./Sdata2";
import Sdata3 from "./Sdata3";

const Overview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: Rectangle72, data: <Sdata1 /> },
    { image: Rectangle123, data: <Sdata2 /> },
    { image: Rectangle1234, data: <Sdata3 /> },
  ];

  const titles = ["Project Overview", "Configuration", "Amenities"];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="text-[#1A2440] font-extrabold text-center text-xl py-6">
        <span>{titles[currentSlide]}</span>
      </div>
      <div className="bg-[#1A2440] h-[80vh] relative top-40 rounded-t-3xl"></div>
      <div className="pb-10 relative -top-[36rem]">
        <div className="slider-container mx-auto w-[302px] h-[412px] relative">
          <img
            src={slides[currentSlide].image}
            className="mx-auto w-[302px] h-[412px]"
            alt=""
          />
          <div className="px-4 flex justify-center my-2">
            {slides.map((slide, index) => (
              <span
                key={index}
                className={`rounded-full bg-[#00E5A1] border-double border-4 mx-1 border-[#00E5A1] ${
                  index === currentSlide ? "bg-[#1A2440]" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="text-center text-white mt-4">
          {slides[currentSlide].data}
        </div>
      </div>
    </div>
  );
};

export default Overview;
