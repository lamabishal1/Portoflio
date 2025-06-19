import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 md:px-10 py-4 flex items-center justify-between relative flex-wrap">
       
        <div className="flex items-center space-x-2 shrink-0">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-800">Lama Bishal | Frontend Developer </span>
          <span className="font-semibold text-gray-800 text-sm md:text-base whitespace-nowrap">
            Lama Bishal | Frontend Developer
          </span>
        </div>78cbf9e1f82267286583897f40f7e55edb74

        
        <div className="hidden md:flex items-center space-x-2 md:space-x-4 text-xs md:text-sm whitespace-nowrap flex-shrink max-w-full overflow-visible flex-wrap">
          <a href="#hero" className="hover:text-blue-600 transition px-1">
            {t('nav.home')}
          </a>
          <a href="#about" className="hover:text-blue-600 transition px-1">
            {t('nav.about')}
          </a>
          <a href="#skills" className="hover:text-blue-600 transition px-1">
            {t('nav.skills')}
          </a>
          <a href="#projects" className="hover:text-blue-600 transition px-1">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="hover:text-blue-600 transition px-1">
            {t('nav.contact')}
          </a>

       
          <div className="ml-4 flex space-x-2 flex-shrink-0 min-w-[110px]">
            <button
              onClick={() => switchLanguage('ja')}
              className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-md border whitespace-nowrap ${
                currentLang === 'ja'
                  ? 'border-blue-600 bg-blue-200 text-blue-800'
                  : 'border-gray-400 bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition`}
            >
              日本語
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-md border whitespace-nowrap ${
                currentLang === 'en'
                  ? 'border-blue-600 bg-blue-200 text-blue-800'
                  : 'border-gray-400 bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition`}
            >
              EN
            </button>
          </div>
        </div>

        
        <button
          className="md:hidden text-gray-700 focus:outline-none ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        
        {menuOpen && (
          <div className="absolute right-4 top-full mt-2 bg-white shadow-lg rounded-lg py-2 px-4 w-auto min-w-[150px] z-50">
            <a
              href="#hero"
              className="block py-1 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.home')}
            </a>
            <a
              href="#about"
              className="block py-1 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#skills"
              className="block py-1 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.skills')}
            </a>
            <a
              href="#projects"
              className="block py-1 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.projects')}
            </a>
            <a
              href="#contact"
              className="block py-1 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <div className="pt-2 flex space-x-2">
              <button
                onClick={() => {
                  switchLanguage('ja');
                  setMenuOpen(false);
                }}
                className="text-sm hover:underline"
              >
                日本語
              </button>
              <button
                onClick={() => {
                  switchLanguage('en');
                  setMenuOpen(false);
                }}
                className="text-sm hover:underline"
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
