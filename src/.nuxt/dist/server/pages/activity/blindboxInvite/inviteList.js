exports.ids = [41,35];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);



 // const requestlog = debug('bit-activity-request')
// const responselog = debug('bit-activity-response')
// const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL

const requestlog =  true ? (...arg) => {
  console.log("bit-activity-request:", ...arg);
} : undefined;
const responselog =  true ? (...arg) => {
  console.log("bit-activity-response:", ...arg);
} : undefined;
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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("15abc333", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("67f87180", content, true, context)
};

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #DFE0E3;\n  color: #171A26;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_3155a1e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_3155a1e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_3155a1e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_3155a1e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_3155a1e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-3155a1e2] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-3155a1e2] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-3155a1e2] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-3155a1e2] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-3155a1e2] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-3155a1e2] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-3155a1e2] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-3155a1e2] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-3155a1e2] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-3155a1e2] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-3155a1e2] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-3155a1e2] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-3155a1e2] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-3155a1e2] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-3155a1e2] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-3155a1e2] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-3155a1e2] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-3155a1e2] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-3155a1e2] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-3155a1e2] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-3155a1e2] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-3155a1e2] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-3155a1e2] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-3155a1e2] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-3155a1e2] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-3155a1e2] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-3155a1e2] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-3155a1e2] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-3155a1e2] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-3155a1e2] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-3155a1e2] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-3155a1e2] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-3155a1e2] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-3155a1e2] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-3155a1e2] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-3155a1e2] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-3155a1e2] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-3155a1e2] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-3155a1e2] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-3155a1e2] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-3155a1e2] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-3155a1e2] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-3155a1e2] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-3155a1e2] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-3155a1e2] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-3155a1e2] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-3155a1e2] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-3155a1e2] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-3155a1e2] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-3155a1e2] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-3155a1e2] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-3155a1e2] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-3155a1e2] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-3155a1e2] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-3155a1e2] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-3155a1e2] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-3155a1e2] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-3155a1e2] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-3155a1e2] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-3155a1e2] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-3155a1e2] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-3155a1e2] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-3155a1e2] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-3155a1e2] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-3155a1e2] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-3155a1e2] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-3155a1e2] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-3155a1e2] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-3155a1e2] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-3155a1e2] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-3155a1e2] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-3155a1e2] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-3155a1e2] {\n  background-color: #202024;\n}\n.title[data-v-3155a1e2] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.title p[data-v-3155a1e2] {\n  font-weight: 600;\n}\n.setOpactive[data-v-3155a1e2] {\n  opacity: 0.3;\n}\n.line[data-v-3155a1e2] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.ruleDetailcontent[data-v-3155a1e2] {\n  height: 50vh;\n  overflow: auto;\n  padding: 0.53rem;\n}\n.ruleDetailcontent img[data-v-3155a1e2] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.ruleDetailcontent .setF[data-v-3155a1e2] {\n  font-size: 0.43rem;\n}\n.ruleDetailcontent .setLineHeight[data-v-3155a1e2] {\n  line-height: 0.48rem;\n}\n.ruleDetailcontent p[data-v-3155a1e2] {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0.27rem;\n}\n.ruleDetailcontent li[data-v-3155a1e2] {\n  list-style: disc;\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-3155a1e2] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-3155a1e2] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(355);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("66a42927", content, true, context)
};

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/RuleDetail.vue?vue&type=template&id=3155a1e2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{staticClass:"colorBackground1",style:({ height: '50%', overflow: 'hidden' }),attrs:{"closeable":"","close-icon":_vm.closeIcon,"round":"","position":"bottom"},on:{"click-overlay":_vm.close,"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"title"},[_c('p',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.RuleTitle')))])]),_vm._v(" "),_c('div',{staticClass:"line colorLine"}),_vm._v(" "),_c('ul',{staticClass:"ruleDetailcontent"},[_c('p',{staticClass:"textPrimary0 setF"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.inviteRuleTitle')))]),_vm._v(" "),_c('li',{staticClass:"textSecond1 setLineHeight",domProps:{"innerHTML":_vm._s(_vm.$t('blindboxInvite.ruleDetail'))}}),_vm._v(" "),_c('li',{staticClass:"textSecond1 setLineHeight",domProps:{"innerHTML":_vm._s(_vm.$t('blindboxInvite.ruleDetail1'))}}),_vm._v(" "),_c('li',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.ruleDetail2')))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/RuleDetail.vue?vue&type=template&id=3155a1e2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/RuleDetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RuleDetailvue_type_script_lang_js_ = ({
  data() {
    return {
      visables: this.ruleDetailFlag,
      closeIcon: 'https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png'
    };
  },

  watch: {
    ruleDetailFlag(n) {
      this.visables = n;
    },

    theme(n) {
      if (n == 1) {
        this.closeIcon = 'https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png';
      } else {
        this.closeIcon = 'https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png';
      }
    }

  },
  props: ['ruleDetailFlag', 'theme'],
  methods: {
    close() {
      this.$emit('close', false);
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/RuleDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindboxInvite_RuleDetailvue_type_script_lang_js_ = (RuleDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/RuleDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(205)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(207)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindboxInvite_RuleDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3155a1e2",
  "71548ab0"
  
)

/* harmony default export */ var RuleDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_699a2a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_699a2a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_699a2a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_699a2a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteList_vue_vue_type_style_index_0_id_699a2a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-699a2a9b] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-699a2a9b] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-699a2a9b] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-699a2a9b] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-699a2a9b] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-699a2a9b] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-699a2a9b] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-699a2a9b] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-699a2a9b] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-699a2a9b] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-699a2a9b] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-699a2a9b] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-699a2a9b] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-699a2a9b] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-699a2a9b] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-699a2a9b] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-699a2a9b] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-699a2a9b] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-699a2a9b] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-699a2a9b] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-699a2a9b] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-699a2a9b] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-699a2a9b] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-699a2a9b] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-699a2a9b] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-699a2a9b] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-699a2a9b] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-699a2a9b] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-699a2a9b] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-699a2a9b] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-699a2a9b] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-699a2a9b] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-699a2a9b] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-699a2a9b] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-699a2a9b] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-699a2a9b] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-699a2a9b] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-699a2a9b] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-699a2a9b] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-699a2a9b] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-699a2a9b] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-699a2a9b] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-699a2a9b] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-699a2a9b] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-699a2a9b] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-699a2a9b] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-699a2a9b] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-699a2a9b] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-699a2a9b] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-699a2a9b] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-699a2a9b] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-699a2a9b] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-699a2a9b] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-699a2a9b] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-699a2a9b] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-699a2a9b] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-699a2a9b] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-699a2a9b] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-699a2a9b] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-699a2a9b] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-699a2a9b] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-699a2a9b] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-699a2a9b] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-699a2a9b] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-699a2a9b] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-699a2a9b] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-699a2a9b] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-699a2a9b] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-699a2a9b] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-699a2a9b] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-699a2a9b] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-699a2a9b] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-699a2a9b] {\n  background-color: #202024;\n}\n.invite-list-box[data-v-699a2a9b] {\n  padding-top: 0.27rem;\n  min-height: 100vh;\n}\n.invite-list-box .loading[data-v-699a2a9b] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.invite-list-box .setHeight[data-v-699a2a9b] {\n  min-height: 90vh;\n}\n.invite-list-box .invite-list-header[data-v-699a2a9b] {\n  margin: 0 0.43rem;\n  border-radius: 0.21rem 0.21rem 0 0;\n  color: #7524f9;\n  display: flex;\n  padding: 0.27rem 0.4rem 0.4rem;\n  line-height: 0.75rem;\n  background-color: rgba(117,36,249,0.1);\n}\n.invite-list-box .invite-list-header .color-line[data-v-699a2a9b] {\n  width: 0.03rem;\n  height: 0.96rem;\n  opacity: 0.1;\n  margin-top: 0.37rem;\n  background: #7524f9;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-699a2a9b] {\n  width: 50%;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-699a2a9b] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-left[data-v-699a2a9b] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-699a2a9b] {\n  width: 50%;\n  padding-left: 0.43rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-699a2a9b] :first-child {\n  font-size: 0.37rem;\n}\n.invite-list-box .invite-list-header .invite-list-header-right[data-v-699a2a9b] :last-child {\n  font-size: 0.64rem;\n}\n.invite-list-box .invite-row[data-v-699a2a9b] {\n  padding: 0 0.43rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n.invite-list-box .invite-line[data-v-699a2a9b] {\n  width: 100%;\n  height: 0.03rem;\n}\n.invite-list-box .invite-row-data[data-v-699a2a9b] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  margin: 0 0.43rem;\n}\n.invite-list-box .invite-row-data .invite-row-data-row[data-v-699a2a9b] {\n  font-family: \"bitkeep DIN\";\n}\n.invite-list-box .invite-row-data .invite-row-data-row .invite-row-data-col[data-v-699a2a9b] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.invite-list-box .noData[data-v-699a2a9b] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.invite-list-box .noData img[data-v-699a2a9b] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.invite-list-box .noData p[data-v-699a2a9b] {\n  font-size: 0.37rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/inviteList.vue?vue&type=template&id=699a2a9b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"invite-list colorBackground0"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-699a2a9b>","</div>",[_c('van-loading',{attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div class=\"invite-list-box\" data-v-699a2a9b>","</div>",[_vm._ssrNode("<div class=\"invite-list-header\" data-v-699a2a9b><div class=\"invite-list-header-left\" data-v-699a2a9b><div data-v-699a2a9b>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inforce")))+"</div> <div class=\"setFontFamily\" data-v-699a2a9b>"+_vm._ssrEscape(_vm._s(_vm.activeCount || 0))+"</div></div> <div class=\"color-line\" data-v-699a2a9b></div> <div class=\"invite-list-header-right\" data-v-699a2a9b><div data-v-699a2a9b>"+_vm._ssrEscape(_vm._s(_vm.$t("blindboxInvite.inactivated")))+"</div> <div class=\"setFontFamily\" data-v-699a2a9b>"+_vm._ssrEscape(_vm._s(_vm.unActiveCount || 0))+"</div></div></div> "),(_vm.inviteList.length > 0)?_vm._ssrNode("<div data-v-699a2a9b>","</div>",[_c('van-pull-refresh',{attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.onRefresh},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[_c('van-list',{staticClass:"setHeight",attrs:{"finished":_vm.finished,"immediate-check":false},on:{"load":_vm.getInviteList},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('van-row',{staticClass:"invite-row"},[_c('van-col',{staticClass:"invite-col textSecond3",attrs:{"span":"8"}},[_vm._v(_vm._s(_vm.$t("blindboxInvite.Address")))]),_vm._v(" "),_c('van-col',{staticClass:"invite-col textSecond3",attrs:{"span":"7"}},[_vm._v(_vm._s(_vm.$t("blindboxInvite.State")))]),_vm._v(" "),_c('van-col',{staticClass:"invite-col textSecond3",attrs:{"span":"9"}},[_vm._v(_vm._s(_vm.$t("blindboxInvite.Time")))])],1),_vm._v(" "),_c('div',{staticClass:"invite-line colorLine"}),_vm._v(" "),_vm._l((_vm.inviteList),function(item){return _c('div',{key:item.address,staticClass:"invite-row-data"},[_c('van-row',{staticClass:"invite-row-data-row",class:item.status == 1 ? 'textPrimary0' : 'textSecond3'},[_c('van-col',{staticClass:"invite-row-data-col",attrs:{"span":"8"}},[_vm._v(_vm._s(_vm._f("address")(item.address_friend)))]),_vm._v(" "),_c('van-col',{staticClass:"invite-row-data-col",attrs:{"span":"7"}},[_vm._v(_vm._s(item.status == 1 ? _vm.$t("blindboxInvite.inforce") : _vm.$t("blindboxInvite.inactivated")))]),_vm._v(" "),_c('van-col',{staticClass:"invite-row-data-col",attrs:{"span":"9"}},[_vm._v(_vm._s(item.create_time))])],1),_vm._v(" "),_c('div',{staticClass:"invite-line colorLine"})],1)})],2)],1)],1):_vm._ssrNode(("<div class=\"noData\" data-v-699a2a9b><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-699a2a9b> <p class=\"textSecond3\" data-v-699a2a9b>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))],2),_vm._ssrNode(" "),_c('ruleDetail',{attrs:{"ruleDetailFlag":_vm.ruleDetailFlag,"theme":_vm.theme},on:{"close":_vm.ruleDetailClose}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/inviteList.vue?vue&type=template&id=699a2a9b&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(111);

// EXTERNAL MODULE: ./pages/activity/blindboxInvite/RuleDetail.vue + 4 modules
var RuleDetail = __webpack_require__(286);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/inviteList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var inviteListvue_type_script_lang_js_ = ({
  data() {
    return {
      isLoading: true,
      finished: false,
      loading: false,
      refreshing: false,
      ruleDetailFlag: false,
      inviteList: [],
      activeCount: 0,
      unActiveCount: 0,
      theme: 0,
      start: 0,
      limit: 20,
      question: 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png'
    };
  },

  components: {
    ruleDetail: RuleDetail["default"]
  },
  filters: {
    address(item) {
      return item && item.substring(0, 6) + " .... " + item.substr(-4);
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },

  async created() {
    this.isLoading = false;
  },

  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("blindboxInvite.inviteFriends"));
      this.$nextTick(() => {
        BitKeepInvoke.appMode((err, res) => {
          let body = document.getElementsByTagName("body")[0];

          if (res == 1) {
            this.theme = 1;
            this.question = 'https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png';
            body.setAttribute("class", "theme-dark");
            BitKeepInvoke.setIconAction(this.question, () => {
              this.ruleDetailFlag = true;
            });
          } else {
            this.theme = 0;
            this.question = 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
            body.setAttribute("class", "theme-light");
            BitKeepInvoke.setIconAction(this.question, () => {
              this.ruleDetailFlag = true;
            });
          }
        });
      });
    });
  },

  mounted() {
    this.getInviteList();
  },

  methods: {
    async getInviteList() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getInviteList({
        start: this.start * this.limit,
        limit: this.limit
      });

      if (status == 1) {
        this.isLoading = false;
        this.loading = true;
        return this.$toast(data);
      }

      this.activeCount = data.activeCount;
      this.unActiveCount = data.unActiveCount;
      var moreList = data.list;
      moreList && this.inviteList.push(...moreList);
      this.isLoading = false;
      this.$toast.clear();
      this.loading = false;
      this.start++;

      if (this.inviteList.length >= data.total_count) {
        this.finished = true;
      }
    },

    ruleDetailClose() {
      this.ruleDetailFlag = false;
    },

    async onRefresh() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getInviteList({
        start: 0,
        limit: this.limit
      });

      if (status == 1) {
        this.isLoading = false;
        this.$toast(data);
      }

      this.rewardsList = data.data;
      this.refreshing = false;
    },

    getSub() {
      // 中间显示省略号
      let copy = JSON.parse(JSON.stringify(this.inviteLink));
      let fisrt = copy.substring(0, 14);
      this.inviteLink = fisrt + " .... " + copy.substr(-15);
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/inviteList.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindboxInvite_inviteListvue_type_script_lang_js_ = (inviteListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/inviteList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(354)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindboxInvite_inviteListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "699a2a9b",
  "787a2a62"
  
)

/* harmony default export */ var inviteList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=inviteList.js.map