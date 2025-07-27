import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ScrollDownIconProps {
  targetId: string;
}

export const ScrollDownIcon: React.FC<ScrollDownIconProps> = ({ targetId }) => {
  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="absolute left-1/2 -translate-x-1/2 bottom-10"
    >
      <motion.button
        onClick={scrollToSection}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-primary hover:text-primary-dark transition-colors duration-300 cursor-pointer"
      >
        <ArrowDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </motion.div>
  );
};
