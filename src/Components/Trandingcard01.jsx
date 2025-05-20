import React from "react";

import name from "../Assets/Images/name.svg";
import logocircle from "../Assets/Images/logocircle.svg";
import quiz from "../Assets/Images/quiz.svg";
const TrandingCard = ({
  headingText,
  picture,
  btnclassName,
  btnText,
  arrow,
  arrowUp,
  btnbtn,
  cardButton1,
}) => {
  console.log(cardButton1);
  return (
    <div className="cared-parent h-auto mb-4">
      <div className="card w-xl bg-[#FFFFFF] h-auto px-6 py-5 rounded-xl shadow-md">
        <div className="flex items-center gap-3.5 mb-12">
          <img className="rounded-md" src={picture} alt="" />
          <p className="font-bold">{headingText}</p>
        </div>
        <div className="flex flex-wrap justify-between mb-4">
          {cardButton1?.map((btn, i) => (
            <button
              index={i}
              className={`flex justify-center gap-2 w-64 py-1.5 rounded-sm ${btn.style}`}
            >
              {btn.text}
              <img src={btn.icon} alt="" />
            </button>
          ))}
        </div>
        <div className="card-footer flex justify-between">
          <div className="footer-btn flex gap-2">
            <button className="w-20 bg-[#F7F7F7] rounded-sm text-[#4F4F4F] py-0.5">
              Sports
            </button>
            <button className="w-28 bg-[#F7F7F7] rounded-sm text-[#4F4F4F] py-0.5">
              Technology
            </button>
          </div>
          <div className="footer-info flex gap-8">
            <span className="flex items-center gap-1 text-[#B6B6B6]">
              <img src={name} alt="" /> <span>869</span>
            </span>
            <span className="flex items-center gap-1 text-[#B6B6B6]">
              <img src={logocircle} alt="" /> <span>195K</span>
            </span>
            <span className="flex items-center gap-1 text-[#B6B6B6]">
              <img src={quiz} alt="" /> <span>Quiz</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandingCard;
