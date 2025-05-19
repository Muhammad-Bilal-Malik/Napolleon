import React from "react";
import card1 from "../Assets/Images/card1.svg";
import pic02 from "../Assets/Images/pic02.svg";
import uparrowgreen from "../Assets/Images/uparrowgreen.svg";
import uparrowred from "../Assets/Images/uparrowred.svg";
import logocircle from "../Assets/Images/logocircle.svg";
import TrandingCard from "./Trandingcard01";

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
      <div className="flex flex-wrap justify-evenly  mb-8">
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Buy Yes",
              style: "bg-[#00D094]/30 rounded-sm text-[#00D094]",
              icon: uparrowgreen,
            },
            {
              id: 2,
              text: "Buy Yes",
              style: "bg-[#FF0000]/28 text-[#D1141E]/74",
              icon: uparrowred,
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={card1}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Christchurch",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Linacre",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Balliol",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
            {
              id: 1,
              text: "Brasenose",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={card1}
        />

        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Christchurch",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Linacre",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Balliol",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
            {
              id: 1,
              text: "Brasenose",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={card1}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Buy Yes",
              style: "bg-[#00D094]/30 rounded-sm text-[#00D094]",
              icon: uparrowgreen,
            },
            {
              id: 2,
              text: "Buy Yes",
              style: "bg-[#FF0000]/28 text-[#D1141E]/74",
              icon: uparrowred,
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={card1}
        />
      </div>

      <button className="block mb-5 mx-auto rounded-sm w-64 py-1.5 text-white bg-[#00D094]">
        View More...
      </button>

      <div className="flex justify-center items-center gap-1 py-5 mb-5">
        <span className="h-0.5 w-[44%] border-b border-dashed border-[#00D094]"></span>
        <img src={logocircle} alt="" />
        <span className="h-0.5 w-[44%] border-b border-dashed border-[#00D094]"></span>
      </div>
    </>
  );
};

export default Trendings;
