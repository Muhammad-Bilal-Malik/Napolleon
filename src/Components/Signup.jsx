import React from "react";
import { Link } from "react-router-dom";
import email from "../Assets/Images/email.svg";
import lock from "../Assets/Images/lock.svg";
import google from "../Assets/Images/google.svg";
import name from "../Assets/Images/name.svg";
const Signup = () => {
  return (
    <>
      <div className="max-w-[440px] lg:max-w-[1366px] ">
        <div className="w-[90%] lg:w-[35%] mx-auto bg-white rounded-xl shadow-2xl mt-12 ">
          <h1 className="font-bold text-[34px] text-center text-[#00D094] py-7">
            Sign Up
          </h1>
          <div className="w-[90%] mx-auto">
            <form action="" className="">
              <img className="inline-block" src={name} alt="" />
              <label className="inline-block ml-1" htmlFor="">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter Your Name..."
                className="w-full border border-[#E8E8E8] rounded-lg mt-2.5 mb-7 px-4 py-5"
              />

              <img className="inline-block" src={lock} alt="" />
              <label className="inline-block ml-1" htmlFor="">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password..."
                className="w-[100%] border border-[#E8E8E8] rounded-lg mt-2.5 mb-7 px-4 py-5"
              />

              <img className="inline-block" src={email} alt="" />
              <label className="inline-block ml-1" htmlFor="">
                Email
              </label>

              <input
                type="text"
                placeholder="Enter Your Email..."
                className="w-full border border-[#E8E8E8] rounded-lg mt-2.5 mb-7 px-4 py-5"
              />

              <button className="w-full rounded-lg bg-[#00D094] py-3 text-white">
                Create Account
              </button>
            </form>
            <div className="flex justify-center items-center text-[#B6B6B6] pt-7 pb-6">
              <span className="inline-block border-b border-[#B6B6B6] [@media(max-width:320px)]:w-[20%] w-[25%] xs:w-[100%] lg:w-[30%] "></span>
              <p className="inline-block px-1.5 lg:px-3">
                or sign Up with email
              </p>
              <span className="inline-block border-b border-[#B6B6B6] [@media(max-width:320px)]:w-[20%] w-[25%] xs:w-[100%] lg:w-[30%] "></span>
            </div>
            <div className="flex justify-center items-center gap-1.5 w-full rounded-lg border border-[#EBEBEB] py-3">
              <img src={google} alt="" /> <p>Sign up with Google</p>
            </div>
            <p className="text-center py-6">
              Already have an account?
              <Link to="/signin" className="text-[#00D094]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
