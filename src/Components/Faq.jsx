import categoryLogo from "../Assets/Images/categoryLogo.svg";
import peoplelogo from "../Assets/Images/peoplelogo.svg";
import logoCoin from "../Assets/Images/logoCoin.svg";
import quiz from "../Assets/Images/quiz.svg";
import whitearrow from "../Assets/Images/whitearrow.svg";
import greenarrow from "../Assets/Images/greenarrow.svg";
const Faq = () => {
  return (
    <div className="max-w-[1366px] w-[86.31%] pb-5 mx-auto">
      <div className="font-bold text-[2.5rem] text-center py-[2.1rem]">
        <span>FAQ</span>
      </div>
      <div className="flex justify-between">
        <div className="left-side">
          <div className="flex gap-2.5">
            <img src={categoryLogo} alt="" />
            <span className="text-[23px]">Category</span>
          </div>
          <div className="flex items-center gap-3 mt-7 bg-white w-[277px] px-2 py-[15px] rounded-md text-[1.063rem] border-l-2 border-[#00D094]">
            <img src={peoplelogo} alt="" />
            <span>Login/register</span>
          </div>
          <div className="flex items-center gap-3 mt-7 bg-white w-[277px] px-2 py-[13.5px] rounded-md text-[1.063rem] border-l-2 border-[#00D094]">
            <img className="w-[39px] h-[42px]" src={logoCoin} alt="" />
            <span>Coins</span>
          </div>
          <div className="flex items-center gap-3 mt-7 bg-white w-[277px] px-2 py-[18.5px] rounded-md text-[1.063rem] border-l-2 border-[#00D094]">
            <img className="w-[39px] h-[32px]" src={quiz} alt="" />
            <span>Quiz</span>
          </div>
          <div className="flex items-center gap-3 mt-7 bg-white w-[277px] px-2 py-[15px] rounded-md text-[1.063rem] border-l-2 border-[#00D094]">
            <img src={peoplelogo} alt="" />
            <span>Login/register</span>
          </div>
          <div className="flex items-center gap-3 mt-7 bg-white w-[277px] px-2 py-[13.5px] rounded-md text-[1.063rem] border-l-2 border-[#00D094]">
            <img className="w-[39px] h-[42px]" src={logoCoin} alt="" />
            <span>Coins</span>
          </div>
          <div className="flex items-center gap-3 mt-7 bg-white w-[277px] px-2 py-[18.5px] rounded-md text-[1.063rem] border-l-2 border-[#00D094]">
            <img className="w-[39px] h-[32px]" src={quiz} alt="" />
            <span>Quiz</span>
          </div>
        </div>
        <div className="questions">
          <div className="bg-[#00D094] flex p-[29.5px] w-[868px] rounded-t-md justify-between">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis veritatis tempora minus praesentium.
            </p>
            <img className="text-white " src={whitearrow} alt="" />
          </div>
          <div className="answer">
            <p className="bg-white w-[868px] px-[30px] py-6 rounded-b-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam aperiam ea, minima molestiae perspiciatis delectus
              omnis, minus saepe consequuntur tempora impedit, corrupti sint
              inventore a? Reiciendis, porro. Adipisci, natus dolorem? Tenetur
              assumenda veniam nostrum eaque, incidunt et quibusdam temporibus
              iure quam nihil? At repellendus officiis perspiciatis incidunt eos
              tempore quis qui blanditiis vel culpa, ipsum ullam libero
              veritatis asperiores aperiam.
            </p>
          </div>
          <div className="mt-7 bg-white flex p-[29.5px] w-[868px] rounded-md border-l-2 border-[#00D094] justify-between">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis veritatis tempora minus praesentium.
            </p>
            <img className="text-white " src={greenarrow} alt="" />
          </div>
          <div className="mt-7 bg-white flex p-[29.5px] w-[868px] rounded-md border-l-2 border-[#00D094] justify-between">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis veritatis tempora minus praesentium.
            </p>
            <img className="text-white " src={greenarrow} alt="" />
          </div>
          <div className="mt-7 bg-white flex p-[29.5px] w-[868px] rounded-md border-l-2 border-[#00D094] justify-between">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis veritatis tempora minus praesentium.
            </p>
            <img className="text-white " src={greenarrow} alt="" />
          </div>
          <div className="mt-7 bg-white flex p-[29.5px] w-[868px] rounded-md border-l-2 border-[#00D094] justify-between">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis veritatis tempora minus praesentium.
            </p>
            <img className="text-white " src={greenarrow} alt="" />
          </div>
          <div className="mt-7 bg-white flex p-[29.5px] w-[868px] rounded-md border-l-2 border-[#00D094] justify-between">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis veritatis tempora minus praesentium.
            </p>
            <img className="text-white " src={greenarrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
