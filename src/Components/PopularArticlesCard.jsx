import papic1 from "../Assets/Images/papic1.svg";
import papic2 from "../Assets/Images/papic2.svg";
import papic3 from "../Assets/Images/papic3.svg";
import papic4 from "../Assets/Images/papic4.svg";
import papic5 from "../Assets/Images/papic5.svg";
import papic6 from "../Assets/Images/papic6.svg";

const PopularArticlesCard = () => {
  return (
    <div className="popular-articles w-[277px] bg-[#FFFFFF] border-t-[3px] shadow-md border-[#00D094] pl-[21px] mt-3.5 pb-4 rounded-lg">
      <h1 className="font-bold text-[#00D094] text-[15px] pt-[18px] pb-3.5">
        popular articles
      </h1>
      <span className="block border-b border-[#E1E1E1] mb-6 mr-6 "></span>
      <div className="flex items-center gap-2.5 mb-5">
        <img src={papic1} alt="" />
        <div className="">
          <span className="block -mb-[3px] text-[#00D094]">2024/09/15</span>
          <p className="leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 mb-5">
        <img src={papic6} alt="" />
        <div className="">
          <span className="block -mb-[3px] text-[#00D094]">2024/09/15</span>
          <p className="leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 mb-5">
        <img src={papic2} alt="" />
        <div className="">
          <span className="block -mb-[3px] text-[#00D094]">2024/09/15</span>
          <p className="leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 mb-5">
        <img src={papic3} alt="" />
        <div className="">
          <span className="block -mb-[3px] text-[#00D094]">2024/09/15</span>
          <p className="leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 mb-5">
        <img src={papic4} alt="" />
        <div className="">
          <span className="block -mb-[3px] text-[#00D094]">2024/09/15</span>
          <p className="leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 ">
        <img src={papic5} alt="" />
        <div className="">
          <span className="block -mb-[3px] text-[#00D094]">2024/09/15</span>
          <p className="leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularArticlesCard;
