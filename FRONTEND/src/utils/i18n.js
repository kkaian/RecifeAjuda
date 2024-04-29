import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from './en_US.json'
import pt_BR from './pt_BR.json'

import 'intl-pluralrules'; //Corrigir erro | NAO RETIRAR |

i18n.use(initReactI18next).init({
    CompatibilityJSON: 'v3',
    lng: 'pt_BR',
    fallbackLng: 'pt_BR',
    resources: {
      en_US: en_US,
      pt_BR: pt_BR
    },
    react:{
      useSuspense: false,
    },
    interpolation:{
      escapeValue: false,
    }
  })

  export default i18n