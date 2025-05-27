import BGRectanggle from "../Assets/Images/BGRectangle.svg";
import heroimg from "../Assets/Images/heroimg.svg";
const Hero = () => {
  return (
    <div className="hero w-full">
      <img
        className="w-screen  absolute -top-5 "
        src={BGRectanggle}
        alt="heroBackgroundImage"
      />

      <div className=" relative flex justify-evenly items-center  ">
        <div className="w-[474px] space-y-2 mb-36 tracking-tighter">
          <p className="font-bold text-[40px] text-[#162F42] ">
            Trade On Politics & More
          </p>
          <p className="text-[#4F4F4F]">
            The largest social prediction market.
          </p>
          <p className="text-[#4F4F4F]">
            Get real-time odds on politics, tech, and sports. Win cash prizes
            for your predictions!
          </p>
          <button className="w-[100%] bg-[#00D094] text-white rounded-md py-2.5">
            Start predicting
          </button>
        </div>
        <img className="h-[415px]" src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
