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
/******/ 			var chunk = require("./" + ({"1":"components/activity","2":"components/blindbox-blind-button","3":"components/blindbox-blind-strategy","4":"components/blindbox-blind-time-text","5":"components/blindbox-create-poster","6":"components/blindbox-title-image","7":"components/common","8":"components/common-c-vue-countdown","9":"components/common-header","10":"components/polygon-airdrop-address-card","11":"components/polygon-airdrop-award-card","12":"components/polygon-c-vue-countdown","13":"components/polygon-countdown","14":"components/polygon-invited-card","15":"components/polygon-ment","16":"components/polygon-mint","17":"components/polygon-mint-success-card","18":"components/polygon-whitelistcard","19":"components/trading","20":"components/vue-create-poster-layout","21":"components/vue-create-poster-layout-canvas-poster","22":"components/vue-create-poster-layout-gradient","23":"components/vue-create-poster-layout-header","24":"components/vue-create-poster-layout-painter","25":"components/vue-create-poster-layout-qrcode","26":"components/vue-create-poster-layout-util","27":"pages/_id","28":"pages/activity/airdrop/index","29":"pages/activity/blindbox/detail/_id","30":"pages/activity/blindbox/detail/index","31":"pages/activity/blindbox/download","32":"pages/activity/blindbox/firendList","33":"pages/activity/blindbox/index","34":"pages/activity/blindbox/list","35":"pages/activity/blindbox/stepDetail","36":"pages/activity/blindboxInvite/RuleDetail","37":"pages/activity/blindboxInvite/component/createPoster","38":"pages/activity/blindboxInvite/copy","39":"pages/activity/blindboxInvite/detail","40":"pages/activity/blindboxInvite/download","41":"pages/activity/blindboxInvite/index","42":"pages/activity/blindboxInvite/inviteList","43":"pages/activity/blindboxInvite/rewardList","44":"pages/activity/cbkbexchange/index","45":"pages/activity/mining/RuleDetail","46":"pages/activity/mining/history","47":"pages/activity/mining/index","48":"pages/activity/mining/inviteRuleDetail","49":"pages/activity/mining/miningRule","50":"pages/activity/mining/protocol","51":"pages/activity/nftLottery/index","52":"pages/activity/noviceBenefits/drawluckly","53":"pages/activity/noviceBenefits/index","54":"pages/activity/noviceBenefits/inviteRuleDetail","55":"pages/activity/noviceBenefits/lotteryresults","56":"pages/activity/staking/addPool","57":"pages/activity/staking/index","58":"pages/activity/staking/myPool","59":"pages/activity/staking/protocol","60":"pages/activity/staking/wallet","61":"pages/activity/trading/history","62":"pages/activity/trading/index","63":"pages/activity/trading/protocol","64":"pages/activity/trading/tradingRule","65":"pages/article/detail/_id","66":"pages/mint_nft_token/index"}[chunkId]||chunkId) + ".js");
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
/******/ 	__webpack_require__.p = "/nft_h5_static/";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
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
var external_vue_i18n_ = __webpack_require__(18);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./locales/vant/index.js
// 知识点1： 可用于模块的批量导入，类同于import引入同一文件夹下多个文件。
// require.context(directory, useSubdirectories = false, regExp = /^.//);
// 参数： 1. 读取文件的路径 2. 是否遍历文件的子目录 3. 匹配文件的正则表达式
// 返回是一个函数，是该文件夹下的匹配文件的执行环境
// 该函数有三个属性
// 1. resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
// 2. keys {Function} -返回匹配成功模块的名字组成的数组
const modulesFiles = __webpack_require__(68); // console.log(modulesFiles.keys())
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
  'en': __webpack_require__(69),
  'fr': __webpack_require__(70),
  'ja': __webpack_require__(71),
  'ko': __webpack_require__(72),
  'vi': __webpack_require__(73),
  'zh': __webpack_require__(74),
  'zh_tw': __webpack_require__(75),
  'id': __webpack_require__(76)
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
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/***/ (function(module, exports) {

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
//
//
//
//

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _footer_vue_vue_type_template_id_6a01166d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_6a01166d___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _footer_vue_vue_type_template_id_6a01166d___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "92ffaa1c"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transfer16 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wallet; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
// import detectEthereumProvider from '@metamask/detect-provider';
 // import abiCoder from 'web3-eth-abi';

 // import Web3 from 'web3'
// import { transfer16 } from '../common/common'

function transfer16(val = '1') {
  val = isNaN(Number(val)) ? 1 : Number(val);
  return "0x" + val.toString(16);
}

class Wallet extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor() {
    super();

    this.setMintToken = async data => {
      data.gas = "0x" + bignumber_js__WEBPACK_IMPORTED_MODULE_1___default()(data.gas || data.gasLimit || 0).toString(16);
      data.gasPrice = "0x" + bignumber_js__WEBPACK_IMPORTED_MODULE_1___default()(data.gasPrice || 0).times(bignumber_js__WEBPACK_IMPORTED_MODULE_1___default()(10).pow(18)).toString(16);
      data.value = "0x" + bignumber_js__WEBPACK_IMPORTED_MODULE_1___default()(data.value || 0).toString(16);
      return await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [data]
      }); //  const web3 = new Web3(ethereum)
      //  await web3.eth.sendTransaction(data)
      //  await web3.eth.request({
      //   method: 'eth_sendTransaction',
      //   params: [
      //     data
      //   ],
      // });
    };

    this._accounts = [];
    this._chainId = 0;
    this._walletPlatform = 'bitkeep';
  }

  transfer16(val = 0) {
    val = isNaN(Number(val)) ? 1 : Number(val);
    return "0x" + val.toString(16);
  } // 是否安装 bitkeep 钱包


  isInstall() {
    const isInstalled = !!window.ethereum || !!window.isBitKeep;
    !isInstalled && console.warn("no installed bitkeep");
    return isInstalled;
  } // 是否连接中


  isConnected() {
    return window.ethereum && window.ethereum.selectedAddress;
  } // 连接钱包


  async connect() {
    const Accounts = window.ethereum && (await window.ethereum.request({
      method: 'eth_requestAccounts'
    })); // this.initEvent()

    return Accounts[0];
  } // 切换地址


  selectedAddress() {
    return window.ethereum && window.ethereum.selectedAddress;
  } // 获取钱包信息


  getWalletInfo() {
    return {
      address: window.ethereum && window.ethereum.selectedAddress,
      // chainName: window.ethereum && window.ethereum.chainName || 'eth',
      // chain: window.ethereum && window.ethereum.chain || 'eth',
      chainId: window.ethereum && window.ethereum.chainId || '1',
      walletId: '',
      walletPlatform: this.getWalletPlatform()
    };
  } // 获取 chain ID


  async getChainId() {
    return window.ethereum && window.ethereum.request({
      method: 'eth_chainId'
    });
  } // 切换 chain ID


  async switchChainId(chainId, address) {
    if (!address) {
      const [nAddress] = await this.getAccounts();
      address = nAddress;
    }

    return window.ethereum && window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: transfer16(chainId)
      }, address]
    });
  } // 获取钱包标识


  getWalletPlatform() {
    return this._walletPlatform;
  }

  chainChanged() {
    window.ethereum.on('chainChanged', async (...arg) => {
      console.log(...arg, 'arg'); // window.location.reload()

      this.emit('chainChanged', ...arg);
    });
  } // 获取钱包账号


  async getAccounts() {
    return window.ethereum ? window.ethereum.request({
      method: "eth_accounts"
    }) : [];
  } // 登录签名


  async LoginSign(dataToSign, address) {
    console.log(dataToSign, address, 'dataToSign, addressdataToSign, addressdataToSign, address');
    return await window.ethereum.request({
      method: "personal_sign",
      params: [dataToSign, address],
      from: address
    }); // return await window.ethereum.signMessage({ data: dataToSign })
  } //邀请好友签名


  async paritySign(address, inviteCode) {
    const chainId = parseInt(await this.getChainId(), 10) || 137;
    const msgParams = JSON.stringify({
      domain: {
        // Defining the chain aka Rinkeby testnet or Ethereum Main Net
        chainId: chainId,
        // Give a user friendly name to the specific contract you are signing for.
        name: 'Ether Mail',
        // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        // Just let's you know the latest version. Definitely make sure the field name is correct.
        version: '1'
      },
      // Defining the message signing data content.
      message: {
        /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
        contents: inviteCode,
        attachedMoneyInEth: 4.2,
        from: {
          name: 'Invite Code',
          wallets: [address]
        } // to: [
        //   {
        //     name: 'to_address',
        //     wallets: [
        //       toConstractAddress
        //     ],
        //   },
        // ],

      },
      // Refers to the keys of the *types* object below.
      primaryType: 'Mail',
      types: {
        // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
        EIP712Domain: [{
          name: 'name',
          type: 'string'
        }, {
          name: 'version',
          type: 'string'
        }, {
          name: 'chainId',
          type: 'uint256'
        }, {
          name: 'verifyingContract',
          type: 'address'
        }],
        // Not an EIP712Domain definition
        Group: [{
          name: 'name',
          type: 'string'
        }, {
          name: 'members',
          type: 'Person[]'
        }],
        // Refer to PrimaryType
        Mail: [{
          name: 'from',
          type: 'Person'
        }, // { name: 'to', type: 'Person[]' },
        {
          name: 'contents',
          type: 'string'
        }],
        // Not an EIP712Domain definition
        Person: [{
          name: 'name',
          type: 'string'
        }, {
          name: 'wallets',
          type: 'address[]'
        }]
      }
    });
    return await window.ethereum.request({
      method: "eth_signTypedData_v4",
      params: [address, msgParams],
      from: address
    }); // return await window.ethereum.request({ method: "eth_sign", params: [address, dataToSign],from: address})
  } // 取消授权
  // approveToken = async ( address, chainId, id, spender, amount ) => {
  //   await window.ethereum.request({
  //     method: 'eth_sendTransaction',
  //     params: [
  //       {
  //         from: address,
  //         to: id,
  //         chainId: chainId,
  //         data: abiCoder.encodeFunctionCall(
  //           {
  //             constant: false,
  //             inputs: [
  //               {
  //                 name: '_spender',
  //                 type: 'address',
  //               },
  //               {
  //                 name: '_value',
  //                 type: 'uint256',
  //               },
  //             ],
  //             name: 'approve',
  //             outputs: [
  //               {
  //                 name: '',
  //                 type: 'bool',
  //               },
  //             ],
  //             payable: false,
  //             stateMutability: 'nonpayable',
  //             type: 'function',
  //           },
  //           [spender, amount]
  //         ),
  //       },
  //     ],
  //   });
  // }
  //MintToken


  initEvent() {
    // if(!window.Web3) console.warn("install...")
    // window.web3 = new window.Web3(window.ethereum)
    window.ethereum.removeAllListeners && window.ethereum.removeAllListeners(); // window.ethereum.removeListener && window.ethereum.removeListener('chainChanged')

    window.ethereum.on('accountsChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg);
    });
    window.ethereum.on('chainChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg);
    });
  }

}

const wallet = new Wallet();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
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
    commit('SET_UA', Object(_tools_common__WEBPACK_IMPORTED_MODULE_1__[/* parseUA */ "d"])(req.headers['user-agent'], headerUa)); //App内嵌

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/polygon/footer.vue?vue&type=template&id=6a01166d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"polygon_footer"},[_vm._ssrNode("<div class=\"container\"><div class=\"footer-box-logo\"><div class=\"footer-box-logo-img\"><img src=\"https://cdn.bitkeep.vip/u_b_e018f290-b8dc-11ec-821f-dfed729e21e7.png\" alt></div> <div class=\"footer-box-logo-msg\"><p class=\"TTORegular\">Converge the power of &quot;Polygon Warriors&quot;</p> <h3 class=\"TTORegular\">May 1 - May 31 , 2022</h3></div></div> <div class=\"bottom\"><div class=\"logo\"><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt></div> <ul><li class=\"telebox\"><a href=\"https://t.me/BitKeep_Official\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt=\"Bitkeep 官方 Telegram 账号\"></a></li> <li><a href=\"https://twitter.com/BitKeepOS\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt=\"Bitkeep的官方推特账号\"></a></li> <li><a href=\"https://www.youtube.com/c/BitKeepWallet\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" alt=\"Bitkeep的官方YouTube账号\"></a></li> <li><a href=\"https://twitter.com/BitKeepOS\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt=\"Bitkeep的官方推特账号\"></a></li> <li><a href=\"https://medium.com/@bitkeepblog\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt=\"Bitkeep 官方 Medium 账号\"></a></li> <li><a href=\"https://github.com/bitkeepwallet/download\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt=\"Bitkeep 官方 GitHub 账号\"></a></li> <li><a href=\"https://discord.gg/qYTatUzNjM\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(58)))+" alt=\"Bitkeep 官方 Discord 账号\"></a></li> <li><a href=\"https://instagram.com/bitkeep_global?igshid=YmMyMTA2M2Y=\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(59)))+" alt=\"Bitkeep's official instagram account\"></a></li> <li><a href=\"https://www.facebook.com/BitKeep\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(60)))+" alt=\"Bitkeep's official facebook account\"></a></li></ul></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/polygon/footer.vue?vue&type=template&id=6a01166d&


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* unused harmony export getImageInfo */
/* unused harmony export LowerCase */
/* unused harmony export Download */
/* unused harmony export base64ToBlob */
/* unused harmony export downloadFile */
/* unused harmony export throttle */
/* unused harmony export compareVersion */
/* unused harmony export deepClone */
/* unused harmony export getStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseUA; });
/* unused harmony export parseUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DPR; });
/* unused harmony export filterTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadView; });
/* harmony import */ var core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_0__);

const getImageInfo = src => new Promise(resolve => {
  // img.setAttribute("crossOrigin", 'Anonymous')
  let image = new Image();
  image.setAttribute("crossorigin", "anonymous");
  image.src = "http://cdn.bitkeep.vip/u_b_c1f944e0-db1f-11eb-9ad0-ddefb611a80f.png"; // image.src = src

  if (image.complete) {
    resolve(toBase64(image));
  } else {
    image.onload = function () {
      resolve(toBase64(image));
      image.onload = null; // image=null
    };
  }
});
const LowerCase = (str = "") => {
  return (str || "").toLowerCase();
};

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
  let parts = code.split(";base64,");
  let contentType = parts[0].split(":")[1];
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
  let aLink = document.createElement("a");
  let blob = base64ToBlob(content); //new Blob([content]);

  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为

  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob); // aLink.dispatchEvent(evt);
  //aLink.click()

  aLink.dispatchEvent(new MouseEvent("click", {
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

const compareVersion = (v2 = "1.0.0") => {
  const uaArray = window.navigator.userAgent.split("/");
  let v1 = uaArray[uaArray.length - 1];
  v1 = v1.split(".");
  v2 = v2.split(".");
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push("0");
  }

  while (v2.length < len) {
    v2.push("0");
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
      case "boolean":
      case "number":
      case "string":
      case "null":
      case "undefined":
      case "function":
        {
          return oldObj;
          break;
        }

      case "symbol":
        {
          return Symbol(Symbol.keyFor(oldObj).toString());
          break;
        }

      case "array":
        {
          newObj = [];
          break;
        }

      case "regExp":
        {
          newObj = new RegExp(oldObj.source, _getRegExp(oldObj));
          if (oldObj.lastIndex) newObj.lastIndex = oldObj.lastIndex;
          break;
        }

      case "date":
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
  const ua = userAgent || ( false ? undefined : "");
  const isIosEnv = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  const isPhonx = _ => !!(isIosEnv && screen.height == 812 && screen.width == 375);

  const ret = {
    ios: isIosEnv,
    android: ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1,
    Mobile: /(Mobile)/i.test(ua),
    // MobileAll: ua.indexOf('Android') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('SymbianOS') > -1 || ua.indexOf('Windows Phone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1,
    wPhone: /(Windows Phone|windows[\s+]phone)/i.test(ua),
    PC: ua.indexOf("Win") > -1 || ua.indexOf("Mac") > -1 || ua.indexOf("Linux") > -1,
    weixin: ua.indexOf("MicroMessenger") > -1,
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
  var M = val.getMonth() + 1 >= 10 ? val.getMonth() + 1 : "0" + (this.getMonth() + 1);
  var D = val.getDate() >= 10 ? val.getDate() : "0" + val.getDate();
  var H = val.getHours() >= 10 ? val.getHours() : "0" + val.getHours();
  var MI = val.getMinutes() >= 10 ? val.getMinutes() : "0" + val.getMinutes();
  var S = val.getSeconds() >= 10 ? val.getSeconds() : "0" + val.getSeconds();
  return Y + "-" + M + "-" + D + " " + H + ":" + MI + ":" + S;
}
const loadView = function () {
  let isLoad = false;
  new Promise(resolve => {
    if (document.readyState == "complete") {
      isLoad = true;
      return resolve();
    }

    window.addEventListener("load", () => {
      isLoad = true;
      resolve();
    });
    setTimeout(() => {
      if (!isLoad) {
        resolve();
      }
    }, 4000);
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)["URL"]))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.2e48948.png";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
module.exports = __webpack_require__(77);


/***/ }),
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/telegram_logo.25e12aa.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/twitter_logo.f2d3f8f.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/youtube_logo.eab0dab.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kaoka_logo.c0bcfcb.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/medium_logo.63ba0ca.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/github_logo.1017f62.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/discord_logo.92412ca.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flat_logo.5d747f9.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/facebook_logo.2eb134a.png";

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/right_log.d071a26.png";

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

/* harmony default export */ __webpack_exports__["default"] = ({
  modules: {
    local: _modules_local__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.array.last-index.js");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de-DE": 28,
	"./de-DE-formal": 29,
	"./de-DE-formal.js": 29,
	"./de-DE.js": 28,
	"./en-US": 30,
	"./en-US.js": 30,
	"./es-ES": 31,
	"./es-ES.js": 31,
	"./fr-FR": 32,
	"./fr-FR.js": 32,
	"./ja-JP": 33,
	"./ja-JP.js": 33,
	"./nb-NO": 34,
	"./nb-NO.js": 34,
	"./ro-RO": 35,
	"./ro-RO.js": 35,
	"./th-TH": 36,
	"./th-TH.js": 36,
	"./tr-TR": 37,
	"./tr-TR.js": 37,
	"./zh-CN": 38,
	"./zh-CN.js": 38,
	"./zh-HK": 39,
	"./zh-HK.js": 39,
	"./zh-TW": 40,
	"./zh-TW.js": 40
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
webpackContext.id = 68;

/***/ }),
/* 69 */
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
      rules: ["Each blind box contains a random number of BKB", `Share this link to invite your friends, and ask them to fill in valid BitKeep Cloud Wallet address (Click the link to create a BitKeep Cloud Wallet <a href='https://bit.ly/BitKeepCloudWallet' class='color_red'>https://bit.ly/BitKeepCloudWallet</a> )`, "With one friends manage to make contribution, the blind box will unlock, and you and your friends will get a share of the BKB inside.", "These BKB will be deposited in your Cloud Wallet. If you have’t activated your Cloud Wallet, please tap Cloud Wallet in the NAV bar to activate it."],
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
    noRecord: 'No record',
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
  },
  polygon: {
    telegramTitle: "Bitkeep Official Telegram Account",
    twitterTitle: "Bitkeep Official Twitter Account",
    YouTubeTitle: "Bitkeep Official YouTube Account",
    MediumTitle: "Bitkeep official Medium account",
    GitHubTitle: "Bitkeep official GitHub account",
    DiscordTitle: "Bitkeep Official Discord Account",
    instagramTitle: "Bitkeep official instagram account",
    facebookTitle: "Bitkeep official facebook account",
    connectWallet: 'connect wallet',
    title: 'Genesis NFT Sale',
    enterCode: 'Fill invite code',
    enterCode2: 'Enter the invitation code',
    InvitationSucceeded: "Fill in successfully",
    paste: 'paste',
    currentAddress: 'Current wallet address',
    confirm: 'confirm',
    inviteFriends: 'Invite friends',
    inviteCode: 'My Code',
    inviteCount: 'The current number of successful invitations',
    inviteShow: 'View',
    inviteAddress: 'invitee address',
    inviteTips1: 'After filling in your invitation code, MINT users who are successful will be counted as successful invitations',
    inviteTips2: 'Increased probability of receiving airdrops',
    remainingTime: 'left to start',
    tipsText1: 'After July 17, reverse casting can be carried out at the original price on the official website',
    tipsText2: 'Reverse casting is now available on the official website at the original price',
    rights: 'rights and interests',
    info1: '1. After Mint is opened, the airdrop deadline is May 31. 100 holders will be randomly selected every day, and each holder will airdrop 100 BKB to the cloud wallet (repeatable)',
    info2: '2. You must create a cloud wallet to receive the airdrop',
    info3: '3. The more people invited, the higher the probability of receiving the airdrop',
    info4: 'Number of invitees 0 - 0% lucky bonus',
    info5: 'Number of invitees 1 - 20% lucky bonus ',
    info6: 'Number of invitees 2 - 50% lucky bonus',
    info7: '3 or more invites - 100% lucky bonus',
    info8: 'Note: The higher the lucky value, the greater the chance of getting airdrops',
    whiteTitle: 'Whitelist Privileges',
    whiteTips1: '1. Whitelisted users will open Mint on May 17',
    whiteTips2: '2. Non-whitelisted users will open Mint on May 19',
    whiteTips3: '3. The purchase limit for whitelisted users is 10',
    whiteTips4: '4. The purchase limit for non-whitelisted users is 5',
    whiteTips5: '1. Users who have traded using Swap',
    whiteTips6: '2. Users who have traded through the NFT market',
    whiteTips7: 'You are a whitelisted privileged user',
    whiteTips8: 'You are not currently a whitelisted user',
    whiteTips9: 'How to become a whitelist:',
    whiteTips10: '3. Get things done via Twitter',
    airdropTitle: 'Airdrop winning address',
    airdropAmount: 'Total %{amount} addresses',
    airdropOpen: 'View All',
    airdropTips1: 'Each of the following addresses gets',
    airdropTips2: 'award',
    sell: 'public offering',
    welfare1: 'First round of benefits',
    welfare2: 'Turn on reverse casting',
    welfare3: 'Second round of benefits',
    welfare4: 'Enable achievements',
    welfare5: 'More benefits',
    welfare6: 'Stay tuned',
    matters: 'Precautions',
    mattersTips1: '1. Sign up for BitKeep and connect to the site via Wallet Connect.',
    mattersTips2: '2. Make sure you have enough MATIC in your wallet to cover the total cost including gas.',
    mattersTips3: '3. Click on the Mint button and you will be prompted to sign the transaction and a gas fee will be incurred.',
    mattersTips4: '4. After purchase, your NFT will appear in your wallet and can be traded through BitKeep Market and Opensea!',
    awardTitle: 'Congratulations! You got the airdrop reward',
    awardAddress: 'Winning wallet address',
    meltTitle1: 'Select NFT for MELT',
    meltTitle2: 'NFT to be MELT',
    meltValue: 'estimated to be available',
    mintAmount: 'Purchase quantity',
    mintPayment: 'To be paid',
    format: '{dd}days{hh}hours{mm}minutes{ss}seconds',
    iknow: 'Got it',
    pasteTips1: 'No content to paste',
    pasteTips2: 'Your browser does not support the paste function',
    submitSuccess: 'Fill in successfully',
    signCancel: 'You cancel the signature',
    switchChain1: 'Please switch to Matic mainnet',
    switchChain2: 'Got it, go switch',
    faild: ' Fail',
    success: ' Success',
    noNft: 'There is currently no NFT that can MELT',
    mentAlert: 'MELT quantity cannot be less than 0',
    mintAlert: 'The number of Mint cannot be less than 1',
    whiteAlert1: 'The number of mint users in the whitelist cannot be greater than 10',
    whiteAlert2: 'The number of Mints for non-whitelisted users cannot be greater than 5',
    loading: 'Confirming on the blockchain, please wait...',
    contractAddress: 'Contract address',
    invitationError: 'Invitation code error',
    mintTitle1: "MINT's NFT",
    loadingtitle2: "View in browser"
  }
};

/***/ }),
/* 70 */
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
/* 71 */
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
    noRecord: '覚えてない',
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
/* 72 */
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
    noRecord: '기억이 안나',
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
/* 73 */
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
    noRecord: 'Tôi không nhớ',
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
/* 74 */
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
      rules: ["Each blind box contains a random number of BKB", `Share this link to invite your friends, and ask them to fill in valid BitKeep Cloud Wallet address (Click the link to create a BitKeep Cloud Wallet <a href='https://bit.ly/BitKeepCloudWallet' class='color_red'>https://bit.ly/BitKeepCloudWallet</a> )`, "With one friends manage to make contribution, the blind box will unlock, and you and your friends will get a share of the BKB inside.", "These BKB will be deposited in your Cloud Wallet. If you have’t activated your Cloud Wallet, please tap Cloud Wallet in the NAV bar to activate it."],
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
    noRecord: 'no record',
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
  },
  polygon: {
    telegramTitle: "Bitkeep 官方 Telegram账号",
    twitterTitle: "Bitkeep 官方 推特账号",
    YouTubeTitle: "Bitkeep 官方 YouTube账号",
    MediumTitle: "Bitkeep 官方 Medium账号",
    GitHubTitle: "Bitkeep 官方 GitHub账号",
    DiscordTitle: "Bitkeep 官方 Discord 账号",
    instagramTitle: "Bitkeep 官方 instagram 账户",
    facebookTitle: "Bitkeep 官方 facebook账户",
    connectWallet: '连接钱包',
    title: 'Genesis NFT Sale',
    enterCode: '填写邀请码',
    enterCode2: '输入邀请码',
    InvitationSucceeded: "填写成功",
    paste: '粘贴',
    currentAddress: '当前钱包地址',
    confirm: '确认',
    inviteFriends: '邀请好友 领取空投',
    inviteCode: '我的邀请码',
    inviteCount: '当前邀请成功人数',
    inviteShow: '查看被邀请人',
    inviteAddress: '被邀请人地址',
    inviteTips1: '填入你的邀请码后 MINT 成功的用户算作邀请成功',
    inviteTips2: '领取空投概率提升',
    remainingTime: '距离开始还剩',
    tipsText1: '7月17日后，可在官网以原价进行反向铸造',
    tipsText2: '现在可在官网以原价进行反向铸造',
    rights: '权益',
    info1: '1.Mint 开启后,空投截至时间是5月31日，每日随机挑选 100 位持有者，每位持有者空投 100 枚 BKB 到云钱包（可重复）',
    info2: '2.必须创建云钱包后才能领取空投',
    info3: '3.邀请人数越多，领取空投概率越大:',
    info4: '邀请人数 0 —— 0% 幸运加成',
    info5: '邀请人数 1 —— 20% 幸运加成 ',
    info6: '邀请人数 2 —— 50% 幸运加成',
    info7: '邀请人数 3 及以上 —— 100% 幸运加成',
    info8: '注：幸运值越高，获得空投几率越大',
    whiteTitle: '白名单特权',
    whiteTips1: '1.白名单用户在5月17日开启Mint',
    whiteTips2: '2.非白名单用户在5月19日开启Mint',
    whiteTips3: '3.白名单用户购买上限为10个',
    whiteTips4: '4.非白名单用户购买上限为5个',
    whiteTips5: '1.使用Swap进行交易过的用户',
    whiteTips6: '2.通过NFT交易市场交易过的用户',
    whiteTips7: '您是白名单特权用户',
    whiteTips8: '您暂时不是白名单用户',
    whiteTips9: '怎样成为白名单：',
    whiteTips10: '3.通过Twitter完成任务',
    airdropTitle: '空投获奖地址',
    airdropAmount: '共%{amount}个地址',
    airdropOpen: '查看全部',
    airdropTips1: '以下每个地址均获得',
    airdropTips2: '奖励',
    sell: '开始发售',
    welfare1: '第一轮福利',
    welfare2: '开启反向铸造',
    welfare3: '第二轮福利',
    welfare4: '开启成就',
    welfare5: '更多福利',
    welfare6: '敬请期待',
    matters: '注意事项',
    mattersTips1: '1. 注册 BitKeep 并通过 Wallet Connect 连接该网站。',
    mattersTips2: '2. 确保你的钱包里有足够的 MATIC 来支付包括汽油费在内的总成本。',
    mattersTips3: '3. 单击铸币按钮，系统将提示您签署交易，并产生汽油费用。',
    mattersTips4: '4. 购买后，您的 NFT 将出现在您的钱包中，且可以通过 BitKeep Market 和 Opensea 进行交易！',
    awardTitle: '恭喜！你获得了空投奖励',
    awardAddress: '获奖钱包地址',
    meltTitle1: '选择 MELT 的 NFT',
    meltTitle2: '待 MELT 的 NFT',
    meltValue: '预估可获得',
    mintAmount: '购买数量',
    mintPayment: '待支付',
    format: '{dd}天{hh}小时{mm}分钟{ss}秒',
    iknow: '知道了',
    pasteTips1: '没有内容可以粘贴',
    pasteTips2: '您的浏览器不支持粘贴功能',
    submitSuccess: '填写成功',
    signCancel: '你取消了签名',
    switchChain1: '请切换到Matic主网',
    switchChain2: '知道了,去切换',
    faild: '失败',
    success: '成功',
    noNft: '暂时没有可以MELT的NFT',
    mentAlert: 'MELT数量不能小于0',
    mintAlert: 'Mint数量不能小于1',
    whiteAlert1: '白名单用户Mint数量不能大于10个',
    whiteAlert2: '非白名单用户Mint数量不能大于5个',
    loading: '区块链上确认中，请稍等...',
    contractAddress: '合约地址',
    invitationError: '邀请码错误',
    mintTitle1: "MINT 的 NFT",
    loadingtitle2: "去浏览器中查看"
  }
};

/***/ }),
/* 75 */
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
/* 76 */
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
/* 77 */
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
var external_node_fetch_ = __webpack_require__(41);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['initRouter'] = __webpack_require__(46);
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
        "HOST_API": "http://ms.operation:8898",
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
var external_vue_meta_ = __webpack_require__(42);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(16);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(14);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(17);
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






const _e41d0026 = () => interopDefault(__webpack_require__.e(/* import() | pages/mint_nft_token/index */ 66).then(__webpack_require__.bind(null, 285)));

const _8d955638 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/airdrop/index */ 28).then(__webpack_require__.bind(null, 286)));

const _7991ce61 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/index */ 33).then(__webpack_require__.bind(null, 287)));

const _42139a58 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/index */ 41).then(__webpack_require__.bind(null, 288)));

const _75d4b43e = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/cbkbexchange/index */ 44).then(__webpack_require__.bind(null, 289)));

const _4b864767 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/index */ 47).then(__webpack_require__.bind(null, 290)));

const _087c79ac = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/nftLottery/index */ 51).then(__webpack_require__.bind(null, 291)));

const _01364d05 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/index */ 53).then(__webpack_require__.bind(null, 292)));

const _588603a6 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/index */ 57).then(__webpack_require__.bind(null, 293)));

const _06c441fc = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/index */ 62).then(__webpack_require__.bind(null, 294)));

const _665f06f0 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/detail/index */ 30).then(__webpack_require__.bind(null, 283)));

const _5ff1b3c9 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/download */ 31).then(__webpack_require__.bind(null, 295)));

const _76a5a12b = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/firendList */ 32).then(__webpack_require__.bind(null, 296)));

const _d0a34542 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/list */ 34).then(__webpack_require__.bind(null, 297)));

const _330c44be = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/stepDetail */ 35).then(__webpack_require__.bind(null, 298)));

const _c6d71460 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/copy */ 38).then(__webpack_require__.bind(null, 173)));

const _ce9a7f8a = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/detail */ 39).then(__webpack_require__.bind(null, 299)));

const _ceef5f1c = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/download */ 40).then(__webpack_require__.bind(null, 300)));

const _1af2a99e = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/inviteList */ 42).then(__webpack_require__.bind(null, 301)));

const _646c4557 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/rewardList */ 43).then(__webpack_require__.bind(null, 302)));

const _41623b77 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/RuleDetail */ 36).then(__webpack_require__.bind(null, 225)));

const _f223f22e = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/history */ 46).then(__webpack_require__.bind(null, 303)));

const _08b864d1 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/inviteRuleDetail */ 48).then(__webpack_require__.bind(null, 223)));

const _3dc86927 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/miningRule */ 49).then(__webpack_require__.bind(null, 304)));

const _5000d9da = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/protocol */ 50).then(__webpack_require__.bind(null, 221)));

const _c1a74070 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/mining/RuleDetail */ 45).then(__webpack_require__.bind(null, 222)));

const _67776b1f = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/drawluckly */ 52).then(__webpack_require__.bind(null, 305)));

const _1ce75073 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/inviteRuleDetail */ 54).then(__webpack_require__.bind(null, 306)));

const _1586ef2c = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/noviceBenefits/lotteryresults */ 55).then(__webpack_require__.bind(null, 307)));

const _29bd0ab1 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/addPool */ 56).then(__webpack_require__.bind(null, 308)));

const _60b5ae78 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/myPool */ 58).then(__webpack_require__.bind(null, 309)));

const _e79a0b18 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/protocol */ 59).then(__webpack_require__.bind(null, 226)));

const _3fe8cecc = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/staking/wallet */ 60).then(__webpack_require__.bind(null, 94)));

const _6a97b03e = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/history */ 61).then(__webpack_require__.bind(null, 310)));

const _698b145e = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/protocol */ 63).then(__webpack_require__.bind(null, 224)));

const _7d9b0de7 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/trading/tradingRule */ 64).then(__webpack_require__.bind(null, 311)));

const _6671e1a8 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindboxInvite/component/createPoster */ 37).then(__webpack_require__.bind(null, 219)));

const _66e20558 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/blindbox/detail/_id */ 29).then(__webpack_require__.bind(null, 312)));

const _6fd6c0af = () => interopDefault(__webpack_require__.e(/* import() | pages/article/detail/_id */ 65).then(__webpack_require__.bind(null, 313)));

const _3927d70e = () => interopDefault(__webpack_require__.e(/* import() | pages/_id */ 27).then(__webpack_require__.bind(null, 314)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/mint_nft_token",
    component: _e41d0026,
    name: "mint_nft_token"
  }, {
    path: "/activity/airdrop",
    component: _8d955638,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _7991ce61,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _42139a58,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _75d4b43e,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _4b864767,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _087c79ac,
    name: "activity-nftLottery"
  }, {
    path: "/activity/noviceBenefits",
    component: _01364d05,
    name: "activity-noviceBenefits"
  }, {
    path: "/activity/staking",
    component: _588603a6,
    name: "activity-staking"
  }, {
    path: "/activity/trading",
    component: _06c441fc,
    name: "activity-trading"
  }, {
    path: "/activity/blindbox/detail",
    component: _665f06f0,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _5ff1b3c9,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _76a5a12b,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _d0a34542,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _330c44be,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _c6d71460,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _ce9a7f8a,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _ceef5f1c,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _1af2a99e,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _646c4557,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _41623b77,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _f223f22e,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _08b864d1,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _3dc86927,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _5000d9da,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _c1a74070,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/noviceBenefits/drawluckly",
    component: _67776b1f,
    name: "activity-noviceBenefits-drawluckly"
  }, {
    path: "/activity/noviceBenefits/inviteRuleDetail",
    component: _1ce75073,
    name: "activity-noviceBenefits-inviteRuleDetail"
  }, {
    path: "/activity/noviceBenefits/lotteryresults",
    component: _1586ef2c,
    name: "activity-noviceBenefits-lotteryresults"
  }, {
    path: "/activity/staking/addPool",
    component: _29bd0ab1,
    name: "activity-staking-addPool"
  }, {
    path: "/activity/staking/myPool",
    component: _60b5ae78,
    name: "activity-staking-myPool"
  }, {
    path: "/activity/staking/protocol",
    component: _e79a0b18,
    name: "activity-staking-protocol"
  }, {
    path: "/activity/staking/wallet",
    component: _3fe8cecc,
    name: "activity-staking-wallet"
  }, {
    path: "/activity/trading/history",
    component: _6a97b03e,
    name: "activity-trading-history"
  }, {
    path: "/activity/trading/protocol",
    component: _698b145e,
    name: "activity-trading-protocol"
  }, {
    path: "/activity/trading/tradingRule",
    component: _7d9b0de7,
    name: "activity-trading-tradingRule"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _6671e1a8,
    name: "activity-blindboxInvite-component-createPoster"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _66e20558,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _6fd6c0af,
    name: "article-detail-id"
  }, {
    path: "/:id?",
    component: _3927d70e,
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
  
  var style0 = __webpack_require__(47)
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
  "00c9a607"
  
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
  
  var style0 = __webpack_require__(48)
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
  "6b4f3d7b"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/vant/lib/index.css
var lib = __webpack_require__(49);

// EXTERNAL MODULE: ./assets/css/globle.scss
var globle = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=0f3e047e&
var defaultvue_type_template_id_0f3e047e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var defaultvue_type_template_id_0f3e047e_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=0f3e047e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({// components: {
  //   Header,
  //   Footer
  // }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_0f3e047e_render,
  defaultvue_type_template_id_0f3e047e_staticRenderFns,
  false,
  null,
  null,
  "276292c8"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/polygon/default.vue?vue&type=template&id=db7e3638&
var defaultvue_type_template_id_db7e3638_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"polygon"}},[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Nuxt')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_db7e3638_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/polygon/default.vue?vue&type=template&id=db7e3638&

// EXTERNAL MODULE: ./layouts/polygon/footer.vue
var footer = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/polygon/header.vue?vue&type=template&id=3ffa8a00&
var headervue_type_template_id_3ffa8a00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"polygon_header"},[_vm._ssrNode("<div class=\"container\"><div class=\"logo\"><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt></div> <div class=\"header_right\"><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt class=\"right_log\"> <div class=\"connect\">"+((!_vm.address)?("<span class=\"TTORegular\">连接钱包</span>"):("<span class=\"TTORegular\">"+_vm._ssrEscape(_vm._s(_vm._f("blurredDisplay")(_vm.address)))+"</span>"))+"</div></div></div>")])}
var headervue_type_template_id_3ffa8a00_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/polygon/header.vue?vue&type=template&id=3ffa8a00&

// CONCATENATED MODULE: ./filter/filter.js
 //合约地址模糊展示

external_vue_default.a.filter('blurredDisplay', function (value) {
  let res = value.toString();
  return res.slice(0, 4) + '...' + res.slice(-4);
}); //日期格式过滤器

external_vue_default.a.filter("timeFilter", function (value) {
  if (value == 0) {
    return "--";
  } else {
    var oDate = new Date(value),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate();

    if (oMonth < 10) {
      oMonth = "0" + oMonth;
    }

    if (oDay < 10) {
      oDay = "0" + oDay;
    }

    return oMonth + '-' + oDay + '-' + oYear;
  }
});
// EXTERNAL MODULE: ./utils/wallet.js
var wallet = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/polygon/header.vue?vue&type=script&lang=js&
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


/* harmony default export */ var headervue_type_script_lang_js_ = ({
  data() {
    return {
      address: ""
    };
  },

  async mounted() {
    this.connect();
  },

  methods: {
    async connect() {
      if (wallet["a" /* wallet */].isConnected()) {
        const address = await wallet["a" /* wallet */].selectedAddress();
        this.address = address;
      } else {
        this.address = await wallet["a" /* wallet */].connect();
      }
    }

  }
});
// CONCATENATED MODULE: ./layouts/polygon/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/polygon/header.vue



function header_injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var header_component = Object(componentNormalizer["a" /* default */])(
  polygon_headervue_type_script_lang_js_,
  headervue_type_template_id_3ffa8a00_render,
  headervue_type_template_id_3ffa8a00_staticRenderFns,
  false,
  header_injectStyles,
  null,
  "509ae238"
  
)

/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/polygon/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var polygon_defaultvue_type_script_lang_js_ = ({
  components: {
    Header: header,
    Footer: footer["default"]
  }
});
// CONCATENATED MODULE: ./layouts/polygon/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_polygon_defaultvue_type_script_lang_js_ = (polygon_defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/polygon/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var polygon_default_component = Object(componentNormalizer["a" /* default */])(
  layouts_polygon_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_db7e3638_render,
  defaultvue_type_template_id_db7e3638_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "7ec1000c"
  
)

/* harmony default export */ var polygon_default = (polygon_default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js












const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_polygon/default": sanitizeComponent(polygon_default),
  "_polygon/footer": sanitizeComponent(footer["default"]),
  "_polygon/header": sanitizeComponent(header)
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
  store_store = normalizeRoot(__webpack_require__(65), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(15), 'modules/local.js'); // If the environment supports hot reloading...
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
  BlindboxBlindButton: () => __webpack_require__.e(/* import() | components/blindbox-blind-button */ 2).then(__webpack_require__.bind(null, 228)).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindStrategy: () => __webpack_require__.e(/* import() | components/blindbox-blind-strategy */ 3).then(__webpack_require__.bind(null, 315)).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindTimeText: () => __webpack_require__.e(/* import() | components/blindbox-blind-time-text */ 4).then(__webpack_require__.bind(null, 130)).then(c => wrapFunctional(c.default || c)),
  BlindboxCreatePoster: () => __webpack_require__.e(/* import() | components/blindbox-create-poster */ 5).then(__webpack_require__.bind(null, 229)).then(c => wrapFunctional(c.default || c)),
  BlindboxTitleImage: () => __webpack_require__.e(/* import() | components/blindbox-title-image */ 6).then(__webpack_require__.bind(null, 227)).then(c => wrapFunctional(c.default || c)),
  Activity: () => __webpack_require__.e(/* import() | components/activity */ 1).then(__webpack_require__.bind(null, 220)).then(c => wrapFunctional(c.default || c)),
  CommonCVueCountdown: () => __webpack_require__.e(/* import() | components/common-c-vue-countdown */ 8).then(__webpack_require__.bind(null, 98)).then(c => wrapFunctional(c.default || c)),
  CommonHeader: () => __webpack_require__.e(/* import() | components/common-header */ 9).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c)),
  Common: () => __webpack_require__.e(/* import() | components/common */ 7).then(__webpack_require__.bind(null, 93)).then(c => wrapFunctional(c.default || c)),
  PolygonAirdropAddressCard: () => __webpack_require__.e(/* import() | components/polygon-airdrop-address-card */ 10).then(__webpack_require__.bind(null, 214)).then(c => wrapFunctional(c.default || c)),
  PolygonAirdropAwardCard: () => __webpack_require__.e(/* import() | components/polygon-airdrop-award-card */ 11).then(__webpack_require__.bind(null, 215)).then(c => wrapFunctional(c.default || c)),
  PolygonCVueCountdown: () => __webpack_require__.e(/* import() | components/polygon-c-vue-countdown */ 12).then(__webpack_require__.bind(null, 211)).then(c => wrapFunctional(c.default || c)),
  PolygonCountdown: () => __webpack_require__.e(/* import() | components/polygon-countdown */ 13).then(__webpack_require__.bind(null, 316)).then(c => wrapFunctional(c.default || c)),
  PolygonInvitedCard: () => __webpack_require__.e(/* import() | components/polygon-invited-card */ 14).then(__webpack_require__.bind(null, 216)).then(c => wrapFunctional(c.default || c)),
  PolygonMent: () => __webpack_require__.e(/* import() | components/polygon-ment */ 15).then(__webpack_require__.bind(null, 213)).then(c => wrapFunctional(c.default || c)),
  PolygonMint: () => __webpack_require__.e(/* import() | components/polygon-mint */ 16).then(__webpack_require__.bind(null, 212)).then(c => wrapFunctional(c.default || c)),
  PolygonMintSuccessCard: () => __webpack_require__.e(/* import() | components/polygon-mint-success-card */ 17).then(__webpack_require__.bind(null, 218)).then(c => wrapFunctional(c.default || c)),
  PolygonWhitelistcard: () => __webpack_require__.e(/* import() | components/polygon-whitelistcard */ 18).then(__webpack_require__.bind(null, 217)).then(c => wrapFunctional(c.default || c)),
  Trading: () => __webpack_require__.e(/* import() | components/trading */ 19).then(__webpack_require__.bind(null, 134)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutCanvasPoster: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-canvas-poster */ 21).then(__webpack_require__.bind(null, 168)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutGradient: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-gradient */ 22).then(__webpack_require__.bind(null, 100)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutHeader: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-header */ 23).then(__webpack_require__.bind(null, 317)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayout: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout */ 20).then(__webpack_require__.bind(null, 284)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutPainter: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-painter */ 24).then(__webpack_require__.bind(null, 132)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutQrcode: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-qrcode */ 25).then(__webpack_require__.bind(null, 99)).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutUtil: () => __webpack_require__.e(/* import() | components/vue-create-poster-layout-util */ 26).then(__webpack_require__.bind(null, 133)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(43);
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
var _nuxt_empty = __webpack_require__(9);

// EXTERNAL MODULE: external "debug"
var external_debug_ = __webpack_require__(5);

// EXTERNAL MODULE: ./locales/index.js + 1 modules
var locales = __webpack_require__(6);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(1);

// CONCATENATED MODULE: ./plugins/common/init.js

 // import VueCanvasPoster from 'vue-canvas-poster'


external_vue_default.a.prototype.$bus = new external_vue_default.a();
const log =  true ? (...arg) => {
  console.log("bit:init", ...arg);
} : undefined; // import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)


const init_components = [external_vant_["Popup"], external_vant_["Dialog"], external_vant_["Toast"], external_vant_["Icon"], external_vant_["Image"], external_vant_["Loading"], external_vant_["List"], external_vant_["Empty"], external_vant_["CountDown"], external_vant_["PullRefresh"], external_vant_["Progress"], external_vant_["ImagePreview"], // Badge,
external_vant_["Overlay"], external_vant_["Field"], external_vant_["Form"], external_vant_["Skeleton"], external_vant_["Button"], external_vant_["Col"], external_vant_["Row"], external_vant_["Tab"], external_vant_["Tabs"], external_vant_["NoticeBar"], external_vant_["Grid"], external_vant_["GridItem"], external_vant_["Swipe"], external_vant_["SwipeItem"] // Lazyload
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

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\client\\bitkeep.js (mode: 'client')

 // Source: ..\\plugins\\client\\flexible.js (mode: 'client')

 // Source: ..\\plugins\\common\\init.js (mode: 'all')

 // Source: ..\\plugins\\client\\sessionStorage.js (mode: 'client')

 // Source: ..\\plugins\\client\\firebase.js (mode: 'client')

 // Source: ..\\plugins\\axios.js (mode: 'all')
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
      "title": "BitKeep: The Best Decentralized Multi-chain Crypto Wallet",
      "htmlAttrs": {
        "lang": "en"
      },
      "bodyAttrs": {
        "class": "theme-dark"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, user-scalable=no"
      }, {
        "name": "description",
        "content": "BitKeep is the best decentralized multi-chain crypto wallet, providing 40+ main chains and 45000+ crypto assets and 10,000+ DApps to global users."
      }, {
        "name": "keywords",
        "content": "bitkeep,wallet,ethereum,bitcoin,eos,exchange,dapp,imtoken,kcash,cobo,bitkeep钱包,比特币,以太坊,数字钱包,币安,火币,Okex,binance,huobi,okex"
      }, {
        "hid": "google-site-verification",
        "name": "google-site-verification",
        "content": "mohvtRqx4881-yk3PPB1HGwrE4jNIUehtro0H4E3HVw"
      }, {
        "hid": "robots",
        "name": "robots",
        "content": "robots"
      }, {
        "property": "og:title",
        "content": "BitKeep: The Best Decentralized Multi-chain Crypto Wallet"
      }, {
        "property": "og:description",
        "content": "BitKeep is the best decentralized multi-chain crypto wallet, providing 40+ main chains and 45000+ crypto assets and 10,000+ DApps to global users."
      }, {
        "property": "twitter:title",
        "content": "BitKeep: The Best Decentralized Multi-chain Crypto Wallet"
      }, {
        "property": "twitter:description",
        "content": "BitKeep is the best decentralized multi-chain crypto wallet, providing 40+ main chains and 45000+ crypto assets and 10,000+ DApps to global users."
      }, {
        "property": "og:url",
        "content": "https:\u002F\u002Fnews.bitkeep.biz"
      }, {
        "property": "og:type",
        "content": "website"
      }, {
        "property": "og:image",
        "content": "https:\u002F\u002Fcdn.bitkeep.vip\u002Fu_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      }, {
        "property": "og:image:alt",
        "content": "BitKeep, a Best Crpto Wallet"
      }, {
        "property": "og:site_name",
        "content": "BitKeep"
      }, {
        "property": "twitter:image",
        "content": "https:\u002F\u002Fcdn.bitkeep.vip\u002Fu_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      }, {
        "property": "twitter:image:src",
        "content": "https:\u002F\u002Fcdn.bitkeep.vip\u002Fu_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      }, {
        "property": "twitter:image:alt",
        "content": "BitKeep"
      }, {
        "property": "twitter:card",
        "content": "summary_large_image"
      }, {
        "property": "twitter:image",
        "content": "https:\u002F\u002Fcdn.bitkeep.vip\u002Fu_b_26e281b0-a509-11ec-a3eb-f758fa002ae8.png"
      }, {
        "property": "twitter:site",
        "content": "https:\u002F\u002Fnews.bitkeep.biz"
      }],
      "link": [{
        "rel": "shortcut icon",
        "href": "https:\u002F\u002Fcdn.bitkeep.vip\u002Fu_b_69b66a00-a046-11ec-a3eb-f758fa002ae8.png"
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
/* 78 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("qrcode");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("html2canvas");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@finpo/vue2-recaptcha-invisible");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map