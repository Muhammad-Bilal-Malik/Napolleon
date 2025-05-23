import email from "../Assets/Images/email.svg";
import name from "../Assets/Images/name.svg";
import purposeIcon from "../Assets/Images/purposeIcon.svg";
import messageIcon from "../Assets/Images/messageIcon.svg";
import Button from "./Button";
import downArrow from "../Assets/Images/downArrow.svg";
const ContactUs = () => {
  return (
    <div className="contact-wraper mx-44">
      <h1 className="font-bold text-[40px] text-center py-8">
        Contact <span className="text-[#00D094]">Us</span>
      </h1>
      <div>
        <form action="">
          <div className="flex gap-[19px] mb-6">
            <div className="flex flex-col  gap-3">
              <div className="flex gap-0.5">
                <img className=" pr-1 " src={name} alt="" />
                <label htmlFor="">Full Name</label>
              </div>

              <input
                type="text"
                placeholder="Enter your full name"
                className="bg-white rounded-lg pl-5 py-4 w-80 focus:outline-none"
              />
            </div>
            <div className="flex flex-col  gap-3">
              <div className="flex gap-0.5">
                <img className="pr-1 " src={email} alt="" />
                <label htmlFor="">Email</label>
              </div>

              <input
                type="text"
                placeholder="Enter your Email"
                className="bg-white rounded-lg pl-5 py-4 w-80 focus:outline-none"
              />
            </div>
            <div className="flex flex-col  gap-3">
              <div className="flex gap-0.5">
                <img className="pr-1 h-[21px] " src={purposeIcon} alt="" />
                <label htmlFor="">Purpose</label>
              </div>
              <div className="flex">
                <select
                  className="bg-white rounded-lg pl-5 py-4 w-80 focus:outline-none text-[#B9B9B9] appearance-none"
                  name=""
                  id=""
                >
                  <option value="">Select an Option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <img
                  className="absolute right-[15%] top-[30%]"
                  src={downArrow}
                  alt=""
                />
              </div>
              {/* <input
                type="text"
                placeholder="Select one Option"
                className="bg-white rounded-lg pl-5 py-4 w-80 focus:outline-none"
                
              /> */}
            </div>
          </div>
          <div>
            <div className="flex gap-1 mb-3.5">
              <img className="h-6 w-6" src={messageIcon} alt="" />
              <label htmlFor="">Message</label>
            </div>
            <textarea
              className="w-full h-72 bg-white rounded-lg pl-6 pt-5 mb-7 focus:outline-none "
              placeholder="Enter your message here"
              type="text"
            />
          </div>
          <Button btntext="Send" style="bg-[#00D094] text-white" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
