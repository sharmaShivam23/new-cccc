

import React from 'react';
import OrbitingCircles from './ui/orbiting-circles';
import Meteors from './ui/meteors';
import logo from '../images/logo.svg'
import TypingAnimation from './ui/typing-animation';


const Landing = () => {
  return (
  <>
   <TypingAnimation
        duration={120}          
        delay={500}              
        startOnView={true}       
        className="text-white text-center text-lg sm:text-4xl  mt-7"
      >
        {"WELCOME! TO CLOUD COMPUTING CELL"} 
      </TypingAnimation>
    <div className="h-screen w-screen bg-black overflow-hidden relative">
         <Meteors/>
        {/* <img src={logo} className='absolute right-1/2 h-10' alt="" /> */}
      <OrbitingCircles className="">
        {/* The image will be centered inside OrbitingCircles */}
        <Meteors/>
      </OrbitingCircles>
    </div>
   </>
  );
};

export default Landing;
