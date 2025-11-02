const React = require('react');
const { IntlProvider } = require('react-intl');
const { getLanguage, getLocale, registerLocale } = require('./src/i18n');
const EN = require('./src/i18n/locales/en-US.json');
const ZH = require('./src/i18n/locales/zh-CN.json');

registerLocale('en-US', EN);
registerLocale('zh-CN', ZH);

exports.wrapRootElement = ({ element }) => {
  const lang = getLanguage();
  const messages = getLocale(lang) || {};
  return React.createElement(IntlProvider, { locale: lang, messages }, element);
};
