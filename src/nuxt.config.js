const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
require('events').EventEmitter.defaultMaxListeners = 30
const Path = require("path")

const isPro = process.env.NODE_ENV === 'production'
const CONFIG =  require(Path.resolve(__dirname,"./conf/config.json"))

const API_URL  = process.env.NUXT_ENV_operation_api || 'http://dev.bitkeep.top:8898'

console.log("process.env.url", API_URL, process.env.NUXT_ENV_operation_api)
console.log(CONFIG)
export default {
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
    script: [
      // {
      //   src: '/common/flexible.js',
      //   type: 'text/javascript',
      //   charset: 'utf-8'
      // }
    ]
  },
 

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/vant'
    { src:'@/plugins/common/flexible.js', ssr: false },
    { src:'@/plugins/common/vant.js', ssr: true },

  ],

  router: {
    // middleware: ['initVuex'],
    scrollBehavior: function (to, from, savedPosition) {
      console.log({ to, from, savedPosition })
    }
  },
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // proxy: {
  //   //  开发环境
  //   '/api': {
  //     target: process.env.NUXT_ENV_operation_api,  //上线要改成testapi
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   }
  
  // },
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
                drop_console: isPro
              }
            }
          })
        )
      }
    }
  }
}
