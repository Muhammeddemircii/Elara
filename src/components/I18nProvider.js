'use client';

import { useEffect, useState } from 'react';
import '../i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export default function I18nProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted on client-side
    setMounted(true);
    
    // URL'den lng parametresini kontrol et
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lng');
      
      // URL'de dil parametresi varsa bu dili kullan
      if (urlLang) {
        i18n.changeLanguage(urlLang);
      }
      // Yoksa localStorage veya varsayılan dili kullan
      else {
        const storedLang = localStorage.getItem('i18nextLng');
        i18n.changeLanguage(storedLang || 'tr');
      }
    }
  }, []);

  // During SSR or before mounting, render without translations to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  // Only on client-side after mounting, render with proper translations
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 