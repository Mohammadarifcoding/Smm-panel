import React, { useEffect, useState } from "react";

import Slider from "react-slick";
const Feautures = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    customPaging: (i) => (
      <div className="text-green-600 h-2 w-[20px] mr-2 rounded-xl bg-green-600">
        <span className="hidden">{i}</span>
      </div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <ul className="relative top-10">{dots}</ul>
      </div>
    ),
  };
  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000) {
      setSlidesToShow(3);
    } else if (screenWidth >= 800 ) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  return (
    <div className="bg-gradient-to-r pt-32 from-[#173f32]  text-black to-[#161429] lg:px-[5%] md:px-[5%] px-[2%]">
      <h1 className="lg:text-5xl  text-4xl text-center font-bold text-white mb-10">
        Our Features You Can Get
      </h1>
      <Slider {...settings}>
        <div className="card card-compact mx-auto max-w-[350px] min-h-[390px] shadow-xl bg-white text-center">
          <figure className="p-8">
            <img className="w-[100px] h-[100px]"
              src="https://cdn.mypanel.link/770smr/jl3w0wtng4wg2cof.webp"
              alt="pic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl  text-center mx-auto font-bold text-gray-900">
              24/7 Support Services
            </h2>
            <p className="text-gray-700 text-lg min-h-[150px] text-center">
              Smm Panel offers 100% real SMM activities and for this purpose
              our social media team drives millions of visitors to our clients
              posts or accounts
            </p>
            
          </div>
        </div>
        <div className="card card-compact mx-auto max-w-[350px] min-h-[390px]  shadow-xl bg-white">
          <figure className="p-8">
            <img className="w-[100px] h-[100px]"
              src="https://cdn.mypanel.link/770smr/h8yksdqlxdcxqsgt.webp"
              alt="pic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl  text-center mx-auto font-bold text-gray-900">
              24/7 Support Services
            </h2>
            <p className="text-gray-700 text-lg min-h-[150px] text-center">
              Smm Panel offers 100% real SMM activities and for this purpose
              our social media team drives millions of visitors to our clients
              posts or accounts
            </p>
            
          </div>
        </div>
        <div className="card card-compact mx-auto max-w-[350px] min-h-[390px]  shadow-xl bg-white">
          <figure className="p-8">
            <img className="w-[100px] h-[100px]"
              src="https://cdn.mypanel.link/770smr/4iqos4bhls84lsjg.webp"
              alt="pic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl  text-center mx-auto font-bold text-gray-900">
              24/7 Support Services
            </h2>
            <p className="text-gray-700 text-lg min-h-[150px] text-center">
              Smm Panel offers 100% real SMM activities and for this purpose
              our social media team drives millions of visitors to our clients
              posts or accounts
            </p>
            
          </div>
        </div>
        <div className="card card-compact mx-auto max-w-[350px] min-h-[390px]  shadow-xl bg-white">
          <figure className="p-8">
            <img className="w-[100px] h-[100px]"
              src="https://cdn.mypanel.link/770smr/jl3w0wtng4wg2cof.webp"
              alt="pic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl  text-center mx-auto font-bold text-gray-900">
              24/7 Support Services
            </h2>
            <p className="text-gray-700 text-lg min-h-[150px] text-center">
              Smm Panel offers 100% real SMM activities and for this purpose
              our social media team drives millions of visitors to our clients
              posts or accounts
            </p>
            
          </div>
        </div>
        <div className="card card-compact mx-auto max-w-[350px] min-h-[390px]  shadow-xl bg-white">
          <figure className="p-8">
            <img className="w-[100px] h-[100px]"
              src="https://cdn.mypanel.link/770smr/h8yksdqlxdcxqsgt.webp"
              alt="pic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl  text-center mx-auto font-bold text-gray-900">
              24/7 Support Services
            </h2>
            <p className="text-gray-700 text-lg min-h-[150px] text-center">
              Smm Panel offers 100% real SMM activities and for this purpose
              our social media team drives millions of visitors to our clients
              posts or accounts
            </p>
            
          </div>
        </div>
        <div className="card card-compact mx-auto max-w-[350px] min-h-[390px]  shadow-xl bg-white">
          <figure className="p-8">
            <img className="w-[100px] h-[100px]"
              src="https://cdn.mypanel.link/770smr/4iqos4bhls84lsjg.webp"
              alt="pic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl  text-center mx-auto font-bold text-gray-900">
              24/7 Support Services
            </h2>
            <p className="text-gray-700 text-lg min-h-[150px] text-center">
              Smm Panel offers 100% real SMM activities and for this purpose
              our social media team drives millions of visitors to our clients
              posts or accounts
            </p>
            
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Feautures;
