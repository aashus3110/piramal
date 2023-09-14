import React from "react";
import callll from "../img/i/callll.png";
import num from "../img/i/num.png";
import Untitled45 from "../img/i/Untitled45.png";
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="min-[300px]:h-[40vh] min-[300px]:pt-32 min-[360px]:pt-20">
      <div className="bg-[#F3F4F9] py-10">
        <div className="text-center font-semibold pt-5 pb-5">
          <span>Call us</span>
        </div>
        <div className="bg-[#1A2541] rounded-full px-4 py-4 w-fit mx-auto">
          <img src={callll} className="h-3 w-3" alt="" />
        </div>
        <div className="py-4">
          <img src={num} className="mx-auto h-[80%] w-[80%] " alt="" />
        </div>
        <div className="flex justify-center gap-4">
          <div className="bg-[#00E5A1] w-fit px-2 py-2 rounded-full">
            <span>
              <BiLogoTwitter className="text-white" />
            </span>
          </div>
          <div className="bg-white w-fit px-2 py-2 rounded-full">
            <span>
              <BiLogoFacebook className="" />
            </span>
          </div>
          <div className="bg-white w-fit px-2 py-2 rounded-full">
            <span>
              <BiLogoInstagram className="" />
            </span>
          </div>
        </div>

        <div className="">
          <img src={Untitled45} className="mx-auto h-20 w-20 my-10" alt="" />
        </div>
        <div className="text-center text-xs font-thin">
          <span>© 2023 Piramal. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
