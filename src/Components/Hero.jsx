import BGRectanggle from "../Assets/Images/BGRectangle.svg";
import heroimg from "../Assets/Images/heroimg.svg";
const Hero = () => {
  return (
    <div className="max-w-[440px] lg:max-w-[1366px] mx-auto">
      <img
        className="hidden lg:block  absolute -top-5 "
        src={BGRectanggle}
        alt="heroBackgroundImage"
      />

      <div className="relative flex justify-evenly items-center [@media(max-width:440px)]:bg-[#D5F6EE] rounded-b-[100px]  ">
        <div className="w-[91%] lg:w-[474px] space-y-2 [@media(max-width:440px)]:py-10 lg:mb-36 tracking-tighter">
          <div className="text-center lg:text-left">
            <p className=" font-bold text-[31px]  lg:text-[40px] text-[#162F42] ">
              Trade On Politics & More
            </p>
            <p className="text-[#4F4F4F]">
              The largest social prediction market.
            </p>
            <p className="text-[#4F4F4F]">
              Get real-time odds on politics, tech, and sports. Win cash prizes
              for your predictions!
            </p>
          </div>
          <button className="hidden lg:block w-[100%] bg-[#00D094] text-white rounded-md py-2.5">
            Start predicting
          </button>
        </div>
        <img className="hidden lg:block h-[415px]" src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
