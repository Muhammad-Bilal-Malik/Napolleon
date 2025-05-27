import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import coin from "../Assets/Images/coin.png";
import search from "../Assets/Images/search.svg";
const Navbar = () => {
  return (
    <>
      <div className="max-w-[1366px] border-t border-t-[#00D094] bg-[#00D094]/25 text-[16px] sticky z-10 ">
        <div className="w-[85.35%] mx-auto flex justify-between py-[22px]">
          <div className="nav-btn flex gap-[126px] items-center">
            <img className="w-[69px] " src={Logo} alt="logo" />
            <ul className="flex gap-[40px]">
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
      </div>
    </>
  );
};

export default Navbar;
