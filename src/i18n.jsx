import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  uz: {
    translation: {
      login: "Kirish",
      loading: "Yuklanmoqda...",
      error: "Xatolik",
      categories: "Kategoriyalar",
      products: "{{category}} mahsulotlari",
    },
  },
  en: {
    translation: {
      login: "Login",
      loading: "Loading...",
      error: "Error",
      categories: "Categories",
      products: "{{category}} products",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
