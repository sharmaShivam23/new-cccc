import React from "react";
import { motion } from "framer-motion";
import img2 from "../images/img2.svg";
import sir from "../images/sir.png";
import TypingAnimation from "./ui/typing-animation";
import { TextAnimate } from "./ui/text-animate";

const Faculty = () => {
  return (
    <div className="sm:max-w-[90vw] sm:mb-28 lg:mb-3 mt-20 sm:mt-0 m-auto w-full text-white lg:h-screen flex justify-center items-center h-auto bg-green-">
      {/* <div     className="h-auto psud   text-white sm:p-9 w-full min-[450px]:w-[80vw] lg:h-[75vh] sm:w-[70vw] bg-neutral-800 border-2 shadow-xl border-white rounded-3xl xl:w-[80vw] mx-auto"> */}
      <div className="flex justify-center max-[450px]:w-[90vw] rounded-3xl flex-col   bg-neutral-800 items-center border-2 p-1 sm:p-5  border-white w-[80vw] sm:w-[70vw] xl:w-[80vw] h-auto lg:h-[75vh]">
        {/* <motion.h1
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="text-white text-center underline text-2xl sm:text-5xl sm:mt-7 md:text-6xl mt-2 font-poppins font-bold"
        >
          Our Faculty 
        </motion.h1> */}
          <TextAnimate
          
        animation="fadeIn"  
        by="word"            
        startOnView={true}   
        className="text-white text-center  text-2xl sm:text-5xl sm:mt-7 md:text-6xl mt-2 font-poppins font-bold"  
        // segmentClassName="text-blue-500"           
        duration={2}      
      >
        Our Faculty
      </TextAnimate>

        <div className="flex justify-center rounded-3xl flex-col lg:flex-row items-center p-3 sm:p-5 pt-0 mt-3 border-white w-auto sm:w-[70vw] xl:w-[80vw] h-auto lg:h-[60vh]">
          <motion.div initial={{rotateY : 90, opacity : 0}} whileInView={{rotateY : 0,  opacity : 1}} transition={{duration : 1 , ease : "easeIn"}} className="pht lg:w-2/6 w-full h-full flex justify-center items-center bg-red-">
            <img
              src={sir}
              className="max-[600px]:h-40 max-[1000px]:h-80 object-contain h-96"
              alt=""
            />
          </motion.div>

          <div className="txt lg:w-4/6 w-full h-full flex justify-center items-center sm:p-3  bg-blue-">
            <motion.p initial={{scale : 1.1 , opacity : 0}} whileInView={{scale : 1 ,  opacity : 1}} transition={{duration : 1 , ease : "easeIn"}} className=" text-xs md:text-xl sm:p-4 max-[450px]:hidden flex xl:text-2xl max-[800px]:text-xl tracking-wide max-[700px]:text-xl max-[450px]:text-xs font-extralight   text-center  lg:text-left font-major lg:mb-5">
              With 15 years of teaching experience and 3 years of industry
              experience as a Java Software Developer, Mr. Santosh Mishra is a
              distinguished academic and industry professional. He is a Gold
              Faculty Partner at Infosys and has been recognized with the
              prestigious "Content Guru Award" for his exceptional
              contributions. In 2019, he mentored the winning team of a national
              Hackathon competition. Mr. Mishra is proficient in programming
              languages including Java, C, C++, Python, and PHP. His research
              interests lie in various meta-heuristic optimization algorithms,
              such as PSO, MFO, GSA, and GA, contributing to advancements in the
              field.
            </motion.p>
            <p className=" text-xs md:text-xl max-[450px]:flex hidden sm:p-4 xl:text-2xl max-[800px]:text-xl tracking-wide max-[700px]:text-xl max-[450px]:text-xs font-extralight   text-center  lg:text-left font-major lg:mb-5">
              With 15 years of teaching experience and 3 years of industry
              experience as a Java Software Developer, Mr. Santosh Mishra is a
              distinguished academic and industry professional. He is a Gold
              Faculty Partner at Infosys and has been recognized with the
              prestigious "Content Guru Award" for his exceptional
              contributions. In 2019, he mentored the winning team of a national
              Hackathon competition. Mr. Mishra is proficient in Java, C, C++, Python, and PHP like
              languages.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
