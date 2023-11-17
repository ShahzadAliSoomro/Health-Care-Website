import React from "react";

export default function Business() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-10">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col text-center items-center">
            <p className="text-xl font-bold">THIS IS FOR</p>
            <h1 className="text-5xl font-bold text-[#5BBB3D]">YOU IF YOU</h1>
            <p className="text-xl font-semibold w-full lg:w-10/12">
              Have already tried to build an online business before and{" "}
              <span className="text-[#5BBB3D] font-bold"> failed.</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/growimg/grow1.png" alt="" />
          </div>
          <div className="flex flex-col text-center items-center gap-5">
            <p className="text-xl font-semibold w-full lg:w-7/12">
              Are looking to transition away from a J-O-B and{" "}
              <span className="text-[#0B9443] font-bold"> replace</span> your
              primary income source
            </p>
            <div className="flex justify-center items-center">
              <img src="/growimg/grow2.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col text-center items-center gap-5">
            <p className="text-2xl font-bold text-[#0B9443] w-full lg:w-3/12">
              IF YOU CURRENTLY ARE INTERESTED
            </p>

            <p className="text-xl font-semibold w-full lg:w-6/12">
              in starting a 6 figure online supplement{" "}
              <span className="text-[#0B9443] font-bold">
                drop-shipping business,
              </span>{" "}
              automating it and working from the comfort of your own home
              part-time.
            </p>
            <div className="flex justify-center items-center">
              <img src="/growimg/grow3.png" alt="" />
            </div>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <div className="mx-auto">
              <img src="/growimg/grow4.png" alt="" className="" />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-5xl font-bold ">IF YOU</h1>
              <p className="text-xl font-semibold w-full lg:w-4/12">
                Want expert, credible sound <span className="text-[#5BBB3D] font-bold">guidance</span>  to filter all the other
               <span className="text-[#0B9443] font-bold">"noisy marketers"</span>  telling you what to do.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-bold ">IF YOU</h1>

            <p className="text-xl font-semibold w-full">
            Are ready to make real life-changing progress 

            </p>
            <p className="text-2xl font-bold">in just 6-days!</p>
            </div>
        
            <div>
              <img src="/growimg/grow5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
