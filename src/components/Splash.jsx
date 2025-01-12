
import React from 'react';
import CCC from '../images/CCC.png';
import { motion } from 'framer-motion';


const Splash = () => {
  return (
    <>
      <div className='bg-black h-screen w-screen flex justify-center items-center flex-col'>
      {/* <div className='bg-gradient-to-t from-violet-900 via-violet-600 to-violet-950 h-screen w-screen flex justify-center items-center flex-col'> */}
        
        <motion.div  initial={{   rotate: 0, scale: 0 }} whileInView={{  rotate: 360, scale: 1 }} transition={{ duration: 4, ease: "easeOut" }} className='' >
        {/* <motion.div  initial={{  x: window.innerWidth < 400 ? -100 : -800, rotate: 0, scale: 1 }} whileInView={{ x: 0, rotate: 360, scale: 1 }} transition={{ duration: 4, ease: "easeOut" }} className='' > */}
          <img src={CCC} alt="Logo" className='h-40 ' />
        </motion.div>

      
        <div className="text text-white font-bold text-2xl sm:text-3xl mt-6 flex">
          <motion.div initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 100 }} 
          // <motion.div initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 100 }} 
          >
            <p className='mr-4 font-rubik'>CLOUD</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 2, delay: 1, type: "spring", stiffness: 100 }} 
          >
            <p className='mr-4 font-rubik'>COMPUTING</p>
          </motion.div>

          <motion.div  initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 2, delay: 1.5, type: "spring", stiffness: 100 }} 
          >
            <p className='mr-4 font-rubik'>CELL</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Splash;
