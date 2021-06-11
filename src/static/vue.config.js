const path = require("path");
// const WebpackZipPlugin = require('webpack-zip-plugin')
const port = 8080;
function resolve(dir) {
  return path.join(__dirname, dir);
}


// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


const isProduction = process.env.NODE_ENV == "production";
// vue.config.js
module.exports = {
  publicPath: process.env.PUBLIC_PATH || "/",
  outputDir: "dist",
  assetsDir: "static",
  runtimeCompiler: true,
  lintOnSave: false,
  productionSourceMap: false,
  parallel: isProduction,
  transpileDependencies: ["clipboard"],
  // configureWebpack:{
  //     plugins: [
  //         new WebpackZipPlugin({

  //           initialFile: './dist',
  //           endPath: './buildPath',
  //           zipName: '[name].zip'
  //         })
  //     ]
  // },

  css: {
    extract: isProduction,
    sourceMap: false, // 开启 CSS source maps
  },
  devServer: {
    port: port,
    open: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },

    proxy: {
        '/': {
            target: process.env.VUE_PROXY_API || 'http://localhost:8080',
            changeOrigin: true,
        }
    }
  },
  configureWebpack: {
    devtool: "source-map",
    // cacheBusting: false,
    resolve: {
      alias: {
        src: resolve("src"),
        vue$: "vue/dist/vue.js",
        "@": resolve("src"),
      },
    },
  },
  chainWebpack: (config) => {
    // 移除 prefetch 插件
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    // config.plugin('hard-source-webpack-plugin').use(HardSourceWebpackPlugin);

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          // elementUI: {
          //     name: 'chunk-elementUI', // split elementUI into a single package
          //     priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          //     test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          // },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk("single");
    });
  },
};
