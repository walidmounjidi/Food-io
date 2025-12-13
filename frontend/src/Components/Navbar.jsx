import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import InputFrom from './InputFrom';
import { IoMenu } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { useEffect } from 'react';
export default function Navbar() {
  const [IsOpenn, SetOpen] = useState(false);
  const [islogin, setIsLogin] = useState(!!localStorage.getItem("token"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
  }, []);

  const chekLogin = () => {
    if (islogin) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(false); 
    } else {
      SetOpen(true);
    }
  };

  const closeModal = () => {
    SetOpen(false);
  };

  const handalepr =(e)=>{
    if(!islogin){
      e.preventDefault();
      SetOpen(true)
    }
  }
  return (
    <>
      <header className='bg-white shadow-md relative z-20'>
        <nav className='flex items-center justify-between sm:p-4 px-4 md:p-[15px]'>
          <div>
            <img src={Logo} alt="" className='w-[100px] md:w-[120px] h-[100px] md:h-[120px]' />
          </div>
          <ul className='hidden md:flex list-none gap-3 mr-[25px]'>
            <li className='text-[16px] md:text-[20px] p-2 rounded-[7px] hover:bg-[#ff9560]'>
              <a className='text-[#ff5601] font-medium hover:text-white' href="/">Home</a>
            </li>
            <li className='text-[16px] md:text-[20px] p-2 rounded-[7px] hover:bg-[#ff9560]'
            onClick={handalepr}>
              <a className='text-[#ff5601] font-medium hover:text-white' href={islogin?"/myRecipes":"/"}>My Recipes</a>
            </li>
            <li className='text-[16px] md:text-[20px] p-2 rounded-[7px] hover:bg-[#ff9560]'
            onClick={handalepr}>
              <a className='text-[#ff5601] font-medium hover:text-white' href={islogin? "/myFavRecipes":"/"}>Favorite</a>
            </li>
            <li className='text-[16px] md:text-[20px] p-2 rounded-[7px] hover:bg-[#ff9560]'>
              <a className='text-[#ff5601] font-medium hover:text-white' href="/contact">Contact</a>
            </li>

            <button
              className='text-[16px] md:text-[20px] p-2 rounded-[7px] bg-[#ff9560] text-[#ff5601] font-medium hover:text-white cursor-pointer'
              onClick={chekLogin}
            >
              {islogin ? "Logout" : "Login"}
            </button>
          </ul>
          <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#ff5601] text-3xl"
          >
            {isMenuOpen ? <RiMenu4Line /> : <IoMenu />}
          </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col bg-white shadow-md p-4 space-y-3 animate-slideDown">

            <li className="p-2 rounded-lg hover:bg-[#ff9560] transition">
              <a href="/" className="text-[#ff5601] hover:text-white font-medium">Home</a>
            </li>

            <li className="p-2 rounded-lg hover:bg-[#ff9560] transition" onClick={handalepr}>
              <a href={islogin ? "/myRecipes" : "/"} className="text-[#ff5601] hover:text-white font-medium">
                My Recipes
              </a>
            </li>

            <li className="p-2 rounded-lg hover:bg-[#ff9560] transition" onClick={handalepr}>
              <a href={islogin ? "/myFavRecipes" : "/"} className="text-[#ff5601] hover:text-white font-medium">
                Favorite
              </a>
            </li>

            <li className="p-2 rounded-lg hover:bg-[#ff9560] transition">
              <a href="/contact" className="text-[#ff5601] hover:text-white font-medium">Contact</a>
            </li>

            <button
              onClick={chekLogin}
              className="w-full p-2 rounded-lg bg-[#ff9560] text-[#ff5601] hover:text-white font-medium"
            >
              {islogin ? "Logout" : "Login"}
            </button>

          </ul>
        )}
      </header>

      {IsOpenn && <InputFrom onClose={closeModal} />}
    </>
  );
}
