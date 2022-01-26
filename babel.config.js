const productPlugins = []; // 專案釋出階段所需要的 babel 外掛

if (process.env.NODE_ENV === "production") {
  // 釋出模式下使用外掛
  productPlugins.push("transform-remove-console");
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [...productPlugins],
};
