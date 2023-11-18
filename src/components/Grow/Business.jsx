import React from "react";

export default function Business() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-10">
        <div className="flex flex-col gap-5 justify-center items-center">
          {/* /// THIS IS FOR YOU IF YOU /// */}
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
          {/* /// are you looking transition away from your primary income source /// */}
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
          {/* /// if you currently are interested /// */}
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
          {/* /// Want expert, credible sound guidance to filter all the other noisy marketers telling you what to do /// */}
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center px-10">
            <div className="lg:ml-[16%] ml-0 w-full">
              <img
                src="/growimg/grow4.png"
                alt=""
                className="w-full lg:w-[80%] "
              />
            </div>
            <div className="flex flex-col lg:mr-[16%] mr-0 ">
              <h1 className="text-5xl font-bold ">IF YOU</h1>
              <p className="text-xl font-semibold w-full lg:w-8/12">
                Want expert, credible sound{" "}
                <span className="text-[#5BBB3D] font-bold">guidance</span> to
                filter all the other
                <span className="text-[#0B9443] font-bold">
                  "noisy marketers"
                </span>{" "}
                telling you what to do.
              </p>
            </div>
          </div>
          {/* /// Are ready to make real life-changing progress /// */}
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
          {/* /// Ready to jump into the NutraFunnels Accelerator /// */}

          <div className="flex flex-col md:flex-row w-full items-center ">
            <div className="flex flex-col text-center ml-[10%]">
              <p className="text-xl font-bold">READY TO JUMP INTO THE</p>
              <h1 className="lg:text-5xl text-4xl font-bold text-[#5BBB3D]">
                NUTRAFUNNELS ACCELERATOR?
              </h1>
              <div className="flex flex-col justify-center items-center text-center mt-5">
                <div className="flex justify-center items-center">
                  <button className="bg-[#D20000] text-2xl font-bold text-white px-12 py-3 rounded-full">
                    Yes, I'm in
                  </button>
                </div>
                <p className="text-lg font-bold">Join For Free - No Charge! </p>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <img
                  src="/growimg/grow6.png"
                  alt=""
                  className="w-[100%] h-[100%]"
                />
              </div>
            </div>
          </div>
          {/* /// footer /// */}
          <p className="lg:text-xl text-sm font-normal">
            Copyrights © 2022 NutraFunnels. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
