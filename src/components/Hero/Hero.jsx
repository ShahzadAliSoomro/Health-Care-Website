import React from "react";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto ">
        <div className="relative hidden md:block p-10">
          <div className="w-full ">
            <img
              src="/heroimg/heromain.png"
              alt=""
              className="w-full bg-[#5BBB3D] rounded-b-full"
            />
          </div>
          <div className="absolute 2xl:top-[6%] lg:top-[10%] sm:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/heroimg/logo.png" alt="" className="" />
          </div>
          <div className="absolute 2xl:top-[6%] lg:top-[10%] sm:top-[10%] right-0 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="/signup"
              className="text-[#5BBB3D] bg-white font-bold py-3 lg:px-10 px-3 rounded-full 
            shadow shadow-[#ffffff] hover:text-black hover:translate-y-1 text-2xl"
            >
              Sign Up
            </a>
          </div>
          <div className="flex justify-between w-full items-center absolute top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full lg:w-4/12">
              <img
                src="/heroimg/heroleft.png"
                alt="capsule"
                className="w-full"
              />
            </div>
            <div className="flex flex-col text-center items-center lg:gap-5 gap-0 text-white w-full lg:w-6/12">
              <div>
                <h1 className="lg:text-6xl text-2xl font-bold">Join our</h1>
              </div>
              <div className="w-full ">
                <p className="lg:text-3xl text-xl font-normal">
                  6-Day Health-Supplement Drop-Shipping Business Accelerator
                </p>
              </div>
              <div className="w-full">
                <p className="lg:text-2xl text-xl font-semibold">
                  Discover how to build a 6 figure Supplement Drop-shipping
                  Business In 6 Days WITHOUT Paying for Facebook Ads Or Traffic!
                </p>
              </div>

              <h1 className="lg:text-6xl text-xl font-bold">6 Days!</h1>
            </div>
            <div className="w-full lg:w-4/12">
              <img
                src="/heroimg/heroright.png"
                alt="capsule"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-10 absolute lg:top-[50%] left-2 lg:left-0 top-[53%] bottom-0">
            <div>
              <img
                src="/heroimg/hero.png"
                alt="capsule"
                className="w-full lg:w-8/12 sm:w-7/12 mx-auto"
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
        {/* /// mobile view /// */}
        <div className="md:hidden flex justify-between items-center px-5 bg-[#5BBB3D] w-[100%] p-3 fixed top-0 z-50">
          <div className="">
            <img
              src="/heroimg/logo.png"
              alt=""
              className="w-[180px] object-cover"
            />
          </div>
          <div className="">
            <a
              href="/signup"
              className="text-[#5BBB3D] bg-white font-bold py-2 px-5 rounded-full 
            shadow shadow-[#ffffff] hover:text-black hover:translate-y-1 text-2xl"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
