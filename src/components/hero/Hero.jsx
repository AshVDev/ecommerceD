import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] via-transparent flex">
      <div className="hero-left flex-1 flex flex-col justify-center gap-5 pl-[180px]  leading-[1.1] ">
        <h2 className=" text-[#090909] text-[26px] font-[600] ">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="hero-hand-icon flex items-center gap-5 ">
            <p className={` text-[#171717] text-[100px] font-[700]  `}>new</p>
            <img className="w-[105px]" src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-[white] text-[22px] font-[500] ">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex-1 flex items-center justify-center ">
        <img className="w-full h-full object-contain" src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;

// #fde1ff #e1ffea22
