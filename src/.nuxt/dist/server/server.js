module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/activity","2":"components/blindbox-blind-button","3":"components/blindbox-blind-strategy","4":"components/blindbox-blind-time-text","5":"components/blindbox-create-poster","6":"components/blindbox-title-image","7":"components/common","8":"components/common-c-vue-countdown","9":"components/common-header","10":"components/trading","11":"components/vue-create-poster-layout","12":"components/vue-create-poster-layout-canvas-poster","13":"components/vue-create-poster-layout-gradient","14":"components/vue-create-poster-layout-header","15":"components/vue-create-poster-layout-painter","16":"components/vue-create-poster-layout-qrcode","17":"components/vue-create-poster-layout-util","18":"pages/_id","19":"pages/activity/airdrop/index","20":"pages/activity/blindbox/detail/_id","21":"pages/activity/blindbox/detail/index","22":"pages/activity/blindbox/download","23":"pages/activity/blindbox/firendList","24":"pages/activity/blindbox/index","25":"pages/activity/blindbox/list","26":"pages/activity/blindbox/stepDetail","27":"pages/activity/blindboxInvite/RuleDetail","28":"pages/activity/blindboxInvite/component/createPoster","29":"pages/activity/blindboxInvite/copy","30":"pages/activity/blindboxInvite/detail","31":"pages/activity/blindboxInvite/download","32":"pages/activity/blindboxInvite/index","33":"pages/activity/blindboxInvite/inviteList","34":"pages/activity/blindboxInvite/rewardList","35":"pages/activity/cbkbexchange/index","36":"pages/activity/mining/RuleDetail","37":"pages/activity/mining/history","38":"pages/activity/mining/index","39":"pages/activity/mining/inviteRuleDetail","40":"pages/activity/mining/miningRule","41":"pages/activity/mining/protocol","42":"pages/activity/nftLottery/index","43":"pages/activity/noviceBenefits/drawluckly","44":"pages/activity/noviceBenefits/index","45":"pages/activity/noviceBenefits/inviteRuleDetail","46":"pages/activity/noviceBenefits/lotteryresults","47":"pages/activity/staking/addPool","48":"pages/activity/staking/index","49":"pages/activity/staking/myPool","50":"pages/activity/staking/protocol","51":"pages/activity/staking/wallet","52":"pages/activity/trading/history","53":"pages/activity/trading/index","54":"pages/activity/trading/protocol","55":"pages/activity/trading/tradingRule","56":"pages/article/detail/_id"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vant");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ changeHelper; });

// UNUSED EXPORTS: getI18n

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(15);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./locales/vant/index.js
// 知识点1： 可用于模块的批量导入，类同于import引入同一文件夹下多个文件。
// require.context(directory, useSubdirectories = false, regExp = /^.//);
// 参数： 1. 读取文件的路径 2. 是否遍历文件的子目录 3. 匹配文件的正则表达式
// 返回是一个函数，是该文件夹下的匹配文件的执行环境
// 该函数有三个属性
// 1. resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
// 2. keys {Function} -返回匹配成功模块的名字组成的数组
const modulesFiles = __webpack_require__(53); // console.log(modulesFiles.keys())
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file


const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {}); // for (const key of context.keys()) {
//     const keyArr = key.split('/')
//     keyArr.shift() // 移除.
//     map[keyArr.join('.').replace(/\.js$/g, '')] = context(key)
//   }

const filter_key = Object.keys(modules).reduce((r, key) => {
  var nk = (key || '').slice(0, 2).toLowerCase(); // console.log( modules[key])

  r[nk] = nk == 'zh' ? modules["zh-CN"] : modules[key];
  return r;
}, {});
/* harmony default export */ var vant = (filter_key);
// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(1);

// CONCATENATED MODULE: ./locales/index.js




external_vue_default.a.use(external_vue_i18n_default.a);
const messages = {
  'en': __webpack_require__(54),
  'fr': __webpack_require__(55),
  'ja': __webpack_require__(56),
  'ko': __webpack_require__(57),
  'vi': __webpack_require__(58),
  'zh': __webpack_require__(59),
  'zh_tw': __webpack_require__(60),
  'id': __webpack_require__(61)
};
let i18n = null;
const defaultLocale = 'en';
const getI18n = function () {
  return i18n;
};
function changeHelper(lang, locales) {
  locales = locales || external_vue_default.a.prototype.$store.state.local.locales;
  lang = lang === 'zh_tw' ? lang : (lang || "").slice(0, 2);

  if (i18n) {
    if (locales.indexOf(lang) == -1) return;
    i18n.locale = lang;
    vant[lang] ? external_vant_["Locale"].use(lang, vant[lang]) : external_vant_["Locale"].use(defaultLocale, vant[defaultLocale]);
    return i18n;
  }

  i18n = new external_vue_i18n_default.a({
    locale: lang || defaultLocale,
    fallbackLocale: defaultLocale,
    messages
  });
  vant[lang] ? external_vant_["Locale"].use(lang, vant[lang]) : external_vant_["Locale"].use(defaultLocale, vant[defaultLocale]);
  return i18n;
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



const log =  true ? (...arg) => {
  console.log("bit-vuex-local:", ...arg);
} : undefined;
const INIT_STATE = {
  locale: "en",
  //  语言设置
  locales: ['zh', 'en', 'ja', 'ko', 'vi', 'id', 'zh_tw'],
  firstStatus: true,
  bitkeep: {
    language: 'en',
    currency: 'cny',
    os: 'android',
    package: 'com.bitkeep.wallet5',
    clientversion: '6.1.6',
    ua: 'BitKeep Android/6.1.6',
    token: '',
    mylanguage: 'en',
    brand: 'Android'
  },
  userInfo: {
    token: ""
  },
  UA: {
    ios: false,
    android: false,
    Mobile: false,
    MobileAll: false,
    wPhone: false,
    PC: false,
    weixin: false,
    bitkeepios: false,
    bitkeepandroid: false,
    isPhonx: false,
    isMiniProgram: false,
    //小程序环境
    isDingDing: false // 钉钉环境

  }
};

const state = _ => ({ ...INIT_STATE
});

const actions = {
  async nuxtServerInit({
    commit,
    state
  }, ctx) {
    const {
      params,
      query,
      req
    } = ctx;
    let locale = query.lang || params.lang; //UA

    let headerUa = req.headers.ua ? req.headers.ua : '';
    commit('SET_UA', Object(_tools_common__WEBPACK_IMPORTED_MODULE_1__[/* parseUA */ "c"])(req.headers['user-agent'], headerUa)); //App内嵌

    if (state.UA.isBitKeep) {
      log("内嵌bitkeep app 设置参数", state.UA.isBitKeep);
      commit('SET_BIT_KEEP', {
        language: req.headers.language,
        currency: req.headers.currency,
        os: req.headers.os,
        package: req.headers.package,
        ua: req.headers.ua,
        token: req.headers.token,
        mylanguage: req.headers.mylanguage,
        brand: req.headers.brand
      });
      locale = req.headers.mylanguage || req.headers.language;

      if (locale == 'zh_tw') {
        locale = 'zh_tw';
      } else if (!state.locales.find(lan => lan == (locale || '').slice(0, 2))) {
        locale = 'en';
      }
    } else {
      const acceptLanguage = req.headers['accept-language'];

      if (acceptLanguage) {
        locale = locale || acceptLanguage.split(",")[0];
      }
    }

    commit("CHANGE_LANG", locale);
    log("当前语言", {
      locale
    });
  }

};
const getters = {};
const mutations = {
  "CHANGE_LANG"(state, data) {
    if (data) data = data === 'zh_tw' ? data : data.slice(0, 2).toLowerCase();

    if (state.locales.indexOf(data) !== -1) {
      state.locale = data || state.locale;
      Object(_locales__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(state.locale);
      log("切换语言", data); // langMouedles[state.locale] && Locale.use(state.locale, langMouedles[state.locale])
    } else {
      Object(_locales__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])("en");
    }
  },

  "SET_BIT_KEEP"(state, data) {
    if (data.token) {
      state.userInfo.token = data.token;
    }

    Object.assign(state.bitkeep, data);
    log("SET_BIT_KEEP", state);
  },

  "SET_USER"(state, data) {
    Object.assign(state.userInfo, data);
  },

  "SET_UA"(state, data) {
    Object.assign(state.UA, data);
  },

  "SET_firstStatus"(state, data) {
    state.firstStatus = data;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  state,
  actions,
  getters,
  mutations
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* unused harmony export getImageInfo */
/* unused harmony export Download */
/* unused harmony export base64ToBlob */
/* unused harmony export downloadFile */
/* unused harmony export throttle */
/* unused harmony export compareVersion */
/* unused harmony export deepClone */
/* unused harmony export getStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseUA; });
/* unused harmony export parseUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DPR; });
/* unused harmony export filterTime */
/* harmony import */ var core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_0__);

const getImageInfo = src => new Promise(resolve => {
  // img.setAttribute("crossOrigin", 'Anonymous')
  let image = new Image();
  image.setAttribute("crossorigin", "anonymous");
  image.src = 'http://cdn.bitkeep.vip/u_b_c1f944e0-db1f-11eb-9ad0-ddefb611a80f.png'; // image.src = src

  if (image.complete) {
    resolve(toBase64(image));
  } else {
    image.onload = function () {
      resolve(toBase64(image));
      image.onload = null; // image=null
    };
  }
});

function toBase64(img) {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  console.log({
    ctx
  });
  ctx.drawImage(img, 0, 0);
  base64 = canvas.toDataURL("image/png");
  console.log({
    base64
  });
  dataURL = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
  return dataURL;
}

const Download = function (data, filename, mime, bom) {
  return new Promise((resolve, reject) => {
    var blobData = typeof bom !== "undefined" ? [bom, data] : [data];
    var blob = new Blob(blobData, {
      type: mime || "application/octet-stream"
    });

    if (typeof window.navigator.msSaveBlob !== "undefined") {
      // IE workaround for "HTML7007: One or more blob URLs were
      // revoked by closing the blob for which they were created.
      // These URLs will no longer resolve as the data backing
      // the URL has been freed."
      window.navigator.msSaveBlob(blob, filename);
      resolve();
    } else {
      var blobURL = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
      var tempLink = document.createElement("a");
      tempLink.style.display = "none";
      tempLink.href = blobURL;
      tempLink.setAttribute("download", filename); // Safari thinks _blank anchor are pop ups. We only want to set _blank
      // target if the browser does not support the HTML5 download attribute.
      // This allows you to download files in desktop safari if pop up blocking
      // is enabled.

      if (typeof tempLink.download === "undefined") {
        tempLink.setAttribute("target", "_blank");
      }

      document.body.appendChild(tempLink);
      tempLink.click(); // Fixes "webkit blob resource error 1"

      setTimeout(function () {
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
        resolve(true);
      }, 200);
    }
  });
}; //base64转blob

const base64ToBlob = code => {
  let parts = code.split(';base64,');
  let contentType = parts[0].split(':')[1];
  let raw = window.atob(parts[1]);
  let rawLength = raw.length;
  let uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], {
    type: contentType
  });
}; //下载

const downloadFile = (fileName, content) => {
  let aLink = document.createElement('a');
  let blob = base64ToBlob(content); //new Blob([content]);

  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为

  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob); // aLink.dispatchEvent(evt);
  //aLink.click()

  aLink.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  })); //兼容火狐
};
const throttle = (fn, delay) => {
  var timer = null;
  var delay = delay || 300;
  return function () {
    var args = arguments;
    var that = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}; // compareVersion('1.11.0', '1.9.9') // 1

const compareVersion = (v2 = '1.0.0') => {
  const uaArray = window.navigator.userAgent.split('/');
  let v1 = uaArray[uaArray.length - 1];
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }

  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};
/**
* deep clone
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/

const deepClone = oldObj => {
  // 维护两个储存循环引用的数组
  const oldObjArr = [];
  const newObjArr = [];

  const clone = oldObj => {
    let newObj, proto;

    const type = _getType(oldObj);

    switch (type) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'null':
      case 'undefined':
      case 'function':
        {
          return oldObj;
          break;
        }

      case 'symbol':
        {
          return Symbol(Symbol.keyFor(oldObj).toString());
          break;
        }

      case 'array':
        {
          newObj = [];
          break;
        }

      case 'regExp':
        {
          newObj = new RegExp(oldObj.source, _getRegExp(oldObj));
          if (oldObj.lastIndex) newObj.lastIndex = oldObj.lastIndex;
          break;
        }

      case 'date':
        {
          newObj = new Date(oldObj.getTime());
          break;
        }
      //case 'obj':

      default:
        {
          // 处理对象原型
          proto = Object.getPrototypeOf(oldObj); // 利用Object.create切断原型链

          newObj = Object.create(proto);
          break;
        }
    } // 处理循环引用


    const index = oldObjArr.indexOf(oldObj);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return newObjArr[index];
    }

    oldObjArr.push(oldObj);
    newObjArr.push(newObj);
    /*数组和对象都可以用forin语句，虽然数组使用forin会有一个问题(具体看最下面）。
    但是这里不会影响，所以这么用
    */

    for (let i in oldObj) {
      // 递归
      newObj[i] = clone(oldObj[i]);
    }

    return newObj;
  };

  return clone(oldObj);
};
function getStyle(element, attr) {
  if (window.getComputedStyle) {
    return attr ? window.getComputedStyle(element, null)[attr] : window.getComputedStyle(element, null);
  }

  return attr ? element.currentStyle[attr] : element.currentStyle;
}
const parseUA = (userAgent, headerUa) => {
  const ua = userAgent || ( false ? undefined : '');
  const isIosEnv = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  const isPhonx = _ => !!(isIosEnv && screen.height == 812 && screen.width == 375);

  const ret = {
    ios: isIosEnv,
    android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
    Mobile: /(Mobile)/i.test(ua),
    // MobileAll: ua.indexOf('Android') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('SymbianOS') > -1 || ua.indexOf('Windows Phone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1,
    wPhone: /(Windows Phone|windows[\s+]phone)/i.test(ua),
    PC: ua.indexOf('Win') > -1 || ua.indexOf('Mac') > -1 || ua.indexOf('Linux') > -1,
    weixin: ua.indexOf('MicroMessenger') > -1,
    isBitKeep: /(BitKeep)/i.test(headerUa),
    //app
    isDinhgDing: /(DingTalk)/i.test(ua)
  };
  ret.bitKeepAndroid = ret.isBitKeep && ret.android;
  ret.bitKeepIos = ret.isBitKeep && ret.ios;
  return  false ? undefined : ret;
};
function parseUrl(url) {
  if (!url) return {};
  let reuslt = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(url);
  let keys = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
  if (!reuslt) return {};
  let Obj = {};
  keys.forEach((key, i) => {
    Obj[key] = reuslt[i];
  });
  return Obj;
}
;
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait || 200);
  };
}
function DPR() {
  if (window.devicePixelRatio && window.devicePixelRatio > 1) {
    return window.devicePixelRatio;
  }

  return 1;
}
function filterTime(date) {
  let val = new Date(date);
  var Y = val.getFullYear();
  var M = val.getMonth() + 1 >= 10 ? val.getMonth() + 1 : '0' + (this.getMonth() + 1);
  var D = val.getDate() >= 10 ? val.getDate() : '0' + val.getDate();
  var H = val.getHours() >= 10 ? val.getHours() : '0' + val.getHours();
  var MI = val.getMinutes() >= 10 ? val.getMinutes() : '0' + val.getMinutes();
  var S = val.getSeconds() >= 10 ? val.getSeconds() : '0' + val.getSeconds();
  return Y + "-" + M + "-" + D + " " + H + ":" + MI + ":" + S;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51)["URL"]))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Name',
  tel: 'Telefon',
  save: 'Speichern',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  delete: 'Löschen',
  complete: 'Complete',
  loading: 'Laden...',
  telEmpty: 'Bitte das Telefon ausfüllen',
  nameEmpty: 'Bitte den Name angeben',
  nameInvalid: 'Ungültiger Name',
  confirmDelete: 'Bist du sicher, dass du löschen möchtest?',
  telInvalid: 'Ungültige Telefonnummer',
  vanCalendar: {
    end: 'Ende',
    start: 'Start',
    title: 'Kalender',
    startEnd: 'Start/Ende',
    weekdays: ['So', 'Mo', 'Di', 'Mo', 'Do', 'Fr', 'Sa'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "W\xE4hle nicht mehr als " + maxRange + " Tage";
    }
  },
  vanCascader: {
    select: 'Wählen'
  },
  vanContactCard: {
    addText: 'Kontaktinformationen hinzufügen'
  },
  vanContactList: {
    addText: 'Neuen Kontakt hinzufügen'
  },
  vanPagination: {
    prev: 'Vorherige',
    next: 'Nächste'
  },
  vanPullRefresh: {
    pulling: 'Zum Aktualisieren herunterziehen...',
    loosing: 'Loslassen zum Aktualisieren...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Unbegrenzt',
    discount: function discount(_discount) {
      return _discount * 10 + "% Rabatt";
    },
    condition: function condition(_condition) {
      return "Mindestens " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Keine Coupons',
    count: function count(_count) {
      return "Du hast " + _count + " Coupons";
    }
  },
  vanCouponList: {
    empty: 'Keine Coupons',
    exchange: 'Austauschen',
    close: 'Schließen',
    enable: 'Verfügbar',
    disabled: 'Nicht verfügbar',
    placeholder: 'Couponcode'
  },
  vanAddressEdit: {
    area: 'Standort',
    postal: 'PLZ',
    areaEmpty: 'Bitte deinen Ort angeben',
    addressEmpty: 'Adresse darf nicht leer sein',
    postalEmpty: 'Falsche Postleitzahl',
    defaultAddress: 'Als Standardadresse festgelegen',
    telPlaceholder: 'Telefon',
    namePlaceholder: 'Name',
    areaPlaceholder: 'Ort'
  },
  vanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  vanAddressList: {
    add: 'Neue Adresse hinzufügen'
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Name',
  tel: 'Telefon',
  save: 'Speichern',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  delete: 'Löschen',
  complete: 'Complete',
  loading: 'Laden...',
  telEmpty: 'Bitte füllen Sie das Telefon aus',
  nameEmpty: 'Bitte geben Sie den Name an',
  nameInvalid: 'Ungültiger Name',
  confirmDelete: 'Sind Sie sicher, dass Sie löschen möchten?',
  telInvalid: 'Ungültige Telefonnummer',
  vanCalendar: {
    end: 'Ende',
    start: 'Start',
    title: 'Kalender',
    startEnd: 'Start/Ende',
    weekdays: ['So', 'Mo', 'Di', 'Mo', 'Do', 'Fr', 'Sa'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "W\xE4hle nicht mehr als " + maxRange + " Tage";
    }
  },
  vanCascader: {
    select: 'Wählen'
  },
  vanContactCard: {
    addText: 'Kontaktinformationen hinzufügen'
  },
  vanContactList: {
    addText: 'Neuen Kontakt hinzufügen'
  },
  vanPagination: {
    prev: 'Vorherige',
    next: 'Nächste'
  },
  vanPullRefresh: {
    pulling: 'Zum Aktualisieren herunterziehen...',
    loosing: 'Loslassen zum Aktualisieren...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Unbegrenzt',
    discount: function discount(_discount) {
      return _discount * 10 + "% Rabatt";
    },
    condition: function condition(_condition) {
      return "Mindestens " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Keine Coupons',
    count: function count(_count) {
      return "Sie haben " + _count + " Coupons";
    }
  },
  vanCouponList: {
    empty: 'Keine Coupons',
    exchange: 'Austauschen',
    close: 'Schließen',
    enable: 'Verfügbar',
    disabled: 'Nicht verfügbar',
    placeholder: 'Couponcode'
  },
  vanAddressEdit: {
    area: 'Standort',
    postal: 'PLZ',
    areaEmpty: 'Bitte geben Sie Ihren Standort an',
    addressEmpty: 'Adresse darf nicht leer sein',
    postalEmpty: 'Falsche Postleitzahl',
    defaultAddress: 'Als Standardadresse festgelegen',
    telPlaceholder: 'Telefon',
    namePlaceholder: 'Name',
    areaPlaceholder: 'Ort'
  },
  vanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  vanAddressList: {
    add: 'Neue Adresse hinzufügen'
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  complete: 'Complete',
  loading: 'Loading...',
  telEmpty: 'Please fill in the tel',
  nameEmpty: 'Please fill in the name',
  nameInvalid: 'Malformed name',
  confirmDelete: 'Are you sure you want to delete?',
  telInvalid: 'Malformed phone number',
  vanCalendar: {
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    startEnd: 'Start/End',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Choose no more than " + maxRange + " days";
    }
  },
  vanCascader: {
    select: 'Select'
  },
  vanContactCard: {
    addText: 'Add contact info'
  },
  vanContactList: {
    addText: 'Add new contact'
  },
  vanPagination: {
    prev: 'Previous',
    next: 'Next'
  },
  vanPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Unlimited',
    discount: function discount(_discount) {
      return _discount * 10 + "% off";
    },
    condition: function condition(_condition) {
      return "At least " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'No coupons',
    count: function count(_count) {
      return "You have " + _count + " coupons";
    }
  },
  vanCouponList: {
    empty: 'No coupons',
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code'
  },
  vanAddressEdit: {
    area: 'Area',
    postal: 'Postal',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
    telPlaceholder: 'Phone',
    namePlaceholder: 'Name',
    areaPlaceholder: 'Area'
  },
  vanAddressEditDetail: {
    label: 'Address',
    placeholder: 'Address'
  },
  vanAddressList: {
    add: 'Add new address'
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Nombre',
  tel: 'Teléfono',
  save: 'Guardar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Eliminar',
  complete: 'Completado',
  loading: 'Cargando...',
  telEmpty: 'Por favor rellena el teléfono',
  nameEmpty: 'Por favor rellena el nombre',
  nameInvalid: 'nombre inválido',
  confirmDelete: 'Estás seguro de eliminarlo?',
  telInvalid: 'Teléfono inválido',
  vanCalendar: {
    end: 'Fin',
    start: 'Inicio',
    title: 'Calendario',
    startEnd: 'Inicio/Fin',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Elija no m\xE1s de " + maxRange + " d\xEDas";
    }
  },
  vanCascader: {
    select: 'Seleccione'
  },
  vanContactCard: {
    addText: 'Añadir información de contacto'
  },
  vanContactList: {
    addText: 'Añadir nuevo contacto'
  },
  vanPagination: {
    prev: 'Anterior',
    next: 'Siguiente'
  },
  vanPullRefresh: {
    pulling: 'Tira para recargar...',
    loosing: 'Suelta para recargar...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Ilimitado',
    discount: function discount(_discount) {
      return _discount * 10 + "% de descuento";
    },
    condition: function condition(_condition) {
      return "Al menos " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Cupón',
    tips: 'Sin cupones',
    count: function count(_count) {
      return "You have " + _count + " coupons";
    }
  },
  vanCouponList: {
    empty: 'Sin cupones',
    exchange: 'Intercambio',
    close: 'Cerrar',
    enable: 'Disponible',
    disabled: 'No disponible',
    placeholder: 'Código del cupón'
  },
  vanAddressEdit: {
    area: 'Área',
    postal: 'Código Postal',
    areaEmpty: 'Por favor selecciona una área de recogida',
    addressEmpty: 'La dirección no puede estar vacia',
    postalEmpty: 'Código postal inválido',
    defaultAddress: 'Establecer como dirección por defecto',
    telPlaceholder: 'Teléfono',
    namePlaceholder: 'Nombre',
    areaPlaceholder: 'Área'
  },
  vanAddressEditDetail: {
    label: 'Dirección',
    placeholder: 'Dirección'
  },
  vanAddressList: {
    add: 'Anadir dirección'
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Nom',
  tel: 'Telephone',
  save: 'Sauvegarder',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  delete: 'Suprimer',
  complete: 'Terminé',
  loading: 'Chargement...',
  telEmpty: 'Veuillez remplir le tel',
  nameEmpty: 'Veuillez remplir le nom',
  nameInvalid: 'Nom incorrect',
  confirmDelete: 'Êtes-vous sûr de vouloir supprimer?',
  telInvalid: 'Numéro de téléphone incorrect',
  vanCalendar: {
    end: 'Fin',
    start: 'Début',
    title: 'Calendrier',
    startEnd: 'Début/Fin',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Choisir pas plus de " + maxRange + " jours";
    }
  },
  vanCascader: {
    select: 'Sélectionner'
  },
  vanContactCard: {
    addText: 'Ajouter des informations de contact'
  },
  vanContactList: {
    addText: 'Ajouter un nouveau contact'
  },
  vanPagination: {
    prev: 'Précédent',
    next: 'Suivant'
  },
  vanPullRefresh: {
    pulling: 'Tirer pour actualiser ...',
    loosing: 'Relâchez pour actualiser...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Illimité',
    discount: function discount(_discount) {
      return _discount * 10 + "% de r\xE9duction";
    },
    condition: function condition(_condition) {
      return "Au moins " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Pas de coupons',
    count: function count(_count) {
      return "Vous avez " + _count + " coupons";
    }
  },
  vanCouponList: {
    empty: 'Pas de coupons',
    exchange: 'Exchange',
    close: 'Fermer',
    enable: 'Disponible',
    disabled: 'Indisponible',
    placeholder: 'Code coupon'
  },
  vanAddressEdit: {
    area: 'Zone',
    postal: 'Postal',
    areaEmpty: 'Veuillez sélectionner une zone de réception',
    addressEmpty: "L'adresse ne peut pas être vide",
    postalEmpty: 'Mauvais code postal',
    defaultAddress: 'Définir comme adresse par défaut',
    telPlaceholder: 'Téléphone',
    namePlaceholder: 'Nom',
    areaPlaceholder: 'Zone'
  },
  vanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  vanAddressList: {
    add: 'Ajouter une nouvelle adresse'
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'お名前',
  tel: '電話番号',
  save: 'セーブ',
  confirm: '確認',
  cancel: 'キャンセル',
  delete: '削除',
  complete: '完了',
  loading: '読み込み中...',
  telEmpty: '電話番号を入力してください',
  nameEmpty: '名前を入力してください',
  nameInvalid: '正しい名前を入力してください',
  confirmDelete: '本当に削除しますか',
  telInvalid: '正しい電話番号を入力してください',
  vanCalendar: {
    end: '終了',
    start: '開始',
    title: '日付選択',
    confirm: '確認',
    startEnd: '開始/終了',
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return maxRange + "\u65E5\u4EE5\u5185\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044";
    }
  },
  vanCascader: {
    select: '選択する'
  },
  vanContactCard: {
    addText: '連絡先を追加'
  },
  vanContactList: {
    addText: '新しい連絡先を追加'
  },
  vanPagination: {
    prev: '前のページ',
    next: '次のページ'
  },
  vanPullRefresh: {
    pulling: 'プルダウンして更新...',
    loosing: 'リリース時に更新...'
  },
  vanSubmitBar: {
    label: '合計：'
  },
  vanCoupon: {
    unlimited: '入場ありません',
    discount: function discount(_discount) {
      return 10 - _discount + "\u5272\u5F15";
    },
    condition: function condition(_condition) {
      return _condition + "\u5186\u4EE5\u4E0A\u3067\u5229\u7528\u53EF\u80FD";
    }
  },
  vanCouponCell: {
    title: 'クーポン',
    tips: '利用可能なクーポンがありません',
    count: function count(_count) {
      return _count + "\u679A\u304C\u5229\u7528\u53EF\u80FD";
    }
  },
  vanCouponList: {
    empty: 'クーポンはありません',
    exchange: '両替',
    close: 'クーポンを使用しません',
    enable: '利用可能',
    disabled: '利用できません',
    placeholder: '割引コードを入力してください'
  },
  vanAddressEdit: {
    area: '地域',
    postal: '郵便番号',
    areaEmpty: '地域を選択してください',
    addressEmpty: '詳しい住所を入力してください',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: 'デフォルトの住所に設定',
    telPlaceholder: '荷受人の携帯番号',
    namePlaceholder: '荷受人の名前',
    areaPlaceholder: '县 / 市 / 町を選択'
  },
  vanAddressEditDetail: {
    label: '詳しい住所',
    placeholder: '番地、階の部屋番号など'
  },
  vanAddressList: {
    add: '住所を追加'
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Navn',
  tel: 'Telefon',
  save: 'Lagre',
  confirm: 'Bekreft',
  cancel: 'Avbryt',
  delete: 'Slett',
  complete: 'Fullfør',
  loading: 'Laster...',
  telEmpty: 'Vennligst fyll inn telefonnummer',
  nameEmpty: 'Vennligst fyll inn navn',
  nameInvalid: 'Ugyldig navn',
  confirmDelete: 'Er du sikker på at du vil slette?',
  telInvalid: 'Ugyldig telefonnummer',
  vanCalendar: {
    end: 'Slutt',
    start: 'Start',
    title: 'Kalendar',
    startEnd: 'Start/Slutt',
    weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Maks. " + maxRange + " dager";
    }
  },
  vanCascader: {
    select: 'Plukke ut'
  },
  vanContactCard: {
    addText: 'Legg til kontakt info'
  },
  vanContactList: {
    addText: 'Legg til ny kontakt'
  },
  vanPagination: {
    prev: 'Forrige',
    next: 'Neste'
  },
  vanPullRefresh: {
    pulling: 'Dra for oppdatering...',
    loosing: 'Mist for oppdatering...'
  },
  vanSubmitBar: {
    label: 'Totalt：'
  },
  vanCoupon: {
    unlimited: 'Uendelig',
    discount: function discount(_discount) {
      return _discount * 10 + "% avslag";
    },
    condition: function condition(_condition) {
      return "Minst " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Kupong',
    tips: 'Ingen kuponger',
    count: function count(_count) {
      return "Du har " + _count + " kuponger";
    }
  },
  vanCouponList: {
    empty: 'Ingen kuponger',
    exchange: 'Bytte',
    close: 'Lukk',
    enable: 'Tilgjengelig',
    disabled: 'Utilgjengelig',
    placeholder: 'Kupong kode'
  },
  vanAddressEdit: {
    area: 'Område',
    postal: 'Postkode',
    areaEmpty: 'Vennligst fyll inn område',
    addressEmpty: 'Addresse kan ikke være tomt',
    postalEmpty: 'Feil postkode',
    defaultAddress: 'Sett som standard adresse',
    telPlaceholder: 'Telefon',
    namePlaceholder: 'Navn',
    areaPlaceholder: 'Område'
  },
  vanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  vanAddressList: {
    add: 'Legg til ny adresse'
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Nume',
  tel: 'Telefon',
  save: 'Salvează',
  confirm: 'Confirmă',
  cancel: 'Anulează',
  delete: 'Șterge',
  complete: 'Finalizează',
  loading: 'Încărcare...',
  telEmpty: 'Te rugăm să completezi telefonul',
  nameEmpty: 'Te rugăm să completezi numele',
  nameInvalid: 'Nume incorect',
  confirmDelete: 'Ești sigur ca vrei sa stergi?',
  telInvalid: 'Număr de telefon invalid',
  vanCalendar: {
    end: 'Sfârșit',
    start: 'Început',
    title: 'Calendar',
    startEnd: 'Început/Sfârsit',
    weekdays: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Alege maxim " + maxRange + " zile";
    }
  },
  vanCascader: {
    select: 'Selectați'
  },
  vanContactCard: {
    addText: 'Adaugă informațiile de contact'
  },
  vanContactList: {
    addText: 'Adaugă contact nou'
  },
  vanPagination: {
    prev: 'Precedenta',
    next: 'Urmatoarea'
  },
  vanPullRefresh: {
    pulling: 'Trage pentru a da împrospăta...',
    loosing: 'Eliberează pentru a împrospăta...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Nelimitat',
    discount: function discount(_discount) {
      return _discount * 10 + "% discount";
    },
    condition: function condition(_condition) {
      return "Cel pu\u021Bin " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Cupon',
    tips: 'Fără cupoane',
    count: function count(_count) {
      return "Ai " + _count + " cupoane";
    }
  },
  vanCouponList: {
    empty: 'Fără cupoane',
    exchange: 'Schimbă',
    close: 'Închide',
    enable: 'Disponibil',
    disabled: 'Indisponibil',
    placeholder: 'Cod cupon'
  },
  vanAddressEdit: {
    area: 'Zonă',
    postal: 'Cod postal',
    areaEmpty: 'Te rugăm sa selectezi o zona de primire',
    addressEmpty: 'Adresa nu poate fi goală',
    postalEmpty: 'Cod postal invalid',
    defaultAddress: 'Setează ca adresă de pornire',
    telPlaceholder: 'Telefon',
    namePlaceholder: 'Nume',
    areaPlaceholder: 'Zonă'
  },
  vanAddressEditDetail: {
    label: 'Adresă',
    placeholder: 'Adresă'
  },
  vanAddressList: {
    add: 'Adaugă adresă nouă'
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ชื่อ',
  tel: 'โทรศัพท์',
  save: 'บันทึก',
  confirm: 'ยืนยัน',
  cancel: 'ยกเลิก',
  delete: 'ลบ',
  complete: 'ดำเนินการ',
  loading: 'กำลังโหลด...',
  telEmpty: 'กรุณากรอกข้อมูลในโทรศัพท์',
  nameEmpty: 'กรุณากรอกชื่อของคุณ',
  nameInvalid: 'กรุณากรอกชื่อที่ถูกต้อง',
  confirmDelete: 'คุณแน่ใจว่าต้องการลบ',
  telInvalid: 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง',
  vanCalendar: {
    end: 'จบ',
    start: 'เริ่ม',
    title: 'การเลือกวันที่',
    confirm: 'ตกลง',
    startEnd: 'เริ่ม/เริ่ม',
    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u0E1B\u0E35" + month + "\u0E40\u0E14\u0E37\u0E2D\u0E19";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 " + maxRange + " \u0E27\u0E31\u0E19";
    }
  },
  vanCascader: {
    select: 'โปรดเลือก'
  },
  vanContactCard: {
    addText: 'เพิ่มผู้ติดต่อ'
  },
  vanContactList: {
    addText: 'รายชื่อติดต่อใหม่'
  },
  vanPagination: {
    prev: 'หน้าที่แล้ว',
    next: 'หน้าต่อไป'
  },
  vanPullRefresh: {
    pulling: 'ดึงลงเพื่อรีเฟรช...',
    loosing: 'ปล่อยเพื่อรีเฟรช...'
  },
  vanSubmitBar: {
    label: 'รวม：'
  },
  vanCoupon: {
    unlimited: 'ไม่มีเกณฑ์การใช้งาน',
    discount: function discount(_discount) {
      return "\u0E25\u0E14" + _discount;
    },
    condition: function condition(_condition) {
      return "\u0E21\u0E35\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22\u0E43\u0E19\u0E23\u0E32\u0E04\u0E32 " + _condition + " \u0E01\u0E27\u0E48\u0E32\u0E2B\u0E22\u0E27\u0E19";
    }
  },
  vanCouponCell: {
    title: 'คูปอง',
    tips: 'ไม่สามารถใช้ได้',
    count: function count(_count) {
      return "\u0E21\u0E35\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E " + _count + " \u0E23\u0E39\u0E1B";
    }
  },
  vanCouponList: {
    empty: 'ไม่มีคูปอง',
    exchange: 'แลกเปลี่ยน',
    close: 'ห้ามใช้คูปอง',
    enable: 'พร้อมใช้งาน',
    disabled: 'ไม่พร้อมใช้งาน',
    placeholder: 'กรุณากรอกรหัสคูปอง'
  },
  vanAddressEdit: {
    area: 'พื้นที่',
    postal: 'รหัสไปรษณีย์',
    areaEmpty: 'โปรดเลือกภูมิภาค',
    addressEmpty: 'กรุณากรอกที่อยู่โดยละเอียด',
    postalEmpty: 'รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง',
    defaultAddress: 'ตั้งเป็นที่อยู่จัดส่งเริ่มต้น',
    telPlaceholder: 'หมายเลขโทรศัพท์มือถือของผู้รับสินค้า',
    namePlaceholder: 'ชื่อผู้รับ',
    areaPlaceholder: 'เลือกจังหวัด / เมือง / อำเภอ'
  },
  vanAddressEditDetail: {
    label: 'ที่อยู่',
    placeholder: 'เลขที่บ้านเลขที่ห้องชั้นและข้อมูลอื่น ๆ'
  },
  vanAddressList: {
    add: 'เพิ่มที่อยู่'
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'İsim',
  tel: 'Telefon',
  save: 'Kaydet',
  confirm: 'Onayla',
  cancel: 'İptal',
  delete: 'Sil',
  complete: 'Tamamla',
  loading: 'Yükleniyor...',
  telEmpty: 'Lütfen tel. no giriniz',
  nameEmpty: 'Lütfen isim giriniz',
  nameInvalid: 'Geçersiz isim',
  confirmDelete: 'Silmek istediğinize emin misiniz?',
  telInvalid: 'Geçersiz tel. numarası',
  vanCalendar: {
    end: 'Son',
    start: 'Başlat',
    title: 'Takvim',
    startEnd: 'Başlat/Son',
    weekdays: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "En fazla " + maxRange + " g\xFCn se\xE7in";
    }
  },
  vanCascader: {
    select: 'Seçiniz'
  },
  vanContactCard: {
    addText: 'Kişi bilgisi ekle'
  },
  vanContactList: {
    addText: 'Yeni kişi ekle'
  },
  vanPagination: {
    prev: 'Önceki',
    next: 'Sonraki'
  },
  vanPullRefresh: {
    pulling: 'Yenilemek için çekin...',
    loosing: 'Yenilemek için bırakın...'
  },
  vanSubmitBar: {
    label: 'Toplam:'
  },
  vanCoupon: {
    unlimited: 'Sınırsız',
    discount: function discount(_discount) {
      return "%" + _discount * 10 + " indirim";
    },
    condition: function condition(_condition) {
      return "En az " + _condition;
    }
  },
  vanCouponCell: {
    title: 'Kupon',
    tips: 'Kupon yok',
    count: function count(_count) {
      return _count + " adet teklif var";
    }
  },
  vanCouponList: {
    empty: 'Kupon yok',
    exchange: 'Takas',
    close: 'Kapat',
    enable: 'Mevcut',
    disabled: 'Mevcut değil',
    placeholder: 'Kupon kodu'
  },
  vanAddressEdit: {
    area: 'Alan',
    postal: 'Posta',
    areaEmpty: 'Lütfen alıcı alanını seçin',
    addressEmpty: 'Adres boş olamaz!',
    postalEmpty: 'Yanlış posta kodu',
    defaultAddress: 'Varsayılan adres olarak ayarla',
    telPlaceholder: 'Telefone',
    namePlaceholder: 'İsim',
    areaPlaceholder: 'Alan'
  },
  vanAddressEditDetail: {
    label: 'Adres',
    placeholder: 'Adres'
  },
  vanAddressList: {
    add: 'Yeni adres ekle'
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  nameInvalid: '请输入正确的姓名',
  confirmDelete: '确定要删除吗',
  telInvalid: '请输入正确的手机号',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " + maxRange + " \u5929";
    }
  },
  vanCascader: {
    select: '请选择'
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '暂无可用',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: '姓名',
  tel: '電話',
  save: '保存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  complete: '完成',
  loading: '加載中...',
  telEmpty: '請填寫電話',
  nameEmpty: '請填寫姓名',
  nameInvalid: '請輸入正確的姓名',
  confirmDelete: '確定要刪除嗎',
  telInvalid: '請填寫正確的電話',
  vanCalendar: {
    end: '結束',
    start: '開始',
    title: '日期選擇',
    confirm: '確定',
    startEnd: '開始/結束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9078\u64C7\u5929\u6578\u4E0D\u80FD\u8D85\u904E " + maxRange + " \u5929";
    }
  },
  vanCascader: {
    select: '請選擇'
  },
  vanContactCard: {
    addText: '添加聯系人'
  },
  vanContactList: {
    addText: '新建聯系人'
  },
  vanPagination: {
    prev: '上一頁',
    next: '下一頁'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...'
  },
  vanSubmitBar: {
    label: '合計：'
  },
  vanCoupon: {
    unlimited: '無使用門檻',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EFF" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '優惠券',
    tips: '暫無可用',
    count: function count(_count) {
      return _count + "\u5F35\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暫無優惠券',
    exchange: '兌換',
    close: '不使用優惠',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '請輸入優惠碼'
  },
  vanAddressEdit: {
    area: '地區',
    postal: '郵政編碼',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵政編碼格式不正確',
    defaultAddress: '設為默認收貨地址',
    telPlaceholder: '收貨人手機號',
    namePlaceholder: '收貨人姓名',
    areaPlaceholder: '選擇省 / 市 / 區'
  },
  vanAddressEditDetail: {
    label: '詳細地址',
    placeholder: '街道門牌、樓層房間號等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: '姓名',
  tel: '電話',
  save: '儲存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  complete: '完成',
  loading: '載入中...',
  telEmpty: '請填寫電話',
  nameEmpty: '請填寫姓名',
  nameInvalid: '請輸入正確的姓名',
  confirmDelete: '確定要刪除嗎',
  telInvalid: '請填寫正確的電話',
  vanCalendar: {
    end: '結束',
    start: '開始',
    title: '日期選擇',
    confirm: '確定',
    startEnd: '開始/結束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9078\u64C7\u5929\u6578\u4E0D\u80FD\u8D85\u904E " + maxRange + " \u5929";
    }
  },
  vanCascader: {
    select: '請選擇'
  },
  vanContactCard: {
    addText: '新增聯絡人'
  },
  vanContactList: {
    addText: '建立聯絡人'
  },
  vanPagination: {
    prev: '上一頁',
    next: '下一頁'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...'
  },
  vanSubmitBar: {
    label: '合計：'
  },
  vanCoupon: {
    unlimited: '無使用門檻',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EFF" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '優惠券',
    tips: '暫無可用',
    count: function count(_count) {
      return _count + "\u5F35\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暫無優惠券',
    exchange: '兌換',
    close: '不使用優惠',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '請輸入優惠代碼'
  },
  vanAddressEdit: {
    area: '地區',
    postal: '郵遞區號',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵遞區號格式不正確',
    defaultAddress: '設為預設收貨地址',
    telPlaceholder: '收貨人手機號碼',
    namePlaceholder: '收貨人姓名',
    areaPlaceholder: '選擇縣 / 市'
  },
  vanAddressEditDetail: {
    label: '詳細地址',
    placeholder: '街道門牌、樓層房號等資訊'
  },
  vanAddressList: {
    add: '新增地址'
  }
});

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
module.exports = __webpack_require__(62);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const log = Object(debug__WEBPACK_IMPORTED_MODULE_0__["debug"])('bit-middleware');
/* harmony default export */ __webpack_exports__["default"] = (async ctx => {
  const {
    req,
    store
  } = ctx;

  if (true) {
    const userAgent = req.headers['user-agent'];
  }

  il8n(ctx);
});

function il8n({
  isHMR,
  app,
  store,
  route,
  params,
  query,
  error,
  redirect
}) {
  if (isHMR) {
    // ignore if called from hot module replacement
    return;
  }
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 12rem;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 0.4rem;\n  color: #47494E;\n  margin-bottom: 0.21rem;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 0.56rem;\n  margin-bottom: 0.27rem;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 0.32rem;\n  bottom: 0.32rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0.05rem;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("521f9ff1", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{-webkit-tap-highlight-color:transparent}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Segoe UI,Arial,Roboto,'PingFang SC',miui,'Hiragino Sans GB','Microsoft Yahei',sans-serif}a{text-decoration:none}button,input,textarea{color:inherit;font:inherit}[class*=van-]:focus,a:focus,button:focus,input:focus,textarea:focus{outline:0}ol,ul{margin:0;padding:0;list-style:none}.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.van-clearfix::after{display:table;clear:both;content:''}[class*=van-hairline]::after{position:absolute;box-sizing:border-box;content:' ';pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--top::after{border-top-width:1px}.van-hairline--left::after{border-left-width:1px}.van-hairline--right::after{border-right-width:1px}.van-hairline--bottom::after{border-bottom-width:1px}.van-hairline--top-bottom::after,.van-hairline-unset--top-bottom::after{border-width:1px 0}.van-hairline--surround::after{border-width:1px}@-webkit-keyframes van-slide-up-enter{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-enter{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-down-enter{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-enter{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-left-enter{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-enter{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-right-enter{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-enter{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-fade-in{from{opacity:0}to{opacity:1}}@keyframes van-fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes van-fade-out{from{opacity:1}to{opacity:0}}@keyframes van-fade-out{from{opacity:1}to{opacity:0}}@-webkit-keyframes van-rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes van-rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.van-fade-enter-active{-webkit-animation:.3s van-fade-in both ease-out;animation:.3s van-fade-in both ease-out}.van-fade-leave-active{-webkit-animation:.3s van-fade-out both ease-in;animation:.3s van-fade-out both ease-in}.van-slide-up-enter-active{-webkit-animation:van-slide-up-enter .3s both ease-out;animation:van-slide-up-enter .3s both ease-out}.van-slide-up-leave-active{-webkit-animation:van-slide-up-leave .3s both ease-in;animation:van-slide-up-leave .3s both ease-in}.van-slide-down-enter-active{-webkit-animation:van-slide-down-enter .3s both ease-out;animation:van-slide-down-enter .3s both ease-out}.van-slide-down-leave-active{-webkit-animation:van-slide-down-leave .3s both ease-in;animation:van-slide-down-leave .3s both ease-in}.van-slide-left-enter-active{-webkit-animation:van-slide-left-enter .3s both ease-out;animation:van-slide-left-enter .3s both ease-out}.van-slide-left-leave-active{-webkit-animation:van-slide-left-leave .3s both ease-in;animation:van-slide-left-leave .3s both ease-in}.van-slide-right-enter-active{-webkit-animation:van-slide-right-enter .3s both ease-out;animation:van-slide-right-enter .3s both ease-out}.van-slide-right-leave-active{-webkit-animation:van-slide-right-leave .3s both ease-in;animation:van-slide-right-leave .3s both ease-in}.van-overlay{position:fixed;top:0;left:0;z-index:1;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.van-info{position:absolute;top:0;right:0;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:-apple-system-font,Helvetica Neue,Arial,sans-serif;line-height:1.2;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:16px;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.van-info--dot{width:8px;min-width:0;height:8px;background-color:#ee0a24;border-radius:100%}.van-sidebar-item{position:relative;display:block;box-sizing:border-box;padding:20px 12px;overflow:hidden;color:#323233;font-size:14px;line-height:20px;background-color:#f7f8fa;cursor:pointer;-webkit-user-select:none;user-select:none}.van-sidebar-item:active{background-color:#f2f3f5}.van-sidebar-item__text{position:relative;display:inline-block;word-break:break-all}.van-sidebar-item:not(:last-child)::after{border-bottom-width:1px}.van-sidebar-item--select{color:#323233;font-weight:500}.van-sidebar-item--select,.van-sidebar-item--select:active{background-color:#fff}.van-sidebar-item--select::before{position:absolute;top:50%;left:0;width:4px;height:16px;background-color:#ee0a24;-webkit-transform:translateY(-50%);transform:translateY(-50%);content:''}.van-sidebar-item--disabled{color:#c8c9cc;cursor:not-allowed}.van-sidebar-item--disabled:active{background-color:#f7f8fa}@font-face{font-weight:400;font-family:vant-icon;font-style:normal;font-display:auto;src:url(data:font/ttf;base64,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) format('woff2'),url(https://b.yzcdn.cn/vant/vant-icon-f463a9.woff) format('woff'),url(https://b.yzcdn.cn/vant/vant-icon-f463a9.ttf) format('truetype')}.van-icon{position:relative;display:inline-block;font:normal normal normal 14px/1 vant-icon;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}.van-icon::before{display:inline-block}.van-icon-add-o::before{content:'\\F000'}.van-icon-add-square::before{content:'\\F001'}.van-icon-add::before{content:'\\F002'}.van-icon-after-sale::before{content:'\\F003'}.van-icon-aim::before{content:'\\F004'}.van-icon-alipay::before{content:'\\F005'}.van-icon-apps-o::before{content:'\\F006'}.van-icon-arrow-down::before{content:'\\F007'}.van-icon-arrow-left::before{content:'\\F008'}.van-icon-arrow-up::before{content:'\\F009'}.van-icon-arrow::before{content:'\\F00A'}.van-icon-ascending::before{content:'\\F00B'}.van-icon-audio::before{content:'\\F00C'}.van-icon-award-o::before{content:'\\F00D'}.van-icon-award::before{content:'\\F00E'}.van-icon-back-top::before{content:'\\F0E6'}.van-icon-bag-o::before{content:'\\F00F'}.van-icon-bag::before{content:'\\F010'}.van-icon-balance-list-o::before{content:'\\F011'}.van-icon-balance-list::before{content:'\\F012'}.van-icon-balance-o::before{content:'\\F013'}.van-icon-balance-pay::before{content:'\\F014'}.van-icon-bar-chart-o::before{content:'\\F015'}.van-icon-bars::before{content:'\\F016'}.van-icon-bell::before{content:'\\F017'}.van-icon-bill-o::before{content:'\\F018'}.van-icon-bill::before{content:'\\F019'}.van-icon-birthday-cake-o::before{content:'\\F01A'}.van-icon-bookmark-o::before{content:'\\F01B'}.van-icon-bookmark::before{content:'\\F01C'}.van-icon-browsing-history-o::before{content:'\\F01D'}.van-icon-browsing-history::before{content:'\\F01E'}.van-icon-brush-o::before{content:'\\F01F'}.van-icon-bulb-o::before{content:'\\F020'}.van-icon-bullhorn-o::before{content:'\\F021'}.van-icon-calendar-o::before{content:'\\F022'}.van-icon-card::before{content:'\\F023'}.van-icon-cart-circle-o::before{content:'\\F024'}.van-icon-cart-circle::before{content:'\\F025'}.van-icon-cart-o::before{content:'\\F026'}.van-icon-cart::before{content:'\\F027'}.van-icon-cash-back-record::before{content:'\\F028'}.van-icon-cash-on-deliver::before{content:'\\F029'}.van-icon-cashier-o::before{content:'\\F02A'}.van-icon-certificate::before{content:'\\F02B'}.van-icon-chart-trending-o::before{content:'\\F02C'}.van-icon-chat-o::before{content:'\\F02D'}.van-icon-chat::before{content:'\\F02E'}.van-icon-checked::before{content:'\\F02F'}.van-icon-circle::before{content:'\\F030'}.van-icon-clear::before{content:'\\F031'}.van-icon-clock-o::before{content:'\\F032'}.van-icon-clock::before{content:'\\F033'}.van-icon-close::before{content:'\\F034'}.van-icon-closed-eye::before{content:'\\F035'}.van-icon-cluster-o::before{content:'\\F036'}.van-icon-cluster::before{content:'\\F037'}.van-icon-column::before{content:'\\F038'}.van-icon-comment-circle-o::before{content:'\\F039'}.van-icon-comment-circle::before{content:'\\F03A'}.van-icon-comment-o::before{content:'\\F03B'}.van-icon-comment::before{content:'\\F03C'}.van-icon-completed::before{content:'\\F03D'}.van-icon-contact::before{content:'\\F03E'}.van-icon-coupon-o::before{content:'\\F03F'}.van-icon-coupon::before{content:'\\F040'}.van-icon-credit-pay::before{content:'\\F041'}.van-icon-cross::before{content:'\\F042'}.van-icon-debit-pay::before{content:'\\F043'}.van-icon-delete-o::before{content:'\\F0E9'}.van-icon-delete::before{content:'\\F044'}.van-icon-descending::before{content:'\\F045'}.van-icon-description::before{content:'\\F046'}.van-icon-desktop-o::before{content:'\\F047'}.van-icon-diamond-o::before{content:'\\F048'}.van-icon-diamond::before{content:'\\F049'}.van-icon-discount::before{content:'\\F04A'}.van-icon-down::before{content:'\\F04B'}.van-icon-ecard-pay::before{content:'\\F04C'}.van-icon-edit::before{content:'\\F04D'}.van-icon-ellipsis::before{content:'\\F04E'}.van-icon-empty::before{content:'\\F04F'}.van-icon-enlarge::before{content:'\\F0E4'}.van-icon-envelop-o::before{content:'\\F050'}.van-icon-exchange::before{content:'\\F051'}.van-icon-expand-o::before{content:'\\F052'}.van-icon-expand::before{content:'\\F053'}.van-icon-eye-o::before{content:'\\F054'}.van-icon-eye::before{content:'\\F055'}.van-icon-fail::before{content:'\\F056'}.van-icon-failure::before{content:'\\F057'}.van-icon-filter-o::before{content:'\\F058'}.van-icon-fire-o::before{content:'\\F059'}.van-icon-fire::before{content:'\\F05A'}.van-icon-flag-o::before{content:'\\F05B'}.van-icon-flower-o::before{content:'\\F05C'}.van-icon-font-o::before{content:'\\F0EC'}.van-icon-font::before{content:'\\F0EB'}.van-icon-free-postage::before{content:'\\F05D'}.van-icon-friends-o::before{content:'\\F05E'}.van-icon-friends::before{content:'\\F05F'}.van-icon-gem-o::before{content:'\\F060'}.van-icon-gem::before{content:'\\F061'}.van-icon-gift-card-o::before{content:'\\F062'}.van-icon-gift-card::before{content:'\\F063'}.van-icon-gift-o::before{content:'\\F064'}.van-icon-gift::before{content:'\\F065'}.van-icon-gold-coin-o::before{content:'\\F066'}.van-icon-gold-coin::before{content:'\\F067'}.van-icon-good-job-o::before{content:'\\F068'}.van-icon-good-job::before{content:'\\F069'}.van-icon-goods-collect-o::before{content:'\\F06A'}.van-icon-goods-collect::before{content:'\\F06B'}.van-icon-graphic::before{content:'\\F06C'}.van-icon-home-o::before{content:'\\F06D'}.van-icon-hot-o::before{content:'\\F06E'}.van-icon-hot-sale-o::before{content:'\\F06F'}.van-icon-hot-sale::before{content:'\\F070'}.van-icon-hot::before{content:'\\F071'}.van-icon-hotel-o::before{content:'\\F072'}.van-icon-idcard::before{content:'\\F073'}.van-icon-info-o::before{content:'\\F074'}.van-icon-info::before{content:'\\F075'}.van-icon-invition::before{content:'\\F076'}.van-icon-label-o::before{content:'\\F077'}.van-icon-label::before{content:'\\F078'}.van-icon-like-o::before{content:'\\F079'}.van-icon-like::before{content:'\\F07A'}.van-icon-live::before{content:'\\F07B'}.van-icon-location-o::before{content:'\\F07C'}.van-icon-location::before{content:'\\F07D'}.van-icon-lock::before{content:'\\F07E'}.van-icon-logistics::before{content:'\\F07F'}.van-icon-manager-o::before{content:'\\F080'}.van-icon-manager::before{content:'\\F081'}.van-icon-map-marked::before{content:'\\F082'}.van-icon-medal-o::before{content:'\\F083'}.van-icon-medal::before{content:'\\F084'}.van-icon-minus::before{content:'\\F0E8'}.van-icon-more-o::before{content:'\\F085'}.van-icon-more::before{content:'\\F086'}.van-icon-music-o::before{content:'\\F087'}.van-icon-music::before{content:'\\F088'}.van-icon-new-arrival-o::before{content:'\\F089'}.van-icon-new-arrival::before{content:'\\F08A'}.van-icon-new-o::before{content:'\\F08B'}.van-icon-new::before{content:'\\F08C'}.van-icon-newspaper-o::before{content:'\\F08D'}.van-icon-notes-o::before{content:'\\F08E'}.van-icon-orders-o::before{content:'\\F08F'}.van-icon-other-pay::before{content:'\\F090'}.van-icon-paid::before{content:'\\F091'}.van-icon-passed::before{content:'\\F092'}.van-icon-pause-circle-o::before{content:'\\F093'}.van-icon-pause-circle::before{content:'\\F094'}.van-icon-pause::before{content:'\\F095'}.van-icon-peer-pay::before{content:'\\F096'}.van-icon-pending-payment::before{content:'\\F097'}.van-icon-phone-circle-o::before{content:'\\F098'}.van-icon-phone-circle::before{content:'\\F099'}.van-icon-phone-o::before{content:'\\F09A'}.van-icon-phone::before{content:'\\F09B'}.van-icon-photo-fail::before{content:'\\F0E5'}.van-icon-photo-o::before{content:'\\F09C'}.van-icon-photo::before{content:'\\F09D'}.van-icon-photograph::before{content:'\\F09E'}.van-icon-play-circle-o::before{content:'\\F09F'}.van-icon-play-circle::before{content:'\\F0A0'}.van-icon-play::before{content:'\\F0A1'}.van-icon-plus::before{content:'\\F0A2'}.van-icon-point-gift-o::before{content:'\\F0A3'}.van-icon-point-gift::before{content:'\\F0A4'}.van-icon-points::before{content:'\\F0A5'}.van-icon-printer::before{content:'\\F0A6'}.van-icon-qr-invalid::before{content:'\\F0A7'}.van-icon-qr::before{content:'\\F0A8'}.van-icon-question-o::before{content:'\\F0A9'}.van-icon-question::before{content:'\\F0AA'}.van-icon-records::before{content:'\\F0AB'}.van-icon-refund-o::before{content:'\\F0AC'}.van-icon-replay::before{content:'\\F0AD'}.van-icon-revoke::before{content:'\\F0ED'}.van-icon-scan::before{content:'\\F0AE'}.van-icon-search::before{content:'\\F0AF'}.van-icon-send-gift-o::before{content:'\\F0B0'}.van-icon-send-gift::before{content:'\\F0B1'}.van-icon-service-o::before{content:'\\F0B2'}.van-icon-service::before{content:'\\F0B3'}.van-icon-setting-o::before{content:'\\F0B4'}.van-icon-setting::before{content:'\\F0B5'}.van-icon-share-o::before{content:'\\F0E7'}.van-icon-share::before{content:'\\F0B6'}.van-icon-shop-collect-o::before{content:'\\F0B7'}.van-icon-shop-collect::before{content:'\\F0B8'}.van-icon-shop-o::before{content:'\\F0B9'}.van-icon-shop::before{content:'\\F0BA'}.van-icon-shopping-cart-o::before{content:'\\F0BB'}.van-icon-shopping-cart::before{content:'\\F0BC'}.van-icon-shrink::before{content:'\\F0BD'}.van-icon-sign::before{content:'\\F0BE'}.van-icon-smile-comment-o::before{content:'\\F0BF'}.van-icon-smile-comment::before{content:'\\F0C0'}.van-icon-smile-o::before{content:'\\F0C1'}.van-icon-smile::before{content:'\\F0C2'}.van-icon-sort::before{content:'\\F0EA'}.van-icon-star-o::before{content:'\\F0C3'}.van-icon-star::before{content:'\\F0C4'}.van-icon-stop-circle-o::before{content:'\\F0C5'}.van-icon-stop-circle::before{content:'\\F0C6'}.van-icon-stop::before{content:'\\F0C7'}.van-icon-success::before{content:'\\F0C8'}.van-icon-thumb-circle-o::before{content:'\\F0C9'}.van-icon-thumb-circle::before{content:'\\F0CA'}.van-icon-todo-list-o::before{content:'\\F0CB'}.van-icon-todo-list::before{content:'\\F0CC'}.van-icon-tosend::before{content:'\\F0CD'}.van-icon-tv-o::before{content:'\\F0CE'}.van-icon-umbrella-circle::before{content:'\\F0CF'}.van-icon-underway-o::before{content:'\\F0D0'}.van-icon-underway::before{content:'\\F0D1'}.van-icon-upgrade::before{content:'\\F0D2'}.van-icon-user-circle-o::before{content:'\\F0D3'}.van-icon-user-o::before{content:'\\F0D4'}.van-icon-video-o::before{content:'\\F0D5'}.van-icon-video::before{content:'\\F0D6'}.van-icon-vip-card-o::before{content:'\\F0D7'}.van-icon-vip-card::before{content:'\\F0D8'}.van-icon-volume-o::before{content:'\\F0D9'}.van-icon-volume::before{content:'\\F0DA'}.van-icon-wap-home-o::before{content:'\\F0DB'}.van-icon-wap-home::before{content:'\\F0DC'}.van-icon-wap-nav::before{content:'\\F0DD'}.van-icon-warn-o::before{content:'\\F0DE'}.van-icon-warning-o::before{content:'\\F0DF'}.van-icon-warning::before{content:'\\F0E0'}.van-icon-weapp-nav::before{content:'\\F0E1'}.van-icon-wechat-pay::before{content:'\\F0E2'}.van-icon-wechat::before{content:'\\F0EE'}.van-icon-youzan-shield::before{content:'\\F0E3'}.van-icon__image{width:1em;height:1em;object-fit:contain}.van-tabbar-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#646566;font-size:12px;line-height:1;cursor:pointer}.van-tabbar-item__icon{position:relative;margin-bottom:4px;font-size:22px}.van-tabbar-item__icon .van-icon{display:block}.van-tabbar-item__icon img{display:block;height:20px}.van-tabbar-item--active{color:#1989fa;background-color:#fff}.van-tabbar-item .van-info{margin-top:4px}.van-step{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#969799;font-size:14px}.van-step__circle{display:block;width:5px;height:5px;background-color:#969799;border-radius:50%}.van-step__line{position:absolute;background-color:#ebedf0;-webkit-transition:background-color .3s;transition:background-color .3s}.van-step--horizontal{float:left}.van-step--horizontal:first-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child{position:absolute;right:1px;width:auto}.van-step--horizontal:last-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child .van-step__circle-container{right:-9px;left:auto}.van-step--horizontal .van-step__circle-container{position:absolute;top:30px;left:-8px;z-index:1;padding:0 8px;background-color:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-step--horizontal .van-step__title{display:inline-block;margin-left:3px;font-size:12px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media (max-width:321px){.van-step--horizontal .van-step__title{font-size:11px}}.van-step--horizontal .van-step__line{top:30px;left:0;width:100%;height:1px}.van-step--horizontal .van-step__icon{display:block;font-size:12px}.van-step--horizontal .van-step--process{color:#323233}.van-step--vertical{display:block;float:none;padding:10px 10px 10px 0;line-height:18px}.van-step--vertical:not(:last-child)::after{border-bottom-width:1px}.van-step--vertical:first-child::before{position:absolute;top:0;left:-15px;z-index:1;width:1px;height:20px;background-color:#fff;content:''}.van-step--vertical .van-step__circle-container{position:absolute;top:19px;left:-15px;z-index:2;font-size:12px;line-height:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.van-step--vertical .van-step__line{top:16px;left:-15px;width:1px;height:100%}.van-step:last-child .van-step__line{width:0}.van-step--finish{color:#323233}.van-step--finish .van-step__circle,.van-step--finish .van-step__line{background-color:#07c160}.van-step__icon,.van-step__title{-webkit-transition:color .3s;transition:color .3s}.van-step__icon--active,.van-step__icon--finish,.van-step__title--active,.van-step__title--finish{color:#07c160}.van-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none}.van-rate__item{position:relative}.van-rate__item:not(:last-child){padding-right:4px}.van-rate__icon{display:block;width:1em;color:#c8c9cc;font-size:20px}.van-rate__icon--half{position:absolute;top:0;left:0;width:.5em;overflow:hidden}.van-rate__icon--full{color:#ee0a24}.van-rate__icon--disabled{color:#c8c9cc}.van-rate--disabled{cursor:not-allowed}.van-rate--readonly{cursor:default}.van-notice-bar{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:40px;padding:0 16px;color:#ed6a0c;font-size:14px;line-height:24px;background-color:#fffbe8}.van-notice-bar__left-icon,.van-notice-bar__right-icon{min-width:24px;font-size:16px}.van-notice-bar__right-icon{text-align:right;cursor:pointer}.van-notice-bar__wrap{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;overflow:hidden}.van-notice-bar__content{position:absolute;white-space:nowrap;-webkit-transition-timing-function:linear;transition-timing-function:linear}.van-notice-bar__content.van-ellipsis{max-width:100%}.van-notice-bar--wrapable{height:auto;padding:8px 16px}.van-notice-bar--wrapable .van-notice-bar__wrap{height:auto}.van-notice-bar--wrapable .van-notice-bar__content{position:relative;white-space:normal;word-wrap:break-word}.van-nav-bar{position:relative;z-index:1;line-height:22px;text-align:center;background-color:#fff;-webkit-user-select:none;user-select:none}.van-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.van-nav-bar--safe-area-inset-top{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.van-nav-bar .van-icon{color:#1989fa}.van-nav-bar__content{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:46px}.van-nav-bar__arrow{margin-right:4px;font-size:16px}.van-nav-bar__title{max-width:60%;margin:0 auto;color:#323233;font-weight:500;font-size:16px}.van-nav-bar__left,.van-nav-bar__right{position:absolute;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 16px;font-size:14px;cursor:pointer}.van-nav-bar__left:active,.van-nav-bar__right:active{opacity:.7}.van-nav-bar__left{left:0}.van-nav-bar__right{right:0}.van-nav-bar__text{color:#1989fa}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__icon{font-size:28px}.van-grid-item__icon-wrapper{position:relative}.van-grid-item__text{color:#646566;font-size:12px;line-height:1.5;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:8px}.van-grid-item__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;height:100%;padding:16px 8px;background-color:#fff}.van-grid-item__content::after{z-index:1;border-width:0 1px 1px 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-grid-item__content--horizontal{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.van-grid-item__content--horizontal .van-grid-item__icon+.van-grid-item__text{margin-top:0;margin-left:8px}.van-grid-item__content--surround::after{border-width:1px}.van-grid-item__content--clickable{cursor:pointer}.van-grid-item__content--clickable:active{background-color:#f2f3f5}.van-goods-action-icon{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:48px;height:100%;color:#646566;font-size:10px;line-height:1;text-align:center;background-color:#fff;cursor:pointer}.van-goods-action-icon:active{background-color:#f2f3f5}.van-goods-action-icon__icon{position:relative;width:1em;margin:0 auto 5px;color:#323233;font-size:18px}.van-checkbox{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none}.van-checkbox--disabled{cursor:not-allowed}.van-checkbox--label-disabled{cursor:default}.van-checkbox--horizontal{margin-right:12px}.van-checkbox__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em;cursor:pointer}.van-checkbox__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:1.25;text-align:center;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color}.van-checkbox__icon--round .van-icon{border-radius:100%}.van-checkbox__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-checkbox__icon--disabled{cursor:not-allowed}.van-checkbox__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-checkbox__icon--disabled.van-checkbox__icon--checked .van-icon{color:#c8c9cc}.van-checkbox__label{margin-left:8px;color:#323233;line-height:20px}.van-checkbox__label--left{margin:0 8px 0 0}.van-checkbox__label--disabled{color:#c8c9cc}.van-coupon{margin:0 12px 12px;overflow:hidden;background-color:#fff;border-radius:8px;box-shadow:0 0 4px rgba(0,0,0,.1)}.van-coupon:active{background-color:#f2f3f5}.van-coupon__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;min-height:84px;padding:14px 0;color:#323233}.van-coupon__head{position:relative;min-width:96px;padding:0 8px;color:#ee0a24;text-align:center}.van-coupon__amount,.van-coupon__condition,.van-coupon__name,.van-coupon__valid{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-coupon__amount{margin-bottom:6px;font-weight:500;font-size:30px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-coupon__amount span{font-weight:400;font-size:40%}.van-coupon__amount span:not(:empty){margin-left:2px}.van-coupon__condition{font-size:12px;line-height:16px;white-space:pre-wrap}.van-coupon__body{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:0 8px 8px 0}.van-coupon__name{margin-bottom:10px;font-weight:700;font-size:14px;line-height:20px}.van-coupon__valid{font-size:12px}.van-coupon__corner{position:absolute;top:0;right:16px;bottom:0}.van-coupon__description{padding:8px 16px;font-size:12px;border-top:1px dashed #ebedf0}.van-coupon--disabled:active{background-color:#fff}.van-coupon--disabled .van-coupon-item__content{height:74px}.van-coupon--disabled .van-coupon__head{color:inherit}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:50%}.van-image--round img{border-radius:inherit}.van-image__error,.van-image__img,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:14px;background-color:#f7f8fa}.van-image__loading-icon{color:#dcdee0;font-size:32px}.van-image__error-icon{color:#dcdee0;font-size:32px}.van-radio{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none}.van-radio--disabled{cursor:not-allowed}.van-radio--label-disabled{cursor:default}.van-radio--horizontal{margin-right:12px}.van-radio__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em;cursor:pointer}.van-radio__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:1.25;text-align:center;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-radio__icon--disabled{cursor:not-allowed}.van-radio__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:#c8c9cc}.van-radio__label{margin-left:8px;color:#323233;line-height:20px}.van-radio__label--left{margin:0 8px 0 0}.van-radio__label--disabled{color:#c8c9cc}.van-tag{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 4px;color:#fff;font-size:12px;line-height:16px;border-radius:2px}.van-tag--default{background-color:#969799}.van-tag--default.van-tag--plain{color:#969799}.van-tag--danger{background-color:#ee0a24}.van-tag--danger.van-tag--plain{color:#ee0a24}.van-tag--primary{background-color:#1989fa}.van-tag--primary.van-tag--plain{color:#1989fa}.van-tag--success{background-color:#07c160}.van-tag--success.van-tag--plain{color:#07c160}.van-tag--warning{background-color:#ff976a}.van-tag--warning.van-tag--plain{color:#ff976a}.van-tag--plain{background-color:#fff;border-color:currentColor}.van-tag--plain::before{position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid;border-color:inherit;border-radius:inherit;content:'';pointer-events:none}.van-tag--medium{padding:2px 6px}.van-tag--large{padding:4px 8px;font-size:14px;border-radius:4px}.van-tag--mark{border-radius:0 999px 999px 0}.van-tag--mark::after{display:block;width:2px;content:''}.van-tag--round{border-radius:999px}.van-tag__close{margin-left:2px;cursor:pointer}.van-card{position:relative;box-sizing:border-box;padding:8px 16px;color:#323233;font-size:12px;background-color:#fafafa}.van-card:not(:first-child){margin-top:8px}.van-card__header{display:-webkit-box;display:-webkit-flex;display:flex}.van-card__thumb{position:relative;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:88px;height:88px;margin-right:8px}.van-card__thumb img{border-radius:8px}.van-card__content{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;min-width:0;min-height:88px}.van-card__content--centered{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-card__desc,.van-card__title{word-wrap:break-word}.van-card__title{max-height:32px;font-weight:500;line-height:16px}.van-card__desc{max-height:20px;color:#646566;line-height:20px}.van-card__bottom{line-height:20px}.van-card__price{display:inline-block;color:#323233;font-weight:500;font-size:12px}.van-card__price-integer{font-size:16px;font-family:Avenir-Heavy,PingFang SC,Helvetica Neue,Arial,sans-serif}.van-card__price-decimal{font-family:Avenir-Heavy,PingFang SC,Helvetica Neue,Arial,sans-serif}.van-card__origin-price{display:inline-block;margin-left:5px;color:#969799;font-size:10px;text-decoration:line-through}.van-card__num{float:right;color:#969799}.van-card__tag{position:absolute;top:2px;left:0}.van-card__footer{-webkit-box-flex:0;-webkit-flex:none;flex:none;text-align:right}.van-card__footer .van-button{margin-left:5px}.van-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:10px 16px;overflow:hidden;color:#323233;font-size:14px;line-height:24px;background-color:#fff}.van-cell::after{position:absolute;box-sizing:border-box;content:' ';pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-cell--borderless::after,.van-cell:last-child::after{display:none}.van-cell__label{margin-top:4px;color:#969799;font-size:12px;line-height:18px}.van-cell__title,.van-cell__value{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-cell__value{position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle;word-wrap:break-word}.van-cell__value--alone{color:#323233;text-align:left}.van-cell__left-icon,.van-cell__right-icon{height:24px;font-size:16px;line-height:24px}.van-cell__left-icon{margin-right:4px}.van-cell__right-icon{margin-left:4px;color:#969799}.van-cell--clickable{cursor:pointer}.van-cell--clickable:active{background-color:#f2f3f5}.van-cell--required{overflow:visible}.van-cell--required::before{position:absolute;left:8px;color:#ee0a24;font-size:14px;content:'*'}.van-cell--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-cell--large{padding-top:12px;padding-bottom:12px}.van-cell--large .van-cell__title{font-size:16px}.van-cell--large .van-cell__label{font-size:14px}.van-coupon-cell__value--selected{color:#323233}.van-contact-card{padding:16px}.van-contact-card__value{margin-left:5px;line-height:20px}.van-contact-card--add .van-contact-card__value{line-height:40px}.van-contact-card--add .van-cell__left-icon{color:#1989fa;font-size:40px}.van-contact-card::before{position:absolute;right:0;bottom:0;left:0;height:2px;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:80px;content:''}.van-collapse-item{position:relative}.van-collapse-item--border::after{position:absolute;box-sizing:border-box;content:' ';pointer-events:none;top:0;right:16px;left:16px;border-top:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-collapse-item__title .van-cell__right-icon::before{-webkit-transform:rotate(90deg) translateZ(0);transform:rotate(90deg) translateZ(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.van-collapse-item__title::after{right:16px;display:none}.van-collapse-item__title--expanded .van-cell__right-icon::before{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.van-collapse-item__title--expanded::after{display:block}.van-collapse-item__title--borderless::after{display:none}.van-collapse-item__title--disabled{cursor:not-allowed}.van-collapse-item__title--disabled,.van-collapse-item__title--disabled .van-cell__right-icon{color:#c8c9cc}.van-collapse-item__title--disabled:active{background-color:#fff}.van-collapse-item__wrapper{overflow:hidden;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out;will-change:height}.van-collapse-item__content{padding:12px 16px;color:#969799;font-size:14px;line-height:1.5;background-color:#fff}.van-field__label{-webkit-box-flex:0;-webkit-flex:none;flex:none;box-sizing:border-box;width:6.2em;margin-right:12px;color:#646566;text-align:left;word-wrap:break-word}.van-field__label--center{text-align:center}.van-field__label--right{text-align:right}.van-field--disabled .van-field__label{color:#c8c9cc}.van-field__value{overflow:visible}.van-field__body{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-field__control{display:block;box-sizing:border-box;width:100%;min-width:0;margin:0;padding:0;color:#323233;line-height:inherit;text-align:left;background-color:transparent;border:0;resize:none}.van-field__control::-webkit-input-placeholder{color:#c8c9cc}.van-field__control::placeholder{color:#c8c9cc}.van-field__control:disabled{color:#c8c9cc;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#c8c9cc}.van-field__control:read-only{cursor:default}.van-field__control--center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.van-field__control--right{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;text-align:right}.van-field__control--custom{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:24px}.van-field__control[type=date],.van-field__control[type=datetime-local],.van-field__control[type=time]{min-height:24px}.van-field__control[type=search]{-webkit-appearance:none}.van-field__button,.van-field__clear,.van-field__icon,.van-field__right-icon{-webkit-flex-shrink:0;flex-shrink:0}.van-field__clear,.van-field__right-icon{margin-right:-8px;padding:0 8px;line-height:inherit}.van-field__clear{color:#c8c9cc;font-size:16px;cursor:pointer}.van-field__left-icon .van-icon,.van-field__right-icon .van-icon{display:block;font-size:16px;line-height:inherit}.van-field__left-icon{margin-right:4px}.van-field__right-icon{color:#969799}.van-field__button{padding-left:8px}.van-field__error-message{color:#ee0a24;font-size:12px;text-align:left}.van-field__error-message--center{text-align:center}.van-field__error-message--right{text-align:right}.van-field__word-limit{margin-top:4px;color:#646566;font-size:12px;line-height:16px;text-align:right}.van-field--error .van-field__control::-webkit-input-placeholder{color:#ee0a24;-webkit-text-fill-color:currentColor}.van-field--error .van-field__control,.van-field--error .van-field__control::placeholder{color:#ee0a24;-webkit-text-fill-color:currentColor}.van-field--min-height .van-field__control{min-height:60px}.van-search{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:10px 12px;background-color:#fff}.van-search__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:12px;background-color:#f7f8fa;border-radius:2px}.van-search__content--round{border-radius:999px}.van-search__label{padding:0 5px;color:#323233;font-size:14px;line-height:34px}.van-search .van-cell{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 8px 5px 0;background-color:transparent}.van-search .van-cell__left-icon{color:#969799}.van-search--show-action{padding-right:0}.van-search input::-webkit-search-cancel-button,.van-search input::-webkit-search-decoration,.van-search input::-webkit-search-results-button,.van-search input::-webkit-search-results-decoration{display:none}.van-search__action{padding:0 8px;color:#323233;font-size:14px;line-height:34px;cursor:pointer;-webkit-user-select:none;user-select:none}.van-search__action:active{background-color:#f2f3f5}.van-overflow-hidden{overflow:hidden!important}.van-popup{position:fixed;max-height:100%;overflow-y:auto;background-color:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-overflow-scrolling:touch}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:16px}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 16px 16px}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:16px 0 0 16px}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:16px 16px 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 16px 16px 0}.van-popup--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-popup-slide-bottom-enter-active,.van-popup-slide-left-enter-active,.van-popup-slide-right-enter-active,.van-popup-slide-top-enter-active{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.van-popup-slide-bottom-leave-active,.van-popup-slide-left-leave-active,.van-popup-slide-right-leave-active,.van-popup-slide-top-leave-active{-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.van-popup-slide-top-enter,.van-popup-slide-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-popup-slide-right-enter,.van-popup-slide-right-leave-active{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.van-popup-slide-bottom-enter,.van-popup-slide-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-popup-slide-left-enter,.van-popup-slide-left-leave-active{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-popup__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-popup__close-icon:active{color:#969799}.van-popup__close-icon--top-left{top:16px;left:16px}.van-popup__close-icon--top-right{top:16px;right:16px}.van-popup__close-icon--bottom-left{bottom:16px;left:16px}.van-popup__close-icon--bottom-right{right:16px;bottom:16px}.van-share-sheet__header{padding:12px 16px 4px;text-align:center}.van-share-sheet__title{margin-top:8px;color:#323233;font-weight:400;font-size:14px;line-height:20px}.van-share-sheet__description{display:block;margin-top:8px;color:#969799;font-size:12px;line-height:16px}.van-share-sheet__options{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;padding:16px 0 16px 8px;overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch}.van-share-sheet__options--border::before{position:absolute;box-sizing:border-box;content:' ';pointer-events:none;top:0;right:0;left:16px;border-top:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-share-sheet__options::-webkit-scrollbar{height:0}.van-share-sheet__option{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.van-share-sheet__option:active{opacity:.7}.van-share-sheet__icon{width:48px;height:48px;margin:0 16px}.van-share-sheet__name{margin-top:8px;padding:0 4px;color:#646566;font-size:12px}.van-share-sheet__option-description{padding:0 4px;color:#c8c9cc;font-size:12px}.van-share-sheet__cancel{display:block;width:100%;padding:0;font-size:16px;line-height:48px;text-align:center;background:#fff;border:none;cursor:pointer}.van-share-sheet__cancel::before{display:block;height:8px;background-color:#f7f8fa;content:' '}.van-share-sheet__cancel:active{background-color:#f2f3f5}.van-popover{position:absolute;overflow:visible;background-color:transparent;-webkit-transition:opacity .15s,-webkit-transform .15s;transition:opacity .15s,-webkit-transform .15s;transition:opacity .15s,transform .15s;transition:opacity .15s,transform .15s,-webkit-transform .15s}.van-popover__wrapper{display:inline-block}.van-popover__arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.van-popover__content{overflow:hidden;border-radius:8px}.van-popover__action{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;width:128px;height:44px;padding:0 16px;font-size:14px;line-height:20px;cursor:pointer}.van-popover__action:last-child .van-popover__action-text::after{display:none}.van-popover__action-text{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%}.van-popover__action-icon{margin-right:8px;font-size:20px}.van-popover__action--with-icon .van-popover__action-text{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.van-popover[data-popper-placement^=top] .van-popover__arrow{bottom:0;border-top-color:currentColor;border-bottom-width:0;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.van-popover[data-popper-placement=top]{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.van-popover[data-popper-placement=top] .van-popover__arrow{left:50%}.van-popover[data-popper-placement=top-start]{-webkit-transform-origin:0 100%;transform-origin:0 100%}.van-popover[data-popper-placement=top-start] .van-popover__arrow{left:16px}.van-popover[data-popper-placement=top-end]{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.van-popover[data-popper-placement=top-end] .van-popover__arrow{right:16px}.van-popover[data-popper-placement^=left] .van-popover__arrow{right:0;border-right-width:0;border-left-color:currentColor;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.van-popover[data-popper-placement=left]{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.van-popover[data-popper-placement=left] .van-popover__arrow{top:50%}.van-popover[data-popper-placement=left-start]{-webkit-transform-origin:100% 0;transform-origin:100% 0}.van-popover[data-popper-placement=left-start] .van-popover__arrow{top:16px}.van-popover[data-popper-placement=left-end]{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.van-popover[data-popper-placement=left-end] .van-popover__arrow{bottom:16px}.van-popover[data-popper-placement^=right] .van-popover__arrow{left:0;border-right-color:currentColor;border-left-width:0;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.van-popover[data-popper-placement=right]{-webkit-transform-origin:0 50%;transform-origin:0 50%}.van-popover[data-popper-placement=right] .van-popover__arrow{top:50%}.van-popover[data-popper-placement=right-start]{-webkit-transform-origin:0 0;transform-origin:0 0}.van-popover[data-popper-placement=right-start] .van-popover__arrow{top:16px}.van-popover[data-popper-placement=right-end]{-webkit-transform-origin:0 100%;transform-origin:0 100%}.van-popover[data-popper-placement=right-end] .van-popover__arrow{bottom:16px}.van-popover[data-popper-placement^=bottom] .van-popover__arrow{top:0;border-top-width:0;border-bottom-color:currentColor;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.van-popover[data-popper-placement=bottom]{-webkit-transform-origin:50% 0;transform-origin:50% 0}.van-popover[data-popper-placement=bottom] .van-popover__arrow{left:50%}.van-popover[data-popper-placement=bottom-start]{-webkit-transform-origin:0 0;transform-origin:0 0}.van-popover[data-popper-placement=bottom-start] .van-popover__arrow{left:16px}.van-popover[data-popper-placement=bottom-end]{-webkit-transform-origin:100% 0;transform-origin:100% 0}.van-popover[data-popper-placement=bottom-end] .van-popover__arrow{right:16px}.van-popover--light{color:#323233}.van-popover--light .van-popover__content{background-color:#fff;box-shadow:0 2px 12px rgba(50,50,51,.12)}.van-popover--light .van-popover__arrow{color:#fff}.van-popover--light .van-popover__action:active{background-color:#f2f3f5}.van-popover--light .van-popover__action--disabled{color:#c8c9cc;cursor:not-allowed}.van-popover--light .van-popover__action--disabled:active{background-color:transparent}.van-popover--dark{color:#fff}.van-popover--dark .van-popover__content{background-color:#4a4a4a}.van-popover--dark .van-popover__arrow{color:#4a4a4a}.van-popover--dark .van-popover__action:active{background-color:rgba(0,0,0,.2)}.van-popover--dark .van-popover__action--disabled{color:#969799}.van-popover--dark .van-popover__action--disabled:active{background-color:transparent}.van-popover--dark .van-popover__action-text::after{border-color:#646566}.van-popover-zoom-enter,.van-popover-zoom-leave-active{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}.van-popover-zoom-enter-active{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.van-popover-zoom-leave-active{-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.van-notify{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:8px 16px;color:#fff;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word}.van-notify--primary{background-color:#1989fa}.van-notify--success{background-color:#07c160}.van-notify--danger{background-color:#ee0a24}.van-notify--warning{background-color:#ff976a}.van-dropdown-item{position:fixed;right:0;left:0;z-index:10;overflow:hidden}.van-dropdown-item__icon{display:block;line-height:inherit}.van-dropdown-item__option{text-align:left}.van-dropdown-item__option--active{color:#ee0a24}.van-dropdown-item__option--active .van-dropdown-item__icon{color:#ee0a24}.van-dropdown-item--up{top:0}.van-dropdown-item--down{bottom:0}.van-dropdown-item__content{position:absolute;max-height:80%}.van-loading{position:relative;color:#c8c9cc;font-size:0;vertical-align:middle}.van-loading__spinner{position:relative;display:inline-block;width:30px;max-width:100%;height:30px;max-height:100%;vertical-align:middle;-webkit-animation:van-rotate .8s linear infinite;animation:van-rotate .8s linear infinite}.van-loading__spinner--spinner{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.van-loading__spinner--spinner i{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__spinner--spinner i::before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:' '}.van-loading__spinner--circular{-webkit-animation-duration:2s;animation-duration:2s}.van-loading__circular{display:block;width:100%;height:100%}.van-loading__circular circle{-webkit-animation:van-circular 1.5s ease-in-out infinite;animation:van-circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.van-loading__text{display:inline-block;margin-left:8px;color:#969799;font-size:14px;vertical-align:middle}.van-loading--vertical{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-loading--vertical .van-loading__text{margin:8px 0 0}@-webkit-keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}.van-loading__spinner--spinner i:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.van-loading__spinner--spinner i:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.van-loading__spinner--spinner i:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.van-loading__spinner--spinner i:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.van-loading__spinner--spinner i:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.van-loading__spinner--spinner i:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.van-loading__spinner--spinner i:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.van-loading__spinner--spinner i:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.van-loading__spinner--spinner i:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.van-loading__spinner--spinner i:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.van-loading__spinner--spinner i:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.van-loading__spinner--spinner i:nth-of-type(12){-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:.3125}.van-pull-refresh{overflow:hidden;-webkit-user-select:none;user-select:none}.van-pull-refresh__track{position:relative;height:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.van-pull-refresh__head{position:absolute;left:0;width:100%;height:50px;overflow:hidden;color:#969799;font-size:14px;line-height:50px;text-align:center;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.van-number-keyboard{position:fixed;bottom:0;left:0;z-index:100;width:100%;padding-bottom:22px;background-color:#f2f3f5;-webkit-user-select:none;user-select:none}.van-number-keyboard--with-title{border-radius:20px 20px 0 0}.van-number-keyboard__header{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;height:34px;padding-top:6px;color:#646566;font-size:16px}.van-number-keyboard__title{display:inline-block;font-weight:400}.van-number-keyboard__title-left{position:absolute;left:0}.van-number-keyboard__body{display:-webkit-box;display:-webkit-flex;display:flex;padding:6px 0 0 6px}.van-number-keyboard__keys{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:3;-webkit-flex:3;flex:3;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-number-keyboard__close{position:absolute;right:0;height:100%;padding:0 16px;color:#576b95;font-size:14px;background-color:transparent;border:none;cursor:pointer}.van-number-keyboard__close:active{opacity:.7}.van-number-keyboard__sidebar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-number-keyboard--unfit{padding-bottom:0}.van-key{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:48px;font-size:28px;line-height:1.5;background-color:#fff;border-radius:8px;cursor:pointer}.van-key--large{position:absolute;top:0;right:6px;bottom:6px;left:0;height:auto}.van-key--blue,.van-key--delete{font-size:16px}.van-key--active{background-color:#ebedf0}.van-key--blue{color:#fff;background-color:#1989fa}.van-key--blue.van-key--active{background-color:#0570db}.van-key__wrapper{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-basis:33%;flex-basis:33%;box-sizing:border-box;padding:0 6px 6px 0}.van-key__wrapper--wider{-webkit-flex-basis:66%;flex-basis:66%}.van-key__delete-icon{width:32px;height:22px}.van-key__collapse-icon{width:30px;height:24px}.van-key__loading-icon{color:#fff}.van-list__error-text,.van-list__finished-text,.van-list__loading{color:#969799;font-size:14px;line-height:50px;text-align:center}.van-list__placeholder{height:0;pointer-events:none}.van-switch{position:relative;display:inline-block;box-sizing:content-box;width:2em;height:1em;font-size:30px;background-color:#fff;border:1px solid rgba(0,0,0,.1);border-radius:1em;cursor:pointer;-webkit-transition:background-color .3s;transition:background-color .3s}.van-switch__node{position:absolute;top:0;left:0;width:1em;height:1em;background-color:#fff;border-radius:100%;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05),-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05)}.van-switch__loading{top:25%;left:25%;width:50%;height:50%;line-height:1}.van-switch--on{background-color:#1989fa}.van-switch--on .van-switch__node{-webkit-transform:translateX(1em);transform:translateX(1em)}.van-switch--on .van-switch__loading{color:#1989fa}.van-switch--disabled{cursor:not-allowed;opacity:.5}.van-switch--loading{cursor:default}.van-switch-cell{padding-top:9px;padding-bottom:9px}.van-switch-cell--large{padding-top:11px;padding-bottom:11px}.van-switch-cell .van-switch{float:right}.van-button{position:relative;display:inline-block;box-sizing:border-box;height:44px;margin:0;padding:0;font-size:16px;line-height:1.2;text-align:center;border-radius:2px;cursor:pointer;-webkit-transition:opacity .2s;transition:opacity .2s;-webkit-appearance:none}.van-button::before{position:absolute;top:50%;left:50%;width:100%;height:100%;background-color:#000;border:inherit;border-color:#000;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:' '}.van-button:active::before{opacity:.1}.van-button--disabled::before,.van-button--loading::before{display:none}.van-button--default{color:#323233;background-color:#fff;border:1px solid #ebedf0}.van-button--primary{color:#fff;background-color:#07c160;border:1px solid #07c160}.van-button--info{color:#fff;background-color:#1989fa;border:1px solid #1989fa}.van-button--danger{color:#fff;background-color:#ee0a24;border:1px solid #ee0a24}.van-button--warning{color:#fff;background-color:#ff976a;border:1px solid #ff976a}.van-button--plain{background-color:#fff}.van-button--plain.van-button--primary{color:#07c160}.van-button--plain.van-button--info{color:#1989fa}.van-button--plain.van-button--danger{color:#ee0a24}.van-button--plain.van-button--warning{color:#ff976a}.van-button--large{width:100%;height:50px}.van-button--normal{padding:0 15px;font-size:14px}.van-button--small{height:32px;padding:0 8px;font-size:12px}.van-button__loading{color:inherit;font-size:inherit}.van-button--mini{height:24px;padding:0 4px;font-size:10px}.van-button--mini+.van-button--mini{margin-left:4px}.van-button--block{display:block;width:100%}.van-button--disabled{cursor:not-allowed;opacity:.5}.van-button--loading{cursor:default}.van-button--round{border-radius:999px}.van-button--square{border-radius:0}.van-button__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%}.van-button__content::before{content:' '}.van-button__icon{font-size:1.2em;line-height:inherit}.van-button__icon+.van-button__text,.van-button__loading+.van-button__text,.van-button__text+.van-button__icon,.van-button__text+.van-button__loading{margin-left:4px}.van-button--hairline{border-width:0}.van-button--hairline::after{border-color:inherit;border-radius:4px}.van-button--hairline.van-button--round::after{border-radius:999px}.van-button--hairline.van-button--square::after{border-radius:0}.van-submit-bar{position:fixed;bottom:0;left:0;z-index:100;width:100%;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff;-webkit-user-select:none;user-select:none}.van-submit-bar__tip{padding:8px 12px;color:#f56723;font-size:12px;line-height:1.5;background-color:#fff7cc}.van-submit-bar__tip-icon{min-width:18px;font-size:12px;vertical-align:middle}.van-submit-bar__tip-text{vertical-align:middle}.van-submit-bar__bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;height:50px;padding:0 16px;font-size:14px}.van-submit-bar__text{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:12px;color:#323233;text-align:right}.van-submit-bar__text span{display:inline-block}.van-submit-bar__suffix-label{margin-left:5px;font-weight:500}.van-submit-bar__price{color:#ee0a24;font-weight:500;font-size:12px}.van-submit-bar__price--integer{font-size:20px;font-family:Avenir-Heavy,PingFang SC,Helvetica Neue,Arial,sans-serif}.van-submit-bar__button{width:110px;height:40px;font-weight:500;border:none}.van-submit-bar__button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(to right,#ff6034,#ee0a24)}.van-submit-bar--unfit{padding-bottom:0}.van-goods-action-button{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;font-weight:500;font-size:14px;border:none;border-radius:0}.van-goods-action-button--first{margin-left:5px;border-top-left-radius:999px;border-bottom-left-radius:999px}.van-goods-action-button--last{margin-right:5px;border-top-right-radius:999px;border-bottom-right-radius:999px}.van-goods-action-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(to right,#ffd01e,#ff8917)}.van-goods-action-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(to right,#ff6034,#ee0a24)}@media (max-width:321px){.van-goods-action-button{font-size:13px}}.van-toast{position:fixed;top:50%;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;width:88px;max-width:70%;min-height:88px;padding:16px;color:#fff;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;background-color:rgba(0,0,0,.7);border-radius:8px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-toast--unclickable{overflow:hidden}.van-toast--unclickable *{pointer-events:none}.van-toast--html,.van-toast--text{width:-webkit-fit-content;width:fit-content;min-width:96px;min-height:0;padding:8px 12px}.van-toast--html .van-toast__text,.van-toast--text .van-toast__text{margin-top:0}.van-toast--top{top:20%}.van-toast--bottom{top:auto;bottom:20%}.van-toast__icon{font-size:36px}.van-toast__loading{padding:4px;color:#fff}.van-toast__text{margin-top:8px}.van-calendar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;background-color:#fff}.van-calendar__popup.van-popup--bottom,.van-calendar__popup.van-popup--top{height:80%}.van-calendar__popup.van-popup--left,.van-calendar__popup.van-popup--right{height:100%}.van-calendar__popup .van-popup__close-icon{top:11px}.van-calendar__header{-webkit-flex-shrink:0;flex-shrink:0;box-shadow:0 2px 10px rgba(125,126,128,.16)}.van-calendar__header-subtitle,.van-calendar__header-title,.van-calendar__month-title{height:44px;font-weight:500;line-height:44px;text-align:center}.van-calendar__header-title{font-size:16px}.van-calendar__header-subtitle{font-size:14px}.van-calendar__month-title{font-size:14px}.van-calendar__weekdays{display:-webkit-box;display:-webkit-flex;display:flex}.van-calendar__weekday{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:12px;line-height:30px;text-align:center}.van-calendar__body{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.van-calendar__days{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-user-select:none;user-select:none}.van-calendar__month-mark{position:absolute;top:50%;left:50%;z-index:0;color:rgba(242,243,245,.8);font-size:160px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none}.van-calendar__day,.van-calendar__selected-day{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.van-calendar__day{position:relative;width:14.285%;height:64px;font-size:16px;cursor:pointer}.van-calendar__day--end,.van-calendar__day--multiple-middle,.van-calendar__day--multiple-selected,.van-calendar__day--start,.van-calendar__day--start-end{color:#fff;background-color:#ee0a24}.van-calendar__day--start{border-radius:4px 0 0 4px}.van-calendar__day--end{border-radius:0 4px 4px 0}.van-calendar__day--multiple-selected,.van-calendar__day--start-end{border-radius:4px}.van-calendar__day--middle{color:#ee0a24}.van-calendar__day--middle::after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;opacity:.1;content:''}.van-calendar__day--disabled{color:#c8c9cc;cursor:default}.van-calendar__bottom-info,.van-calendar__top-info{position:absolute;right:0;left:0;font-size:10px;line-height:14px}@media (max-width:350px){.van-calendar__bottom-info,.van-calendar__top-info{font-size:9px}}.van-calendar__top-info{top:6px}.van-calendar__bottom-info{bottom:6px}.van-calendar__selected-day{width:54px;height:54px;color:#fff;background-color:#ee0a24;border-radius:4px}.van-calendar__footer{-webkit-flex-shrink:0;flex-shrink:0;padding:0 16px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-calendar__footer--unfit{padding-bottom:0}.van-calendar__confirm{height:36px;margin:7px 0}.van-picker{position:relative;background-color:#fff;-webkit-user-select:none;user-select:none}.van-picker__toolbar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px}.van-picker__cancel,.van-picker__confirm{height:100%;padding:0 16px;font-size:14px;background-color:transparent;border:none;cursor:pointer}.van-picker__cancel:active,.van-picker__confirm:active{opacity:.7}.van-picker__confirm{color:#576b95}.van-picker__cancel{color:#969799}.van-picker__title{max-width:50%;font-weight:500;font-size:16px;line-height:20px;text-align:center}.van-picker__columns{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;cursor:grab}.van-picker__loading{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#1989fa;background-color:rgba(255,255,255,.9)}.van-picker__frame{position:absolute;top:50%;right:16px;left:16px;z-index:2;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.van-picker__mask{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-image:linear-gradient(180deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),linear-gradient(0deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-repeat:no-repeat;background-position:top,bottom;-webkit-transform:translateZ(0);transform:translateZ(0);pointer-events:none}.van-picker-column{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;font-size:16px}.van-picker-column__wrapper{-webkit-transition-timing-function:cubic-bezier(.23,1,.68,1);transition-timing-function:cubic-bezier(.23,1,.68,1)}.van-picker-column__item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 4px;color:#000}.van-picker-column__item--disabled{cursor:not-allowed;opacity:.3}.van-action-sheet{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;max-height:80%;overflow:hidden;color:#323233}.van-action-sheet__content{-webkit-box-flex:1;-webkit-flex:1 auto;flex:1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-action-sheet__cancel,.van-action-sheet__item{display:block;width:100%;padding:14px 16px;font-size:16px;background-color:#fff;border:none;cursor:pointer}.van-action-sheet__cancel:active,.van-action-sheet__item:active{background-color:#f2f3f5}.van-action-sheet__item{line-height:22px}.van-action-sheet__item--disabled,.van-action-sheet__item--loading{color:#c8c9cc}.van-action-sheet__item--disabled:active,.van-action-sheet__item--loading:active{background-color:#fff}.van-action-sheet__item--disabled{cursor:not-allowed}.van-action-sheet__item--loading{cursor:default}.van-action-sheet__cancel{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;color:#646566}.van-action-sheet__subname{margin-top:8px;color:#969799;font-size:12px;line-height:18px}.van-action-sheet__gap{display:block;height:8px;background-color:#f7f8fa}.van-action-sheet__header{-webkit-flex-shrink:0;flex-shrink:0;font-weight:500;font-size:16px;line-height:48px;text-align:center}.van-action-sheet__description{position:relative;-webkit-flex-shrink:0;flex-shrink:0;padding:20px 16px;color:#969799;font-size:14px;line-height:20px;text-align:center}.van-action-sheet__description::after{position:absolute;box-sizing:border-box;content:' ';pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-action-sheet__loading-icon .van-loading__spinner{width:22px;height:22px}.van-action-sheet__close{position:absolute;top:0;right:0;padding:0 16px;color:#c8c9cc;font-size:22px;line-height:inherit}.van-action-sheet__close:active{color:#969799}.van-goods-action{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:content-box;height:50px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-goods-action--unfit{padding-bottom:0}.van-dialog{position:fixed;top:45%;left:50%;width:320px;overflow:hidden;font-size:16px;background-color:#fff;border-radius:16px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}@media (max-width:321px){.van-dialog{width:90%}}.van-dialog__header{padding-top:26px;font-weight:500;line-height:24px;text-align:center}.van-dialog__header--isolated{padding:24px 0}.van-dialog__content--isolated{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:104px}.van-dialog__message{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-height:60vh;padding:26px 24px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;-webkit-overflow-scrolling:touch}.van-dialog__message--has-title{padding-top:8px;color:#646566}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__cancel,.van-dialog__confirm{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:48px;margin:0;border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#ee0a24}.van-dialog--round-button .van-dialog__footer{position:relative;height:auto;padding:8px 24px 16px}.van-dialog--round-button .van-dialog__message{padding-bottom:16px;color:#323233}.van-dialog--round-button .van-dialog__cancel,.van-dialog--round-button .van-dialog__confirm{height:36px}.van-dialog--round-button .van-dialog__confirm{color:#fff}.van-dialog-bounce-enter{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-dialog-bounce-leave-active{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}.van-contact-edit{padding:16px}.van-contact-edit__fields{overflow:hidden;border-radius:4px}.van-contact-edit__fields .van-field__label{width:4.1em}.van-contact-edit__switch-cell{margin-top:10px;padding-top:9px;padding-bottom:9px;border-radius:4px}.van-contact-edit__buttons{padding:32px 0}.van-contact-edit .van-button{margin-bottom:12px;font-size:16px}.van-address-edit{padding:12px}.van-address-edit__fields{overflow:hidden;border-radius:8px}.van-address-edit__fields .van-field__label{width:4.1em}.van-address-edit__default{margin-top:12px;overflow:hidden;border-radius:8px}.van-address-edit__buttons{padding:32px 4px}.van-address-edit__buttons .van-button{margin-bottom:12px}.van-address-edit-detail{padding:0}.van-address-edit-detail__search-item{background-color:#f2f3f5}.van-address-edit-detail__keyword{color:#ee0a24}.van-address-edit-detail__finish{color:#1989fa;font-size:12px}.van-radio-group--horizontal{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-contact-list{box-sizing:border-box;height:100%;padding-bottom:80px}.van-contact-list__item{padding:16px}.van-contact-list__item-value{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:32px;padding-left:8px}.van-contact-list__item-tag{-webkit-box-flex:0;-webkit-flex:none;flex:none;margin-left:8px;padding-top:0;padding-bottom:0;line-height:1.4em}.van-contact-list__group{box-sizing:border-box;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-contact-list__edit{font-size:16px}.van-contact-list__bottom{position:fixed;right:0;bottom:0;left:0;z-index:999;padding:0 16px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-contact-list__add{height:40px;margin:5px 0}.van-address-list{box-sizing:border-box;height:100%;padding:12px 12px 80px}.van-address-list__bottom{position:fixed;bottom:0;left:0;z-index:999;box-sizing:border-box;width:100%;padding:0 16px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-address-list__add{height:40px;margin:5px 0}.van-address-list__disabled-text{padding:20px 0 16px;color:#969799;font-size:14px;line-height:20px}.van-address-item{padding:12px;background-color:#fff;border-radius:8px}.van-address-item:not(:last-child){margin-bottom:12px}.van-address-item__value{padding-right:44px}.van-address-item__name{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:8px;font-size:16px;line-height:22px}.van-address-item__tag{-webkit-box-flex:0;-webkit-flex:none;flex:none;margin-left:8px;padding-top:0;padding-bottom:0;line-height:1.4em}.van-address-item__address{color:#323233;font-size:13px;line-height:18px}.van-address-item--disabled .van-address-item__address,.van-address-item--disabled .van-address-item__name{color:#c8c9cc}.van-address-item__edit{position:absolute;top:50%;right:16px;color:#969799;font-size:20px;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.van-address-item .van-cell{padding:0}.van-address-item .van-radio__label{margin-left:12px}.van-address-item .van-radio__icon--checked .van-icon{background-color:#ee0a24;border-color:#ee0a24}.van-badge{display:inline-block;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:-apple-system-font,Helvetica Neue,Arial,sans-serif;line-height:1.2;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:999px}.van-badge--fixed{position:absolute;top:0;right:0;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.van-badge--dot{width:8px;min-width:0;height:8px;background-color:#ee0a24;border-radius:100%}.van-badge__wrapper{position:relative;display:inline-block}.van-tab__pane,.van-tab__pane-wrapper{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;width:100%}.van-tab__pane-wrapper--inactive{height:0;overflow:visible}.van-sticky--fixed{position:fixed;top:0;right:0;left:0;z-index:99}.van-tab{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:0 4px;color:#646566;font-size:14px;line-height:20px;cursor:pointer}.van-tab--active{color:#323233;font-weight:500}.van-tab--disabled{color:#c8c9cc;cursor:not-allowed}.van-tab__text--ellipsis{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.van-tab__text-wrapper{position:relative}.van-tabs{position:relative}.van-tabs__wrap{overflow:hidden}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__wrap--scrollable .van-tab{-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto;padding:0 12px}.van-tabs__wrap--scrollable .van-tabs__nav{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.van-tabs__wrap--scrollable .van-tabs__nav::-webkit-scrollbar{display:none}.van-tabs__nav{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-user-select:none;user-select:none}.van-tabs__nav--line{box-sizing:content-box;height:100%;padding-bottom:15px}.van-tabs__nav--complete{padding-right:8px;padding-left:8px}.van-tabs__nav--card{box-sizing:border-box;height:30px;margin:0 16px;border:1px solid #ee0a24;border-radius:2px}.van-tabs__nav--card .van-tab{color:#ee0a24;border-right:1px solid #ee0a24}.van-tabs__nav--card .van-tab:last-child{border-right:none}.van-tabs__nav--card .van-tab.van-tab--active{color:#fff;background-color:#ee0a24}.van-tabs__nav--card .van-tab--disabled{color:#c8c9cc}.van-tabs__line{position:absolute;bottom:15px;left:0;z-index:1;width:40px;height:3px;background-color:#ee0a24;border-radius:3px}.van-tabs__track{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;will-change:left}.van-tabs__content--animated{overflow:hidden}.van-tabs--line .van-tabs__wrap{height:44px}.van-tabs--card>.van-tabs__wrap{height:30px}.van-coupon-list{position:relative;height:100%;background-color:#f7f8fa}.van-coupon-list__field{padding:5px 0 5px 16px}.van-coupon-list__field .van-field__body{height:34px;padding-left:12px;line-height:34px;background:#f7f8fa;border-radius:17px}.van-coupon-list__field .van-field__body::-webkit-input-placeholder{color:#c8c9cc}.van-coupon-list__field .van-field__body::placeholder{color:#c8c9cc}.van-coupon-list__field .van-field__clear{margin-right:0}.van-coupon-list__exchange-bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.van-coupon-list__exchange{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:32px;font-size:16px;line-height:30px;border:0}.van-coupon-list .van-tabs__wrap{box-shadow:0 6px 12px -12px #969799}.van-coupon-list__list{box-sizing:border-box;padding:16px 0 24px;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-coupon-list__list--with-bottom{padding-bottom:66px}.van-coupon-list__bottom{position:absolute;bottom:0;left:0;z-index:999;box-sizing:border-box;width:100%;padding:5px 16px;font-weight:500;background-color:#fff}.van-coupon-list__close{height:40px}.van-coupon-list__empty{padding-top:60px;text-align:center}.van-coupon-list__empty p{margin:16px 0;color:#969799;font-size:14px;line-height:20px}.van-coupon-list__empty img{width:200px;height:200px}.van-cascader__header{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:48px;padding:0 16px}.van-cascader__title{font-weight:500;font-size:16px;line-height:20px}.van-cascader__close-icon{color:#c8c9cc;font-size:22px}.van-cascader__close-icon:active{color:#969799}.van-cascader__tabs .van-tab{-webkit-box-flex:0;-webkit-flex:none;flex:none;padding:0 10px}.van-cascader__tabs.van-tabs--line .van-tabs__wrap{height:48px}.van-cascader__tabs .van-tabs__nav--complete{padding-right:6px;padding-left:6px}.van-cascader__tab{color:#323233;font-weight:500}.van-cascader__tab--unselected{color:#969799;font-weight:400}.van-cascader__option{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:10px 16px;font-size:14px;line-height:20px}.van-cascader__option:active{background-color:#f2f3f5}.van-cascader__option--selected{color:#ee0a24;font-weight:500}.van-cascader__selected-icon{font-size:18px}.van-cascader__options{box-sizing:border-box;height:384px;padding-top:6px;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-cell-group{background-color:#fff}.van-cell-group__title{padding:16px 16px 8px;color:#969799;font-size:14px;line-height:16px}.van-panel{background:#fff}.van-panel__header-value{color:#ee0a24}.van-panel__footer{padding:8px 16px}.van-checkbox-group--horizontal{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-circle{position:relative;display:inline-block;width:100px;height:100px;text-align:center}.van-circle svg{position:absolute;top:0;left:0;width:100%;height:100%}.van-circle__layer{stroke:#fff}.van-circle__hover{fill:none;stroke:#1989fa;stroke-linecap:round}.van-circle__text{position:absolute;top:50%;left:0;box-sizing:border-box;width:100%;padding:0 4px;color:#323233;font-weight:500;font-size:14px;line-height:20px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-col{float:left;box-sizing:border-box;min-height:1px}.van-col--1{width:4.16666667%}.van-col--offset-1{margin-left:4.16666667%}.van-col--2{width:8.33333333%}.van-col--offset-2{margin-left:8.33333333%}.van-col--3{width:12.5%}.van-col--offset-3{margin-left:12.5%}.van-col--4{width:16.66666667%}.van-col--offset-4{margin-left:16.66666667%}.van-col--5{width:20.83333333%}.van-col--offset-5{margin-left:20.83333333%}.van-col--6{width:25%}.van-col--offset-6{margin-left:25%}.van-col--7{width:29.16666667%}.van-col--offset-7{margin-left:29.16666667%}.van-col--8{width:33.33333333%}.van-col--offset-8{margin-left:33.33333333%}.van-col--9{width:37.5%}.van-col--offset-9{margin-left:37.5%}.van-col--10{width:41.66666667%}.van-col--offset-10{margin-left:41.66666667%}.van-col--11{width:45.83333333%}.van-col--offset-11{margin-left:45.83333333%}.van-col--12{width:50%}.van-col--offset-12{margin-left:50%}.van-col--13{width:54.16666667%}.van-col--offset-13{margin-left:54.16666667%}.van-col--14{width:58.33333333%}.van-col--offset-14{margin-left:58.33333333%}.van-col--15{width:62.5%}.van-col--offset-15{margin-left:62.5%}.van-col--16{width:66.66666667%}.van-col--offset-16{margin-left:66.66666667%}.van-col--17{width:70.83333333%}.van-col--offset-17{margin-left:70.83333333%}.van-col--18{width:75%}.van-col--offset-18{margin-left:75%}.van-col--19{width:79.16666667%}.van-col--offset-19{margin-left:79.16666667%}.van-col--20{width:83.33333333%}.van-col--offset-20{margin-left:83.33333333%}.van-col--21{width:87.5%}.van-col--offset-21{margin-left:87.5%}.van-col--22{width:91.66666667%}.van-col--offset-22{margin-left:91.66666667%}.van-col--23{width:95.83333333%}.van-col--offset-23{margin-left:95.83333333%}.van-col--24{width:100%}.van-col--offset-24{margin-left:100%}.van-count-down{color:#323233;font-size:14px;line-height:20px}.van-divider{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:16px 0;color:#969799;font-size:14px;line-height:24px;border-color:#ebedf0;border-style:solid;border-width:0}.van-divider::after,.van-divider::before{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;height:1px;border-color:inherit;border-style:inherit;border-width:1px 0 0}.van-divider::before{content:''}.van-divider--hairline::after,.van-divider--hairline::before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-divider--dashed{border-style:dashed}.van-divider--content-center::before,.van-divider--content-left::before,.van-divider--content-right::before{margin-right:16px}.van-divider--content-center::after,.van-divider--content-left::after,.van-divider--content-right::after{margin-left:16px;content:''}.van-divider--content-left::before{max-width:10%}.van-divider--content-right::after{max-width:10%}.van-dropdown-menu{-webkit-user-select:none;user-select:none}.van-dropdown-menu__bar{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;height:48px;background-color:#fff;box-shadow:0 2px 12px rgba(100,101,102,.12)}.van-dropdown-menu__bar--opened{z-index:11}.van-dropdown-menu__item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:0;cursor:pointer}.van-dropdown-menu__item:active{opacity:.7}.van-dropdown-menu__item--disabled:active{opacity:1}.van-dropdown-menu__item--disabled .van-dropdown-menu__title{color:#969799}.van-dropdown-menu__title{position:relative;box-sizing:border-box;max-width:100%;padding:0 8px;color:#323233;font-size:15px;line-height:22px}.van-dropdown-menu__title::after{position:absolute;top:50%;right:-4px;margin-top:-5px;border:3px solid;border-color:transparent transparent #dcdee0 #dcdee0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:.8;content:''}.van-dropdown-menu__title--active{color:#ee0a24}.van-dropdown-menu__title--active::after{border-color:transparent transparent currentColor currentColor}.van-dropdown-menu__title--down::after{margin-top:-1px;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.van-empty{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:32px 0}.van-empty__image{width:160px;height:160px}.van-empty__image img{width:100%;height:100%}.van-empty__description{margin-top:16px;padding:0 60px;color:#969799;font-size:14px;line-height:20px}.van-empty__bottom{margin-top:24px}.van-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-swipe{position:relative;overflow:hidden;cursor:grab;-webkit-user-select:none;user-select:none}.van-swipe__track{display:-webkit-box;display:-webkit-flex;display:flex;height:100%}.van-swipe__track--vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-swipe__indicators{position:absolute;bottom:12px;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:12px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{width:6px;height:6px;background-color:#ebedf0;border-radius:100%;opacity:.3;-webkit-transition:opacity .2s,background-color .2s;transition:opacity .2s,background-color .2s}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#1989fa;opacity:1}.van-swipe-item{position:relative;-webkit-flex-shrink:0;flex-shrink:0;width:100%;height:100%}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image{width:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.van-image-preview__image--vertical{width:auto;height:100%}.van-image-preview__image img{-webkit-user-drag:none}.van-image-preview__image .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:16px;left:50%;color:#fff;font-size:14px;line-height:20px;text-shadow:0 1px 1px #323233;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.van-image-preview__overlay{background-color:rgba(0,0,0,.9)}.van-image-preview__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-image-preview__close-icon:active{color:#969799}.van-image-preview__close-icon--top-left{top:16px;left:16px}.van-image-preview__close-icon--top-right{top:16px;right:16px}.van-image-preview__close-icon--bottom-left{bottom:16px;left:16px}.van-image-preview__close-icon--bottom-right{right:16px;bottom:16px}.van-uploader{position:relative;display:inline-block}.van-uploader__wrapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-uploader__wrapper--disabled{opacity:.5}.van-uploader__input{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;cursor:pointer;opacity:0}.van-uploader__input-wrapper{position:relative}.van-uploader__input:disabled{cursor:not-allowed}.van-uploader__upload{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:80px;height:80px;margin:0 8px 8px 0;background-color:#f7f8fa}.van-uploader__upload:active{background-color:#f2f3f5}.van-uploader__upload-icon{color:#dcdee0;font-size:24px}.van-uploader__upload-text{margin-top:8px;color:#969799;font-size:12px}.van-uploader__preview{position:relative;margin:0 8px 8px 0;cursor:pointer}.van-uploader__preview-image{display:block;width:80px;height:80px;overflow:hidden}.van-uploader__preview-delete{position:absolute;top:0;right:0;width:14px;height:14px;background-color:rgba(0,0,0,.7);border-radius:0 0 0 12px}.van-uploader__preview-delete-icon{position:absolute;top:-2px;right:-2px;color:#fff;font-size:16px;-webkit-transform:scale(.5);transform:scale(.5)}.van-uploader__preview-cover{position:absolute;top:0;right:0;bottom:0;left:0}.van-uploader__mask{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;background-color:rgba(50,50,51,.88)}.van-uploader__mask-icon{font-size:22px}.van-uploader__mask-message{margin-top:6px;padding:0 4px;font-size:12px;line-height:14px}.van-uploader__loading{width:22px;height:22px;color:#fff}.van-uploader__file{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:80px;height:80px;background-color:#f7f8fa}.van-uploader__file-icon{color:#646566;font-size:20px}.van-uploader__file-name{box-sizing:border-box;width:100%;margin-top:8px;padding:0 4px;color:#646566;font-size:12px;text-align:center}.van-index-anchor{z-index:1;box-sizing:border-box;padding:0 16px;color:#323233;font-weight:500;font-size:14px;line-height:32px;background-color:transparent}.van-index-anchor--sticky{position:fixed;top:0;right:0;left:0;color:#ee0a24;background-color:#fff}.van-index-bar__sidebar{position:fixed;top:50%;right:0;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;-webkit-user-select:none;user-select:none}.van-index-bar__index{padding:0 8px 0 16px;font-weight:500;font-size:10px;line-height:14px}.van-index-bar__index--active{color:#ee0a24}.van-pagination{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px}.van-pagination__item,.van-pagination__page-desc{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-pagination__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;min-width:36px;height:40px;color:#1989fa;background-color:#fff;cursor:pointer;-webkit-user-select:none;user-select:none}.van-pagination__item:active{color:#fff;background-color:#1989fa}.van-pagination__item::after{border-width:1px 0 1px 1px}.van-pagination__item:last-child::after{border-right-width:1px}.van-pagination__item--active{color:#fff;background-color:#1989fa}.van-pagination__next,.van-pagination__prev{padding:0 4px;cursor:pointer}.van-pagination__item--disabled,.van-pagination__item--disabled:active{color:#646566;background-color:#f7f8fa;cursor:not-allowed;opacity:.5}.van-pagination__page{-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.van-pagination__page-desc{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;color:#646566}.van-pagination--simple .van-pagination__next::after,.van-pagination--simple .van-pagination__prev::after{border-width:1px}.van-password-input{position:relative;margin:0 16px;-webkit-user-select:none;user-select:none}.van-password-input__error-info,.van-password-input__info{margin-top:16px;font-size:14px;text-align:center}.van-password-input__info{color:#969799}.van-password-input__error-info{color:#ee0a24}.van-password-input__security{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:50px;cursor:pointer}.van-password-input__security::after{border-radius:6px}.van-password-input__security li{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;font-size:20px;line-height:1.2;background-color:#fff}.van-password-input__security i{position:absolute;top:50%;left:50%;width:10px;height:10px;background-color:#000;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);visibility:hidden}.van-password-input__cursor{position:absolute;top:50%;left:50%;width:1px;height:40%;background-color:#323233;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:1s van-cursor-flicker infinite;animation:1s van-cursor-flicker infinite}@-webkit-keyframes van-cursor-flicker{from{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes van-cursor-flicker{from{opacity:0}50%{opacity:1}100%{opacity:0}}.van-progress{position:relative;height:4px;background:#ebedf0;border-radius:4px}.van-progress__portion{position:absolute;left:0;height:100%;background:#1989fa;border-radius:inherit}.van-progress__pivot{position:absolute;top:50%;box-sizing:border-box;min-width:3.6em;padding:0 5px;color:#fff;font-size:10px;line-height:1.6;text-align:center;word-break:keep-all;background-color:#1989fa;border-radius:1em;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.van-row::after{display:table;clear:both;content:''}.van-row--flex{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-row--flex::after{display:none}.van-row--justify-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-row--justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.van-row--justify-space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.van-row--justify-space-around{-webkit-justify-content:space-around;justify-content:space-around}.van-row--align-center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-row--align-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.van-sidebar{width:80px;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-tree-select{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;-webkit-user-select:none;user-select:none}.van-tree-select__nav{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;background-color:#f7f8fa;-webkit-overflow-scrolling:touch}.van-tree-select__nav-item{padding:14px 12px}.van-tree-select__content{-webkit-box-flex:2;-webkit-flex:2;flex:2;overflow-y:auto;background-color:#fff;-webkit-overflow-scrolling:touch}.van-tree-select__item{position:relative;padding:0 32px 0 16px;font-weight:500;line-height:48px;cursor:pointer}.van-tree-select__item--active{color:#ee0a24}.van-tree-select__item--disabled{color:#c8c9cc;cursor:not-allowed}.van-tree-select__selected{position:absolute;top:50%;right:16px;margin-top:-8px;font-size:16px}.van-skeleton{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 16px}.van-skeleton__avatar{-webkit-flex-shrink:0;flex-shrink:0;width:32px;height:32px;margin-right:16px;background-color:#f2f3f5}.van-skeleton__avatar--round{border-radius:999px}.van-skeleton__content{width:100%}.van-skeleton__avatar+.van-skeleton__content{padding-top:8px}.van-skeleton__row,.van-skeleton__title{height:16px;background-color:#f2f3f5}.van-skeleton__title{width:40%;margin:0}.van-skeleton__row:not(:first-child){margin-top:12px}.van-skeleton__title+.van-skeleton__row{margin-top:20px}.van-skeleton--animate{-webkit-animation:van-skeleton-blink 1.2s ease-in-out infinite;animation:van-skeleton-blink 1.2s ease-in-out infinite}.van-skeleton--round .van-skeleton__row,.van-skeleton--round .van-skeleton__title{border-radius:999px}@-webkit-keyframes van-skeleton-blink{50%{opacity:.6}}@keyframes van-skeleton-blink{50%{opacity:.6}}.van-stepper{font-size:0;-webkit-user-select:none;user-select:none}.van-stepper__minus,.van-stepper__plus{position:relative;box-sizing:border-box;width:28px;height:28px;margin:0;padding:0;color:#323233;vertical-align:middle;background-color:#f2f3f5;border:0;cursor:pointer}.van-stepper__minus::before,.van-stepper__plus::before{width:50%;height:1px}.van-stepper__minus::after,.van-stepper__plus::after{width:1px;height:50%}.van-stepper__minus::after,.van-stepper__minus::before,.van-stepper__plus::after,.van-stepper__plus::before{position:absolute;top:50%;left:50%;background-color:currentColor;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);content:''}.van-stepper__minus:active,.van-stepper__plus:active{background-color:#e8e8e8}.van-stepper__minus--disabled,.van-stepper__plus--disabled{color:#c8c9cc;background-color:#f7f8fa;cursor:not-allowed}.van-stepper__minus--disabled:active,.van-stepper__plus--disabled:active{background-color:#f7f8fa}.van-stepper__minus{border-radius:4px 0 0 4px}.van-stepper__minus::after{display:none}.van-stepper__plus{border-radius:0 4px 4px 0}.van-stepper__input{box-sizing:border-box;width:32px;height:28px;margin:0 2px;padding:0;color:#323233;font-size:14px;line-height:normal;text-align:center;vertical-align:middle;background-color:#f2f3f5;border:0;border-width:1px 0;border-radius:0;-webkit-appearance:none}.van-stepper__input:disabled{color:#c8c9cc;background-color:#f2f3f5;-webkit-text-fill-color:#c8c9cc;opacity:1}.van-stepper__input:read-only{cursor:default}.van-stepper--round .van-stepper__input{background-color:transparent}.van-stepper--round .van-stepper__minus,.van-stepper--round .van-stepper__plus{border-radius:100%}.van-stepper--round .van-stepper__minus:active,.van-stepper--round .van-stepper__plus:active{opacity:.7}.van-stepper--round .van-stepper__minus--disabled,.van-stepper--round .van-stepper__minus--disabled:active,.van-stepper--round .van-stepper__plus--disabled,.van-stepper--round .van-stepper__plus--disabled:active{opacity:.3}.van-stepper--round .van-stepper__plus{color:#fff;background-color:#ee0a24}.van-stepper--round .van-stepper__minus{color:#ee0a24;background-color:#fff;border:1px solid #ee0a24}.van-sku-container{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;min-height:50%;max-height:80%;overflow-y:visible;font-size:14px;background:#fff}.van-sku-body{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;min-height:44px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-sku-body::-webkit-scrollbar{display:none}.van-sku-header{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;margin:0 16px}.van-sku-header__img-wrap{-webkit-flex-shrink:0;flex-shrink:0;width:96px;height:96px;margin:12px 12px 12px 0;overflow:hidden;border-radius:4px}.van-sku-header__goods-info{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:12px 20px 12px 0}.van-sku-header-item{margin-top:8px;color:#969799;font-size:12px;line-height:16px}.van-sku__price-symbol{font-size:16px;vertical-align:bottom}.van-sku__price-num{font-weight:500;font-size:22px;vertical-align:bottom;word-wrap:break-word}.van-sku__goods-price{margin-left:-2px;color:#ee0a24}.van-sku__price-tag{position:relative;display:inline-block;margin-left:8px;padding:0 5px;overflow:hidden;color:#ee0a24;font-size:12px;line-height:16px;border-radius:8px}.van-sku__price-tag::before{position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;opacity:.1;content:''}.van-sku-group-container{padding-top:12px}.van-sku-group-container--hide-soldout .van-sku-row__item--disabled{display:none}.van-sku-row{margin:0 16px 12px}.van-sku-row:last-child{margin-bottom:0}.van-sku-row__image-item,.van-sku-row__item{position:relative;overflow:hidden;color:#323233;border-radius:4px;cursor:pointer}.van-sku-row__image-item::before,.van-sku-row__item::before{position:absolute;top:0;left:0;width:100%;height:100%;background:#f7f8fa;content:''}.van-sku-row__image-item--active,.van-sku-row__item--active{color:#ee0a24}.van-sku-row__image-item--active::before,.van-sku-row__item--active::before{background:currentColor;opacity:.1}.van-sku-row__item{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:40px;margin:0 12px 12px 0;font-size:13px;line-height:16px;vertical-align:middle}.van-sku-row__item-img{z-index:1;width:24px;height:24px;margin:4px 0 4px 4px;object-fit:cover;border-radius:2px}.van-sku-row__item-name{z-index:1;padding:8px}.van-sku-row__item--disabled{color:#c8c9cc;background:#f2f3f5;cursor:not-allowed}.van-sku-row__item--disabled .van-sku-row__item-img{opacity:.3}.van-sku-row__image{margin-right:0}.van-sku-row__image-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:110px;margin:0 4px 4px 0;border:1px solid transparent}.van-sku-row__image-item:last-child{margin-right:0}.van-sku-row__image-item-img{width:100%;height:110px}.van-sku-row__image-item-img-icon{position:absolute;top:0;right:0;z-index:3;width:18px;height:18px;color:#fff;line-height:18px;text-align:center;background-color:rgba(0,0,0,.4);border-bottom-left-radius:4px}.van-sku-row__image-item-name{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;height:40px;padding:4px;font-size:12px;line-height:16px}.van-sku-row__image-item-name span{word-wrap:break-word}.van-sku-row__image-item--active{border-color:currentColor}.van-sku-row__image-item--disabled{color:#c8c9cc;cursor:not-allowed}.van-sku-row__image-item--disabled::before{z-index:2;background:#f2f3f5;opacity:.4}.van-sku-row__title{padding-bottom:12px}.van-sku-row__title-multiple{color:#969799}.van-sku-row__scroller{margin:0 -16px;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch}.van-sku-row__scroller::-webkit-scrollbar{display:none}.van-sku-row__row{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;margin-bottom:4px;padding:0 16px}.van-sku-row__indicator{width:40px;height:4px;background:#ebedf0;border-radius:2px}.van-sku-row__indicator-wrapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-bottom:16px}.van-sku-row__indicator-slider{width:50%;height:100%;background-color:#ee0a24;border-radius:2px}.van-sku-stepper-stock{padding:12px 16px;overflow:hidden;line-height:30px}.van-sku__stepper{float:right;padding-left:4px}.van-sku__stepper-title{float:left}.van-sku__stepper-quota{float:right;color:#ee0a24;font-size:12px}.van-sku__stock{display:inline-block;margin-right:8px;color:#969799;font-size:12px}.van-sku__stock-num--highlight{color:#ee0a24}.van-sku-messages{padding-bottom:32px}.van-sku-messages__image-cell .van-cell__title{max-width:6.2em;margin-right:12px;color:#646566;text-align:left;word-wrap:break-word}.van-sku-messages__image-cell .van-cell__value{overflow:visible;text-align:left}.van-sku-messages__image-cell-label{color:#969799;font-size:12px;line-height:18px}.van-sku-actions{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;padding:8px 16px}.van-sku-actions .van-button{height:40px;font-weight:500;font-size:14px;border:none;border-radius:0}.van-sku-actions .van-button:first-of-type{border-top-left-radius:20px;border-bottom-left-radius:20px}.van-sku-actions .van-button:last-of-type{border-top-right-radius:20px;border-bottom-right-radius:20px}.van-sku-actions .van-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(to right,#ffd01e,#ff8917)}.van-sku-actions .van-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(to right,#ff6034,#ee0a24)}.van-slider{position:relative;width:100%;height:2px;background-color:#ebedf0;border-radius:999px;cursor:pointer}.van-slider::before{position:absolute;top:-8px;right:0;bottom:-8px;left:0;content:''}.van-slider__bar{position:relative;width:100%;height:100%;background-color:#1989fa;border-radius:inherit;-webkit-transition:all .2s;transition:all .2s}.van-slider__button{width:24px;height:24px;background-color:#fff;border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.5)}.van-slider__button-wrapper,.van-slider__button-wrapper-right{position:absolute;top:50%;right:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0);cursor:grab}.van-slider__button-wrapper-left{position:absolute;top:50%;left:0;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);cursor:grab}.van-slider--disabled{cursor:not-allowed;opacity:.5}.van-slider--disabled .van-slider__button-wrapper,.van-slider--disabled .van-slider__button-wrapper-left,.van-slider--disabled .van-slider__button-wrapper-right{cursor:not-allowed}.van-slider--vertical{display:inline-block;width:2px;height:100%}.van-slider--vertical .van-slider__button-wrapper,.van-slider--vertical .van-slider__button-wrapper-right{top:auto;right:50%;bottom:0;-webkit-transform:translate3d(50%,50%,0);transform:translate3d(50%,50%,0)}.van-slider--vertical .van-slider__button-wrapper-left{top:0;right:50%;left:auto;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}.van-slider--vertical::before{top:0;right:-8px;bottom:0;left:-8px}.van-steps{overflow:hidden;background-color:#fff}.van-steps--horizontal{padding:10px 10px 0}.van-steps--horizontal .van-steps__items{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;margin:0 0 10px;padding-bottom:22px}.van-steps--vertical{padding:0 0 0 32px}.van-swipe-cell{position:relative;overflow:hidden;cursor:grab}.van-swipe-cell__wrapper{-webkit-transition-timing-function:cubic-bezier(.18,.89,.32,1);transition-timing-function:cubic-bezier(.18,.89,.32,1);-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.van-swipe-cell__left,.van-swipe-cell__right{position:absolute;top:0;height:100%}.van-swipe-cell__left{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.van-swipe-cell__right{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.van-tabbar{z-index:1;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:content-box;width:100%;height:50px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-tabbar--fixed{position:fixed;bottom:0;left:0}.van-tabbar--unfit{padding-bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("46abef42", content, true)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(49);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"bitkeep EN\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: \"bitkeep EN BLOD\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n  font-family: \"bitkeep DIN\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.body {\n  font-family: PingFang SC;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.setFontFamily {\n  font-family: \"bitkeep DIN\";\n}\n\n.word_keep {\n  word-break: keep-all;\n}\n\n.font-20 {\n  font-size: 0.53rem !important;\n}\n\n.color_red {\n  color: #ff255a;\n  font-weight: 600;\n}\n\n.color_text {\n  color: #4b5373;\n}\n\n.color_theme {\n  color: #0c0998;\n}\n\n.btn:active {\n  opacity: 0.8;\n}\n\n.active:active {\n  opacity: 0.8;\n}\n\n.radial-gradient {\n  background: radial-gradient(at left top, #fffbe5 0%, #ffefea 19.79%, #ffeff7 53.47%, #ffecfd 59.9%, #ddd1ff 97.4%);\n}\n\n@keyframes heartbeat {\n  0% {\n    transform: scale(0.9, 0.9);\n    opacity: 1;\n  }\n\n  25% {\n    transform: scale(1, 1);\n    opacity: 0.9;\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale(0.9, 0.9);\n  }\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/gilroy-black-6.6b91119.otf";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Gilroy-Medium-2.9f1092d.otf";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/DIN-Medium.615b0c6.otf";

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["default"] = ({
  modules: {
    local: _modules_local__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.array.last-index.js");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de-DE": 19,
	"./de-DE-formal": 20,
	"./de-DE-formal.js": 20,
	"./de-DE.js": 19,
	"./en-US": 21,
	"./en-US.js": 21,
	"./es-ES": 22,
	"./es-ES.js": 22,
	"./fr-FR": 23,
	"./fr-FR.js": 23,
	"./ja-JP": 24,
	"./ja-JP.js": 24,
	"./nb-NO": 25,
	"./nb-NO.js": 25,
	"./ro-RO": 26,
	"./ro-RO.js": 26,
	"./th-TH": 27,
	"./th-TH.js": 27,
	"./tr-TR": 28,
	"./tr-TR.js": 28,
	"./zh-CN": 29,
	"./zh-CN.js": 29,
	"./zh-HK": 30,
	"./zh-HK.js": 30,
	"./zh-TW": 31,
	"./zh-TW.js": 31
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
  base: {
    loading: "Loading",
    no_more: "No more",
    success: 'Successfully',
    networkErro: "The Internet has gone awry",
    copied: 'Copied',
    copiedError: 'Some error occurred',
    nomore: 'No more'
  },
  "ActivityBlindbox": {
    shared: {
      content: "I'm opening blind free boxes, come and help me~"
    },
    dialog: {
      "isCreateWalletComfirm": "Cloud wallet does not exist. Do you want to create it now?",
      helperSuccess: "Contribute to success",
      "getBlindbox": "Congratulations on getting the BitKeep digital blind box",
      "openBlindbox": "Open to get surprise digital assets",
      "lookBlindbox": "View digital blind box"
    },
    toast: {
      open: "Opening...",
      loading: "Loading...",
      Saving: "Saving...",
      inputETH: "Please enter eth address",
      Generating: "Generating...",
      ContributeSuccess: "Contribute to success"
    },
    statusText: ["恭喜获得BitKeep数字盲盒", "开启获得惊喜数字资产", "查看数字盲盒"],
    button: {
      "OpenimmediatelyText": "Open the blind box immediately",
      "InviteFriendsNow": "Invite my friends now",
      "OpenFriendsImmediately": "Help open the blind box",
      "ViewAssets": "View assets",
      "SuccessView": "Success! Please view assets",
      //
      // "OpenimmediatelyText": "Open the blind box immediately"
      "savePicture": "Save Picture",
      //
      "ShareLink": "Share Link",
      //
      "Downloadnow": "Download now"
    },
    stepDetail: [{
      title: 'Step 1 <br/>Open your Cloud Wallet',
      content: 'Download BitKeep App. In BitKeep app, tap the Nav-bar in the upper right corner, click “Cloud Wallet” to enter the cloud wallet page.',
      img: 'http://cdn.bitkeep.vip/u_b_f11e6760-599a-11ec-bdbc-7722494dfa58.jpeg'
    }, {
      title: 'Step 2 <br/>Activate your Cloud Wallet',
      content: 'Enter the password as prompted to activate the cloud wallet,Tap BKB to go to BKB page.',
      img: 'http://cdn.bitkeep.vip/u_b_f12174a0-599a-11ec-bdbc-7722494dfa58.jpeg'
    }, {
      title: 'Step 3 <br/>Copy your Cloud Wallet address',
      content: 'Tap Deposit to go to transfer page, and choose “Copy Address”,go back to the contribution page and fill in yourBitKeep Cloud Wallet address, then tap Contribute Now.',
      img: 'http://cdn.bitkeep.vip/u_b_f11f03a0-599a-11ec-bdbc-7722494dfa58.jpeg'
    }],
    title: {
      "myBlindboxText": "My blind box"
    },
    ActivityBlindboxList: {
      "myBlindboxText": "My blind box",
      "RaidersText": "Raiders",
      "DigitalBlindBoxText": "Digital blind box",
      "blindBoxNumText": "{surplus} done <span class='color_red'>{invite}</span> to go",
      "blindBoxSurpriseText": "",
      "ValidUntilText": "Valid until",
      "inviteFirends": 'Invited',
      "HelpFirends": 'Be helped',
      "friendList": 'Friends List',
      "inviteContent": `{helper} have been assisted `,
      "GoOpenText": "Go open",
      "GoShareText": "Go share",
      "TurnedOnText": "Turned on",
      "SuccessfullyOpenedText": "Opened",
      "expiredText": "expired",
      "ShareWithMe": "By invitation",
      "noHelper": "No friends have been helped",
      "noInvite": "No friends have been invited",
      willOpened: "To be opened",
      noData: {
        title: "No blind box",
        content: "It is said that Using BitSwap or cross-chain swap sucessfully will get a chance to receive blind box and get digital assets"
      },
      end: {
        title: "No blind box",
        subtitle: "please stay tuned for next event",
        content: `Follow @BitKeepOS to learn more details`
      }
    },
    ActivityBlindboxDetail: {
      "blindBoxNumText": "{surplus} done <span class='color_red font-20'>{invite}</span> to go",
      "inputAddressPlaceholader": "Entry BitKeep Cloud Wallet adress",
      "NoAddressDownload": "Tap here to create <br/>👉   your BitKeep Cloud Wallet 👈",
      "HelpSuccessETH": "BitKeep Cloud Wallet adress",
      "InviteSuccessETH": "The ETH address has been invited",
      "FinalInterpretation": "BitKeep owns the final interpretation right of this event.",
      "invalidTimeText": "Distance blind box failure",
      "successfullyTimeText": "The blind box has been opened successfully!",
      expiredTimeText: "It's a pity that this blind box has expired",
      "ScanBlindBox": "Scan and receive digital blind box",
      DownloadBitkeep: "Download Bitkeep to share the digital assets in the blind box",
      "BitKeepTitleText": "BitKeep数字盲盒",
      "OpenTitleText": "开启获得惊喜数字资产",
      "InviteFriendsText": "邀请好友助力开启盲盒",
      "GetSurpriseAssetsText": "获得惊喜数字资产",
      "stillShort": "距离开启盲盒仅差3/5人助力",
      "InviteFriendsNowText": "立即邀请好友助力",
      "SuccessfullyAssistedText": "已成功助力 ETH 地址",
      "OpenStrategyText": "开启盲盒攻略",
      "shareLinkText": "分享海拔或链接给好友",
      "ClickConentSharedText": "点击「立即邀请好友助力」将海报或者链接分享给好友",
      "FriendsFillValidTitleText": "好友填写有效ETH地址助力",
      "FriendsHelpeSuccessText": "好友进入链接并输入有效的ETH地址助力成功",
      "CanopenBlindBoxText": "凑齐足够助力好友助力后开启盲盒",
      "OpenTheBlindBoxText": "当足够数量的好友助力成功后，您可以点击开启盲盒",
      "shareWidthFriendsText": '您和好友瓜分盲盒内数字资产',
      "CanViewAssetsTocloudWallet": "盲盒开启后您和助力好友均可在 BitKeep 云钱包中查看获得的数字资产",
      rules: ["Each blind box contains a random number of BKB", `Share this link to invite your friends, and ask them to fill in valid BitKeep Cloud Wallet address (Click the link to create a BitKeep Cloud Wallet <a href='https://bit.ly/BitKeepCloudWallet' class='color_red'>https://bit.ly/BitKeepCloudWallet</a> )`, "With five friends manage to make contribution, the blind box will unlock, and you and your friends will get a share of the BKB inside.", "These BKB will be deposited in your Cloud Wallet. If you have’t activated your Cloud Wallet, please tap Cloud Wallet in the NAV bar to activate it."],
      modal: {
        sharedHelperMeText: "助力我开启 BitKeep 数字盲盒吧",
        openSurpriseText: "开启获取惊喜数字资产",
        DownloadBitkeep: "下载 Bitkeep，瓜分盲盒中数字资产",
        savePicture: "保存图片",
        ShareLink: "分享链接",
        HelpOpenImmediatel: "立即助力开启盲盒",
        SuccessfullyHelpFriends: "成功助力好友",
        DownloadBitkeepAppNow: "立即下载 bitkeep",
        "CheckBoxToGetAssets": "查看盲盒获取惊喜数字资产",
        DownloadNow: "立即下载"
      }
    }
  },
  'CbkbExchange': {
    balance: 'Balance',
    get: 'You can get',
    swap: 'Swap',
    exchange: 'cBKB swap to BKB officially launching',
    exchangeTitle: 'cBKB is a credit point issued by BKB. cBKB is non-transferable and non-tradable. It is only used as a point voucher for redeeming BKB. cBKB is officially issued by BitKeep, and 100% can be exchanged for BKB.',
    exchangeTitleA: 'Users can get cBKB through ecological rewards, blind boxes, invitations, airdrops, etc. The swap channel has opened. Users can exchange into BKB by themselves.',
    exchangeTime: 'Swap Time',
    time: '2021-10-20 12:00 — 11-03 12:00 (GMT+8)',
    condition: 'Swap Rules',
    conditionText: 'Users must complete at least one Swap in BitKeep wallet ',
    proportion: 'Swap Ratio',
    proportionText: 'The conversion ratio of cBKB to BKB is 60:1',
    exchangeTitle2: 'BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    exchangeTitle3: 'Welcome to follow BitKeep channels for more updates on BKB airdrop.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: '1.Get discounts on BitSwap fees.',
    hold2: '2.Pay for BitKeep NFT Market service.',
    hold3: '3.Obtain the payment function of BitKeep Pools.',
    hold4: '4.Get the payment reduction and exemption function of BitKeep Pay.',
    hold5: '5.Obtain BitKeep Fin interest rate hike coupon rewards to support the entire product ecology.',
    hold6: '6.Get payment exemptions in the BitKeep business system.',
    hold7: '7.Obtain irregular airdrop rewards in BitKeep syrup pools.',
    hold8: '8.BKB StaKing rewards',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
    appreciationPool: 'Multiple staking pool',
    appreciationValut: 'Vault',
    more: 'More about BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: 'OK',
    swapTitle: 'cBKB Swap'
  },
  'airdrop': {
    get: 'You can get',
    receive: 'Receive',
    airdrop: 'BKB Airdrop',
    airdropContent: 'The total amount of BKB is 600 million, which is the ecological token of BitKeep ecology. Users holding BKB will enjoy ecological governance rights, and it is also an identity certificate for ecological payment methods and membership rights. ',
    time: 'Activity Time',
    timeContent: '2021.10.18 20:00 — 2021.10.28 00:00 (GMT+8)',
    particlpation: 'Conditions for Participation',
    particlpation1: 'From July 2020. 07. 01 to October 2021. 10 .01',
    particlpation2: 'Users who meet one of the following three requirements are eligible',
    particlpation3: 'A :  Transfer tokens via BitKeep at least twice are deemed Class A users;    ',
    particlpation4: 'B :  Those who have successfully used BKswap are deemed Class B users;',
    particlpation5: 'C：Users who deposit NFT assets on BitKeep are considered Class C users.',
    rules: 'Activity Rules',
    rules1: '1.Join BitKeep official telegram and discord community;',
    rules2: '2.During the airdrop event, users who meet the conditions of participation will be rewarded if they use BKSwap successfully;',
    rules3: '3.Class A qualified users will get 125 BKB for completing the above tasks, Class B qualified users will get 1,250 BKB for completing the above tasks, and Class C qualified users will get 250 BKB for completing the above tasks.',
    note: '* BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    airdropTitle: 'Receive BKB airdrop',
    notStart: 'The airdrop activity has not yet started'
  },
  'mining': {
    loading: "loading...",
    success: 'Successfully',
    pull: 'Loose to refresh...',
    coundown: 'Countdown',
    miningTitle: 'Trading Reward',
    comingsoon: 'Upcoming',
    inProgress: 'Live',
    startCountdown: 'Start countdown ',
    endCountdown: 'End countdown ',
    rewardPool: 'Trading Data',
    update: 'Update',
    will: 'Reward distribution within this week',
    activity: 'End',
    Introduce: 'Introduce',
    tradingVolume: 'Trading Volume',
    tradingIn: 'Trading in today',
    userTodayValue: 'Today Trade Volume',
    myRewards: 'My Rewards',
    totalTrading: 'Total Trade Volume',
    todyVolue: 'Today Volue',
    totalRewards: 'Total Rewards',
    yesterdayRewards: 'Today Rewards',
    miningRuleTitle: 'Event Rules',
    miningRule: 'Data used to calculate Trading Rewards of BKB. Trading Rewards are provided by the BitKeep Wallet.Overview of the.…',
    learnMore: 'Learn more',
    Introduce: 'Introduce',
    day: 'Your Transaction amount a day',
    swapNow: 'Swap Now',
    phase: 'Phase {v}',
    historyTitle: 'History',
    startTime: 'Start',
    overTime: 'End',
    tradeValue: 'Trade Value',
    tradeReward: 'Trade Reward',
    tradeUser: 'Trade User',
    produced: 'BKB produced',
    notStart: 'Not Start',
    ruleTitle: 'What is BKSwap Trading Reward?',
    ruleContent: 'The BKB reward users obtain when they finish a BKSwap transaction. BitKeep will reward users who trade on BKSwap according to the smart contract distribution rules to encourage users to adopt BKB and participate in related events. At the same time, we will extend the application scenarios of BKB to further develop the blockchain wallet ecosystem in the Web3.0 era.',
    how: 'How to get BKSwap Trading Reward?',
    how1: '1. Please refer to',
    how11: ' for the latest BKSwap tutorial.',
    // how1: `1. Please refer to <a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a> for the latest BKSwap tutorial.`,
    how2: '2. Rules of the event:',
    howContent: 'Invitation (Prize pool: 30WBKB): The Trading Reward events will last for 5 days. The invitation reward pool will be shared by all users with successful invitations. The rewards are calculated as follows:',
    howContent1: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X<br/>in which, we consider “GMV of all invited users” as Y',
    Objectives1: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    Objectives2: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    Objectives3: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    Objectives4: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    howContent2: 'BKSwap transaction rewards are divided into 3 levels, as follows:',
    Objectives11: ' When the total transaction amount on BKSwap on a given day is ≥ 5 million USDT equivalent and ≤ 10 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 300% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share (depending on each individual user’s transaction amount)',
    Objectives12: ' When the total transaction amount on BKSwap on a given day falls between 10 million and 40 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 200% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share',
    Objectives13: ' If the total transaction amount of BKSwap on the day is greater than 40 million USDT equivalent, according to the contract rules, BKB will be released at 100% of the transaction fee of the day as the total reward of the day, and all users participating in the transaction on the day will be divided proportionally',
    how3: '3. Duration:',
    OverviewContent: 'The duration for the second round of BKSwap Trading Reward event: Dec. 20, 2021 at 15:00-Dec. 25 at 23:00 (GMT+8)',
    // how4: '4. How are the trading rewards calculated?',
    // how4Content: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. The settlement cycle of the event is 24 hours. Users will receive their trading rewards for the previous day at 12:00 PM (GMT+8) every day. For example: Users will receive trading rewards for Nov. 29, 2021 on Nov. 30, 2021 at 12:00 (PM). It will be the same for each following day. For the rewards for Dec. 3, 2021, users will receive them on Doc. 4, 2021 at 12:00 (PM) (exactly one day after the event ends)',
    // how5: '5. How to check your trading rewards?',
    // how5Content: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    // how6: '6. How to claim your trading rewards?',
    // how6Content: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    FQATitle: 'Frequently Asked Questions (FAQ)',
    FQATitle1: '1. When are the rewards distributed?',
    FQAContent1: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. Users will receive their trading rewards for the previous day at 00:00 (GMT+8) every day. For example: Users will receive trading rewards for Dec. 21, 2021 on Dec. 20, 2021 at 00:00(GMT+8). It will be the same for each following day. For the rewards for Dec. 25, 2021, users will receive them on Dec. 26, 2021 at 12:00(GMT+8) (exactly one day after the event ends).',
    FQATitle2: '2. How to check your trading rewards?',
    FQAContent2: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    FQATitle3: '3. How to claim your trading rewards?',
    FQAContent3: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    FQATitle4: '4. How to invite?',
    FQAContent4: 'In the Trading Reward page, tap Invite friend now, and then copy the invitation link or share the invitation poster. Your friend (new user) confirms by downloading and installing the BitKeep app and filling in his/her ETH address. Then he/she will try to make a valid transaction (with a pre-settlement trading amount of ≥100U) with BKSwap. After that, you will get your invitation rewards.',
    FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. How is my invitation rewards calculated?',
    FQAContent5: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X; in which, we consider “(sum of the transaction volume of all his/her invitees/GMV of all invited users)” as Y',
    FQAContent51: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    FQAContent52: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    FQAContent53: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    FQAContent54: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    FQAContentNote: 'Note: An invitation will be considered valid only if the new user make a valid transaction(with a pre-settlement trading amount of ≥100U) with BKSwap',
    FQATitle6: '6. When are the invitation rewards calculated?',
    FQAContent6: 'Users will receive their invitation rewards for the previous day at 00:00 (GMT+8) every day.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: 'Enjoy ecological governance rights',
    hold2: 'Ecological payment method',
    hold3: 'Member\'s rights and identity certificate',
    hold4: 'Public chain resource purchase',
    hold5: 'Unlock the VIP function of the wallet',
    hold6: 'Advertising fee payment',
    hold7: 'Participate in BitKeep IWO',
    hold8: 'Pledge to enter the exclusive channel of high-quality assets',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
    appreciationPool: 'Multiple staking pool',
    appreciationValut: 'Vault',
    more: 'More about BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: 'OK',
    myTraded: 'My traded value',
    totalDistributed: 'Total distributed',
    yesterday: 'Yesterday',
    claim: 'Claim',
    ClaimRewards: 'Claim Rewards',
    ClaimRewardsub: 'Rewards will be settled at 24:00 each day',
    confirm: 'Confirm',
    noData: 'No data',
    invitationReward: "My Invitation Reward",
    inviteNumber1: 'Total invite Rewards',
    inviteNumber2: 'Yesterday invite Rewards',
    inviteNumber3: 'Total invite Trading Rewards',
    inviteNumber4: 'Yesterday Rewards',
    tradingRewards: "Trading Rewards",
    invitationRewards: "Invitation Rewards",
    viewDetails: "View Dtails",
    inviteFriendsNow: "Invite friends now",
    ruleDetail: 'Note: The following transactions are not considered eligible for trading rewards',
    ruleDetail1: `1. Cross-chain swaps, including：<br/>  (1) swapping the same coin on different chains, e.g. BSC-USDT to ETH-USDT swaps;<br/>  (2) swapping different coins on different chains, such as through Swft channels, or BNB to ETH swaps.`,
    ruleDetail2: '2. Burning coin transactions. Some coins are based on a burning mechanism, and they might be requited to be partially burnt whenever there is a transaction, which makes it different to count the exact transaction amount. Theses coins are therefore excluded from this BKSwap Trading Reward event.',
    invitationPool: 'Invitation Rewards Pool',
    invitationPoolContent: 'Used for the second phase of the invite-and-earn event'
  },
  'nft': {
    nftTitle: 'NFT Lottery',
    getEligibility: 'Get eligibility',
    drawNow: 'Draw now',
    getNft: 'Get NFT',
    not: 'Did not win',
    qualificationTime: 'Qualification time',
    lotteryTime: 'Lottery time',
    rules: 'Activity Rules',
    rule1: 'To participate in the lucky draw in the NFT section, the participating users must meet the following two conditions:',
    rule2: '1. Users must hold BKB (BKB can be obtained through airdrops and inviting friends)',
    rule3: '2. Must deposit NFT assets',
    rule4: 'Users who meet the above two conditions are eligible for each NFT sweepstakes by BK',
    note: '* BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    dialogTitle: 'Congratulations on your winning an NFT!',
    btn: 'OK',
    endCountdown: 'End countdown'
  },
  'blindboxInvite': {
    inviteTitle: 'Invite Friends',
    myRewards: 'My Rewards',
    invitedNumber: 'Invited friends',
    tokenRewards: 'Token Rewards',
    NFTRewards: 'NFT Rewards',
    boxRewards: 'Blind Box Rewards',
    inviteFriend: 'Invite Friend',
    inviteFriends: 'Invite Friends',
    inviteLink: 'Invitation Link',
    inviteFriendsNow: 'Invite your friends now',
    savePicture: 'Save Picture',
    ShareLink: "Share Link",
    inforce: 'Activated',
    inactivated: 'Inactivated',
    Address: 'Address',
    State: 'State',
    Time: 'Time',
    nomore: 'No More',
    loading: 'Loading...',
    rewardTitle: 'Token Rewards',
    RuleTitle: 'Invite Rules',
    know: 'OK',
    toEarn: 'Invite friends to earn BKB',
    rewardsMore: 'Friends trading rewards more BKB',
    Poster: 'Scan QRcode',
    downReward: 'Download BitKeep Wallet Earn crypto asset rewards',
    imgText: 'Hi, friend, here’s a Crypto Wallet to earn you crypto assets',
    detailWallet: 'A crypto wallet that takes no effort to navigate',
    detailWallet1: 'Securely store encrypted assets',
    detailWallet2: 'Convenient and easy-to-use BKSwap',
    detailWallet3: 'Support 721 NFT',
    detailWallet4: '7000+ DApps ecosystem',
    yourFrinedInvite: 'Your friend invites you to use BitKeep multi-chain wallet',
    friendsText: 'Trade with BitKeep to earn BKB',
    detailInput: 'Please input your ETH address to join BitKeep',
    detailBtn: 'Accept the invitation',
    detailJust: 'Have no ETH address yet? Just download BitKeep app and create a wallet',
    detailWhy: 'Why choose BitKeep wallet?',
    detailContro: 'Control your digital assets',
    detailUl1: 'A safe storage for your tokens and NFTs',
    detailUl2: 'BitKeep supports 30+ main chains, 200,000+ tokens, and 7000+ DApps',
    detailUl3: 'opening the world of DeFi for our users',
    detailCrypto: 'All crypto assets can be traded with BKSwap',
    detailAny: 'Easily swap and trade multi-chain cryptocurrencies at any time',
    detailAggregate: 'Aggregate 30+ mainstream DEXs such as Uniswap, Sushiswap, PancakeSwap, etc.',
    detailNFT: 'Store your NFTs',
    detailNFTCon: 'BitKeep provides secure and reliable crypto asset management services for millions of users across more than 168 countries and regions',
    downText: 'Congratulations, you have successfully accepted the invitation! Use BitKeep wallet now to enjoy your blockchain lifestyle',
    foot1: 'BitKeep Provides Service Worldwide',
    foot2: 'It has provided safe and reliable crypto asset management service to millions of users in more than 168 countries around the world',
    foot3: 'Number of Users',
    foot4: 'Transactions Amount',
    foot5: 'Covering Countries and Regions',
    inviteRuleTitle: 'What makes an valid invitation Your friend (new user) confirms?',
    ruleDetail: 'The user imports his/her wallet address or address has been imported or create a BitKeep wallet',
    ruleDetail1: 'The address is created within 24 hours',
    ruleDetail2: 'The user’s trading volume on BKSwap is larger than or equal to 10 USDT',
    myInviteRuleTitle: 'How is my invitation rewards calculated?',
    myRuleDetail: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X; in which, we consider “(sum of the transaction volume of all his/her invitees/GMV of all invited users)” as Y',
    myRuleDetail1: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    myRuleDetail2: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    myRuleDetail3: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    myRuleDetail4: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    myRuleDetail5: 'Note: An invitation will be considered valid only if the new user make a valid transaction(with a pre-settlement trading amount of ≥100U) with BKSwap',
    toast2: 'Sorry, this address has been invited',
    toast0: ' Sorry, this address has reached the maximum invite limit',
    emptyToast: 'Address field cannot be empty'
  },
  'staking': {
    stakingTitle: 'BKB Staking',
    AddPoolTitle: 'Add Pool',
    MyPoolsTitle: 'My Pools',
    stakingImg: 'Stake BKB Earn BKB',
    Introduce: 'Introduce',
    content: 'BitKeep has launched BKB Staking to provide users with opportunities to make money. BKB holders who stake there BKB are getting profits from the BKB pools every week. There will be many other projects accessible in the future, allowing you to earn more. When staking your BKB, you may choose from 4 different staking pools with maturity of 7 days, 30 days, 60 days, and 90 days. You will enjoy an APY of 20%, 30%, 40%, 50%, respectively. Your profit will be calculated and distributed to your Cloud Wallet at maturity.',
    Data: 'Data',
    StakedBKB: 'Staked BKB',
    totalSupply: 'BKB Total Supply',
    EndsIn: 'Ends in',
    APY: 'APY',
    YourStakeAmount: 'Your Stake Amount',
    Duration: 'Duration（Days）',
    StakeNow: 'Stake now',
    SoldOut: 'Sold Out',
    ComingSoon: 'Coming soon',
    EthereumChainPool: 'Ethereum Chain Pool',
    BSCChainPool: 'BSC Chain Pool',
    StakeAmount: 'Stake Amount',
    Available: 'Available',
    MAX: 'Max',
    StakeAmountLimiation: 'Stake Amount Limiation',
    Minimum: 'Minimum',
    Maximum: 'Maximum',
    Summary: 'Summary',
    StakeDate: 'Stake Date',
    ValueDate: 'Value Date',
    InterestPeriod: 'Interest Period',
    InterestEndDate: 'Interest End Date',
    RedemptionDate: 'Redemption Date',
    EstimatedInterests: 'Estimated Interests',
    Staking: 'Staking',
    Activity: 'Activity',
    BeExpired: 'Be expired',
    Pledge: 'Pledge',
    Durations: 'Duration',
    PledgeDueDate: 'Pledge Due Date',
    CurrencyReward: 'Currency Reward',
    Remove: 'Remove',
    Unstake: 'Unstake',
    Reward: 'Reward',
    Operate: 'Operate',
    Add: 'Add',
    RemovePool: 'Remove Pool',
    getBKB: 'Congratulations！You get',
    removeBefore: ' If you remove before the event ends<br/> you\'ll loss all Interests.<br/>Are you sure to remove？',
    Interests: 'Interests',
    Cancel: 'Cancel',
    Confirm: 'Confirm',
    Days: 'Days',
    authorization: 'You canceled signature authorization!',
    stakeAmount: 'Entry stake amount',
    know: 'OK'
  },
  'trading': {
    tradingTitle: 'Trading Reward',
    know: 'OK',
    ComingSoon: 'Coming soon',
    swapNow: 'Swap Now',
    claim: 'Claim',
    tradingRule: 'Trading Rules',
    learnMore: 'Learn more',
    finished: 'Finished',
    Live: 'Live',
    Upcoming: 'Upcoming',
    Past: 'Past',
    UnclaimedReward: 'Rewards to claim',
    Chain: 'Bianance Smart Chain',
    Ending: 'Ending in',
    Start: 'Start time',
    Time: 'Time',
    Reward: 'Reward',
    historyData: 'History',
    ruleContentTitle: 'Complete a swap transaction between the specified tokens to get BKB rewards pro rata (calculated by a percentage of the transaction fee).',
    YourTradingValue: 'Your Trading value',
    TodayTradingValue: 'Today trading value',
    TodayTradingReward: 'Today‘s total reward',
    YourTradingReward: 'Your trading reward',
    transaction: 'Total transactions',
    GetsBKB: 'BKB rewards',
    in: 'in',
    make: 'Make a transaction',
    toGet: 'to get BKB',
    noticeBar: 'This event shall not be construed as an investment advice',
    ruleTitle: 'Trading Rules',
    ruleContent: '1. Users may go to the Details page or Market page of one of the two specified tokens to enter the Trading Rewards page;<br/>2. Any to/from swap between the two specified tokens will be deemed valid;<br/>3. The reward of a given day will be calculated at 00:00 (GMT+8) the next day, after which the users may claim their rewards;<br/>4. This event shall not be construed as an investment advice',
    how: 'How to participate in the BKSwap Trading Reward event?',
    how1: '1. Please see:',
    how11: ' For the latest BKSwap tutorial.',
    how2: '2. Rules:',
    howContent: 'Users who make a transaction between a specified token pair with BKSwap will get rewarded',
    howContent1: 'Details:',
    Objectives1: 'During each event, users make a transaction between a specified token pair with BKSwap. An amount of BKB will be later calculated as a percentage of the transaction fee of the day and distributed. All users participating in the event on the day will be rewarded pro rata.',
    how3: '3. How are the trading rewards calculated?',
    OverviewContent: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. The settlement cycle of the event is 24 hours. Users will receive their trading rewards for the previous day at 00:00 (GMT+8) every day.',
    how4: '4. How to check your trading rewards?',
    OverviewContent4: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    how5: '5. How to claim your trading rewards?',
    OverviewContent5: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    popTit: 'Risk Warning',
    tit1: 'The Trading Reward events are only to reward our fans. They may not be considered as investment advice.',
    tit2: 'Reminder: The price of digital assets fluctuates greatly. Users are advised to fully understand and accept the risks of digital asset investment before investing.',
    btn: 'I got it'
  },
  'noviceBenefits': {
    'sign': 'Sign in to receive raffle tickets',
    'alreadySignedin': 'Consecutive sign-in',
    'alreadySignedin1': 'Progress',
    'day': 'days',
    'Signedin': 'day',
    'obtain': 'Ticket ',
    'receive': 'receive',
    'alreadyReceived': 'Received',
    'Currently': 'Tickets available',
    'zhang': '',
    'Participate': 'Want to win ',
    'Draw': 'Try now',
    'Novice': 'Novice reward',
    'Telegram': 'Join Telegram group',
    'Reward': 'To get 1 BKB ',
    'Join': 'Join Now',
    'swap': 'Swap for the 1st time',
    'raffle': 'To get 2 BKB and 2 tickets',
    'USDT': 'Deposit your first 50U',
    'Immediate': 'Swap Now',
    'standard': 'Outstanding',
    'Getitnow': 'Act now',
    'Viewnow': 'View',
    'Airdropactivity': 'Airdrop Events',
    'Access': 'Go get various tokens',
    'Blindboxactivity': 'Blind Box events',
    'AccessNFT': 'Go get tokens and NFTs',
    'Invitation': 'Invitation Rewards',
    'Invitefriends': 'Invite friends to get rewards',
    'Winaraffle': 'Win a raffle',
    'rafflepapers': 'Total number of tickets',
    'merafflepapers': 'My invested number',
    'raffletickets': 'Use my raffle tickets',
    'available': 'Raffle tickets available',
    'Pleaseenter': 'Enter a number',
    'usersyesterday': 'Lucky users yesterday',
    'Activityrules': 'Rules',
    'Dailyreward': 'The daily reward of 1,000BKB is rewarded to a single participant.',
    'morelottery': ' The more raffle tickets you use, the greater chance you get',
    'luckydraw': 'You can get raffle tickets through New User’s Gift, sign-in activities, and inviting your friends to use BitKeep app',
    'notes': "BitKeep reserves the right of final interpretation of the rules of this promotion. We reserve the right to disqualify any user who cheats, appears to cheat, or violates any of BitKeep's rules and policies.",
    'Immediateinput': 'Join now',
    'WelfareCenter': 'Gift Center',
    'Dailyluckydraw': 'Daily lucky draw',
    'Lotteryresults': 'Lottery result',
    'participationperiods': 'Engagement Count',
    'ticketsinvested': 'Raffle Tickets Used',
    'obtainBKB': 'BKB Obtained',
    'investment': '',
    'araffleticket': 'tickets used',
    'Failedto': 'no prize won ',
    'Congratulations': 'Congratulations!',
    'Morebenefits': 'More gifts',
    'signSuccess': 'Check in succeeded',
    'signError': 'Check in failed',
    'receiveSuccess': 'Received successfully',
    'receiveError': 'Collection failed',
    '50u': 'Assets greater than 50u can be claimed after 24 hours of holding time',
    'Cumulative': 'Sign in for 4 days in total, and you can get a lucky draw paper in 7 days.',
    'Tips': 'check-in rules',
    'Whatisaraffleticket': "What is a raffle ticket?",
    'Usethelotteryticket': 'Use the lottery ticket to go to the lottery page to draw BKB rewards.',
    'Investedmore': 'Invested more coupons than available coupons',
    'Investinsuccess': 'Invest in success',
    'Failedtoputin': 'Failed to put in',
    'Tobewon': 'To be drawn',
    'congratulations': 'congratulations',
    'winningthelottery': ' winning the lottery',
    'Cloudwallet': 'Cloud wallet has not been created yet',
    'incompatible': 'N/A'
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  "links": {
    "home": "Home"
  },
  "home": {
    "title": "Welcome",
    "introduction": "This is an introduction in English."
  },
  "about": {
    "title": "About",
    "introduction": "..."
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {
  base: {
    loading: "読み込み中",
    no_more: "もういや",
    success: '正常に更新',
    networkErro: "インターネットがうまくいかなくなった",
    copied: 'コピー',
    copiedError: 'エラーが発生しました',
    nomore: 'もういや'
  },
  "ActivityBlindbox": {
    shared: {
      content: "I'm opening blind free boxes, come and help me~"
    },
    dialog: {
      "isCreateWalletComfirm": "Cloud wallet does not exist. Do you want to create it now?",
      helperSuccess: "Contribute to success",
      "getBlindbox": "Congratulations on getting the BitKeep digital blind box",
      "openBlindbox": "Open to get surprise digital assets",
      "lookBlindbox": "View digital blind box"
    },
    toast: {
      open: "Opening...",
      loading: "Loading...",
      Saving: "Saving...",
      inputETH: "Please enter eth address",
      Generating: "Generating...",
      ContributeSuccess: "Contribute to success"
    },
    statusText: ["恭喜获得BitKeep数字盲盒", "开启获得惊喜数字资产", "查看数字盲盒"],
    button: {
      "OpenimmediatelyText": "Open the blind box immediately",
      "InviteFriendsNow": "Invite friends to help now",
      "OpenFriendsImmediately": "Help open the blind box",
      "ViewAssets": "View assets",
      "SuccessView": "Success! Please view assets",
      //
      // "OpenimmediatelyText": "Open the blind box immediately"
      "savePicture": "Save Picture",
      //
      "ShareLink": "Share Link",
      //
      "Downloadnow": "Download now"
    },
    title: {
      "myBlindboxText": "My blind box"
    },
    ActivityBlindboxList: {
      "myBlindboxText": "My blind box",
      "RaidersText": "Raiders",
      "DigitalBlindBoxText": "Digital blind box",
      "blindBoxNumText": "The box is still short of <span class='color_red'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "blindBoxSurpriseText": "",
      "ValidUntilText": "Valid until",
      "GoOpenText": "Go open",
      "GoShareText": "Go share",
      "TurnedOnText": "Turned on",
      "SuccessfullyOpenedText": "Opened",
      "expiredText": "expired",
      "ShareWithMe": "By invitation",
      willOpened: "To be opened",
      noData: {
        title: "No blind box",
        content: "It is said that Using BitSwap or cross-chain swap sucessfully will get a chance to receive blind box and get digital assets"
      },
      end: {
        title: "Blind box beta event has finished",
        subtitle: "please stay tuned for next event",
        content: `You can also follow <br/>
        Twitter：@BitKeepOS <br/>
        or join Telegram：<br/>
        https://t.me/bitkeep <br/>
        to know more updates.`
      }
    },
    ActivityBlindboxDetail: {
      "blindBoxNumText": "The box is still short of <span class='color_red font-20'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "inputAddressPlaceholader": "Click here to input eth address",
      "NoAddressDownload": "No address? Click download bitkeep to create an address",
      "HelpSuccessETH": "Help success eth address",
      "FinalInterpretation": "The final interpretation of this activity belongs to BitKeep",
      "invalidTimeText": "Distance blind box failure",
      "successfullyTimeText": "The blind box has been opened successfully!",
      expiredTimeText: "It's a pity that this blind box has expired",
      "ScanBlindBox": "Scan and receive digital blind box",
      DownloadBitkeep: "Download Bitkeep to share the digital assets in the blind box",
      "BitKeepTitleText": "BitKeep数字盲盒",
      "OpenTitleText": "开启获得惊喜数字资产",
      "InviteFriendsText": "邀请好友助力开启盲盒",
      "GetSurpriseAssetsText": "获得惊喜数字资产",
      "stillShort": "距离开启盲盒仅差3/5人助力",
      "InviteFriendsNowText": "立即邀请好友助力",
      "SuccessfullyAssistedText": "已成功助力 ETH 地址",
      "OpenStrategyText": "开启盲盒攻略",
      "shareLinkText": "分享海拔或链接给好友",
      "ClickConentSharedText": "点击「立即邀请好友助力」将海报或者链接分享给好友",
      "FriendsFillValidTitleText": "好友填写有效ETH地址助力",
      "FriendsHelpeSuccessText": "好友进入链接并输入有效的ETH地址助力成功",
      "CanopenBlindBoxText": "凑齐足够助力好友助力后开启盲盒",
      "OpenTheBlindBoxText": "当足够数量的好友助力成功后，您可以点击开启盲盒",
      "shareWidthFriendsText": '您和好友瓜分盲盒内数字资产',
      "CanViewAssetsTocloudWallet": "盲盒开启后您和助力好友均可在 BitKeep 云钱包中查看获得的数字资产",
      rules: ["Each blind box has random number of digital assets", "Friends fill in a valid ETH address to help", "Blind box will open when invitations reaching certain amount, you and your friends can get the rewards", "Invitee should download BitKeep, import the previous ETH address to get rewards", "Rewards will be sent to your BitKeep cloud wallet, activate it to claim"],
      modal: {
        sharedHelperMeText: "助力我开启 BitKeep 数字盲盒吧",
        openSurpriseText: "开启获取惊喜数字资产",
        DownloadBitkeep: "下载 Bitkeep，瓜分盲盒中数字资产",
        savePicture: "保存图片",
        ShareLink: "分享链接",
        HelpOpenImmediatel: "立即助力开启盲盒",
        SuccessfullyHelpFriends: "成功助力好友",
        DownloadBitkeepAppNow: "立即下载 bitkeep",
        "CheckBoxToGetAssets": "查看盲盒获取惊喜数字资产",
        DownloadNow: "立即下载"
      }
    }
  },
  'CbkbExchange': {
    balance: 'Balance',
    get: 'You can get',
    swap: 'Swap',
    exchange: 'cBKB swap to BKB officially launching',
    exchangeTitle: 'cBKB is a credit point issued by BKB. cBKB is non-transferable and non-tradable. It is only used as a point voucher for redeeming BKB. cBKB is officially issued by BitKeep, and 100% can be exchanged for BKB.',
    exchangeTitleA: 'Users can get cBKB through ecological rewards, blind boxes, invitations, airdrops, etc. The swap channel has opened. Users can exchange into BKB by themselves.',
    exchangeTime: 'Swap Time',
    time: '2021-10-20 12:00 — 11-03 12:00 (GMT+8)',
    condition: 'Swap Rules',
    conditionText: 'Users must complete at least one Swap in BitKeep wallet ',
    proportion: 'Swap Ratio',
    proportionText: 'The conversion ratio of cBKB to BKB is 60:1',
    exchangeTitle2: 'BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    exchangeTitle3: 'Welcome to follow BitKeep channels for more updates on BKB airdrop.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: '1.Get discounts on BitSwap fees.',
    hold2: '2.Pay for BitKeep NFT Market service.',
    hold3: '3.Obtain the payment function of BitKeep Pools.',
    hold4: '4.Get the payment reduction and exemption function of BitKeep Pay.',
    hold5: '5.Obtain BitKeep Fin interest rate hike coupon rewards to support the entire product ecology.',
    hold6: '6.Get payment exemptions in the BitKeep business system.',
    hold7: '7.Obtain irregular airdrop rewards in BitKeep syrup pools.',
    hold8: '8.BKB StaKing rewards',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
    appreciationPool: 'Multiple staking pool',
    appreciationValut: 'Vault',
    more: 'More about BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: 'OK',
    swapTitle: 'cBKB Swap'
  },
  'airdrop': {
    get: 'You can get',
    receive: 'Receive',
    airdrop: 'BKB Airdrop',
    airdropContent: 'The total amount of BKB is 600 million, which is the ecological token of BitKeep ecology. Users holding BKB will enjoy ecological governance rights, and it is also an identity certificate for ecological payment methods and membership rights. ',
    time: 'Activity Time',
    timeContent: '2021.10.18 20:00 — 2021.10.28 00:00 (GMT+8)',
    particlpation: 'Conditions for Participation',
    particlpation1: 'From July 2020. 07. 01 to October 2021. 10 .01',
    particlpation2: 'Users who meet one of the following three requirements are eligible',
    particlpation3: 'A :  Transfer tokens via BitKeep at least twice are deemed Class A users;    ',
    particlpation4: 'B :  Those who have successfully used BKswap are deemed Class B users;',
    particlpation5: 'C：Users who deposit NFT assets on BitKeep are considered Class C users.',
    rules: 'Activity Rules',
    rules1: '1.Join BitKeep official telegram and discord community;',
    rules2: '2.During the airdrop event, users who meet the conditions of participation will be rewarded if they use BKSwap successfully;',
    rules3: '3.Class A qualified users will get 125 BKB for completing the above tasks, Class B qualified users will get 1,250 BKB for completing the above tasks, and Class C qualified users will get 250 BKB for completing the above tasks.',
    note: '* BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    airdropTitle: 'Receive BKB airdrop',
    notStart: 'The airdrop activity has not yet started'
  },
  'mining': {
    loading: "読み込み中",
    success: '正常に更新',
    coundown: '秒読み',
    pull: '更新...',
    miningTitle: '取引報酬',
    comingsoon: '今後の',
    inProgress: '進行中',
    startCountdown: 'カウントダウンを開始',
    endCountdown: 'カウントダウン終了',
    rewardPool: '取引データ',
    update: 'アップデート',
    will: '今週内の報酬の分配',
    activity: '終わり',
    Introduce: '導入',
    tradingVolume: '取引高',
    tradingIn: '今日の下取り',
    userTodayValue: '今日の取引量',
    myRewards: '私の報酬',
    totalTrading: '総取引量',
    todyVolue: '今日の価値',
    totalRewards: 'トータルリワード',
    yesterdayRewards: '今日の報酬',
    miningRuleTitle: 'イベントルール',
    miningRule: 'BKBの取引報酬の計算に使用されるデータ。 トレーディングリワードはBitKeepウォレットによって提供されます。概要…',
    learnMore: 'もっと詳しく知る',
    day: '1日あたりの取引金額',
    swapNow: '今すぐ交換',
    phase: '段階 {v}',
    historyTitle: '歴史',
    tradeValue: '貿易価値',
    tradeReward: '貿易報酬',
    tradeUser: 'トレードユーザー',
    produced: 'BKBプロデュース',
    startTime: '始める',
    overTime: '終わり',
    notStart: '開始しない',
    ruleTitle: 'BKSwapトレーディングリワードとは何ですか？',
    ruleContent: 'ユーザーがBKSwapトランザクションを完了したときに取得するBKB報酬。 BitKeepは、スマートコントラクト配布ルールに従ってBKSwapで取引するユーザーに報酬を与え、ユーザーがBKBを採用して関連イベントに参加することを奨励します。 同時に、BKBのアプリケーションシナリオを拡張して、Web3.0時代のブロックチェーンウォレットエコシステムをさらに発展させます。',
    how: 'BKSwap Trading Rewardを取得するにはどうすればよいですか？',
    how1: '1.最新のBKSwapチュートリアルについては、',
    how11: ' を参照してください。',
    // how1: `<a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a>を参照してください。`,
    hhow2: '2. イベントのルール：',
    howContent: '招待状（賞金プール：30WBKB）：トレーディングリワードイベントは5日間続きます。 招待報酬プールは、招待が成功したすべてのユーザーによって共有されます。 報酬は次のように計算されます。',
    howContent1: '毎日、ユーザーは次の情報を取得できます：15 *正常に招待されたユーザーの数+（すべての招待者のトランザクション量/すべての招待ユーザーのGMVの合計）* X <br/>ここで、「 招待されたすべてのユーザー」をYとして',
    Objectives1: 'Yが2M以上5M以下のUSDT相当の場合、X = 10,000BKB',
    Objectives2: 'Yが50M以上20M以下のUSDT相当の場合、X = 20,000BKB',
    Objectives3: 'Yが20M以上30M以下のUSDT相当の場合、X = 20,000BKB',
    Objectives4: 'Yが> 30M USDT相当の場合、X = 40,000BKB',
    howContent2: 'BKSwapトランザクションの報酬は、次の3つのレベルに分けられます。',
    Objectives11: ' 特定の日のBKSwapの合計取引金額が500万USDT相当以上1000万USDT相当以下の場合、契約ルールに従って、BitKeepはその日の取引手数料の300％に等しいBKBの合計を提供します。 その日の報酬。 当日にBKSwapトランザクションに参加したすべてのユーザーは、比例したシェアを獲得します（個々のユーザーのトランザクション量によって異なります）',
    Objectives12: ' 特定の日のBKSwapの合計取引金額が1,000万から4,000万USDT相当の場合、契約ルールに従って、BitKeepはその日の取引手数料の200％に相当するBKBの合計を その日。 当日にBKSwapトランザクションに参加したすべてのユーザーは、比例したシェアを獲得します',
    Objectives13: ' 当日のBKSwapの合計取引金額が4000万USDT相当を超える場合、契約ルールに従い、BKBはその日の合計報酬としてその日の取引手数料の100％でリリースされ、すべてのユーザーが参加します 当日の取引は比例配分されます',
    how3: '3. 間隔:',
    OverviewContent: 'BKSwap Trading Rewardイベントの第2ラウンドの期間：2021年12月20日15：00- 2021年12月25日23:00（GMT + 8）',
    FQATitle: 'よくある質問（FAQ）',
    FQATitle1: '1. 報酬はいつ配布されますか？',
    FQAContent1: '取引報酬はリアルタイムで計算され、ユーザーは「取引報酬」ページでいつでも確認できます。 ユーザーは、前日の00:00（GMT + 8）に毎日取引報酬を受け取ります。 例：ユーザーは、2021年12月20日の00:00（GMT + 8）に2021年12月21日の取引報酬を受け取ります。 翌日も同じになります。 2021年12月25日の特典として、ユーザーは2021年12月26日の12:00（GMT + 8）（イベント終了のちょうど1日後）に特典を受け取ります。',
    FQATitle2: '2. 取引報酬を確認する方法は？',
    FQAContent2: 'BitKeepの「TradingReward」ページに移動して、利益に関するすべてを確認してください。',
    FQATitle3: '3. 取引報酬を請求する方法は？',
    FQAContent3: '「取引報酬」ページに移動し、「請求」ボタンをタップして報酬を請求します。',
    FQATitle4: '4. 招待する方法は？',
    FQAContent4: 'トレーディングリワードページで、[今すぐ友達を招待]をタップしてから、招待リンクをコピーするか、招待ポスターを共有します。 友達（新規ユーザー）は、BitKeepアプリをダウンロードしてインストールし、ETHアドレスを入力して確認します。 次に、BKSwapとの有効な取引（決済前の取引金額が100U以上）を試みます。 その後、招待状を受け取ります。',
    // FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. 招待報酬はどのように計算されますか？',
    FQAContent5: '毎日、ユーザーは次の情報を取得できます。15*正常に招待されたユーザーの数+（すべての招待者のトランザクション量/すべての招待ユーザーのGMVの合計）* X; ここで、「（すべての招待者のトランザクション量/すべての招待ユーザーのGMVの合計）」をYと見なします。',
    FQAContent51: 'Yが2M以上5M以下のUSDT相当の場合、X = 10,000BKB',
    FQAContent52: 'Yが50M以上20M以下のUSDT相当の場合、X = 20,000BKB',
    FQAContent53: 'Yが20M以上30M以下のUSDT相当の場合、X = 20,000BKB',
    FQAContent54: 'Yが> 30M USDT相当の場合、X = 40,000BKB',
    FQAContentNote: '注：招待は、新しいユーザーがBKSwapと有効な取引（決済前の取引金額が100U以上）を行った場合にのみ有効と見なされます。',
    FQATitle6: '6. 招待報酬はいつ計算されますか？',
    FQAContent6: 'ユーザーは、前日の00:00（GMT+8）に毎日招待報酬を受け取ります。',
    about: 'BKBについて',
    viewAll: 'すべて表示',
    pickUp: '選び出す',
    aboutContent1: 'BKBを保持することは、エコロジカルガバナンスの権利を享受し、BitKeepのエコロジカルな支払い方法とメンバーシップの権利の身元証明でもあります。',
    aboutContent2: 'BKBは、複数のパブリックチェーンリソースの購入、ウォレットのVIP機能のロック解除、BitKeep広告料金の支払いなどのシナリオで使用できます。',
    distribution: 'BKBの発行と配布',
    total: 'BKB総供給: ',
    mining: '複合マイニング',
    community: 'コミュニティ',
    tram: 'チームと初期の投資家',
    partner: '相棒',
    eco: '生態系構築',
    hold: 'BKBエクイティを保有',
    hold1: '生態学的ガバナンスの権利を享受する',
    hold2: 'エコロジカルな支払い方法',
    hold3: 'メンバーの権利と身分証明書',
    hold4: 'パブリックチェーンリソースの購入',
    hold5: 'ウォレットのVIP機能のロックを解除します',
    hold6: '広告料の支払い',
    hold7: 'BitKeepIWOに参加する',
    hold8: '高品質の資産の独占チャネルに参入することを誓う',
    appreciation: 'BKB値の強化',
    appreciationSwap: 'スワップ手数料の控除',
    appreciationCoin: '支払い',
    appreciationPool: '複数のステーキングプール',
    appreciationValut: '通貨',
    more: 'BKBの詳細',
    website: '公式サイト',
    paper: '白書',
    twitter: 'ツイッター',
    github: 'Github',
    telegram: '電報',
    facebook: 'フェイスブック',
    explorer: 'ブロックエクスプローラー',
    know: 'わかった',
    myTraded: '私の取引額',
    totalDistributed: '配布された合計',
    yesterday: '昨日',
    claim: '請求',
    ClaimRewards: '報酬を請求する',
    ClaimRewardsub: 'その日の報酬はその夜の12:00に決済されます',
    confirm: '確認',
    noData: 'データなし',
    invitationReward: "招待報酬",
    myInvitationRewards: "私の招待報酬",
    totalBonusPool: "賞金総額",
    todayBonusPool: "今日のボーナス",
    myTodayRewards: "私の今日の報酬",
    tradingRewards: "取引報酬",
    invitationRewards: "招待報酬",
    viewDetails: "詳細を見る",
    inviteFriendsNow: "友達を招待",
    ruleDetail: '注：以下の取引は、取引報酬の対象とは見なされません',
    ruleDetail1: `1.クロスチェーンスワップ:<br/> （1）同じコインを異なるチェーンでスワップすることを含みます。 BSC-USDTからETH-USDTへのスワップ。<br/> （2）Swftチャネル、またはBNBからETHへのスワップなど、さまざまなチェーンでさまざまなコインを交換する。`,
    ruleDetail2: '2.コイン取引を燃やす。 一部のコインは燃焼メカニズムに基づいており、トランザクションが発生するたびに部分的に燃焼する必要がある場合があります。これにより、正確なトランザクション量をカウントするのが異なります。 したがって、これらのコインはこのBKSwap TradingRewardイベントから除外されます。',
    invitationReward: "私の招待報酬",
    inviteNumber1: '合計招待報酬',
    inviteNumber2: '昨日リワードを招待',
    inviteNumber3: 'トータル招待トレーディングリワード',
    inviteNumber4: '昨日の報酬',
    invitationPool: '招待ボーナスプール',
    invitationPoolContent: '招待して獲得するイベントの第2フェーズに使用されます'
  },
  'blindboxInvite': {
    inviteTitle: '友達を招待',
    myRewards: '私の報酬',
    invitedNumber: '友達を招待',
    tokenRewards: 'トークンリワード',
    NFTRewards: 'NFTリワード',
    boxRewards: 'ブラインドボックスリワード',
    inviteFriend: '友達を招待',
    inviteFriends: '友達を招待',
    inviteLink: '招待リンク',
    inviteFriendsNow: '友達を招待',
    savePicture: '画像を保存する',
    ShareLink: "共有リンク",
    inforce: 'アクティベート',
    inactivated: '不活化',
    Address: '住所',
    State: '州',
    Time: '時間',
    nomore: 'もういや',
    loading: '読み込み中...',
    rewardTitle: 'トークンリワード',
    RuleTitle: 'ルールを招待',
    know: 'わかった',
    toEarn: '友達を招待してBKBを獲得する',
    rewardsMore: '友達取引で報酬が増えるBKB',
    Poster: 'QRコードをスキャンする',
    downReward: 'BitKeepウォレットをダウンロードして報酬を稼ぐ',
    imgText: 'こんにちは、友人、これがあなたに暗号資産を獲得するための暗号ウォレットです',
    detailWallet: 'ナビゲートするのに労力を必要としない暗号ウォレット',
    detailWallet1: '暗号化された資産を安全に保管する',
    detailWallet2: '便利で使いやすいBKSwap',
    detailWallet3: '721NFTをサポート',
    detailWallet4: '7000以上のDAppsエコシステム',
    yourFrinedInvite: 'あなたの友人はあなたにBitKeepマルチチェーンウォレットを使うように勧めます',
    friendsText: 'BitKeepと取引してBKBを獲得する',
    detailInput: 'ETHアドレスを入力してください',
    detailBtn: '招待を受け入れる',
    detailJust: 'ETHアドレスはまだありませんか？ BitKeepアプリをダウンロードしてウォレットを作成するだけです',
    detailWhy: 'なぜBitKeepウォレットを選ぶのですか？',
    detailContro: 'デジタル資産を管理する',
    detailUl1: 'トークンとNFTの安全なストレージ',
    detailUl2: 'BitKeepは、30以上のメインチェーン、200,000以上のトークン、および7000以上のDAppをサポートします',
    detailUl3: 'ユーザーにDeFiの世界を開く',
    detailCrypto: 'すべての暗号資産はBKSwapで取引できます',
    detailAny: 'いつでも簡単にマルチチェーン暗号通貨を交換して交換する',
    detailAggregate: 'Uniswap、Sushiswap、PancakeSwapなどの30以上の主流のDEXを集約します。',
    detailNFT: 'NFTを保存する',
    detailNFTCon: 'BitKeepは、168を超える国と地域の何百万ものユーザーに安全で信頼性の高い暗号資産管理サービスを提供します',
    downText: 'おめでとうございます、あなたは招待を無事に受け入れました！ 今すぐBitKeepウォレットを使用して、ブロックチェーンのライフスタイルをお楽しみください',
    foot1: 'BitKeepは世界中にサービスを提供します',
    foot2: '世界168カ国以上の数百万人のユーザーに安全で信頼性の高い暗号資産管理サービスを提供してきました',
    foot3: '利用者数',
    foot4: '取引金額',
    foot5: '国と地域をカバーする',
    inviteRuleTitle: '何が有効な招待状になりますかあなたの友人（新しいユーザー）は確認しますか？',
    ruleDetail: 'ユーザーが自分のウォレットアドレスをインポートするか、アドレスがインポートされたか、BitKeepウォレットを作成します',
    ruleDetail1: 'アドレスは24時間以内に作成されます',
    ruleDetail2: 'BKSwapでのユーザーの取引量が10USDT以上',
    myInviteRuleTitle: '招待報酬はどのように計算されますか？',
    myRuleDetail: '毎日、ユーザーは次の情報を取得できます。15*正常に招待されたユーザーの数+（すべての招待者のトランザクション量/すべての招待ユーザーのGMVの合計）* X; ここで、「（すべての招待者のトランザクション量/すべての招待ユーザーのGMVの合計）」をYと見なします。',
    myRuleDetail1: 'Yが2M以上5M以下のUSDT相当の場合、X = 10,000BKB',
    myRuleDetail2: 'Yが50M以上20M以下のUSDT相当の場合、X = 20,000BKB',
    myRuleDetail3: 'Yが20M以上30M以下のUSDT相当の場合、X = 20,000BKB',
    myRuleDetail4: 'Yが> 30M USDT相当の場合、X = 40,000BKB',
    myRuleDetail5: '注：招待は、新しいユーザーがBKSwapと有効な取引（決済前の取引金額が100U以上）を行った場合にのみ有効と見なされます。',
    toast2: '申し訳ありませんが、このアドレスは招待されています',
    toast0: '申し訳ありませんが、このアドレスは招待の上限に達しました',
    emptyToast: 'アドレスフィールドを空にすることはできません'
  },
  'staking': {
    stakingTitle: 'BKBステーキング',
    AddPoolTitle: 'プールを追加',
    MyPoolsTitle: '私のプール',
    stakingImg: 'ステークBKB稼ぐBKB',
    Introduce: '導入する',
    content: 'BitKeepは、ユーザーにお金を稼ぐ機会を提供するためにBKBStakeingを立ち上げました。 そこにBKBを賭けているBKB保有者は、毎週BKBプールから利益を得ています。 将来的には他にも多くのプロジェクトにアクセスできるようになり、より多くの収入を得ることができます。 BKBをステーキングする場合、満期が7日、30日、60日、および90日の4つの異なるステーキングプールから選択できます。 それぞれ20％、30％、40％、50％のAPYをお楽しみいただけます。 利益は計算され、満期時にクラウドウォレットに分配されます。',
    Data: 'データ',
    StakedBKB: 'ステーキングBKB',
    totalSupply: 'BKB総供給',
    EndsIn: 'で終わる',
    APY: 'APY',
    YourStakeAmount: 'あなたの賭け金',
    Duration: '期間（日）',
    StakeNow: '今すぐ賭けます',
    SoldOut: '完売',
    ComingSoon: '近日公開',
    EthereumChainPool: 'イーサリアムチェーンプール',
    BSCChainPool: 'BSCチェーンプール',
    StakeAmount: 'ステーク額',
    Available: '利用可能',
    MAX: 'Max',
    StakeAmountLimiation: 'ステーク額の制限',
    Minimum: '最小',
    Maximum: '最大',
    Summary: '概要',
    StakeDate: 'ステーク日',
    ValueDate: '実行日',
    InterestPeriod: '利息期間',
    InterestEndDate: '利息終了日',
    RedemptionDate: '償還日',
    EstimatedInterests: '推定利息',
    Staking: 'ストライク',
    Activity: 'イベント',
    BeExpired: '期限切れの',
    Pledge: '誓約',
    Durations: '間隔',
    PledgeDueDate: '誓約期日',
    CurrencyReward: '通貨報酬',
    Remove: '削除する',
    Unstake: 'アンステーク',
    Reward: '褒美',
    Operate: '操作する',
    Add: '追加',
    RemovePool: 'プールを削除する',
    getBKB: 'おめでとうございます！',
    removeBefore: 'イベントが終了する前に削除すると、<br/>すべてのインタレストが失われます。<br/>削除してもよろしいですか？',
    Interests: '興味',
    Cancel: 'キャンセル',
    Confirm: '確認',
    Days: '日々',
    authorization: '署名認証をキャンセルしました！',
    stakeAmount: 'エントリーステーク額',
    know: 'わかった'
  },
  'trading': {
    tradingTitle: '取引報酬',
    know: 'わかった',
    ComingSoon: '近日公開',
    swapNow: '今すぐ交換',
    claim: '請求',
    tradingRule: '取引ルール',
    learnMore: 'もっと詳しく知る',
    finished: '終了した',
    Live: '住む',
    Upcoming: '今後の',
    Past: '過去',
    UnclaimedReward: '未請求の報酬',
    Chain: 'Biananceスマートチェーン',
    Ending: '終了',
    Start: '始まる時間',
    Time: '時間',
    Reward: '褒美 BKB + 1',
    historyData: '歴史',
    ruleContentTitle: '指定されたトークン間のスワップトランザクションを完了して、BKB報酬を比例配分で取得します（トランザクション料金のパーセンテージで計算されます）。',
    YourTradingValue: 'あなたの取引価値',
    TodayTradingValue: '今日の取引価値',
    TodayTradingReward: '今日の取引報酬',
    YourTradingReward: 'あなたの取引報酬',
    transaction: '合計取引金額',
    GetsBKB: 'BKB番号を取得します',
    in: 'の',
    make: '取引を行う',
    toGet: 'BKBを取得するには',
    noticeBar: 'このイベントは、投資アドバイスとして解釈されるべきではありません',
    ruleTitle: '取引ルール',
    ruleContent: '1.ユーザーは、指定された2つのトークンのいずれかの[詳細]ページまたは[マーケット]ページに移動して、[取引報酬]ページに入ることができます。<br/> 2。 指定された2つのトークン間のto / fromスワップは、有効と見なされます。<br/> 3。 特定の日の報酬は翌日の00:00（GMT + 8）に計算され、その後ユーザーは報酬を請求できます; <br/> 4。 このイベントは、投資アドバイスとして解釈されるべきではありません',
    how: 'BKSwap Trading Rewardイベントに参加するにはどうすればよいですか？',
    how1: '1.以下を参照してください。',
    how11: ' 最新のBKSwapチュートリアルについて。',
    how2: '2. ルール:',
    howContent: '指定されたトークンペアとBKSwapの間でトランザクションを行うユーザーには、報酬が与えられます',
    howContent1: '詳細:',
    Objectives1: '各イベント中に、ユーザーは指定されたトークンペアとBKSwapの間でトランザクションを実行します。 BKBの金額は、後でその日の取引手数料のパーセンテージとして計算され、分配されます。 当日のイベントに参加したすべてのユーザーには、比例配分で報酬が与えられます。',
    how3: '3. 取引報酬はどのように計算されますか？',
    OverviewContent: '取引報酬はリアルタイムで計算され、ユーザーは「取引報酬」ページでいつでも確認できます。 イベントの決済サイクルは24時間です。 ユーザーは、前日の00:00（GMT + 8）に毎日取引報酬を受け取ります。',
    how4: '4. 取引報酬を確認する方法は？',
    OverviewContent4: 'BitKeepの「取引報酬」ページに移動して、利益に関するすべてを確認してください。',
    how5: '5. 取引報酬を請求する方法は？',
    OverviewContent5: '「取引報酬」ページに移動し、「請求」ボタンをタップして報酬を請求します。',
    popTit: 'リスク警告',
    tit1: 'トレーディングリワードイベントは、ファンに報酬を与えるためだけのものです。 それらは投資アドバイスとはみなされないかもしれません。',
    tit2: '注意：デジタル資産の価格は大きく変動します。 ユーザーは、投資する前に、デジタル資産投資のリスクを完全に理解して受け入れることをお勧めします。',
    btn: 'わかった'
  },
  'noviceBenefits': {
    'sign': '抽選券にサインする',
    'alreadySignedin': '署名済み',
    'alreadySignedin1': '署名済み',
    'day': 'ああ',
    'Signedin': 'にサイン',
    'obtain': '取得',
    'receive': '受け取る',
    'alreadyReceived': '受領済み',
    'Currently': '現在利用可能な抽選用紙',
    'zhang': '張',
    'Participate': '抽選で勝つ',
    'Draw': '直ちに抽選する',
    'Novice': '初心者奨励',
    'Telegram': 'Telegramへのご褒美',
    'Reward': '奨励する',
    'Join': '今すぐ参加',
    'swap': '初Swap取引奨励金',
    'raffle': '奨励BKB +2、抽選券 +2',
    'USDT': '初回入金50 USDT奨励金',
    'Immediate': '即時取引',
    'standard': '暫定的に目標に達していない.',
    'Getitnow': 'すぐ受け取る',
    'Viewnow': '今すぐ表示',
    'Airdropactivity': '空挺活動',
    'Access': 'Tokenを手に入れる機会がある',
    'Blindboxactivity': 'ブラインドボックスアクティビティ',
    'AccessNFT': '各種Token、NFTを取得する機会があります',
    'Invitation': '奨励金を招く.',
    'Invitefriends': '友達を100%招待して奨励金を勝ち取る',
    'Winaraffle': '抽選で勝つ',
    'rafflepapers': '当日の抽選用紙総数',
    'merafflepapers': '当日は抽選用紙を投入しました',
    'raffletickets': '抽選券の投入数',
    'available': '抽選券の枚数がご利用いただけます',
    'Pleaseenter': '抽選券の数を入力してください',
    'usersyesterday': '昨日当選したユーザー',
    'Activityrules': 'アクティブ・ルール',
    'Dailyreward': '毎日の奨励金BKBは1人のユーザーのみで分けられます',
    'morelottery': '抽選用紙が多ければ多いほど、奨励を受ける確率が高くなります',
    'luckydraw': '抽選用紙は初心者の奨励を完成することによって、サインして、友达を招待して獲得することができます',
    'notes': 'BitKeepは今回のプロモーション活動規則の最終決定権と解釈権を有する。不正行為、不正行為の疑い、BitKeepのいかなる規則制度に違反したユーザー参加資格を取り消す権利を保留します。',
    'Immediateinput': '即時投入',
    'WelfareCenter': '福祉センター',
    'Dailyluckydraw': '毎日抽選',
    'Lotteryresults': '抽選結果',
    'participationperiods': '参加期間',
    'ticketsinvested': '投入クーポン数',
    'obtainBKB': '取得 BKB 数',
    'investment': '投入する',
    'araffleticket': '抽選券を1枚ください。',
    'Failedto': 'に当たりそこなう',
    'Congratulations': '当選おめでとうございます!',
    'Morebenefits': 'より多くの福利厚生',
    'signSuccess': 'サインインに成功',
    'signError': 'サインインに失敗しました',
    'receiveSuccess': '正常に受信されました',
    'receiveError': '申し立てに失敗しました',
    '50u': '50uを超える資産は、24時間の保持時間後に請求できます',
    'Cumulative': '累计签到4天，7天可分别领取一张抽奖卷.',
    'Tips': 'チェックインルール',
    'Whatisaraffleticket': "ラッフルチケットとは?",
    'Usethelotteryticket': '宝くじを使用して宝くじのページに移動し、BKBの報酬を引き出します。',
    'Investedmore': '利用可能なクーポンよりも多くのクーポンを投資しました',
    'Investinsuccess': '成功への投資',
    'Failedtoputin': '入れなかった',
    'Tobewon': '描かれる',
    'congratulations': 'おめでとう ',
    'winningthelottery': ' 宝くじに当選',
    'Cloudwallet': 'クラウドウォレットはまだ作成されていません',
    'incompatible': '非互換'
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
  base: {
    loading: "로딩 중",
    no_more: "더 이상은 없어",
    networkErro: "인터넷이 엉망이 되었다",
    success: '새로고침 성공',
    copied: '복사됨',
    copiedError: '일부 오류가 발생했습니다.',
    nomore: '더 이상은 없어'
  },
  "ActivityBlindbox": {
    shared: {
      content: "I'm opening blind free boxes, come and help me~"
    },
    dialog: {
      "isCreateWalletComfirm": "Cloud wallet does not exist. Do you want to create it now?",
      helperSuccess: "Contribute to success",
      "getBlindbox": "Congratulations on getting the BitKeep digital blind box",
      "openBlindbox": "Open to get surprise digital assets",
      "lookBlindbox": "View digital blind box"
    },
    toast: {
      open: "Opening...",
      loading: "Loading...",
      Saving: "Saving...",
      inputETH: "Please enter eth address",
      Generating: "Generating...",
      ContributeSuccess: "Contribute to success"
    },
    statusText: ["恭喜获得BitKeep数字盲盒", "开启获得惊喜数字资产", "查看数字盲盒"],
    button: {
      "OpenimmediatelyText": "Open the blind box immediately",
      "InviteFriendsNow": "Invite friends to help now",
      "OpenFriendsImmediately": "Help open the blind box",
      "ViewAssets": "View assets",
      "SuccessView": "Success! Please view assets",
      //
      // "OpenimmediatelyText": "Open the blind box immediately"
      "savePicture": "Save Picture",
      //
      "ShareLink": "Share Link",
      //
      "Downloadnow": "Download now"
    },
    title: {
      "myBlindboxText": "My blind box"
    },
    ActivityBlindboxList: {
      "myBlindboxText": "My blind box",
      "RaidersText": "Raiders",
      "DigitalBlindBoxText": "Digital blind box",
      "blindBoxNumText": "The box is still short of <span class='color_red'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "blindBoxSurpriseText": "",
      "ValidUntilText": "Valid until",
      "GoOpenText": "Go open",
      "GoShareText": "Go share",
      "TurnedOnText": "Turned on",
      "SuccessfullyOpenedText": "Opened",
      "expiredText": "expired",
      "ShareWithMe": "By invitation",
      willOpened: "To be opened",
      noData: {
        title: "No blind box",
        content: "It is said that Using BitSwap or cross-chain swap sucessfully will get a chance to receive blind box and get digital assets"
      },
      end: {
        title: "Blind box beta event has finished",
        subtitle: "please stay tuned for next event",
        content: `You can also follow <br/>
        Twitter：@BitKeepOS <br/>
        or join Telegram：<br/>
        https://t.me/bitkeep <br/>
        to know more updates.`
      }
    },
    ActivityBlindboxDetail: {
      "blindBoxNumText": "The box is still short of <span class='color_red font-20'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "inputAddressPlaceholader": "Click here to input eth address",
      "NoAddressDownload": "No address? Click download bitkeep to create an address",
      "HelpSuccessETH": "Help success eth address",
      "FinalInterpretation": "The final interpretation of this activity belongs to BitKeep",
      "invalidTimeText": "Distance blind box failure",
      "successfullyTimeText": "The blind box has been opened successfully!",
      expiredTimeText: "It's a pity that this blind box has expired",
      "ScanBlindBox": "Scan and receive digital blind box",
      DownloadBitkeep: "Download Bitkeep to share the digital assets in the blind box",
      "BitKeepTitleText": "BitKeep数字盲盒",
      "OpenTitleText": "开启获得惊喜数字资产",
      "InviteFriendsText": "邀请好友助力开启盲盒",
      "GetSurpriseAssetsText": "获得惊喜数字资产",
      "stillShort": "距离开启盲盒仅差3/5人助力",
      "InviteFriendsNowText": "立即邀请好友助力",
      "SuccessfullyAssistedText": "已成功助力 ETH 地址",
      "OpenStrategyText": "开启盲盒攻略",
      "shareLinkText": "分享海拔或链接给好友",
      "ClickConentSharedText": "点击「立即邀请好友助力」将海报或者链接分享给好友",
      "FriendsFillValidTitleText": "好友填写有效ETH地址助力",
      "FriendsHelpeSuccessText": "好友进入链接并输入有效的ETH地址助力成功",
      "CanopenBlindBoxText": "凑齐足够助力好友助力后开启盲盒",
      "OpenTheBlindBoxText": "当足够数量的好友助力成功后，您可以点击开启盲盒",
      "shareWidthFriendsText": '您和好友瓜分盲盒内数字资产',
      "CanViewAssetsTocloudWallet": "盲盒开启后您和助力好友均可在 BitKeep 云钱包中查看获得的数字资产",
      rules: ["Each blind box has random number of digital assets", "Friends fill in a valid ETH address to help", "Blind box will open when invitations reaching certain amount, you and your friends can get the rewards", "Invitee should download BitKeep, import the previous ETH address to get rewards", "Rewards will be sent to your BitKeep cloud wallet, activate it to claim"],
      modal: {
        sharedHelperMeText: "助力我开启 BitKeep 数字盲盒吧",
        openSurpriseText: "开启获取惊喜数字资产",
        DownloadBitkeep: "下载 Bitkeep，瓜分盲盒中数字资产",
        savePicture: "保存图片",
        ShareLink: "分享链接",
        HelpOpenImmediatel: "立即助力开启盲盒",
        SuccessfullyHelpFriends: "成功助力好友",
        DownloadBitkeepAppNow: "立即下载 bitkeep",
        "CheckBoxToGetAssets": "查看盲盒获取惊喜数字资产",
        DownloadNow: "立即下载"
      }
    }
  },
  'CbkbExchange': {
    balance: 'Balance',
    get: 'You can get',
    swap: 'Swap',
    exchange: 'cBKB swap to BKB officially launching',
    exchangeTitle: 'cBKB is a credit point issued by BKB. cBKB is non-transferable and non-tradable. It is only used as a point voucher for redeeming BKB. cBKB is officially issued by BitKeep, and 100% can be exchanged for BKB.',
    exchangeTitleA: 'Users can get cBKB through ecological rewards, blind boxes, invitations, airdrops, etc. The swap channel has opened. Users can exchange into BKB by themselves.',
    exchangeTime: 'Swap Time',
    time: '2021-10-20 12:00 — 11-03 12:00 (GMT+8)',
    condition: 'Swap Rules',
    conditionText: 'Users must complete at least one Swap in BitKeep wallet ',
    proportion: 'Swap Ratio',
    proportionText: 'The conversion ratio of cBKB to BKB is 60:1',
    exchangeTitle2: 'BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    exchangeTitle3: 'Welcome to follow BitKeep channels for more updates on BKB airdrop.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: '1.Get discounts on BitSwap fees.',
    hold2: '2.Pay for BitKeep NFT Market service.',
    hold3: '3.Obtain the payment function of BitKeep Pools.',
    hold4: '4.Get the payment reduction and exemption function of BitKeep Pay.',
    hold5: '5.Obtain BitKeep Fin interest rate hike coupon rewards to support the entire product ecology.',
    hold6: '6.Get payment exemptions in the BitKeep business system.',
    hold7: '7.Obtain irregular airdrop rewards in BitKeep syrup pools.',
    hold8: '8.BKB StaKing rewards',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
    appreciationPool: 'Multiple staking pool',
    appreciationValut: 'Vault',
    more: 'More about BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: 'OK',
    swapTitle: 'cBKB Swap'
  },
  'airdrop': {
    get: 'You can get',
    receive: 'Receive',
    airdrop: 'BKB Airdrop',
    airdropContent: 'The total amount of BKB is 600 million, which is the ecological token of BitKeep ecology. Users holding BKB will enjoy ecological governance rights, and it is also an identity certificate for ecological payment methods and membership rights. ',
    time: 'Activity Time',
    timeContent: '2021.10.18 20:00 — 2021.10.28 00:00 (GMT+8)',
    particlpation: 'Conditions for Participation',
    particlpation1: 'From July 2020. 07. 01 to October 2021. 10 .01',
    particlpation2: 'Users who meet one of the following three requirements are eligible',
    particlpation3: 'A :  Transfer tokens via BitKeep at least twice are deemed Class A users;    ',
    particlpation4: 'B :  Those who have successfully used BKswap are deemed Class B users;',
    particlpation5: 'C：Users who deposit NFT assets on BitKeep are considered Class C users.',
    rules: 'Activity Rules',
    rules1: '1.Join BitKeep official telegram and discord community;',
    rules2: '2.During the airdrop event, users who meet the conditions of participation will be rewarded if they use BKSwap successfully;',
    rules3: '3.Class A qualified users will get 125 BKB for completing the above tasks, Class B qualified users will get 1,250 BKB for completing the above tasks, and Class C qualified users will get 250 BKB for completing the above tasks.',
    note: '* BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    airdropTitle: 'Receive BKB airdrop',
    notStart: 'The airdrop activity has not yet started'
  },
  'mining': {
    loading: "로딩 중",
    success: '새로고침 성공',
    pull: '새로 고치다',
    coundown: '카운트다운',
    miningTitle: '거래 보상',
    comingsoon: '다가오는',
    inProgress: '진행 중',
    startCountdown: '카운트다운 시작',
    endCountdown: '카운트다운 종료',
    rewardPool: '거래 데이터',
    update: '업데이트',
    will: '이번주 내 보상 지급',
    activity: '끝',
    tradingVolume: '거래량',
    tradingIn: '오늘 거래',
    userTodayValue: '오늘 거래량',
    myRewards: '내 보상',
    totalTrading: '총 거래량',
    todyVolue: '오늘의 가치',
    totalRewards: '총 보상',
    yesterdayRewards: '오늘의 보상',
    miningRuleTitle: '이벤트 규칙',
    miningRule: 'BKB의 거래 보상을 계산하는 데 사용되는 데이터입니다. 거래 보상은 BitKeep Wallet에서 제공합니다.개요...',
    learnMore: '더 알아보기',
    Introduce: '소개하다',
    day: '하루 거래 금액',
    swapNow: '지금 교환',
    phase: '단계 {v}',
    historyTitle: '역사',
    startTime: '시작',
    overTime: '끝',
    tradeValue: '거래 가치',
    tradeReward: '무역 보상',
    tradeUser: '거래 사용자',
    produced: 'BKB 생산',
    notStart: '시작하지 않음',
    ruleTitle: 'BKSwap 거래 보상이란 무엇입니까?',
    ruleContent: 'BKB 보상 사용자는 BKSap 거래를 완료할 때 획득합니다. BitKeep은 사용자가 BKB를 채택하고 관련 이벤트에 참여하도록 장려하기 위해 스마트 계약 배포 규칙에 따라 BKSwap에서 거래하는 사용자에게 보상합니다. 동시에 BKB의 응용 시나리오를 확장하여 Web3.0 시대의 블록체인 지갑 생태계를 더욱 발전시킬 것입니다.',
    how: 'BKSwap 거래 보상은 어떻게 받나요?',
    how1: '1. 최신 BKSwap 튜토리얼은 ',
    how11: '을 참조하세요.',
    // how1: `1. 최신 BKSwap 튜토리얼은 <a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a>을 참조하세요.`,
    how2: '2. 이벤트 규칙:',
    howContent: '초대 (상금 풀: 30WBKB): 트레이딩 리워드 이벤트는 5일간 진행됩니다. 초대 보상 풀은 초대에 성공한 모든 사용자가 공유합니다. 보상은 다음과 같이 계산됩니다.',
    howContent1: '매일 사용자는 다음을 얻을 수 있습니다. 15*성공적으로 초대된 사용자 수 + (모든 초대 대상자의 거래량 합계/초대된 모든 사용자의 GMV)*X<br/>여기서 "GMV 초대된 모든 사용자"를 Y로',
    Objectives1: 'Y가 ≥ 2M이고 ≤ 5M USDT에 해당하는 경우 X=10,000BKB',
    Objectives2: 'Y가 ≥ 50M이고 ≤ 20M USDT에 해당하는 경우 X=20,000BKB',
    Objectives3: 'Y가 ≥ 20M이고 ≤ 30M USDT에 해당하는 경우 X=20,000BKB',
    Objectives4: 'Y가 > 30M USDT에 해당하는 경우 X=40,000BKB',
    howContent2: 'BKSwap 거래 보상은 다음과 같이 3단계로 나뉩니다.',
    Objectives11: ' 특정 날짜에 BKSwap의 총 거래 금액이 ≥ 5백만 USDT 및 ≤ 1천만 USDT에 해당하는 경우 BitKeep은 계약 규칙에 따라 당일 거래 수수료의 300%에 해당하는 BKB 합계를 다음과 같이 제공합니다. 오늘의 보상. 당일 BKSwap 거래에 참여한 모든 사용자는 비례 지분을 얻습니다(각 개별 사용자의 거래 금액에 따라 다름).',
    Objectives12: ' 특정 날짜에 BKSwap의 총 거래 금액이 1000만~4000만 USDT에 해당하는 경우 BitKeep은 계약 규칙에 따라 당일 거래 수수료의 200%에 해당하는 BKB 합계를 보상으로 제공합니다. 그 날. 당일 BKSwap 거래에 참여한 모든 사용자는 비례 배분을 받게 됩니다.',
    Objectives13: ' 당일 BKSwap의 총 거래 금액이 4000만 USDT 이상일 경우 계약 규칙에 따라 BKB는 당일 총 보상으로 당일 거래 수수료의 100%로 해제되며 참여하는 모든 사용자는 당일 거래에서 비례하여 나누어집니다.',
    how3: '3. 지속:',
    OverviewContent: 'BKSwap 트레이딩 리워드 2차 이벤트 기간: 2021년 12월 20일 15:00 ~ 2021년 12월 25일 23:00(GMT + 8)',
    FQATitle: '자주 묻는 질문(FAQ)',
    FQATitle1: '1. 보상은 언제 지급되나요?',
    FQAContent1: '거래 보상은 실시간으로 계산되며, 이용자는 "거래 보상" 페이지에서 언제든지 확인할 수 있습니다. 사용자는 매일 00:00(GMT+8)에 전날의 거래 보상을 받게 됩니다. 예: 사용자는 2021년 12월 21일 00:00(GMT+8)에 2021년 12월 21일에 대한 거래 보상을 받게 됩니다. 다음 날에도 마찬가지입니다. 2021년 12월 25일 보상의 경우 2021년 12월 26일 12:00(GMT+8)(이벤트 종료 후 정확히 하루)에 사용자에게 제공됩니다.',
    FQATitle2: '2. 거래 보상을 확인하는 방법은 무엇입니까?',
    FQAContent2: 'BitKeep의 "거래 보상" 페이지로 이동하여 수익에 대한 모든 것을 확인하십시오.',
    FQATitle3: '3. 거래 보상을 청구하는 방법은 무엇입니까?',
    FQAContent3: '"보상 거래" 페이지로 이동하여 "청구" 버튼을 눌러 보상을 청구하십시오.',
    FQATitle4: '4. 어떻게 초대합니까?',
    FQAContent4: '거래 보상 페이지에서 지금 친구 초대를 누른 후 초대 링크를 복사하거나 초대 포스터를 공유하세요. 친구(신규 사용자)는 BitKeep 앱을 다운로드 및 설치하고 ETH 주소를 입력하여 확인합니다. 그런 다음 BKSwap과 유효한 거래(사전 결제 거래 금액 ≥100U)를 시도합니다. 그 후 초대 보상을 받게 됩니다.',
    // FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. 초대 보상은 어떻게 계산되나요?',
    FQAContent5: '매일 사용자는 다음을 얻을 수 있습니다. 15*성공적으로 초대된 사용자 수 + (모든 초대 대상자의 트랜잭션 볼륨/초대된 모든 사용자의 GMV 합계)*X; 여기서 우리는 "(모든 초대받은 사람의 거래량/초대받은 모든 사용자의 GMV의 합계)"를 Y로 간주합니다.',
    FQAContent51: 'Y가 ≥ 2M이고 ≤ 5M USDT에 해당하는 경우 X=10,000BKB',
    FQAContent52: 'Y가 ≥ 50M이고 ≤ 20M USDT에 해당하는 경우 X=20,000BKB',
    FQAContent53: 'Y가 ≥ 20M이고 ≤ 30M USDT에 해당하는 경우 X=20,000BKB',
    FQAContent54: 'Y가 > 30M USDT에 해당하는 경우 X=40,000BKB',
    FQAContentNote: '참고: 새 사용자가 BKSwap과 유효한 거래(사전 결제 거래 금액 ≥100U)를 한 경우에만 초대가 유효한 것으로 간주됩니다.',
    FQATitle6: '6. 초대 보상은 언제 계산되나요?',
    FQAContent6: '사용자는 매일 00:00(GMT+8)에 전날의 초대 보상을 받게 됩니다.',
    about: 'BKB 소개',
    viewAll: '모두보기',
    pickUp: '찾다',
    aboutContent1: 'BKB를 보유하는 것은 생태적 거버넌스 권리를 향유하게 되며, BitKeep의 생태적 지불 방법 및 회원권의 신원 증명이기도 합니다.',
    aboutContent2: 'BKB는 여러 퍼블릭 체인 리소스 구매, 지갑의 VIP 기능 잠금 해제, BitKeep 광고비 지불과 같은 시나리오에서 사용할 수 있습니다.',
    distribution: 'BKB 발행 및 유통',
    total: 'BKB 총 공급:',
    mining: '복합 채굴',
    community: '지역 사회',
    tram: '팀 및 초기 투자자',
    partner: '파트너',
    eco: '생태계 구축',
    hold: 'BKB 지분 보유',
    hold1: '생태 거버넌스 권리를 누리십시오',
    hold2: '생태적 지불 방법',
    hold3: '회원의 권리 및 신분증',
    hold4: '퍼블릭 체인 리소스 구매',
    hold5: '지갑의 VIP 기능 잠금 해제',
    hold6: '광고비 결제',
    hold7: 'BitKeep IWO 참여',
    hold8: '고품질 자산의 독점 채널 진입 약속',
    appreciation: 'BKB 가치 향상',
    appreciationSwap: '스왑 수수료 공제',
    appreciationCoin: '지불',
    appreciationPool: '다중 스테이킹 풀',
    appreciationValut: '둥근 천장',
    more: 'BKB에 대한 추가 정보',
    website: '공식 웹 사이트',
    paper: '백지',
    twitter: '트위터',
    github: '깃허브',
    telegram: '전보',
    facebook: '페이스북',
    explorer: '블록 탐색기',
    know: '좋아요',
    myTraded: '나의 거래 가치',
    totalDistributed: '총 분배',
    yesterday: '어제',
    claim: '주장하다',
    ClaimRewards: '보상 청구',
    ClaimRewardsub: '오늘의 보상은 그날 밤 12시에 정산됩니다',
    confirm: '확인하다',
    noData: '데이터 없음',
    invitationReward: "초대 보상",
    myInvitationRewards: "나의 초대 보상",
    totalBonusPool: "총 상금 풀",
    todayBonusPool: "오늘의 보너스",
    myTodayRewards: "나의 오늘 보상",
    tradingRewards: "거래 보상",
    invitationRewards: "초대 보상",
    viewDetails: "세부 정보보기",
    inviteFriendsNow: "친구를 초대",
    ruleDetail: '참고: 다음 거래는 거래 보상을 받을 수 있는 것으로 간주되지 않습니다.',
    ruleDetail1: `1. 다른 체인에서 동일한 코인을 교환하는 것을 포함하는 교차 체인 스왑, 예: <br/> (1) BSC-USDT에서 ETH-USDT로의 스왑; <br/> (2) Swft 채널을 통해 또는 BNB에서 ETH로의 스왑과 같이 서로 다른 체인에서 서로 다른 코인을 스왑합니다.`,
    ruleDetail2: '2. 코인 거래 소각. 일부 코인은 소각 메커니즘을 기반으로 하며 거래가 있을 때마다 부분적으로 소각될 수 있으므로 정확한 거래 금액을 계산하는 데 차이가 있습니다. 따라서 이 코인은 이 BKSwap 거래 보상 이벤트에서 제외됩니다.',
    invitationReward: "나의 초대 보상",
    inviteNumber1: '총 초대 보상',
    inviteNumber2: '어제 초대 보상',
    inviteNumber3: '총 초대 거래 보상',
    inviteNumber4: '어제 보상',
    invitationPool: '초대 보너스 풀',
    invitationPoolContent: '초대 및 적립 이벤트의 두 번째 단계에 사용'
  },
  'blindboxInvite': {
    inviteTitle: '친구를 초대',
    myRewards: '내 보상',
    invitedNumber: '친구를 초대',
    tokenRewards: '토큰 보상',
    NFTRewards: 'NFT 보상',
    boxRewards: '블라인드 박스 보상',
    inviteFriend: '친구를 초대',
    inviteFriends: '친구를 초대',
    inviteLink: '초대 링크',
    inviteFriendsNow: '지금 친구를 초대하세요',
    savePicture: '사진을 저장하다',
    ShareLink: "링크 공유",
    inforce: '활성화됨',
    inactivated: '비활성화됨',
    Address: '주소',
    State: '상태',
    Time: '시간',
    nomore: '더 이상은 없어',
    loading: '로딩 중...',
    rewardTitle: '토큰 보상',
    RuleTitle: '초대 규칙',
    know: '확인',
    toEarn: '친구를 초대하여 BKB 적립',
    rewardsMore: '친구 거래는 더 많은 BKB를 보상합니다.',
    Poster: 'QR코드 스캔',
    downReward: 'BitKeep Wallet 다운로드 암호화 자산 보상 받기',
    imgText: '안녕하세요, 친구, 여기 암호화 자산을 적립할 수 있는 Crypto Wallet이 있습니다',
    detailWallet: '탐색에 노력이 필요하지 않은 암호화 지갑',
    detailWallet1: '암호화된 자산을 안전하게 저장',
    detailWallet2: '편리하고 사용하기 쉬운 BKSwap',
    detailWallet3: '721 NFT 지원',
    detailWallet4: '7000개 이상의 DApp 생태계',
    yourFrinedInvite: '친구가 BitKeep 다중 체인 지갑을 사용하도록 초대합니다.',
    friendsText: 'BitKeep과 거래하여 BKB 획득',
    detailInput: 'BitKeep에 가입하려면 ETH 주소를 입력하세요.',
    detailBtn: '초대를 수락하다',
    detailJust: '아직 ETH 주소가 없으신가요? BitKeep 앱을 다운로드하고 지갑을 만드세요.',
    detailWhy: 'BitKeep 지갑을 선택하는 이유는 무엇입니까?',
    detailContro: '디지털 자산 제어',
    detailUl1: '토큰 및 NFT를 위한 안전한 저장소',
    detailUl2: 'BitKeep은 30개 이상의 메인 체인, 200,000개 이상의 토큰 및 7000개 이상의 DApp을 지원합니다.',
    detailUl3: '사용자를 위한 DeFi의 세계를 열다',
    detailCrypto: '모든 암호화 자산은 BKSwap으로 거래할 수 있습니다.',
    detailAny: '언제든지 멀티체인 암호화폐를 쉽게 교환하고 거래할 수 있습니다.',
    detailAggregate: 'Uniswap, Sushiswap, PancakeSwap 등과 같은 30개 이상의 주류 DEX를 집계합니다.',
    detailNFT: 'NFT 저장',
    detailNFTCon: 'BitKeep은 168개 이상의 국가 및 지역에 걸쳐 수백만 명의 사용자에게 안전하고 안정적인 암호화 자산 관리 서비스를 제공합니다.',
    downText: '축하합니다. 초대를 수락했습니다! 지금 BitKeep 지갑을 사용하여 블록체인 라이프스타일을 즐기세요',
    foot1: 'BitKeep은 전 세계적으로 서비스를 제공합니다',
    foot2: '전 세계 168개국 이상 수백만 명의 사용자에게 안전하고 안정적인 암호화 자산 관리 서비스를 제공했습니다.',
    foot3: '사용자 수',
    foot4: '거래 금액',
    foot5: '국가 및 지역 포함',
    inviteRuleTitle: '친구(신규 사용자)가 확인하는 유효한 초대는 무엇입니까?',
    ruleDetail: '사용자가 자신의 지갑 주소를 가져오거나 주소를 가져오거나 BitKeep 지갑을 생성합니다.',
    ruleDetail1: '주소는 24시간 이내에 생성됩니다.',
    ruleDetail2: 'BKSwap에서 사용자의 거래량이 10 USDT 이상입니다.',
    myInviteRuleTitle: '초대 보상은 어떻게 계산되나요?',
    myRuleDetail: '매일 사용자는 다음을 얻을 수 있습니다. 15*성공적으로 초대된 사용자 수 + (모든 초대 대상자의 트랜잭션 볼륨/초대된 모든 사용자의 GMV 합계)*X; 여기서 우리는 "(모든 초대받은 사람의 거래량/초대받은 모든 사용자의 GMV의 합계)"를 Y로 간주합니다.',
    myRuleDetail1: 'Y가 ≥ 2M이고 ≤ 5M USDT에 해당하는 경우 X=10,000BKB',
    myRuleDetail2: 'Y가 ≥ 50M이고 ≤ 20M USDT에 해당하는 경우 X=20,000BKB',
    myRuleDetail3: 'Y가 ≥ 20M이고 ≤ 30M USDT에 해당하는 경우 X=20,000BKB',
    myRuleDetail4: 'Y가 > 30M USDT에 해당하는 경우 X=40,000BKB',
    myRuleDetail5: '참고: 새 사용자가 BKSwap과 유효한 거래(사전 결제 거래 금액 ≥100U)를 한 경우에만 초대가 유효한 것으로 간주됩니다.',
    toast2: '죄송합니다. 이 주소는 초대되었습니다.',
    toast0: '죄송합니다. 이 주소는 최대 초대 한도에 도달했습니다.',
    emptyToast: '주소 필드는 비워둘 수 없습니다.'
  },
  'staking': {
    stakingTitle: 'BKB 스테이킹',
    AddPoolTitle: '풀 추가',
    MyPoolsTitle: '내 수영장',
    stakingImg: 'BKB 스테이크 BKB 적립',
    Introduce: '소개하다',
    content: 'BitKeep은 사용자에게 돈을 벌 수 있는 기회를 제공하기 위해 BKB Staking을 시작했습니다. 거기에 BKB를 스테이킹하는 BKB 홀더는 매주 BKB 풀에서 이익을 얻고 있습니다. 앞으로 더 많은 수익을 올릴 수 있는 다른 많은 프로젝트에 액세스할 수 있습니다. BKB를 스테이킹할 때 7일, 30일, 60일, 90일 만기의 4가지 스테이킹 풀 중에서 선택할 수 있습니다. APY는 각각 20%, 30%, 40%, 50%입니다. 귀하의 수익은 만기 시 계산되어 귀하의 Cloud Wallet으로 분배됩니다.',
    Data: '데이터',
    StakedBKB: '스테이킹된 BKB',
    totalSupply: 'BKB 총 공급',
    EndsIn: '종료',
    APY: 'APY',
    YourStakeAmount: '귀하의 스테이크 금액',
    Duration: '기간(일)',
    StakeNow: '지금 스테이크',
    SoldOut: '매진',
    ComingSoon: '출시 예정',
    EthereumChainPool: '이더리움 체인 풀',
    BSCChainPool: 'BSC 체인 풀',
    StakeAmount: '스테이크 금액',
    Available: '사용 가능',
    MAX: '최대',
    StakeAmountLimiation: '스테이크 금액 제한',
    Minimum: '최저한의',
    Maximum: '최고',
    Summary: '요약',
    StakeDate: '스테이크 날짜',
    ValueDate: '계약 날짜',
    InterestPeriod: '이자 기간',
    InterestEndDate: '이자 종료일',
    RedemptionDate: '사용 날짜',
    EstimatedInterests: '예상 관심',
    Staking: '스트라이크',
    Activity: '활동',
    BeExpired: '만료되다',
    Pledge: '약속',
    Durations: '지속',
    PledgeDueDate: '서약 마감일',
    CurrencyReward: '통화 보상',
    Remove: '제거하다',
    Unstake: '언스테이킹',
    Reward: '보상',
    Operate: '작동하다',
    Add: '추가하다',
    RemovePool: '풀 제거',
    getBKB: '축하합니다!',
    removeBefore: '이벤트가 종료되기 전에 제거하면<br/> 모든 관심을 잃게 됩니다.<br/>제거하시겠습니까?',
    Interests: '이해',
    Cancel: '취소',
    Confirm: '확인하다',
    Days: '날',
    authorization: '서명 승인을 취소했습니다!',
    stakeAmount: '참가 지분 금액',
    know: '확인'
  },
  'trading': {
    tradingTitle: '거래 보상',
    know: '확인',
    ComingSoon: '출시 예정',
    swapNow: '지금 교환',
    claim: '주장하다',
    tradingRule: '거래 규칙',
    learnMore: '더 알아보기',
    finished: '완성 된',
    Live: '라이브',
    Upcoming: '다가오는',
    Past: '과거',
    UnclaimedReward: '미청구 보상',
    Chain: 'BI A 남쪽의 스마트체인',
    Ending: '마치다',
    Start: '시작 시간',
    Time: '시간',
    Reward: '보상',
    historyData: '역사',
    ruleContentTitle: '지정된 토큰 간의 스왑 거래를 완료하여 BKB 보상을 비례적으로 받습니다(거래 수수료의 백분율로 계산).',
    YourTradingValue: '귀하의 거래 가치',
    TodayTradingValue: '오늘 거래 가치',
    TodayTradingReward: '오늘의 총 보상',
    YourTradingReward: '귀하의 거래 보상',
    transaction: '총 거래 금액',
    GetsBKB: 'BKB 번호 가져오기',
    in: '~에',
    make: '거래하기',
    toGet: 'BKB를 얻으려면',
    noticeBar: '이 이벤트는 투자 조언으로 해석되어서는 안 됩니다.',
    ruleTitle: '거래 규칙',
    ruleContent: '1. 사용자는 두 개의 지정된 토큰 중 하나의 세부 정보 페이지 또는 마켓 페이지로 이동하여 거래 보상 페이지에 들어갈 수 있습니다.<br/>2. 지정된 두 토큰 간의 모든 교환/교환은 유효한 것으로 간주됩니다.<br/>3. 특정 날짜의 보상은 다음 날 00:00(GMT+8)에 계산되며, 그 이후에 사용자는 보상을 요청할 수 있습니다.<br/>4. 이 이벤트는 투자 조언으로 해석되어서는 안 됩니다.',
    how: 'BKSwap 트레이딩 리워드 이벤트는 어떻게 참여하나요?',
    how1: '1. 참조:',
    how11: ' 최신 BKSap 자습서.',
    how2: '2. 규칙:',
    howContent: 'BKSap을 사용하여 지정된 토큰 쌍 간에 트랜잭션을 수행하는 사용자는 보상을 받습니다.',
    howContent1: '세부:',
    Objectives1: '각 이벤트 동안 사용자는 BKSwap을 사용하여 지정된 토큰 쌍 간에 트랜잭션을 수행합니다. BKB 금액은 나중에 당일 거래 수수료의 백분율로 계산되어 배포됩니다. 당일 이벤트에 참여하는 모든 사용자는 비례하여 보상을 받게 됩니다.',
    how3: '3. 거래 보상은 어떻게 계산되나요?',
    OverviewContent: '거래 보상은 실시간으로 계산되며, 이용자는 "거래 보상" 페이지에서 언제든지 확인할 수 있습니다. 이벤트 정산 주기는 24시간입니다. 사용자는 매일 00:00(GMT+8)에 전날의 거래 보상을 받습니다.',
    how4: '4. 거래 보상을 확인하는 방법은 무엇입니까?',
    OverviewContent4: 'BitKeep의 "거래 보상" 페이지로 이동하여 수익에 대한 모든 것을 확인하십시오.',
    how5: '5. 거래 보상을 청구하는 방법은 무엇입니까?',
    OverviewContent5: '"보상 거래" 페이지로 이동하여 "청구" 버튼을 눌러 보상을 청구하십시오.',
    popTit: '위험 경고',
    tit1: '트레이딩 리워드 이벤트는 팬들에게만 보상을 제공하는 것입니다. 그들은 투자 조언으로 간주되지 않을 수 있습니다.',
    tit2: '알림: 디지털 자산의 가격은 크게 변동합니다. 사용자는 투자하기 전에 디지털 자산 투자의 위험을 완전히 이해하고 수용하는 것이 좋습니다.',
    btn: '알 겠어요'
  },
  'noviceBenefits': {
    'sign': '출석을 서명하여 추첨권을 받다.',
    'alreadySignedin': '출석',
    'alreadySignedin1': '출석',
    'day': '일',
    'Signedin': '출석',
    'obtain': '얻다',
    'Received': '이미 수령',
    'Currently': '현재 사용 가능한 추첨권',
    'zhang': '',
    'Participate': '추첨에 참여하여 획득하다',
    'Draw': '즉시 추첨하다.',
    'Novice': '신입 보상',
    'Telegram': '텔레그램 가입 보상',
    'Reward': '이미 수령 BKB + 1',
    'alreadyReceived': '장려하다',
    'Join': '지금 가입',
    'swap': '첫 Swap 거래 보상',
    'raffle': '보상 BKB +2, 추첨권 +2',
    'USDT': '첫 입금 50 USDT 보상',
    'Immediate': '지금 거래',
    'standard': '아직 표준에 미달하다.',
    'Getitnow': '즉시 수령하다',
    'Viewnow': '지금 보기',
    'Airdropactivity': '공중 투하 활동',
    'Access': '각종 Token을 획득할 기회가 있습니다.',
    'Blindboxactivity': '블라인드 박스 활동',
    'AccessNFT': '다양한 Token, NFT를 획득할 기회가 있습니다.',
    'Invitation': '초청 보상',
    'Invitefriends': '친구 초대 100% 보상 획득',
    'Winaraffle': '추첨하여 우승하다.',
    'rafflepapers': '당일 투입 추첨권 총수',
    'merafflepapers': '당일 나는 추첨권 수를 투입했다',
    'raffletickets': '경품권 투입 수량',
    'available': '쿠폰 사용 가능 장수',
    'Pleaseenter': '추첨권 수량을 입력하세요',
    'usersyesterday': '어제 당첨자',
    'Activityrules': '활동 규칙',
    'Dailyreward': '일일 보상 BKB는 한 사용자만 분배',
    'morelottery': '첨권이 많을수록 보상을 받을 확률이 높습니다',
    'luckydraw': '추첨권은 신입 보상 완성, 출석, 친구 초대를 통해 획득',
    'notes': 'BitKeep은 이번 홍보 활동 규칙에 대한 최종 결정권과 해석권을 가진다.저희는 부정행위, 부정행위 의심 또는 BitKeep의 모든 규정과 제도를 위반한 사용자의 참여자격을 취소할 권리를 보류합니다.',
    'Immediateinput': '즉각 투입하다',
    'WelfareCenter': '복지 센터',
    'Dailyluckydraw': '일일 추첨',
    'Lotteryresults': '추첨 결과',
    'participationperiods': '참가 기간',
    'ticketsinvested': '투입 복권 수',
    'obtainBKB': 'BKB 검색',
    'investment': '투입하다',
    'araffleticket': '경품권 한 장',
    'Failedto': '미당첨',
    'Congratulations': '당첨을 축하합니다!',
    'Morebenefits': '더 많은 혜택',
    'signSuccess': '로그인 성공',
    'signError': '로그인 실패',
    'receiveSuccess': '성공적으로 수신됨',
    'receiveError': '소유권 주장 실패',
    '50u': '50u 이상의 자산은 24시간의 보유 시간 이후에 청구할 수 있습니다.',
    'Cumulative': '累누적 출석 4 일, 7 일 동안 추첨권 1 장을 수령할 수 있습니다.',
    'Tips': '체크인 규칙',
    'Whatisaraffleticket': "추첨권이란?",
    'Usethelotteryticket': '복권을 사용하여 복권 페이지로 이동하여 BKB 보상을 받으세요.',
    'Investedmore': '사용 가능한 쿠폰보다 더 많은 쿠폰을 투자했습니다.',
    'Investinsuccess': '성공에 투자',
    'Failedtoputin': '넣지 못함',
    'Tobewon': '그려지다',
    'congratulations': '축하합니다',
    'winningthelottery': ' 복권 당첨',
    'Cloudwallet': '클라우드 지갑이 아직 생성되지 않았습니다.',
    'incompatible': '호환되지 않는'
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {
  base: {
    loading: "Đang tải",
    no_more: "Không còn nữa",
    success: 'Làm mới thành công',
    networkErro: "Internet đã trở nên tồi tệ",
    copied: 'Đã sao chép',
    copiedError: 'Một số lỗi đã xảy ra',
    nomore: 'Không còn nữa'
  },
  "ActivityBlindbox": {
    shared: {
      content: "I'm opening blind free boxes, come and help me~"
    },
    dialog: {
      "isCreateWalletComfirm": "Cloud wallet does not exist. Do you want to create it now?",
      helperSuccess: "Contribute to success",
      "getBlindbox": "Congratulations on getting the BitKeep digital blind box",
      "openBlindbox": "Open to get surprise digital assets",
      "lookBlindbox": "View digital blind box"
    },
    toast: {
      open: "Opening...",
      loading: "Loading...",
      Saving: "Saving...",
      inputETH: "Please enter eth address",
      Generating: "Generating...",
      ContributeSuccess: "Contribute to success"
    },
    statusText: ["恭喜获得BitKeep数字盲盒", "开启获得惊喜数字资产", "查看数字盲盒"],
    button: {
      "OpenimmediatelyText": "Open the blind box immediately",
      "InviteFriendsNow": "Invite friends to help now",
      "OpenFriendsImmediately": "Help open the blind box",
      "ViewAssets": "View assets",
      "SuccessView": "Success! Please view assets",
      //
      // "OpenimmediatelyText": "Open the blind box immediately"
      "savePicture": "Save Picture",
      //
      "ShareLink": "Share Link",
      //
      "Downloadnow": "Download now"
    },
    title: {
      "myBlindboxText": "My blind box"
    },
    ActivityBlindboxList: {
      "myBlindboxText": "My blind box",
      "RaidersText": "Raiders",
      "DigitalBlindBoxText": "Digital blind box",
      "blindBoxNumText": "The box is still short of <span class='color_red'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "blindBoxSurpriseText": "",
      "ValidUntilText": "Valid until",
      "GoOpenText": "Go open",
      "GoShareText": "Go share",
      "TurnedOnText": "Turned on",
      "SuccessfullyOpenedText": "Opened",
      "expiredText": "expired",
      "ShareWithMe": "By invitation",
      willOpened: "To be opened",
      noData: {
        title: "No blind box",
        content: "It is said that Using BitSwap or cross-chain swap sucessfully will get a chance to receive blind box and get digital assets"
      },
      end: {
        title: "Blind box beta event has finished",
        subtitle: "please stay tuned for next event",
        content: `You can also follow <br/>
        Twitter：@BitKeepOS <br/>
        or join Telegram：<br/>
        https://t.me/bitkeep <br/>
        to know more updates.`
      }
    },
    ActivityBlindboxDetail: {
      "blindBoxNumText": "The box is still short of <span class='color_red font-20'>{surplus}</span>/<span class='color_blod'>{invite}</span> people,you will get  digital assets",
      "inputAddressPlaceholader": "Click here to input eth address",
      "NoAddressDownload": "No address? Click download bitkeep to create an address",
      "HelpSuccessETH": "Help success eth address",
      "FinalInterpretation": "The final interpretation of this activity belongs to BitKeep",
      "invalidTimeText": "Distance blind box failure",
      "successfullyTimeText": "The blind box has been opened successfully!",
      expiredTimeText: "It's a pity that this blind box has expired",
      "ScanBlindBox": "Scan and receive digital blind box",
      DownloadBitkeep: "Download Bitkeep to share the digital assets in the blind box",
      "BitKeepTitleText": "BitKeep数字盲盒",
      "OpenTitleText": "开启获得惊喜数字资产",
      "InviteFriendsText": "邀请好友助力开启盲盒",
      "GetSurpriseAssetsText": "获得惊喜数字资产",
      "stillShort": "距离开启盲盒仅差3/5人助力",
      "InviteFriendsNowText": "立即邀请好友助力",
      "SuccessfullyAssistedText": "已成功助力 ETH 地址",
      "OpenStrategyText": "开启盲盒攻略",
      "shareLinkText": "分享海拔或链接给好友",
      "ClickConentSharedText": "点击「立即邀请好友助力」将海报或者链接分享给好友",
      "FriendsFillValidTitleText": "好友填写有效ETH地址助力",
      "FriendsHelpeSuccessText": "好友进入链接并输入有效的ETH地址助力成功",
      "CanopenBlindBoxText": "凑齐足够助力好友助力后开启盲盒",
      "OpenTheBlindBoxText": "当足够数量的好友助力成功后，您可以点击开启盲盒",
      "shareWidthFriendsText": '您和好友瓜分盲盒内数字资产',
      "CanViewAssetsTocloudWallet": "盲盒开启后您和助力好友均可在 BitKeep 云钱包中查看获得的数字资产",
      rules: ["Each blind box has random number of digital assets", "Friends fill in a valid ETH address to help", "Blind box will open when invitations reaching certain amount, you and your friends can get the rewards", "Invitee should download BitKeep, import the previous ETH address to get rewards", "Rewards will be sent to your BitKeep cloud wallet, activate it to claim"],
      modal: {
        sharedHelperMeText: "助力我开启 BitKeep 数字盲盒吧",
        openSurpriseText: "开启获取惊喜数字资产",
        DownloadBitkeep: "下载 Bitkeep，瓜分盲盒中数字资产",
        savePicture: "保存图片",
        ShareLink: "分享链接",
        HelpOpenImmediatel: "立即助力开启盲盒",
        SuccessfullyHelpFriends: "成功助力好友",
        DownloadBitkeepAppNow: "立即下载 bitkeep",
        "CheckBoxToGetAssets": "查看盲盒获取惊喜数字资产",
        DownloadNow: "立即下载"
      }
    }
  },
  'CbkbExchange': {
    balance: 'Balance',
    get: 'You can get',
    swap: 'Swap',
    exchange: 'cBKB swap to BKB officially launching',
    exchangeTitle: 'cBKB is a credit point issued by BKB. cBKB is non-transferable and non-tradable. It is only used as a point voucher for redeeming BKB. cBKB is officially issued by BitKeep, and 100% can be exchanged for BKB.',
    exchangeTitleA: 'Users can get cBKB through ecological rewards, blind boxes, invitations, airdrops, etc. The swap channel has opened. Users can exchange into BKB by themselves.',
    exchangeTime: 'Swap Time',
    time: '2021-10-20 12:00 — 11-03 12:00 (GMT+8)',
    condition: 'Swap Rules',
    conditionText: 'Users must complete at least one Swap in BitKeep wallet ',
    proportion: 'Swap Ratio',
    proportionText: 'The conversion ratio of cBKB to BKB is 60:1',
    exchangeTitle2: 'BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    exchangeTitle3: 'Welcome to follow BitKeep channels for more updates on BKB airdrop.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: '1.Get discounts on BitSwap fees.',
    hold2: '2.Pay for BitKeep NFT Market service.',
    hold3: '3.Obtain the payment function of BitKeep Pools.',
    hold4: '4.Get the payment reduction and exemption function of BitKeep Pay.',
    hold5: '5.Obtain BitKeep Fin interest rate hike coupon rewards to support the entire product ecology.',
    hold6: '6.Get payment exemptions in the BitKeep business system.',
    hold7: '7.Obtain irregular airdrop rewards in BitKeep syrup pools.',
    hold8: '8.BKB StaKing rewards',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
    appreciationPool: 'Multiple staking pool',
    appreciationValut: 'Vault',
    more: 'More about BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: 'OK',
    swapTitle: 'cBKB Swap'
  },
  'airdrop': {
    get: 'You can get',
    receive: 'Receive',
    airdrop: 'BKB Airdrop',
    airdropContent: 'The total amount of BKB is 600 million, which is the ecological token of BitKeep ecology. Users holding BKB will enjoy ecological governance rights, and it is also an identity certificate for ecological payment methods and membership rights. ',
    time: 'Activity Time',
    timeContent: '2021.10.18 20:00 — 2021.10.28 00:00 (GMT+8)',
    particlpation: 'Conditions for Participation',
    particlpation1: 'From July 2020. 07. 01 to October 2021. 10 .01',
    particlpation2: 'Users who meet one of the following three requirements are eligible',
    particlpation3: 'A :  Transfer tokens via BitKeep at least twice are deemed Class A users;    ',
    particlpation4: 'B :  Those who have successfully used BKswap are deemed Class B users;',
    particlpation5: 'C：Users who deposit NFT assets on BitKeep are considered Class C users.',
    rules: 'Activity Rules',
    rules1: '1.Join BitKeep official telegram and discord community;',
    rules2: '2.During the airdrop event, users who meet the conditions of participation will be rewarded if they use BKSwap successfully;',
    rules3: '3.Class A qualified users will get 125 BKB for completing the above tasks, Class B qualified users will get 1,250 BKB for completing the above tasks, and Class C qualified users will get 250 BKB for completing the above tasks.',
    note: '* BitKeep has the final decision right and the right to interpret the rules of this promotion. We reserve the right to disqualify any users who cheat, suspected of cheating, or violate any of BitKeep\'s rules and regulations.',
    airdropTitle: 'Receive BKB airdrop',
    notStart: 'The airdrop activity has not yet started'
  },
  'mining': {
    loading: "Đang tải...",
    success: 'Làm mới thành công',
    pull: 'Làm mới',
    coundown: 'Đếm ngược',
    miningTitle: 'Phần thưởng giao dịch',
    comingsoon: 'Sắp tới',
    inProgress: 'Trong tiến trình',
    startCountdown: 'Bắt đầu đếm ngược',
    endCountdown: 'Kết thúc đếm ngược',
    rewardPool: 'Dữ liệu giao dịch',
    update: 'Cập nhật',
    will: 'Phân phối phần thưởng trong tuần này',
    activity: 'Kết thúc',
    Introduce: 'Giới thiệu',
    tradingVolume: 'Khối lượng giao dịch',
    tradingIn: 'Giao dịch hôm nay',
    userTodayValue: 'Khối lượng hôm nay',
    myRewards: 'Giải thưởng của tôi',
    totalTrading: 'Tổng khối lượng giao dịch',
    todyVolue: 'Giá trị ngày nay',
    totalRewards: 'Tổng giải thưởng',
    yesterdayRewards: 'Phần thưởng hôm nay',
    miningRuleTitle: 'Quy tắc sự kiện',
    miningRule: 'Dữ liệu được sử dụng để tính Phần thưởng giao dịch của BKB. Phần thưởng giao dịch được cung cấp bởi Ví BitKeep. Tổng quan về.…',
    learnMore: 'Tìm hiểu thêm',
    Introduce: 'Giới thiệu',
    day: 'Số tiền giao dịch của bạn một ngày',
    swapNow: 'Hoán đổi ngay',
    phase: 'Giai đoạn {v}',
    historyTitle: 'Môn lịch sử',
    tradeValue: 'Giá trị thương mại',
    tradeReward: 'Phần thưởng thương mại',
    tradeUser: 'Người dùng giao dịch',
    produced: 'BKB sản xuất',
    startTime: 'Bắt đầu',
    overTime: 'Kết thúc',
    notStart: 'Không bắt đầu',
    ruleTitle: 'Phần thưởng giao dịch BKSwap là gì?',
    ruleContent: 'Phần thưởng BKB mà người dùng nhận được khi họ hoàn thành giao dịch hoán đổi BKS. BitKeep sẽ thưởng cho người dùng giao dịch trên BKSwap theo quy tắc phân phối hợp đồng thông minh để khuyến khích người dùng thông qua BKB và tham gia vào các sự kiện liên quan. Đồng thời, chúng tôi sẽ mở rộng các kịch bản ứng dụng của BKB để phát triển hơn nữa hệ sinh thái ví blockchain trong kỷ nguyên Web3.0.',
    how: 'Làm thế nào để nhận được Phần thưởng giao dịch BKSwap?',
    how1: '1. Vui lòng tham khảo ',
    how11: ' để biết hướng dẫn về BKSwap mới nhất.',
    // how1: `<a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a> để biết hướng dẫn về BKSwap mới nhất.`,
    how2: '2. Nội quy của sự kiện:',
    howContent: 'Lời mời (Tổng giải thưởng: 30WBKB): Các sự kiện Phần thưởng giao dịch sẽ kéo dài trong 5 ngày. Phần thưởng lời mời sẽ được chia sẻ bởi tất cả người dùng có lời mời thành công. Phần thưởng được tính như sau:',
    howContent1: 'Đối với mỗi ngày, người dùng có thể nhận được: 15 * số người dùng được mời thành công + (tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả người dùng được mời) * X <br/> trong đó, chúng tôi coi là “GMV của tất cả người dùng được mời ”là Y',
    Objectives1: 'Nếu Y là ≥ 2 triệu và tương đương ≤ 5 triệu USDT, X = 10.000BKB',
    Objectives2: 'Nếu Y là ≥ 50 triệu và tương đương ≤ 20 triệu USDT, X = 20.000BKB',
    Objectives3: 'Nếu Y là ≥ 20 triệu và tương đương ≤ 30 triệu USDT, X = 20.000BKB',
    Objectives4: 'Nếu Y> 30 triệu USDT tương đương, X = 40.000BKB',
    howContent2: 'Phần thưởng giao dịch BKSwap được chia thành 3 cấp độ như sau:',
    Objectives11: ' Khi tổng số tiền giao dịch trên BKSwap trong một ngày nhất định là ≥ 5 triệu USDT và ≤ 10 triệu USDT tương đương, thì theo quy tắc hợp đồng, BitKeep sẽ cung cấp số tiền BKB bằng 300% phí giao dịch trong ngày như phần thưởng trong ngày. Tất cả người dùng tham gia giao dịch BKSwap trong ngày sẽ nhận được một phần tương xứng (tùy thuộc vào số tiền giao dịch của từng người dùng)',
    Objectives12: ' Khi tổng số tiền giao dịch trên BKSwap vào một ngày nhất định rơi vào khoảng từ 10 triệu đến 40 triệu USDT tương đương, thì theo các quy tắc hợp đồng, BitKeep sẽ cung cấp một số tiền BKB bằng 200% phí giao dịch trong ngày làm phần thưởng của ngày. Tất cả người dùng tham gia giao dịch BKSwap trong ngày sẽ nhận được một phần tương xứng',
    Objectives13: ' Nếu tổng số tiền giao dịch của BKSwap trong ngày lớn hơn 40 triệu USDT tương đương, theo quy định của hợp đồng, BKB sẽ được phát hành 100% phí giao dịch trong ngày làm tổng phần thưởng trong ngày và tất cả người dùng tham gia trong giao dịch trong ngày sẽ được chia theo tỷ lệ',
    how3: '3. Khoảng thời gian:',
    OverviewContent: 'Thời gian cho đợt thứ hai của sự kiện Phần thưởng giao dịch BKSwap: 15:00 ngày 20 tháng 12 năm 2021 - 23:00 ngày 25 tháng 12 năm 2021 (GMT + 8)',
    FQATitle: 'Câu hỏi thường gặp (FAQ)',
    FQATitle1: '1. Phần thưởng được phân phối khi nào?',
    FQAContent1: 'Phần thưởng giao dịch được tính theo thời gian thực và người dùng có thể kiểm tra bất kỳ lúc nào trên trang "Phần thưởng giao dịch". Người dùng sẽ nhận được phần thưởng giao dịch của ngày hôm trước vào lúc 00:00 (GMT + 8) hàng ngày. Ví dụ: Người dùng sẽ nhận được phần thưởng giao dịch vào ngày 21 tháng 12 năm 2021 vào ngày 20 tháng 12 năm 2021 lúc 00:00 (GMT + 8). Nó sẽ giống nhau cho mỗi ngày tiếp theo. Đối với phần thưởng cho ngày 25 tháng 12 năm 2021, người dùng sẽ nhận được chúng vào ngày 26 tháng 12 năm 2021 lúc 12:00 (GMT + 8) (chính xác một ngày sau khi sự kiện kết thúc).',
    FQATitle2: '2. Làm thế nào để kiểm tra phần thưởng giao dịch của bạn?',
    FQAContent2: 'Truy cập trang "Phần thưởng giao dịch" trong BitKeep để xem mọi thứ về lợi nhuận của bạn.',
    FQATitle3: '3. Làm thế nào để nhận phần thưởng giao dịch của bạn?',
    FQAContent3: 'Truy cập trang "Phần thưởng giao dịch" và nhấn vào nút "Yêu cầu" để nhận phần thưởng của bạn.',
    FQATitle4: '4. Làm thế nào để mời?',
    FQAContent4: 'Trong trang Phần thưởng giao dịch, chạm vào Mời bạn bè ngay bây giờ, sau đó sao chép liên kết lời mời hoặc chia sẻ áp phích lời mời. Bạn của bạn (người dùng mới) xác nhận bằng cách tải xuống và cài đặt ứng dụng BitKeep và điền vào địa chỉ ETH của anh ấy / cô ấy. Sau đó, anh ấy / cô ấy sẽ cố gắng thực hiện một giao dịch hợp lệ (với số tiền giao dịch thanh toán trước ≥100U) với BKSwap. Sau đó, bạn sẽ nhận được phần thưởng lời mời của mình.',
    // FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. Phần thưởng lời mời của tôi được tính như thế nào?',
    FQAContent5: 'Đối với mỗi ngày, người dùng có thể nhận được: 15 * số người dùng được mời thành công + (tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả người dùng được mời) * X; trong đó, chúng tôi coi “(tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả những người dùng được mời)” là Y',
    FQAContent51: 'Nếu Y là ≥ 2 triệu và tương đương ≤ 5 triệu USDT, X = 10.000BKB',
    FQAContent52: 'Nếu Y là ≥ 50 triệu và tương đương ≤ 20 triệu USDT, X = 20.000BKB',
    FQAContent53: 'Nếu Y là ≥ 20 triệu và tương đương ≤ 30 triệu USDT, X = 20.000BKB',
    FQAContent54: 'Nếu Y> 30 triệu USDT tương đương, X = 40.000BKB',
    FQAContentNote: 'Lưu ý: Lời mời chỉ được coi là hợp lệ nếu người dùng mới thực hiện một giao dịch hợp lệ (với số tiền giao dịch thanh toán trước ≥100U) với BKSwap',
    FQATitle6: '6. Phần thưởng lời mời được tính khi nào?',
    FQAContent6: 'Người dùng sẽ nhận được phần thưởng lời mời của họ cho ngày hôm trước vào lúc 00:00 (GMT+8) hàng ngày.',
    about: 'Về BKB',
    viewAll: 'Xem tất cả',
    pickUp: 'Đón',
    aboutContent1: 'Nắm giữ BKB sẽ được hưởng các quyền quản trị sinh thái, và đó cũng là bằng chứng nhận dạng của phương thức thanh toán sinh thái và quyền thành viên của BitKeep.',
    aboutContent2: 'BKB có thể được sử dụng trong các tình huống như mua nhiều tài nguyên chuỗi công khai, mở khóa chức năng VIP của ví và thanh toán phí quảng cáo BitKeep.',
    distribution: 'BKB phát hành và phân phối',
    total: 'BKB tổng cung:',
    mining: 'Khai thác hỗn hợp',
    community: 'Cộng đồng',
    tram: 'Đội ngũ và các nhà đầu tư ban đầu',
    partner: 'Bạn đồng hành',
    eco: 'Xây dựng hệ sinh thái',
    hold: 'Nắm giữ vốn chủ sở hữu BKB',
    hold1: 'Được hưởng quyền quản trị sinh thái',
    hold2: 'Phương thức thanh toán sinh thái',
    hold3: 'Quyền của thành viên và giấy chứng nhận danh tính',
    hold4: 'Mua tài nguyên chuỗi công khai',
    hold5: 'Mở khóa chức năng VIP của ví',
    hold6: 'Thanh toán phí quảng cáo',
    hold7: 'Tham gia BitKeep IWO',
    hold8: 'PCam kết tham gia vào kênh độc quyền của nội dung chất lượng cao',
    appreciation: 'Nâng cao giá trị BKB',
    appreciationSwap: 'Hoán đổi khấu trừ hoa hồng',
    appreciationCoin: 'Thanh toán',
    appreciationPool: 'Nhiều hồ bơi đặt cược',
    appreciationValut: 'Tiền tệ',
    more: 'Thông tin thêm về BKB',
    website: 'Trang web chính thức',
    paper: 'giấy trắng',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Trình khám phá khối',
    know: 'VÂNG',
    myTraded: 'Giá trị giao dịch của tôi',
    totalDistributed: 'Tổng số đã phân phối',
    yesterday: 'Hôm qua',
    claim: 'Yêu cầu',
    ClaimRewards: 'Yêu cầu phần thưởng',
    ClaimRewardsub: 'Phần thưởng sẽ được giải quyết vào lúc 12:00 tối nay',
    confirm: 'Xác nhận',
    noData: 'Không có dữ liệu',
    invitationReward: "Phần thưởng lời mời",
    totalBonusPool: "Tổng giải thưởng",
    todayBonusPool: "Tiền thưởng hôm nay",
    myTodayRewards: "phần thưởng hôm nay",
    tradingRewards: "Phần thưởng giao dịch",
    invitationRewards: "Phần thưởng lời mời",
    viewDetails: "Xem chi tiết",
    inviteFriendsNow: "mời bạn bè",
    ruleDetail: 'Lưu ý: Các giao dịch sau đây không được coi là đủ điều kiện để nhận phần thưởng giao dịch',
    ruleDetail1: `1. Hoán đổi chuỗi chéo, bao gồm: <br/> (1) hoán đổi cùng một đồng tiền trên các chuỗi khác nhau, ví dụ: Hoán đổi BSC-USDT sang ETH-USDT;<br/> (2) hoán đổi các đồng tiền khác nhau trên các chuỗi khác nhau, chẳng hạn như thông qua các kênh Swft hoặc hoán đổi BNB sang ETH.`,
    ruleDetail2: '2. Đốt coin giao dịch. Một số đồng tiền dựa trên cơ chế đốt và chúng có thể được yêu cầu đốt một phần bất cứ khi nào có giao dịch, điều này khiến việc đếm số tiền giao dịch chính xác sẽ khác. Do đó, những đồng tiền của luận án này không được tham gia sự kiện Phần thưởng giao dịch BKSwap này.',
    invitationReward: "Phần thưởng lời mời của tôi",
    inviteNumber1: 'Tổng số Phần thưởng cho lời mời',
    inviteNumber2: 'Phần thưởng mời hôm qua',
    inviteNumber3: 'Tổng số phần thưởng giao dịch mời',
    inviteNumber4: 'Phần thưởng hôm qua',
    invitationPool: 'Tiền thưởng lời mời',
    invitationPoolContent: 'Được sử dụng cho giai đoạn thứ hai của sự kiện mời và kiếm tiền'
  },
  'blindboxInvite': {
    inviteTitle: 'Mời bạn bè',
    myRewards: 'Giải thưởng của tôi',
    invitedNumber: 'Mời bạn bè',
    tokenRewards: 'Phần thưởng mã thông báo',
    NFTRewards: 'Phần thưởng NFT',
    boxRewards: 'Phần thưởng Hộp mù',
    inviteFriend: 'Mời bạn bè',
    inviteFriends: 'Mời bạn bè',
    inviteLink: 'Liên kết lời mời',
    inviteFriendsNow: 'Mời bạn bè của bạn ngay bây giờ',
    savePicture: 'Lưu hình ảnh',
    ShareLink: "Chia sẻ",
    inforce: 'Đã kích hoạt',
    inactivated: 'Không hoạt động',
    Address: 'Địa chỉ nhà',
    State: 'Trạng thái',
    Time: 'Thời gian',
    nomore: 'Không còn nữa',
    loading: 'Đang tải...',
    rewardTitle: 'Phần thưởng mã thông báo',
    RuleTitle: 'Nội quy mời',
    know: 'VÂNG',
    toEarn: 'Mời bạn bè để kiếm BKB',
    rewardsMore: 'Giao dịch bạn bè thưởng thêm BKB',
    Poster: 'Quét mã QR',
    downReward: 'TTải xuống ví BitKeep để kiếm phần thưởng',
    imgText: 'Xin chào bạn, đây là một Ví tiền điện tử để bạn kiếm được tài sản tiền điện tử',
    detailWallet: 'Một ví tiền điện tử không cần nỗ lực điều hướng',
    detailWallet1: 'Lưu trữ an toàn nội dung được mã hóa',
    detailWallet2: 'BKSwap thuận tiện và dễ sử dụng',
    detailWallet3: 'Hỗ trợ 721 NFT',
    detailWallet4: 'Hơn 7000 hệ sinh thái DApps',
    yourFrinedInvite: 'Bạn bè của bạn mời bạn sử dụng ví đa chuỗi BitKeep',
    friendsText: 'Giao dịch với BitKeep để kiếm BKB',
    detailInput: 'Hãy nhập địa chỉ của ETH',
    detailBtn: 'Chấp nhận lời mời',
    detailJust: 'Chưa có địa chỉ ETH? Chỉ cần tải xuống ứng dụng BitKeep và tạo ví',
    detailWhy: 'Tại sao chọn ví BitKeep?',
    detailContro: 'Kiểm soát tài sản kỹ thuật số của bạn',
    detailUl1: 'Một nơi lưu trữ an toàn cho các mã thông báo và NFT của bạn',
    detailUl2: 'BitKeep hỗ trợ hơn 30 chuỗi chính, 200.000+ mã thông báo và hơn 7000 DApps',
    detailUl3: 'mở ra thế giới DeFi cho người dùng của chúng tôi',
    detailCrypto: 'Tất cả các tài sản tiền điện tử có thể được giao dịch với BKSwap',
    detailAny: 'Dễ dàng hoán đổi và giao dịch tiền điện tử đa chuỗi bất kỳ lúc nào',
    detailAggregate: 'Tổng hợp hơn 30 DEX chính như Uniswap, Sushiswap, PancakeSwap, v.v.',
    detailNFT: 'Lưu trữ NFT của bạn',
    detailNFTCon: 'BitKeep cung cấp các dịch vụ quản lý tài sản tiền điện tử an toàn và đáng tin cậy cho hàng triệu người dùng trên hơn 168 quốc gia và khu vực',
    downText: 'Xin chúc mừng, bạn đã chấp nhận lời mời thành công! Sử dụng ví BitKeep ngay bây giờ để tận hưởng phong cách sống blockchain của bạn',
    foot1: 'BitKeep cung cấp dịch vụ trên toàn thế giới',
    foot2: 'Nó đã cung cấp dịch vụ quản lý tài sản tiền điện tử an toàn và đáng tin cậy cho hàng triệu người dùng ở hơn 168 quốc gia trên thế giới',
    foot3: 'Số lượng người dùng',
    foot4: 'Số tiền giao dịch',
    foot5: 'Bao gồm các quốc gia và khu vực',
    inviteRuleTitle: 'Điều gì làm cho một lời mời hợp lệ Bạn của bạn (người dùng mới) xác nhận?',
    ruleDetail: 'Người dùng nhập địa chỉ ví của mình hoặc địa chỉ đã được nhập hoặc tạo ví BitKeep',
    ruleDetail1: 'Địa chỉ được tạo trong vòng 24 giờ',
    ruleDetail2: 'Khối lượng giao dịch của người dùng trên BKSwap lớn hơn hoặc bằng 10 USDT',
    myInviteRuleTitle: 'Phần thưởng lời mời của tôi được tính như thế nào?',
    myRuleDetail: 'Đối với mỗi ngày, người dùng có thể nhận được: 15 * số người dùng được mời thành công + (tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả người dùng được mời) * X; trong đó, chúng tôi coi “(tổng khối lượng giao dịch của tất cả những người được mời / GMV của tất cả những người dùng được mời)” là Y',
    myRuleDetail1: 'Nếu Y là ≥ 2 triệu và tương đương ≤ 5 triệu USDT, X = 10.000BKB',
    myRuleDetail2: 'Nếu Y là ≥ 50 triệu và tương đương ≤ 20 triệu USDT, X = 20.000BKB',
    myRuleDetail3: 'Nếu Y là ≥ 20 triệu và tương đương ≤ 30 triệu USDT, X = 20.000BKB',
    myRuleDetail4: 'Nếu Y> 30 triệu USDT tương đương, X = 40.000BKB',
    myRuleDetail5: 'Lưu ý: Lời mời chỉ được coi là hợp lệ nếu người dùng mới thực hiện một giao dịch hợp lệ (với số tiền giao dịch thanh toán trước ≥100U) với BKSwap',
    toast2: 'Xin lỗi, địa chỉ này đã được mời',
    toast0: 'Xin lỗi, địa chỉ này đã đạt đến giới hạn mời tối đa',
    emptyToast: 'Trường địa chỉ không được để trống'
  },
  'staking': {
    stakingTitle: 'BKB đặt cược',
    AddPoolTitle: 'Thêm nhóm',
    MyPoolsTitle: 'Hồ bơi của tôi',
    stakingImg: 'Đặt cọc BKB Kiếm BKB',
    Introduce: 'Giới thiệu',
    content: 'BitKeep đã ra mắt BKB Staking để cung cấp cho người dùng cơ hội kiếm tiền. Những người nắm giữ BKB đặt cược vào BKB đang nhận được lợi nhuận từ nhóm BKB mỗi tuần. Sẽ có nhiều dự án khác có thể truy cập trong tương lai, cho phép bạn kiếm được nhiều tiền hơn. Khi đặt cược vào BKB của mình, bạn có thể chọn từ 4 nhóm đặt cược khác nhau với thời gian đáo hạn là 7 ngày, 30 ngày, 60 ngày và 90 ngày. Bạn sẽ được hưởng APY lần lượt là 20%, 30%, 40%, 50%. Lợi nhuận của bạn sẽ được tính toán và phân phối vào Cloud Wallet của bạn khi đáo hạn.',
    Data: 'Dữ liệu',
    StakedBKB: 'Đặt cọc BKB',
    totalSupply: 'BKB Tổng cung',
    EndsIn: 'Kết thúc ở',
    APY: 'APY',
    YourStakeAmount: 'Số tiền đặt cọc của bạn',
    Duration: 'Thời gian (Ngày)',
    StakeNow: 'Đặt cọc ngay bây giờ',
    SoldOut: 'Bán hết',
    ComingSoon: 'Sắp có',
    EthereumChainPool: 'Nhóm chuỗi Ethereum',
    BSCChainPool: 'Nhóm BSC chuỗi',
    StakeAmount: 'Số tiền đặt cọc',
    Available: 'Có sẵn',
    MAX: 'ĐA',
    StakeAmountLimiation: 'Giới hạn số tiền đặt cọc',
    Minimum: 'Tối thiểu',
    Maximum: 'Tối đa',
    Summary: 'Bản tóm tắt',
    StakeDate: 'Ngày đặt cọc',
    ValueDate: 'Ngày giá trị',
    InterestPeriod: 'Thời gian tính lãi',
    InterestEndDate: 'Ngày kết thúc lãi suất',
    RedemptionDate: 'Ngày cứu chuộc',
    EstimatedInterests: 'Tiền lãi ước tính',
    Staking: 'Đánh đập',
    Activity: 'Hoạt động',
    BeExpired: 'Đã hết hạn',
    Pledge: 'Lời hứa',
    Durations: 'Khoảng thời gian',
    PledgeDueDate: 'Ngày đến hạn cầm cố',
    CurrencyReward: 'Phần thưởng tiền tệ',
    Remove: 'Tẩy',
    Unstake: 'Không bắt đầu',
    Reward: 'Giải thưởng',
    Operate: 'Vận hành',
    Add: 'cộng',
    RemovePool: 'Xóa nhóm',
    getBKB: 'Xin chúc mừng！ Bạn nhận được',
    removeBefore: 'Nếu bạn xóa trước khi sự kiện kết thúc <br/> bạn sẽ mất tất cả các Sở thích. <br/> Bạn có chắc chắn xóa không？',
    Interests: 'Sở thích',
    Cancel: 'Hủy bỏ',
    Confirm: 'Xác nhận',
    Days: 'Ngày',
    authorization: 'Bạn đã hủy ủy quyền chữ ký!',
    stakeAmount: 'Số tiền đặt cược tham gia',
    know: 'VÂNG'
  },
  'trading': {
    tradingTitle: 'Phần thưởng giao dịch',
    know: 'VÂNG',
    ComingSoon: 'Sắp có',
    swapNow: 'Hoán đổi ngay',
    claim: 'Yêu cầu',
    tradingRule: 'Quy tắc giao dịch',
    learnMore: 'Tìm hiểu thêm',
    finished: 'Hoàn thành',
    Live: 'trực tiếp',
    Upcoming: 'Sắp tới',
    Past: 'Quá khứ',
    UnclaimedReward: 'Phần thưởng không có người nhận',
    Chain: 'Chuỗi thông minh Bianance',
    Ending: 'Hoàn thành',
    Start: 'Thời gian bắt đầu',
    Time: 'Thời gian',
    Reward: 'Giải thưởng',
    historyData: 'Môn lịch sử',
    ruleContentTitle: 'Hoàn thành giao dịch hoán đổi giữa các mã thông báo được chỉ định để nhận phần thưởng BKB theo tỷ lệ (tính theo phần trăm phí giao dịch).',
    YourTradingValue: 'Giá trị giao dịch của bạn',
    TodayTradingValue: 'Giá trị giao dịch hôm nay',
    TodayTradingReward: 'Phần thưởng giao dịch hôm nay',
    YourTradingReward: 'Phần thưởng giao dịch của bạn',
    transaction: 'Tổng số tiền giao dịch',
    GetsBKB: 'Nhận số BKB',
    in: 'trong',
    make: 'Thực hiện một giao dịch',
    toGet: 'để lấy BKB',
    noticeBar: 'Sự kiện này sẽ không được hiểu là một lời khuyên đầu tư',
    ruleTitle: 'Quy tắc giao dịch',
    ruleContent: '1. Người dùng có thể truy cập trang Chi tiết hoặc trang Thị trường của một trong hai mã thông báo được chỉ định để vào trang Phần thưởng giao dịch; <br/> 2. Mọi hoán đổi đến / đi giữa hai mã thông báo được chỉ định sẽ được coi là hợp lệ; <br/> 3. Phần thưởng của một ngày nhất định sẽ được tính vào 00:00 (GMT + 8) ngày hôm sau, sau đó người dùng có thể nhận phần thưởng của họ; <br/> 4. Sự kiện này sẽ không được hiểu là một lời khuyên đầu tư',
    how: 'Làm thế nào để tham gia sự kiện Phần thưởng Giao dịch BKSwap?',
    how1: '1. Vui lòng xem:',
    how11: ' Để có hướng dẫn về BKSwap mới nhất.',
    how2: '2. Quy tắc:',
    howContent: 'Người dùng thực hiện giao dịch giữa một cặp mã thông báo cụ thể với BKSwap sẽ được thưởng',
    howContent1: 'Thông tin chi tiết:',
    Objectives1: 'Trong mỗi sự kiện, người dùng thực hiện giao dịch giữa một cặp mã thông báo cụ thể với BKSwap. Sau đó, một lượng BKB sẽ được tính theo tỷ lệ phần trăm của phí giao dịch trong ngày và được phân phối. Tất cả người dùng tham gia sự kiện trong ngày sẽ được thưởng theo tỷ lệ.',
    how3: '3. Phần thưởng giao dịch được tính như thế nào?',
    OverviewContent: 'Phần thưởng giao dịch được tính theo thời gian thực và người dùng có thể kiểm tra bất kỳ lúc nào trên trang "Phần thưởng giao dịch". Chu kỳ giải quyết của sự kiện là 24 giờ. Người dùng sẽ nhận được phần thưởng giao dịch của ngày hôm trước vào lúc 00:00 (GMT + 8) hàng ngày.',
    how4: '4. Làm thế nào để kiểm tra phần thưởng giao dịch của bạn?',
    OverviewContent4: 'Truy cập trang "Phần thưởng giao dịch" trong BitKeep để xem mọi thứ về lợi nhuận của bạn.',
    how5: '5. Làm thế nào để nhận phần thưởng giao dịch của bạn?',
    OverviewContent5: 'Truy cập trang "Phần thưởng giao dịch" và nhấn vào nút "Yêu cầu" để nhận phần thưởng của bạn.',
    popTit: 'Cảnh báo rủi ro',
    tit1: 'Các sự kiện Phần thưởng giao dịch chỉ để thưởng cho người hâm mộ của chúng tôi. Chúng có thể không được coi là lời khuyên đầu tư.',
    tit2: 'Nhắc nhở: Giá của tài sản kỹ thuật số biến động rất nhiều. Người dùng nên hiểu đầy đủ và chấp nhận những rủi ro của việc đầu tư tài sản kỹ thuật số trước khi đầu tư.',
    btn: 'Tôi hiểu rồi'
  },
  'noviceBenefits': {
    'sign': 'Ký vô và thu vé số',
    'alreadySignedin': 'Ký tên',
    'alreadySignedin1': 'Ký tên',
    'day': 'ngày',
    'Signedin': 'Ký vô.',
    'obtain': 'lấy',
    'alreadyReceived': 'Nhận',
    'receive': 'Nhận',
    'Currently': 'Hiện có giấy xổ số',
    'zhang': 'Trương!',
    'Participate': 'Hãy tham dự một trận đấu may mắn để chiến thắng.',
    'Draw': 'Vẽ ngay',
    'Novice': 'Chiến dịch mới',
    'Telegram': 'Vinh quang điện tín',
    'Reward': 'Phần BKB + 1',
    'Join': 'Vào đi',
    'swap': 'Giải trao đổi',
    'raffle': "Phần thưởng BKB'2', vé xổ số'2+2",
    'USDT': 'Tiền thưởng Đại đòn bẩy',
    'Immediate': 'Giao dịch ngay',
    'standard': 'Chưa đạt chuẩn',
    'Getitnow': 'Lấy ngay đi.',
    'Viewnow': 'Xem ngay',
    'Airdropactivity': 'Hành động hàng không',
    'Access': 'ó cơ hội đạt được nhiều hiệu vật',
    'Blindboxactivity': 'Hoạt động hộp đen',
    'AccessNFT': 'Có cơ hội đạt được nhiều hiệu và NFS',
    'Invitation': 'Phần thưởng',
    'Invitefriends': 'Mời bạn bè chiến thắng trăm hồng hào',
    'Winaraffle': 'hắng một vòng quay.',
    'rafflepapers': 'Tổng số giấy xổ số ngày hôm đó',
    'merafflepapers': 'Số giấy tờ xổ số tôi đã đưa hôm đó',
    'raffletickets': 'Số điểm xổ số được đầu tư',
    'available': 'Số điểm xổ số sẵn sàng',
    'Pleaseenter': 'Xin hãy nhập số vé xổ số',
    'usersyesterday': 'Người dùng thắng hôm qua',
    'Activityrules': 'Luật hành động',
    'Dailyreward': 'Phần thưởng mỗi ngày của BKB chỉ được chia bởi một người dùng',
    'morelottery': 'Càng nhiều bài xổ số, tỉ lệ thắng giải càng cao.',
    'luckydraw': 'Bài rút may mắn có thể lấy được bằng việc hoàn thành phần thưởng mới, ký hợp đồng và mời bạn bè.',
    'notes': 'Bitkeepen có quyền ra quyết định cuối cùng và giải thích nguyên tắc của việc thăng chức này. Chúng tôi có quyền loại trừ bất kỳ người dùng nào gian lận, bị tình nghi lừa dối hay vi phạm các quy tắc và quy định luật luật luật luật luật luật luật luật luật luật luật của luật cắn.',
    'Immediateinput': 'Nhập nhanh',
    'WelfareCenter': 'Trung tâm Phúc lợi',
    'Dailyluckydraw': 'Vận may hàng ngày',
    'Lotteryresults': 'Kết quả xổ số',
    'participationperiods': 'Số lần tham gia',
    'ticketsinvested': 'Số vé số được đầu tư',
    'obtainBKB': 'Lấy số của BKB',
    'investment': 'đầu',
    'araffleticket': 'Vé xổ số',
    'Failedto': 'Thắng giải thua',
    'Congratulations': 'Chúc mừng đã thắng giải!',
    'Morebenefits': 'Thêm lợi ích',
    'signSuccess': 'Kiểm tra thành công',
    'signError': 'Lỗi kiểm tra',
    'receiveSuccess': 'Đã nhận',
    'receiveError': 'Tập hợp bị lỗi',
    '50u': 'Tài sản lớn hơn 50u có thể được yêu cầu sau 24 giờ giữ',
    'Cumulative': 'Ký vô đó bốn ngày tổng cộng, và bạn có thể có một giấy vẽ may mắn trong vòng bảy ngày.',
    'Tips': 'quy tắc đăng ký',
    'Whatisaraffleticket': "Vé xổ số là gì?",
    'Usethelotteryticket': 'Sử dụng vé số để đến trang xổ số để rút thưởng BKB.',
    'Investedmore': 'Đã đầu tư nhiều phiếu giảm giá hơn so với phiếu giảm giá có sẵn',
    'Investinsuccess': 'Đầu tư để thành công',
    'Failedtoputin': 'Không đưa vào được',
    'Tobewon': 'Được rút ra',
    'congratulations': 'Xin chúc mừng',
    'winningthelottery': ' Trúng xổ số',
    'Cloudwallet': 'Ví điện toán đám mây chưa được tạo',
    'incompatible': 'không tương thích'
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {
  base: {
    loading: "加载中",
    success: '刷新成功',
    no_more: "没有更多了",
    networkErro: "网络开了小差",
    copied: 'Copied',
    copiedError: 'Some error occurred',
    nomore: 'No more'
  },
  "ActivityBlindbox": {
    shared: {
      content: "I'm opening blind free boxes, come and help me~"
    },
    dialog: {
      "isCreateWalletComfirm": "Cloud wallet does not exist. Do you want to create it now?",
      helperSuccess: "Contribute to success",
      "getBlindbox": "Congratulations on getting the BitKeep digital blind box",
      "openBlindbox": "Open to get surprise digital assets",
      "lookBlindbox": "View digital blind box"
    },
    toast: {
      open: "Opening...",
      loading: "Loading...",
      Saving: "Saving...",
      inputETH: "Please enter eth address",
      Generating: "Generating...",
      ContributeSuccess: "Contribute to success"
    },
    statusText: ["恭喜获得BitKeep数字盲盒", "开启获得惊喜数字资产", "查看数字盲盒"],
    button: {
      "OpenimmediatelyText": "Open the blind box immediately",
      "InviteFriendsNow": "Invite my friends now",
      "OpenFriendsImmediately": "Help open the blind box",
      "ViewAssets": "View assets",
      "SuccessView": "Success! Please view assets",
      //
      // "OpenimmediatelyText": "Open the blind box immediately"
      "savePicture": "Save Picture",
      //
      "ShareLink": "Share Link",
      //
      "Downloadnow": "Download now"
    },
    stepDetail: [{
      title: 'Step 1 <br/>Open your Cloud Wallet',
      content: 'Download BitKeep App. In BitKeep app, tap the Nav-bar in the upper right corner, click “Cloud Wallet” to enter the cloud wallet page.',
      img: 'http://cdn.bitkeep.vip/u_b_f11e6760-599a-11ec-bdbc-7722494dfa58.jpeg'
    }, {
      title: 'Step 2 <br/>Activate your Cloud Wallet',
      content: 'Enter the password as prompted to activate the cloud wallet,Tap BKB to go to BKB page.',
      img: 'http://cdn.bitkeep.vip/u_b_f12174a0-599a-11ec-bdbc-7722494dfa58.jpeg'
    }, {
      title: 'Step 3 <br/>Copy your Cloud Wallet address',
      content: 'Tap Deposit to go to transfer page, and choose “Copy Address”,go back to the contribution page and fill in yourBitKeep Cloud Wallet address, then tap Contribute Now.',
      img: 'http://cdn.bitkeep.vip/u_b_f11f03a0-599a-11ec-bdbc-7722494dfa58.jpeg'
    }],
    title: {
      "myBlindboxText": "My blind box"
    },
    ActivityBlindboxList: {
      "myBlindboxText": "My blind box",
      "RaidersText": "Raiders",
      "DigitalBlindBoxText": "Digital blind box",
      "blindBoxNumText": "{surplus} done <span class='color_red'>{invite}</span> to go",
      "blindBoxSurpriseText": "",
      "ValidUntilText": "Valid until",
      "inviteFirends": 'Invited',
      "HelpFirends": 'Be helped',
      "friendList": 'Friends List',
      "inviteContent": `{helper} have been assisted `,
      "GoOpenText": "Go open",
      "GoShareText": "Go share",
      "TurnedOnText": "Turned on",
      "SuccessfullyOpenedText": "Opened",
      "expiredText": "expired",
      "ShareWithMe": "By invitation",
      "noHelper": "No friends have been helped",
      "noInvite": "No friends have been invited",
      willOpened: "To be opened",
      noData: {
        title: "No blind box",
        content: "It is said that Using BitSwap or cross-chain swap sucessfully will get a chance to receive blind box and get digital assets"
      },
      end: {
        title: "No blind box",
        subtitle: "please stay tuned for next event",
        content: `Follow @BitKeepOS to learn more details`
      }
    },
    ActivityBlindboxDetail: {
      "blindBoxNumText": "{surplus} done <span class='color_red font-20'>{invite}</span> to go",
      "inputAddressPlaceholader": "Entry BitKeep Cloud Wallet adress",
      "NoAddressDownload": "Tap here to create <br/>👉   your BitKeep Cloud Wallet 👈",
      "HelpSuccessETH": "BitKeep Cloud Wallet adress",
      "InviteSuccessETH": "The ETH address has been invited",
      "FinalInterpretation": "BitKeep owns the final interpretation right of this event.",
      "invalidTimeText": "Distance blind box failure",
      "successfullyTimeText": "The blind box has been opened successfully!",
      expiredTimeText: "It's a pity that this blind box has expired",
      "ScanBlindBox": "Scan and receive digital blind box",
      DownloadBitkeep: "Download Bitkeep to share the digital assets in the blind box",
      "BitKeepTitleText": "BitKeep数字盲盒",
      "OpenTitleText": "开启获得惊喜数字资产",
      "InviteFriendsText": "邀请好友助力开启盲盒",
      "GetSurpriseAssetsText": "获得惊喜数字资产",
      "stillShort": "距离开启盲盒仅差3/5人助力",
      "InviteFriendsNowText": "立即邀请好友助力",
      "SuccessfullyAssistedText": "已成功助力 ETH 地址",
      "OpenStrategyText": "开启盲盒攻略",
      "shareLinkText": "分享海拔或链接给好友",
      "ClickConentSharedText": "点击「立即邀请好友助力」将海报或者链接分享给好友",
      "FriendsFillValidTitleText": "好友填写有效ETH地址助力",
      "FriendsHelpeSuccessText": "好友进入链接并输入有效的ETH地址助力成功",
      "CanopenBlindBoxText": "凑齐足够助力好友助力后开启盲盒",
      "OpenTheBlindBoxText": "当足够数量的好友助力成功后，您可以点击开启盲盒",
      "shareWidthFriendsText": '您和好友瓜分盲盒内数字资产',
      "CanViewAssetsTocloudWallet": "盲盒开启后您和助力好友均可在 BitKeep 云钱包中查看获得的数字资产",
      rules: ["Each blind box contains a random number of BKB", `Share this link to invite your friends, and ask them to fill in valid BitKeep Cloud Wallet address (Click the link to create a BitKeep Cloud Wallet <a href='https://bit.ly/BitKeepCloudWallet' class='color_red'>https://bit.ly/BitKeepCloudWallet</a> )`, "With five friends manage to make contribution, the blind box will unlock, and you and your friends will get a share of the BKB inside.", "These BKB will be deposited in your Cloud Wallet. If you have’t activated your Cloud Wallet, please tap Cloud Wallet in the NAV bar to activate it."],
      modal: {
        sharedHelperMeText: "助力我开启 BitKeep 数字盲盒吧",
        openSurpriseText: "开启获取惊喜数字资产",
        DownloadBitkeep: "下载 Bitkeep，瓜分盲盒中数字资产",
        savePicture: "保存图片",
        ShareLink: "分享链接",
        HelpOpenImmediatel: "立即助力开启盲盒",
        SuccessfullyHelpFriends: "成功助力好友",
        DownloadBitkeepAppNow: "立即下载 bitkeep",
        "CheckBoxToGetAssets": "查看盲盒获取惊喜数字资产",
        DownloadNow: "立即下载"
      }
    }
  },
  'CbkbExchange': {
    balance: '余额',
    get: '你可以兑换',
    swap: '兑换',
    exchange: 'cBKB 兑换 BKB 正式开启',
    exchangeTitle: 'cBKB 是基于 BKB 发行的积分凭证，cBKB 不可转账和不可交易，仅作为兑换 BKB 的积分凭证。cBKB 为 BitKeep官方发行，且百分之百可以兑换为 BKB。',
    exchangeTitleA: '针对用户前期通过生态奖励、盲盒、邀约、空投等形式获取到的 cBKB 现已开启兑换通道。用户可以自行兑换成  BKB。',
    exchangeTime: '兑换时间',
    time: '2021-10-20 12:00 — 11-03 12:00 (GMT+8)',
    condition: '兑换条件',
    conditionText: '用户必须用 BitKeep 钱包完成至少一次 Swap 操作，才能进行兑换。',
    proportion: '兑换比例',
    proportionText: 'cBKB 与 BKB 兑换比例为 60 : 1',
    exchangeTitle2: '* BitKeep 享有本次兑换活动规则的最终决定权和解释权。我们保留取消任何作弊、疑似作弊或违反 BitKeep 任何规章制度的用户参与资格的权利。',
    exchangeTitle3: '了解更多 BKB 的空投活动及进展，欢迎⼤家可以及时关注 BitKeep 社区公告。',
    about: '关于 BKB',
    viewAll: '查看全部',
    pickUp: '收起',
    aboutContent1: '持有 BKB 将享有生态治理权益，同时也是 BitKeep 生态支付手段和会员权益的身份证明。',
    aboutContent2: 'BKB 可用于多条公链资源购买、钱包 VIP 功能解锁、BitKeep 广告费用支付等场景。',
    distribution: 'BKB 发行及分配情况',
    total: 'BKB 总供应量：',
    mining: '复合性挖矿',
    community: '社区',
    tram: '团队及早期投资人',
    partner: '合作伙伴',
    eco: '生态建设',
    hold: '持有 BKB 权益',
    hold1: '1.获取 BitSwap 手续费折扣。',
    hold2: '2.支付 BitKeep NFT Market 服务。',
    hold3: '3.获取 BitKeep Pools 付费功能。',
    hold4: '4.获取 BitKeep Pay 支付减免功能。',
    hold5: '5.获取 BitKeep Fin 加息券奖励，用以支持整个产品生态。',
    hold6: '6.获取 BitKeep 商务体系中的支付减免。',
    hold7: '7.获取 BitKeep syrup pools 中的不定期空投奖励。',
    hold8: '8.BKB StaKing 奖励',
    appreciation: 'BKB 价值提升',
    appreciationSwap: 'Swap 手续费抵扣',
    appreciationCoin: '支付货币',
    appreciationPool: '多重质押池 ',
    appreciationValut: '机枪池',
    more: '更多关于 BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: '知道了',
    swapTitle: 'cBKB 兑换'
  },
  'airdrop': {
    get: '你可领取',
    receive: '领取',
    airdrop: 'BKB 空投活动',
    airdropContent: 'BKB 总量 6 亿枚，是 BitKeep 生态的生态令牌，用户持有 BKB 将享有生态治理权益，也是生态支付手段和会员权益的身份证明。',
    time: '活动时间',
    timeContent: '2021.10.18 20:00 — 2021.10.28 00:00 (GMT+8)',
    particlpation: '领取条件',
    particlpation1: '从 2020.07.01 到 2021.10.01',
    particlpation2: '以下三个条件满足其一即视为合格用户，可获得空投参与资格。',
    particlpation3: 'A: 使用 BitKeep 两次及两次以上并均转账成功，视为 A 类合格用户；',
    particlpation4: 'B: 使用 BKswap 并交易成功，视为 B 类合格用户；',
    particlpation5: 'C: 在 BitKeep NFT 板块成功存入 NFT 资产，视为 C 类合格用户。',
    rules: '活动规则',
    rules1: '1.加⼊到 BitKeep 官方 telegram 社群(https://t.me/bitkeep)和 discord 社群(https://discord.com/invite/qYTatUzNjM);',
    rules2: '2.在空投活动期间，满足参与条件的用户使用 BKSwap 一次及一次以上并交易成功，即获得空投奖励；',
    rules3: '3.A 类合格用户完成上述任务将获得 125个 BKB、B 类合格用户完成上述任务将获得 1250个 BKB、C 类合格用户完成上述任务将获得 250个 BKB。',
    note: '* BitKeep 享有本次推广活动规则的最终决定权和解释权。我们保留取消任何作弊、疑似作弊或违反 BitKeep 任何规章制度的用户参与资格的权利。 ',
    airdropTitle: '领取 BKB 空投',
    notStart: '空投活动还未开始'
  },
  'mining': {
    loading: "loading...",
    success: 'Successfully',
    pull: 'Loose to refresh...',
    miningTitle: 'Trading Reward',
    coundown: 'Countdown',
    comingsoon: 'Upcoming',
    inProgress: 'Live',
    startCountdown: 'Start countdown ',
    endCountdown: 'End countdown ',
    rewardPool: 'Trading Data',
    update: 'Update',
    will: 'Reward distribution within this week',
    tradingVolume: 'Trading Volume',
    tradingIn: 'Trading in today',
    userTodayValue: 'Today Trade Volume',
    myRewards: 'My Rewards',
    totalTrading: 'Total Trade Volume',
    activity: 'End',
    Introduce: 'Introduce',
    todyVolue: 'Today Volue',
    totalRewards: 'Total Rewards',
    yesterdayRewards: 'Today Rewards',
    miningRuleTitle: 'Event Rules',
    miningRule: 'Data used to calculate Trading Rewards of BKB. Trading Rewards are provided by the BitKeep Wallet.Overview of the.…',
    learnMore: 'Learn more',
    swapNow: 'Swap Now',
    phase: 'Phase {v}',
    historyTitle: 'History',
    startTime: 'Start',
    overTime: 'End',
    tradeValue: 'Trade Value',
    tradeReward: 'Trade Reward',
    tradeUser: 'Trade User',
    produced: 'BKB produced',
    notStart: 'Not Start',
    ruleTitle: 'What is BKSwap Trading Reward?',
    ruleContent: 'The BKB reward users obtain when they finish a BKSwap transaction. BitKeep will reward users who trade on BKSwap according to the smart contract distribution rules to encourage users to adopt BKB and participate in related events. At the same time, we will extend the application scenarios of BKB to further develop the blockchain wallet ecosystem in the Web3.0 era.',
    how: 'How to get BKSwap Trading Reward?',
    how1: '1. Please refer to',
    how11: ' for the latest BKSwap tutorial.',
    // how1: `1. Please refer to <a href='https://www.youtube.com/watch?v=_5expUiioV8' style="color: #495BFF">https://www.youtube.com</a> for the latest BKSwap tutorial.`,
    how2: '2. Rules of the event:',
    howContent: 'Invitation (Prize pool: 30WBKB): The Trading Reward events will last for 5 days. The invitation reward pool will be shared by all users with successful invitations. The rewards are calculated as follows:',
    howContent1: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X<br/>in which, we consider “GMV of all invited users” as Y',
    Objectives1: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    Objectives2: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    Objectives3: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    Objectives4: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    howContent2: 'BKSwap transaction rewards are divided into 3 levels, as follows:',
    Objectives11: ' When the total transaction amount on BKSwap on a given day is ≥ 5 million USDT equivalent and ≤ 10 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 300% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share (depending on each individual user’s transaction amount)',
    Objectives12: ' When the total transaction amount on BKSwap on a given day falls between 10 million and 40 million USDT equivalent, then according to the contract rules, BitKeep will provide a sum of BKB equal to 200% of the transaction fee of the day as the reward of the day. All users participated in BKSwap transactions on the day will get a proportionate share',
    Objectives13: ' If the total transaction amount of BKSwap on the day is greater than 40 million USDT equivalent, according to the contract rules, BKB will be released at 100% of the transaction fee of the day as the total reward of the day, and all users participating in the transaction on the day will be divided proportionally',
    how3: '3. Duration:',
    OverviewContent: 'The duration for the second round of BKSwap Trading Reward event: Dec. 20, 2021 at 15:00-Dec. 25 at 23:00 (GMT+8)',
    // how4: '4. How are the trading rewards calculated?',
    // how4Content: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. The settlement cycle of the event is 24 hours. Users will receive their trading rewards for the previous day at 12:00 PM (GMT+8) every day. For example: Users will receive trading rewards for Nov. 29, 2021 on Nov. 30, 2021 at 12:00 (PM). It will be the same for each following day. For the rewards for Dec. 3, 2021, users will receive them on Doc. 4, 2021 at 12:00 (PM) (exactly one day after the event ends)',
    // how5: '5. How to check your trading rewards?',
    // how5Content: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    // how6: '6. How to claim your trading rewards?',
    // how6Content: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    FQATitle: 'Frequently Asked Questions (FAQ)',
    FQATitle1: '1. When are the rewards distributed?',
    FQAContent1: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. Users will receive their trading rewards for the previous day at 00:00 (GMT+8) every day. For example: Users will receive trading rewards for Dec. 21, 2021 on Dec. 20, 2021 at 00:00(GMT+8). It will be the same for each following day. For the rewards for Dec. 25, 2021, users will receive them on Dec. 26, 2021 at 12:00(GMT+8) (exactly one day after the event ends).',
    FQATitle2: '2. How to check your trading rewards?',
    FQAContent2: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    FQATitle3: '3. How to claim your trading rewards?',
    FQAContent3: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    FQATitle4: '4. How to invite?',
    FQAContent4: 'In the Trading Reward page, tap Invite friend now, and then copy the invitation link or share the invitation poster. Your friend (new user) confirms by downloading and installing the BitKeep app and filling in his/her ETH address. Then he/she will try to make a valid transaction (with a pre-settlement trading amount of ≥100U) with BKSwap. After that, you will get your invitation rewards.',
    FQAContent41: 'You can also transfer your BKB from your「Cloud Wallet」 to a ETH/BSC address. For more how-to information about BitKeep Cloud Wallet, please tap the link: https://bitkeepblog.medium.com/?p=79771d2baedb',
    FQATitle5: '5. How is my invitation rewards calculated?',
    FQAContent5: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X; in which, we consider “(sum of the transaction volume of all his/her invitees/GMV of all invited users)” as Y',
    FQAContent51: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    FQAContent52: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    FQAContent53: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    FQAContent54: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    FQAContentNote: 'Note: An invitation will be considered valid only if the new user make a valid transaction(with a pre-settlement trading amount of ≥100U) with BKSwap',
    FQATitle6: '6. When are the invitation rewards calculated?',
    FQAContent6: 'Users will receive their invitation rewards for the previous day at 00:00 (GMT+8) every day.',
    about: 'About BKB',
    viewAll: 'View All',
    pickUp: 'Pick up',
    aboutContent1: 'Holding BKB will enjoy ecological governance rights, and it is also the identity proof of BitKeep\'s ecological payment method and membership rights.',
    aboutContent2: 'BKB can be used in scenarios such as the purchase of multiple public chain resources, the unlocking of the VIP function of the wallet, and the payment of BitKeep advertising fees.',
    distribution: 'BKB issuance and distribution',
    total: 'BKB total supply: ',
    mining: 'Compound mining',
    community: 'Community',
    tram: 'Team and early investors',
    partner: 'Partner',
    eco: 'Ecosystem building',
    hold: 'Hold BKB equity',
    hold1: 'Enjoy ecological governance rights',
    hold2: 'Ecological payment method',
    hold3: 'Member\'s rights and identity certificate',
    hold4: 'Public chain resource purchase',
    hold5: 'Unlock the VIP function of the wallet',
    hold6: 'Advertising fee payment',
    hold7: 'Participate in BitKeep IWO',
    hold8: 'Pledge to enter the exclusive channel of high-quality assets',
    appreciation: 'BKB value enhancement',
    appreciationSwap: 'Swap commission deduction',
    appreciationCoin: 'Payment',
    appreciationPool: 'Multiple staking pool',
    appreciationValut: 'Vault',
    more: 'More about BKB',
    website: 'Official website',
    paper: 'White paper',
    twitter: 'Twitter',
    github: 'Github',
    telegram: 'Telegram',
    facebook: 'Facebook',
    explorer: 'Block explorer',
    know: 'OK',
    myTraded: 'My traded value',
    totalDistributed: 'Total distributed',
    yesterday: 'Yesterday',
    claim: 'Claim',
    ClaimRewards: 'Claim Rewards',
    ClaimRewardsub: 'Rewards will be settled at 24:00 each day',
    confirm: 'Confirm',
    noData: 'No data',
    RuleTitle: 'Invite Rules',
    invitationReward: "My Invitation Reward",
    inviteNumber1: 'Total invite Rewards',
    inviteNumber2: 'Yesterday invite Rewards',
    inviteNumber3: 'Total invite Trading Rewards',
    inviteNumber4: 'Yesterday Rewards',
    tradingRewards: "Trading Rewards",
    invitationRewards: "Invitation Rewards",
    viewDetails: "View Dtails",
    inviteFriendsNow: "Invite friends now",
    ruleDetail: 'Note: The following transactions are not considered eligible for trading rewards',
    ruleDetail1: `1. Cross-chain swaps, including：<br/>  (1) swapping the same coin on different chains, e.g. BSC-USDT to ETH-USDT swaps;<br/>  (2) swapping different coins on different chains, such as through Swft channels, or BNB to ETH swaps.`,
    ruleDetail2: '2. Burning coin transactions. Some coins are based on a burning mechanism, and they might be requited to be partially burnt whenever there is a transaction, which makes it different to count the exact transaction amount. Theses coins are therefore excluded from this BKSwap Trading Reward event.',
    invitationPool: 'Invitation Rewards Pool',
    invitationPoolContent: 'Used for the second phase of the invite-and-earn event'
  },
  'nft': {
    nftTitle: 'NFT 抽奖',
    lotteryTime: '抽奖时间',
    qualificationTime: '获取资格时间',
    not: '没有中奖',
    getNft: '领取 NFT',
    drawNow: '立即抽奖',
    getEligibility: '获取资格',
    rules: '活动规则',
    rule1: '在NFT版块做抽奖活动，参与的用户需满足以下两个条件：',
    rule2: '1.用户必须持有BKB（可通过空投、邀请好友获得BKB）',
    rule3: '2.必须存入NFT资产',
    rule4: '满足以上两个条件用户，即拥有BK每次NFT抽奖活动的资格',
    note: '* BitKeep 享有本次推广活动规则的最终决定权和解释权。我们保留取消任何作弊、疑似作弊或违反 BitKeep 任何规章制度的用户参与资格的权利。',
    dialogTitle: '恭喜您抽中一张 NFT！',
    btn: '知道了',
    endCountdown: '到计时'
  },
  'blindboxInvite': {
    inviteTitle: 'Invite Friends',
    myRewards: 'My Rewards',
    invitedNumber: 'Invited friends',
    tokenRewards: 'Token Rewards',
    NFTRewards: 'NFT Rewards',
    boxRewards: 'Blind Box Rewards',
    inviteFriend: 'Invite Friend',
    inviteFriends: 'Invite Friends',
    inviteLink: 'Invitation Link',
    inviteFriendsNow: 'Invite your friends now',
    savePicture: 'Save Picture',
    ShareLink: "Share Link",
    inforce: 'Activated',
    inactivated: 'Inactivated',
    Address: 'Address',
    State: 'State',
    Time: 'Time',
    nomore: 'No More',
    loading: 'Loading...',
    rewardTitle: 'Token Rewards',
    RuleTitle: 'Invite Rules',
    know: 'OK',
    toEarn: 'Invite friends to earn BKB',
    rewardsMore: 'Friends trading rewards more BKB',
    Poster: 'Scan QRcode',
    downReward: 'Download BitKeep Wallet Earn crypto asset rewards',
    imgText: 'Hi, friend, here’s a Crypto Wallet to earn you crypto assets',
    detailWallet: 'A crypto wallet that takes no effort to navigate',
    detailWallet1: 'Securely store encrypted assets',
    detailWallet2: 'Convenient and easy-to-use BKSwap',
    detailWallet3: 'Support 721 NFT',
    detailWallet4: '7000+ DApps ecosystem',
    yourFrinedInvite: 'Your friend invites you to use BitKeep multi-chain wallet',
    friendsText: 'Trade with BitKeep to earn BKB',
    detailInput: 'Please input your ETH address to join BitKeep',
    detailBtn: 'Accept the invitation',
    detailJust: 'Have no ETH address yet? Just download BitKeep app and create a wallet',
    detailWhy: 'Why choose BitKeep wallet?',
    detailContro: 'Control your digital assets',
    detailUl1: 'A safe storage for your tokens and NFTs',
    detailUl2: 'BitKeep supports 30+ main chains, 200,000+ tokens, and 7000+ DApps',
    detailUl3: 'opening the world of DeFi for our users',
    detailCrypto: 'All crypto assets can be traded with BKSwap',
    detailAny: 'Easily swap and trade multi-chain cryptocurrencies at any time',
    detailAggregate: 'Aggregate 30+ mainstream DEXs such as Uniswap, Sushiswap, PancakeSwap, etc.',
    detailNFT: 'Store your NFTs',
    detailNFTCon: 'BitKeep provides secure and reliable crypto asset management services for millions of users across more than 168 countries and regions',
    downText: 'Congratulations, you have successfully accepted the invitation! Use BitKeep wallet now to enjoy your blockchain lifestyle',
    foot1: 'BitKeep Provides Service Worldwide',
    foot2: 'It has provided safe and reliable crypto asset management service to millions of users in more than 168 countries around the world',
    foot3: 'Number of Users',
    foot4: 'Transactions Amount',
    foot5: 'Covering Countries and Regions',
    inviteRuleTitle: 'What makes an valid invitation Your friend (new user) confirms?',
    ruleDetail: 'The user imports his/her wallet address or address has been imported or create a BitKeep wallet',
    ruleDetail1: 'The address is created within 24 hours',
    ruleDetail2: 'The user’s trading volume on BKSwap is larger than or equal to 10 USDT',
    myInviteRuleTitle: 'How is my invitation rewards calculated?',
    myRuleDetail: 'For each day, a user can get: 15*number of successfully invited users + (sum of the transaction volume of all his/her invitees/GMV of all invited users)*X; in which, we consider “(sum of the transaction volume of all his/her invitees/GMV of all invited users)” as Y',
    myRuleDetail1: 'If Y is ≥ 2M and ≤ 5M USDT equivalent, X=10,000BKB',
    myRuleDetail2: 'If Y is ≥ 50M and ≤ 20M USDT equivalent, X=20,000BKB',
    myRuleDetail3: 'If Y is ≥ 20M and ≤ 30M USDT equivalent, X=20,000BKB',
    myRuleDetail4: 'If Y is > 30M USDT equivalent, X=40,000BKB',
    myRuleDetail5: 'Note: An invitation will be considered valid only if the new user make a valid transaction(with a pre-settlement trading amount of ≥100U) with BKSwap',
    toast2: 'Sorry, this address has been invited',
    toast0: ' Sorry, this address has reached the maximum invite limit',
    emptyToast: 'Address field cannot be empty'
  },
  'staking': {
    stakingTitle: 'BKB Staking',
    AddPoolTitle: 'Add Pool',
    MyPoolsTitle: 'My Pools',
    stakingImg: 'Stake BKB Earn BKB',
    Introduce: 'Introduce',
    content: 'BitKeep has launched BKB Staking to provide users with opportunities to make money. BKB holders who stake there BKB are getting profits from the BKB pools every week. There will be many other projects accessible in the future, allowing you to earn more. When staking your BKB, you may choose from 4 different staking pools with maturity of 7 days, 30 days, 60 days, and 90 days. You will enjoy an APY of 20%, 30%, 40%, 50%, respectively. Your profit will be calculated and distributed to your Cloud Wallet at maturity.',
    Data: 'Data',
    StakedBKB: 'Staked BKB',
    totalSupply: 'BKB Total Supply',
    EndsIn: 'Ends in',
    APY: 'APY',
    YourStakeAmount: 'Your Stake Amount',
    Duration: 'Duration（Days）',
    StakeNow: 'Stake now',
    SoldOut: 'Sold Out',
    ComingSoon: 'Coming soon',
    EthereumChainPool: 'Ethereum Chain Pool',
    BSCChainPool: 'BSC Chain Pool',
    StakeAmount: 'Stake Amount',
    Available: 'Available',
    MAX: 'Max',
    StakeAmountLimiation: 'Stake Amount Limiation',
    Minimum: 'Minimum',
    Maximum: 'Maximum',
    Summary: 'Summary',
    StakeDate: 'Stake Date',
    ValueDate: 'Value Date',
    InterestPeriod: 'Interest Period',
    InterestEndDate: 'Interest End Date',
    RedemptionDate: 'Redemption Date',
    EstimatedInterests: 'Estimated Interests',
    Staking: 'Staking',
    Activity: 'Activity',
    BeExpired: 'Be expired',
    Pledge: 'Pledge',
    Durations: 'Duration',
    PledgeDueDate: 'Pledge Due Date',
    CurrencyReward: 'Currency Reward',
    Remove: 'Remove',
    Unstake: 'Unstake',
    Reward: 'Reward',
    Operate: 'Operate',
    Add: 'Add',
    RemovePool: 'Remove Pool',
    getBKB: 'Congratulations！You get',
    removeBefore: ' If you remove before the event ends<br/> you\'ll loss all Interests.<br/>Are you sure to remove？',
    Interests: 'Interests',
    Cancel: 'Cancel',
    Confirm: 'Confirm',
    Days: 'Days',
    authorization: 'You canceled signature authorization!',
    stakeAmount: 'Entry stake amount',
    know: 'OK'
  },
  'trading': {
    tradingTitle: 'Trading Reward',
    know: 'OK',
    ComingSoon: 'Coming soon',
    swapNow: 'Swap Now',
    claim: 'Claim',
    tradingRule: 'Trading Rules',
    learnMore: 'Learn more',
    finished: 'Finished',
    Live: 'Live',
    Upcoming: 'Upcoming',
    Past: 'Past',
    UnclaimedReward: 'Rewards to claim',
    Chain: 'Bianance Smart Chain',
    Ending: 'Ending in',
    Start: 'Start time',
    Time: 'Time',
    Reward: 'Reward',
    historyData: 'History',
    ruleContentTitle: 'Complete a swap transaction between the specified tokens to get BKB rewards pro rata (calculated by a percentage of the transaction fee).',
    YourTradingValue: 'Your Trading value',
    TodayTradingValue: 'Today trading value',
    TodayTradingReward: 'Today‘s total reward',
    YourTradingReward: 'Your trading reward',
    transaction: 'Total transactions',
    GetsBKB: 'BKB rewards',
    in: 'in',
    make: 'Make a transaction',
    toGet: 'to get BKB',
    noticeBar: 'This event shall not be construed as an investment advice',
    ruleTitle: 'Trading Rules',
    ruleContent: '1. Users may go to the Details page or Market page of one of the two specified tokens to enter the Trading Rewards page;<br/>2. Any to/from swap between the two specified tokens will be deemed valid;<br/>3. The reward of a given day will be calculated at 00:00 (GMT+8) the next day, after which the users may claim their rewards;<br/>4. This event shall not be construed as an investment advice',
    how: 'How to participate in the BKSwap Trading Reward event?',
    how1: '1. Please see:',
    how11: ' For the latest BKSwap tutorial.',
    how2: '2. Rules:',
    howContent: 'Users who make a transaction between a specified token pair with BKSwap will get rewarded',
    howContent1: 'Details:',
    Objectives1: 'During each event, users make a transaction between a specified token pair with BKSwap. An amount of BKB will be later calculated as a percentage of the transaction fee of the day and distributed. All users participating in the event on the day will be rewarded pro rata.',
    how3: '3. How are the trading rewards calculated?',
    OverviewContent: 'The trading reward is calculated in real time, and users can check it at any time on the "Trading Reward" page. The settlement cycle of the event is 24 hours. Users will receive their trading rewards for the previous day at 00:00 (GMT+8) every day.',
    how4: '4. How to check your trading rewards?',
    OverviewContent4: 'Go to the "Trading Reward" page in BitKeep to see everything about your gains.',
    how5: '5. How to claim your trading rewards?',
    OverviewContent5: 'Go to "Trading Reward" page and tap "Claim" button to claim your rewards.',
    popTit: 'Risk Warning',
    tit1: 'The Trading Reward events are only to reward our fans. They may not be considered as investment advice.',
    tit2: 'Reminder: The price of digital assets fluctuates greatly. Users are advised to fully understand and accept the risks of digital asset investment before investing.',
    btn: 'I got it'
  },
  'noviceBenefits': {
    'sign': '签到领抽奖券',
    'alreadySignedin': '已签到',
    'alreadySignedin1': '已签到',
    'day': '天',
    'Signedin': '签到',
    'obtain': '获取',
    'receive': '领取',
    'alreadyReceived': '已领取',
    'Currently': '当前可用抽奖卷',
    'zhang': '张',
    'Participate': '参与抽奖赢取',
    'Draw': '立即抽奖',
    'Novice': '新手奖励',
    'Telegram': '加入 Telegram 奖励',
    'Reward': '奖励 BKB + 1',
    'Join': '立即加入',
    'swap': '首次 Swap 交易奖励',
    'raffle': '奖励 BKB +2，抽奖券 +2',
    'USDT': '首次入金 50 USDT 奖励',
    'Immediate': '立即交易',
    'standard': '暂未达标',
    'Getitnow': '立即领取',
    'Viewnow': '立即查看',
    'Airdropactivity': '空投活动',
    'Access': '有机会获取各类 Token',
    'Blindboxactivity': '盲盒活动',
    'AccessNFT': '有机会获取各类 Token、NFT',
    'Invitation': '邀请奖励',
    'Invitefriends': '邀请好友 100% 赢取奖励',
    'Winaraffle': '抽奖赢取',
    'rafflepapers': '当日投入抽奖卷总数',
    'merafflepapers': '当日我投入抽奖卷数',
    'raffletickets': '投入抽奖券数量',
    'available': '可用抽奖券张数',
    'Pleaseenter': '请输入抽奖券数量',
    'usersyesterday': '昨日中奖用户',
    'Activityrules': '活动规则',
    'Dailyreward': '每日奖励 BKB 仅由一个用户瓜分',
    'morelottery': '抽奖卷越多，获得奖励的概率越大',
    'luckydraw': '抽奖卷可通过完成新手奖励，签到，邀请好友获得',
    'notes': 'BitKeep 享有本次推广活动规则的最终决定权和解释权。我们保留取消任何作弊、疑似作弊或违反 BitKeep 任何规章制度的用户参与资格的权利。',
    'Immediateinput': '立即投入',
    'WelfareCenter': '福利中心',
    'Dailyluckydraw': '每日抽奖',
    'Lotteryresults': '抽奖结果',
    'participationperiods': '参加期数',
    'ticketsinvested': '投入奖券数',
    'obtainBKB': '获取 BKB 数',
    'investment': '投入',
    'araffleticket': '张抽奖券',
    'Failedto': '未中奖',
    'Congratulations': '恭喜您中奖!',
    'Morebenefits': '更多福利',
    'signSuccess': '签到成功',
    'signError': '签到失败',
    'receiveSuccess': '领取成功',
    'receiveError': '领取失败',
    '50u': '资产大于50u持币时长24小时后可领取',
    'Cumulative': '累计签到4天，7天可分别领取一张抽奖卷。',
    'Tips': '签到规则',
    'Whatisaraffleticket': "什么是抽奖卷?",
    'Usethelotteryticket': "使用抽奖卷可前往抽奖页面抽取BKB奖励。",
    'Investedmore': '投入兑奖券超过可用抽奖卷',
    'Investinsuccess': '投入成功',
    'Failedtoputin': '投入失败',
    'Tobewon': '待开奖',
    'congratulations': '恭喜您在',
    'winningthelottery': '中奖',
    'Cloudwallet': '暂未创建云钱包',
    'incompatible': '不符合'
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {
  'noviceBenefits': {
    'sign': '簽到領抽獎券',
    'alreadySignedin': '已簽到',
    'alreadySignedin1': '已簽到',
    'day': '天',
    'Signedin': '簽到',
    'obtain': '獲取',
    'receive': '領取',
    'alreadyReceived': '已領取',
    'Currently': '當前可用抽獎卷',
    'zhang': '張',
    'Participate': '參與抽獎贏取',
    'Draw': '立即抽獎',
    'Novice': '新手獎勵',
    'Telegram': '加入 Telegram 獎勵',
    'Reward': '獎勵 BKB + 1',
    'Join': '立即加入',
    'swap': '首次 Swap 交易獎勵',
    'raffle': '獎勵 BKB +2，抽獎券 +2',
    'USDT': '首次入金 50 USDT 獎勵',
    'Immediate': '立即交易',
    'standard': '暫未達標',
    'Getitnow': '立即領取',
    'Viewnow': '立即查看',
    'Airdropactivity': '空投活動',
    'Access': '有機會獲取各類 Token',
    'Blindboxactivity': '盲盒活動',
    'AccessNFT': '有機會獲取各類 Token、NFT',
    'Invitation': '邀請獎勵',
    'Invitefriends': '邀請好友 100% 贏取獎勵',
    'Winaraffle': '抽獎贏取',
    'rafflepapers': '當日投入抽獎卷總數',
    'merafflepapers': '當日我投入抽獎卷數',
    'raffletickets': '投入抽獎券數量',
    'available': '可用抽獎券張數',
    'Pleaseenter': '請輸入抽獎券數量',
    'usersyesterday': '昨日中獎用戶',
    'Activityrules': '活動規則',
    'Dailyreward': '每日獎勵 BKB 僅由一個用戶瓜分',
    'morelottery': '抽獎卷越多，獲得獎勵的概率越大',
    'luckydraw': '抽獎卷可通過完成新手獎勵，簽到，邀請好友獲得',
    'notes': 'BitKeep 享有本次推廣活動規則的最終決定權和解釋權。我們保留取消任何作弊、疑似作弊或違反 BitKeep 任何規章制度的用戶參與資格的權利。',
    'Immediateinput': '立即投入',
    'WelfareCenter': '福利中心',
    'Dailyluckydraw': '每日抽獎',
    'Lotteryresults': '抽獎結果',
    'participationperiods': '參加期數',
    'ticketsinvested': '投入獎券數',
    'obtainBKB': '獲取 BKB 數',
    'investment': '投入',
    'araffleticket': '張抽獎券',
    'Failedto': '未中獎',
    'Congratulations': '恭喜您中獎!',
    'Morebenefits': '更多福利',
    'signSuccess': '簽到成功',
    'signError': '簽到失敗',
    'receiveSuccess': '領取成功',
    'receiveError': '領取失敗',
    '50u': '資產大於50u持幣時長24小時後可領取',
    'Cumulative': '累計簽到4天，7天可分別領取一張抽獎卷。',
    'Tips': '簽到規則',
    'Whatisaraffleticket': "什麼是抽獎卷?",
    'Usethelotteryticket': '使用抽獎卷可前往抽獎頁面抽取BKB獎勵。',
    'Investedmore': '投入兌獎券超過可用抽獎卷',
    'Investinsuccess': '投入成功',
    'Failedtoputin': '投入失敗',
    'Tobewon': '待開獎',
    'congratulations': '恭喜您在',
    'winningthelottery': '中獎',
    'Cloudwallet': '暫未創建雲錢包',
    'incompatible': '不符合'
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  'noviceBenefits': {
    'sign': 'Sign in to receive raffle tickets',
    'alreadySignedin': 'Consecutive sign-in',
    'alreadySignedin1': 'Progress',
    'day': 'days',
    'Signedin': 'day',
    'obtain': 'Ticket ',
    'receive': 'receive',
    'alreadyReceived': 'Received',
    'Currently': 'Tickets available',
    'zhang': '',
    'Participate': 'Want to win ',
    'Draw': 'Try now',
    'Novice': 'Novice reward',
    'Telegram': 'Join Telegram group',
    'Reward': 'To get 1 BKB ',
    'Join': 'Join Now',
    'swap': 'Swap for the 1st time',
    'raffle': 'To get 2 BKB and 2 tickets',
    'USDT': 'Deposit your first 50U',
    'Immediate': 'Swap Now',
    'standard': 'Outstanding',
    'Getitnow': 'Act now',
    'Viewnow': 'View',
    'Airdropactivity': 'Airdrop Events',
    'Access': 'Go get various tokens',
    'Blindboxactivity': 'Blind Box events',
    'AccessNFT': 'Go get tokens and NFTs',
    'Invitation': 'Invitation Rewards',
    'Invitefriends': 'Invite friends to get rewards',
    'Winaraffle': 'Win a raffle',
    'rafflepapers': 'Total number of tickets',
    'merafflepapers': 'My invested number',
    'raffletickets': 'Use my raffle tickets',
    'available': 'Raffle tickets available',
    'Pleaseenter': 'Enter a number',
    'usersyesterday': 'Lucky users yesterday',
    'Activityrules': 'Rules',
    'Dailyreward': 'The daily reward of 1,000BKB is rewarded to a single participant.',
    'morelottery': ' The more raffle tickets you use, the greater chance you get',
    'luckydraw': 'You can get raffle tickets through New User’s Gift, sign-in activities, and inviting your friends to use BitKeep app',
    'notes': "BitKeep reserves the right of final interpretation of the rules of this promotion. We reserve the right to disqualify any user who cheats, appears to cheat, or violates any of BitKeep's rules and policies.",
    'Immediateinput': 'Join now',
    'WelfareCenter': 'Gift Center',
    'Dailyluckydraw': 'Daily lucky draw',
    'Lotteryresults': 'Lottery result',
    'participationperiods': 'Engagement Count',
    'ticketsinvested': 'Raffle Tickets Used',
    'obtainBKB': 'BKB Obtained',
    'investment': '',
    'araffleticket': 'tickets used',
    'Failedto': 'no prize won ',
    'Congratulations': 'Congratulations!',
    'Morebenefits': 'More gifts',
    'signSuccess': 'Check in succeeded',
    'signError': 'Check in failed',
    'receiveSuccess': 'Received successfully',
    'receiveError': 'Collection failed',
    '50u': 'Assets greater than 50u can be claimed after 24 hours of holding time',
    'Cumulative': 'Sign in for 4 days in total, and you can get a lucky draw paper in 7 days.',
    'Tips': 'check-in rules',
    'Whatisaraffleticket': "What is a raffle ticket?",
    'Usethelotteryticket': 'Use the lottery ticket to go to the lottery page to draw BKB rewards.',
    'Investedmore': 'Invested more coupons than available coupons',
    'Investinsuccess': 'Invest in success',
    'Failedtoputin': 'Failed to put in',
    'Tobewon': 'To be drawn',
    'congratulations': 'congratulations',
    'winningthelottery': ' winning the lottery',
    'Cloudwallet': 'Cloud wallet has not been created yet',
    'incompatible': 'N/A'
  }
}; // 印尼
// 'noviceBenefits':{
//   'sign':'Masuk untuk menerima tiket undian',
//   'alreadySignedin':'masuk',
//   'alreadySignedin1':'masuk',
//   'day':'langit',
//   'Signedin':'masuk',
//   'obtain':'Memperoleh',
//   'receive':'menerima',
//   'alreadyReceived':'diterima',
//   'Currently':'Tiket undian yang tersedia saat ini',
//   'zhang':'Lembaran',
//   'Participate':'Berpartisipasi dalam undian untuk menang',
//   'Draw':'menggambar sekarang,',
//   'Novice':'bonus pemula,',
//   'Telegram':'Bergabunglah dengan Hadiah Telegram,',
//   'Reward':'menghadiahkan',
//   'Join':'bergabung sekarang',
//   'swap':'Hadiah transaksi Swap pertama',
//   'raffle':'Hadiah BKB +2, tiket undian +2,',
//   'USDT':'Bonus 50 USDT untuk setoran pertama',
//   'Immediate':'berdagang sekarang',
//   'standard':'tidak mutakhir',
//   'Getitnow':'dapatkan sekarang juga',
//   'Viewnow':'Lihat sekarang',
//   'Airdropactivity':'kampanye airdrop',
//   'Access':'Memiliki kesempatan untuk mendapatkan berbagai Token',
//   'Blindboxactivity':'Memiliki kesempatan untuk mendapatkan berbagai Token',
//   'AccessNFT':'Dapatkan kesempatan untuk mendapatkan berbagai Token dan NFT',
//   'Invitation':'Hadiah undangan',
//   'Invitefriends':'Undang teman 100% untuk memenangkan hadiah',
//   'Winaraffle':'undian untuk menang',
//   'rafflepapers':'Jumlah total tiket lotere yang diinvestasikan pada hari itu',
//   'merafflepapers':'Jumlah gulungan yang saya masukkan ke dalam undian hari itu',
//   'raffletickets':'Jumlah tiket undian yang diinvestasikan,',
//   'available':'jumlah tiket undian yang tersedia',
//   'Pleaseenter':'Silakan masukkan nomor tiket undian',
//   'usersyesterday':'Pengguna pemenang kemarin',
//   'Activityrules':'Aturan Kegiatan',
//   'Dailyreward':'Hadiah harian BKB hanya dibagi oleh satu pengguna',
//   'morelottery':'Semakin banyak gulungan lotere, semakin besar kemungkinan mendapatkan hadiah',
//   'luckydraw':'Tiket lotere dapat diperoleh dengan menyelesaikan hadiah pemula, masuk, dan mengundang teman',
//   'notes':'BitKeep berhak atas keputusan akhir dan interpretasi aturan promosi ini. Kami berhak untuk mendiskualifikasi setiap pengguna yang curang, tampak curang, atau melanggar aturan dan peraturan BitKeep.' ,
//   'Immediateinput':'masukkan sekarang',
//   'WelfareCenter':'pusat kesejahteraan',
//   'Dailyluckydraw':'undian harian',
//   'Lotteryresults':'hasil lotere',
//   'participationperiods':'jumlah sesi',
//   'ticketsinvested':'Jumlah tiket lotere yang diinvestasikan',
//   'obtainBKB':'mendapatkan nomor BKB',
//   'investment':'dimasukkan ke dalam',
//   'araffleticket':'tiket undian',
//   'Failedto':'tidak menang',
//   'Congratulations':'Selamat atas kemenangan Anda!',
//   'Morebenefits':'lebih banyak manfaat',
//   'signSuccess':'berhasil masuk',
//   'signError':'Gagal masuk',
//   'receiveSuccess':'Diterima dengan sukses',
//   'receiveError':'Gagal mengklaim'
// }

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(32);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['initRouter'] = __webpack_require__(38);
middleware['initRouter'] = middleware['initRouter'].default || middleware['initRouter'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "BUILD_ENV": "pro",
        "HOST_API": "http://dev.bitkeep.top:8880",
        "NODE_ENV": "production",
        "DEBUG": "bit*"
      }
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(33);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(13);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(11);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(14);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _57e7dee0 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/airdrop/index */ 19).then(__webpack_require__.bind(null, 301)));

const _664387a5 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/index */ 24).then(__webpack_require__.bind(null, 302)));

const _750d17e4 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/index */ 32).then(__webpack_require__.bind(null, 303)));

const _63f0ccb0 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/cbkbexchange/index */ 35).then(__webpack_require__.bind(null, 304)));

const _12cbcbc2 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/index */ 38).then(__webpack_require__.bind(null, 305)));

const _5cec217c = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/nftLottery/index */ 42).then(__webpack_require__.bind(null, 306)));

const _790f37c1 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/index */ 44).then(__webpack_require__.bind(null, 307)));

const _44454fde = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/index */ 48).then(__webpack_require__.bind(null, 308)));

const _b68a2270 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/index */ 53).then(__webpack_require__.bind(null, 309)));

const _0ab4e091 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/detail/index */ 21).then(__webpack_require__.bind(null, 299)));

const _844f77f6 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/download */ 22).then(__webpack_require__.bind(null, 310)));

const _15addb32 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/firendList */ 23).then(__webpack_require__.bind(null, 311)));

const _54fe6b9b = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/list */ 25).then(__webpack_require__.bind(null, 312)));

const _9ce0940c = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/stepDetail */ 26).then(__webpack_require__.bind(null, 313)));

const _f81d75f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/copy */ 29).then(__webpack_require__.bind(null, 167)));

const _fbefc576 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/detail */ 30).then(__webpack_require__.bind(null, 314)));

const _fc0ada08 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/download */ 31).then(__webpack_require__.bind(null, 315)));

const _4872733b = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/inviteList */ 33).then(__webpack_require__.bind(null, 316)));

const _8b4fe53e = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/rewardList */ 34).then(__webpack_require__.bind(null, 317)));

const _d163f8fe = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/RuleDetail */ 27).then(__webpack_require__.bind(null, 210)));

const _874fe8be = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/history */ 37).then(__webpack_require__.bind(null, 318)));

const _051c2f19 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/inviteRuleDetail */ 39).then(__webpack_require__.bind(null, 208)));

const _1a43896f = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/miningRule */ 40).then(__webpack_require__.bind(null, 319)));

const _4fd6255b = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/protocol */ 41).then(__webpack_require__.bind(null, 206)));

const _7ba78010 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/RuleDetail */ 36).then(__webpack_require__.bind(null, 207)));

const _b520543a = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/drawluckly */ 43).then(__webpack_require__.bind(null, 320)));

const _54a4cf92 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/inviteRuleDetail */ 45).then(__webpack_require__.bind(null, 321)));

const _57b9f12e = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/lotteryresults */ 46).then(__webpack_require__.bind(null, 322)));

const _22da28e9 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/addPool */ 47).then(__webpack_require__.bind(null, 323)));

const _5bcf638c = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/myPool */ 49).then(__webpack_require__.bind(null, 324)));

const _928cb988 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/protocol */ 50).then(__webpack_require__.bind(null, 211)));

const _686a365c = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/wallet */ 51).then(__webpack_require__.bind(null, 80)));

const _65965a0a = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/history */ 52).then(__webpack_require__.bind(null, 325)));

const _633cb7dc = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/protocol */ 54).then(__webpack_require__.bind(null, 209)));

const _2257f1b3 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/tradingRule */ 55).then(__webpack_require__.bind(null, 326)));

const _75ea05a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/component/createPoster */ 28).then(__webpack_require__.bind(null, 204)));

const _2873d339 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/detail/_id */ 20).then(__webpack_require__.bind(null, 327)));

const _10086299 = () => interopDefault(__webpack_require__.e(/* import() | pages/article/detail/_id */ 56).then(__webpack_require__.bind(null, 328)));

const _49cc6c06 = () => interopDefault(__webpack_require__.e(/* import() | pages/_id */ 18).then(__webpack_require__.bind(null, 329)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/activity/airdrop",
    component: _57e7dee0,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _664387a5,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _750d17e4,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _63f0ccb0,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _12cbcbc2,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _5cec217c,
    name: "activity-nftLottery"
  }, {
    path: "/activity/noviceBenefits",
    component: _790f37c1,
    name: "activity-noviceBenefits"
  }, {
    path: "/activity/staking",
    component: _44454fde,
    name: "activity-staking"
  }, {
    path: "/activity/trading",
    component: _b68a2270,
    name: "activity-trading"
  }, {
    path: "/activity/blindbox/detail",
    component: _0ab4e091,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _844f77f6,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _15addb32,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _54fe6b9b,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _9ce0940c,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _f81d75f4,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _fbefc576,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _fc0ada08,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _4872733b,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _8b4fe53e,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _d163f8fe,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _874fe8be,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _051c2f19,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _1a43896f,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _4fd6255b,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _7ba78010,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/noviceBenefits/drawluckly",
    component: _b520543a,
    name: "activity-noviceBenefits-drawluckly"
  }, {
    path: "/activity/noviceBenefits/inviteRuleDetail",
    component: _54a4cf92,
    name: "activity-noviceBenefits-inviteRuleDetail"
  }, {
    path: "/activity/noviceBenefits/lotteryresults",
    component: _57b9f12e,
    name: "activity-noviceBenefits-lotteryresults"
  }, {
    path: "/activity/staking/addPool",
    component: _22da28e9,
    name: "activity-staking-addPool"
  }, {
    path: "/activity/staking/myPool",
    component: _5bcf638c,
    name: "activity-staking-myPool"
  }, {
    path: "/activity/staking/protocol",
    component: _928cb988,
    name: "activity-staking-protocol"
  }, {
    path: "/activity/staking/wallet",
    component: _686a365c,
    name: "activity-staking-wallet"
  }, {
    path: "/activity/trading/history",
    component: _65965a0a,
    name: "activity-trading-history"
  }, {
    path: "/activity/trading/protocol",
    component: _633cb7dc,
    name: "activity-trading-protocol"
  }, {
    path: "/activity/trading/tradingRule",
    component: _2257f1b3,
    name: "activity-trading-tradingRule"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _75ea05a2,
    name: "activity-blindboxInvite-component-createPoster"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _2873d339,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _10086299,
    name: "article-detail-id"
  }, {
    path: "/:id?",
    component: _49cc6c06,
    name: "id"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e4edc092"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "73d1e9aa"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/vant/lib/index.css
var lib = __webpack_require__(43);

// EXTERNAL MODULE: ./assets/css/globle.scss
var globle = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=5e70468b&
var defaultvue_type_template_id_5e70468b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var defaultvue_type_template_id_5e70468b_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=5e70468b&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_5e70468b_render,
  defaultvue_type_template_id_5e70468b_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "48764079"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(50), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(12), 'modules/local.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  Activity: () => __webpack_require__.e(/* import() | components/activity */ 1).then(__webpack_require__.bind(null, 205)).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindButton: () => __webpack_require__.e(/* import() | components/blindbox-blind-button */ 2).then(__webpack_require__.bind(null, 213)).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindStrategy: () => __webpack_require__.e(/* import() | components/blindbox-blind-strategy */ 3).then(__webpack_require__.bind(null, 330)).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindTimeText: () => __webpack_require__.e(/* import() | components/blindbox-blind-time-text */ 4).then(__webpack_require__.bind(null, 113)).then(c => wrapFunctional(c.default || c)),
  BlindboxCreatePoster: () => __webpack_require__.e(/* import() | components/blindbox-create-poster */ 5).then(__webpack_require__.bind(null, 214)).then(c => wrapFunctional(c.default || c)),
  BlindboxTitleImage: () => __webpack_require__.e(/* import() | components/blindbox-title-image */ 6).then(__webpack_require__.bind(null, 212)).then(c => wrapFunctional(c.default || c)),
  CommonCVueCountdown: () => __webpack_require__.e(/* import() | components/common-c-vue-countdown */ 8).then(__webpack_require__.bind(null, 85)).then(c => wrapFunctional(c.default || c)),
  CommonHeader: () => __webpack_require__.e(/* import() | components/common-header */ 9).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c)),
  Common: () => __webpack_require__.e(/* import() | components/common */ 7).then(__webpack_require__.bind(null, 78)).then(c => wrapFunctional(c.default || c)),
  Trading: () => __webpack_require__.e(/* import() | components/trading */ 10).then(__webpack_require__.bind(null, 116)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutCanvasPoster: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-canvas-poster */ 12).then(__webpack_require__.bind(null, 163)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutGradient: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-gradient */ 13).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutHeader: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-header */ 14).then(__webpack_require__.bind(null, 331)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayout: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout */ 11).then(__webpack_require__.bind(null, 300)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutPainter: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-painter */ 15).then(__webpack_require__.bind(null, 114)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutQrcode: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-qrcode */ 16).then(__webpack_require__.bind(null, 87)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutUtil: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-util */ 17).then(__webpack_require__.bind(null, 115)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(34);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(10);

// EXTERNAL MODULE: external "debug"
var external_debug_ = __webpack_require__(5);

// EXTERNAL MODULE: ./locales/index.js + 1 modules
var locales = __webpack_require__(6);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(1);

// CONCATENATED MODULE: ./plugins/common/init.js

 // import VueCanvasPoster from 'vue-canvas-poster'


const log =  true ? (...arg) => {
  console.log("bit:init", ...arg);
} : undefined; // import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)


const init_components = [external_vant_["Popup"], external_vant_["Dialog"], external_vant_["Toast"], external_vant_["Icon"], external_vant_["Image"], external_vant_["Loading"], external_vant_["List"], external_vant_["Empty"], external_vant_["CountDown"], external_vant_["PullRefresh"], external_vant_["Progress"], external_vant_["ImagePreview"], // Badge,
external_vant_["Overlay"], external_vant_["Field"], external_vant_["Form"], external_vant_["Skeleton"], external_vant_["Button"], external_vant_["Col"], external_vant_["Row"], external_vant_["Tab"], external_vant_["Tabs"], external_vant_["NoticeBar"] // Lazyload
// VueCanvasPoster
]; //存在问题结合nuxt使用  服务端拿不到query

external_vue_default.a.use(external_vant_["Lazyload"], {
  lazyComponent: false
});

function install(Vue) {
  init_components.forEach(function (item) {
    Vue.use(item); // console.log(item.install , item.name)
    // if (item.install) {
    //     Vue.use(item);
    // } else if (item.name) {
    //     Vue.component(item.name, item);
    // }
  });
}

install(external_vue_default.a);

if (false) {}

/* harmony default export */ var init = (({
  app,
  store,
  query = {},
  params = {}
}) => {
  // log({app, store })
  const lang = query.lang || params.lang;
  const {
    locale,
    UA,
    bitkeep
  } = store.state.local;
  external_vue_default.a.prototype.$store = store;
  app.i18n = Object(locales["a" /* default */])(locale);

  if (UA.isBitKeep && false) {
    if (sessionStorage.bitKeep) {
      store.commit("SET_BIT_KEEP", sessionStorage.bitKeep);
    } else {
      sessionStorage.setItem("bitKeep", JSON.stringify(bitkeep));
    }
  }

  log("init: success");
});
// CONCATENATED MODULE: ./plugins/axios.js

const requestlog =  true ? (...arg) => {
  console.log("bit-article-request", ...arg);
} : undefined;
const responselog =  true ? (...arg) => {
  console.log("bit-article-response", ...arg);
} : undefined;
/* harmony default export */ var plugins_axios = (function ({
  $axios,
  store,
  redirect
}) {
  // $axios.onError 是一个 nuxt 提供的辅助拦截器函数
  // 里面可以拦截到错误
  $axios.interceptors.request.use(config => {
    requestlog(config.url, config.params || '', config.data || '');
    return config;
  }, error => {
    return Promise.reject(error);
  }); // response interceptor

  $axios.interceptors.response.use(response => {
    responselog(response.status, response.config ? response.config.url : "");
    return response;
  }, error => {
    return Promise.resolve({
      status: 1,
      data: error
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/client/bitkeep.js (mode: 'client')

 // Source: ../plugins/client/flexible.js (mode: 'client')

 // Source: ../plugins/common/init.js (mode: 'all')

 // Source: ../plugins/client/sessionStorage.js (mode: 'client')

 // Source: ../plugins/client/firebase.js (mode: 'client')

 // Source: ../plugins/axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "",
      "htmlAttrs": {
        "lang": "en"
      },
      "bodyAttrs": {
        "class": "theme-light"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, user-scalable=no"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "hid": "keywords",
        "name": "keywords",
        "content": "bitkeep,eth"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "script": [],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (typeof init === 'function') {
    await init(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    const {
      route
    } = router.resolve(app.context.route.fullPath); // Ignore 404s rather than blindly replacing URL

    if (!route.matched.length && false) {
      return resolve();
    }

    router.replace(route, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["initRouter"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("qrcode");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("html2canvas");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@finpo/vue2-recaptcha-invisible");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map