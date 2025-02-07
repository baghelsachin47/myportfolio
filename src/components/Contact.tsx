import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>

        <div className="mt-8 text-center flex flex-col items-center justify-center">
          <p className="text-base mb-4">I'm open to new opportunities! Feel free to reach out,

                                      and I'll get back to you as soon as I can.</p>
          <a href="mailto:baghel.sachin47@gmail.com"><motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-1 bg-transparent backdrop-blur-md text-white rounded-lg text-base

                       transition-all duration-300 font-semibold text-base border-2
                       hover:border-white hover:text-white flex"
          >
            <Send className="w-5 h-5 my-1 mr-2" />Let's Connect
          </motion.button> </a>
        </div>
      </motion.div>
    </section>
  );
};
