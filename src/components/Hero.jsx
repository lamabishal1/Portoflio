import React from 'react';
import { motion } from 'framer-motion';

const Motion = motion;

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 text-black"
    >
      <Motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          こんにちは！ラマ ビサルです。
        </h1>
        <p className="text-2xl mb-6 drop-shadow-md">
         日本在住のフロントエンド開発者
        </p>
        <a
          href="#projects"
          className="inline-block bg-yellow-400 text-indigo-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          プロジェクトを見る'
        </a>
      </Motion.div>
    </section>
  );
};

export default Hero;
