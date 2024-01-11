import React from "react";
import footer_logo from "../assets/logo_big.png";
import insta_icon from "../assets/instagram_icon.png";
import whtsApp_icon from "../assets/whatsapp_icon.png";
import pintrest_icon from "../assets/pintester_icon.png";
const footer_icons_container =
  "p-2.5 pb-1.5 bg-slate-50 border border-solid border-[#ebebeb]";
const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-[50px] ">
      <div className="footer-log flex items-center gap-[20px] ">
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-[46px] font-[700] ">SHOPIT</p>
      </div>
      <ul className="footer-links flex list-none gap-[50px] text-[#252525] text-[20px] cursor-pointer ">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-[20px] ">
        <div className={footer_icons_container}>
          <img src={insta_icon} alt="" />
        </div>
        <div className={footer_icons_container}>
          <img src={whtsApp_icon} alt="" />
        </div>
        <div className={footer_icons_container}>
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-copyright flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px] ">
          <hr className=" w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7] " />
          <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
