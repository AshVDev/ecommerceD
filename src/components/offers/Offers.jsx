import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="mt-2 offers w-[65%] h-[60vh] flex m-auto px-0 py-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] via-transparent  ">
      <div className="offers-left flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[80px] font-[600] ">Exlusive</h1>
        <h1 className="text-[#171717] text-[80px] font-[600] ">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[22px] font-[600] ">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white font-[500] text-[22px] mt-[30px] cursor-pointer ">
          Check Now
        </button>
      </div>
      <div className="offers-right flex-1 flex items-center justify-end pt-[50px] ">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
