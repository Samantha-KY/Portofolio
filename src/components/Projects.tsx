import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white dark:bg-primary">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-secondary rounded-lg overflow-hidden shadow-lg"
            >
              {/* <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div> */}

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
