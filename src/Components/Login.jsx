import React from "react";
import { Link } from "react-router-dom";
import email from "../Assets/Images/email.svg";
import lock from "../Assets/Images/lock.svg";
import google from "../Assets/Images/google.svg";
const Login = () => {
  return (
    <>
      <div className="card w-[478px] h-auto bg-white rounded-xl shadow-2xl mx-auto mt-12 mb-24">
        <h1 className="font-bold text-[34px] text-center text-[#00D094] py-7">
          Login
        </h1>
        <form action="" className="mx-6">
          <img className="inline-block" src={email} alt="" />
          <label className="inline-block ml-1" htmlFor="">
            Email
          </label>

          <input
            type="text"
            placeholder="Enter Your Email..."
            className="w-[100%] border border-[#E8E8E8] rounded-lg mt-2.5 mb-7 px-4 py-5"
          />

          <img className="inline-block" src={lock} alt="" />
          <label className="inline-block ml-1" htmlFor="">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            className="w-[100%] border border-[#E8E8E8] rounded-lg mt-2.5 px-4 py-5"
          />
        </form>
        <p className="mx-6 text-end my-2">Forget Password?</p>
        <button className="mx-6 w-[430px] rounded-lg bg-[#00D094] py-3 text-white">
          Login
        </button>
        <div className="flex justify-center items-center text-[#B6B6B6] pt-7 pb-6">
          <span className="inline-block border-b border-[#B6B6B6] w-[143px] "></span>
          <p className="inline-block">or sign in with email </p>
          <span className="inline-block border-b border-[#B6B6B6] w-[143px] "></span>
        </div>
        <div className="flex justify-center items-center gap-1.5 mx-6 w-[430px] rounded-lg border border-[#EBEBEB] py-3">
          <img src={google} alt="" /> <p>Sign in with Google</p>
        </div>
        <p className="text-center py-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#00D094]">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
