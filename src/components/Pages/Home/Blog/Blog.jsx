import React from "react";
import BlogItem from "./BlogItem";
import { Link } from "react-router-dom";

const Blog = () => {
  const data = [
    {
      img: "https://cdn.mypanel.link/770smr/6axx5bfk18npbmz9.webp",
      title: "Choosing the Right SMM Panel Service: Factors to Consider",
      description:
        "Social networking is becoming a necessary component of our lives in the digital era. Businesses are increasingly depending on ....",
    },
    {
      img: "https://cdn.mypanel.link/770smr/tnk44anzza29wyhn.webp",
      title: "Social Media Marketing: What It Is and Why Your Business Needs It",
      description:
        "Social networking is becoming a necessary component of our lives in the digital era. Businesses are increasingly depending on ....",
    },
    {
      img: "https://cdn.mypanel.link/770smr/w99x57rpr2bnk6mj.webp",
      title: "Importance Of SMM Panel For Growing Social Media",
      description:
        "Social networking is becoming a necessary component of our lives in the digital era. Businesses are increasingly depending on ....",
    },
  ];
  return (
    <div className="bg-gradient-to-r pt-32 from-[#173f32]  text-black to-[#161429] lg:px-[5%] md:px-[5%] px-[2%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center ">
          <h2 className="lg:text-5xl  lg:leading-[65px] md:leading-[50px]  md:text-5xl text-[35px] font-bold text-white ">
            Read Our Blog
          </h2>
          <Link to={'/blog'}>
          <button className="border-2 rounded-xl border-[#00FFA3] px-5 min-h-[60px]  hover:border-[#00FFA3] text-bold text-xl hover:bg-[#1bcf8d] bg-[#00FFA3] text-black mt-4  font-bold ">
            View All Post
          </button>
          </Link>
         
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-10 ">
            {
                data.map(value => <BlogItem data={value}></BlogItem>)
            }

        </div>
      </div>
    </div>
  );
};

export default Blog;
