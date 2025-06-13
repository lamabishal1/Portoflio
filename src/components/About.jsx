import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Motion = motion;

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-indigo-50 text-indigo-900 px-6 md:px-20">
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
        <p className="text-lg mb-4 leading-relaxed">
          {t('about.description1')}
        </p>
        <p className="text-lg leading-relaxed">
          {t('about.description2')}
        </p>
      </Motion.div>
    </section>
  );
};

export default About;
