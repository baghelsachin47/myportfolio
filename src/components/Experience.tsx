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
    • Developed a web application from scratch using Django and the Django Rest Framework.
    • Enhanced server API performance by significantly reducing request times through parallel processing using Celery and Redis.
    • Utilized Git for version control, Managed project timelines and tasks using Jira and Confluence for projectManagement.
    • Participated in a roadshow and developed interactive fun Games like Tic Tac Toe and snake game, where users controlled game play with Fingers gestures. Python and Computer Vision as back-end while JavaScript handled the front-end.
    • Collaborated with team members to develop an innovative idea utilizing Power Apps and Power Automate.
    • Developed internal tools and scripts in Python to automate repetitive tasks and improve team productivity.
    • Promoted best coding practices and continuous learning within the team.
    • Actively contributed to the Python community within the company.
    `,
    technologies: ["Python", "Django"]
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
        
        <div className="max-w-3xl mx-auto">
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
                <div className="mt-1">
                  <div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white dark:bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-xl">
                    <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                    <p className="custom-text-color mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                    <ul className="mb-4">
                      {exp.description.split('\n').map((line, index) => line && <li key={index}>{line}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 dark:bg-primary/20
                                   custom-text-color"
                        >
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
