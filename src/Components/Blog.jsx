import listarrow from "../Assets/Images/listarrow.svg";
import papic1 from "../Assets/Images/papic1.svg";
import papic2 from "../Assets/Images/papic2.svg";
import papic3 from "../Assets/Images/papic3.svg";
import papic4 from "../Assets/Images/papic4.svg";
import papic5 from "../Assets/Images/papic5.svg";
import papic6 from "../Assets/Images/papic6.svg";
import NewsCard from "./NewsCard";
import NApic1 from "../Assets/Images/NApic1.svg";
import napic2 from "../Assets/Images/napic2.svg";
import napic3 from "../Assets/Images/napic3.svg";
import napic4 from "../Assets/Images/napic4.svg";
import previous from "../Assets/Images/previous.svg";
import next from "../Assets/Images/next.svg";
const Blog = () => {
  return (
    <div className="mx-[101px]">
      <h1 className="font-bold text-[40px] mx-auto text-center mb-7">Blog</h1>
      <div className="main-screen flex gap-5">
        <div className="left-side">
          <div className="articles-Categories w-[277px] bg-[#FFFFFF] border-t-[3px] shadow-md border-[#00D094] pl-[21px] rounded-lg">
            <h1 className="font-bold text-[#00D094] text-[15px] pt-[18px] pb-2.5">
              Categories of articles
            </h1>
            <span className="block border-b border-[#E1E1E1] mb-4 mr-6 "></span>
            <div className="flex flex-wrap gap-8 pb-2.5">
              <div className="column1">
                <ul>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>petrochemical</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>mineral</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>refinery</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>industries</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>petrochemical</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>mineral</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>refinery</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>industries</span>
                  </li>
                </ul>
              </div>
              <div className="column2">
                <ul>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>petrochemical</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>mineral</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>refinery</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>industries</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>petrochemical</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>mineral</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>refinery</span>
                  </li>
                  <li className="flex items-center gap-0.5 mb-4">
                    <img className="w-[7px] h-[7px]" src={listarrow} alt="" />{" "}
                    <span>industries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="popular-articles w-[277px] bg-[#FFFFFF] border-t-[3px] shadow-md border-[#00D094] pl-[21px] mt-3.5 pb-4 rounded-lg">
            <h1 className="font-bold text-[#00D094] text-[15px] pt-[18px] pb-3.5">
              popular articles
            </h1>
            <span className="block border-b border-[#E1E1E1] mb-6 mr-6 "></span>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={papic1} alt="" />
              <div className="">
                <span className="block -mb-[3px] text-[#00D094]">
                  2024/09/15
                </span>
                <p className="leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={papic6} alt="" />
              <div className="">
                <span className="block -mb-[3px] text-[#00D094]">
                  2024/09/15
                </span>
                <p className="leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={papic2} alt="" />
              <div className="">
                <span className="block -mb-[3px] text-[#00D094]">
                  2024/09/15
                </span>
                <p className="leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={papic3} alt="" />
              <div className="">
                <span className="block -mb-[3px] text-[#00D094]">
                  2024/09/15
                </span>
                <p className="leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={papic4} alt="" />
              <div className="">
                <span className="block -mb-[3px] text-[#00D094]">
                  2024/09/15
                </span>
                <p className="leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 ">
              <img src={papic5} alt="" />
              <div className="">
                <span className="block -mb-[3px] text-[#00D094]">
                  2024/09/15
                </span>
                <p className="leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="article-cards flex flex-wrap justify-center items-center gap-3 mb-16 relative">
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={NApic1}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic2}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic3}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic4}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={NApic1}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic4}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic3}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic2}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic3}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic4}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={NApic1}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic3}
          />
          <NewsCard
            width="w-[276px]"
            textSize="text-[11px]"
            topic="Predictions"
            picture={napic3}
          />
          <div className="pages mt-16 flex items-center justify-center gap-2 absolute -bottom-20">
            <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
              <img src={previous} alt="" />
            </span>
            <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
              1
            </span>
            <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
              2
            </span>
            <span className="bg-[#162F42] px-[18px] py-2.5 rounded-md text-[#FFFFFF]">
              3
            </span>
            <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
              4
            </span>
            <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
              <img src={next} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
