import React from "react";
import Business from "../Grow/Business";

export default function Accelerator() {
  return (
    <div className="w-full">
      <div className="container mx-auto 2xl:mt-[25%] xl:mt-[37%] lg:mt-[43%] mt-[12%]">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col text-center items-center">
            <p className="text-xl font-bold">THE 6 DAY ACCELERATOR</p>
            <h1 className="lg:text-5xl text-3xl font-bold text-[#5BBB3D]">
              IS COMPLIMENTARY!
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <img src="/futureimg/accelerator.png" alt="" className="" />
          </div>
          <div className="flex flex-col text-center items-center">
            <p className="text-xl font-bold">IN THE 6-DAY</p>
            <h1 className="text-5xl font-bold text-[#5BBB3D]">ACCELERATOR</h1>
            <p className="text-sm font-semibold w-full lg:w-4/12">
              you'll get the support of hundreds of other people just like you
              that are looking to build profitable passive income streams
              online! These people will help encourage you every step of your
              online business journey.
            </p>
          </div>
          <div>
            <img src="/futureimg/buildCom.png" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex justify-center items-center">
              <button className="bg-[#D20000] text-2xl font-bold text-white px-12 py-3 rounded-full">
                Yes, I'm in
              </button>
            </div>
            <p className="text-lg font-bold">Join For Free - No Charge! </p>
          </div>
        </div>
      </div>
      <Business />
    </div>
  );
}
