import React from "react";

export default function Futures() {
  return (
    <div className="w-full">
      <div className="container mx-auto mt-[30%]">
        <div className="relative">
          <div className="flex justify-center items-center">
            <button className="bg-[#D20000] text-2xl font-bold text-white px-12 py-3 rounded-full">
              Yes, I'm in
            </button>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-lg font-bold">Join For Free - No Charge! </p>
            <h1 className="text-4xl w-full lg:w-4/12 font-bold text-[#5BBB3D] mt-2">
              THE BEST PART IS THAT THERE'S
            </h1>
          </div>
          <div className="flex gap-1 ">
            <div className="flex flex-col text-center absolute top-[136%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-xl font-bold text-[#25C5D9] flex justify-center items-center">
                <img src="/futureimg/top.png" alt="" className="w-[35%]" />
              </div>
              <p className="text-lg font-bold w-full lg:w-6/12 text-center">
                SEO/PPC/Youtube
              </p>
            </div>
            <div className="absolute top-[220%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="flex flex-col gap-6">
                <span className="border-t border-[#D4D3D3]"></span>
                <h1 className="text-9xl font-bold text-[#5BBB3D]">NO</h1>
                <span className="border-b border-[#D4D3D3]"></span>
              </div>
            </div>
            {/* /// left futures add /// */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 absolute left-[37%] transform -translate-x-1/2 top-[149%]">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-xl font-bold text-[#25C5D9] flex justify-center items-center">
                <img src="/futureimg/left.png" alt="" className="w-[50%]" />
              </div>
                <p className="text-lg font-bold w-full text-center">
                MLM RECRUITING 
                </p>
                </div>
              
                <div className="flex gap-5 items-center justify-center mt-7">
                 
                  <span className="border-b w-full border-[#D4D3D3]"></span>
                  <span className="border-r h-[35px] border-[#D4D3D3]"></span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 absolute left-[37%] transform -translate-x-1/2 top-[250%]">
              <div className="text-xl font-bold text-[#25C5D9] flex justify-center items-center">
                <img src="/futureimg/left1.png" alt="" className="w-[50%]" />
              </div>
              <p className="text-lg font-bold w-full text-center">
              FACEBOOK ADS
                </p>
              </div>
            </div>
            {/* /// right futures add // */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 absolute left-[64%] transform -translate-x-1/2 top-[149%]">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-xl font-bold text-[#25C5D9] flex justify-center items-center">
                <img src="/futureimg/right.png" alt="" className="w-[50%]" />
              </div>
                <p className="text-lg font-bold w-full lg:w-6/12 text-center">
                AFFILIATE MARKETING
                </p>
                </div>
              
                <div className="flex gap-5 items-center justify-center">
                  <span className="border-l h-[35px] border-[#D4D3D3]"></span>
                  <span className="border-b w-full border-[#D4D3D3]"></span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 absolute left-[64%] transform -translate-x-1/2 top-[250%]">
              <div className="text-xl font-bold text-[#25C5D9] flex justify-center items-center">
                <img src="/futureimg/right1.png" alt="" className="w-[50%]" />
              </div>
              <p className="text-lg font-bold w-full lg:w-8/12 text-center">
                WORDPRESS OR BLOGGING
                </p>
              </div>
            </div>
            {/* /// bottom center futures add /// */}
            <div className="absolute top-[311%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-xl font-bold text-[#25C5D9] flex justify-center items-center">
                <img src="/futureimg/bottom.png" alt="" className="w-[30%]" />
              </div>
              <p className="text-lg font-bold w-full text-center">
                NO BUYING INVENTORY
              
                </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
