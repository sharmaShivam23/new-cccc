import React from "react";
import { motion } from "framer-motion";
import img from "../images/img.svg";
import main from "../images/main.png";
import cloudimg from "../images/cloudimg.png";
import cloud from "../images/cloud.jpg";
import bgcards from "../images/bgcards.svg";
// import { BorderBeam } from "./MyComponent";
import ShimmerButton from "./ui/shimmer-button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/Contact");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="h-auto xl:h-screen p-8 w-screen sm:max-w-[80vw] sm:mb-28 lg:mb-3 flex  m-auto flex-col">
        <div className="flex justify-center items-center text-center text-white ">
          {/* head */}
          <motion.div
            initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="head text-center relative   w-full flex flex-col justify-center items-center "
          >
            <p className="text-3xl md:text-4xl font-bold mt-6 font-poppins">
              CLOUD COMPUTING CELL
            </p>
            <p className="mt-2 text-xl md:text-2xl font-semibold font-poppins">
              Think
              <span className="ml-3 border-r-2 mr-3 border-white"></span>
              Develop
              <span className="ml-3 mr-3 border-r-2"></span>
              Deploy
            </p>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="lg:flex block justify-center gap-0  sm:gap-20 items-center">
          {/* left */}
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="left lg:w-5/12 w-full"
            exit={{ x: -100 }}
          >
            <img src={cloud} alt="" className=" w-full  sm:static" />
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ translateX: 100 }}
            whileInView={{ translateX: 0 }}
            exit={{ x: 100 }}
            transition={{ type: "spring", stiffness: 50 }}
            style={{ flex: 1 }}
            className="right lg:w-7/12 w-full text-white  flex-col p-2 mt-10"
          >
            <h1 className="text-xl  lg:text-2xl font-playwrite underline text-slate-400 tracking-wide">
              About Us
            </h1>
            <p className="text-xl max-[400px]:text-xs sm:text-2xl  font-major mt-6">
              The Cloud Computing Cell at Ajay Kumar Garg Engineering College,
              established in February 2016.
            </p>
            <p className="text-xl max-[400px]:text-xs sm:text-2xl font-major mt-6">
             It Provides students with exposure to the latest cloud technologies,
              enhancing their skills for better placement and research
              opportunities.
            </p>
            <p className="text-xl max-[400px]:text-xs sm:text-2xl font-major mt-6">
              It offers a platform for managing and deploying cloud services,
              helping students stay competitive in the job market. The Cell is
              coordinated by Dr. J.K. Seth, Ms. Anupama Sharma, and Dr. Parneet
              Kaur from the IT Department, who guide students in their academic
              and professional development.
            </p>
            <div className="btn flex text-xl items-start gap-20 mt-8">
              <ShimmerButton className="font-bold text-xs max-[300px]:text-[7px] hover:scale-110 transition-all ease-in-out duration-1000  sm:text-lg font-bebas">
                Know More
              </ShimmerButton>
              <ShimmerButton
                className="font-bold text-xs  hover:scale-110  max-[300px]:text-[7px]  transition-all ease-in-out duration-1000 sm:text-lg font-bebas"
                onClick={contact}
              >
                Contact Us
              </ShimmerButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import {  motion } from "framer-motion";
// import img from "../images/img.svg";
// import main from "../images/main.png";
// import cloudimg from "../images/cloudimg.png";
// import cloud from "../images/cloud.jpg";
// import { BorderBeam } from "./BorderBeam";
// import { Button } from "./ui/button";
// import ShimmerButton from "./ui/shimmer-button";

// const About = () => {
//   return (
//     <div className="flex justify-center items-center ">
//     <div className="h-auto  w-screen sm:max-w-[80vw] flex  m-auto flex-col">
//       <div className="flex justify-center items-center text-center text-white ">
//         {/* head */}
//         <motion.div
//           initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
//           whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//           viewport={{ once: true }}
//           className="head text-center relative   w-full flex flex-col justify-center items-center "
//         >
//           <p className="text-3xl md:text-4xl font-bold mt-6">
//             CLOUD COMPUTING CELL
//           </p>
//           <p  className="mt-2 text-xl md:text-2xl font-semibold">
//             Think
//             <span  className="ml-3 border-r-2 mr-3 border-white"></span>
//             Develop
//             <span className="ml-3 mr-3 border-r-2"></span>
//             Deploy
//           </p>
//         </motion.div>
//       </div>

//       {/* CONTENT */}
//       <div className="sm:flex block justify-center gap-0  sm:gap-20 items-center">
//         {/* left */}
//         <motion.div
//           initial={{ x: -100 }}
//           whileInView={{ x: 0 }}
//           transition={{ duration: 1 }}
//           className="left lg:w-6/12 w-full"
//         >
//           <img src={cloud} alt="" className=" w-full  sm:static" />
//         </motion.div>

//         {/* right */}
//         <motion.div
//           initial={{ translateX:100 }}
//           whileInView={{ translateX: 0 }}
//           transition={{ duration: 1 }}
//           className="right lg:w-6/12 w-full text-white flex-col p-2 mt-10"
//         >
//           <h1 className="text-xl md:text-2xl underline text-slate-400 tracking-wide">
//             About Us
//           </h1>
//           <p className="text-xs md:text-2xl font-semibold mt-6">
//             Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
//             College since February 2016.
//           </p>
//           <p className="text-xs md:text-2xl font-semibold mt-6">
//             Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
//             College since February 2016. Lorem ipsum dolor sit, amet consectetur
//             adipisicing elit. Soluta cumque atium.
//           </p>
//           <p className="text-xs md:text-2xl font-semibold mt-6">
//             Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
//             College since February 2016. Lorem, ipsum dolor sit amet consectetur
//             adipisicing elit. Blanditiis voluptatibus dicta iusto
//             exercitationem, repellendus et repellat vero dignissimos nesciunt
//             autem ratione quos incidunt!e nemo perferendis sint?
//           </p>
//           <div className="btn flex items-start gap-20 mt-8">
//             {/* <button className="border-2 border-white p-1  sm:p-4 rounded-xl">
//               Know More
//             </button> */}
//             {/* <ShimmerButton/> */}
//             <ShimmerButton>Know More</ShimmerButton>
//             <ShimmerButton>Know More</ShimmerButton>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default About;
