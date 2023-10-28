export default function Statistics() {
  return (
    <div className="bg-gradient-to-r from-[#173f32]   to-[#161429] lg:px-[5%] md:px-[5%] p-[2%]  py-20 ">
      <div className="bg-[#222242] flex max-w-[1400px] mx-auto gap-[40px] lg:flex-row flex-col rounded-xl p-10">
        <div className=" w-full">
          <h1 className="text-white text-[48px] font-[700]">
            Statistics Of Geosmm
          </h1>
          <p className="text-white text-[20px] mt-14 max-w-[700px]">
            Geosmm clients exist all over the world and we have over 50 million
            active clients with over 5000 active services. Our clients work with
            us because of the quality we offer. Smm Panel offers the cheapest
            services in the world, and at the same time, our team is always
            working hard to maintain their quality so that you can get long term
            results.
          </p>

          <button className="text-black text-[20px] font-bold bg-[#00FFA3] mt-12">
            Get Started Now
          </button>
        </div>
        <div className="lg:w-[35%] gap-1 justify-between w-full flex lg:flex-col md:flex-row md:flex-wrap flex-col">
          <div className="bg-[#161429] flex gap-5 w-full p-5 rounded-lg">
            <img
              src="https://cdn.mypanel.link/770smr/xrgh987t2rp28cqf.webp"
              alt="purple bag"
            />
            <div className="text-white ">
              <p className="text-[16px] font-semibold">Prices Starting From</p>
              <p className="text-[22px] font-semibold">0.001$/1k</p>
            </div>
          </div>
          <div className="bg-[#161429] w-full flex gap-5 p-5 rounded-lg mt-5">
            <img src="https://cdn.mypanel.link/770smr/opqq84bcorp4cyeq.webp" />
            <div className="text-white">
              <p className="text-[16px]  font-semibold">Orders Completed</p>
              <p className="text-[22px] font-semibold">933457</p>
            </div>
          </div>
          <div className="bg-[#161429] w-full flex gap-5 p-5 rounded-lg mt-5">
            <img src="https://cdn.mypanel.link/770smr/eieuwouwkem5f1o5.png" />
            <div className="text-white ">
              <p className="text-[16px] font-semibold">Total Services</p>
              <p className="text-[22px] font-semibold">2601</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
