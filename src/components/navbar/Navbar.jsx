import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState("shop");
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Main Title */}
        <div className="flex items-center">
          <img src={logo} alt="Shoppit Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-xl font-bold text-gray-800">SHOPIT</h1>
        </div>

        {/* Mobile Menu Icon - Hidden on larger screens */}
        <div className="lg:hidden">
          {/* Add your mobile menu icon here */}Hello
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-6 cursor-pointer">
          <Link to={"/"}>
            <li
              onClick={() => setIsClicked("shop")}
              className={`text-gray-800 hover:text-indigo-500 ${
                isClicked === "shop" ? "text-red-800" : ""
              } `}
            >
              Shop
            </li>
          </Link>
          <Link to={"/men"}>
            <li
              onClick={() => setIsClicked("men")}
              className={`text-gray-800 hover:text-indigo-500 ${
                isClicked === "men" ? "text-red-800" : ""
              } `}
            >
              {/* <Link to={"/men"}></Link> */}
              Men
            </li>
          </Link>
          <Link to={"/women"}>
            <li
              onClick={() => setIsClicked("women")}
              className={`text-gray-800 hover:text-indigo-500 ${
                isClicked === "women" ? "text-red-800" : ""
              } `}
            >
              Women
            </li>
          </Link>
          <Link to={"/kids"}>
            <li
              onClick={() => setIsClicked("kids")}
              className={`text-gray-800 hover:text-indigo-500 ${
                isClicked === "kids" ? "text-red-800" : ""
              } `}
            >
              Kids
            </li>
          </Link>
        </ul>

        {/* User Authentication and Cart Icons */}
        <Link to={"/login"}>
          <div
            onClick={() => setIsClicked("login")}
            className=" cursor-pointer flex items-center space-x-4 text-gray-800 hover:text-indigo-500"
          >
            {/* <Link to="/login"> */}
            Login
            {/* </Link> */}
          </div>
        </Link>
        <Link to={"/cart"}>
          <span
            onClick={() => setIsClicked("cart")}
            className="relative cursor-pointer"
          >
            <img className="w-6 h-6" src={cart_icon} alt="Cart" />
            <div className="absolute top-[-12px] right-[-8px] w-[20px] h-[20px] flex justify-center items-center rounded-[11px] text-sm bg-red-600 text-white">
              0
            </div>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// width: 22px;
// height: 22px;
// display: flex;
// justify-content: center;
// align-items: center;
// margin-top: -35px;
// margin- left : -55px;
// border-radius: 11px;
// font-size: 14px;
// background: red;
// color:white;
