import React from 'react';
import { motion } from 'framer-motion';

const Motion = motion;

const About = () => {
  return (
    <section id="about" className="py-20 bg-indigo-50 text-indigo-900 px-6 md:px-20">
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">自己紹介</h2>
        <p className="text-lg mb-4 leading-relaxed">
          こんにちは！日本在住のWeb開発者です。Reactなどの最新のWeb技術を活用し、使いやすくレスポンシブなウェブサイトとWebアプリを作ることが得意です。
        </p>
        <p className="text-lg leading-relaxed">
          高品質なデジタル体験を創造する革新的なチームに貢献したいと考えています。日本でのキャリアをさらに発展させ、スキルを磨きながら、意義のあるプロジェクトに携わることを目指しています。
        </p>
      </Motion.div>
    </section>
  );
};

export default About;
