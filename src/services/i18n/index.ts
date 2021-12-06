import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import PTBR from './languages/pt-br.json'

const resources = {
  'pt-BR': PTBR
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n