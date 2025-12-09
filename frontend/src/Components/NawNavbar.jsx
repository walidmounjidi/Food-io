import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import InputFrom from './InputFrom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  let token = localStorage.getItem('token');
  const [islogin, setIsLogin] = useState(token ? true : false);

  const links = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "My Recipes", path: "/MyRecipes" },
    { id: 2, name: "Favorite", path: "/MyFavRecipes" },
    { id: 3, name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-white shadow-md relative z-20">
        <nav className="flex items-center justify-between sm:p-4 px-4 md:p-[15px]">

          {/* Logo */}
          <div className='logo'>
            <img src={Logo} alt="logo" className='w-[100px] md:w-[120px] h-[100px] md:h-[120px]' />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex list-none gap-3 mr-[25px]">
            {links.map((item) => (
              <li 
                key={item.id} 
                className="hover:bg-[#ff9560] text-[16px] md:text-[20px] p-2 rounded-[7px]"
              >
                <button
                  onClick={() => {
                    if (!islogin && (item.name === "Favorite" || item.name === "My Recipes")) {
                      setShowForm(true); // يفتح login
                    } else {
                      window.location.href = item.path; // يمشي للصفحة
                    }
                  }}
                  className='text-[#ff5601] font-medium hover:text-white'
                >
                  {item.name}
                </button>
              </li>
            ))}

  
            <li className='bg-[#ff9560] text-[16px] md:text-[20px] p-2 rounded-[7px]'>
              <button
                className='text-[#ff5601] font-medium hover:text-white'
                onClick={() => { 
                  if (islogin) {
                    localStorage.removeItem("token");
                    setIsLogin(false);
                  } else {
                    setShowForm(true);
                  }
                }}
              >
                {islogin ? "Logout" : "Login"}
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#ff5601] text-3xl"
            >
              {isOpen ? <RiMenu4Line /> : <IoMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col md:hidden bg-white shadow-md p-4 gap-2">

            {links.map((item) => (
              <li 
                key={item.id} 
                className='text-[16px] p-2 hover:bg-[#ff9560] rounded-[7px]'
              >
                <button
                  onClick={() => {
                    if (!islogin && (item.name === "Favorite" || item.name === "My Recipes")) {
                      setShowForm(true);
                    } else {
                      window.location.href = item.path;
                    }
                    setIsOpen(false);
                  }}
                  className='text-[#ff5601] font-medium hover:text-white w-full text-left'
                >
                  {item.name}
                </button>
              </li>
            ))}

            {/* Login / Logout Mobile */}
            <li className='text-[16px] p-2 bg-[#ff9560] rounded-[7px]'>
              <button
                onClick={() => {
                  if (islogin) {
                    localStorage.removeItem("token");
                    setIsLogin(false);
                  } else {
                    setShowForm(true);
                  }
                  setIsOpen(false);
                }}
                className='text-[#ff5601] font-medium hover:text-white w-full text-left'
              >
                {islogin ? "Logout" : "Login"}
              </button>
            </li>

          </ul>
        )}
      </header>

      {/* Modal Login */}
      {showForm && (
        <div 
          onClick={() => setShowForm(false)}
          className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <div 
            onClick={(e)=>e.stopPropagation()}
            className="animate-fadeIn"
          >
            <InputFrom />
          </div>
        </div>
      )}

    </>
  )
}
