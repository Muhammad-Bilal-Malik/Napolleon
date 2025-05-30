import logoCoin from "../Assets/Images/logoCoin.svg";

import Button from "./Button";
import AllCards from "./AllCards";

const Trendings = () => {
  return (
    <>
      <div className=" lg:max-w-[1366px] mx-auto">
        <div className=" lg:w-[85.36%] lg:mx-auto ">
          <div className="flex justify-center items-center lg:mt-14">
            <span className="bg-gradient-to-r from-[#FFFFFF] to-[#00D094] h-0.5 w-10 lg:w-16"></span>
            <h1 className="font-bold text-[31px] px-0.5 text-[#162F42] lg:text-[40px]">
              Trending Topics
            </h1>
            <span className="bg-gradient-to-l from-[#FFFFFF] to-[#00D094] h-0.5 w-10 lg:w-16"></span>
          </div>
          {/* <div className=" mx-auto mt-9 mb-14  gap-5 flex justify-center lg:gap-9">
            <Button btntext="All" style="bg-[#00D094] text-white" />
            <Button btntext="Sports" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Technology" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Elections" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Crypto" style="bg-[#FFFFFF] text-[#4F4F4F]" />
            <Button btntext="Crypto" style="bg-[#FFFFFF] text-[#4F4F4F]" />
          </div> */}

          <AllCards />

          <button className="block mb-5 mx-auto rounded-sm w-64 py-1.5 text-white bg-[#00D094]">
            View More...
          </button>

          {/* <div className="flex justify-center items-center gap-1 py-5 mb-5">
            <span className="h-0.5 w-[44%] border-b border-dashed border-[#00D094]"></span>
            <img src={logoCoin} alt="" />
            <span className="h-0.5 w-[44%] border-b border-dashed border-[#00D094]"></span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Trendings;
