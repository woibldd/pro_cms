const isProduction = process.env.VUE_APP_ENV == "production";
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "transform-remove-console",
      {
        exclude: isProduction ? ["error", "warn"] : Object.keys(console),
      },
    ],
  ],
};
