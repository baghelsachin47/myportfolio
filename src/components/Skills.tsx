import React from 'react';
import { FaJs, FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase  } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiDjango } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-10 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-white/10 backdrop-blur-xl 
                         border border-white/20 shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-4 text-4xl">{skill.icon}</div>
                <span className="text-xs text-center skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
