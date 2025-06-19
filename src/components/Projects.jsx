import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Motion = motion;

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true });

  return (
    <section id="projects" className="py-20 bg-indigo-50 text-indigo-900 px-6 md:px-20">
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-indigo-900">{t('projects.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, link, linkLabel }, idx) => (
            <Motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h3>
              <p className="text-gray-700 mb-4">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
              >
                {linkLabel}
              </a>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Projects;
