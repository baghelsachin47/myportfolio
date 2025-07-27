import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, MailIcon, Gamepad2, RssIcon, Share2, School, Video } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: "HexMail",
    description: "Discord bot that integrates Gmail accounts with Discord servers, enabling real-time notifications and basic email functionality.",
    icon: <MailIcon className="w-12 h-12 text-primary" />,
    technologies: ["Python3", "Discord API", "postgresql", "Gmail-API","PubSub Model", "MultiProcessing"],
    githubUrl: "https://github.com/baghelsachin47/HexMail",
  },
  {
    title: "Endless Runner",
    description: "Created an endless runner game inspired by Subway Surfer, where players aim to collect coins while navigating obstacles",
    icon: <Gamepad2 className="w-12 h-12 text-primary" />,
    technologies: ["Unreal Engine 5", "UE5 Blueprints", "Game-Development", "freeassets"],
    githubUrl: "https://github.com/baghelsachin47/EndlessRunner",
    // liveUrl: "https://example.com"
  },
  {
    title: "ClipCraft",
    description: "ClipCraft is standalone application to reduse the size of video via multiple compression techniques using ffmpeg.",
    icon: <Video className="w-12 h-12 text-primary" />,
    technologies: ["Python3", "ffmpeg", "tkinter"],
    githubUrl: "https://github.com/baghelsachin47/ClipCraft",
  },
  {
    title: "Blog Website",
    description: "Developed a blog website where users can upload images, manage their own posts, and view all the posts from other users.",
    icon: <RssIcon className="w-12 h-12 text-primary" />,
    technologies: ["Python3", "Django", "sqlite3", "JavaScript", "HTML/CSS", "Bootstrap"],
    githubUrl: "https://github.com/baghelsachin47/Blog",
  },
  {
    title: "File Share",
    description: " File-sharing application that enables users to share large files over a hot-spot or local network.",
    icon: <Share2 className="w-12 h-12 text-primary" />,
    technologies: ["Python3", "Kivy", "MultiProcessing", "JavaScript", "HTML/CSS", "Bootstrap"],
    githubUrl: "https://github.com/baghelsachin47/FileShare",
  },
  {
    title: "MSMS",
    description: "Multi-School Management System to track Attendance and  information of everyone in School and able to handle multiple schools.",
    icon: <School className="w-12 h-12 text-primary" />,
    technologies: ["Python3", "Django", "JavaScript", "HTML/CSS", "tailwindCSS","postgresql"],
    githubUrl: "https://github.com/baghelsachin47/SchoolManagementSystem",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-10 px-4 relative overflow-hidden"> {/* Restored padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-7xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-white/10 backdrop-blur-xl 
                         border border-white/20 shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-center">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-center text-xs">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xxs rounded-full bg-primary/10 dark:bg-primary/20
                               custom-text-color">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 justify-center">
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
