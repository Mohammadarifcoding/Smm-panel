import React from "react";

const RegisterBanner = () => {
  return (
    <div className="bg-gradient-to-r pt-32 from-[#173f32]  text-black to-[#161429] lg:px-[5%] md:px-[5%] px-[2%]">
      <div className="max-w-[1400px] mx-auto">
        <div className=" bg-[url('https://cdn.mypanel.link/770smr/sybufhkut31j2dx5.webp')] rounded-xl md:bg-[url('https://cdn.mypanel.link/770smr/4c0niuiiim5srdrl.webp')] bg-cover bg-center  h-[650px] overflow-hidden">
          <div className="flex lg:flex-row flex-col justify-between lg:mt-[286px] md:mt[300px] sm:mt-[300px] mt-[200px] md:pl-10 p-5 items-center   text-black">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-[#212529] lg:text-start md:text-start text-center lg:text-5xl font-bold md:text-4xl text-3xl">
                Register Today
              </h1>
              <p className="mt-6 lg:text-start md:text-start text-center">
                The most reliable SMM Panel in the market is Smm Panel. Our
                panel offers premium services for incredibly low costs. To
                engage and forge a true bond between the brand and the consumer,
                we use a highly focused strategy. So to get started with
                Smm Panel as the cheapest SMM panel, contact us now!
              </p>
            </div>
            <div className="lg:pr-10">
              <div className="flex gap-4  lg:flex-col  md:flex-row sm:flex-row flex-col pb-10">
                <button className=" w-[170px]  px-5 h-[60px]   text-bold text-xl  bg-[#21213D] text-white mt-2  font-bold ">
                  Get Started
                </button>
                <button className="border-2 w-[170px] border-[#00FFA3] px-5 h-[60px]  hover:border-[#00FFA3] text-bold text-xl hover:bg-[#1bcf8d] bg-[#00FFA3] text-black mt-2  font-bold ">
                  See pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBanner;
