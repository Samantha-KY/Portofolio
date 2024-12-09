import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/murera-kayitete-samantha/',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: '#',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create the email content
    const emailContent = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    try {
      // Using mailto link to open default email client
      const mailtoLink = `mailto:mureraksamantha@gmail.com?subject=Portfolio Contact Form&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-primary">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-text">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Form */}
            <div className="bg-secondary rounded-lg p-6 shadow-lg border border-accent border-opacity-20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-text-light">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary border border-accent border-opacity-20 text-text-light focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-text-light">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary border border-accent border-opacity-20 text-text-light focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-text-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary border border-accent border-opacity-20 text-text-light focus:border-accent focus:outline-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-accent mt-2">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 mt-2">Error sending message. Please try again.</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-secondary rounded-lg p-6 shadow-lg border border-accent border-opacity-20">
                <h3 className="text-xl font-semibold mb-4 text-text-light">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:mureraksamantha@gmail.com"
                    className="flex items-center gap-3 text-text hover:text-accent"
                  >
                    <EnvelopeIcon className="h-6 w-6" />
                    <span>mureraksamantha@gmail.com</span>
                  </a>
                  <a
                    href="https://samantha-portfolio.vercel.app"
                    className="flex items-center gap-3 text-text hover:text-accent"
                  >
                    <GlobeAltIcon className="h-6 w-6" />
                    <span>.......</span>
                  </a>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6 shadow-lg border border-accent border-opacity-20">
                <h3 className="text-xl font-semibold mb-4 text-text-light">Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text hover:text-accent transition-colors"
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
