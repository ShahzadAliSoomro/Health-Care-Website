import React from "react";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-10">
        <div className="relative">
          <div className="w-full ">
            <img
              src="/heroimg/heromain.png"
              alt="abc"
              className="w-full bg-[#5BBB3D] rounded-b-full"
            />
          </div>
          <div className="absolute top-[6%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/heroimg/logo.png" alt="" className="" />
          </div>
          <div className="flex justify-between w-full items-center absolute top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="">
              <img
                src="/heroimg/heroleft.png"
                alt="capsule"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="">
              <img
                src="/heroimg/heroright.png"
                alt="capsule"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
