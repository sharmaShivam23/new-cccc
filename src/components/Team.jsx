import React from "react";
import team from "../images/23team.png";
import { motion } from "framer-motion";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { useNavigate } from "react-router-dom";
import bgcards from "../images/bgcards.svg";
import black from '../images/black.jpeg'
import orbitbg from '../images/orbitbg.jpeg'

const Team = () => {
  const navigate = useNavigate();
  const teamcard = () => {
    navigate("/Team");
  };
  return (
    <div
      id="team"
      className="h-auto lg:h-screen mb-32 w-full max-[1000px]:mt-36 flex justify-center items-center mt-16  m-5">
      <div
      //  style={{
      //   backgroundImage: `url(${orbitbg})`,
      //   backgroundSize: "50%",
      //   backgroundPosition: 'center',
      //   backgroundRepeat : "no-repeat"        
                    
      // }}
        className="h-auto psud   text-white sm:p-9 w-full bg-neutral-800 border-2 shadow-xl border-white rounded-3xl sm:max-w-[80vw] mx-auto"
      >
        <motion.h1
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-white text-center text-2xl sm:text-5xl font-rubik sm:mb-10 mb-4 md:text-6xl  font-bold"
        >
          Who Are We
        </motion.h1>

        <section className="flex flex-col xl:flex-row justify-center items-center gap-8 lg:gap-16">
          <motion.div
            initial={{filter: "blur(10px)", opacity: 0 }}
            whileInView={{filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2  flex justify-center items-center"
          >
            
            <img
              src={team}
              alt="Cloud Computing Cell Team"
              className="rounded-lg object-cover shadow-lg w-[85%]"
            />
          </motion.div>

          <motion.div
            initial={{ translateX: 100, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
            className="w-full px-2 xl:w-1/2  max-[900px]:p-5   text-xs md:text-xl xl:text-2xl  font-serif text-center lg:text-left"
          >
            <p className="font-major tracking-wider">
            Our team is a vibrant mix of individuals from diverse backgrounds, each bringing unique skills and a shared passion for technology. From budding developers to experienced engineers, we collaborate to explore and innovate in the fields of Web Development, Machine Learning, Cloud Computing, and UI/UX Design.We believe in supporting one another, sharing knowledge, and working together on real-world projects  With a strong focus on growth and collaboration, we aim to empower every member to reach their full potential in the ever-evolving tech landscape.


            </p>
          </motion.div>
        </section>
        <div className="flex justify-center items-center mt-7">
          <InteractiveHoverButton
            onClick={teamcard}
            className="text-black text-xs sm:text-lg font-playwrite  font-extrabold mb-2"
          >
            More
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default Team;

// import React from "react";
// import Team from "../images/Team.svg";
// import team from "../images/23team.png";
// import { motion } from "framer-motion";
// import { BorderBeam } from "@/components/BorderBeam"; // Import BorderBeam component

// const Team = () => {
//   return (
//     <div id="team" className="h-auto sm:h-screen w-full flex justify-center items-center m-5 relative">
//       {/* Add BorderBeam component here */}
//       <BorderBeam
//         size={720}  // Adjust size if needed
//         duration={15}  // Adjust duration if needed
//         anchor={90}  // Default value (adjust if needed)
//         borderWidth={2}  // Border width
//         colorFrom="#ffaa40"  // Border color start
//         colorTo="#9c40ff"  // Border color end
//         delay={0.5}  // Delay for animation (adjust as needed)
//         className="absolute inset-0 z-0"  // Ensure the BorderBeam covers the container and sits behind content
//       />

//       {/* Content inside the container */}
//       <div className="h-auto bg-neutral-800 text-white sm:p-9 w-full border-2 shadow-xl border-white rounded-3xl sm:max-w-[80vw] mx-auto relative z-10">
//         <motion.h1
//           initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
//           whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
//           transition={{ duration: 1.5, delay: 0.5 }}
//           className="text-white text-center text-2xl sm:text-5xl sm:mb-10 mb-4 md:text-6xl underline font-bold"
//         >
//           Who Are We
//         </motion.h1>

//         <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
//           <motion.div
//             initial={{ rotateX: 360 }}
//             whileInView={{ rotateX: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full lg:w-1/2 flex justify-center items-center"
//           >
//             <img
//               src={team}
//               alt="Cloud Computing Cell Team"
//               className="rounded-lg object-cover shadow-lg w-[85%]"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ translateX: 100, opacity: 0, filter: "blur(10px)" }}
//             whileInView={{ translateX: 0, opacity: 1, filter: "blur(0px)" }}
//             transition={{ type: "spring", stiffness: 50, duration: 1 }}
//             className="w-full px-2 lg:w-1/2 text-xs md:text-2xl font-serif text-center lg:text-left"
//           >
//             <p>
//               Cloud Computing Cell has been a part of Ajay Kumar Garg
//               Engineering College since February 2016.
//             </p>
//             <p>
//               The members are exposed to the latest Cloud Technologies that
//               enable them to be market-ready, thereby increasing their
//               opportunities in placement and research.
//             </p>
//             <p>
//               It provides a platform for students to compute, manage, and deploy
//               cloud-related services.
//             </p>
//             <p>
//               The Cell is coordinated by Dr. J.K. Seth, Ms. Anupama Sharma, and
//               Dr. Parneet Kaur, faculty members of the IT department.
//             </p>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Team;
