import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/english.json'
import translationDA from './locales/danish'

const resources = {
    en: {
        translation: translationEN,
    },
    da: {
        translation: translationDA,
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
