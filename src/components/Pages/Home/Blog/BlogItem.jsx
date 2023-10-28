import React from "react";

const BlogItem = ({data}) => {
    const { img, title, description} = data
  return (
    <div className="w-full max-w-[540px]    mx-auto">
      <figure className="w-full rounded-t-xl">
        <img
          className="w-full rounded-t-xl"
          src={img}
          alt=""
          
        />
      </figure>
      <div className="w-full p-8 min-h-[310px] bg-white rounded-b-xl flex flex-col">
        <h2 className="text-[28px] justify-start text-[#212529] leading-10 font-bold">
          {title}
        </h2>
        <p className="leading-6 text-[18px] text-[#212529] pt-4 ">
        {description}
        </p>
        <div>
        <button className="border-2 border-[#00FFA3] px-5 h-[60px] rounded-xl hover:border-[#00FFA3] text-bold text-xl hover:bg-[#1bcf8d] bg-[#00FFA3] text-black mt-4  font-bold ">
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
