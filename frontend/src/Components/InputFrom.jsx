import React ,{useState}  from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
export default function InputFrom({onClose}) {

  const [MyForm,SetForm] = useState({email:"",password:""});
  const [IsSignUp,SetIsSignUp] = useState(false);
  const [error,Seterror] = useState('');
  const [success,SetSuccess] = useState('');

  return (
    <div onClick={onClose}
    className='fixed inset-0 bg-black/5 bg-opacity-30 flex justify-center items-center z-20'>
        <form 
        onClick={(e)=> e.stopPropagation()}
        onSubmit={async (event)=>{
          event.preventDefault();
          SetForm({email:"",password:""})

          let endPoint = IsSignUp ? "register" : "signin";

          axios.post(`http://localhost:5000/User/${endPoint}`, MyForm)
          .then((response)=>{
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            SetSuccess(response.data.message)
            Seterror("");
            SetForm({email:"",password:""});
          })
          .catch((err)=>{
          Seterror(err.response?.data?.message || "Error");
          });
        }}
        className='md:w-[380px] md:h-[400px] sm:w-[300px] sm:h-[350px] w-[270px] h-[260px] shadow-2xl rounded-[20px] 
        flex flex-col items-center md:gap-7 sm:gap-5 mx-auto bg-white'>

            <div className="bg-[#ff9560] w-full h-[60px] rounded-t-[20px] flex justify-center items-center">
                <h1 className="text-xl text-white">Create Account</h1>
            </div>

            <div
            className='flex border-2 border-[#ff9560] gap-2 rounded-full items-center p-1'>
                <i
                className='w-10 h-10 bg-[#ff9560] rounded-full text-white flex justify-center items-center'><MdAlternateEmail/></i>
                <input type="email" 
                name='email'
                className='focus:outline-none p-2'
                value={MyForm.email}
                onChange={(e)=> SetForm({...MyForm,email:e.target.value})}/>
            </div>
            <div
            className='flex border-2 border-[#ff9560] gap-2 rounded-full items-center p-1'>
                <i
                className='w-10 h-10 bg-[#ff9560] rounded-full text-white flex justify-center items-center'><RiLockPasswordLine/></i>
                <input type="password" 
                className='focus:outline-none p-2'
                name='password'
                value={MyForm.password}
                onChange={(e)=> SetForm({...MyForm,password:e.target.value})}/>
            </div>

            <button 
            type="submit"
            className="text-xl mt-4 border-2 border-orange-400 px-4 py-1 rounded-full bg-[#ff9560] text-white shadow-lg"
            >
            {(IsSignUp)?"Sign Up":"Log In"}
            </button>
            {success &&(
            <h5 className="text-green-500">{success}</h5>
            )}
            {error && (
               <h5 className="text-red-500">{error}</h5>
            )}

            <p
            className='font-bold cursor-pointer'
            onClick={()=>{
              SetIsSignUp(!IsSignUp)
            }}>{(IsSignUp)?"Already have a account":"Create an account?"}</p>

        </form>
    </div>
  
  )
}

