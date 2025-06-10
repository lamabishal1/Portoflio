import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-800">Lama Bishal</span>
        </div>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-blue-600 transition">ホーム</a>
          <a href="#about" className="hover:text-blue-600 transition">自己紹介</a>
          <a href="#skills" className="hover:text-blue-600 transition">スキル</a>
          <a href="#projects" className="hover:text-blue-600 transition">プロジェクト</a>
          <a href="#contact" className="hover:text-blue-600 transition">お問い合わせ</a>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute right-4 top-full mt-2 bg-white shadow-lg rounded-lg py-2 px-4 w-auto min-w-[150px] z-50">
            <a href="#hero" className="block py-1 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>ホーム</a>
            <a href="#about" className="block py-1 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>自己紹介</a>
            <a href="#skills" className="block py-1 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>スキル</a>
            <a href="#projects" className="block py-1 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>プロジェクト</a>
            <a href="#contact" className="block py-1 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>お問い合わせ</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
