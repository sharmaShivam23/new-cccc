import React from "react";
import CCC from "../images/CCC.png";
import { motion } from "framer-motion";
import Particles from "./ui/particles";
import SparklesText from "./ui/sparkles-text";

const Splash = () => {
  return (
    <>
      <div className="bg-violet-500 h-screen w-screen relative flex justify-center items-center flex-col">
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="z-50"
        >
          <img src={CCC} alt="Logo" className="h-40 z-50" />
        </motion.div>

        <div className="text text-white font-bold text-2xl sm:text-3xl z-50 mt-6 flex">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 2,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* <p className='mr-4 font-poppins'>CLOUD</p> */}
            <SparklesText className="mr-4 sm:text-3xl text-2xl font-poppins" text={"CLOUD"}>
              CLOUD
            </SparklesText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 2,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* <p className='mr-4 font-poppins'>COMPUTING</p> */}
            <SparklesText
              className="mr-4 sm:text-3xl text-2xl font-poppins"
              text={"COMPUTING"}
            >
              CLOUD
            </SparklesText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 2,
              delay: 1.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* <p className='mr-4 font-poppins'>CELL</p> */}
            <SparklesText className="mr-4 sm:text-3xl text-2xl font-poppins" text={"CLOUD"}>
              CELL
            </SparklesText>
          </motion.div>
        </div>

        <div className="ani z-40 bg-black text-3xl absolute bottom-0 text-white flex justify-center items-start">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100vh" }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="bg-black z-40 w-screen"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Splash;
