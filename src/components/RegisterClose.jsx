import React from "react";
import { BorderBeam } from "./ui/border-beam";
import { motion } from "framer-motion";
import ShimmerButton from "./ui/shimmer-button";
// import notfound from "../images/404.png";
// import { motion, useInView } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Particles from "./ui/particles";
import notfound from "../images/notfound.png";
import think from "../images/think.png";
import { CoolMode } from "./ui/cool-mode";
import MorphingText from "./ui/morphing-text";

const RegisterClose = () => {
  const navigate = useNavigate();
  function home() {
    navigate("/");
  }
  return (
    <>
      <Particles />
      <div className="max-w-[90vw] z-50 m-auto h-auto md:h-screen flex-col  flex justify-center items-center">
        <div>
          <p className="text-white sm:text-4xl text-2xl mt-6 font-bold text-center">
            We're sorry, registrations are  closed.
          </p>
          <img src={notfound} className="sm:h-[70vh] h-[40vh]" alt="" />
        </div>
        <div
          onClick={home}
          className="flex justify-center text-center items-center mt-3"
        >
          <ShimmerButton className="mb-20 sm:mb-2">Back to Home</ShimmerButton>
          {/* <CoolMode></CoolMode> */}
        </div>
      </div>
    </>
  );
};

export default RegisterClose;

