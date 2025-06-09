import React from 'react';
import { motion } from 'framer-motion';

const Motion = motion;

const Footer = () => {
  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-indigo-900 text-indigo-200 py-6 text-center"
    >
      <p>© 2025 ラマ ビサル. All rights reserved.</p>
    </Motion.footer>
  );
};

export default Footer;
