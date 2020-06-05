import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import enLocaleData from '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import frLocaleData from '@formatjs/intl-relativetimeformat/dist/locale-data/en';

// addLocaleData(enLocaleData);
// addLocaleData(frLocaleData);
// addLocaleData([...enLocaleData, ...frLocaleData]);
const messages = {
  'en': "",
  'ru': ""
  }

const getMessages = (locale) => messages[locale];

setIntlConfig({
  locales: ['en', 'fr'],       
  defaultLocale: 'en',
    getMessages
   });

   addDecorator(withIntl);

// import { addParameters } from "@storybook/react";
// import { addDecorator } from "@storybook/react";
// import { withI18n } from "storybook-addon-i18n";
// import { LionessProvider, T } from 'lioness'

// addParameters({
//   i18n: {
//     provider: LionessProvider,
//     providerProps: {
//       messages
//     },
//     supportedLocales: ["en", "ru"],
//     providerLocaleKey: "locale"
//   }
// });

// addDecorator(withI18n);