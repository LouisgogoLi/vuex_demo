module.exports = {
  pluginOptions: {
    i18n: {
      locale: "zh_tw",
      fallbackLocale: "zh_tw",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vuex_demo/" : "/",
};
