const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
require("events").EventEmitter.defaultMaxListeners = 30;
const Path = require("path");

const isPro = process.env.NODE_ENV === "production";
const BUILD_ENV = process.env.BUILD_ENV;
const drop_console = isPro && BUILD_ENV != "dev";

const CONFIG = require(Path.resolve(__dirname, "./conf/config.json"));

const HOST_OPERATION =
  process.env.NUXT_ENV_operation_api ||
  CONFIG.host_operation ||
  "http://ms.operation:8898";

// const baseUrl = process.env.HOST_API || CONFIG.host_api
const HOST_API = process.env.HOST_API || CONFIG.host_api;
const DEBUG = process.env.DEBUG || "";
console.log(`当前环境________`, {
  BUILD_ENV,
  HOST_OPERATION,
  HOST_API,
  DEBUG,
  NODE_ENV: process.env.NODE_ENV
});
export default {
  env: {
    // baseUrl,
    BUILD_ENV,
    HOST_API,
    NODE_ENV: process.env.NODE_ENV,
    DEBUG: DEBUG
  },
  // mode: 'universal',
  server: {
    port: CONFIG.port, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BitKeep: The Best Decentralized Multi-chain Crypto Wallet",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: "theme-dark"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        name: "description",
        content:
          "BitKeep is the best decentralized multi-chain crypto wallet, providing 40+ main chains and 45000+ crypto assets and 10,000+ DApps to global users."
      },
      {
        name: "keywords",
        content:
          "bitkeep,wallet,ethereum,bitcoin,eos,exchange,dapp,imtoken,kcash,cobo,bitkeep钱包,比特币,以太坊,数字钱包,币安,火币,Okex,binance,huobi,okex"
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "mohvtRqx4881-yk3PPB1HGwrE4jNIUehtro0H4E3HVw"
      },
      { hid: "robots", name: "robots", content: "robots" },

      { property: "og:title", content: "BitKeep: The Best Decentralized Multi-chain Crypto Wallet" },
      {
        property: "og:description",
        content:
          "BitKeep is the best decentralized multi-chain crypto wallet, providing 40+ main chains and 45000+ crypto assets and 10,000+ DApps to global users."
      },
      {
        property: "twitter:title",
        content: "BitKeep: The Best Decentralized Multi-chain Crypto Wallet"
      },
      {
        property: "twitter:description",
        content:
          "BitKeep is the best decentralized multi-chain crypto wallet, providing 40+ main chains and 45000+ crypto assets and 10,000+ DApps to global users."
      },
      { property: "og:url", content: "https://news.bitkeep.biz" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://cdn.bitkeep.vip/u_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      },
      { property: "og:image:alt", content: "BitKeep, a Best Crpto Wallet" },
      { property: "og:site_name", content: "BitKeep" },
      {
        property: "twitter:image",
        content:
          "https://cdn.bitkeep.vip/u_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      },
      {
        property: "twitter:image:src",
        content:
          "https://cdn.bitkeep.vip/u_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      },
      { property: "twitter:image:alt", content: "BitKeep" },
      { property: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:image",
        content:
          "https://cdn.bitkeep.vip/u_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      },
      { property: "twitter:site", content: "https://news.bitkeep.biz" }
    ],
    link: [
      {
        rel: "shortcut icon",
        href:
          "https://cdn.bitkeep.vip/u_b_69b66a00-a046-11ec-a3eb-f758fa002ae8.png"
      }
    ],

    script:
      BUILD_ENV == "dev"
        ? [
            //   {
            //   name: 'viewport',
            //   content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            // },

            {
              src:
                "https://cdn.bootcdn.net/ajax/libs/vConsole/3.8.1/vconsole.min.js",
              type: "text/javascript",
              charset: "utf-8"
            }
          ]
        : [
            // {
            //   name: 'viewport',
            //   content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
            // }
          ]
  },

  // loading: { color: '#d832b3' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vant/lib/index.css", "@/assets/css/globle.scss", 'swiper/css/swiper.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/vant'
    // { src: "@/plugins/client/bitkeep.js", ssr: false },
    { src: "@/plugins/client/flexible.js", ssr: false },
    { src: "@/plugins/common/init.js" },
    { src: "@/plugins/client/sessionStorage.js", ssr: false },
    // { src: "@/plugins/client/firebase.js", ssr: false }, 
    "@/plugins/axios.js" //拦截

    // { src:'@/plugins/common/lang/vant.js', ssr: true },
  ],

  router: {
    middleware: ["initRouter"]
    // scrollBehavior: function (to, from, savedPosition) {
    //   console.log({ to, from, savedPosition })
    //   return savedPosition
    // }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  proxy: {
    //  开发环境 
    "/operationweb": {
      target: HOST_API,
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        const xforwardedFor = (
          req.headers["x-forwarded-for"] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.connection.socket.remoteAddress
        ).replace("::ffff:", "");

        proxyReq.setHeader("x-forwarded-for", xforwardedFor);
        proxyReq.setHeader("host", xforwardedFor);
      }, 
    },
    "/user": {
      target: HOST_API,
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        // console.log("proxy_____",arguments)
        const xforwardedFor = (
          req.headers["x-forwarded-for"] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.connection.socket.remoteAddress
        ).replace("::ffff:", "");

        proxyReq.setHeader("x-forwarded-for", xforwardedFor);
        proxyReq.setHeader("host", xforwardedFor);
      }
      // pathRewrite: {
      //   '^/user': ''
      // }
    },
    "/poster": {
      target: "https://cdn.bitkeep.vip", //上线要改成testapi
      changeOrigin: true,
      pathRewrite: {
        "^/poster": ""
      }
    },
    "/welfare": {
      target: "http://118.193.40.6:8700",
      changeOrigin: true
    },
    "/tradeCompetition": {
      target: "http://118.193.40.6:18882",
      changeOrigin: true
    },
    "/swap": {
      target: HOST_API,
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        // console.log("proxy_____",arguments)
        const xforwardedFor = (
          req.headers["x-forwarded-for"] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.connection.socket.remoteAddress
        ).replace("::ffff:", "");

        proxyReq.setHeader("x-forwarded-for", xforwardedFor);
        proxyReq.setHeader("host", xforwardedFor);
      }
      // pathRewrite: {
      // '^/mining': '/mining'
      // }
    }
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  //服务端$axios
  publicRuntimeConfig: {
    axios: {
      baseURL: HOST_OPERATION
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
    // 'nuxt-ssr-cache'
  ],
  devtools: BUILD_ENV == "dev",
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: "/nft_h5_static/",
    extractCSS: { allChunks: true },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名

        threshold: 10240, // 对超过10kb的数据进行压缩

        deleteOriginalAssets: false, // 是否删除原文件
      }),
    ],
    // terser: {
    //   sourceMap: BUILD_ENV=='dev',
    // },
    postcss: [
      require("postcss-px2rem-exclude")({
        // remUnit: 37.5,
        // propList: ['*'],
        rootValue: 37.5, //默认根目录字体大小(px)
        // unitPrecision: 2, //保留小数位
        // selectorBlackList: [''], //过滤的类名
        // replace: true, //默认直接替换属性
        // mediaQuery: false,
        minPixelValue: 8, //所有小于设置的样式都不被转换
        remUnit: 37.5, // 50px = 1rem
        // remUnit: 99, // 50px =
        remPrecision: 2, // rem的小数点后位数
        exclude: /(node_modules)/
      })

      // require('autoprefixer')({
      //   overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
      // }),
    ],

    babel: {
      // plugins: [
      //   ['import', {
      //     libraryName: 'vant',
      //     "style": (name) => {
      //       return `${name}/index.css`
      //     }
      //   }, 'vant']
      // ],
    },
    extend(config, ctx) {
      if (!ctx.isDev && ctx.isClient) {
        config.devtool = "source-map";
        console.log("drop_console", drop_console);
        config.plugins.push(
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console
              }
            }
          })
        );
      }
    }
  }
};
