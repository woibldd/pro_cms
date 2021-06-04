module.exports = {
  plugins: {
    //   autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 37.5, // 50px = 1rem
      // remUnit: 99, // 50px =
      remPrecision: 2, // rem的小数点后位数
      exclude: "/node_modules/vant",
    },
  },
};
