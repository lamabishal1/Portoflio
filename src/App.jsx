import React from 'react';
import ProfilePic from "/profile.png";
import './App.css'; 
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const skills = [
    "JavaScript ",
    "Bootstrap / Tailwind CSS",
    "HTML5 / CSS3",
    "Git / GitHub",
    "React"
  ];
  const practicing = [
    "Next js",
    "TypeScript",
    "React Native",
    "AWS"
  ];

  const content = {
    jp: {
      title: "自己紹介",
      selfIntro: "こんにちは！日本在住のWeb開発者です。Reactなどの最新のWeb技術を活用し、使いやすくレスポンシブな ウェブサイトとWebアプリを作ることが得意です。",
      motivation: "私は高品質なデジタル体験を創造する革新的なチームに貢献したいと考えています。日本でのキャリアをさらに発展させ、スキルを磨きながら、意義のあるプロジェクトに携わることを目指しています。",
      projects: [
        { title: "映画ギャラリー", 
          description: "APIを使って映画を検索するウェブサイト。", 
          link: "https://github.com/lamabishal1/Movie-Gallery" },
        { title: "タスク ユーティリティ",
           description: "文字や単語を整理するのに役立つウェブサイトです。", 
           link: "https://github.com/lamabishal1/TaskUtils" }
      ],
      otherProjects: [
        { title: "ミニ カレンダー", 
          description: "リアルタイムの日付、曜日、年を表示するミニカレンダー。", 
          link: "https://github.com/lamabishal1/Mini-Calender" },
        { title: "ハート トレイル アニメーション", 
          description: "マウスをホバーしてお楽しみください！。", 
          link: "https://github.com/lamabishal1/heart-trail-animation" },
        { title: "プロジェクト4", 
          description: "フルスタックのToDoリストアプリストアプリストアプリ。", 
          link: "https://github.com/yourusername/project4" }
      ],
      profile: {
        name: "ラマ ビサル",
        position: "ウェブ開発者",
        email: "lb1627565@gmail.com",
        location: "埼玉、日本",
        github: "https://github.com/lamabishal1"
      }
    }
  };

  return (
    <div className="min-vh-100">
      <div className="container pt-4">
        <div className="row mt-4">
          <div className="col-md-4 text-center mb-4">
            <img
              src={ProfilePic}
              alt="ProfilePic"
              className="img-fluid rounded-circle mb-2"
              style={{ width: '150px', height: '150px', objectFit: 'cover', objectPosition: 'center' }}
            />
            <h3 className="mb-1">{content.jp.profile.name}</h3>
            <p className="mb-1">{content.jp.profile.position}</p>
            <p className="mb-1">{content.jp.profile.email}</p>
            <p className="mb-1">{content.jp.profile.location}</p>
            
            <a
              href={content.jp.profile.github}
              className="github-link" 
            >
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{color: "black"}}/>
              </a>
            </a>
            <div className="mt-3">
              <a href="/履歴書.pdf" className="btn-common" download>履歴書</a>
            </div>
          </div>

          <div className="col-md-8">
            <div className="mb-4">
              <h4>{content.jp.title}</h4>
              <p>{content.jp.selfIntro}</p>
            </div>

            <div className="mb-4">
              <h4>志望動機</h4>
              <p>{content.jp.motivation}</p>
            </div>

            <div className="mb-4">
              <h4>スキル / 技術スタック</h4>
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="badge bg-secondary p-2 fs-6">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4>現在練習中の技術</h4>
              <div className="d-flex flex-wrap gap-2">
                {practicing.map((tech, index) => (
                  <span key={index} className="badge bg-secondary p-2 fs-6">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4>プロジェクト</h4>
              <div className="row">
                {content.jp.projects.map((project, index) => (
                  <div key={index} className="col-sm-6 col-md-4 mb-4 ">
                    <div className="card border-0 ">
                      <div className="card-body ">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.link} target='blank' className="btn-common">GitHubで見る</a>        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4>その他の小さなプロジェクト</h4>
              <div className="row">
                {content.jp.otherProjects.map((project, index) => (
                  <div key={index} className="col-sm-6 col-md-4 mb-4">
                    <div className="card border-0">
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.link} target='blank' className="btn-common">GitHubで見る</a>        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
