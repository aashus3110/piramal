import React from "react";
import OURAPARTMENTS from "../img/OURAPARTMENTS.png";

const Sdata1 = () => {
  return (
    <div>
      <div className="text-[7.5px] text-[#00E5A1] my-8 font-extralight">
        <span>MUMBAI</span>
      </div>
      <div className="mx-auto">
        <img src={OURAPARTMENTS} className="mx-auto" alt="" />
      </div>
      <div className="w-[250px] text-center mx-auto text-[12px] my-4 text-[#A5A5A5] font-extralight">
        Presenting Piramal Aranya, a high rise gated sanctuary that offers
        luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness
        technologies, dual-aspect blue and green views and a world-class
        lifestyle crafted alongside the world’s leading partners at Rani Baug,
        Byculla, South Mumbai.
      </div>
    </div>
  );
};

export default Sdata1;
