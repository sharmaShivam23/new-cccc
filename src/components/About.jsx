import React from "react";
import Team from "../images/Team.svg";
import team from "../images/23team.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="team" className="h-auto  sm:h-screen w-full flex justify-center items-center  m-5 ">
      <div className="h-auto psud bg-neutral-800 text-white p-2 sm:p-9 w-full border-2 shadow-xl border-white rounded-3xl sm:max-w-[80vw] mx-auto">
        <motion.h1
          initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-white text-center text-2xl sm:text-5xl mb-4 md:text-6xl underline font-bold"
        >
          Who Are We
        </motion.h1>

        <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <motion.div
            initial={{ rotateX: 360 }}
            whileInView={{ rotateX: 0 }}
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
            // transition={{ duration: 1 }}
            transition={{type: "spring", stiffness: 50, duration: 1}}
            className="w-full lg:w-1/2 text-lg md:text-2xl font-serif text-center lg:text-left"
          >
            <p>
              Cloud Computing Cell has been a part of Ajay Kumar Garg
              Engineering College since February 2016.
            </p>
            <p>
              The members are exposed to the latest Cloud Technologies that
              enable them to be market-ready, thereby increasing their
              opportunities in placement and research.
            </p>
            <p>
              It provides a platform for students to compute, manage, and deploy
              cloud-related services.
            </p>
            <p>
              The Cell is coordinated by Dr. J.K. Seth, Ms. Anupama Sharma, and
              Dr. Parneet Kaur, faculty members of the IT department.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
