// import React, { useState } from 'react';
// import img from '../images/img.svg';
// import { motion } from 'framer-motion';

// const Landing = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isHovered2, setIsHovered2] = useState(false);

//   return (
//     <>
//       <div className="landing text-white bg-black px-5 md:px-10 mx-auto md:max-w-[90.3vw] w-full flex justify-center items-center flex-col xl:text-center mt-4 max-[500px]:max-w-[100vw]">
//         {/* head */}
//         <motion.div
//           initial={{ y: -50, filter: 'blur(10px)', opacity: 0 }}
//           whileInView={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
//           transition={{ duration: 2, ease: 'easeInOut' }}
//           className="head ml-5 md:ml-24 flex flex-col justify-center items-center text-center relative"
//         >
//           <p className="text-3xl md:text-4xl font-bold mt-6">CLOUD COMPUTING CELL</p>
//           <p className="mt-2 text-xl md:text-2xl font-semibold">
//             Think
//             <span className="ml-3 border-r-2 mr-3 border-white"></span>
//             Develop
//             <span className="ml-3 mr-3 border-r-2"></span>
//             Deploy
//           </p>
//         </motion.div>

//         <div className="content block md:flex justify-center mt-10 w-full">
//           {/* left */}
//           <motion.div
//             initial={{ x: -400 }}
//             whileInView={{ x: 0 }}
//             transition={{ duration: 1 }}
//             className="left w-full md:w-1/2 xl:w-1/2 ml-5 mt-10 md:mt-16 font-thin h-auto"
//           >
//             <h1 className="text-xl md:text-2xl underline text-slate-400">About Us</h1>
//             <p className="text-lg md:text-xl font-semibold mt-6">
//               Cloud Computing Cell has been a part of Ajay Kumar Garg
//               Engineering College since February 2016.
//             </p>
//             <p className="text-lg md:text-2xl font-semibold mt-6">
//               Cloud Computing Cell has been a part of Ajay Kumar Garg
//               Engineering College since February 2016. Lorem ipsum dolor sit, amet
//               consectetur adipisicing elit. Soluta cumque atium.
//             </p>
//             <p className="text-lg md:text-2xl font-semibold mt-6">
//               Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
//               College since February 2016. Lorem, ipsum dolor sit amet consectetur
//               adipisicing elit. Blanditiis voluptatibus dicta iusto
//               exercitationem, repellendus et repellat vero dignissimos nesciunt
//               autem ratione quos incidunt!e nemo perferendis sint?
//             </p>
//             <div className="btn mt-10 flex flex-wrap gap-6 justify-start md:justify-start">
//               <button
//                 className="relative border-2 border-white text-lg md:text-xl font-bold p-3 rounded-xl"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 Know More
//                 <div
//                   className={`${
//                     isHovered ? 'opacity-100' : 'opacity-0'
//                   } transition-opacity duration-200`}
//                 >
//                   <div
//                     className={`absolute bottom-16 bg-white text-black p-2 rounded-xl px-10`}
//                   >
//                     Know
//                   </div>
//                   <div className="h-3 w-3 bg-white absolute rotate-45 bottom-[58px] left-[38px]"></div>
//                 </div>
//               </button>
//               <button
//                 className="border-2 border-white text-lg md:text-xl font-bold p-3 rounded-xl"
//                 onMouseEnter={() => setIsHovered2(true)}
//                 onMouseLeave={() => setIsHovered2(false)}
//               >
//                 Contact Us
//                 <div
//                   className={`${
//                     isHovered2 ? 'opacity-100' : 'opacity-0'
//                   } transition-opacity duration-200`}
//                 >
//                   <div
//                     className={`absolute bottom-52 bg-white text-black p-2 rounded-xl px-10`}
//                   >
//                     hello
//                   </div>
//                   <div className="h-3 w-3 bg-white absolute rotate-45 bottom-[203px] left-[300px] "></div>
//                 </div>
//               </button>
//             </div>
//           </motion.div>

//           {/* right */}
//           <motion.div
//             initial={{ x: 500 }}
//             whileInView={{ x: 0 }}
//             transition={{ duration: 1 }}
//             className="right w-full md:w-1/2 xl:w-1/2 flex justify-center items-center mt-10 md:mt-0"
//           >
//             <img
//               src={img}
//               className="w-full h-auto min-h-[300px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] object-contain"
//               alt="Cloud Computing"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Landing;




// import React from "react";
// import { motion } from "framer-motion";
// import img from "../images/img.svg";

// const Landing = () => {
//   return (
//     <div className="h-auto p-8 w-screen sm:max-w-[90vw] m-auto flex flex-col bg-red-400">
//       <div className="flex justify-center items-center text-center text-white ">
//         {/* head */}
//         <div
//           className="head  w-full flex flex-col justify-center items-center "
//         >
//           <p className="text-3xl md:text-4xl font-bold mt-6">
//             CLOUD COMPUTING CELL
//           </p>
//           <p className="mt-2 text-xl md:text-2xl font-semibold">
//             Think
//             <span className="ml-3 border-r-2 mr-3 border-white"></span>
//             Develop
//             <span className="ml-3 mr-3 border-r-2"></span>
//             Deploy
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="sm:flex block justify-center items-center">
//         {/* left */}
//         <div
//           className="left md:w-5/12 w-full"
//         >
//           <img src={img} alt="" className="" />
//         </div>

//         {/* right */}
//         <div
//           className="right md:w-7/12 w-full text-white flex justify-center items-center flex-col p-2 mt-10"
//         >
//           <h1 className="text-xl md:text-2xl underline text-slate-400 tracking-wide">
//             About Us
//           </h1>
//           <p className="text-lg md:text-2xl font-semibold mt-6">
//             Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
//             College since February 2016.
//           </p>
//           <p className="text-lg md:text-2xl font-semibold mt-6">
//             Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
//             College since February 2016. Lorem ipsum dolor sit, amet consectetur
//             adipisicing elit. Soluta cumque atium.
//           </p>
//           <p className="text-lg md:text-2xl font-semibold mt-6">
//             Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
//             College since February 2016. Lorem, ipsum dolor sit amet consectetur
//             adipisicing elit. Blanditiis voluptatibus dicta iusto
//             exercitationem, repellendus et repellat vero dignissimos nesciunt
//             autem ratione quos incidunt!e nemo perferendis sint?
//           </p>
//           <div className="btn flex justify-items-start items-start gap-20 mt-8">
//             <button className="border-2 border-white  p-4 rounded-xl">
//               Know More
//             </button>
//             <button className="border-2 border-white  p-4 rounded-xl">
//               Know More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import React from "react";
import {  motion } from "framer-motion";
import img from "../images/img.svg";
import main from "../images/main.png";


const Landing = () => {
  return (
    <div className="h-auto p-8 w-screen sm:max-w-[90vw] m-auto flex flex-col">
      <div className="flex justify-center items-center text-center text-white ">
        {/* head */}
        <motion.div
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="head  w-full flex flex-col justify-center items-center "
        >
          <p className="text-3xl md:text-4xl font-bold mt-6">
            CLOUD COMPUTING CELL
          </p>
          <p  className="mt-2 text-xl md:text-2xl font-semibold">
            Think
            <span  className="ml-3 border-r-2 mr-3 border-white"></span>
            Develop
            <span className="ml-3 mr-3 border-r-2"></span>
            Deploy
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="sm:flex block justify-center items-center">
        {/* left */}
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="left lg:w-5/12 w-full"
        >
          <img src={img} alt="" className=" w-full relative right-8 top-4 sm:static" />
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ translateX:100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1 }}
          className="right lg:w-7/12 w-full text-white  flex-col p-2 mt-10"
        >
          <h1 className="text-xl md:text-2xl underline text-slate-400 tracking-wide">
            About Us
          </h1>
          <p className="text-xs md:text-2xl font-semibold mt-6">
            Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
            College since February 2016.
          </p>
          <p className="text-xs md:text-2xl font-semibold mt-6">
            Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
            College since February 2016. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Soluta cumque atium.
          </p>
          <p className="text-xs md:text-2xl font-semibold mt-6">
            Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering
            College since February 2016. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis voluptatibus dicta iusto
            exercitationem, repellendus et repellat vero dignissimos nesciunt
            autem ratione quos incidunt!e nemo perferendis sint?
          </p>
          <div className="btn flex items-start gap-20 mt-8">
            <button className="border-2 border-white  p-4 rounded-xl">
              Know More
            </button>
            <button className="border-2 border-white  p-4 rounded-xl">
              Know More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
