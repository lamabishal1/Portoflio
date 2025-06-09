import React from 'react';
import { motion } from 'framer-motion';

const Motion = motion;

const projects = [
  { title: "天気アプリ", description: "日本の都道府県に基づいて天気の詳細を選択して取得できます。", link: "https://japaneseweather-app.netlify.app/" },
  { title: "タスク ユーティリティ", description: "単語や文字を整理できます。ライトモードとダークモードがあります。", link: "https://taskutils.netlify.app/" },
  { title: "日本の休日カレンダー", description: "日本のカレンダーの月に基づいて休日を表示できます。", link: "https://jpholidaycalendar.netlify.app/" },
  { title: "マークダウン プレビューア", description: "ライブプレビューでプログラミングを記述および編集できます。", link: "https://markdnprev.netlify.app/" },
  { title: "ドラムマシン", description: "マウスまたはキーを使用してドラムの音を演奏します。", link: "https://drummac.netlify.app/" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-indigo-50 text-indigo-900 px-6 md:px-20">
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-indigo-900">プロジェクト</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, link }, idx) => (
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
                ライブデモ
              </a>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Projects;
