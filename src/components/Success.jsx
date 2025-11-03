// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Confetti from "./ui/confetti";
// import { useNavigate } from "react-router-dom";
// import ParticlesBackground from "./ParticlesBg";

// const Success = () => {
//   const name = localStorage.getItem("registeredName");
//   const navigate = useNavigate();

//   const handleHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden px-4 py-10">
  
     
//     <div className="absolute top-0 inset-0 flex justify-center  pointer-events-none z-[100]">
//   <Confetti spread={1000} />
//   <Confetti spread={1000} />
//   <Confetti spread={1000} />
// </div>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-20 w-full max-w-[700px] bg-[#111111] text-white rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-[#2A2A2A] px-10 py-10 flex flex-col items-center text-center space-y-4"
//       >
        
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-2xl sm:text-4xl font-bold text-violet-400"
//         >
//           {name}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-lg sm:text-xl text-gray-300"
//         >
//           You are
//         </motion.p>

    
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-green-500"
//         >
//           <FaCheckCircle className="text-[100px] sm:text-[150px] drop-shadow-lg" />
//         </motion.div>

//  <ParticlesBackground/>
    
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="bg-violet-700 hover:bg-violet-800 transition-all duration-300 text-white font-semibold text-lg sm:text-xl py-3 px-6 rounded-md shadow-md"
//         >
//           Successfully Registered
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="text-gray-400 font-medium mt-2"
//         >
//           For
//         </motion.p>

    
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9 }}
//           className="text-4xl sm:text-5xl font-extrabold text-violet-500 tracking-wider"
//         >
//           SPOCC'25
//         </motion.div>

      
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.1 }}
//           className="text-lg sm:text-xl text-white mt-4 font-semibold"
//         >
//           Save the Date :
//           <br />
//           <span className="text-violet-300 font-bold">2nd september 2025</span>
//         </motion.p>

//         {/* Tech message */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="text-sm sm:text-base text-gray-400 mt-2"
//         >
//           Get ready to stand out from the crowd and level up your skills in
//           <br />
//           emerging and advanced technologies.
//         </motion.p>

//         {/* Go to Home Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleHome}
//           className="mt-6 bg-white text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
//         >
//           Go to Home
//         </motion.button>
//       </motion.div>

//       {/* Glow effect with Tailwind custom class */}
//       <style>
//         {`
//           .glow-text {
//             text-shadow: 0 0 10px #8b5cf6, 0 0 20px #8b5cf6;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Success;


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
    navigate("/");
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#050505] via-[#0a021f] to-black flex items-center justify-center overflow-hidden px-4 py-10">
      {/* Animated Particles */}
      <ParticlesBackground />

      {/* Confetti burst */}
      <div className="absolute top-0 inset-0 flex justify-center pointer-events-none z-[100]">
        <Confetti spread={1000} />
        <Confetti spread={1000} />
        <Confetti spread={1000} />
      </div>

      {/* Success Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[720px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] rounded-3xl p-10 sm:p-12 flex flex-col items-center text-center space-y-5"
      >
        {/* Pulsing glow behind icon */}
        <div className="absolute -top-16 sm:-top-20 w-60 h-60 bg-violet-600/20 rounded-full blur-[100px] animate-pulse" />

        {/* Registered Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]"
        >
          {name}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300"
        >
          You are officially
        </motion.p>

        {/* Check Icon with pulse ring */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-green-500/10 animate-ping" />
          <FaCheckCircle className="text-green-400 text-[100px] sm:text-[150px] drop-shadow-[0_0_30px_rgba(34,197,94,0.4)] relative z-10" />
        </motion.div>

        {/* Successfully Registered Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3 rounded-xl text-white font-semibold text-lg sm:text-xl shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          Successfully Registered
        </motion.div>

        {/* “For” line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 font-medium mt-2"
        >
          For
        </motion.p>

        {/* SPOCC Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 tracking-widest drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          SPOCC'25
        </motion.div>

        {/* Event Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg sm:text-xl text-white mt-4 font-semibold"
        >
          Save the Date:
          <br />
          <span className="text-violet-300 font-bold glow-text">
            2nd September 2025
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed"
        >
          Get ready to stand out and unlock your potential in
          <br />
          cutting-edge and emerging technologies.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(168,85,247,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleHome}
          className="mt-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
        >
          Go to Home
        </motion.button>
      </motion.div>

      {/* Neon Text Glow */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 8px #8b5cf6, 0 0 15px #8b5cf6;
        }
      `}</style>
    </div>
  );
};

export default Success;
