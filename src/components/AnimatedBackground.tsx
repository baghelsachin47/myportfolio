import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Box: React.FC<{ size: number; maxWidth: number; maxHeight: number; index: number }> = ({ size, maxWidth, maxHeight, index }) => {
  const x = Math.random() * (maxWidth - size - 200); // Reduce initial x to allow more movement space
  const y = Math.random() * (maxHeight - size - 200); // Reduce initial y to allow more movement space
  const rotateStart = Math.random() * 360;
  const rotateEnd = rotateStart + (Math.random() < 0.5 ? 360 : -360);
  const duration = 15 + (Math.random() * 5);
  
  // Random movement ranges between 100-150 pixels
  const xMove = 100 + Math.random() * 50;
  const yMove = 100 + Math.random() * 50;

  return (
    <motion.div
      className="absolute border-2 dark:border-primary/50 border-primary/60 rounded-2xl
                 dark:bg-primary/20 bg-primary/15"
      style={{
        width: size,
        height: size,
      }}
      initial={{ x, y, rotate: rotateStart, opacity: 0 }}
      animate={{
        x: [x, x + xMove, x],
        y: [y, y + yMove, y],
        rotate: [rotateStart, rotateEnd],
        opacity: 0.4
      }}
      transition={{
        duration: duration,
        opacity: {
          duration: 1 + index * 0.2
        },
        rotate: {
          duration: duration * 1.2,
          ease: "linear"
        },
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        times: [0, 0.5, 1]
      }}
    />
  );
};

export const AnimatedBackground: React.FC = () => {
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080 
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      {Array.from({ length: Math.floor(dimensions.width / 250) * Math.floor(dimensions.height / 250) }).map((_, i) => (
        <Box 
          key={`box-${i}-${Math.random()}`}
           size={200} // Fixed size for all boxes
          maxWidth={dimensions.width}
          maxHeight={dimensions.height}
          index={i}
        />
      ))}
    </div>
  );
};
