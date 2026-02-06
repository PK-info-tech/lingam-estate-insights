import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ta from "./ta.json";

const isBrowser = typeof window !== "undefined";

const resources = {
  en: { translation: en },
  ta: { translation: ta },
};

if (!i18n.isInitialized) {
  if (isBrowser) {
    i18n.use(LanguageDetector);
  }

  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: isBrowser
      ? {
          order: ["localStorage", "navigator"],
          caches: ["localStorage"],
        }
      : undefined,
    // sync init so SSR has translations ready
    initImmediate: false,
  });
}

export default i18n;
