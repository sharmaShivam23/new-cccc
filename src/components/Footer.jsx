

import React from 'react';
import OrbitingCircles from './ui/orbiting-circles';
import Meteors from './ui/meteors';


const Footer = () => {
  return (
  
    <div className="h-screen w-screen bg-black overflow-hidden relative">
        <Meteors> </Meteors>
      <OrbitingCircles className="">
        {/* The image will be centered inside OrbitingCircles */}
      </OrbitingCircles>
    </div>
   
  );
};

export default Footer;
