import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locale/en';

// the translations
const resources = {
    en: {
        translation: translationEN
    }
};

i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false,

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;