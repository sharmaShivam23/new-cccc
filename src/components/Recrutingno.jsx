import React from "react";
import { motion } from "framer-motion";

const Recrutingno = () => {
  return (
    <div className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-40">
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, scale: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center items-center z-40"
      >
        <div className="flex justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center border-4 rounded-2xl  border-white sm:w-[40vw] sm:h-[40vh] w-[60vw] h-[60vw] flex-col bg-neutral-700">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="sm:text-3xl text-xs text-center font-bold"
          >
            Soory we are not Recruting
          </motion.p>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="sm:text-3xl text-xs font-bold"
          >
            Right now
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Recrutingno;
