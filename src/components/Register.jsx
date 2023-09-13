import React from "react";
import Bimg from "../img/Bgimg.jpg";
import User from "../img/user.png";
import Smartphone from "../img/smartphone.png";
import Smartphone2 from "../img/smartphone2.png";
import { AiOutlineRight } from "react-icons/ai";

const Register = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: `url(${Bimg})` }}
    >
      <a href="/SearchPage">
        <div className=" flex text-white font-light text-xs justify-end px-14 pt-5 items-center">
          <span>Skip</span>
          <span>
            <AiOutlineRight />
          </span>
        </div>
      </a>
      <div className=" flex flex-col text-white font-semibold text-xl text-left px-14 pt-20">
        <span>Discover our new projects</span>
        <span> from your smartphone</span>
      </div>
      <div className=" flex flex-col text-gray-400 font-light text-xs text-left px-14 pt-5">
        <span>The no. 1 app for searching and finding the most</span>
        <span>beautiful houses and much more</span>
      </div>
      <div className=" flex flex-col text-white font-semibold text-xl text-left px-14 pt-28">
        <span>Register Now</span>
      </div>
      <form action="" className="flex flex-col px-14 gap-5 pt-6">
        <div className="flex bg-white items-center px-3 h-8 rounded-full">
          <img src={User} className="h-3" alt="" />
          <input
            className="w-full border-none outline-none px-4 text-xs"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="flex bg-white items-center px-3 h-8 rounded-full">
          <img src={Smartphone} className="h-4" alt="" />
          <input
            className="w-full border-none outline-none px-4 text-xs"
            type="text"
            placeholder="contact number"
          />
        </div>
        <div className="flex bg-white items-center px-3 h-8 rounded-full">
          <img src={Smartphone2} className="h-4" alt="" />
          <input
            className="w-full border-none outline-none px-4 text-xs"
            type="text"
            placeholder="Email Address"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
