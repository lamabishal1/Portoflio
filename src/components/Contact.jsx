import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Motion = motion;

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-indigo-900 px-6 md:px-20">
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-indigo-900">お問い合わせ</h2>

        <div className="flex flex-col gap-6 text-lg text-indigo-700">
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-indigo-600" /> 
            Email: <a href="mailto:lb1627565@gmail.com" className="text-indigo-600 hover:underline">lb1627565@gmail.com</a>
          </p>

          <p className="flex items-center justify-center gap-3">
            <FaPhone className="text-indigo-600" /> 
            電話番号: <a href="tel:+818061292133" className="text-indigo-600 hover:underline">080-6129-2133</a>
          </p>

          <p className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-indigo-600" /> 
            住所: 埼玉、日本
          </p>

          <p className="flex items-center justify-center gap-3">
            <FaGithub className="text-indigo-600" />
            GitHub: <a href="https://github.com/lamabishal1" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">lamabishal1</a>
          </p>
        </div>

        <a
          href="/履歴書.pdf"
          download
          className="inline-block mt-12 px-10 py-4 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          履歴書をダウンロード
        </a>
      </Motion.div>
    </section>
  );
};

export default Contact;
