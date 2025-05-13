import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import coin from "../Assets/Images/coin.png";
import search from "../Assets/Images/search.svg";
const Navbar = () => {
  return (
    <>
      <div className="nav-container h-[94px] w-full border-t border-t-[#00D094] bg-[#00D094]/25 flex justify-around items-center text-[16px]">
        <div className="nav-btn w-[647px] h-[49px] flex gap-[126px] items-center">
          <img className="w-[69px] " src={Logo} alt="logo" />
          <ul className="flex gap-[40px]">
            <li className="text-[#00D094]">Home</li>
            <li>Browse</li>
            <li>About</li>
            <li>Blog</li>
            <li>faq</li>
          </ul>
        </div>
        <div className="right-section flex items-center gap-4">
          <div className="search-icon border border-[#00D094] h-[37px] w-[37px] rounded-sm text-[#00D094] flex justify-center items-center">
            <img src={search} alt="" />
          </div>
          <p className="text-[#00D094]">
            Ali Aghaie
            <select name="" id=""></select>
          </p>
          <span className="border-r h-[24px] border-[#CFCFCF]"></span>
          <div className="coin flex items-center gap-3">
            <img src={coin} alt="" className="h-[16px] w-[18px]" />
            <span>1320</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
