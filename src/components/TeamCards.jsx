import React from "react";
import shivamsharma from "../3yearImg/shivamsharma.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import imgfooter from "../images/imgfooter.png"
import rec1 from "../images/rec1.png"
import rec2 from "../images/rec2.png"
import rec3 from "../images/rec3.png"
import Raghav from '../images/Raghav.jpg'

export const TeamCards = () => {
  return (
    <>
      <motion.h1
        initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
        whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{once : true}}
        className="text-white text-center text-xl sm:text-3xl  md:text-4xl underline font-bold  mb-6 mt-6"
      >
        OUR TEAM MEMBERS
      </motion.h1>
      <FouthYear />
      <ThirdYear />
      <SecondYear />
    </>
  );
};

const FouthYear = () => {
  const obj = [
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    
      
  ];

  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col  items-center py-8">
    

      <h1 className="mb-10 text-2xl font-serif font-extrabold underline text-[#32CD32]">
        Fourth Year
      </h1>
  
      <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {obj.map((details, index) => (
          <motion.div initial={{opacity : 0 , rotateY : 90}} whileInView={{opacity : 1 , rotateY : 0}} transition={{duration : 1 , ease : "easeInOut"}} key={index} className="flex justify-center items-center">
            <div className="relative w-[20rem] cursor-pointer h-[25rem] overflow-hidden border-2 border-[#32CD32] bg-white rounded-3xl hover:rounded-none group">
              {/* Team member image */}
              <div className="w-full img h-full flex justify-center items-center flex-col transform group-hover:translate-x-full   transition-all duration-500">
                <img
                  src={details.img}
                  alt={details.name}
                  className="h-[13rem] w-[13rem] rounded-full border-2 border-[#32CD32] shadow-2xl shadow-[#32CD32]"
                />
                <div className="mt-6 text-center">
                  <p className="text-xl text-black">{details.domain}</p>
                  <p className="text-2xl font-bold text-black">
                    {details.name}
                  </p>
                  <img src={rec1} className="w-full absolute bottom-0 left-0" alt="" />
                </div>
              </div>

             {/* team member about */}
              <div className="absolute content top-0 left-0 w-full h-full bg-[#32CD32] flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                <div className="tags text-5xl p-3  flex gap-3 text-black">
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaSquareGithub />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                </div>
                <p className="mb-4 text-black font-mono p-5 text-center">
                  {details.about}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



const ThirdYear = () => {
  
  const obj = [
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    
      
  ];
  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col  items-center py-8">
      {/* Section Heading */}

      <h1 className="mb-10 mt-10 text-2xl font-serif font-extrabold underline text-cyan-400">
        Third Year
      </h1>
      {/* Team Card Grid */}
      <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {obj.map((details, index) => (
          <motion.div initial={{opacity : 0 , y : 40}} whileInView={{opacity : 1 , y : 0}} transition={{duration : 1 , ease : "easeInOut"}}  key={index} className="flex justify-center items-center">
            <div className="relative w-[20rem]  cursor-pointer h-[25rem] overflow-hidden border-2 border-cyan-400 bg-white rounded-2xl group">
              {/* Team Member Image */}
              <div className="w-full img h-full flex justify-center items-center flex-col transition-all duration-500">
                <img
                  src={details.img}
                  alt={details.name}
                  className="h-[13rem] w-[13rem] rounded-full border-2 border-cyan-400 shadow-2xl shadow-cyan-400"
                />
                <div className="mt-6 text-center">
                  <p className="text-xl text-black">{details.domain}</p>
                  <p className="text-2xl font-bold text-black">
                    {details.name}
                  </p>
                  <img src={rec3} className="w-full absolute bottom-0 left-0" alt="" />
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute content top-0 left-0 w-full h-full border-cyan-400 bg-cyan-400 flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                <div className="tags text-5xl p-3  flex gap-3 text-black">
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaSquareGithub />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                </div>
                <p className="mb-4 text-black font-mono p-5 text-center">
                  {details.about}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


const SecondYear = () => {
  const obj = [
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    {
      img: Raghav,
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member. ",
    },
    
      
  ];

  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col  items-center py-8">
      {/* Section Heading */}

      <h1 className="mb-10 mt-10 text-2xl font-serif font-extrabold underline text-fuchsia-500">
        Second Year
      </h1>
      {/* Team Card Grid */}
      <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {obj.map((details, index) => (
          <motion.div initial={{opacity : 0 , filter : 'blur(30px)' , x : -20 }} whileInView={{opacity : 1 ,  filter : 'blur(0px)' , x : 0}} transition={{duration : 1 , ease : "easeInOut"}}  key={index} className="flex justify-center items-center">
            <div className="relative w-[20rem]  cursor-pointer h-[25rem] overflow-hidden border-2 border-fuchsia-500 bg-white rounded-2xl group">
              {/* Team Member Image */}
              <div className="w-full img h-full flex justify-center items-center flex-col transition-all duration-500">
                <img
                  src={details.img}
                  alt={details.name}
                  className="h-[13rem] w-[13rem] rounded-full border-2 border-fuchsia-500 shadow-2xl shadow-fuchsia-500"
                />
                <div className="mt-6 text-center">
                  <p className="text-xl text-black">{details.domain}</p>
                  <p className="text-2xl font-bold text-black">
                    {details.name}
                  </p>
                  <img src={rec2} className="w-full absolute bottom-0 left-0" alt="" />
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute content top-0 left-0 w-full h-full bg-fuchsia-500 flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-y-0  translate-y-full flex-col">
                <div className="tags text-5xl p-3  flex gap-3 text-black">
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaSquareGithub />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                </div>
                <p className="mb-4 text-black font-mono p-5 text-center">
                  {details.about}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
