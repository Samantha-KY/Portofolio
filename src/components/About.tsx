import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-secondary">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg">
              As an AI Development Strategist and Frontend Developer, I bridge the gap
              between innovative AI solutions and user-friendly web applications.
              With a strong foundation in software engineering and a passion for
              emerging technologies, I help organizations leverage AI to create
              impactful digital experiences.
            </p>
            <p className="text-lg">
              My expertise spans across modern web technologies, agile methodologies,
              and AI integration. I'm dedicated to creating scalable solutions that
              drive business value while maintaining excellent user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-primary rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <AcademicCapIcon className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">MSc in Engineering Management</p>
                  <p className="text-gray-600 dark:text-gray-400">Current</p>
                </li>
                <li>
                  <p className="font-medium">BSc in Software Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Adventist University of Central Africa
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-primary rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <BriefcaseIcon className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Core Competencies</h3>
              </div>
              <ul className="space-y-2">
                <li>• AI Strategy Development</li>
                <li>• Frontend Development (Next.js, React)</li>
                <li>• Agile Project Management</li>
                <li>• Team Leadership</li>
                <li>• Product Ownership</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
