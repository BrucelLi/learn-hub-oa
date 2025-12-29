import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'zh',
    lng: 'zh',
    ns: ['common', 'auth', 'verify'],
    defaultNS: 'common',
    backend: {
      loadPath: '/src/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n
