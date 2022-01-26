const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  transpileDependencies: ["element-plus"],
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
    plugins: [
      AutoImport({ resolvers: [ElementPlusResolver()] }),
      Components({ resolvers: [ElementPlusResolver()] }),
    ],
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vuex_demo/" : "/",
};
