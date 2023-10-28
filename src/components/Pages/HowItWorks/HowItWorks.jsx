import React from "react";
import Process from "./Process/Process";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-r pt-32 from-[#173f32]   to-[#161429] text-black lg:px-[5%] md:px-[5%] px-[2%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-around md:flex-row gap-10 flex-col items-center">
          <div>
            <p className="md:text-3xl text-2xl text-[#00FFA3] font-bold">Easy to use</p>
            <h2 className="md:text-5xl text-4xl  lg:w-[448px] max-w-md md:mx-auto font-bold text-white">
              How it works Smm Panel
            </h2>
            <button
              className="border-2 rounded-3xl
                   border-[#00FFA3] px-5 max-h-[60px]  hover:border-[#00FFA3] text-bold md:text-xl text-lg hover:bg-[#1bcf8d] bg-[#00FFA3] text-black mt-4  font-bold "
            >
              Signup Now
            </button>
          </div>
          <div className="max-w-[400px]">
            <img
              className="w-full"
              src="https://i.imgur.com/vu6wqwt.png"
              alt=""
            />
          </div>
        </div>
        <Process></Process>
      </div>
    </div>
  );
};

export default HowItWorks;
