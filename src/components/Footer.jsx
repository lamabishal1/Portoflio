import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Motion = motion;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-indigo-900 text-indigo-200 py-6 text-center"
    >
      <p>© 2025 ラマ ビサル. {t('footer.allRights')}</p>
    </Motion.footer>
  );
};

export default Footer;
