import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Confetti from './ui/confetti';

const Success = () => {
  const name = localStorage.getItem("registeredName")
   
  return (
    <div className='flex flex-col'>
    {/* <Confetti className="absolute top-0"/> */}
    <div className = "absolute top-0 left-0 w-full flex justify-center items-center">
         <Confetti   particleCount= {1000} spread= {500}></Confetti>
         </div>
    <div className='h-auto flex flex-col text-black p-5 rounded-2xl w-[400px] max-[400px]:w-[300px] max-[300px]:w-[200px] text-xl font-poppins justify-center items-center  sm:w-[600px] bg-white'>
    <div className="p sm:text-3xl text-xl font-bold">{name}</div>
    <div className="p mt-1 font-bold">You are</div>
      <div className="icon hidden sm:flex m-6 text-green-700 sm:text-6xl">
        <FaCheckCircle size={150}/>
      </div>
      <div className="icon flex sm:hidden m-6 text-green-700 sm:text-6xl">
        <FaCheckCircle size={80}/>
      </div>

      <div className="btn bg-violet-800 text-center text-white text-lg sm:text-xl font-semibold h-[50px] rounded-sm m-2 p-4 flex justify-center items-center">
        Successfully Registered
      </div>
      <div className="p text-[#3B3B3B] font-[600]">For</div>
      <div className="name text-3xl m-1 font-bold font-jersey">
        Nimbus 2.0
      </div>
      <div className="p text-center mt-2 text-lg sm:text-xl font-semibold">Saves the Date: <br/> 13th-14th May 2025</div>
      <div className="p text-sm mt-2 text-center  text-[#2D2D2D]">Get ready to stand out from the  crowd and level up your <br/>  skills in  advance technologies.</div>
    </div>
    </div>
  )
}

export default Success
