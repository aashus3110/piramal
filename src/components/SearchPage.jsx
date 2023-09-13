import React from "react";
import Placeholder from "../img/placeholder.png";
import { BiSearch } from "react-icons/bi";
import Budget from "./Budget";

const SearchPage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="bg-[#1A2440] w-full h-64 rounded-bl-[24px] rounded-br-[59px]">
        <div className="text-4xl font-normal text-white px-12 pt-10">
          <span>View Projects</span>
        </div>
        <div className="text-base font-normal text-white pl-12 pr-28 pt-2">
          <span>Great! Just fill out these last few details</span>
        </div>
        <div className="flex items-center bg-[#D9D9D9] h-10 justify-center gap-5 mx-10 rounded-full mt-9">
          <img src={Placeholder} className="h-5 ml-3" alt="" />
          <input
            className="w-40 h-10 outline-none border-none bg-[#D9D9D9] text-xs"
            type="text"
            placeholder="Search Projects"
          />
          <span className="h-8 w-8 rounded-full bg-[#0EA57A]">
            <BiSearch className="mx-auto my-2 text-white" />
          </span>
        </div>
      </div>
      <Budget />
    </div>
  );
};

export default SearchPage;
