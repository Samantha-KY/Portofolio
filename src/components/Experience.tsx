import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-white dark:bg-primary">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-accent/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-accent" />
              </div>

              {/* Content */}
              <div className="bg-gray-50 dark:bg-secondary rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold text-accent mb-2">
                  {experience.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.company} • {experience.period}
                </p>
                <ul className="space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
