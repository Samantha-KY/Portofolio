import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills: React.FC = () => {
  const categories = ['frontend', 'tools', 'soft-skills'];
  const categoryTitles = {
    frontend: 'Frontend Development',
    tools: 'Tools & Technologies',
    'soft-skills': 'Leadership & Management',
  };

  return (
    <section id="skills" className="bg-gray-50 dark:bg-secondary">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-primary rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>

              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 dark:bg-secondary rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <p className="font-medium">{skill.name}</p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600 dark:text-gray-400"
        >
          <p className="text-lg">
            Continuously learning and adapting to new technologies and methodologies
            to deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
