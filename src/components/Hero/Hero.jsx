import React from "react";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-10">
        <div className="relative">
          <div className="w-full ">
            <img
              src="/heroimg/heromain.png"
              alt=""
              className="w-full bg-[#5BBB3D] rounded-b-full"
            />
          </div>
          <div className="absolute top-[6%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/heroimg/logo.png" alt="" className="" />
          </div>
          <div className="absolute top-[6%] right-0 transform -translate-x-1/2 -translate-y-1/2">
            <a href="/signup/SignUp" className="text-[#5BBB3D] bg-white font-bold py-3 px-10 rounded-full 
            shadow shadow-[#ffffff] hover:text-black hover:translate-y-1 text-2xl">Sign Up</a>
          </div>
          <div className="flex justify-between w-full items-center absolute top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full lg:w-4/12">
              <img
                src="/heroimg/heroleft.png"
                alt="capsule"
                className="w-full"
              />
            </div>
            <div className="flex flex-col text-center items-center gap-5 text-white w-full lg:w-6/12">
              <div>
                <h1 className="text-6xl font-bold">Join our</h1>
              </div>
              <div className="w-full ">
                <p className="text-3xl font-normal">
                  6-Day Health-Supplement Drop-Shipping Business Accelerator
                </p>
              </div>
              <div className="w-full">
                <p className="text-2xl font-semibold">
                  Discover how to build a 6 figure Supplement Drop-shipping
                  Business In 6 Days WITHOUT Paying for Facebook Ads Or Traffic!
                </p>
              </div>

              <h1 className="text-6xl font-bold">6 Days!</h1>
            </div>
            <div className="w-full lg:w-4/12">
              <img
                src="/heroimg/heroright.png"
                alt="capsule"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-10 absolute top-[50%] bottom-0">
            <div>
              <img
                src="/heroimg/hero.png"
                alt="capsule"
                className="w-full lg:w-8/12 mx-auto"
              />
            </div>

            <button
              className="text-[#5BBB3D] bg-white font-bold py-4 px-10 rounded-full 
            shadow shadow-[#ffffff] hover:text-black hover:translate-y-2 text-2xl"
            >
              Register Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
