import React from "react";
import OrbitingCircles from "./ui/orbiting-circles";
import logo from "../images/logo.svg";
import TypingAnimation from "./ui/typing-animation";
import A from "../images/A.png";
import B from "../images/B.png";
import C from "../images/C.png";
import D from "../images/D.png";
import black from "../images/black.jpeg";
import orbitbg from "../images/orbitbg.jpeg";
import { motion } from "framer-motion";
import ui from "../images/ui.png";
import Particles from "./ui/particles";
import Meteors from "./ui/meteors";
import ShimmerButton from "./ui/shimmer-button";
import ShineBorder from "./ui/shine-border";
import { BorderBeam } from "./ui/border-beam";
import { useNavigate } from "react-router-dom";


const Landing = () => {
  let navigate = useNavigate()
  function register(){
    navigate("/Register")
  }
  return (
    <>
      <div className="">
        <div className="h-screen w-screen bg-black z-40 overflow-hidden relative">
          <Particles />
          <Meteors />
          <OrbitingCircles className="">
            <Particles />
          </OrbitingCircles>

          <div className="absolute inset-0 flex flex-col mb-96 justify-center items-center text-white text-center px-4">
            <TypingAnimation
              duration={60}
              delay={0}
              startOnView={true}
              className="text-white text-xl md:text-5xl font-bold"
            >
              {"Be part of the future of Lorem "}
            </TypingAnimation>
            <TypingAnimation
              duration={100}
              delay={200}
              startOnView={true}
              className="text-white text-xl md:text-4xl mt-1 sm:mt-4 font-bold"
            >
              {"Cloud Computing Lorem,"}
            </TypingAnimation>
            <p className="text-white mt-4 text-xs md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              amet
              <br /> Voluptate sunt iure at iste fugiat veritatis obcaeca
            </p>

            <div className="text-white z-40 text-xl md:text-xl mt-4 font-bold">
              <ShimmerButton onClick={register} className="cursor-pointer hover:scale-125 transition-all ease-in-out duration-1000 delay-0">
                Register
              </ShimmerButton>
            </div>
          </div>

          <div className="absolute inset-0 flex sm:flex-col justify-center items-center sm:max-w-[90vw] w-full  text-white text-center px-4">
            <ShineBorder
              borderRadius={8}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2  hidden md:block  absolute left-36 bottom-40"
            >
              <h1 className="text-2xl font-bold bg-transparent text-white text-center">
                Hello, World!
              </h1>
            </ShineBorder>
            
            <ShineBorder
              borderRadius={8}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 hidden md:block justify-center  text-center  absolute ml-7 right-0 bottom-40"
            >
              <h1 className="text-2xl font-bold  bg-transparent text-white text-center">
                Hello, Coders!
              </h1>
            </ShineBorder>

            <ShineBorder
              borderRadius={5}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 md:hidden block  justify-center  text-center  absolute bottom-40"
            >
              <h1 className=" text-lg sm:text-2xl font-bold  bg-transparent text-white text-center">
                Hello, Coders!
              </h1>
            </ShineBorder>

           <div className="absolute max-[400px]:hidden max-w-[90vw] m-auto top-60 right-10 sm:right-16">
            <img
              src={D}
              className="h-28 sm:h-40 max-[1000px]:h-24 animate-bounce"
              alt="D"
            />
          </div>
          <div className="absolute  max-[400px]:hidden max-w-[90vw] m-auto top-60  left-10 sm:left-60">
            <img
              src={C}
              className="h-28 sm:h-40  max-[1000px]:h-24 animate-bounce"
              alt="C"
            />
          </div>
        </div>

          <div className="absolute top-1/2 left-1/2 -z-10 mt-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 450 }}
              transition={{ duration: 2, ease: "easeIn" }}
            >
              <img src={orbitbg} className="" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;


