import profileCircle from "../Assets/Images/profileCircle.svg";
import calendar1 from "../Assets/Images/calendar1.svg";
import replyicon from "../Assets/Images/replyicon.svg";
const CommentCard = () => {
  return (
    <div className="w-[870px] border border-[#C3C3C3] mt-10 mb-9 rounded-md">
      <div className="content-container w-[94.82%] mx-auto py-6">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <img src={profileCircle} alt="" />
            <span className=" text-2xl">Ali Aghaie</span>
          </div>
          <div className="flex gap-0.5">
            <span className="text-[#9C9C9C] pt-1 ">2024/10/8</span>
            <img src={calendar1} alt="" />
          </div>
        </div>
        <p className="py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </p>
        <div className="flex gap-1">
          <img src={replyicon} alt="" />
          <span className="font-bold">Reaply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
