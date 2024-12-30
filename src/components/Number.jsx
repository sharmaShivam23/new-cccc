

import React from 'react';
import NumberTicker from './ui/number-ticker';

const Number = () => {
  return (
    <div className="w-full m-auto h-80 flex justify-center  text-xl sm:text-5xl font-bold items-center  p-8">

      <div className="flex justify-around sm:gap-20 gap-10  flex-col sm:flex-row w-full max-w-4xl">
     
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
          <div className="text-white mb-5">Members</div>
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
