// src/components/BorderBeam.jsx

import React from 'react';
import { motion } from 'framer-motion';

const BorderBeam = ({
  size = 20,
  duration = 1,
  anchor = 90,
  borderWidth = 2,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  delay = 0.5,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={`border-2 border-solid ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${borderWidth}px`,
        borderImage: `linear-gradient(${anchor}deg, ${colorFrom}, ${colorTo})`,
        borderImageSlice: 1,
      }}
    />
  );
};

export { BorderBeam };
