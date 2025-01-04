import React from "react";
import { BorderBeam } from "./ui/border-beam";
import { motion } from "framer-motion";
import ShimmerButton from "./ui/shimmer-button";
// import notfound from "../images/404.png";
import { useNavigate } from "react-router-dom";
import Particles from "./ui/particles";
import notfound from "../images/notfound.png";
import think from "../images/think.png";

const RegisterClose = () => {
  const navigate = useNavigate();
  function home() {
    navigate("/");
  }
  return (
    <>
      <Particles />
      <div className="max-w-[90vw] m-auto h-auto md:h-screen flex-col  flex justify-center items-center">
        <div>
          <p className="text-white text-2xl font-bold">Soory! Page not found</p>
          <img src={notfound} className="h-[70vh]" alt="" />
        </div>
        <div onClick={home} className="flex justify-center items-center mt-3">
          <ShimmerButton>Back to Home</ShimmerButton>
        </div>
      </div>
    </>
  );
};

export default RegisterClose;

{
  /* <div  className='sm:w-[40vw] w-[60vw] text-center bl p-3 h-[40vh] rounded-2xl bg-[#ffffff20]   border-2 border-white flex justify-center items-center flex-col'>
        <p className='sm:text-3xl text-xl text-white'>Sorry, Registrations are closed</p>
        <div onClick={home} className='flex justify-center items-center mt-5'>
        <ShimmerButton>Understood</ShimmerButton>
        </div>
       </div> */
}
//  <div onClick={home} className='flex justify-center items-center mt-3'>
//  <ShimmerButton>Back to Home</ShimmerButton>
//  </div>
