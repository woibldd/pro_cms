exports.ids = [63,19,64];
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("22ea11dc", content, true, context)
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4a337f2a", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("41fdd25d", content, true, context)
};

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_adb65f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-adb65f7a] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-adb65f7a] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-adb65f7a] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-adb65f7a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-adb65f7a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-adb65f7a] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-adb65f7a] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-adb65f7a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-adb65f7a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-adb65f7a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-adb65f7a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-adb65f7a] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-adb65f7a] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-adb65f7a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-adb65f7a] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-adb65f7a] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-adb65f7a] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-adb65f7a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-adb65f7a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-adb65f7a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-adb65f7a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-adb65f7a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-adb65f7a] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-adb65f7a] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-adb65f7a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-adb65f7a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-adb65f7a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-adb65f7a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-adb65f7a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-adb65f7a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-adb65f7a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-adb65f7a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-adb65f7a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-adb65f7a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-adb65f7a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-adb65f7a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-adb65f7a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-adb65f7a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-adb65f7a] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-adb65f7a] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-adb65f7a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-adb65f7a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-adb65f7a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-adb65f7a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-adb65f7a] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-adb65f7a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-adb65f7a] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-adb65f7a] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-adb65f7a] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-adb65f7a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-adb65f7a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-adb65f7a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-adb65f7a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-adb65f7a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-adb65f7a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-adb65f7a] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-adb65f7a] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-adb65f7a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-adb65f7a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-adb65f7a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-adb65f7a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-adb65f7a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-adb65f7a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-adb65f7a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-adb65f7a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-adb65f7a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-adb65f7a] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-adb65f7a] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-adb65f7a] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-adb65f7a] {\n  background-color: #202024;\n}\n.theme-light .bigImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n}\n.theme-light .smallImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n  border-radius: 50%;\n}\n.theme-light .noImg[data-v-adb65f7a] {\n  border: 0.03rem solid #fff;\n}\n.theme-dark .bigImg[data-v-adb65f7a] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.theme-dark .smallImg[data-v-adb65f7a] {\n  border: 0.03rem solid #0A0E1F;\n  border-radius: 50%;\n}\n.setHeight[data-v-adb65f7a] {\n  min-height: 32vh !important;\n}\n.noData[data-v-adb65f7a] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-adb65f7a] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-adb65f7a] {\n  font-size: 0.37rem;\n}\n.setMargin[data-v-adb65f7a] {\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool[data-v-adb65f7a] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title[data-v-adb65f7a] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .bigImg[data-v-adb65f7a] {\n  width: 0.85rem;\n  height: 0.85rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .smallImg[data-v-adb65f7a] {\n  width: 0.85rem;\n  height: 0.85rem;\n  border-radius: 50%;\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImg[data-v-adb65f7a] {\n  display: inline-block;\n  width: 0.85rem;\n  height: 0.85rem;\n  line-height: 0.85rem;\n  border-radius: 50%;\n  font-size: 0.29rem;\n  font-weight: 700;\n  text-align: center;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgOne[data-v-adb65f7a] {\n  margin-left: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title .noImgTwo[data-v-adb65f7a] {\n  margin-left: -0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-line[data-v-adb65f7a] {\n  width: 100%;\n  height: 0.03rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex[data-v-adb65f7a] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-adb65f7a] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-left[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.11rem;\n  width: 3.33rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-one-header-about[data-v-adb65f7a] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-adb65f7a] {\n  text-align: right;\n  position: absolute;\n  right: 0.4rem;\n  margin-top: 0.13rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-adb65f7a] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-title-flex .trading-wrap-box-pool-title-right[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content[data-v-adb65f7a] {\n  padding: 0 0.4rem 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex[data-v-adb65f7a] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.4rem 0 0;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .setFont16[data-v-adb65f7a] {\n  font-size: 0.43rem !important;\n  margin-top: 0.13rem !important;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-adb65f7a] {\n  text-align: left;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-adb65f7a] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-left[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-adb65f7a] {\n  text-align: right;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-adb65f7a] :first-child {\n  font-size: 0.32rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-flex .trading-wrap-box-pool-right[data-v-adb65f7a] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake[data-v-adb65f7a] {\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  margin-top: 0.4rem;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-now[data-v-adb65f7a] {\n  background: #7524f9;\n  color: #fff;\n}\n.trading-wrap-box-pool .trading-wrap-box-pool-content .trading-wrap-box-pool-stake-soon[data-v-adb65f7a] {\n  color: #9ca5b3;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/trading/index.vue?vue&type=template&id=adb65f7a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.tradingList && _vm.tradingList.length>0)?_vm._ssrNode("<div data-v-adb65f7a>","</div>",_vm._l((_vm.tradingList),function(item,index){return _vm._ssrNode("<div class=\"trading-wrap-box-pool colorBackground1\" data-v-adb65f7a>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title\" data-v-adb65f7a>","</div>",[_vm._ssrNode(((item.fromIcon)?("<img"+(_vm._ssrAttr("src",item.fromIcon))+" alt class=\"bigImg colorBackground0\" data-v-adb65f7a>"):("<div class=\"noImg colorBackground2 noImgOne textSecond3 setFontFamily\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(item.fromSymbol.length> 4 ? item.fromSymbol.substring(0,4).toUpperCase(): item.fromSymbol.toUpperCase())+"\n        ")+"</div>"))+" "+((item.toIcon)?("<img"+(_vm._ssrAttr("src",item.toIcon))+" alt class=\"smallImg colorBackground0\" data-v-adb65f7a>"):("<div class=\"noImg noImgTwo colorBackground2 textSecond3 setFontFamily\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(item.toSymbol.length> 4 ? item.toSymbol.substring(0,4).toUpperCase(): item.toSymbol.toUpperCase())+"\n          ")+"</div>"))+" "),_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-flex\" data-v-adb65f7a>","</div>",[_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-left\" data-v-adb65f7a><div class=\"textPrimary0\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(item.fromSymbol.toUpperCase())+"/"+_vm._s(item.toSymbol .toUpperCase()))+"</div> <div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(item.chainName))+"</div></div> "),(!_vm.finished && _vm.activeType != 2)?_vm._ssrNode("<div class=\"trading-wrap-box-pool-title-right\" data-v-adb65f7a>","</div>",[_vm._ssrNode(((_vm.activeType == 0)?("<div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Ending')))+"</div>"):"<!---->")+" "+((_vm.activeType == 1)?("<div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Start')))+"</div>"):"<!---->")+" "),(item.countdown > 0)?_vm._ssrNode("<div data-v-adb65f7a>","</div>",[_c('van-count-down',{staticClass:"textPrimary0 setFontFamily",attrs:{"time":item.countdown,"format":_vm.formatEn}})],1):_vm._ssrNode(("<div class=\"textPrimary0\" data-v-adb65f7a>--</div>"))],2):(_vm.finished)?_vm._ssrNode(("<div class=\"trading-wrap-one-header-about colorSecond08 colorSecond18\" data-v-adb65f7a><span data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.finished')))+"</span></div>")):_vm._ssrNode(("<div data-v-adb65f7a></div>"))],2)],2),_vm._ssrNode(" <div class=\"trading-wrap-box-pool-content textSecond2\" data-v-adb65f7a><div class=\"trading-wrap-line colorLine\" data-v-adb65f7a></div> <div class=\"trading-wrap-box-pool-flex\" data-v-adb65f7a><div class=\"trading-wrap-box-pool-left\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Time')))+"</div> <div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.Reward')))+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-adb65f7a><div class=\"textSecond2 setFontFamily\" data-v-adb65f7a>"+_vm._ssrEscape("\n              "+_vm._s(item.startTime)+" — "+_vm._s(item.endTime)+" (GMT+8)\n            ")+"</div> <div class=\"setFontFamily textSecond2\" data-v-adb65f7a><span class=\"colorPrimary\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(item.rate)+"x")+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('trading.in'))+" BKB\n            ")+"</div></div></div> <div class=\"trading-wrap-line colorLine setMargin\" data-v-adb65f7a></div> "+((!_vm.finished && _vm.activeType == 0)?("<div class=\"trading-wrap-box-pool-flex\" data-v-adb65f7a><div class=\"trading-wrap-box-pool-left\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.TodayTradingValue')))+"</div> <div class=\"textPrimary0 setFontFamily setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              $"+_vm._s(_vm.milliFormat(item.allTradingVolumeToday))+"\n            ")+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.TodayTradingReward')))+"</div> <div class=\"setFontFamily colorPrimary setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              +"+_vm._s(_vm.milliFormat(item.rewardToday))+" BKB\n            ")+"</div></div></div>"):"<!---->")+" "+((_vm.activeType != 1)?("<div class=\"trading-wrap-box-pool-flex\" data-v-adb65f7a><div class=\"trading-wrap-box-pool-left\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.YourTradingValue')))+"</div> <div class=\"textPrimary0 setFontFamily setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              $"+_vm._s(_vm.milliFormat(item.allTradingVolume))+"\n            ")+"</div></div> <div class=\"trading-wrap-box-pool-right\" data-v-adb65f7a><div class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('trading.YourTradingReward')))+"</div> <div class=\"setFontFamily colorPrimary setFont16\" data-v-adb65f7a>"+_vm._ssrEscape("\n              +"+_vm._s(_vm.milliFormat(item.reward))+" BKB\n            ")+"</div></div></div>"):"<!---->")+" "+((!_vm.finished && _vm.activeType == 0)?("<div class=\"trading-wrap-box-pool-stake colorwhite colorBackgroundPrimary\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.swapNow"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 1)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.ComingSoon"))+"\n        ")+"</div>"):(!_vm.finished && _vm.activeType == 2)?("<div class=\"trading-wrap-box-pool-stake textSecond3 colorBackground2\" data-v-adb65f7a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("trading.finished"))+"\n        ")+"</div>"):"<!---->")+"</div>")],2)}),0):_vm._ssrNode(("<div"+(_vm._ssrClass("noData",!_vm.finished?'setHeight': ''))+" data-v-adb65f7a><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-adb65f7a> <p class=\"textSecond3\" data-v-adb65f7a>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/trading/index.vue?vue&type=template&id=adb65f7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/trading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tradingvue_type_script_lang_js_ = ({
  data() {
    return {
      formatEn: "DDd HHh mmm sss"
    };
  },

  props: {
    finished: {
      type: Boolean,
      default: false
    },
    tradingList: {
      type: Array,
      default: () => {}
    },
    activeType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    swap(swapNow) {
      this.$emit('swap', swapNow);
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    }

  }
});
// CONCATENATED MODULE: ./components/trading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tradingvue_type_script_lang_js_ = (tradingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/trading/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_tradingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "adb65f7a",
  "260c9f8b"
  
)

/* harmony default export */ var trading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #dfe0e3;\n  color: #171a26;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_38df161a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_38df161a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_38df161a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_38df161a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_38df161a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-38df161a] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-38df161a] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-38df161a] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-38df161a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-38df161a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-38df161a] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-38df161a] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-38df161a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-38df161a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-38df161a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-38df161a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-38df161a] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-38df161a] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-38df161a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-38df161a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-38df161a] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-38df161a] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-38df161a] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-38df161a] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-38df161a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-38df161a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-38df161a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-38df161a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-38df161a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-38df161a] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-38df161a] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-38df161a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-38df161a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-38df161a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-38df161a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-38df161a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-38df161a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-38df161a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-38df161a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-38df161a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-38df161a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-38df161a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-38df161a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-38df161a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-38df161a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-38df161a] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-38df161a] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-38df161a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-38df161a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-38df161a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-38df161a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-38df161a] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-38df161a] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-38df161a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-38df161a] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-38df161a] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-38df161a] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-38df161a] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-38df161a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-38df161a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-38df161a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-38df161a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-38df161a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-38df161a] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-38df161a] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-38df161a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-38df161a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-38df161a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-38df161a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-38df161a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-38df161a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-38df161a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-38df161a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-38df161a] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-38df161a] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-38df161a] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-38df161a] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-38df161a] {\n  background-color: #202024;\n}\n.title[data-v-38df161a] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.setHeight[data-v-38df161a] {\n  height: 8.19rem;\n}\n.subTitle[data-v-38df161a] {\n  margin-top: 0.27rem;\n  font-size: 0.37rem;\n  font-weight: normal;\n}\n.setOpactive[data-v-38df161a] {\n  opacity: 0.3;\n}\n.line[data-v-38df161a] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.content[data-v-38df161a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  padding-top: 0.8rem;\n}\n.content .content_invite[data-v-38df161a] {\n  width: 100%;\n}\n.content .content_invite .content_invite_flex[data-v-38df161a] {\n  border-radius: 0.16rem;\n  margin: 0.27rem 0.53rem 0.53rem;\n  padding: 0.27rem;\n}\n.content .content_invite .content_invite_flex .content_invite_flex_cont[data-v-38df161a] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content .content_invite .content_invite_flex .setMargin[data-v-38df161a] {\n  margin-top: 0.37rem;\n}\n.content .content_invite .content_invite_flex img[data-v-38df161a] {\n  width: 0.43rem;\n  height: 0.43rem;\n  vertical-align: sub;\n}\n.content .content_invite .content_invite_flex span[data-v-38df161a] {\n  display: inline-block;\n  margin-left: 0.13rem;\n  font-size: 0.37rem;\n}\n.content .content_invite .content_invite_flex .invite_number[data-v-38df161a] {\n  font-size: 0.37rem;\n}\n.content img[data-v-38df161a] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.content p[data-v-38df161a] {\n  font-family: bitkeep DIN;\n  font-size: 0.64rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-38df161a] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-38df161a] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(335);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("006073f2", content, true, context)
};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("435ae3c8", content, true, context)
};

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/trading/protocol.vue?vue&type=template&id=38df161a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{staticClass:"colorBackground1 setHeight",style:({ overflow: 'hidden' }),attrs:{"closeable":"","close-icon":_vm.closeIcon,"round":"","position":"bottom"},on:{"click-overlay":_vm.close,"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"title"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t("mining.ClaimRewards")))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 subTitle"},[_vm._v(_vm._s(_vm.$t("mining.ClaimRewardsub")))])]),_vm._v(" "),_c('div',{staticClass:"line colorLine"}),_vm._v(" "),_c('div',{staticClass:"content"},[_c('img',{staticClass:"logo",attrs:{"src":"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.milliFormat(_vm.waitClaim))+" BKB")])]),_vm._v(" "),_c('div',{staticClass:"confirm-bottom"},[_c('van-button',{staticClass:"swap-btn colorBackgroundPrimary",class:_vm.waitClaim == 0 ? 'setOpactive' : '',attrs:{"disabled":_vm.btnStatus},on:{"click":_vm.swapConfirm}},[_vm._v(_vm._s(_vm.$t("mining.confirm")))])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/trading/protocol.vue?vue&type=template&id=38df161a&scoped=true&

// EXTERNAL MODULE: ./tools/common.js
var common = __webpack_require__(23);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/trading/protocol.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var protocolvue_type_script_lang_js_ = ({
  data() {
    return {
      addAllContent: "",
      visables: this.show,
      btnStatus: false,
      closeIcon: "https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png"
    };
  },

  watch: {
    show(n) {
      this.visables = n;
    }

  },
  props: ["show", "theme", "waitClaim"],

  beforeMount() {
    BitKeepInvoke.appMode((err, res) => {
      if (res == 1) {
        this.closeIcon = "https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png";
      } else {
        this.closeIcon = "https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png";
      }
    });
  },

  mounted() {},

  methods: {
    swapConfirm: Object(common["b" /* debounce */])(async function () {
      if (this.waitClaim == 0) return;
      this.btnStatus = true;
      const {
        data,
        status
      } = await client["a" /* USER_API */].tradingClaim();

      if (status == 1) {
        this.close();
        setTimeout(() => {
          this.btnStatus = false;
        }, 1000);
        return this.$toast(data);
      }

      this.$toast(data);
      this.$emit("close", true);
      setTimeout(() => {
        this.btnStatus = false;
      }, 1000);
    }),

    close() {
      this.$emit("close", false);
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/trading/protocol.vue?vue&type=script&lang=js&
 /* harmony default export */ var trading_protocolvue_type_script_lang_js_ = (protocolvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/trading/protocol.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(202)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  trading_protocolvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38df161a",
  "0b7a15ea"
  
)

/* harmony default export */ var protocol = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrap-title {\n  width: 100%;\n}\n.wrap-title .van-tabs__wrap {\n  width: 100%;\n  padding-bottom: 0.13rem;\n}\n.wrap-title .van-tabs__nav--line {\n  width: 40%;\n  margin-left: 0.21rem;\n}\n.wrap-title .van-tab__text--ellipsis {\n  font-weight: 500;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  padding-bottom: 0.05rem;\n}\n.wrap-title .van-tabs__line {\n  border-radius: 0.03rem;\n  width: 0.43rem;\n}\n.van-dialog__message--has-title {\n  color: #7F828F;\n}\n.van-dialog__header {\n  color: #ee0a24;\n  font-size: 0.48rem;\n  font-weight: 500;\n}\n.popBox div {\n  margin-bottom: 0.27rem;\n  text-align: left;\n  line-height: 1.5;\n}\n.van-notice-bar {\n  font-size: 0.32rem;\n  line-height: 0.4rem;\n  padding: 0.16rem 0.21rem 0.16rem 0.27rem;\n}\n.van-notice-bar i {\n  display: inline-block;\n  margin-right: 0.13rem;\n}\n.van-notice-bar i img {\n  width: 0.43rem;\n  height: 0.43rem;\n}\n.van-dialog__message {\n  font-size: 0.43rem !important;\n  padding-left: 0.64rem !important;\n  padding-right: 0.64rem !important;\n  font-weight: 500;\n  line-height: 0.53rem;\n}\n.van-dialog__confirm {\n  font-weight: 500;\n  font-size: 0.45rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0 {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1 {\n  color: #515556;\n}\n.theme-light .textSecond2 {\n  color: #919899;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1 {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11 {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0 {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary {\n  color: #7524f9;\n}\n.theme-light .colorSecond01 {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorSecond08 {\n  color: #FFB800;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18 {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1 {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11 {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0 {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01 {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01 {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08 {\n  color: #FFB800;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18 {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0 {\n  background-color: #fafafa;\n}\n.theme-light .Background0 {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0 {\n  background-color: #17171A;\n}\n.theme-dark .Background1 {\n  background-color: #202024;\n}\n.loading {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.setLoadingHeight {\n  min-height: 5.33rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.trading .trading-wrap {\n  margin-bottom: 2.13rem;\n}\n.trading .trading-wrap .img {\n  position: relative;\n}\n.trading .trading-wrap .img img {\n  width: 100%;\n}\n.trading .trading-wrap .img .img-text {\n  position: absolute;\n  top: 0.21rem;\n  left: 0.43rem;\n  font-weight: 700;\n}\n.trading .trading-wrap .img .img-text :first-child {\n  font-size: 0.48rem;\n}\n.trading .trading-wrap .img .img-text :last-child {\n  font-size: 0.69rem;\n}\n.trading .trading-wrap .trading-wrap-status {\n  margin: 0.53rem 0.43rem 0.27rem;\n  font-size: 0.32rem;\n  position: relative;\n}\n.trading .trading-wrap .trading-wrap-status span {\n  display: inline-block;\n  margin-right: 0.53rem;\n  padding-bottom: 0.29rem;\n}\n.trading .trading-wrap .trading-wrap-bottom-line {\n  position: absolute;\n  bottom: 0;\n  left: 0.08rem;\n  z-index: 1;\n  width: 0.43rem;\n  height: 0.05rem;\n  border-radius: 0.08rem;\n}\n.trading .trading-wrap .trading-wrap-line {\n  width: 100%;\n  height: 0.03rem;\n}\n.trading .trading-wrap .trading-active-line-one {\n  transform: translateX(0.21rem) translateX(-50%);\n  transition-duration: 0.3s;\n}\n.trading .trading-wrap .trading-active-line-two {\n  transform: translateX(1.76rem) translateX(-50%);\n  transition-duration: 0.3s;\n}\n.trading .trading-wrap .trading-active-line-three {\n  transform: translateX(3.6rem) translateX(-50%);\n  transition-duration: 0.3s;\n}\n.trading .trading-wrap .trading-wrap-box {\n  margin: 0 0.43rem;\n}\n.trading .trading-wrap .trading-wrap-one {\n  margin: 0.4rem 0.43rem 0;\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-header {\n  display: flex;\n  justify-content: space-between;\n  height: 1.07rem;\n  line-height: 1.07rem;\n  padding: 0 0.21rem 0 0.4rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-header .trading-wrap-one-header-title img {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-header .trading-wrap-one-header-title .setImg {\n  width: 0.43rem;\n  height: 0.43rem;\n  vertical-align: middle;\n  margin-left: 0.16rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-header .trading-wrap-one-header-title span {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 500;\n  vertical-align: text-bottom;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-header .trading-wrap-one-header-right {\n  padding-right: 0.19rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-body {\n  padding: 0 0.4rem 0.19rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-body .trading-wrap-one-body-line {\n  margin-top: 0.4rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-body .trading-wrap-one-body-title {\n  font-size: 0.37rem;\n}\n.trading .trading-wrap .trading-wrap-one .trading-wrap-one-body-text {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;\n}\n.trading-wrap-line {\n  width: 100%;\n  height: 0.03rem;\n}\n.wrap-bottom {\n  height: 2.53rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0.43rem 0.91rem;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n.wrap-bottom .wrap-bottom-text {\n  margin-top: 0.21rem;\n}\n.wrap-bottom .wrap-bottom-text :first-child {\n  font-size: 0.37rem;\n}\n.wrap-bottom .wrap-bottom-text :last-child {\n  font-size: 0.43rem;\n}\n.wrap-bottom .swap-btn {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 3.15rem;\n  color: #fff;\n}\n.theme-light .van-dialog,\n.theme-light .van-dialog__footer,\n.theme-light .van-dialog .van-button--default {\n  background: #fff;\n}\n.theme-light .van-dialog [class*=van-hairline]::after,\n.theme-light .van-dialog__footer [class*=van-hairline]::after,\n.theme-light .van-dialog .van-button--default [class*=van-hairline]::after {\n  border: 0.03rem solid #F4F5FA;\n}\n.theme-light .van-dialog .popBox,\n.theme-light .van-dialog__footer .popBox,\n.theme-light .van-dialog .van-button--default .popBox {\n  color: #7F828F;\n}\n.theme-light .van-dialog .van-dialog__confirm,\n.theme-light .van-dialog__footer .van-dialog__confirm,\n.theme-light .van-dialog .van-button--default .van-dialog__confirm {\n  color: #0E0E0E;\n}\n.theme-light .van-dialog .van-dialog__confirm:active,\n.theme-light .van-dialog__footer .van-dialog__confirm:active,\n.theme-light .van-dialog .van-button--default .van-dialog__confirm:active {\n  color: #0E0E0E;\n}\n.theme-light .trading-wrap-status .setBorder {\n  border-bottom: 0.06rem solid #0E0E0E;\n  font-weight: 500;\n}\n.theme-dark .van-dialog,\n.theme-dark .van-dialog__footer,\n.theme-dark .van-dialog .van-button--default {\n  background: #171A26;\n}\n.theme-dark .van-dialog .popBox,\n.theme-dark .van-dialog__footer .popBox,\n.theme-dark .van-dialog .van-button--default .popBox {\n  color: #7F828F;\n}\n.theme-dark .van-dialog [class*=van-hairline]::after,\n.theme-dark .van-dialog__footer [class*=van-hairline]::after,\n.theme-dark .van-dialog .van-button--default [class*=van-hairline]::after {\n  border: 0.03rem solid #1F212E;\n}\n.theme-dark .van-dialog .van-dialog__confirm,\n.theme-dark .van-dialog__footer .van-dialog__confirm,\n.theme-dark .van-dialog .van-button--default .van-dialog__confirm {\n  color: #DFE0E3;\n}\n.theme-dark .van-dialog .van-dialog__confirm:active,\n.theme-dark .van-dialog__footer .van-dialog__confirm:active,\n.theme-dark .van-dialog .van-button--default .van-dialog__confirm:active {\n  color: #DFE0E3;\n}\n.theme-dark .trading-wrap-status .setBorder {\n  border-bottom: 0.06rem solid #DFE0E3;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/trading/index.vue?vue&type=template&id=9182ef34&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trading colorBackground0"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\">","</div>",[_c('van-loading',{attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_c('van-pull-refresh',{attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.onDownRefresh},model:{value:(_vm.refreshLoading),callback:function ($$v) {_vm.refreshLoading=$$v},expression:"refreshLoading"}},[_c('van-list',{attrs:{"finished":_vm.finished,"immediate-check":false,"loading-text":_vm.$t('mining.loading'),"finished-text":_vm.$t('base.nomore')},on:{"load":_vm.onLoadList},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('div',{staticClass:"trading-wrap"},[_c('van-notice-bar',{attrs:{"wrapable":"","scrollable":false,"color":"#FF8146","background":"rgba(255, 129, 70, 0.1)","left-icon":"https://cdn.bitkeep.vip/u_b_c2936690-7531-11ec-8de8-87fc79fc0305.png","mode":"closeable"}},[_vm._v(_vm._s(_vm.$t('trading.noticeBar')))]),_vm._v(" "),_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_b4082c50-a038-11ec-b054-8b7edc051038.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"img-text"},[_c('div',[_vm._v(_vm._s(_vm.$t('trading.make')))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.$t('trading.toGet')))])])]),_vm._v(" "),_c('div',{staticClass:"trading-wrap-status textSecond3"},_vm._l((_vm.activeList),function(item,index){return _c('span',{key:index,class:_vm.activeType == index ? 'textPrimary0 setBorder' : '',on:{"click":function($event){return _vm.tabChange(index)}}},[_vm._v(_vm._s(item))])}),0),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeType == 0),expression:"activeType == 0"}]},[_c('div',{staticClass:"trading-wrap-box"},[(_vm.isLoadingList)?_c('van-loading',{staticClass:"setLoadingHeight",attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")]):_c('tradingCom',{attrs:{"tradingList":_vm.tradingList,"activeType":0},on:{"swap":_vm.swap}})],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeType == 1),expression:"activeType == 1"}]},[_c('div',{staticClass:"trading-wrap-box"},[(_vm.isLoadingList)?_c('van-loading',{staticClass:"setLoadingHeight",attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")]):_c('tradingCom',{attrs:{"tradingList":_vm.tradingList,"activeType":1}})],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeType == 2),expression:"activeType == 2"}]},[_c('div',{staticClass:"trading-wrap-box"},[(_vm.isLoadingList)?_c('van-loading',{staticClass:"setLoadingHeight",attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")]):_c('tradingCom',{attrs:{"tradingList":_vm.tradingList,"activeType":2}})],1)]),_vm._v(" "),_c('div',{staticClass:"trading-wrap-one colorBackground1"},[_c('div',{staticClass:"trading-wrap-one-header"},[_c('div',{staticClass:"trading-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_b0f0bdb0-a039-11ec-ad8b-9ff4f858e021.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight textPrimary0"},[_vm._v(_vm._s(_vm.$t("trading.tradingRule")))])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"trading-wrap-one-header-right colorPrimary",on:{"click":_vm.learnMore}},[_vm._v(_vm._s(_vm.$t("mining.learnMore")))])])]),_vm._v(" "),_c('div',{staticClass:"trading-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"trading-wrap-one-body",on:{"click":_vm.learnMore}},[_c('p',{staticClass:"trading-wrap-one-body-text textSecond1"},[_vm._v("\n              "+_vm._s(_vm.$t("trading.ruleContentTitle"))+"\n            ")])])]),_vm._v(" "),_c('div',{staticClass:"wrap-bottom colorBackground1"},[_c('div',{staticClass:"wrap-bottom-text"},[_c('div',{staticClass:"textSecond3"},[_vm._v(_vm._s(_vm.$t("trading.UnclaimedReward")))]),_vm._v(" "),_c('div',{staticClass:"colorPrimary setFontFamily"},[_vm._v(_vm._s(_vm.milliFormat(_vm.waitClaim))+" BKB")])]),_vm._v(" "),_c('van-button',{staticClass:"swap-btn colorBackgroundSecond01",staticStyle:{"background-color":"#2AC8DD"},on:{"click":_vm.claim}},[_vm._v(_vm._s(_vm.$t("trading.claim")))])],1)],1)])],1),_vm._ssrNode(" "),_c('pup-protocol',{key:new Date().getTime(),attrs:{"show":_vm.show,"theme":_vm.theme,"waitClaim":_vm.waitClaim},on:{"close":_vm.close}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/trading/index.vue?vue&type=template&id=9182ef34&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(111);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./pages/activity/trading/protocol.vue + 4 modules
var protocol = __webpack_require__(287);

// EXTERNAL MODULE: ./components/trading/index.vue + 4 modules
var trading = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/trading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import activity from "@/components/activity";



/* harmony default export */ var tradingvue_type_script_lang_js_ = ({
  name: "trading",

  data() {
    return {
      status: false,
      show: false,
      isLoading: true,
      isLoadingList: false,
      refreshLoading: false,
      loading: false,
      //上拉加载
      finished: false,
      //上拉加载完毕
      start: 1,
      activeType: 0,
      theme: 0,
      waitClaim: 0,
      activeList: [this.$t("trading.Live"), this.$t("trading.Upcoming"), this.$t("trading.Past")],
      tradingList: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    firstState() {
      return this.local.firstStatus;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },
  components: {
    // activityCom: activity,
    pupProtocol: protocol["default"],
    tradingCom: trading["default"]
  },

  mounted() {
    this.firstEnter();
    this.getInfo();
    this.setIcon();
    this.tradingWaitClaim();
  },

  methods: {
    firstEnter() {
      let tit = "<div class='popBox'><div>" + this.$t("trading.tit1") + "</div><div>" + this.$t("trading.tit2") + "</div></div>";

      if (this.firstState) {
        this.$dialog.alert({
          title: this.$t("trading.popTit"),
          message: tit,
          confirmButtonText: this.$t("trading.btn"),
          getContainer: () => document.querySelector("body")
        });
        this.$store.commit('SET_firstStatus', false);
      } else {
        return;
      }
    },

    // 获取列表
    async getInfo() {
      if (!this.refreshLoading) this.isLoadingList = true;
      const {
        data,
        status
      } = await client["a" /* USER_API */].tradingGetList({
        start: this.start,
        limit: 20,
        type: this.activeType + 1
      });

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      var moreList = data.list;
      this.finished = false;

      if (this.start == 1) {
        this.tradingList = [];
        this.tradingList = moreList;
      } else {
        this.tradingList.push(...moreList);
      }

      this.refreshLoading = false;
      this.loading = false;
      this.isLoading = false;
      this.isLoadingList = false;
      this.$toast.clear();

      if (this.tradingList.length >= data.totalRows) {
        this.finished = true;
      }
    },

    // 上拉加载请求方法
    onLoadList() {
      this.start++;
      this.finished = false;
      this.getInfo();
    },

    onDownRefresh() {
      this.start = 1;
      this.getInfo();
    },

    async tradingWaitClaim() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].tradingWaitClaim();

      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.waitClaim = data;
    },

    tabChange(val) {
      this.activeType = val;
      this.getInfo();
    },

    setIcon() {
      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("trading.tradingTitle")); //设置主题

        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              this.theme = 1;
              body.setAttribute("class", "theme-dark");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png", () => {
                  this.$router.push("/activity/trading/history");
                });
              }, 500);
            } else {
              this.theme = 0;
              body.setAttribute("class", "theme-light");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png", () => {
                  this.$router.push("/activity/trading/history");
                });
              }, 500);
            }
          });
        });
      });
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    },

    claim() {
      this.show = true;
    },

    close(val) {
      if (val) {
        setTimeout(() => {
          this.tradingWaitClaim();
        }, 200);
      }

      this.show = false;
    },

    swap(swapNow) {
      // let swap = {
      //   symbol0: {
      //     symbol: "CAKE",
      //     chain: "CAKE",
      //     chainName: "CAKE",
      //     contract: "contract",
      //     icon: "123",
      //   },
      //   symbol1: {
      //     symbol: "BNB",
      //     chainName: "BNB",
      //     chain: "BNB",
      //     contract: "contract",
      //     icon: "123",
      //   },
      // }
      BitKeepInvoke.nativeApp(JSON.stringify(swapNow));
    },

    learnMore() {
      this.$router.push("/activity/trading/tradingRule");
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/trading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_tradingvue_type_script_lang_js_ = (tradingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/trading/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(334)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(336)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_tradingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e7122f22"
  
)

/* harmony default export */ var activity_trading = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map