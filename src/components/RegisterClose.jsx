import React from 'react'
import { BorderBeam } from './ui/border-beam'
import { motion } from 'framer-motion'
import ShimmerButton from './ui/shimmer-button'
import { useNavigate } from 'react-router-dom'

const RegisterClose = () => {
  const navigate = useNavigate()
 function home(){
  navigate("/")
 }
  return (
    <>
    <div className='max-w-[90vw] m-auto h-screen  flex justify-center items-center '>
       <div  className='sm:w-[40vw] w-[60vw] text-center bl p-3 h-[40vh] rounded-2xl bg-[#ffffff20]   border-2 border-white flex justify-center items-center flex-col'>
        <p className='sm:text-3xl text-xl text-white'>Sorry, Registrations are closed</p>
        <div onClick={home} className='flex justify-center items-center mt-5'>
        <ShimmerButton>Understood</ShimmerButton>
        </div>
       </div>
    </div>
    
    </>
  )
}

export default RegisterClose
