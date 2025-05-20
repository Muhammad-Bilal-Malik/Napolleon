import React from "react";
import disc from "../Assets/Images/disc.svg";
import calendar from "../Assets/Images/calendar.svg";
const NewsCard = ({ picture, topic }) => {
  return (
    <div className="w-[300px] shadow-lg rounded-lg p-3.5 pb-9 mb-40 bg-[#FFFFFF] flex flex-col relative">
      <img className=" rounded-md mb-2.5" src={picture} alt="" />
      <h1 className="font-bold text-[13px] text-[#162F42]">
        Lorem ipsum dolor sit amet
      </h1>
      <p className="mb-2.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="flex justify-between items-center bg-[#EBEBEB] text-[#3E3E3E] px-2 py-2 rounded-md text-[12px]">
        <div className="flex items-center gap-1 ">
          <img src={disc} alt="" />
          <h1 className="list-decimal">{topic}</h1>
        </div>

        <div className="flex gap-1">
          <span>2024/09/15</span> <img src={calendar} alt="" />
        </div>
      </div>
      <button className="absolute bottom-2 w-24 bg-[#162F42] rounded-sm text-[#F8F8F8]  py-0.5 translate-x-[80%] translate-y-[75%]">
        Read more
      </button>
    </div>
  );
};

export default NewsCard;
