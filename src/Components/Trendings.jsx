import React from "react";
// import Trandingcard01 from "./Trandingcard01";

const Trendings = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-14">
        <span className="bg-gradient-to-r from-[#FFFFFF] to-[#00D094] h-0.5 w-16"></span>
        <h1 className="font-bold px-0.5 text-[#162F42] text-[40px]">
          Trending Topics
        </h1>
        <span className="bg-gradient-to-l from-[#FFFFFF] to-[#00D094] h-0.5 w-16"></span>
      </div>
      <div className="mt-9 mb-14 flex justify-center gap-9">
        <button className="bg-[#00D094] text-white w-24 p-1 rounded-sm">
          All
        </button>
        <button className="bg-[#FFFFFF] text-[#4F4F4F] w-24 p-1 rounded-sm">
          Sports
        </button>
        <button className="bg-[#FFFFFF] text-[#4F4F4F] w-24 p-1 rounded-sm">
          Technology
        </button>
        <button className="bg-[#FFFFFF] text-[#4F4F4F] w-24 p-1 rounded-sm">
          Elections
        </button>
        <button className="bg-[#FFFFFF] text-[#4F4F4F] w-24 p-1 rounded-sm">
          Crypto
        </button>
        <button className="bg-[#FFFFFF] text-[#4F4F4F] w-24 p-1 rounded-sm">
          Crypto
        </button>
      </div>
      <div>{/* <Trandingcard01 /> */}</div>
    </>
  );
};

export default Trendings;
