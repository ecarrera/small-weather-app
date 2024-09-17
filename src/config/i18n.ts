import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import type { App } from "vue";

const DEFAULT_LNG = "en";
const DEFAULT_NS = "translations";

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(HttpApi)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: DEFAULT_LNG,
    ns: DEFAULT_NS,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export function i18n(app: App) {
  app.use(I18NextVue, { i18next });
  return app;
}
