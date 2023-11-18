import React from "react";
import { FaFlagUsa } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-10 relative">
        <div className="w-full">
          <img
            src="/heroimg/heromain.png"
            alt=""
            className="w-full bg-[#5BBB3D] rounded-b-full"
          />
        </div>
        <div className="flex justify-between w-full items-center absolute top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* /// signup left image /// */}
          <div className="w-full lg:w-4/12">
            <img src="/signupimg/left1.png" alt="capsule" className="w-full" />
          </div>
          {/* /// signup form /// */}
          <div className="flex justify-center items-center">
            <div className="absolute w-60 h-60 rounded-xl  -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
            <div className="absolute w-48 h-48 rounded-xl  -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
              <div className="mb-10">
                <h1 className="text-5xl text-[#60BA38] font-bold text-center mb-4 cursor-pointer">
                  Sign Up
                </h1>
                {/* <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                  Create an account to enjoy all the services without any ads
                  for free!
                </p> */}
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="block text-sm py-3 px-4 rounded-lg w-full border font-semibold placeholder:text-black outline-none bg-[#E1E1E1]"
                />
                <input
                  type="text"
                  placeholder="Email Addres"
                  className="block text-sm py-3 px-4 rounded-lg w-full border font-semibold placeholder:text-black outline-none bg-[#E1E1E1]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="block text-sm py-3 px-4 rounded-lg w-full border font-semibold placeholder:text-black outline-none bg-[#E1E1E1]"
                />
                <div className="flex gap-2 items-center relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                    <select data-te-select-init className="bg-[#E1E1E1]">
                      <option value="1">
                        {" "}
                        <FaFlagUsa className="w-10 h-10 text-opacity-50 z-20" />
                      </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">
                        <FaFlagUsa className="w-10 h-10 text-opacity-50 z-20" />
                      </option>
                      <option value="6">Six</option>
                      <option value="7">Seven</option>
                      <option value="8">Eight</option>
                    </select>
                  </span>

                  <input
                    type="number"
                    placeholder="+1 (XXX) XXX-XXXX"
                    className="block text-sm py-3 px-20 rounded-lg font-semibold placeholder:text-black w-full border outline-none bg-[#E1E1E1]"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="mb-4 text-2xl font-semibold">
                  Join for free-No charge!
                </p>
                <button className="py-2 w-64 text-2xl font-semibold hover:translate-y-1 hover:text-black text-white bg-[#60BA38] rounded-full">
                  Join Us Now
                </button>
              </div>
            </div>
            <div className="w-40 h-40 absolute rounded-full top-0 right-12 hidden md:block"></div>
            <div className="w-20 h-40 absolute rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
          </div>
          {/* /// signup right side img /// */}
          <div className="w-full lg:w-4/12">
            <img src="/signupimg/right.png" alt="capsule" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
