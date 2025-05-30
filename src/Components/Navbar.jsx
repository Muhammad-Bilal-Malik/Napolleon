import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
// import coin from "../Assets/Images/coin.png";
import search from "../Assets/Images/search.svg";
import Button from "./Button";
import menubars from "../Assets/Images/menubars.svg";
const Navbar = () => {
  return (
    <>
      <div className="max-w-[440px] lg:max-w-[1366px] mx-auto border-t border-t-[#00D094] bg-[#D5F6EE] lg:bg-[#00D094]/25 text-[16px] sticky z-10 ">
        <div className="w-[91%] py-[25px] md:w-[85.35%] mx-auto flex justify-between lg:py-[22px]">
          <div className="nav-btn flex gap-4 md:gap-[126px] items-center">
            <img className="sm:hidden" src={menubars} alt="" />
            <img className="w-[51px] md:w-[69px] " src={Logo} alt="logo" />
            <ul className="hidden md:flex gap-[40px]">
              <Link to="/">
                <li className="text-[#00D094]">Home</li>
              </Link>
              <Link to="/browse">
                <li>Browse</li>
              </Link>
              <Link to="/aboutus">
                <li>About</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
              <Link to="/faq">
                <li>faq</li>
              </Link>
            </ul>
          </div>
          <div className="right-section flex items-center lg:gap-4">
            <div className="search-icon border border-[#00D094] h-[27px] w-[27px] lg:h-[37px] lg:w-[37px] rounded-sm text-[#00D094] flex justify-center items-center">
              <img
                className="w-2.5 h-2.5 lg:w-[15px] lg:h-[15px]"
                src={search}
                alt=""
              />
            </div>
            {/* <p className="text-[#00D094]">
              Ali Aghaie
              <select name="" id=""></select>
            </p> */}
            {/* <span className="border-r h-[24px] border-[#CFCFCF]"></span>
            <div className="coin flex items-center gap-3">
              <img src={coin} alt="" className="h-[16px] w-[18px]" />
              <span>1320</span>
            </div> */}
            <Link to="/signin">
              <Button btntext="sign In" style="py-0.5 w-[81px]" />
            </Link>
            <Link to="/signup">
              <Button
                btntext="sign Up"
                style="py-0.5 lg:py-1.5 w-[81px] lg:w-[123px] bg-[#00D094] text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
