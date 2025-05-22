import React from "react";
import NewsCard from "./NewsCard";
import NApic1 from "../Assets/Images/NApic1.svg";
import napic2 from "../Assets/Images/napic2.svg";
import napic3 from "../Assets/Images/napic3.svg";
import napic4 from "../Assets/Images/napic4.svg";

const NewsAndArticles = () => {
  return (
    <div className="article-wraper px-[99px] mb-5">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-[45px] text-[#162F42]">
          News And <span className="text-[#00D094]">Articles</span>
        </h1>
        <button className="w-28 bg-[#162F42] rounded-sm text-[#FFFFFF] py-1.5">
          Show all
        </button>
      </div>
      <div className="flex justify-between">
        <NewsCard
          picture={NApic1}
          topic="quiz"
          width="w-[249px]"
          textSize="text-[11px]"
        />
        <NewsCard
          picture={napic2}
          topic="Predictions"
          width="w-[249px]"
          textSize="text-[11px]"
        />
        <NewsCard
          picture={napic3}
          topic="Surveys"
          width="w-[249px]"
          textSize="text-[11px]"
        />
        <NewsCard
          picture={napic4}
          topic="Surveys"
          width="w-[249px]"
          textSize="text-[11px]"
        />
      </div>
    </div>
  );
};

export default NewsAndArticles;
