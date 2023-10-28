import React from 'react';

import { useState } from 'react';
const Accordien = ({data}) => {
   

        return(
            <div className="py-5 px-5 mb-2 rounded-lg bg-[#21213D]">
            <details className="group ">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className='text-xl'>{data.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className=" mt-3 group-open:animate-fadeIn">
                {data.answer}
              </p>
            </details>
          </div>
        )
};

export default Accordien;