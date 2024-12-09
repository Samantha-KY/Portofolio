import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const CodeSymbols: React.FC = () => {
  const symbols = ['<>', '/>', '{;}', '[]', '()', '&&', '||', '=>', '++', '**'];
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -100 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: ['100%', '-100%'],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute text-accent font-fira-code"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-primary">
      {/* Animated Code Background */}
      <CodeSymbols />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-code-grid opacity-20"></div>
      
      <div className="section-container relative flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-accent font-fira-code">{'<'}</span>
            <p className="text-accent font-fira-code">Hello, World!</p>
            <span className="text-accent font-fira-code">{'/>'}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-text-light"
          >
            Samantha Murera Kayitete
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-text"
          >
            <span className="text-accent">const</span> role = "Developer"
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-text mb-8 font-fira-code"
          >
            <span className="text-accent">try</span> {'{'}
            <br />
            &nbsp;&nbsp;buildAwesomeThings();
            <br />
            &nbsp;&nbsp;solveComplexProblems();
            <br />
            {'}'} <span className="text-accent">catch</span> (error) {'{'}
            <br />
            &nbsp;&nbsp;drinkCoffee();
            <br />
            &nbsp;&nbsp;keepCoding();
            <br />
            {'}'}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary"
            >
              {'<Projects />'}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-secondary"
            >
              {'<Contact />'}
            </Link>
          </motion.div>

          {/* Terminal-style decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-8 right-8 hidden lg:block bg-secondary p-4 rounded-lg"
          >
            <pre className="text-accent font-fira-code text-sm">
              <code>{`> git status
> git add .
> git commit -m "Building amazing things"
> git push origin main`}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
