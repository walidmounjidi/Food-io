import React from 'react'
import Logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <header>
        <nav className="flex items-center justify-between p-[15px]">
            <div className='logo'>
                <img src={Logo} alt="" className='w-[150px] h-[150px]'/>
            </div> 
            <ul className="flex list-none gap-3 mr-[25px]">
                <li className='text-[20px] p-[15px] transition-all duration-300 hover:bg-[#ff9560] rounded-[7px]'>
                    <a className='no-underline text-[#ff5601] font-medium hover:text-white' href="/">Home</a>
                </li>
                <li className='text-[20px] p-[15px] transition-all duration-300 hover:bg-[#ff9560] rounded-[7px]'>
                    <a className='no-underline text-[#ff5601] font-medium hover:text-white' href="/recipes">Recipes</a>
                </li>
                <li className='text-[20px] p-[15px] transition-all duration-300 hover:bg-[#ff9560] rounded-[7px]'>
                    <a className='no-underline text-[#ff5601] font-medium hover:text-white' href="/about">About</a>
                </li>
                <li className='text-[20px] p-[15px] transition-all duration-300 hover:bg-[#ff9560] rounded-[7px]'>
                    <a className='no-underline text-[#ff5601] font-medium hover:text-white' href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
