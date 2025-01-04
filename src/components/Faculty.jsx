import React from "react";
import { motion } from "framer-motion";
import img2 from "../images/img2.svg";
import sir from "../images/sir.png";
import TypingAnimation from "./ui/typing-animation";

const Faculty = () => {
  return (
    <div id="faculty" className="h-auto sm:h-auto mb-32 w-full flex justify-center items-center  m-5">
      <div  className="h-auto psud   bg-neutral-900 text-white p-2 sm:p-9 w-full border-2 shadow-xl border-white rounded-3xl sm:max-w-[80vw] mx-auto">
        <motion.h1
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="text-white text-center text-2xl sm:text-5xl mb-8 md:text-6xl underline font-bold"
        >
         Our Faculty
        </motion.h1>

        <section className="flex flex-col lg:flex-row justify-center  items-center gap-8 lg:gap-16">
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{type: "spring", stiffness: 50, duration: 1}}
          >
            <img
              src={sir}
              alt="Cloud Computing Cell Faculty"
              className="rounded-lg object-cover h-[200px] sm:h-[400px]  shadow-lg"
            />
          </motion.div>

          {/* <motion.div
            initial={{ scale: 0, rotateX: 180 }}
            whileInView={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-8/12 text-xs md:text-3xl  font-extralight tracking-wider  text-center  lg:text-left"
          >
            Santosh Mishra, Assistant Professor in I department, having 15 years
            of teachin and 3 years of industry experience as Java software
            developer. Gold faculty partner of Infosys. Awarded with content
            guru award. Was mentor of Hackathon winning team of 2019.
            Programming knowledge of Java, C, C++, Python and PHP. Areas of
            research are different meta-heuristics Optimization algorithms like
            PSO, MFO, GSA, GA et{" "}
          </motion.div> */}
           <TypingAnimation
                        duration={5}
                        delay={0}
                        startOnView={true}
                        className="w-full lg:w-8/12 text-xs md:text-3xl  font-extralight tracking-wider  text-center  lg:text-left"
                      >
              {" Santosh Mishra, Assistant Professor in I department, having 15 year of teachin and 3 years of industry experience as Java software developer. Gold faculty partner of Infosys. Awarded with content guru award. Was mentor of Hackathon winning team of 2019.Programming knowledge of Java, C, C++, Python and PHP. Areas of research are different meta-heuristics Optimization algorithms likePSO, MFO, GSA, GA etc"}
                      </TypingAnimation>
        </section>
      </div>
    </div>
  );
};

export default Faculty;
