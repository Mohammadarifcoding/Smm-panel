import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PerBlog from "./PerBlog";
import { Button } from "@material-tailwind/react";

const OurBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="bg-gradient-to-r pt-32 from-[#173f32]   to-[#161429] text-black lg:px-[5%] md:px-[5%] px-[2%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-around md:flex-row gap-4 flex-col items-center">
          <div>
            <h2 className="text-5xl font-bold text-white">Our Blog</h2>
            <button
              className="border-2 rounded-3xl
                   border-[#00FFA3] px-5 h-[60px]  hover:border-[#00FFA3] text-bold text-xl hover:bg-[#1bcf8d] bg-[#00FFA3] text-black mt-4  font-bold "
            >
              Signup Now
            </button>
          </div>
          <div className="max-w-[400px]">
            <img
              className="w-full"
              src="https://i.ibb.co/hWVvg71/vu6wqwt.png"
              alt=""
            />
          </div>
        </div>

       <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-10 lg:grid-cols-2 md:grid-cols-2 mx-auto">
               {
                data.map( value => <PerBlog key={value.id} data={value}></PerBlog>)
               }
       </div>
      </div>
    </div>
  );
};

export default OurBlog;
