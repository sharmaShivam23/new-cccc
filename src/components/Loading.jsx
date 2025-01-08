


import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {

  const obj = [
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
  ];

  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col items-center py-8">
      <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {obj.map((details, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center"
          >
            <div className="relative w-[20rem] cursor-pointer h-[25rem] overflow-hidden bg-[#333] rounded-3xl">
              <div className="w-full h-full flex justify-center items-center flex-col">
                <div className="h-[208px] w-[208px] bg-[#444] rounded-full animate-pulse"></div>

             
                <div className="mt-6 text-center">
                  <p className="bg-[#444] w-[185px] h-[28px] mb-2 animate-pulse"></p>

                  
                  <p className="bg-[#444] w-[185px] h-[32px] mt-1 font-bold animate-pulse"></p>

                
                  <div className="w-full absolute bottom-0 left-0 h-3 bg-[#444] animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
