import React from 'react';

const WorksCard = ({data}) => {
    const { id , title, description} = data
    return (
        <div className='border-2 bg-[#F6F7FB] text-black rounded-2xl border-[#4A16BF] p-5 '>

            <h2 className='flex-row flex items-center'><span className='text-[#4A16BF] lg:text-4xl text-3xl font-bold leading-[42px]'>{id}.</span> <span className='text-2xl font-bold leading-[28px]'>{title}</span></h2>
            <p className='mt-4 '>
                {description}
            </p>
        </div>
    );
};

export default WorksCard;