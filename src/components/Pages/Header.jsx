import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-gradient-to-r from-[#173f32]   to-[#161429]  lg:px-[180px] px-[5%] pt-4'>

<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-blue-950  rounded-box min-w-[130px]">
      <li className='text-white text-xl font-medium '><Link to='/'>SignIn</Link> </li>
        
      <li className='text-white text-xl font-medium '><Link to='/'>Terms</Link> </li>
      <li className='text-white text-xl font-medium '><Link to='/howItWorks'>How It Works</Link> </li>
      <li className='text-white text-xl font-medium '><Link to='/blog'>Blog</Link> </li>
        
      </ul>
    </div>
    <img className='w-[250px]' src="https://geosmm.com/public/images/63538fe6ef330c13a05a3ed7e599d5f7.png" alt="Smm Panel.com" />
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='text-white text-xl font-medium '><Link to='/'>SignIn</Link> </li>
        
      <li className='text-white text-xl font-medium '><Link to='/'>Terms</Link> </li>
      <li className='text-white text-xl font-medium '><Link to='/howItWorks'>How It Works</Link> </li>
      <li className='text-white text-xl font-medium '><Link to='/blog'>Blog</Link> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#00FFA3] border-none text-black text-xl font-semibold ">Signup</a>
  </div>
</div>

    </div>
  )
}

