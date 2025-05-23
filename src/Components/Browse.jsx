import topic1 from "../Assets/Images/topic1.svg";
import topics2 from "../Assets/Images/topics2.svg";
import topics3 from "../Assets/Images/topics3.svg";
import search from "../Assets/Images/search.svg";
import star from "../Assets/Images/star.svg";
import Button from "./Button";
import AllCards from "./AllCards";
import Navbar from "./Navbar";

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className="mx-24 ">
        <div className="flex justify-between mb-11">
          <img src={topic1} alt="" />
          <img src={topics2} alt="" />
          <img src={topics3} alt="" />
        </div>
        <div className="flex justify-between items-center mb-9">
          <div className="w-80 h-9 border border-[#00D094] flex items-center rounded-md ">
            <img className="w-[15px] h-[15px] mx-[9px]" src={search} alt="" />
            <input
              className="focus:outline-none w-full"
              type="text"
              placeholder="Search By Markets..."
            />
          </div>
          <div className="flex gap-9">
            <Button
              btntext="Top"
              style="flex justify-center items-center gap-1 bg-[#00D094] text-white"
              staricon={star}
            />
            <Button btntext="Sports" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Technology" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Elections" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Crypto" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Crypto" style="bg-[#FFFFFF] text-[#4F4F4F]" />
          </div>
        </div>
        <AllCards />
      </div>
    </>
  );
};

export default Browse;
