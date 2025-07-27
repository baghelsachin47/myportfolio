import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ScrollDownIcon } from './ScrollDownIcon';
import profilePhoto from '../../assets/Profile_pic.jpg'
import Resume from '../../assets/Sachin_Baghel_Resume.pdf'

export const Hero: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-center mb-6">
          <motion.img 
            src={profilePhoto} 
            alt="Profile"
            className="w-40 h-40 rounded-full"
            />
        </div>
        <motion.h1 
          className="flex flex-col justify-center text-4xl md:text-5xl font-bold text-center mb-6 text-primary"
        >
          <p className="text-lg">Hey, I'm</p> <p className='custom-text-color'>Sachin Baghel</p><p className="text-lg pt-3">I design things for the web</p>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base md:text-base text-center mb-8 dark:text-gray-300 text-gray-700">
          Experienced software engineer with a strong background in backend development and SAP test automation. Over
          3 years of hands-on experience with Python, Django, JavaScript, and TOSCA in delivering high-performance
          applications and tools.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05, border: "2px solid white" }} // Change border color to white on hover
            whileTap={{ scale: 0.95 }}
            href={Resume}
            className="px-4 py-1 bg-transparent backdrop-blur-md text-blue-600 rounded-lg 
                       transition-all duration-300 font-semibold text-base border-2 border-transparent 
                       hover:border-white hover:text-white"
          >
            Download Resume
          </motion.a>
          <div className="flex gap-4">
            <SocialLink href="https://github.com/baghelsachin47" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/sachin-baghel-a71a78216/" icon={<Linkedin />} />
            <SocialLink href="mailto:baghel.sachin47@gmail.com" icon={<Mail />} />
          </div>
        </motion.div>
      </div>
      <ScrollDownIcon targetId="experience" />
    </motion.section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full dark:bg-white/10 bg-black/10 hover:bg-opacity-30 
               transition-all duration-300"
  >
    {icon}
  </motion.a>
);
