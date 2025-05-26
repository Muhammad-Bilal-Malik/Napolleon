import listarrow from "../Assets/Images/listarrow.svg";

const ArticlesCategoriesCard = () => {
  return (
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
  );
};

export default ArticlesCategoriesCard;
