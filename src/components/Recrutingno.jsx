import React from "react";
// import { BorderBeam } from "./MyComponent";
import { motion } from "framer-motion";

const Recrutingno = () => {
  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, scale: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center items-center z-40"
      >
        <div className="flex justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center border-4 rounded-2xl  border-white w-[40vw] h-[40vh] flex-col bg-neutral-700">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            Soory we are not Recruting
          </motion.p>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="text-3xl font-bold"
          >
            Right now
          </motion.p>
        </div>
      </motion.div>

      {/* <BorderBeam
        size={800}
        duration={100}
        anchor={500}
        borderWidth={3}
        colorFrom="#ffaa40"
        colorTo="#9c40ff"
        delay={0}
        className="p-4 text-center flex justify-center items-center"
      >
          <motion.div initial={{filter : 'blur(10px)' , opacity : 0 , scale : 0}} animate={{filter : 'blur(0px)' ,scale : 1, opacity : 1}} transition={{duration : 1}} exit={{opacity : 0}} className='flex justify-center items-center z-40'>
    <div  className='flex justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center border-4 rounded-2xl  border-white w-[40vw] h-[40vh] flex-col bg-neutral-700'>
      <motion.p initial={{scale : 0}} animate={{scale : 1}} transition={{duration : 1}} className='text-3xl font-bold'>Soory we are not Recruting</motion.p>
      <motion.p initial={{scale : 0}} animate={{scale : 1}} transition={{duration : 2}} className='text-3xl font-bold'>Right now</motion.p>
    </div>
    </motion.div>
      </BorderBeam> */}
    </div>
  );
};

export default Recrutingno;
