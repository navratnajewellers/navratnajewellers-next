'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const AnimatedText = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className=" font-bold cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          // className="text-white"
          style={{ color: 'rgb(255,255,255)' }}
          initial={{ color: 'rgb(255,255,255)' }} // Orange color
          animate={{ color: hovered ? 'rgb(255 234 8)' : 'rgb(255,255,255)' }}
          transition={{
            duration: 0.2,
            delay: index * 0.05, // Creates a wave effect on hover
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
