import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAR from "./public/assets/locals/ar/translation.json";
import translationEN from "./public/assets/locals/en/translation.json";

const resources = {
  ar: { translation: translationAR },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

export default i18n;
