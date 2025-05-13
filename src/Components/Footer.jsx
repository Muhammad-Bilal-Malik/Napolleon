import React from "react";
import Logo from "../Assets/Images/Logo.png";
import whatsapp from "../Assets/Images/whatsapp.svg";
import linkedin from "../Assets/Images/linkedin.svg";
import instagram from "../Assets/Images/instagram.svg";
import facebook from "../Assets/Images/facebook.svg";
import arrowup from "../Assets/Images/arrowup.svg";
import coins from "../Assets/Images/coins.svg";
const Footer = () => {
  return (
    <>
      <div className="flex justify-around items-center bg-[#00D094] h-[99px] w-[65%] rounded-xl mx-auto mb-[-40px] relative z-10">
        <div className="flex justify-center items-center">
          <img className=" mt-[-69px] " src={coins} alt="" />
          <p className="text-white font-bold">
            Compete with your friends by
            <span className="text-[#162F42] "> trading </span> with play
            money... Or trade with sweepcash and win real cash
            <span className="text-[#162F42] "> prizes </span>!
          </p>
        </div>
        <button className="start-btn bg-[#162F42] text-white w-[121px] h-[34px] rounded-md mr-[55px]">
          Start Now!
        </button>
      </div>
      <div className="footer-container relative bg-white h-auto w-[90%] mx-auto z-0 rounded-xl">
        <div className="footer-elements   flex justify-around pt-[100px]">
          <div className="footer-info w-[400px]">
            <img src={Logo} alt="" />
            <p className="mt-3 leading-10 text-[#6C6C6C]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              ipsam harum earum deserunt, corporis omnis neque ....
            </p>
            <div className="socialmedia-icons flex gap-5 mt-14 text-[#6C6C6C]">
              <img src={whatsapp} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="info-links flex gap-[50px]">
            <div>
              <h1 className="font-bold text-[#162F42]">QUICK LINKS</h1>
              <span className="block border-b border-[#00D094] w-[80px] mt-3 mb-7"></span>
              <ul className="text-[#6C6C6C]">
                <li className="mb-6">Contact Us</li>
                <li className="mb-6">About Us</li>
                <li className="mb-6">faq</li>
                <li className="mb-6">blog</li>
              </ul>
            </div>
            <div>
              <h1 className=" font-bold text-[#162F42]">CATEGORY</h1>
              <span className="block border-b border-[#00D094] w-[60px] mt-3 mb-7"></span>
              <ul className="text-[#6C6C6C]">
                <li className="mb-6">Surveys</li>
                <li className="mb-6">Predictions</li>
                <li className="mb-6">quiz</li>
                <li className="mb-6">Surveys</li>
              </ul>
            </div>
            <div>
              <h1 className=" font-bold text-[#162F42]">PRIVACY</h1>
              <span className="block border-b border-[#00D094] w-[60px] mt-3 mb-7"></span>
              <ul className="text-[#6C6C6C]">
                <li className="mb-6">Rules</li>
                <li className="mb-6">Terms</li>
                <li className="mb-6">Rules</li>
                <li className="mb-6">Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center py-8 text-[#6C6C6C]">
          Napolleon Markets, Inc.
        </p>
      </div>
      <div className="scrollup h-[60px] w-[60px] bg-[#00D094] rounded-full absolute translate-x-100 -translate-y-[31px] flex justify-center items-center">
        <img className="h-6" src={arrowup} alt="" />
      </div>
    </>
  );
};

export default Footer;
