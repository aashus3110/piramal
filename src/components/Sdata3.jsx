import React from "react";
import PREMIU from "../img/i/PREMIU.png";
import call from "../img/i/call.png";
import carparking from "../img/i/carparking.png";
import shoppingcart from "../img/i/shoppingcart.png";
import security from "../img/i/security.png";
import boardmeetin from "../img/i/boardmeetin.png";
import massag from "../img/i/massag.png";

const Sdata3 = () => {
  return (
    <div>
      <div className="text-[7.5px] text-[#00E5A1] my-8 font-extralight">
        <span>ARANYA’S SERVICES</span>
      </div>
      <div className="mx-auto">
        <img src={PREMIU} className="mx-auto" alt="" />
      </div>
      <div className="flex justify-evenly my-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 ">
            <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full">
              <img src={call} alt="" />
            </div>
            <div className="flex flex-col text-left ">
              <div className="text-xs">
                <span>RECEPTION</span>
              </div>
              <div className="text-[7px]">
                <span>6 area for receptionist serve 24/7</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full">
              <img src={carparking} alt="" />
            </div>
            <div className="flex flex-col text-left ">
              <div className="text-xs">
                <span>PARKING</span>
              </div>
              <div className="text-[7px]">
                <span>Parking area with extra capacity</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full">
              <img src={shoppingcart} alt="" />
            </div>
            <div className="flex flex-col text-left ">
              <div className="text-xs">
                <span>SUPERMARKET</span>
              </div>
              <div className="text-[7px]">
                <span>5 supermarket in each block</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 ">
            <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full">
              <img src={security} alt="" />
            </div>
            <div className="flex flex-col text-left ">
              <div className="text-xs">
                <span>SECURITY</span>
              </div>
              <div className="text-[7px]">
                <span>Security team with 24/7 camera system</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full">
              <img src={boardmeetin} alt="" />
            </div>
            <div className="flex flex-col text-left ">
              <div className="text-xs">
                <span>CONFERENCE ROOM</span>
              </div>
              <div className="text-[7px]">
                <span>5 conference room setup in each block</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full">
              <img src={massag} alt="" />
            </div>
            <div className="flex flex-col text-left ">
              <div className="text-xs">
                <span>SPA AND MASSAGE</span>
              </div>
              <div className="text-[7px]">
                <span>Spa and Massage service for better health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0EA57A] text-[10px] py-3 px-8 w-fit mx-auto rounded-full">
        <button>View More</button>
      </div>
    </div>
  );
};

export default Sdata3;
