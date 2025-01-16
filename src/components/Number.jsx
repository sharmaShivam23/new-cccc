

import React from 'react';
import NumberTicker from './ui/number-ticker';

const Number = () => {
  return (
    <div className="w-full m-auto h-auto flex justify-center  text-xl sm:text-3xl font-bold items-center mt-10 sm:mt-28 mb-10  p-8">

      <div className="flex justify-around sm:gap-20 gap-10 font-poppins flex-col lg:flex-row w-full max-w-4xl">
     
        <div className="flex flex-col items-center">
          <div className="text-white mb-5">Followers</div>
          <div className="flex items-center">
            <NumberTicker
              value={1300}
              direction="up"
              delay={1}
              decimalPlaces={0}
              className="text-4xl font-bold text-white"
            />
            <span className="text-white text-xl">+</span>
          </div>
        </div>

      
        <div className="flex flex-col items-center">
          <div className="text-white mb-3">Members</div>
          <div className="flex items-center">
            <NumberTicker
              value={50}
              direction="up"
              delay={1}
              decimalPlaces={0}
              className="text-4xl font-bold text-white"
            />
            <span className="text-white text-xl">+</span>
          </div>
        </div>

       
        <div className="flex flex-col items-center">
          <div className="text-white mb-5">Hackathons</div>
          <div className="flex items-center">
            <NumberTicker
              value={4}
              direction="up"
              delay={1}
              decimalPlaces={0}
              className="text-4xl font-bold text-white"
            />
            <span className="text-white text-xl">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
