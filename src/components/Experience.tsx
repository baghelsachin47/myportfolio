import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    company: "Volkswagen Group Technology Solutions",
    role: "Software Engineer",
    period: "2022 - Present",
    description: `
    • Built web applications using Django.
    • Improved API performance by reducing request times through parallel processing with Celery and Redis.
    • Developed and maintained RESTful APIs for internal tools.
    • Developed internal tools in Python to automate repetitive tasks.
    • Collaborated with cross-functional teams to gather requirements and deliver solutions.
    • Used Git for version control and managed projects with Jira and Confluence.
    • Automated SAP GUI and SAP Fiori testing with TOSCA, using DEX for parallel execution
    • Promoted best practices and mentored team members on TOSCA and Jira workflows.`,
    technologies: ["Python", "Django","TOSCA"]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-10 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-7xl"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 relative"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 hidden md:block">
                    <div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white dark:bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-xl">
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <p className="custom-text-color text-base mb-2">{exp.company}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                    <ul className="mb-4 text-xs">
                      {exp.description.split('\n').map((line, index) => line && <li key={index}>{line}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20
                                   custom-text-color">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
