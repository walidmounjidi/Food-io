import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import InputFrom from './InputFrom';
import { useEffect } from 'react';
export default function Navbar() {
  const [IsOpenn, SetOpen] = useState(false);
  const [islogin, setIsLogin] = useState(!!localStorage.getItem("token"));

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
        </nav>
      </header>

      {IsOpenn && <InputFrom onClose={closeModal} />}
    </>
  );
}


// import React, { useState } from 'react'
// import Logo from '../assets/logo.png'
// import { IoMenu } from "react-icons/io5";
// import { RiMenu4Line } from "react-icons/ri";
// import InputFrom from './InputFrom';

// export default function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   let token = localStorage.getItem('token');
//   const [islogin,setIsLogin] = useState(token?true :false)
//   const links = [
//     {id:0, name: "Home", path: "/" },
//     {id:1, name: "My Recipes", path: "/MyRecipes" },
//     {id:2, name: "Favorite", path: "/MyFavRecipes" },
//     {id:3, name: "Contact", path: "/contact" },
//     // {id:4, name: "Login", path: "/login" }
//   ]

//   return (
//     <>
//      <header className="bg-white shadow-md relative z-20">
//        <nav className="flex items-center justify-between sm:p-4 px-4 md:p-[15px]">
 
//          {/* Logo */}
//          <div className='logo'>
//            <img src={Logo} alt="logo" className='w-[100px] md:w-[120px] h-[100px] md:h-[120px]' />
//          </div>
 
//          {/* Desktop Links */}
//          <ul className="hidden md:flex list-none gap-3 mr-[25px]">
//            {links.map((item) => (
//              <li 
//                key={item.id} 
//                className={`${item.id === 4 ? "bg-[#ff9560]" : "hover:bg-[#ff9560]"} 
//                text-[16px] md:text-[20px] p-2 rounded-[7px]`}
//              >
//                <a href={item.path}
//                  className='text-[#ff5601] font-medium hover:text-white'
//                >
//                  {item.name}
//                </a>
//              </li>
//            ))}
//            <li
//            className='bg-[#ff9560] text-[16px] md:text-[20px] p-2 rounded-[7px]'>
//               <button
//                 className='text-[#ff5601] font-medium hover:text-white'
//                 onClick={() => { 
//                   if(islogin){
//                     localStorage.removeItem('token');
//                     setIsLogin(false);
//                   } else {
//                     setShowForm(true);
//                   }
//                 }}
//               >
//               {islogin ? "Logout" : "Login"}
//               </button>
//            </li>
//          </ul>

//          <div className="md:hidden">
//            <button 
//              onClick={() => setIsOpen(!isOpen)}
//              className="text-[#ff5601] text-3xl"
//            >
//              {isOpen ? <RiMenu4Line /> : <IoMenu />}
//            </button>
//          </div>
//        </nav>
 
//        {/* Mobile Menu */}
//        {isOpen && (
//          <ul className="flex flex-col md:hidden bg-white shadow-md p-4 gap-2">
//            {links.map((item) => (
//              <li 
//                key={item.id} 
//                className='text-[16px] p-2 hover:bg-[#ff9560] rounded-[7px]'
//              >
//                <button
//                  onClick={() => {
//                    if(item.name === "Login") setShowForm(true);
//                    setIsOpen(false);
//                  }}
//                  className='text-[#ff5601] font-medium hover:text-white w-full text-left'
//                >
//                  {item.name}
//                </button>
//              </li>
//            ))}
//          </ul>
//        )}
//      </header>

    
//      {showForm && (
//        <div 
//          onClick={() => setShowForm(false)}
//          className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50"
//        >
//          <div 
//            onClick={(e)=>e.stopPropagation()}
//            className="animate-fadeIn"
//          >
//            <InputFrom />
//          </div>
//        </div>
//      )}

//     </>
//   )
// }
