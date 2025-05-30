import { Link } from "react-router-dom";
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
      <div className="[@media(max-width:440px)]:w-auto [@media(max-width:440px)]:px-5 lg:max-w-[1366px] lg:mx-auto">
        <div className="lg:w-[85.36%] mx-auto">
          <div className="[@media(max-width:440px)]:w-auto translate-y-[10px] flex flex-col lg:flex-row justify-around items-center bg-[#00D094] w-[377px] h-[260px] lg:h-[99px] lg:w-[89.5%] rounded-xl mx-auto mb-[50px] lg:mb-[-40px] mt-[77px] lg:relative lg:z-10">
            {/* <div className="flex justify-center items-center"> */}
            <img className="mt-[-133px] lg:mt-[-69px] " src={coins} alt="" />
            <p className="text-white mt-[-110px] lg:mt-0 text-center lg:text-left font-bold text-[19px] w-[243px] lg:w-[467px]">
              Compete with your friends by
              <span className="text-[#162F42] "> trading </span> with play
              money... <br /> Or trade with sweepcash and win real cash
              <span className="text-[#162F42] "> prizes </span>!
            </p>
            {/* </div> */}
            <button className="[@media(max-width:440px)]:absolute -bottom-4 text-[13px] font-semibold  bg-[#162F42] text-white w-[121px] h-[34px] rounded-md lg:mr-[55px]">
              Start Now!
            </button>
          </div>
          <div className="footer-container pt-12  lg:pt-[109px] lg:relative bg-white lg:z-0 rounded-xl">
            <div className="footer-elements   flex flex-col lg:flex-row justify-evenly ">
              <div className="footer-info flex flex-col items-center lg:items-start gap-5 lg:gap-0 lg:flex-none lg:w-[400px]">
                <img
                  className="[@media(max-width:440px)]:w-[67px] [@media(max-width:440px)]:h-[49px]"
                  src={Logo}
                  alt=""
                />
                <p className="mt-3 text-center lg:text-left max-w-[355px] text-[#6C6C6C]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  ipsam harum earum deserunt, corporis omnis neque ....
                </p>
                <div className="socialmedia-icons flex gap-5 mb-[51px] lg:mb-0 mt-3 text-[#6C6C6C]">
                  <img src={whatsapp} alt="" />
                  <img src={linkedin} alt="" />
                  <img src={instagram} alt="" />
                  <img src={facebook} alt="" />
                </div>
              </div>
              <div className="info-links flex justify-around lg:justify-center lg:gap-36">
                <div>
                  <h1 className="font-bold text-[#162F42]">QUICK LINKS</h1>
                  <span className="block border-b border-[#00D094] w-[80px] pt-4 mb-4"></span>
                  <ul className="text-[#6C6C6C] text-[13px]">
                    <Link to="/contactus">
                      <li className="py-1">Contact Us</li>
                    </Link>
                    <li className="py-1">About Us</li>
                    <li className="py-1">faq</li>
                    <li className="py-1">blog</li>
                  </ul>
                </div>
                <div>
                  <h1 className=" font-bold text-[#162F42]">CATEGORY</h1>
                  <span className="block border-b border-[#00D094] w-[60px] pt-4 mb-4"></span>
                  <ul className="text-[#6C6C6C] text-[13px]">
                    <li className="py-1">Surveys</li>
                    <li className="py-1">Predictions</li>
                    <li className="py-1">quiz</li>
                    <li className="py-1">Surveys</li>
                  </ul>
                </div>
                <div>
                  <h1 className=" font-bold text-[#162F42]">PRIVACY</h1>
                  <span className="block border-b border-[#00D094] w-[60px] pt-4 mb-4"></span>
                  <ul className="text-[#6C6C6C] text-[13px]">
                    <li className="py-1">Rules</li>
                    <li className="py-1">Terms</li>
                    <li className="py-1">Rules</li>
                    <li className="py-1">Terms</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-center mt-10 text-[14px] pb-7 text-[#6C6C6C]">
              Napolleon Markets, Inc.
            </p>
          </div>
          <div className="scrollup h-[41px] w-[41px] bg-[#00D094] rounded-full absolute translate-x-[168px] lg:translate-x-[120px] -translate-y-6 flex justify-center items-center">
            <img src={arrowup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
