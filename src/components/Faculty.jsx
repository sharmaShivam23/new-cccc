import React from "react";
import { motion } from "framer-motion";
import img2 from "../images/img2.svg";
import sir from "../images/sir.svg";
import TypingAnimation from "./ui/typing-animation";
import { TextAnimate } from "./ui/text-animate";
import shikha from "../images/shikha2.svg";

const Faculty = () => {
  return (
    <div className="sm:max-w-[90vw] sm:mb-28 lg:mb-3 mt-20 sm:mt-0 m-auto w-full text-white lg:h-screen flex justify-center items-center h-auto bg-green-">
      <div className="flex justify-center max-[450px]:w-[90vw] rounded-3xl flex-col   bg-neutral-800 items-center border-2 p-1 sm:p-  border-white w-[80vw] sm:w-[70vw] xl:w-[80vw] h-auto lg:h-auto">
        <TextAnimate
          animation="fadeIn"
          by="word"
          startOnView={true}
          className="text-white text-center  text-2xl sm:text-5xl sm:mt-7 md:text-6xl mt-2 font-poppins font-bold"
          duration={2}
        >
          Our Faculty
        </TextAnimate>

        <div className="flex justify-evenly rounded-3xl sm:gap-10 flex-col lg:flex-row items-center p-3 sm:p- pt-0 mt-3 border-white w-auto sm:w-[70vw] xl:w-[80vw]  h-auto lg:h-[50vh]">
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="pht lg:w-2/6 w-full flex-col h-full flex justify-center items-center bg-red-"
          >
              <div className="conte text-center mt-4">
              <h1 className="sm:text-2xl text-lg font-[550] text-white">
                Assistant Professor. IT Dept
              </h1>
              <p className="sm:text-xl text-md sm:mt-3 font-[500] text-white">
                Mr. Santosh Kumar Mishra
              </p>
            </div>
            <img
              src={sir}
              className="sm:h-64 mt-4 h-32 max-[450px]:h-40  object-contain"
              alt=""
            />
          </motion.div>

          {/* // */}
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="pht lg:w-2/6 w-full h-full flex-col flex justify-center items-center bg-red-"
          >
             <div className="conte text-center mt-4">
              <h1 className="sm:text-2xl text-lg font-[550] text-white">
                Assistant Professor. IT Dept
              </h1>
              <p className="sm:text-xl  text-md sm:mt-3 font-[500] text-white">
              Ms. Shikha Agarwal
              </p>
            </div>
            <img
              src={shikha}
              className="sm:h-64 mt-4 h-32  max-[450px]:h-40 rounded- object-cover"
              alt=""
            />
      
          </motion.div>

         
        </div>

        <div className="p sm:text-lg pb-2 text-xs sm:p-4 font-[500] max-w-[70vw] text-center">Prof. Santosh Sir and Prof. Shikha Ma’am from the IT Department serve as the guiding pillars of the Cloud Computing Cell. Their continuous support and mentorship play a crucial role in the growth of the society. They are dedicated to helping students explore cloud technologies and grow in their respective fields.</div>
      </div>
    </div>
  );
};

export default Faculty;



 {/* <div className="txt lg:w-4/6 w-full h-full flex justify-center items-center sm:p-3  bg-blue-">
            <motion.p initial={{scale : 1.1 , opacity : 0}} whileInView={{scale : 1 ,  opacity : 1}} transition={{duration : 1 , ease : "easeIn"}} 
            className=" sm:p-4 max-[450px]:hidden flex  max-[500px]:text-xs text-lg sm:text-xl lg:text-2xl  tracking-wide  font-extralight   text-center  lg:text-left font-poppins lg:mb-5">
               15 years of teaching experience and 3 years of industry
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
            <p className=" text-xs md:text-xl max-[450px]:flex hidden sm:p-4 xl:text-2xl max-[800px]:text-xl tracking-wide max-[700px]:text-xl max-[450px]:text-xs font-extralight   text-center  lg:text-left font-poppins lg:mb-5">
              With 15 years of teaching experience and 3 years of industry
              experience as a Java Software Developer, Mr. Santosh Mishra is a
              distinguished academic and industry professional. He is a Gold
              Faculty Partner at Infosys and has been recognized with the
              prestigious "Content Guru Award" for his exceptional
              contributions. In 2019, he mentored the winning team of a national
              Hackathon competition. Mr. Mishra is proficient in Java, C, C++, Python, and PHP like
              languages.

            </p>
          </div>  */}