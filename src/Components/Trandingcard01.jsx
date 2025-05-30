import name from "../Assets/Images/name.svg";
import logoCoin from "../Assets/Images/logoCoin.svg";
import quiz from "../Assets/Images/quiz.svg";
const TrandingCard = ({ headingText, picture, cardButton1 }) => {
  console.log(cardButton1);
  return (
    <div className="card-parent w-[397px] lg:w-[573px] mb-4">
      <div className="card bg-[#FFFFFF] px-[18px] py-4 lg:px-5 lg:py-5 rounded-xl shadow-md">
        <div className="flex items-center gap-3.5 mb-10 lg:mb-12">
          <img
            className="rounded-md h-[37px] w-[37px] lg:h-[43px] lg:w-[43px]"
            src={picture}
            alt=""
          />
          <p className="font-bold text-[15px] lg:text-[20px]">{headingText}</p>
        </div>
        <div className="flex flex-wrap justify-between mb-5 lg:mb-4">
          {cardButton1?.map((btn, i) => (
            <button
              index={i}
              className={`flex justify-center gap-2 w-[176px] py-1 lg:w-64 lg:py-1.5 rounded-sm ${btn.style}`}
            >
              {btn.text}
              <img src={btn.icon} alt="" />
            </button>
          ))}
        </div>
        <div className="card-footer flex justify-between">
          <div className="footer-btn flex gap-2">
            <button className="w-[72px] [@media(max-width:440px)]:h-[18px] text-[10px] lg:text-[16px] lg:w-20 bg-[#F7F7F7] rounded-sm text-[#4F4F4F] lg:py-0.5">
              Sports
            </button>
            <button className="w-[72px] [@media(max-width:440px)]:h-[18px] text-[10px] lg:text-[16px] lg:w-28 bg-[#F7F7F7] rounded-sm text-[#4F4F4F] lg:py-0.5">
              Technology
            </button>
          </div>
          <div className="footer-info flex gap-2 lg:gap-8">
            <span className="flex items-center gap-1 text-[#B6B6B6]">
              <img
                className="h-[17px] w-[17px] lg:w-[20px] lg:h-[20px]"
                src={name}
                alt=""
              />{" "}
              <span className="[@media(max-width:440px)]:text-[11px]">869</span>
            </span>
            <span className="flex items-center lg:gap-1 text-[#B6B6B6]">
              <img
                className="h-[17px] w-[17px] lg:w-[20px] lg:h-[20px]"
                src={logoCoin}
                alt=""
              />{" "}
              <span className="[@media(max-width:440px)]:text-[11px]">
                195K
              </span>
            </span>
            <span className="flex items-center gap-1 text-[#B6B6B6]">
              <img
                className="h-[17px] w-[17px] lg:w-[20px] lg:h-[20px]"
                src={quiz}
                alt=""
              />{" "}
              <span className="[@media(max-width:440px)]:text-[11px]">
                Quiz
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandingCard;
