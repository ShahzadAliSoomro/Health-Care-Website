import React from "react";

export default function Feature() {
  return (
    <div className="w-full bg-[#F6F6F6]">
      <div className="container mx-auto p-5 lg:p-0 ">
        <div className="hidden lg:flex flex-col gap-5 relative ">
          <div className="flex flex-col text-center items-center">
            <p className="text-lg font-bold">How to become successful </p>
            <h1 className="text-6xl font-bold text-[#5BBB3D]">IN 5 STEPS</h1>
          </div>
          <div className="flex gap-1 ">
            <div className="flex flex-col items-center gap-2 absolute lg:top-[149%] top-[185%] 2xl:left-[7%] xl:left-[4%] 
            lg:left-[-1%] md:left-[-13%] sm:left-[-20%]">
              <div className="text-xl font-bold text-[#25C5D9]">Spy</div>
              <p className="lg:text-sm text-xs w-3/12 text-right lg:w-6/12 lg:mr-[44%] mr-[18%]">
                First we use insider information to find outwhat supplement
                funnels are hot.
              </p>
            </div>
            <div className="absolute top-[261%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <img src="/futureimg/future.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 absolute left-[84%] transform -translate-x-1/2 top-[149%]">
              <div className="text-xl font-bold text-[#920F3B]">
                Rinse & repeat
              </div>
              <p className="text-sm">
                Then we rinse and repeat! You can do this again and again and
                build as many NutraFunnels as you want! it's just that SIMPLE!
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 absolute top-[370%] left-[-10%]">
              <div className="text-xl font-bold text-[#FFAC1E] ">
                Funnel hack
              </div>
              <p className="text-sm w-full text-right lg:w-5/12 mr-[28%]">
                Then we rinse and repeat! You can do this again and again and
                build as many NutraFunnels as you want! it's just that SIMPLE!
              </p>
            </div>
            <div className="flex flex-col gap-2 absolute left-[78%] transform -translate-x-1/2 top-[366%]">
              <div className="text-xl font-bold text-[#E64857]">
                Traffic outsource
              </div>
              <p className="text-sm w-full lg:w-7/12">
                Then we outsource all of the traffic-running to an affiliate
                network and PROFIT!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-7 gap-2 absolute top-[490%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-xl font-bold text-[#25C5D9]">Outsource</div>
              <p className="text-sm w-full lg:w-7/12 text-center">
                We find an offshore outsourcer to put the whole funnel together
                for us.
              </p>
            </div>
          </div>
        </div>
        {/* /// mobile view /// */}
        <div className="lg:hidden flex flex-col gap-5">
        <div className="flex flex-col items-center">
            <p className="text-lg font-bold">How to become successful </p>
            <h1 className="text-6xl font-bold text-[#5BBB3D]">IN 5 STEPS</h1>
          </div>
         <div>
         <img src="/futureimg/future.png" alt="" />
         </div>
         <div className="flex gap-2 pt-5">
              <div className="text-xl font-bold text-[#25C5D9]">Spy</div>
              <p className="text-sm text-left">
                First we use insider information to find outwhat supplement
                funnels are hot.
              </p>
            </div>
            <div className="flex gap-2">
            <div className="text-lg font-bold text-[#920F3B]">
                Rinse & repeat
              </div>             
               <p className="text-sm text-left">
              Then we rinse and repeat! You can do this again and again and
                build as many NutraFunnels as you want! it's just that SIMPLE!
              </p>
            </div>
            <div className="flex gap-2">
            <div className="text-xl font-bold text-[#FFAC1E] ">
                Funnel hack
              </div>           
               <p className="text-sm text-left">
               Then we rinse and repeat! You can do this again and again and
                build as many NutraFunnels as you want! it's just that SIMPLE!
              </p>
            </div>
            <div className="flex gap-2">
            <div className="text-xl font-bold text-[#E64857]">
                Traffic outsource
              </div>        
               <p className="text-sm text-left">
               Then we outsource all of the traffic-running to an affiliate
                network and PROFIT!
              </p>
            </div>
            <div className="flex gap-2">
            <div className="text-xl font-bold text-[#25C5D9]">Outsource</div>
      
               <p className="text-sm text-left">
               We find an offshore outsourcer to put the whole funnel together
                for us.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
