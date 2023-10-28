import React from 'react';

const PerBlog = ({data}) => {
  const {image,title, description} = data
    return (
        <div className="card max-w-[380px] mx-auto bg-[#222242] p-3 shadow-2xl rounded-lg shadow-green-500/50 border-2 border-green-500">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body px-0 py-2">
          <h2 className="card-title text-xl font-bold text-white">{title}</h2>
          <p className='text-white'>{description}</p>
          <div className="card-actions justify-start">
          <button className="border-2 border-[#00FFA3] px-5 h-[50px]  hover:border-[#00FFA3] text-bold  hover:bg-[#1bcf8d] bg-[#00FFA3] text-black mt-4  font-bold ">
              Read More{' > >'}
              </button>
          </div>
        </div>
      </div>
    );
};

export default PerBlog;