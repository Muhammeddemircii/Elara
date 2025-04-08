'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentLanguage(i18n.language || 'en');
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>{t('language')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              className={`${currentLanguage === 'en' ? 'bg-slate-100 dark:bg-slate-700' : ''} block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700`}
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <button
              className={`${currentLanguage === 'tr' ? 'bg-slate-100 dark:bg-slate-700' : ''} block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700`}
              onClick={() => changeLanguage('tr')}
            >
              Türkçe
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 