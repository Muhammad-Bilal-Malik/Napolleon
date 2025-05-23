import disc from "../Assets/Images/disc.svg";
import calendar from "../Assets/Images/calendar.svg";
import Button from "./Button";
const NewsCard = ({ picture, topic, width, textSize }) => {
  return (
    <div
      className={`${width} shadow-lg rounded-lg p-3 pb-7 mb-4 bg-[#FFFFFF] flex flex-col relative`}
    >
      <img className=" rounded-md mb-2.5" src={picture} alt="" />
      <h1 className="font-bold text-[13px] text-[#162F42]">
        Lorem ipsum dolor sit amet
      </h1>
      <p className={`${textSize} mb-2.5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="flex justify-between items-center bg-[#EBEBEB] text-[#3E3E3E] px-2 py-2 rounded-md text-[12px]">
        <div className="flex items-center gap-1 ">
          <img src={disc} alt="" />
          <h1 className={`${textSize} list-decimal`}>{topic}</h1>
        </div>

        <div className="flex gap-1">
          <span>2024/09/15</span> <img src={calendar} alt="" />
        </div>
      </div>
      <Button
        btntext="Read more"
        style="absolute bottom-2  bg-[#162F42] text-[#F8F8F8] text-[10px]  py-1.5 translate-x-[75%] translate-y-[75%]"
      />
    </div>
  );
};

export default NewsCard;
