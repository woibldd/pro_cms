const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

require('events').EventEmitter.defaultMaxListeners = 30
const Path = require("path")


const isPro = process.env.NODE_ENV === 'production'



const CONFIG = require(Path.resolve(__dirname, "./conf/config.json"))

const API_URL = process.env.NUXT_ENV_operation_api || CONFIG.host_operation || "http://ms.operation:8898"
const baseUrl = process.env.HOST_API || CONFIG.host_api 
const HOST_API = process.env.HOST_API || CONFIG.host_api 
const VCONSOLE = process.env.VCONSOLE 
const DEBUG = (process.env.DEBUG  ||  CONFIG.debug ) ? "*" : ""
console.log(`当前环境________`, {
  API_URL,
  baseUrl,
  HOST_API,
  DEBUG,
  VCONSOLE,
  NODE_ENV:process.env.NODE_ENV
})
export default {
  env: {
    baseUrl,
    HOST_API,
    NODE_ENV: process.env.NODE_ENV,
    DEBUG: DEBUG,
    VCONSOLE
  },
  // mode: 'universal',
  server: {
    port: CONFIG.port, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'bitkeep,eth'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: (isPro &&!VCONSOLE) ? [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      }
    ] : [{
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    },
    {
      src: 'https://cdn.bootcdn.net/ajax/libs/vConsole/3.8.1/vconsole.min.js',
      type: 'text/javascript',
      charset: 'utf-8'
    }
    ]
  },

  // loading: { color: '#d832b3' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/vant'
    { src: '@/plugins/client/bitkeep.js', ssr: false },
    { src: '@/plugins/client/flexible.js', ssr: false },
    { src: '@/plugins/common/init.js'},
    { src: "@/plugins/client/sessionStorage.js", ssr: false },
    "@/plugins/axios.js"

    // { src:'@/plugins/common/lang/vant.js', ssr: true },

  ],


  router: {
    middleware: ['initRouter'],
    scrollBehavior: function (to, from, savedPosition) {
      console.log({ to, from, savedPosition })
      return savedPosition
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  proxy: {
    //  开发环境
    '/user': {
      target: HOST_API,  //上线要改成testapi
      changeOrigin: true,
      // pathRewrite: {
      //   '^/user': ''
      // }
    },
    '/poster': {
      target: "https://cdn.bitkeep.vip",  //上线要改成testapi
      changeOrigin: true,
      pathRewrite: {
        '^/poster': ''
      }
    }
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: API_URL
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
    // 'nuxt-ssr-cache'
  ],
  devtools: true,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    terser: {
      sourceMap: !isPro,
    },
    postcss: [
      require('postcss-px2rem-exclude')({
        // remUnit: 37.5,
        // propList: ['*'],
        rootValue: 37.5, //默认根目录字体大小(px)
        // unitPrecision: 2, //保留小数位
        // selectorBlackList: [''], //过滤的类名
        // replace: true, //默认直接替换属性
        // mediaQuery: false,
        minPixelValue: 12, //所有小于设置的样式都不被转换
        remUnit: 37.5, // 50px = 1rem
        // remUnit: 99, // 50px =
        remPrecision: 2, // rem的小数点后位数
        exclude: /(node_modules)/,
      }),

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
        console.log('drop_console', isPro)
        config.plugins.push(
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console:  isPro && !VCONSOLE
              }
            }
          })
        )
      }
    }
  }
}
