import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Confetti from "./ui/confetti";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBg";

const Success = () => {
  const name = localStorage.getItem("registeredName");
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/"); // adjust your home route accordingly
  };

  return (
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden px-4 py-10">
      {/* Confetti animation */}
     
    <div className="absolute top-0 inset-0 flex justify-center  pointer-events-none z-[100]">
  <Confetti spread={1000} />
  <Confetti spread={1000} />
  <Confetti spread={1000} />
</div>


      {/* Main Card */}

      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[700px] bg-[#111111] text-white rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-[#2A2A2A] px-10 py-10 flex flex-col items-center text-center space-y-4"
      >
        {/* User Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-4xl font-bold text-violet-400"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300"
        >
          You are
        </motion.p>

        {/* Check Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-green-500"
        >
          <FaCheckCircle className="text-[100px] sm:text-[150px] drop-shadow-lg" />
        </motion.div>

 <ParticlesBackground/>
        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-violet-700 hover:bg-violet-800 transition-all duration-300 text-white font-semibold text-lg sm:text-xl py-3 px-6 rounded-md shadow-md"
        >
          Successfully Registered
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 font-medium mt-2"
        >
          For
        </motion.p>

        {/* Event Name with glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-4xl sm:text-5xl font-extrabold text-violet-500 tracking-wider glow-text"
        >
          Nimbus 2.0
        </motion.div>

        {/* Event Dates */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-lg sm:text-xl text-white mt-4 font-semibold"
        >
          Save the Dates:
          <br />
          <span className="text-violet-300 font-bold">13th - 14th May 2025</span>
        </motion.p>

        {/* Tech message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-sm sm:text-base text-gray-400 mt-2"
        >
          Get ready to stand out from the crowd and level up your skills in
          <br />
          emerging and advanced technologies.
        </motion.p>

        {/* Go to Home Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleHome}
          className="mt-6 bg-white text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Go to Home
        </motion.button>
      </motion.div>

      {/* Glow effect with Tailwind custom class */}
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 10px #8b5cf6, 0 0 20px #8b5cf6;
          }
        `}
      </style>
    </div>
  );
};

export default Success;
