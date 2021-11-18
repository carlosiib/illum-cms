const { locales } = require('./lib/_locales')

module.exports = {
  target: "serverless",
  i18n: {
    defaultLocale: locales.find((locale) => locale.default).value,
    locales: locales.map((locale) => locale.value)
  },
  images: {
    domains: ['media.graphcms.com']
  }
}
