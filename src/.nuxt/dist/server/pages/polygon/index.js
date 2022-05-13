exports.ids = [65,8,10,11,13,14,15,16,17];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);



 // const requestlog = debug('bit-activity-request')
// const responselog = debug('bit-activity-response')
// const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL

const requestlog =  false ? undefined : Object(debug__WEBPACK_IMPORTED_MODULE_3__["debug"])('bit-activity-request');
const responselog =  false ? undefined : Object(debug__WEBPACK_IMPORTED_MODULE_3__["debug"])('bit-activity-response');
const host_user_instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "en",
    currency: "",
    brand: "",
    os: "",
    package: "",
    clientVersion: 1,
    im: ""
  }
});
host_user_instance.interceptors.request.use(function (config) {
  requestlog('requestlog:', config);

  if (false) {}

  return config;
}, function (error) {
  return Promise.resolve({
    status: 1
  });
}); // Add a response interceptor

host_user_instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  responselog('responselog:', error); // Do omething with response error

  let message = '网路开了小差';

  if (false) {}

  return Promise.resolve({
    status: 1,
    data: message
  });
});
const USER_API = {
  //盲盒列表
  mBoxList: (data, headers = {}) => host_user_instance.get("user/activity/mBoxList", {
    params: data,
    headers
  }),
  // 打开盲盒÷
  openMBox: (data, headers = {}) => host_user_instance.get("user/activity/openMBox", {
    params: data
  }),
  //盲盒助力提交
  helpMBox: (data, headers = {}) => host_user_instance.get("user/activity/helpMBox", {
    params: data
  }),
  //助力邀请好友列表
  userInviteList: (data, headers = {}) => host_user_instance.get("user/activity/inviteList", {
    params: data
  }),
  mBoxDetail: (data, headers = {}) => host_user_instance.get("user/activity/mBoxDetail", {
    params: data
  }),
  //cbkb兑换模块
  getCbkbSwapInfo: (data, headers = {}) => host_user_instance.get("user/cloudwallet/getCbkbSwapInfo", {
    params: data
  }),
  swapBkb: (data, headers = {}) => host_user_instance.get("user/cloudwallet/swapBkb", {
    params: data
  }),
  //BKB空投
  getAirDropCount: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDropCount", data),
  getAirDrop: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDrop", data),
  // 交易挖矿
  miningInfo: (data, headers = {}) => host_user_instance.post("swap/mining/info", data),
  historyPhase: (data, headers = {}) => host_user_instance.post("swap/mining/historyPhase", data),
  receiveAward: (data, headers = {}) => host_user_instance.post("swap/mining/receiveAward", data),
  // 邀请好友
  getInviteList: (data, headers = {}) => host_user_instance.post('user/friendship/getInviteList', data),
  certifyFriendship: (data, headers = {}) => host_user_instance.post('user/friendship/certifyFriendship', data),
  activityDoneRewardList: (data, headers = {}) => host_user_instance.post('swap/mining/activityDoneRewardList', data),
  //质押bkb
  // 质押池列表
  poolList: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/poolList', data),
  // 我的质押池列表
  myPool: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/myPool', data),
  // 历史质押池列表
  stakeHistory: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/stakeHistory', data),
  // 取消质押
  receiveStakingReward: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/receiveStakingReward', data),
  //确认质押
  staking: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/staking', data),
  //获取token
  handleGetToken: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/getToken', data),
  //trading 交易大赛
  tradingGetList: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/getList', data),
  //待领取
  tradingWaitClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/waitClaim', data),
  //领取
  tradingClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/claim', data),
  //历史汇总
  tradingSummary: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/summary', data),
  //历史list
  tradingHistory: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/history', data),
  // 新手福利
  welfareSignIn: (data, headers = {}) => host_user_instance.post('user/welfare/signIn', data),
  // 签到
  getRewardDetail: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardDetail', data),
  //每日抽奖详情
  getSignInDetailByUser: (data, headers = {}) => host_user_instance.post('user/welfare/getSignInDetailByUser', data),
  // 获取某人的签到详情
  getRewardResult: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardResult', data),
  // 获取抽奖结果
  // getRewardDetail: (data,headers={}) => host_user_instance.post('user/welfare/getRewardDetail',data), // 每日抽奖详情页
  pushPapersIn: (data, headers = {}) => host_user_instance.post('user/welfare/pushPapersIn', data),
  // 立即投入
  getJoinTeleJob: (data, headers = {}) => host_user_instance.post('user/welfare/getJoinTeleJob', data),
  // 加入电报
  getFirstSwapJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirstSwapJob', data),
  // swap首次交易
  getFirst50UJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirst50UJob', data),
  // 领取50u
  newUserRewardJobs: (data, headers = {}) => host_user_instance.post('user/welfare/newUserRewardJobs', data),
  // 新手任务
  // NFTMint
  //默认兑换列表
  nftMintGetInfo: (data, headers = {}) => host_user_instance.post("/operation/nftmint/getInfo", data),
  //建立邀请关系
  nftMintInvite: (data, headers = {}) => host_user_instance.post("/operation/nftmint/invite", data),
  //获取TX
  buildNftMintTxs: (data, headers = {}) => host_user_instance.post("/operation/nftmint/buildNftMintTxs", data),
  //签名token
  nftMintGetToken: (data, headers = {}) => host_user_instance.post("/operation/nftmint/getToken", data),
  //获取空头获奖列表
  nftMintLotteryList: (data, headers = {}) => host_user_instance.post("/operation/nftmint/LotteryList", data),
  //退款TX
  nftMintbuildNftMeltTxs: (data, headers = {}) => host_user_instance.post("/operation/nftmint/buildNftMeltTxs", data),
  //获取持有的NTT列表
  nftMintnftList: (data, headers = {}) => host_user_instance.post("/operation/nftmint/nftList", data),
  //查看Mint的广播状态
  nftMintcheckTransaction: (data, headers = {}) => host_user_instance.post("/operation/nftmint/checkTransaction", data)
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("365d89f2", content, true, context)
};

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Py_bg.47f92ee.png";

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/btnBg5.292a0ff.png";

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_c_vue_countdown_vue_vue_type_style_index_0_id_ce47b7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cuntdown[data-v-ce47b7d2] {\n  display: inline-block;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/c-vue-countdown.vue?vue&type=template&id=ce47b7d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.hidden)?_c('div',{staticClass:"cuntdown",domProps:{"innerHTML":_vm._s(_vm.pareStr)}},[]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue?vue&type=template&id=ce47b7d2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/c-vue-countdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
const conversionRate = {
  ss: 1000,
  mm: 1000 * 60,
  hh: 1000 * 60 * 60,
  dd: 1000 * 60 * 60 * 24,
  mn: 1000 * 60 * 60 * 24
};
const REG = {
  all: /\{(dd|hh|mm|ss|ms){1}\}/gi,
  ms: /\{(ms){1}\}/gi,
  ss: /\{(ss){1}\}/gi,
  mm: /\{(mm){1}\}/gi,
  hh: /\{(hh){1}\}/gi,
  dd: /\{(dd){1}\}/gi,
  mn: /\{(mn){1}\}/gi,
  yy: /\{(yy){1}\}/gi
};
/* harmony default export */ var c_vue_countdownvue_type_script_lang_js_ = ({
  name: "cuntdown",
  props: {
    hidden: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: "{yy}年{mn}月{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒" // default: "{dd}天{hh}小时{mm}分钟{ss}秒{ms}毫秒"

    },
    startTime: {
      type: Number || String,
      default: new Date().getTime()
    },
    endTime: {
      type: Number || String,
      default: new Date().getTime()
    }
  },

  data() {
    return {
      timer: null,
      stepTime: 0
    };
  },

  watch: {
    stepTime(val) {
      const date = {
        ms: this.ms,
        ss: this.ss,
        mm: this.mm,
        hh: this.hh,
        dd: this.dd
      };
      if (val <= 0) return this.$emit("end", date);
      this.$emit("change", date);
    },

    startTime() {
      this.stepTime = 0;
      this.init();
    },

    endTime() {
      this.stepTime = 0;
      this.init();
    }

  },
  computed: {
    options_show() {
      return {
        ms: REG.ms.test(this.format),
        ss: REG.ss.test(this.format),
        mm: REG.mm.test(this.format),
        hh: REG.hh.test(this.format),
        dd: REG.dd.test(this.format),
        mn: REG.mn.test(this.format),
        yy: REG.yy.test(this.format)
      };
    },

    ms() {
      return Math.floor(this.stepTime % conversionRate.ss);
    },

    ss() {
      // return Math.floor(this.stepTime % conversionRate.mm);
      return this.options_show.mm ? Math.floor(this.stepTime % conversionRate.mm / conversionRate.ss) : Math.floor(this.stepTime / conversionRate.ss);
    },

    mm() {
      return this.options_show.hh ? Math.floor(this.stepTime % conversionRate.hh / conversionRate.mm) : Math.floor(this.stepTime / conversionRate.mm);
    },

    hh() {
      return this.options_show.dd ? Math.floor(this.stepTime % conversionRate.dd / conversionRate.hh) : Math.floor(this.stepTime / conversionRate.hh);
    },

    dd() {
      return this.options_show.mn ? this.diff.day : Math.floor(this.stepTime / conversionRate.dd); // return Math.floor(this.stepTime / conversionRate.dd);
    },

    mn() {
      const dy = this.diff.year > 0 ? this.diff.year : 0;
      const dm = this.diff.month > 0 ? this.diff.month : 0;
      return this.options_show.yy ? dm : dy * 12 + dm - 1;
    },

    yy() {
      return this.diff.year > 0 ? this.diff.year : 0;
    },

    step_times() {
      return this.options_show.ms ? 100 : 1000;
    },

    pareStr() {
      const str = this.format.replace(REG.ms, this.zero(this.ms, 4)).replace(REG.ss, this.zero(this.ss)).replace(REG.mm, this.zero(this.mm)).replace(REG.hh, this.zero(this.hh)).replace(REG.dd, this.zero(this.dd)).replace(REG.mn, this.zero(this.mn)).replace(REG.yy, this.zero(this.yy));
      return str;
    },

    diff() {
      const endDate = new Date(this.endTime);
      const startDate = new Date(this.startTime);
      if (isNaN(endDate) || isNaN(startDate)) console.log("请输入有效范围和有效时间戳");
      const startYears = startDate.getFullYear();
      const startMonth = startDate.getMonth() + 1;
      const startDay = startDate.getDate();
      const endYears = endDate.getFullYear();
      const endMonth = endDate.getMonth() + 1;
      const endDay = endDate.getDate();
      return {
        endDate,
        startDate,
        startYears,
        endYears,
        startMonth,
        endMonth,
        endDay,
        startDay,
        day: endDay - startDay,
        month: endMonth - startMonth,
        year: endYears - startYears
      };
    }

  },
  methods: {
    init() {
      const step = this.step_times;
      clearInterval(this.timer);
      if (this.startTime >= this.endTime) return;
      this.stepTime = this.endTime - this.startTime;
      if (this.stepTime <= 0) return this.stepTime = 0;
      this.timer = setInterval(() => {
        this.stepTime = this.stepTime - step;

        if (this.stepTime <= 0) {
          this.stepTime = 0;
          clearInterval(this.timer);
        }
      }, step);
    },

    zero(val, len = 2) {
      const l = len - String(val).length;
      const zeros = l > 0 ? new Array(l).fill(0).join("") : "";
      return Number(val) < 10 ? zeros + val : val;
    }

  },
  filters: {
    filterZero(val) {
      return Number(val) < 10 ? "0" + val : val;
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_c_vue_countdownvue_type_script_lang_js_ = (c_vue_countdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/c-vue-countdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(118)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_c_vue_countdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ce47b7d2",
  "04530c03"
  
)

/* harmony default export */ var c_vue_countdown = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e583818c", content, true, context)
};

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("25ec5dd6", content, true, context)
};

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("529fc530", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f4cda1ae", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3c1a625d", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("75399422", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("48f25a7e", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mint_vue_vue_type_style_index_0_id_6b5cf2a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mint_vue_vue_type_style_index_0_id_6b5cf2a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mint_vue_vue_type_style_index_0_id_6b5cf2a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mint_vue_vue_type_style_index_0_id_6b5cf2a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mint_vue_vue_type_style_index_0_id_6b5cf2a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(116);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (max-width: 959px) {\n.Mintpopup[data-v-6b5cf2a0] {\n    width: 8.4rem;\n    height: 14.85rem;\n    background: #202024;\n    box-sizing: border-box;\n    border: 0.03rem solid #49494D;\n}\n.Mintpopup .Mintlogo[data-v-6b5cf2a0] {\n    width: 100%;\n    padding-top: 0.53rem;\n}\n.Mintpopup .Mintlogo img[data-v-6b5cf2a0] {\n    display: block;\n    width: 5.73rem;\n    height: 5.49rem;\n    margin: 0 auto;\n}\n.Mintpopup .PaymentBox[data-v-6b5cf2a0] {\n    width: 100%;\n}\n.Mintpopup .PaymentBox .title[data-v-6b5cf2a0] {\n    width: 100%;\n    text-align: center;\n    font-size: 0.37rem;\n    color: #fff;\n    margin-top: 0.53rem;\n    margin-bottom: 0.27rem;\n    font-weight: 400;\n}\n.Mintpopup .PaymentBox .PaymentNum[data-v-6b5cf2a0] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n.Mintpopup .PaymentBox .PaymentNum .subtraction[data-v-6b5cf2a0] {\n    font-size: 0.48rem;\n    color: #fff;\n    margin-right: 0.27rem;\n    cursor: pointer;\n    font-weight: 800;\n}\n.Mintpopup .PaymentBox .PaymentNum .number[data-v-6b5cf2a0] {\n    width: 1.07rem;\n    height: 1.07rem;\n    border: 0.03rem solid #49494D;\n    color: #09EFBD;\n    font-size: 1.07rem;\n    margin-right: 0.27rem;\n    text-align: center;\n    line-height: 1.07rem;\n    box-sizing: border-box;\n}\n.Mintpopup .PaymentBox .PaymentNum .Addition[data-v-6b5cf2a0] {\n    font-size: 0.48rem;\n    color: #fff;\n    cursor: pointer;\n    font-weight: 800;\n}\n.Mintpopup .PaymentBox .PaymentInfo[data-v-6b5cf2a0] {\n    width: 100%;\n    margin: 1.07rem 0;\n    box-sizing: border-box;\n}\n.Mintpopup .PaymentBox .PaymentInfo .title[data-v-6b5cf2a0] {\n    width: 100%;\n    font-size: 0.37rem;\n    color: #fff;\n    font-weight: 400;\n    text-align: center;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-6b5cf2a0] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-6b5cf2a0] :first-child {\n    font-size: 0.64rem;\n    color: #09EFBD;\n    font-weight: 400;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-6b5cf2a0] :last-child {\n    font-size: 0.37rem;\n    color: #fff;\n    font-weight: 400;\n}\n.Mintpopup .PaymentBox .mintSubmit[data-v-6b5cf2a0] {\n    width: 5.28rem;\n    height: 1.17rem;\n    line-height: 1.17rem;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 100% 100%;\n    margin: 0 auto;\n    text-align: center;\n    font-size: 0.53rem;\n    color: #fff;\n    cursor: pointer;\n}\n}\n@media screen and (min-width: 960px) {\n.Mintpopup[data-v-6b5cf2a0] {\n    width: 21.07rem;\n    height: 10.93rem;\n    background: #202024;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 1.07rem;\n    border: 0.03rem solid #49494D;\n}\n.Mintpopup .Mintlogo[data-v-6b5cf2a0] {\n    width: 100%;\n}\n.Mintpopup .Mintlogo img[data-v-6b5cf2a0] {\n    display: block;\n    width: 7.17rem;\n    height: 6.67rem;\n    margin: 0 auto;\n}\n.Mintpopup .PaymentBox[data-v-6b5cf2a0] {\n    width: 100%;\n}\n.Mintpopup .PaymentBox .title[data-v-6b5cf2a0] {\n    width: 100%;\n    text-align: center;\n    font-size: 0.37rem;\n    color: #fff;\n    margin-top: 0.53rem;\n    margin-bottom: 0.27rem;\n    font-weight: 400;\n}\n.Mintpopup .PaymentBox .PaymentNum[data-v-6b5cf2a0] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n.Mintpopup .PaymentBox .PaymentNum .subtraction[data-v-6b5cf2a0] {\n    font-size: 0.48rem;\n    color: #fff;\n    margin-right: 0.53rem;\n    cursor: pointer;\n    font-weight: 800;\n}\n.Mintpopup .PaymentBox .PaymentNum .number[data-v-6b5cf2a0] {\n    width: 1.07rem;\n    height: 1.07rem;\n    border: 0.03rem solid #49494D;\n    color: #09EFBD;\n    font-size: 1.07rem;\n    margin-right: 0.53rem;\n    text-align: center;\n    line-height: 1.07rem;\n    box-sizing: border-box;\n}\n.Mintpopup .PaymentBox .PaymentNum .Addition[data-v-6b5cf2a0] {\n    font-size: 0.48rem;\n    color: #fff;\n    cursor: pointer;\n    font-weight: 800;\n}\n.Mintpopup .PaymentBox .PaymentInfo[data-v-6b5cf2a0] {\n    width: 100%;\n    margin: 1.07rem 0;\n    box-sizing: border-box;\n}\n.Mintpopup .PaymentBox .PaymentInfo .title[data-v-6b5cf2a0] {\n    width: 100%;\n    font-size: 0.37rem;\n    color: #fff;\n    font-weight: 400;\n    text-align: center;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-6b5cf2a0] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-6b5cf2a0] :first-child {\n    font-size: 0.64rem;\n    color: #09EFBD;\n    font-weight: 400;\n}\n.Mintpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-6b5cf2a0] :last-child {\n    font-size: 0.37rem;\n    color: #fff;\n    font-weight: 400;\n}\n.Mintpopup .PaymentBox .mintSubmit[data-v-6b5cf2a0] {\n    width: 5.28rem;\n    height: 1.17rem;\n    line-height: 1.17rem;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 100% 100%;\n    margin: 0 auto;\n    text-align: center;\n    font-size: 0.53rem;\n    color: #fff;\n    cursor: pointer;\n}\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_360dd13a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_360dd13a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_360dd13a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_360dd13a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ment_vue_vue_type_style_index_0_id_360dd13a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(116);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (min-width: 960px) {\n.Mentpopup[data-v-360dd13a] {\n    width: 21.07rem;\n    height: 12.75rem;\n    background: #202024;\n    box-sizing: border-box;\n    padding: 0 1.07rem;\n    border: 0.03rem solid #49494D;\n}\n.Mentpopup .title[data-v-360dd13a] {\n    width: 100%;\n    font-size: 0.53rem;\n    color: #fff;\n    font-weight: 400;\n    text-align: center;\n    margin: 1.07rem 0;\n}\n.Mentpopup .MentList[data-v-360dd13a] {\n    display: flex;\n    justify-content: flex-start;\n    overflow: auto;\n}\n.Mentpopup .MentList .Mentlogo[data-v-360dd13a] {\n    width: 100%;\n    padding: 0.13rem;\n    margin-right: 0.53rem;\n    cursor: pointer;\n}\n.Mentpopup .MentList .Mentlogo .tokenId[data-v-360dd13a] {\n    width: 100%;\n    text-align: center;\n    font-size: 0.37rem;\n    color: #fff;\n    margin-top: 0.27rem;\n}\n.Mentpopup .MentList .Mentlogo img[data-v-360dd13a] {\n    display: block;\n    width: 4.61rem;\n    height: 4.29rem;\n    margin: 0 auto;\n}\n.Mentpopup .MentList .MentlogoActive[data-v-360dd13a] {\n    width: 100%;\n    border: 0.03rem solid #09EFBD;\n}\n.Mentpopup .PaymentBox[data-v-360dd13a] {\n    width: 100%;\n}\n.Mentpopup .PaymentBox .title[data-v-360dd13a] {\n    width: 100%;\n    text-align: center;\n    font-size: 0.37rem;\n    color: #fff;\n    margin-top: 0.53rem;\n    margin-bottom: 0.27rem;\n    font-weight: 400;\n}\n.Mentpopup .PaymentBox .PaymentInfo[data-v-360dd13a] {\n    width: 100%;\n    margin: 0.53rem 0;\n    box-sizing: border-box;\n}\n.Mentpopup .PaymentBox .PaymentInfo .title[data-v-360dd13a] {\n    width: 100%;\n    font-size: 0.37rem;\n    color: #fff;\n    font-weight: 400;\n    text-align: center;\n}\n.Mentpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-360dd13a] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.Mentpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-360dd13a] :first-child {\n    font-size: 0.64rem;\n    color: #09EFBD;\n    font-weight: 400;\n}\n.Mentpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-360dd13a] :last-child {\n    font-size: 0.37rem;\n    color: #fff;\n    font-weight: 400;\n}\n.Mentpopup .PaymentBox .MentSubmit[data-v-360dd13a] {\n    width: 5.28rem;\n    height: 1.17rem;\n    line-height: 1.17rem;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 100% 100%;\n    margin: 0 auto;\n    text-align: center;\n    font-size: 0.53rem;\n    color: #fff;\n    cursor: pointer;\n}\n}\n.Mentpopup[data-v-360dd13a] {\n  width: 8.4rem;\n  height: 14.85rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.Mentpopup .Mintlogo[data-v-360dd13a] {\n  width: 100%;\n  padding-top: 0.53rem;\n}\n.Mentpopup .Mintlogo img[data-v-360dd13a] {\n  display: block;\n  width: 5.73rem;\n  height: 5.49rem;\n  margin: 0 auto;\n}\n.Mentpopup .PaymentBox[data-v-360dd13a] {\n  width: 100%;\n}\n.Mentpopup .PaymentBox .title[data-v-360dd13a] {\n  width: 100%;\n  text-align: center;\n  font-size: 0.37rem;\n  color: #fff;\n  margin-top: 0.53rem;\n  margin-bottom: 0.27rem;\n  font-weight: 400;\n}\n.Mentpopup .PaymentBox .PaymentNum[data-v-360dd13a] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.Mentpopup .PaymentBox .PaymentNum .subtraction[data-v-360dd13a] {\n  font-size: 0.48rem;\n  color: #fff;\n  margin-right: 0.27rem;\n  cursor: pointer;\n  font-weight: 800;\n}\n.Mentpopup .PaymentBox .PaymentNum .number[data-v-360dd13a] {\n  width: 1.07rem;\n  height: 1.07rem;\n  border: 0.03rem solid #49494D;\n  color: #09EFBD;\n  font-size: 1.07rem;\n  margin-right: 0.27rem;\n  text-align: center;\n  line-height: 1.07rem;\n  box-sizing: border-box;\n}\n.Mentpopup .PaymentBox .PaymentNum .Addition[data-v-360dd13a] {\n  font-size: 0.48rem;\n  color: #fff;\n  cursor: pointer;\n  font-weight: 800;\n}\n.Mentpopup .PaymentBox .PaymentInfo[data-v-360dd13a] {\n  width: 100%;\n  margin: 1.07rem 0;\n  box-sizing: border-box;\n}\n.Mentpopup .PaymentBox .PaymentInfo .title[data-v-360dd13a] {\n  width: 100%;\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n}\n.Mentpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-360dd13a] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.Mentpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-360dd13a] :first-child {\n  font-size: 0.64rem;\n  color: #09EFBD;\n  font-weight: 400;\n}\n.Mentpopup .PaymentBox .PaymentInfo .PaymentContent[data-v-360dd13a] :last-child {\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n}\n.Mentpopup .PaymentBox .mintSubmit[data-v-360dd13a] {\n  width: 5.28rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 0.53rem;\n  color: #fff;\n  cursor: pointer;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_9c25b1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_9c25b1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_9c25b1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_9c25b1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_9c25b1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".AirdropAddressBox[data-v-9c25b1fc] {\n  width: 8.4rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.AirdropAddressBox .content[data-v-9c25b1fc] {\n  padding: 0.53rem 0.27rem 0 0.27rem;\n  box-sizing: border-box;\n}\n.AirdropAddressBox .content .title[data-v-9c25b1fc] {\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n  text-align: left;\n}\n.AirdropAddressBox .content .title span[data-v-9c25b1fc] {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.AirdropAddressBox .content .getTime[data-v-9c25b1fc] {\n  margin: 0.27rem 0;\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n}\n.AirdropAddressBox .content .list[data-v-9c25b1fc] {\n  width: 100%;\n  height: 12.11rem;\n  overflow: auto;\n}\n.AirdropAddressBox .content .list .Addresslist[data-v-9c25b1fc] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n.AirdropAddressBox .content .list .Addresslist .item[data-v-9c25b1fc] {\n  display: block;\n  width: 2.48rem;\n  height: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n  box-sizing: border-box;\n  margin: 0.27rem 0 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAwardCard_vue_vue_type_style_index_0_id_1a61c0d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAwardCard_vue_vue_type_style_index_0_id_1a61c0d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAwardCard_vue_vue_type_style_index_0_id_1a61c0d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAwardCard_vue_vue_type_style_index_0_id_1a61c0d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirdropAwardCard_vue_vue_type_style_index_0_id_1a61c0d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(116);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".AirdropAwardBox[data-v-1a61c0d6] {\n  width: 8.4rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.AirdropAwardBox .content[data-v-1a61c0d6] {\n  padding: 1.07rem 0.53rem 0.53rem;\n  box-sizing: border-box;\n}\n.AirdropAwardBox .content .title[data-v-1a61c0d6] {\n  font-size: 0.43rem;\n  font-weight: 400;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 0.27rem;\n}\n.AirdropAwardBox .content .BKB[data-v-1a61c0d6] {\n  margin-bottom: 0.53rem;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #09EFBD;\n  text-align: center;\n}\n.AirdropAwardBox .content .Walletaddress[data-v-1a61c0d6] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 1.07rem;\n}\n.AirdropAwardBox .content .Walletaddress .title[data-v-1a61c0d6] {\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n  text-align: center;\n}\n.AirdropAwardBox .content .Walletaddress .address[data-v-1a61c0d6] {\n  font-size: 0.37rem;\n  font-weight: 400;\n  color: #fff;\n  text-align: center;\n  word-wrap: break-word;\n  word-break: normal;\n}\n.AirdropAwardBox .content .Getitnow[data-v-1a61c0d6] {\n  width: 5.28rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 0.53rem;\n  color: #fff;\n  cursor: pointer;\n}\n.AirdropAwardBox .content .yunWallet[data-v-1a61c0d6] {\n  margin-top: 0.53rem;\n  font-size: 0.43rem;\n  color: #fff;\n  text-align: center;\n}\n.AirdropAwardBox .content .yunWallet span[data-v-1a61c0d6] {\n  color: #09EFBD;\n  text-decoration: underline;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".InvitedBox[data-v-ee515146] {\n  width: 8.4rem;\n  height: 14.85rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.InvitedBox .content[data-v-ee515146] {\n  padding: 0.53rem;\n  box-sizing: border-box;\n}\n.InvitedBox .content .title[data-v-ee515146] {\n  font-size: 0.43rem;\n  font-weight: 400;\n  color: #fff;\n}\n.InvitedBox .content .title span[data-v-ee515146] {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.InvitedBox .content .Invitedlist[data-v-ee515146] {\n  width: 100%;\n  height: 12.11rem;\n  overflow: auto;\n  border-top: 0.03rem solid #49494D;\n}\n.InvitedBox .content .Invitedlist .item[data-v-ee515146] {\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n  margin-top: 0.53rem;\n}\n.InvitedBox .content .Invitedlist .item .address[data-v-ee515146] {\n  word-wrap: break-word;\n  word-break: normal;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_30863d0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_30863d0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_30863d0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_30863d0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_30863d0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".WhitelistBox[data-v-30863d0c] {\n  width: 8.4rem;\n  height: 355;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.WhitelistBox .content[data-v-30863d0c] {\n  padding: 0.8rem 0.53rem;\n  box-sizing: border-box;\n}\n.WhitelistBox .content h1[data-v-30863d0c] {\n  font-size: 0.53rem;\n  font-weight: 400;\n  color: #fff;\n}\n.WhitelistBox .content div[data-v-30863d0c] {\n  font-size: 0.43rem;\n  font-weight: 400;\n  color: #fff;\n  margin-top: 0.13rem;\n  word-wrap: break-word;\n  word-break: normal;\n}\n.WhitelistBox .content .title2[data-v-30863d0c] {\n  width: 100%;\n  margin-top: 0.8rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MintSuccessCard_vue_vue_type_style_index_0_id_c4cf7b32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MintSuccessCard_vue_vue_type_style_index_0_id_c4cf7b32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MintSuccessCard_vue_vue_type_style_index_0_id_c4cf7b32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MintSuccessCard_vue_vue_type_style_index_0_id_c4cf7b32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MintSuccessCard_vue_vue_type_style_index_0_id_c4cf7b32_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (max-width: 959px) {\n.Mintpopup[data-v-c4cf7b32] {\n    width: 8.4rem;\n    height: 14.85rem;\n    background: #202024;\n    box-sizing: border-box;\n    border: 0.03rem solid #49494D;\n}\n.Mintpopup .Mintlogo[data-v-c4cf7b32] {\n    width: 100%;\n    padding-top: 0.53rem;\n}\n.Mintpopup .Mintlogo img[data-v-c4cf7b32] {\n    display: block;\n    width: 5.73rem;\n    height: 5.49rem;\n    margin: 0 auto;\n}\n}\n@media screen and (min-width: 960px) {\n.Mintpopup[data-v-c4cf7b32] {\n    width: 21.07rem;\n    height: 10.93rem;\n    background: #202024;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 0 1.07rem;\n    border: 0.03rem solid #49494D;\n    overflow: auto;\n}\n.Mintpopup .Mintlogo[data-v-c4cf7b32] {\n    width: 100%;\n}\n.Mintpopup .Mintlogo .tokenId[data-v-c4cf7b32] {\n    width: 100%;\n    text-align: center;\n    margin-top: 0.53rem;\n    font-size: 0.48rem;\n    color: #fff;\n}\n.Mintpopup .Mintlogo img[data-v-c4cf7b32] {\n    display: block;\n    width: 7.17rem;\n    height: 6.67rem;\n    margin: 0 auto;\n}\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("39364574", content, true, context)
};

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Mint.vue?vue&type=template&id=6b5cf2a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":"","close-on-click-overlay":false},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"Mintpopup"},[_c('div',{staticClass:"Mintlogo"},[_c('img',{attrs:{"src":__webpack_require__(115),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"PaymentBox"},[_c('div',{staticClass:"TTORegular title"},[_vm._v("购买数量")]),_vm._v(" "),_c('div',{staticClass:"PaymentNum"},[_c('van-icon',{staticClass:"subtraction",attrs:{"name":"minus","size":"18"},on:{"click":_vm.subtraction}}),_vm._v(" "),_c('span',{staticClass:"TTOMedium number"},[_vm._v(_vm._s(_vm.MintNum))]),_vm._v(" "),_c('van-icon',{staticClass:"Addition",attrs:{"name":"plus","size":"18"},on:{"click":_vm.Addition}})],1),_vm._v(" "),_c('div',{staticClass:"PaymentInfo"},[_c('div',{staticClass:"title TTORegular"},[_vm._v("待支付")]),_vm._v(" "),_c('div',{staticClass:"PaymentContent"},[_c('span',{staticClass:"TTOMedium"},[_vm._v(_vm._s(_vm.MATIC)+" MATIC")])])]),_vm._v(" "),_c('div',{staticClass:"mintSubmit TTOMedium",on:{"click":function($event){return _vm.MintToken(_vm.MintNum)}}},[_vm._v("MINT")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/Mint.vue?vue&type=template&id=6b5cf2a0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Mint.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Mintvue_type_script_lang_js_ = ({
  name: "Mint",
  props: {
    showMint: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      MintNum: 1,
      visables: this.showMint
    };
  },

  watch: {
    showMint(n) {
      this.visables = n;
    }

  },
  methods: {
    subtraction() {
      if (this.MintNum > 1) {
        this.MintNum--;
      } else {
        this.$toast("Mint数量不能小于1");
      }
    },

    Addition() {
      let MintNum = 5;

      if (this.isWhite) {
        MintNum = 10;
      }

      if (this.MintNum < MintNum) {
        this.MintNum++;
      } else {
        this.$toast(this.isWhite ? "白名单用户Mint数量不能大于10个" : "非白名单用户Mint数量不能大于5个");
      }
    },

    close() {
      this.$emit("closeMint", false);
      this.MintNum = 1;
    },

    MintToken(MintNum) {
      if (MintNum >= 1) {
        this.$emit("closeMint", MintNum);
      } else {
        this.$toast.fail("Mint数量不能小于1");
      }
    }

  },
  computed: {
    MATIC() {
      return this.MintNum * 100;
    } // MATICPRICE() {
    //   return this.MintNum * 100 * 6.6
    // }


  }
});
// CONCATENATED MODULE: ./components/polygon/Mint.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_Mintvue_type_script_lang_js_ = (Mintvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/Mint.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_Mintvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b5cf2a0",
  "00cce8d0"
  
)

/* harmony default export */ var Mint = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Ment.vue?vue&type=template&id=360dd13a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":"","close-on-click-overlay":false},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"Mentpopup"},[_c('div',{staticClass:"TTORegular title"},[_vm._v("选择 MELT 的 NFT\n      ("+_vm._s(_vm.list.filter(function (item){return item.selected==true}).length)+"/"+_vm._s(_vm.list.length)+")")]),_vm._v(" "),_c('div',{staticClass:"MentList"},_vm._l((_vm.list),function(item){return _c('div',{key:item.tokenId,staticClass:"Mentlogo",class:item.selected==true?'MentlogoActive':'',on:{"click":function($event){return _vm.selected(item)}}},[_c('img',{attrs:{"src":__webpack_require__(115),"alt":""}}),_vm._v(" "),_c('div',{staticClass:"TTORegular tokenId"},[_vm._v(_vm._s(item.tokenId))])])}),0),_vm._v(" "),_c('div',{staticClass:"PaymentBox"},[_c('div',{staticClass:"PaymentInfo"},[_c('div',{staticClass:"title TTORegular"},[_vm._v("预估可获得")]),_vm._v(" "),_c('div',{staticClass:"PaymentContent"},[_c('span',{staticClass:"TTOMedium"},[_vm._v(_vm._s(_vm.MATIC)+" MATIC")])])]),_vm._v(" "),_c('div',{staticClass:"MentSubmit TTOMedium",on:{"click":function($event){return _vm.MentToken(_vm.selectedList)}}},[_vm._v("Ment")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/Ment.vue?vue&type=template&id=360dd13a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Ment.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Mentvue_type_script_lang_js_ = ({
  name: "Ment",
  props: {
    showMent: {
      type: Boolean,
      default: false
    },
    MentList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      visables: this.showMent,
      list: this.MentList.map(item => {
        item.selected = false;
        return item;
      }),
      selectedList: []
    };
  },

  watch: {
    showMent(n) {
      this.visables = n;
    }

  },
  methods: {
    selected(tokenId) {
      this.list = this.list.map(item => {
        if (item.tokenId == tokenId.tokenId) {
          item.selected = !item.selected;
        }

        return item;
      });
      this.selectedList = this.list.filter(item => {
        return item.selected == true;
      }).map(item => {
        return item.tokenId;
      });
    },

    close() {
      this.$emit("closeMent", false);
    },

    MentToken(tokens) {
      if (tokens.length > 0) {
        this.$emit("closeMent", tokens);
      } else {
        this.$toast.fail("Ment数量不能小于0");
      }
    }

  },
  computed: {
    MATIC() {
      return this.selectedList.length * 100;
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/Ment.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_Mentvue_type_script_lang_js_ = (Mentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/Ment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_Mentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "360dd13a",
  "2c009e94"
  
)

/* harmony default export */ var Ment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/AirdropAddressCard.vue?vue&type=template&id=9c25b1fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","close-on-click-overlay":false,"closeable":""},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"AirdropAddressBox"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title TTORegular"},[_vm._v("以下每个地址均获得 "),_c('span',{staticClass:"TTOMedium"},[_vm._v("BKB奖励")])]),_vm._v(" "),_c('div',{staticClass:"getTime TTORegular"},[_vm._v(_vm._s(_vm._f("timeFilter")(((new Date).getTime())-86400000)))]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('div',{staticClass:"Addresslist"},_vm._l((_vm.airdropList),function(item,index){return _c('div',{key:index,staticClass:"item TTORegular"},[_vm._v("\n            "+_vm._s(item)+"\n          ")])}),0)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue?vue&type=template&id=9c25b1fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/AirdropAddressCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AirdropAddressCardvue_type_script_lang_js_ = ({
  name: "AirdropAddressCard",
  props: {
    showAirdropAddress: {
      type: Boolean,
      default: false
    },
    airdropList: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showAirdropAddress
    };
  },

  watch: {
    showAirdropAddress(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeAirdropAddressCard", false);
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_AirdropAddressCardvue_type_script_lang_js_ = (AirdropAddressCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_AirdropAddressCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9c25b1fc",
  "16034661"
  
)

/* harmony default export */ var AirdropAddressCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/AirdropAwardCard.vue?vue&type=template&id=1a61c0d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":"","close-on-click-overlay":false},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"AirdropAwardBox"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title TTORegular"},[_vm._v("\n        恭喜！你获得了空投奖励\n      ")]),_vm._v(" "),_c('div',{staticClass:"BKB TTORegular"},[_vm._v(_vm._s(_vm.amount)+" BKB")]),_vm._v(" "),_c('div',{staticClass:"Walletaddress"},[_c('div',{staticClass:"title TTORegular"},[_vm._v("\n          获取钱包地址\n        ")]),_vm._v(" "),_c('div',{staticClass:"address TTORegular"},[_vm._v("\n          "+_vm._s(_vm.address)+"\n        ")])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/AirdropAwardCard.vue?vue&type=template&id=1a61c0d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/AirdropAwardCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AirdropAwardCardvue_type_script_lang_js_ = ({
  name: "AirdropAwardCard",
  props: {
    showAirdropAward: {
      type: Boolean,
      default: false
    },
    address: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showAirdropAward
    };
  },

  watch: {
    showAirdropAward(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeAirdropAwardCard", false);
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/AirdropAwardCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_AirdropAwardCardvue_type_script_lang_js_ = (AirdropAwardCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/AirdropAwardCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_AirdropAwardCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1a61c0d6",
  "f116ddec"
  
)

/* harmony default export */ var AirdropAwardCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/InvitedCard.vue?vue&type=template&id=ee515146&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","close-on-click-overlay":false,"closeable":""},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"InvitedBox"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title TTORegular"},[_vm._v("当前邀请成功人数 "),_c('span',{staticClass:"TTOMedium"},[_vm._v("2")])]),_vm._v(" "),_c('div',{staticClass:"title TTORegular"},[_vm._v("领取空投概率 "),_c('span',{staticClass:"TTOMedium"},[_vm._v("50%")])]),_vm._v(" "),_c('div',{staticClass:"Invitedlist TTORegular"},[_c('div',{staticClass:"item TTORegular"},[_c('div',{staticClass:"item"},[_vm._v("\n            被邀请人地址\n          ")]),_vm._v(" "),_c('div',{staticClass:"address"},[_vm._v("\n            0x2558248b1b72163Cff35658C707168879788997d\n          ")])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/InvitedCard.vue?vue&type=template&id=ee515146&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/InvitedCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var InvitedCardvue_type_script_lang_js_ = ({
  name: "InvitedCard",
  props: {
    showInvitedlist: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showInvitedlist
    };
  },

  watch: {
    showInvitedlist(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeInvitedCard", false);
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/InvitedCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_InvitedCardvue_type_script_lang_js_ = (InvitedCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/InvitedCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_InvitedCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ee515146",
  "9d742436"
  
)

/* harmony default export */ var InvitedCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Whitelistcard.vue?vue&type=template&id=30863d0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":"","close-on-click-overlay":false},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"WhitelistBox"},[_c('div',{staticClass:"content TTORegular"},[_c('h1',{staticClass:"TTORegular title1"},[_vm._v("白名单特权")]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v("1.白名单用户在5月15日开启Mint")]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v("2.非白名单用户在5月16日开启Mint")]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v("3.白名单用户购买上限为10个")]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v("4.非白名单用户购买上限为5个")]),_vm._v(" "),_c('h1',{staticClass:"TTORegular title2"},[_vm._v("怎样成为白名单？")]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v("1.使用Swap进行交易过的用户")]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v("2.通过NFT交易市场交易过的用户")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/Whitelistcard.vue?vue&type=template&id=30863d0c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Whitelistcard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Whitelistcardvue_type_script_lang_js_ = ({
  name: "WhitelistCard",
  props: {
    showWhitelist: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showWhitelist
    };
  },

  watch: {
    showWhitelist(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeWhitelistcard", false);
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/Whitelistcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_Whitelistcardvue_type_script_lang_js_ = (Whitelistcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/Whitelistcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_Whitelistcardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "30863d0c",
  "6d4aeb11"
  
)

/* harmony default export */ var Whitelistcard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/MintSuccessCard.vue?vue&type=template&id=c4cf7b32&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":"","close-on-click-overlay":false},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"Mintpopup"},_vm._l((_vm.MintData),function(item){return _c('div',{key:item.tokenId,staticClass:"Mintlogo"},[_c('img',{attrs:{"src":__webpack_require__(115),"alt":""}}),_vm._v(" "),_c('div',{staticClass:"tokenId TTORegular"},[_vm._v(_vm._s(item.tokenId))])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/MintSuccessCard.vue?vue&type=template&id=c4cf7b32&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/MintSuccessCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MintSuccessCardvue_type_script_lang_js_ = ({
  name: "MintSuccess",
  props: {
    showMintSuccess: {
      type: Boolean,
      default: false
    },
    MintData: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      MintNum: 1,
      visables: this.showMintSuccess
    };
  },

  watch: {
    showMintSuccess(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeMintSuccess", false);
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/MintSuccessCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_MintSuccessCardvue_type_script_lang_js_ = (MintSuccessCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/MintSuccessCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_MintSuccessCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c4cf7b32",
  "46e754aa"
  
)

/* harmony default export */ var MintSuccessCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Py_bg1.50f68de.png";

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Py_bg7.b0fd28c.png";

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Py_bg2.08fde79.png";

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/InvitationCodeBg.9eb3b7e.png";

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Py_bg3.77cfba4.png";

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/question.51ee67c.png";

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Py_bottom.a84d612.png";

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Load-left.102288d.png";

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Load-right.200cbc1.png";

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(295);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(296);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(297);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(298);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(116);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0 {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1 {\n  color: #515556;\n}\n.theme-light .textSecond2 {\n  color: #919899;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1 {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11 {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0 {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary {\n  color: #7524f9;\n}\n.theme-light .colorSecond01 {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorSecond08 {\n  color: #FFB800;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18 {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1 {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11 {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0 {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01 {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08 {\n  color: #FFB800;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18 {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0 {\n  background-color: #fafafa;\n}\n.theme-light .Background0 {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0 {\n  background-color: #17171A;\n}\n.theme-dark .Background1 {\n  background-color: #202024;\n}\n@font-face {\n  font-family: \"TTORegular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.polygon-top1 {\n  display: none;\n}\n.polygon-top2 .polygon-m-InvitationBox {\n  margin-top: 0.53rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.polygon-top2 .polygon-m-InvitationBox .InvitationCodeBtn {\n  width: 2.4rem;\n  height: 0.75rem;\n  line-height: 0.75rem;\n  font-size: 0.37rem;\n  font-weight: 400;\n  text-align: center;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 100% 100%;\n  color: #fff;\n  cursor: pointer;\n}\n.polygon-top2 .polygon-top-left {\n  width: 6.53rem;\n  height: 6.08rem;\n  margin: 0 auto;\n}\n.polygon-top2 .polygon-top-left img {\n  width: 100%;\n  height: 100%;\n}\n.polygon-top2 .polygon-top-middle {\n  position: relative;\n  width: 10rem;\n  height: 1.87rem;\n  margin: 0.93rem auto 1.55rem;\n  text-align: center;\n}\n.polygon-top2 .polygon-top-middle .g-line {\n  position: absolute;\n  right: 0;\n  top: 0.4rem;\n  height: 0.03rem;\n  width: 5.33rem;\n  background-color: #09EFBD;\n}\n.polygon-top2 .polygon-top-middle img {\n  width: 8.93rem;\n  height: 100%;\n}\n.polygon-top2 .polygon-top-right .RemainingtimeText {\n  font-weight: 400;\n  font-size: 0.37rem;\n  color: #fff;\n  margin: 0.27rem 0;\n  text-align: center;\n}\n.polygon-top2 .polygon-top-right .Minted {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 0.53rem;\n  margin: 1.33rem 0;\n}\n.polygon-top2 .polygon-top-right .Minted .item .title {\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n}\n.polygon-top2 .polygon-top-right .Minted .item .content {\n  font-size: 0.64rem;\n  font-weight: 400;\n  color: #09EFBD;\n}\n.polygon-top2 .polygon-top-right .Minted .item .content span {\n  font-size: 0.37rem;\n}\n.polygon-top2 .polygon-top-right .MintBtn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 0.53rem;\n  margin: 1.33rem 0;\n}\n.polygon-top2 .polygon-top-right .MintBtn .item {\n  width: 4.35rem;\n  height: 1.33rem;\n  color: #fff;\n}\n.polygon-top2 .polygon-top-right .MintBtn .item .MINT {\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 100% 100%;\n  font-size: 0.64rem;\n  font-weight: 400;\n  text-align: center;\n  line-height: 1.33rem;\n  cursor: pointer;\n}\n.polygon-top2 .polygon-top-right .MintBtn .item .MELT {\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100% 100%;\n  font-size: 0.64rem;\n  font-weight: 400;\n  text-align: center;\n  color: #707076;\n  line-height: 1.33rem;\n  cursor: not-allowed;\n}\n.polygon-top2 .polygon-top-right .MintBtn .item .MELTActive {\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: 100% 100%;\n  font-size: 0.64rem;\n  font-weight: 400;\n  text-align: center;\n  line-height: 1.33rem;\n  cursor: pointer;\n}\n.polygon-top2 .polygon-top-right .MintBtn .item .tipstext {\n  display: none;\n}\n.polygon-top2 .polygon-top-right .Py_bg2 {\n  display: none;\n}\n.Polygontext {\n  padding-right: 0.53rem;\n  background: #202024 !important;\n  margin-bottom: 1.6rem;\n}\n.Polygontext .content {\n  display: none;\n}\n.Polygontext .tips {\n  border: 0.03rem solid #49494D;\n  padding: 0.32rem 0.53rem;\n  color: #fff;\n}\n.polygonContentBox .RightsAndInterests .contentTitle {\n  display: none;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .invitationBox {\n  display: flex;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .invitationBox .card1 {\n  display: none;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .invitationBox .card2 {\n  display: none;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .invitationBox img {\n  display: none;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .invitationBox .m-InvitationCodeBg {\n  display: block;\n  width: 100%;\n  height: 1.33rem;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox {\n  width: 100%;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 {\n  width: 100%;\n  height: 100%;\n  padding: 0.53rem;\n  font-size: 0.43rem;\n  background: #8247E5;\n  color: #fff;\n  box-sizing: border-box;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 .InvitationCodeBox {\n  margin-top: 0.53rem;\n  width: 100%;\n  height: 1.07rem;\n  display: flex;\n  justify-content: flex-end;\n  box-sizing: border-box;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 .InvitationCodeBox .InvitationCode {\n  width: 8.93rem;\n  height: 1.07rem;\n  box-sizing: border-box;\n  line-height: 1.07rem;\n  font-weight: 400;\n  text-align: center;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 .InvitationCodeBox .InvitationCode .text {\n  font-size: 0.43rem;\n  color: #fff;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 .InvitationCodeBox .InvitationCode .code {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 .InvitationCodeBox .InvitationCode .copy {\n  width: 2.35rem;\n  font-size: 0.53rem;\n  margin-left: 0.27rem;\n  color: #09EFBD;\n  border-left: 0.03rem solid #707076;\n  padding: 0 0.27rem;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 p {\n  color: #fff;\n  margin-bottom: 0.53rem;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox1 p:last-child {\n  margin-bottom: 0;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 {\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 0.53rem;\n  display: flex;\n  flex-direction: column;\n  margin: 0.53rem 0;\n  background: #202024 !important;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addressTitle {\n  width: 100%;\n  color: #fff;\n  box-sizing: border-box;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addressTitle .text1 {\n  font-size: 0.43rem;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n  background: #17171A;\n  border-bottom: none;\n  padding: 0.27rem 0.53rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addressTitle .text1 span {\n  font-size: 0.8rem;\n  color: #09EFBD;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addressTitle .text1 .viewInvitee {\n  flex: 1;\n  font-size: 0.43rem;\n  text-align: right;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addressTitle .text2 {\n  background: #17171A;\n  padding: 0.27rem 0.53rem;\n  border: 0.03rem solid #49494D;\n  font-size: 0.43rem;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox2 .addresslistBox {\n  display: none;\n}\n.polygonContentBox .RightsAndInterests .RightsAndInterestsContent .infoBox .itembox3 {\n  display: none;\n}\n.polygonContentBox .ShortaddressContent {\n  padding-right: 0.53rem;\n  margin-bottom: 1.07rem;\n}\n.polygonContentBox .ShortaddressContent .contentTitle {\n  color: #fff;\n  font-size: 0.43rem;\n  background: #17171A;\n}\n.polygonContentBox .ShortaddressContent .contentTitle h1 {\n  font-size: 0.43rem;\n  display: flex;\n  justify-items: center;\n  padding: 0.4rem 0.53rem 0.27rem 0.53rem;\n  border: 0.03rem solid #49494D;\n  box-sizing: border-box;\n  border-bottom: none;\n}\n.polygonContentBox .ShortaddressContent .contentTitle h1 .line {\n  box-sizing: border-box;\n  height: 100%;\n  border-left: 0.05rem solid #fff;\n  padding: 0 0.27rem;\n  margin-left: 0.27rem;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist {\n  padding: 0.27rem 0.53rem 0.43rem 0.53rem;\n  border: 0.03rem solid #49494D;\n  background: #17171A;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist .ShortaddressTitle {\n  font-size: 0.37rem;\n  color: #fff;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist .ShortaddressTitle span {\n  color: #09EFBD;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist .m-ShortaddressTitle {\n  font-size: 0.37rem;\n  color: #fff;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist .m-ShortaddressTitle span {\n  margin: 0 0.13rem;\n  color: #09EFBD;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist .list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 0.27rem;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist .list .item {\n  width: 2.43rem;\n  margin-bottom: 0.27rem;\n  color: #fff;\n  font-size: 0.32rem;\n}\n.polygonContentBox .ShortaddressContent .Shortaddresslist .m-viewAll {\n  font-size: 0.43rem;\n  color: #09EFBD;\n  font-weight: 400;\n}\n.polygonContentBox .whiteIpcard {\n  width: 100%;\n  height: 1.33rem;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2.13rem;\n}\n.polygonContentBox .whiteIpcard .text {\n  width: 7.09rem;\n  height: 100%;\n  line-height: 100%;\n  font-size: 0.43rem;\n  color: #fff;\n  font-weight: 400;\n  padding: 0.4rem 0.53rem 0.37rem 0.53rem;\n  box-sizing: border-box;\n}\n.polygonContentBox .whiteIpcard .text img {\n  width: 0.43rem;\n  height: 0.43rem;\n  margin-left: 0.13rem;\n}\n.polygonContentBox .whiteIpcard img {\n  height: 1.33rem;\n}\n.polygonContentBox .LoadMapcontent,\n.polygonContentBox .Tipscontent {\n  display: none;\n}\n.InvitationPopup {\n  width: 8.4rem;\n  height: 8.53rem;\n  box-sizing: border-box;\n  padding: 0.53rem;\n  background: #202024;\n}\n.InvitationPopup .title {\n  color: #fff;\n  font-size: 0.32rem;\n  font-weight: 400;\n  margin-bottom: 0.53rem;\n}\n.InvitationPopup .invitationInput {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.InvitationPopup .invitationInput .clearBox {\n  position: absolute;\n  width: 1.23rem;\n  height: 100%;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 0.37rem;\n  box-sizing: border-box;\n  background: linear-gradient(270.05deg, #17171A 52.83%, rgba(23,23,26,0) 94.08%);\n}\n.InvitationPopup .invitationInput .van-field__control {\n  color: #09EFBD;\n  font-size: 0.64rem;\n  letter-spacing: 0.13rem;\n}\n.InvitationPopup .invitationInput .van-cell::after {\n  border: none;\n}\n.InvitationPopup .invitationInput .van-icon-clear {\n  color: #09EFBD;\n}\n.InvitationPopup .invitationInput .pastetext {\n  width: 1.17rem;\n  color: #09EFBD;\n  font-size: 0.37rem;\n  font-weight: 400;\n  cursor: pointer;\n}\n.InvitationPopup .content {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 0.37rem;\n  color: #fff;\n  word-wrap: break-word;\n  word-break: normal;\n  margin: 1.07rem 0;\n}\n.InvitationPopup .invitationCodeSubmit {\n  width: 5.28rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: 100% 100%;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 0.53rem;\n  color: #fff;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/InvitationCodeBtn.00b692c.png";

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bthBg3.1a0281f.png";

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bthBg2.ca018ac.png";

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/btnBg4.458fc95.png";

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/polygon/index.vue?vue&type=template&id=7b94e660&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"polygon-contet"},[_vm._ssrNode("<div class=\"polygon-top1\"><div class=\"polygon-top-left\"><h1 class=\"one TTODbold\">BitKeep\n      </h1> <h1 class=\"two TTOMedium\">Genesis NFT Sale</h1></div> <div class=\"polygon-top-right\"><img"+(_vm._ssrAttr("src",__webpack_require__(284)))+" alt></div></div> "),_vm._ssrNode("<div class=\"polygon-top2\">","</div>",[_vm._ssrNode("<div class=\"polygon-m-InvitationBox\">"+((_vm.address)?("<div class=\"InvitationCodeBtn\">填写邀请码</div>"):"<!---->")+"</div> <div class=\"polygon-top-left\"><img"+(_vm._ssrAttr("src",__webpack_require__(115)))+" alt></div> <div class=\"polygon-top-middle\"><img"+(_vm._ssrAttr("src",__webpack_require__(285)))+" alt> <div class=\"g-line\"></div></div> "),_vm._ssrNode("<div class=\"polygon-top-right\">","</div>",[_vm._ssrNode(((_vm.defaultData.fromStartTime>0)?("<p class=\"RemainingtimeText TTORegular\">距离开始还剩</p>"):"<!---->")+" "),(_vm.defaultData.fromStartTime>0)?_vm._ssrNode("<div class=\"Countdown\">","</div>",[_c('Countdown',{attrs:{"startTime":_vm.startTime,"endTime":_vm.endTime,"format":_vm.format}})],1):_vm._e(),_vm._ssrNode(" <div class=\"Minted\"><div class=\"item\"><p class=\"TTORegular title\">Total Minted</p> <p class=\"TTOMedium content\">"+_vm._ssrEscape(_vm._s(_vm.defaultData.totalMinted)+"/"+_vm._s(_vm.defaultData.allNftNum))+"</p></div> <div class=\"item\"><p class=\"TTORegular title\">Price</p> <p class=\"TTOMedium content\">\n            100\n            <span>MATIC</span></p></div></div> "+((_vm.defaultData.isMint||_vm.defaultData.isMelt)?("<div class=\"MintBtn\"><div class=\"item\"><div class=\"MINT TTOMedium\">MINT</div></div> "+((!_vm.defaultData.isMelt)?("<div class=\"item\"><div class=\"MELT TTOMedium\">MELT \n          </div> <div class=\"TTORegular Background0 tipstext\">7月17日后，可在官网以原价进行反向铸造</div></div>"):("<div class=\"item\"><div class=\"MELTActive TTOMedium\">\n            MELT\n          </div> <div class=\"TTORegular Background0 tipstext\">现在可在官网以原价进行反向铸造</div></div>"))+"</div>"):"<!---->")+" <img"+(_vm._ssrAttr("src",__webpack_require__(286)))+" alt class=\"Py_bg2\">")],2)],2),_vm._ssrNode(" <div class=\"Polygontext Background0\"><div class=\"TTORegular content\">\n      Polygon Warrior are the first BitKeep NFTs, and the first NFTs that can be reversed. <br>\n      A Polygon Warrior NFT costs 100 Matic to mint, with the possibility to reverse after 60 <br> days of minting and\n      get all costs refunded. <br>\n      BitKeep will draw 100 holders of Polygon Warrior NFTs each day to reward them each 100BKB. <br>\n      Polygon Warrior is the first demonstrative PFP NFT on Polygon that integrates Social-Fi\n    </div> "+((_vm.defaultData.fromStartTime>0)?("<div class=\"TTORegular tips Background0\">\n      7月16日后，可在官网以原价进行反向铸造。\n    </div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"polygonContentBox\">","</div>",[_vm._ssrNode("<div class=\"RightsAndInterests\">","</div>",[_vm._ssrNode("<div class=\"contentTitle\"><h1 class=\"TTORegular\">权益<div class=\"line\"></div></h1></div> "),_vm._ssrNode("<div class=\"RightsAndInterestsContent\">","</div>",[_vm._ssrNode("<div class=\"invitationBox\"><img"+(_vm._ssrAttr("src",__webpack_require__(287)))+" alt class=\"m-InvitationCodeBg\"> <div class=\"TTODbold card1 Background0\">邀请好友 领取空投</div> <img"+(_vm._ssrAttr("src",__webpack_require__(288)))+" alt> <div class=\"TTORegular card2 Background0\">填写邀请码</div></div> "),_vm._ssrNode("<div class=\"infoBox\">","</div>",[_vm._ssrNode("<div class=\"itembox1 TTORegular\">","</div>",[_vm._ssrNode("<p class=\"TTORegular\">\n              1.Mint 开启后 30 天内，每日随机挑选 100 位持有者，每位持有者空投 100 枚 BKB 到云钱包\n            </p> <p class=\"TTORegular\">2.必须创建云钱包后才能领取空投</p> <p class=\"TTORegular\">3.邀请人数越多，领取空投概率越大:</p> <p class=\"TTORegular\" style=\"margin-bottom:0px\">\n              邀请人数 0 —— 0% 幸运加成 <br>\n              邀请人数 1 —— 20% 幸运加成 <br>\n              邀请人数 2 —— 50% 幸运加成<br>\n              邀请人数 3 及以上 —— 100% 幸运加成<br>\n              注：幸运值越高，获得空投几率越大\n            </p> "),(_vm.defaultData.inviteCode!=0)?_vm._ssrNode("<div class=\"InvitationCodeBox\">","</div>",[_vm._ssrNode("<div class=\"InvitationCode Background0\">","</div>",[_vm._ssrNode("<span class=\"TTORegular text\">我的邀请码</span> <span class=\"TTODbold code\">"+_vm._ssrEscape(_vm._s(_vm.defaultData.inviteCode))+"</span> <span class=\"line\"></span> "),_c('span',{directives:[{name:"copy",rawName:"v-copy",value:(_vm.defaultData.inviteCode),expression:"defaultData.inviteCode"}],staticClass:"TTODbold copy"},[_vm._ssrNode("COPY")])],2)]):_vm._e()],2),_vm._ssrNode(" <div class=\"itembox2 Background0\"><div class=\"addressTitle\"><p class=\"TTORegular text1\">当前邀请成功人数 <span class=\"TTOMedium\">"+_vm._ssrEscape(_vm._s(_vm.defaultData.inviteNum))+"</span> "+((_vm.defaultData.inviteNum!=0)?("<span class=\"viewInvitee TTORegular\">查看被邀请人</span>"):"<!---->")+"</p> <p class=\"TTORegular text2\">填入你的邀请码后 MINT 成功的用户算作邀请成功</p></div> <div class=\"addresslistBox\">"+((_vm.defaultData.inviteNum==0)?("<div class=\"noData TTOMedium\">0</div>"):("<div class=\"addresslist\">"+(_vm._ssrList((_vm.defaultData.inviteAddress),function(item){return ("<div class=\"addressItem TTORegular\"><span class=\"TTORegular\">被邀请地址</span> <p class=\"TTORegular\">"+_vm._ssrEscape("\n                    "+_vm._s(item))+"</p></div>")}))+"</div>"))+"</div></div> <div class=\"itembox3 TTORegular Background0\"><h2 class=\"TTORegular\">白名单特权</h2> <div class=\"TTORegular\">\n              1、白名单用户在5月15日开启Mint <br>\n              2、非白名单用户在5月16日开启Mint<br>\n              3、白名单用户购买上限为10个<br>\n              4、非白名单用户购买上限为5个</div> <h2 class=\"TTORegular\">怎样成为白名单 ？</h2> <div class=\"TTORegular\">\n              1、使用Swap进行交易过的用户<br>\n              2、通过NFT交易市场交易过的用户<br></div></div>")],2)],2)],2),_vm._ssrNode(" <div class=\"ShortaddressContent\"><div class=\"contentTitle\"><h1 class=\"TTORegular\">空投获奖地址<div class=\"line\"><span class=\"TTORegular\">05-16-2022</span></div></h1></div> <div class=\"Shortaddresslist\"><div class=\"ShortaddressTitle TTORegular\">\n          以下每个地址均获得\n          <span class=\"TTOMedium\">100 BKB</span></div> <div class=\"TTORegular m-ShortaddressTitle\">共<span>100</span>个地址</div> <div class=\"list Background0\">"+(_vm._ssrList((_vm.LotteryList),function(item,index){return ("<div class=\"item TTORegular\""+(_vm._ssrStyle(null,null, { display: (index < 9) ? '' : 'none' }))+">"+_vm._ssrEscape(" \n            "+_vm._s(item)+" \n          ")+"</div>")}))+"</div> <div class=\"TTORegular m-viewAll\">查看全部</div></div></div> <div class=\"whiteIpcard\"><div class=\"text Background0\">"+((_vm.defaultData.isWhite)?("<span>您是白名单特权用户</span>"):("<span>您暂时不是白名单用户</span>"))+" <img"+(_vm._ssrAttr("src",__webpack_require__(289)))+" alt></div> <img"+(_vm._ssrAttr("src",__webpack_require__(290)))+" alt></div> <div class=\"LoadMapcontent\"><div class=\"contentTitle\"><h1 class=\"TTORegular\">Load Map<div class=\"line\"></div></h1></div> <div class=\"logoListBox\"><div class=\"logoBg\"><img"+(_vm._ssrAttr("src",__webpack_require__(291)))+" alt> <img"+(_vm._ssrAttr("src",__webpack_require__(292)))+" alt></div> <div class=\"logoListContent\"><div class=\"Item\"><div class=\"TTOMedium logo active\">\n              公开发售\n            </div> <span class=\"TTOMedium\">05-15-2022</span></div> <div class=\"Item\"><div class=\"TTOMedium logo\">\n              公开发售\n            </div> <span class=\"TTOMedium\">05-15-2022</span></div> <div class=\"Item\"><div class=\"TTOMedium logo\">\n              第一轮福利 <br>\n              BKB\n            </div> <span class=\"TTOMedium\">07-16-2022</span></div> <div class=\"Item\"><div class=\"TTOMedium logo\">\n              开启反向铸造\n            </div> <span class=\"TTOMedium \">Q2-2022</span></div> <div class=\"Item\"><div class=\"TTOMedium logo\">\n              第二轮福利\n            </div> <span class=\"TTOMedium\">Q3-2022</span></div> <div class=\"Item\"><div class=\"TTOMedium logo\">\n              开启成就 2.0\n            </div> <span class=\"TTOMedium\">Q4-2022</span></div> <div class=\"Item\"><div class=\"TTOMedium logo\">\n              更多福利 <br>\n              敬请期待\n            </div> <span class=\"TTOMedium\">2023</span></div></div> <div style=\"clear-both\"></div></div> <div style=\"clear-both\"></div></div> <div class=\"Tipscontent Background0 TTORegular\"><p class=\"TTORegular\">注意事项</p> <p class=\"TTORegular\">1. 注册 BitKeep 并通过 Wallet Connect 连接该网站。</p> <p class=\"TTORegular\">2. 确保你的钱包里有足够的 MATIC 来支付包括汽油费在内的总成本。</p> <p class=\"TTORegular\">3. 单击铸币按钮，系统将提示您签署交易，并产生汽油费用。</p> <p class=\"TTORegular\">4. 购买后，您的 NFT 将出现在您的钱包中，且可以通过 BitKeep Market 和 Opensea 进行交易！</p></div> "),_c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":""},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_c('div',{staticClass:"PopupBox"},[_c('div',{staticClass:"InvitationPopup"},[_c('div',{staticClass:"title TTORegular"},[_c('span',{staticClass:"TTORegular"},[_vm._v("输入邀请码")])]),_vm._v(" "),_c('div',{staticClass:"Background0 invitationInput"},[_c('van-field',{staticClass:"Background0 TTOMedium",attrs:{"maxlength":"6"},model:{value:(_vm.invitationCode),callback:function ($$v) {_vm.invitationCode=$$v},expression:"invitationCode"}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.invitationCode),expression:"invitationCode"}],staticClass:"clearBox",on:{"click":function($event){_vm.invitationCode=''}}},[_c('van-icon',{attrs:{"name":"clear","size":"16"}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.invitationCode),expression:"!invitationCode"}],staticClass:"pastetext",on:{"click":_vm.paste}},[_vm._v("粘贴\n            ")])],1),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',{staticClass:"TTORegular"},[_vm._v("当前钱包地址")]),_vm._v(" "),_c('p',{staticClass:"TTORegular"},[_vm._v("\n              "+_vm._s(_vm.address)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"invitationCodeSubmit TTOMedium",on:{"click":_vm.invitationCodeSubmit}},[_vm._v("\n            确认\n          ")])])])]),_vm._ssrNode(" "),_c('Mint',{attrs:{"showMint":_vm.showMint,"isWhite":_vm.defaultData.isWhite},on:{"closeMint":_vm.closeMint}}),_vm._ssrNode(" "),(_vm.showMent)?_c('Ment',{attrs:{"showMent":_vm.showMent,"MentList":_vm.MentList},on:{"closeMent":_vm.closeMent}}):_vm._e(),_vm._ssrNode(" "),_c('AirdropAddressCard',{attrs:{"showAirdropAddress":_vm.showAirdropAddress,"airdropList":_vm.LotteryList},on:{"closeAirdropAddressCard":_vm.closeAirdropAddressCard}}),_vm._ssrNode(" "),_c('AirdropAwardCard',{attrs:{"showAirdropAward":_vm.showAirdropAward,"address":_vm.address,"amount":_vm.awardAmount},on:{"closeAirdropAwardCard":_vm.closeAirdropAwardCard}}),_vm._ssrNode(" "),_c('InvitedCard',{attrs:{"showInvitedlist":_vm.showInvitedlist},on:{"closeInvitedCard":_vm.closeInvitedCard}}),_vm._ssrNode(" "),_c('Whitelistcard',{attrs:{"showWhitelist":_vm.showWhitelist},on:{"closeWhitelistcard":_vm.closeWhitelistcard}}),_vm._ssrNode(" "),_c('MintSuccessCard',{attrs:{"showMintSuccess":_vm.showMintSuccess,"MintData":_vm.MintData},on:{"closeMintSuccess":_vm.closeMintSuccess}}),_vm._ssrNode(" "),_c('van-overlay',{attrs:{"show":_vm.isLoading,"z-index":"999"}},[_c('div',{staticClass:"loading"},[_c('van-loading',{attrs:{"color":"#7524f9","vertical":""}},[_vm._v("loading...")])],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/polygon/index.vue?vue&type=template&id=7b94e660&

// EXTERNAL MODULE: ./components/common/c-vue-countdown.vue + 4 modules
var c_vue_countdown = __webpack_require__(120);

// EXTERNAL MODULE: ./components/polygon/Mint.vue + 4 modules
var Mint = __webpack_require__(266);

// EXTERNAL MODULE: ./components/polygon/Ment.vue + 4 modules
var Ment = __webpack_require__(267);

// EXTERNAL MODULE: ./components/polygon/AirdropAddressCard.vue + 4 modules
var AirdropAddressCard = __webpack_require__(268);

// EXTERNAL MODULE: ./components/polygon/AirdropAwardCard.vue + 4 modules
var AirdropAwardCard = __webpack_require__(269);

// EXTERNAL MODULE: ./components/polygon/InvitedCard.vue + 4 modules
var InvitedCard = __webpack_require__(270);

// EXTERNAL MODULE: ./components/polygon/Whitelistcard.vue + 4 modules
var Whitelistcard = __webpack_require__(271);

// EXTERNAL MODULE: ./components/polygon/MintSuccessCard.vue + 4 modules
var MintSuccessCard = __webpack_require__(272);

// EXTERNAL MODULE: ./utils/wallet.js
var wallet = __webpack_require__(14);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(107);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./utils/copy.js


const vCopy = {
  // 名字爱取啥取啥

  /*
   bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
   el: 作用的 dom 对象
   value: 传给指令的值，也就是我们要 copy 的值
  */
  bind(el, {
    value
  }) {
    el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到

    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示，我这里的提示是用的 vant 的提示
        external_vant_["Toast"].fail('无复制内容');
        return;
      } // 动态创建 textarea 标签


      const textarea = document.createElement('textarea'); // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域

      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px'; // 将要 copy 的值赋给 textarea 标签的 value 属性

      textarea.value = el.$value; // 将 textarea 插入到 body 中

      document.body.appendChild(textarea); // 选中值并复制

      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');

      if (result && el.className.indexOf('congratulations_deposit_span') == -1) {
        external_vant_["Toast"].success('复制成功');
      }

      document.body.removeChild(textarea);
    }; // 绑定点击事件，就是所谓的一键 copy


    el.addEventListener('click', el.handler); //   el.stopPropagation();
  },

  // 当传进来的值更新的时候触发
  componentUpdated(el, {
    value
  }) {
    el.$value = value;
  },

  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler);
  }

};
external_vue_default.a.directive('copy', vCopy);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/polygon/index.vue?vue&type=script&lang=js&
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
// import cndMixins from "@/mixin/cnd.js";








 // MintToken



/* harmony default export */ var polygonvue_type_script_lang_js_ = ({
  name: "polygon",

  // mixins: [cndMixins],
  data() {
    return {
      isLoading: false,
      defaultData: {},
      startTime: new Date().getTime(),
      endTime: 0,
      format: "{dd}天{hh}小时{mm}分钟{ss}秒",
      show: false,
      showMint: false,
      showMent: false,
      invitationCode: "",
      showAirdropAddress: false,
      showAirdropAward: false,
      showInvitedlist: false,
      showWhitelist: false,
      showMintSuccess: false,
      address: "",
      chainName: "ht",
      ChainId: 128,
      token: "",
      LotteryList: [],
      MintData: [],
      MentList: [],
      awardAmount: 0
    };
  },

  components: {
    Countdown: c_vue_countdown["default"],
    Mint: Mint["default"],
    AirdropAddressCard: AirdropAddressCard["default"],
    AirdropAwardCard: AirdropAwardCard["default"],
    InvitedCard: InvitedCard["default"],
    Whitelistcard: Whitelistcard["default"],
    MintSuccessCard: MintSuccessCard["default"],
    Ment: Ment["default"]
  },

  async mounted() {
    await this.$nextTick();
    await this.connect();
    await this.initEvent();
    this.nftMintLotteryList();
    this.nftMintnftList();
  },

  methods: {
    async initEvent() {
      window.ethereum && window.ethereum.removeAllListeners();
      window.ethereum && window.ethereum.on("accountsChanged", address => {
        this.address = address;
        this.nftMintGetInfo(this.address, 'ht');
      });
      window.ethereum && window.ethereum.on("chainChanged", async chainId => {
        if (Number(chainId) != this.ChainId) {
          return this.$dialog.alert({
            message: "请切换到Heco主网",
            confirmButtonText: "知道了,去切换",
            confirmButtonColor: '#7524f9'
          }).then(() => {
            try {
              window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{
                  chainId: wallet["a" /* wallet */].transfer16(this.ChainId)
                }]
              });
            } catch {
              ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                  chainId: wallet["a" /* wallet */].transfer16(this.ChainId),
                  chainName: "HECO",
                  rpcUrls: ["https://hecoinfo.com/"],
                  nativeCurrency: {
                    name: "HECO",
                    symbol: "HECO",
                    decimals: 18
                  }
                }]
              });
            } // on close

          });
        }
      });
    },

    async connect() {
      try {
        this.address = await wallet["a" /* wallet */].connect();
        await this.nftMintGetInfo(this.address, 'ht');
      } catch (e) {
        console.log(e);
      }
    },

    async nftMintGetInfo(address, chain) {
      const {
        data,
        status
      } = await client["a" /* USER_API */].nftMintGetInfo({
        address,
        chain
      });

      if (status == 0) {
        this.defaultData = data;
        this.awardAmount = data.luckNum;
        this.showAirdropAward = data.isLuck;
        this.endTime = data.fromStartTime > 0 ? new Date().getTime() + data.fromStartTime : 0;
      }
    },

    async nftMintLotteryList() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].nftMintLotteryList();

      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: "知道了",
          confirmButtonColor: '#7524f9'
        });
      }

      this.LotteryList = data.list;
    },

    async nftMintnftList() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].nftMintnftList({
        address: this.address,
        chain: this.chainName
      });

      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: "知道了",
          confirmButtonColor: '#7524f9'
        });
      }

      this.MentList = data.list;
    },

    InvitationCode() {
      this.address = wallet["a" /* wallet */].selectedAddress();
      this.show = true;
    },

    async paste() {
      if (navigator.clipboard) {
        const clipText = await navigator.clipboard.readText();

        if (clipText.replace(/\s/g, "")) {
          this.invitationCode = clipText.replace(/\s/g, "");
        } else {
          this.$toast("没有内容可以粘贴");
        }
      } else {
        this.$toast({
          message: '您的浏览器不支持粘贴功能',
          duration: 2000
        });
      }
    },

    async getToken(address) {
      const {
        data,
        status
      } = await client["a" /* USER_API */].nftMintGetToken({
        address
      });

      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: "知道了",
          confirmButtonColor: '#7524f9'
        });
      }

      this.token = data.token;
    },

    async invitationCodeSubmit() {
      if (!this.invitationCode) {
        this.$toast("邀请码不能为空");
        return;
      }

      try {
        await this.getToken(this.address);
        const sign = await wallet["a" /* wallet */].paritySign(this.token, this.address);
        console.log(sign);
        const {
          data,
          status
        } = await client["a" /* USER_API */].nftMintInvite({
          address: this.address,
          chain: 'ht',
          code: this.invitationCode,
          c_token: this.token,
          verifyToken: sign
        });

        if (status == 1) {
          return this.$dialog.alert({
            message: data,
            confirmButtonText: "知道了",
            confirmButtonColor: '#7524f9'
          });
        }

        this.$toast("邀请成功");
        this.show = false;
      } catch (error) {
        console.log(error);
        this.$toast('你取消了签名');
      }
    },

    async closeMint(MintNum) {
      this.showMint = false;

      if (MintNum) {
        const ChainId = await wallet["a" /* wallet */].getChainId();

        if (String(ChainId) != this.ChainId) {
          this.$dialog.alert({
            message: "请切换到Heco主网",
            confirmButtonText: "知道了,去切换",
            confirmButtonColor: '#7524f9'
          }).then(() => {
            try {
              window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{
                  chainId: wallet["a" /* wallet */].transfer16(this.ChainId)
                }]
              });
            } catch {
              ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                  chainId: wallet["a" /* wallet */].transfer16(this.ChainId),
                  chainName: "HECO",
                  rpcUrls: ["https://hecoinfo.com/"],
                  nativeCurrency: {
                    name: "HECO",
                    symbol: "HECO",
                    decimals: 18
                  }
                }]
              });
            }
          });
          return;
        }

        this.isLoading = true;
        const TXdata = await client["a" /* USER_API */].buildNftMintTxs({
          address: ethereum.selectedAddress,
          chain: 'ht',
          num: MintNum
        });
        const tx = {
          gas: TXdata.data.tx.fee.gasLimitMax || TXdata.data.tx.fee.gasLimit,
          gasPrice: TXdata.data.tx.fee.gasPrice,
          nonce: String(TXdata.data.tx.nonce),
          // ignored by MetaMask
          to: TXdata.data.tx.to,
          // Required except during contract publications.
          from: TXdata.data.tx.from,
          // must match user's active address.
          value: TXdata.data.tx.value,
          // Only required to send ether to the recipient from the initiating external account.
          data: TXdata.data.tx.data,
          chainId: TXdata.data.tx.chainId // required for EIP-155 chainIds

        };

        try {
          const send = await wallet["a" /* wallet */].setMintToken(tx);
          setTimeout(async () => {
            const {
              data,
              status
            } = await client["a" /* USER_API */].nftMintcheckTransaction({
              chain: 'ht',
              hash: send
            });

            if (status == 1) {
              this.isLoading = false;
              return this.$dialog.alert({
                message: data,
                confirmButtonText: "知道了",
                confirmButtonColor: '#7524f9'
              });
            }

            if (data.isSuccess) {
              this.isLoading = false;
              this.$toast("Mint成功");
              this.MintData = data.list;
              this.showMintSuccess = true;
            } else {
              this.isLoading = false;
              return this.$dialog.alert({
                message: 'Mint失败',
                confirmButtonText: "知道了"
              });
            }
          }, 5000);
        } catch (e) {
          this.isLoading = false;
          console.log(e);
        }
      }
    },

    async ableMent(Mentlist) {
      if (Mentlist.length == 0) {
        return this.$dialog.alert({
          message: '暂时没有可以Ment的NFT'
        });
      }

      this.showMent = true;
    },

    async closeMent(Mentids) {
      this.showMent = false;

      if (Mentids) {
        const ChainId = await wallet["a" /* wallet */].getChainId();

        if (Number(ChainId) != this.ChainId) {
          this.$dialog.alert({
            message: "请切换到Heco主网",
            confirmButtonText: "知道了,去切换",
            confirmButtonColor: '#7524f9'
          }).then(() => {
            try {
              window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{
                  chainId: wallet["a" /* wallet */].transfer16(this.ChainId)
                }]
              });
            } catch {
              ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                  chainId: wallet["a" /* wallet */].transfer16(this.ChainId),
                  chainName: "HECO",
                  rpcUrls: ["https://hecoinfo.com/"],
                  nativeCurrency: {
                    name: "HECO",
                    symbol: "HECO",
                    decimals: 18
                  }
                }]
              });
            }
          });
          return;
        }

        this.isLoading = true;
        const TXdata = await client["a" /* USER_API */].nftMintbuildNftMeltTxs({
          address: this.address,
          chain: 'ht',
          nftIds: Mentids.join(',')
        });
        const tx = {
          gas: TXdata.data.tx.fee.gasLimitMax || TXdata.data.tx.fee.gasLimit,
          gasPrice: TXdata.data.tx.fee.gasPrice,
          nonce: String(TXdata.data.tx.nonce),
          // ignored by MetaMask
          to: TXdata.data.tx.to,
          // Required except during contract publications.
          from: TXdata.data.tx.from,
          // must match user's active address.
          value: TXdata.data.tx.value,
          // Only required to send ether to the recipient from the initiating external account.
          data: TXdata.data.tx.data,
          chainId: TXdata.data.tx.chainId // required for EIP-155 chainIds

        };

        try {
          const send = await wallet["a" /* wallet */].setMintToken(tx);
          var MentTimer = setTimeout(async () => {
            const {
              data,
              status
            } = await client["a" /* USER_API */].nftMintcheckTransaction({
              chain: 'ht',
              hash: send
            });

            if (status == 1) {
              this.isLoading = false;
              return this.$dialog.alert({
                message: data,
                confirmButtonText: "知道了",
                confirmButtonColor: '#7524f9'
              });
            }

            if (data.status == 1) {
              console.log("MentTimer", MentTimer);
              clearInterval(MentTimer);
              clearTimeout(MentTimer2);
              this.isLoading = false;
              this.$toast("Ment成功");
              this.connect();
            }
          }, 3000);
          var MentTimer2 = setTimeout(() => {
            this.isLoading = false;
            this.connect();
            MentTimer && clearInterval(MentTimer);
            this.$dialog.alert({
              message: 'Ment失败',
              confirmButtonText: "知道了"
            });
          }, 1000 * 60);
        } catch (e) {
          this.isLoading = false;
          console.log(e);
        }
      }
    },

    closeAirdropAddressCard() {
      this.showAirdropAddress = false;
    },

    closeAirdropAwardCard() {
      this.showAirdropAward = false;
    },

    closeInvitedCard() {
      this.showInvitedlist = false;
    },

    closeWhitelistcard() {
      this.showWhitelist = false;
    },

    closeMintSuccess() {
      this.showMintSuccess = false;
      this.isLoading = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/polygon/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_polygonvue_type_script_lang_js_ = (polygonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/polygon/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(293)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_polygonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5db11046"
  
)

/* harmony default export */ var polygon = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map