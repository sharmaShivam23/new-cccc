import React from "react";
import { motion } from "framer-motion";
import img2 from "../images/img2.svg";
import sir from "../images/sir.png";
import TypingAnimation from "./ui/typing-animation";

// const Faculty = () => {
//   return (
//     <div
//       id="faculty"
//       className="h-auto  sm:h-auto mb-32 w-full flex justify-center items-center  m-5"
//     >
//       <div className="h-auto psud   bg-neutral-900 text-white p-2 sm:p-9 w-full border-2 shadow-xl border-white rounded-3xl sm:max-w-[80vw] mx-auto">
//         <motion.h1
//           initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
//           whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
//           className="text-white text-center text-2xl sm:text-5xl mb-8 md:text-6xl underline font-bold"
//         >
//           Our Faculty
//         </motion.h1>

//         <section className="flex flex-col lg:flex-row justify-center bg-red-400 items-center gap-8 lg:gap-16">
//           <motion.div
//             initial={{ x: 100 }}
//             whileInView={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 50, duration: 1 }}
//             className="w-2/6 bg-blue-500"
//           >
//             <img
//               src={sir}
//               alt="Cloud Computing Cell Faculty"
//               className="rounded-lg object-cover h-[200px] sm:h-[400px] w-full   shadow-lg"
//             />
//           </motion.div>

//           <div className="w-4/6 bg-green-400">
//           <TypingAnimation
//             duration={2}
//             delay={0}
//             startOnView={true}
//             className="w-full    text-xs md:text-3xl  font-extralight tracking-wider  text-center  lg:text-left"
//             // className="w-full lg:w-8/12  text-xs md:text-3xl  font-extralight tracking-wider  text-center  lg:text-left"
//           >
//             {
//               " Santosh Mishra, Assistant Professor in I department, having 15 year of teachin and 3 years of industry experience as Java software developer. Gold faculty partner of Infosys. Awarded with content guru award. Was mentor of Hackathon winning team of 2019.Programming knowledge of Java, C, C++, Python and PHP. Areas of research are different meta-heuristics Optimization algorithms likePSO, MFO, GSA, GA etc"
//             }
//           </TypingAnimation>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Faculty;





const Faculty = () => {
  return (
    <div className="sm:max-w-[90vw] mb-28 lg:mb-3 mt-36 sm:mt-0 m-auto w-full text-white lg:h-screen flex justify-center items-center h-auto bg-green-">
    <div className='flex justify-center rounded-3xl flex-col  bg-neutral-800 items-center border-2 p-1 sm:p-5  border-white w-auto sm:w-[80vw] h-auto lg:h-[65vh]'>

    <motion.h1
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="text-white text-center text-2xl sm:text-5xl sm:mt-3 md:text-6xl mt-2 font-rubik font-bold"
        >
          Our Faculty
        </motion.h1>
       
       <div className="flex justify-center rounded-3xl flex-col lg:flex-row items-center p-5 border-white w-auto sm:w-[80vw] h-auto lg:h-[60vh]">
       <div className="pht lg:w-2/6 w-full h-full flex justify-center items-center bg-red-">
         <img src={sir} className="max-[600px]:h-56 max-[1000px]:h-80 object-contain h-96" alt="" /> 
       </div>

      <div className="txt lg:w-4/6 w-full h-full flex justify-center items-center p-3 bg-blue-">
          <p className=" text-xs md:text-2xl sm:p-4 max-[800px]:text-2xl tracking-wide max-[700px]:text-xl max-[450px]:text-xs font-extralight   text-center  lg:text-left font-major lg:mb-5">
          {/* Santosh Mishra, Assistant Professor in I department, having 15 year of teachin and 3 years of industry experience as Java software developer. Gold faculty partner of Infosys. Awarded with content guru award. Was mentor of Hackathon winning team of 2019.Programming knowledge of Java, C, C++, Python and PHP. Areas of research are different meta-heuristics Optimization algorithms likePSO, MFO, GSA, GA etc  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, suscipit. */}
          With 15 years of teaching experience and 3 years of industry experience as a Java Software Developer, Mr. Santosh Mishra is a distinguished academic and industry professional. He is a Gold Faculty Partner at Infosys and has been recognized with the prestigious "Content Guru Award" for his exceptional contributions. In 2019, he mentored the winning team of a national Hackathon competition.

Mr. Mishra is proficient in programming languages including Java, C, C++, Python, and PHP. His research interests lie in various meta-heuristic optimization algorithms, such as PSO, MFO, GSA, and GA, contributing to advancements in the field.


          </p>
      </div>  
      </div>
     
    </div>
    </div>
  )
}

export default Faculty
