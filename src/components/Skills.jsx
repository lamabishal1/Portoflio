import React from 'react';
import { motion } from 'framer-motion';

const Motion = motion;

const skills = [
  "React",
  "JavaScript",
  "Bootstrap / Tailwind CSS",
  "HTML5 / CSS3",
  "Git / GitHub",
  "AWS"
];

const practicing = [
  "Next.js",
  "TypeScript",
  "Node.js",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-indigo-900 px-6 md:px-20">
      <Motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">スキル / 技術スタック</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-indigo-800">習熟スキル</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3 text-indigo-800">現在練習中の技術</h3>
          <div className="flex flex-wrap gap-3">
            {practicing.map((tech, idx) => (
              <span
                key={idx}
                className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Skills;
