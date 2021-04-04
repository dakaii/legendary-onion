import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translation_en from './translations/en/translation.json';
import translation_ja from './translations/ja/translation.json';
import translation_kr from './translations/kr/translation.json';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: { translation: translation_en },
            ja: { translation: translation_ja },
            kr: { translation: translation_kr },
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
