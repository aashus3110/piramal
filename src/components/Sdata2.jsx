import React from "react";
import BHKEASTFACING from "../img/2BHKEASTFACING.png";
import lNDINGPAGEHIT from "../img/lNDINGPAGEHIT.png";

const Sdata2 = () => {
  return (
    <div>
      <div className="text-[7.5px] text-[#00E5A1] my-8 font-extralight">
        <span>MUMBAI</span>
      </div>
      <div className="mx-auto">
        <img src={BHKEASTFACING} className="mx-auto" alt="" />
      </div>
      <div className="w-[250px] text-left mx-auto text-[12px] my-4 text-[#A5A5A5] font-extralight">
        <ul className="list-disc	">
          <li>All bedrooms with en-suite bathrooms</li>
          <li>Apartments with harbour views</li>
          <li>Master bedroom with corner windows offering panoramic views</li>
          <li>All shafts on the external face</li>
          <li>Kitchen with dry balcony</li>
          <li>
            Ease of combining apartments to create exclusive wing apartment with
            expansive living & dining area
          </li>
        </ul>
      </div>
      <div className=""></div>
      <div className="">
        <img src={lNDINGPAGEHIT} className="mx-auto w-[90%]" alt="" />
      </div>
    </div>
  );
};

export default Sdata2;
