import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import detector from "i18next-browser-languagedetector";

//https://blog.shahednasser.com/how-to-internationalize-a-react-app/

//this can't handle native translation - so I will need to translate text probably through a backend or service worker
//I am thinking of using this API to achieve this: https://yandex.com/dev/translate/

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
