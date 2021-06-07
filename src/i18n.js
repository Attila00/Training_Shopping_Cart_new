import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// for passing in lng and translations on init
const languages = ['en', 'hin'];

i18n
  .use(Backend)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    lng:'en',
    debug: false,
    load: 'currentOnly',
    whitelist:languages,
  });
export default i18n;