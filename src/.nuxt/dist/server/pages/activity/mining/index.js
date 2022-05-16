exports.ids = [46,1,44,47,49];
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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ff7373b2", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("cadfcc3c", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("444ed4db", content, true, context)
};

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("189111c2", content, true, context)
};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("11d6a15c", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b4bb27bc", content, true, context)
};

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9d3d2c10", content, true, context)
};

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-41f07a04] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-41f07a04] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-41f07a04] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-41f07a04] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-41f07a04] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-41f07a04] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-41f07a04] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-41f07a04] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-41f07a04] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-41f07a04] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-41f07a04] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-41f07a04] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-41f07a04] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-41f07a04] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-41f07a04] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-41f07a04] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-41f07a04] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-41f07a04] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-41f07a04] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-41f07a04] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-41f07a04] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-41f07a04] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-41f07a04] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-41f07a04] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-41f07a04] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-41f07a04] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-41f07a04] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-41f07a04] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-41f07a04] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-41f07a04] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-41f07a04] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-41f07a04] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-41f07a04] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-41f07a04] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-41f07a04] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-41f07a04] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-41f07a04] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-41f07a04] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-41f07a04] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-41f07a04] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-41f07a04] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-41f07a04] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-41f07a04] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-41f07a04] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-41f07a04] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-41f07a04] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-41f07a04] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-41f07a04] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-41f07a04] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-41f07a04] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-41f07a04] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-41f07a04] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-41f07a04] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-41f07a04] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-41f07a04] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-41f07a04] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-41f07a04] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-41f07a04] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-41f07a04] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-41f07a04] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-41f07a04] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-41f07a04] {\n  background-color: #202024;\n}\n.theme-light .wrap-min[data-v-41f07a04] {\n  background: #fff;\n}\n.theme-light .line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .wrap[data-v-41f07a04] {\n  background: #fff;\n}\n.theme-light .about .about-wrap[data-v-41f07a04] {\n  background: #F8F9FA;\n}\n.theme-light .about .about-wrap-pos[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .about .about-wrap-pos p[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .about .about-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .about .about-con[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .about .viewAll[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-light .distribution .distribution-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .hold .hold-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .exchangeTotal[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .total[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .total span[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .distribution-man[data-v-41f07a04] {\n  background: #F8F9FA;\n}\n.theme-light .distribution-man .data div[data-v-41f07a04]:last-child {\n  color: #0E0E0E;\n}\n.theme-light .distribution-man .data>div[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .distribution-man .data>div[data-v-41f07a04] :last-child {\n  color: #0E0E0E;\n}\n.theme-light .hold .hold-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .appreciation .appreciation-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .appreciation-grid .appreciation-grid-flex div span[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .setIcon[data-v-41f07a04] {\n  color: #999ba3;\n}\n.theme-light .setLightColor[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .setDarkColor[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .more .more-title[data-v-41f07a04] {\n  color: #0E0E0E;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .more .more-line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .more .more-line span[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-dark .wrap-min[data-v-41f07a04] {\n  background: #171A26;\n}\n.theme-dark .line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .wrap[data-v-41f07a04] {\n  background: #fff;\n}\n.theme-dark .about .about-wrap[data-v-41f07a04] {\n  background: #0A0E1F;\n}\n.theme-dark .about .about-wrap-pos[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-wrap-pos p[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-con[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .about .viewAll[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-dark .distribution .distribution-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .hold .hold-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .exchangeTotal[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .total[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .total span[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .distribution-man[data-v-41f07a04] {\n  background: #212331;\n}\n.theme-dark .distribution-man .data[data-v-41f07a04] :last-child {\n  color: #DFE0E3;\n}\n.theme-dark .distribution-man .data>div[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .distribution-man .data>div span[data-v-41f07a04]:last-child {\n  color: #9CA5B3;\n}\n.theme-dark .hold .hold-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .appreciation .appreciation-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .appreciation-grid .appreciation-grid-flex div span[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .setIcon[data-v-41f07a04] {\n  color: #999ba3;\n}\n.theme-dark .setdarkColor[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .setDarkColor[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .more .more-title[data-v-41f07a04] {\n  color: #DFE0E3;\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .more .more-line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .more .more-line span[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.statusM[data-v-41f07a04] {\n  padding-bottom: 1.39rem;\n}\n.hold-content img[data-v-41f07a04] {\n  width: 1.07rem !important;\n  height: 1.07rem !important;\n}\n.about .about-wrap[data-v-41f07a04] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.07rem;\n}\n.about .about-wrap-pos[data-v-41f07a04] {\n  text-align: center;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  direction: cloumn;\n}\n.about .about-wrap-pos img[data-v-41f07a04] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.about .about-wrap-pos p[data-v-41f07a04] {\n  margin-top: 0.13rem;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  font-weight: 600;\n}\n.about .about-content[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.about .about-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.about .about-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.about .about-con[data-v-41f07a04] {\n  padding-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.about .viewAll[data-v-41f07a04] {\n  text-align: right;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  margin-top: 0.16rem;\n}\n.distribution[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.distribution .distribution-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.distribution .distribution-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.distribution .charts-img[data-v-41f07a04] {\n  text-align: center;\n  margin: 0.53rem;\n}\n.distribution .charts-img img[data-v-41f07a04] {\n  width: 2.93rem;\n  height: 2.93rem;\n}\n.distribution .charts-img .exchangeTotal[data-v-41f07a04] {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n}\n.distribution .charts-img .total[data-v-41f07a04] {\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n.distribution .distribution-man[data-v-41f07a04] {\n  margin-bottom: 0.8rem;\n  border-radius: 0.21rem;\n  padding: 0.27rem;\n}\n.distribution .distribution-man .data[data-v-41f07a04] {\n  display: flex;\n  justify-content: space-between;\n}\n.distribution .distribution-man .data div[data-v-41f07a04]:last-child {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n}\n.distribution .distribution-man .data>div[data-v-41f07a04] {\n  font-size: 0.37rem;\n  line-height: 0.91rem;\n  vertical-align: middle;\n}\n.distribution .distribution-man .data>div span[data-v-41f07a04]:first-child {\n  display: inline-block;\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n}\n.distribution .distribution-man .data>div span[data-v-41f07a04]:last-child {\n  vertical-align: middle;\n}\n.hold[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.hold .hold-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #0E0E0E;\n  vertical-align: middle;\n}\n.hold .hold-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.appreciation[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.appreciation .appreciation-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #0E0E0E;\n  vertical-align: middle;\n}\n.appreciation .appreciation-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.appreciation-grid[data-v-41f07a04] {\n  width: 100%;\n  text-align: center;\n}\n.appreciation-grid .appreciation-grid-flex[data-v-41f07a04] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.53rem;\n}\n.appreciation-grid .appreciation-grid-flex div[data-v-41f07a04] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 50%;\n  float: left;\n}\n.appreciation-grid .appreciation-grid-flex div img[data-v-41f07a04] {\n  margin-top: 0.13rem;\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.appreciation-grid .appreciation-grid-flex div span[data-v-41f07a04] {\n  font-size: 0.37rem;\n  color: #515556;\n  width: 3.73rem;\n  margin-top: 0.13rem;\n  line-height: 0.48rem;\n}\n.setFontFamily[data-v-41f07a04] {\n  font-family: \"bitkeep DIN\";\n}\n.more[data-v-41f07a04] {\n  margin: 0 0.43rem 1.09rem;\n}\n.more .more-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 1.2rem;\n  font-weight: 600;\n  color: #0E0E0E;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.more .more-line[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  height: 1.33rem;\n  border-bottom: 0.03rem solid #F4F5FA;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.more .more-line a[data-v-41f07a04] {\n  flex: 1;\n}\n.more .more-line img[data-v-41f07a04] {\n  width: 0.64rem;\n  height: 0.64rem;\n  vertical-align: middle;\n}\n.more .more-line span[data-v-41f07a04] {\n  color: #0E0E0E;\n  display: inline-block;\n  margin-left: 0.27rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #dfe0e3;\n  color: #171a26;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_c8495cfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_c8495cfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_c8495cfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_c8495cfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protocol_vue_vue_type_style_index_1_id_c8495cfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-c8495cfe] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-c8495cfe] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-c8495cfe] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-c8495cfe] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-c8495cfe] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-c8495cfe] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-c8495cfe] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-c8495cfe] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-c8495cfe] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-c8495cfe] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-c8495cfe] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-c8495cfe] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-c8495cfe] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-c8495cfe] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-c8495cfe] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-c8495cfe] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-c8495cfe] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-c8495cfe] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-c8495cfe] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-c8495cfe] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-c8495cfe] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-c8495cfe] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-c8495cfe] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-c8495cfe] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-c8495cfe] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-c8495cfe] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-c8495cfe] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-c8495cfe] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-c8495cfe] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-c8495cfe] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-c8495cfe] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-c8495cfe] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-c8495cfe] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-c8495cfe] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-c8495cfe] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-c8495cfe] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-c8495cfe] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-c8495cfe] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-c8495cfe] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-c8495cfe] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-c8495cfe] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-c8495cfe] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-c8495cfe] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-c8495cfe] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-c8495cfe] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-c8495cfe] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-c8495cfe] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-c8495cfe] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-c8495cfe] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-c8495cfe] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-c8495cfe] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-c8495cfe] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-c8495cfe] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-c8495cfe] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-c8495cfe] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-c8495cfe] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-c8495cfe] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-c8495cfe] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-c8495cfe] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-c8495cfe] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-c8495cfe] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-c8495cfe] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-c8495cfe] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-c8495cfe] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-c8495cfe] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-c8495cfe] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-c8495cfe] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-c8495cfe] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-c8495cfe] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-c8495cfe] {\n  background-color: #202024;\n}\n.title[data-v-c8495cfe] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.subTitle[data-v-c8495cfe] {\n  margin-top: 0.27rem;\n  font-size: 0.37rem;\n  font-weight: normal;\n}\n.setOpactive[data-v-c8495cfe] {\n  opacity: 0.3;\n}\n.line[data-v-c8495cfe] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.content[data-v-c8495cfe] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  padding-top: 0.53rem;\n}\n.content .content_invite[data-v-c8495cfe] {\n  width: 100%;\n}\n.content .content_invite .content_invite_flex[data-v-c8495cfe] {\n  border-radius: 0.16rem;\n  margin: 0.27rem 0.53rem 0.53rem;\n  padding: 0.27rem;\n}\n.content .content_invite .content_invite_flex .content_invite_flex_cont[data-v-c8495cfe] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content .content_invite .content_invite_flex .setMargin[data-v-c8495cfe] {\n  margin-top: 0.37rem;\n}\n.content .content_invite .content_invite_flex img[data-v-c8495cfe] {\n  width: 0.43rem;\n  height: 0.43rem;\n  vertical-align: sub;\n}\n.content .content_invite .content_invite_flex span[data-v-c8495cfe] {\n  display: inline-block;\n  margin-left: 0.13rem;\n  font-size: 0.37rem;\n}\n.content .content_invite .content_invite_flex .invite_number[data-v-c8495cfe] {\n  font-size: 0.37rem;\n}\n.content img[data-v-c8495cfe] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.content p[data-v-c8495cfe] {\n  font-family: bitkeep DIN;\n  font-size: 0.64rem;\n  margin: 0.27rem;\n}\n.confirm-bottom[data-v-c8495cfe] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-c8495cfe] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #DFE0E3;\n  color: #171A26;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_75fc548f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_75fc548f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_75fc548f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_75fc548f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RuleDetail_vue_vue_type_style_index_1_id_75fc548f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-75fc548f] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-75fc548f] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-75fc548f] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-75fc548f] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-75fc548f] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-75fc548f] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-75fc548f] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-75fc548f] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-75fc548f] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-75fc548f] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-75fc548f] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-75fc548f] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-75fc548f] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-75fc548f] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-75fc548f] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-75fc548f] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-75fc548f] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-75fc548f] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-75fc548f] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-75fc548f] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-75fc548f] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-75fc548f] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-75fc548f] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-75fc548f] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-75fc548f] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-75fc548f] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-75fc548f] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-75fc548f] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-75fc548f] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-75fc548f] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-75fc548f] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-75fc548f] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-75fc548f] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-75fc548f] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-75fc548f] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-75fc548f] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-75fc548f] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-75fc548f] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-75fc548f] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-75fc548f] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-75fc548f] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-75fc548f] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-75fc548f] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-75fc548f] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-75fc548f] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-75fc548f] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-75fc548f] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-75fc548f] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-75fc548f] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-75fc548f] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-75fc548f] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-75fc548f] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-75fc548f] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-75fc548f] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-75fc548f] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-75fc548f] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-75fc548f] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-75fc548f] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-75fc548f] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-75fc548f] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-75fc548f] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-75fc548f] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-75fc548f] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-75fc548f] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-75fc548f] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-75fc548f] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-75fc548f] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-75fc548f] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-75fc548f] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-75fc548f] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-75fc548f] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-75fc548f] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-75fc548f] {\n  background-color: #202024;\n}\n.title[data-v-75fc548f] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.title p[data-v-75fc548f] {\n  font-weight: 600;\n}\n.setOpactive[data-v-75fc548f] {\n  opacity: 0.3;\n}\n.line[data-v-75fc548f] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.ruleDetailcontent[data-v-75fc548f] {\n  height: 50vh;\n  overflow: auto;\n  padding: 0.53rem;\n}\n.ruleDetailcontent img[data-v-75fc548f] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.ruleDetailcontent .setF[data-v-75fc548f] {\n  font-size: 0.43rem;\n}\n.ruleDetailcontent .setLineHeight[data-v-75fc548f] {\n  line-height: 0.48rem;\n}\n.ruleDetailcontent p[data-v-75fc548f] {\n  font-size: 0.37rem;\n  line-height: 0.59rem;\n  margin: 0 0 0.27rem;\n}\n.confirm-bottom[data-v-75fc548f] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-75fc548f] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-popup__close-icon--top-right {\n  top: 0.27rem;\n  right: 0.24rem;\n}\n.van-popup__close-icon--top-right img {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.theme-dark .van-toast {\n  background-color: #DFE0E3;\n  color: #171A26;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_1_id_6fc736eb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_1_id_6fc736eb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_1_id_6fc736eb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_1_id_6fc736eb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inviteRuleDetail_vue_vue_type_style_index_1_id_6fc736eb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-6fc736eb] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-6fc736eb] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-6fc736eb] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-6fc736eb] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-6fc736eb] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-6fc736eb] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-6fc736eb] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-6fc736eb] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-6fc736eb] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-6fc736eb] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-6fc736eb] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-6fc736eb] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-6fc736eb] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-6fc736eb] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-6fc736eb] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-6fc736eb] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-6fc736eb] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-6fc736eb] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-6fc736eb] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-6fc736eb] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-6fc736eb] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-6fc736eb] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-6fc736eb] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-6fc736eb] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-6fc736eb] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-6fc736eb] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-6fc736eb] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-6fc736eb] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-6fc736eb] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-6fc736eb] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-6fc736eb] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-6fc736eb] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-6fc736eb] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-6fc736eb] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-6fc736eb] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-6fc736eb] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-6fc736eb] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-6fc736eb] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-6fc736eb] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-6fc736eb] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-6fc736eb] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-6fc736eb] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-6fc736eb] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-6fc736eb] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-6fc736eb] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-6fc736eb] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-6fc736eb] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-6fc736eb] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-6fc736eb] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-6fc736eb] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-6fc736eb] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-6fc736eb] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-6fc736eb] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-6fc736eb] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-6fc736eb] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-6fc736eb] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-6fc736eb] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-6fc736eb] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-6fc736eb] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-6fc736eb] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-6fc736eb] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-6fc736eb] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-6fc736eb] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-6fc736eb] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-6fc736eb] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-6fc736eb] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-6fc736eb] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-6fc736eb] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-6fc736eb] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-6fc736eb] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-6fc736eb] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-6fc736eb] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-6fc736eb] {\n  background-color: #202024;\n}\n.title[data-v-6fc736eb] {\n  margin: 0.37rem 0.43rem;\n  text-align: center;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.title p[data-v-6fc736eb] {\n  font-weight: 600;\n}\n.setOpactive[data-v-6fc736eb] {\n  opacity: 0.3;\n}\n.line[data-v-6fc736eb] {\n  width: 100%;\n  margin-top: 0;\n  height: 0.03rem;\n}\n.ruleDetailcontent[data-v-6fc736eb] {\n  height: 50vh;\n  overflow: auto;\n  padding: 0.53rem;\n  height: 68%;\n  overflow: scroll;\n}\n.ruleDetailcontent img[data-v-6fc736eb] {\n  width: 1.28rem;\n  height: 1.28rem;\n}\n.ruleDetailcontent .setF[data-v-6fc736eb] {\n  font-size: 0.43rem;\n}\n.ruleDetailcontent .setLineHeight[data-v-6fc736eb] {\n  line-height: 0.48rem;\n}\n.ruleDetailcontent li[data-v-6fc736eb] {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0.27rem;\n  list-style: disc;\n}\n.ruleDetailcontent p[data-v-6fc736eb] {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  margin: 0 0.27rem 0.27rem;\n}\n.confirm-bottom[data-v-6fc736eb] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0 0.91rem;\n}\n.confirm-bottom .swap-btn[data-v-6fc736eb] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 8rem;\n  left: 50%;\n  color: #fff;\n  transform: translateX(-50%);\n  z-index: 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("70044200", content, true, context)
};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b02dbce8", content, true, context)
};

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/activity/index.vue?vue&type=template&id=41f07a04&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrap-min statusM"},[_vm._ssrNode("<div class=\"about\" data-v-41f07a04><div class=\"about-wrap\" data-v-41f07a04><div class=\"about-wrap-pos\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png\" alt data-v-41f07a04> <p data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.about")))+"</p></div></div> <div class=\"about-content\" data-v-41f07a04><div class=\"about-title\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_82d5d310-a111-11ec-8c7a-8d02428f9af4.png\" data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.Introduce")))+"</span></div> <div class=\"about-con\" data-v-41f07a04><span data-v-41f07a04>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("mining.aboutContent1"))+"\n        ")+"</span> <span data-v-41f07a04>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("mining.aboutContent2"))+"\n        ")+"</span></div> <div class=\"viewAll\" data-v-41f07a04>"+_vm._ssrEscape("\n        "+_vm._s(!this.flag ? _vm.$t("mining.viewAll") : _vm.$t("mining.pickUp"))+"\n      ")+"</div></div></div> <div class=\"line\" data-v-41f07a04></div> <div class=\"distribution\" data-v-41f07a04><div class=\"distribution-title\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_82d62130-a111-11ec-8c7a-8d02428f9af4.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.distribution")))+"</span></div> <div class=\"charts-img\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_82d2c5d0-a111-11ec-8c7a-8d02428f9af4.png\" alt data-v-41f07a04> <p class=\"total\" data-v-41f07a04>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t("mining.total")))+"<span class=\"exchangeTotal\" data-v-41f07a04>600,000,000</span></p></div> <div class=\"distribution-man\" data-v-41f07a04><div class=\"data\" data-v-41f07a04><div data-v-41f07a04><span style=\"background: #7524f9\" data-v-41f07a04></span> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.mining")))+"</span></div> <div class=\"textPrimary0\" data-v-41f07a04>50%</div></div> <div class=\"data\" data-v-41f07a04><div data-v-41f07a04><span style=\"background: #2AC8DD\" data-v-41f07a04></span> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.eco")))+"</span></div> <div class=\"textPrimary0\" data-v-41f07a04>20%</div></div> <div class=\"data\" data-v-41f07a04><div data-v-41f07a04><span style=\"background: #ff8146\" data-v-41f07a04></span> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.community"))+" ")+"</span></div> <div class=\"textPrimary0\" data-v-41f07a04>15%</div></div> <div class=\"data\" data-v-41f07a04><div data-v-41f07a04><span style=\"background: #f04e98\" data-v-41f07a04></span> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.partner")))+"</span></div> <div class=\"textPrimary0\" data-v-41f07a04>10%</div></div> <div class=\"data\" data-v-41f07a04><div data-v-41f07a04><span style=\"background: rgba(191, 203, 224, 0.7)\" data-v-41f07a04></span> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tram")))+"</span></div> <div class=\"textPrimary0\" data-v-41f07a04>5%</div></div></div></div> <div class=\"line\" data-v-41f07a04></div> <div class=\"hold\" data-v-41f07a04><div class=\"hold-title\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_1e351000-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold")))+"</span></div> <div class=\"appreciation-grid hold-content\" data-v-41f07a04><div class=\"appreciation-grid-flex\" data-v-41f07a04><div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22c6f430-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold1")))+"</span></div> <div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22c82cb0-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold2")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-41f07a04><div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22c6a610-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold3")))+"</span></div> <div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22c8c8f0-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold4")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-41f07a04><div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22c657f0-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold5")))+"</span></div> <div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22c79070-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold6")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-41f07a04><div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22e355d0-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold7")))+"</span></div> <div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_22e5c6d0-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold8")))+"</span></div></div></div></div> <div class=\"line\" data-v-41f07a04></div> <div class=\"appreciation\" data-v-41f07a04><div class=\"appreciation-title\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_9b0a9cd0-a112-11ec-b5cd-6f94e6599e38.png\" data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciation")))+"</span></div> <div class=\"appreciation-grid\" data-v-41f07a04><div class=\"appreciation-grid-flex\" data-v-41f07a04><div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_9722db50-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationSwap")))+"</span></div> <div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_97232970-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationCoin")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-41f07a04><div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_9721f0f0-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationPool")))+"</span></div> <div data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_97230260-a112-11ec-b5cd-6f94e6599e38.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationValut")))+"</span></div></div></div></div> <div class=\"line\" data-v-41f07a04></div> "),_vm._ssrNode("<div class=\"more\" data-v-41f07a04>","</div>",[_vm._ssrNode("<div class=\"more-title\" data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.more")))+"</div> "),_vm._ssrNode("<div class=\"more-line\" data-v-41f07a04>","</div>",[_vm._ssrNode("<a href=\"https://www.bitkeep.com/\" target=\"_blank\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-41f07a04><span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.website")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"more-line\" data-v-41f07a04>","</div>",[_vm._ssrNode("<a href=\"https://twitter.com/BitKeepOS\" target=\"_blank\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.twitter")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"more-line\" data-v-41f07a04>","</div>",[_vm._ssrNode("<a href=\"https://t.me/bitkeep\" target=\"_blank\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.telegram")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"more-line\" data-v-41f07a04>","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.src))+" target=\"_blank\" data-v-41f07a04><img src=\"https://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-41f07a04> <span data-v-41f07a04>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.explorer")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/activity/index.vue?vue&type=template&id=41f07a04&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/activity/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var activityvue_type_script_lang_js_ = ({
  data() {
    return {
      src: "https://cn.etherscan.com/token/0xcadd468f1bca4b0d637d6051cbc576a830f00000",
      flag: false
    };
  },

  methods: {
    viewAll() {
      this.flag = !this.flag;
      let dom = document.getElementsByClassName("about-con")[0];

      if (this.flag) {
        dom.setAttribute("style", "-webkit-line-clamp:10");
      } else {
        dom.setAttribute("style", "-webkit-line-clamp:2");
      }
    }

  }
});
// CONCATENATED MODULE: ./components/activity/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_activityvue_type_script_lang_js_ = (activityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/activity/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(169)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_activityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41f07a04",
  "f1ba068a"
  
)

/* harmony default export */ var activity = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/protocol.vue?vue&type=template&id=c8495cfe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{staticClass:"colorBackground1",style:({ height: '54%', overflow: 'hidden' }),attrs:{"closeable":"","close-icon":_vm.closeIcon,"round":"","position":"bottom"},on:{"click-overlay":_vm.close,"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"title"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t("mining.ClaimRewards")))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 subTitle"},[_vm._v(_vm._s(_vm.$t("mining.ClaimRewardsub")))])]),_vm._v(" "),_c('div',{staticClass:"line colorLine"}),_vm._v(" "),_c('div',{staticClass:"content"},[_c('img',{staticClass:"logo",attrs:{"src":"https://cdn.bitkeep.vip/u_b_27f9ea80-a03a-11ec-ad8b-9ff4f858e021.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.milliFormat(_vm.unclaimReward + _vm.sumReward))+" BKB")]),_vm._v(" "),_c('div',{staticClass:"content_invite"},[_c('div',{staticClass:"content_invite_flex colorBackground3"},[_c('div',{staticClass:"content_invite_flex_cont"},[_c('div',[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t("mining.tradingRewards")))])]),_vm._v(" "),_c('div',{staticClass:"invite_number textPrimary0 setFontFamily"},[_vm._v(_vm._s(_vm.milliFormat(_vm.unclaimReward))+" BKB")])]),_vm._v(" "),_c('div',{staticClass:"content_invite_flex_cont setMargin"},[_c('div',[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e65101e0-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t("mining.invitationRewards")))])]),_vm._v(" "),_c('div',{staticClass:"invite_number textPrimary0 setFontFamily"},[_vm._v(_vm._s(_vm.milliFormat(_vm.sumReward))+" BKB")])])])])]),_vm._v(" "),_c('div',{staticClass:"confirm-bottom"},[_c('van-button',{staticClass:"swap-btn colorBackgroundPrimary",class:(_vm.unclaimReward + _vm.sumReward) == 0 ? 'setOpactive' : '',attrs:{"disabled":_vm.btnStatus},on:{"click":_vm.swapConfirm}},[_vm._v(_vm._s(_vm.$t("mining.confirm")))])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/protocol.vue?vue&type=template&id=c8495cfe&scoped=true&

// EXTERNAL MODULE: ./tools/common.js
var common = __webpack_require__(23);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/protocol.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },

    theme(n) {
      if (n == 1) {
        this.closeIcon = "https://cdn.bitkeep.vip/u_b_d71e28c0-4c2d-11ec-ad04-d1b66ed0d35e.png";
      } else {
        this.closeIcon = "https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png";
      }
    }

  },
  props: ["show", "theme", "unclaimReward", "sumReward"],

  mounted() {// this.filter_unclaimReward = this.unclaimReward && this.milliFormat(this.unclaimReward)
    // this.filter_sumReward = this.sumReward && this.milliFormat(this.sumReward)
  },

  methods: {
    swapConfirm: Object(common["b" /* debounce */])(async function () {
      if (this.unclaimReward + this.sumReward == 0) return;
      this.btnStatus = true;
      const {
        data,
        status
      } = await client["a" /* USER_API */].receiveAward();

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
// CONCATENATED MODULE: ./pages/activity/mining/protocol.vue?vue&type=script&lang=js&
 /* harmony default export */ var mining_protocolvue_type_script_lang_js_ = (protocolvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/protocol.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(173)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mining_protocolvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c8495cfe",
  "387a5142"
  
)

/* harmony default export */ var protocol = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/RuleDetail.vue?vue&type=template&id=75fc548f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{staticClass:"colorBackground1",style:({ height: '60%', overflow: 'hidden' }),attrs:{"closeable":"","close-icon":_vm.closeIcon,"round":"","position":"bottom"},on:{"click-overlay":_vm.close,"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"title"},[_c('p',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('mining.miningRuleTitle')))])]),_vm._v(" "),_c('div',{staticClass:"line colorLine"}),_vm._v(" "),_c('div',{staticClass:"ruleDetailcontent"},[_c('p',{staticClass:"textPrimary0 setF"},[_vm._v(_vm._s(_vm.$t('mining.ruleDetail')))]),_vm._v(" "),_c('p',{staticClass:"textSecond1 setLineHeight",domProps:{"innerHTML":_vm._s(_vm.$t('mining.ruleDetail1'))}}),_vm._v(" "),_c('p',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t('mining.ruleDetail2')))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/RuleDetail.vue?vue&type=template&id=75fc548f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/RuleDetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
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
      this.$emit('ruleDetailClose', false);
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/mining/RuleDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var mining_RuleDetailvue_type_script_lang_js_ = (RuleDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/RuleDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(177)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mining_RuleDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75fc548f",
  "681f6392"
  
)

/* harmony default export */ var RuleDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/inviteRuleDetail.vue?vue&type=template&id=6fc736eb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{staticClass:"colorBackground1",style:({ height: '50%', overflow: 'hidden' }),attrs:{"closeable":"","close-icon":_vm.closeIcon,"round":"","position":"bottom"},on:{"click-overlay":_vm.close,"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"title"},[_c('p',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.RuleTitle')))])]),_vm._v(" "),_c('div',{staticClass:"line colorLine"}),_vm._v(" "),_c('ul',{staticClass:"ruleDetailcontent"},[_c('p',{staticClass:"textPrimary0 setF"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.myInviteRuleTitle')))]),_vm._v(" "),_c('li',{staticClass:"textSecond1 setLineHeight",domProps:{"innerHTML":_vm._s(_vm.$t('blindboxInvite.myRuleDetail'))}}),_vm._v(" "),_c('li',{staticClass:"textSecond1 setLineHeight",domProps:{"innerHTML":_vm._s(_vm.$t('blindboxInvite.myRuleDetail1'))}}),_vm._v(" "),_c('li',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.myRuleDetail2')))]),_vm._v(" "),_c('li',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.myRuleDetail3')))]),_vm._v(" "),_c('li',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.myRuleDetail4')))]),_vm._v(" "),_c('li',{staticClass:"textSecond1"},[_vm._v(_vm._s(_vm.$t('blindboxInvite.myRuleDetail5')))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/inviteRuleDetail.vue?vue&type=template&id=6fc736eb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/inviteRuleDetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inviteRuleDetailvue_type_script_lang_js_ = ({
  data() {
    return {
      visables: this.inviteRuleDetailFlag,
      closeIcon: 'https://cdn.bitkeep.vip/u_b_991190f0-356f-11ec-8c2d-251a27ef7eba.png'
    };
  },

  watch: {
    inviteRuleDetailFlag(n) {
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
  props: ['inviteRuleDetailFlag', 'theme'],
  methods: {
    close() {
      this.$emit('closeInvite', false);
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/mining/inviteRuleDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var mining_inviteRuleDetailvue_type_script_lang_js_ = (inviteRuleDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/inviteRuleDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(179)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(181)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mining_inviteRuleDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fc736eb",
  "52258400"
  
)

/* harmony default export */ var inviteRuleDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-dialog__message {\n  font-size: 0.43rem !important;\n  padding-left: 0.64rem !important;\n  padding-right: 0.64rem !important;\n  font-weight: 500;\n  line-height: 0.53rem;\n}\n.van-dialog__confirm {\n  font-weight: 500;\n  font-size: 0.45rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_472b1f82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_472b1f82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_472b1f82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_472b1f82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_472b1f82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-472b1f82] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-472b1f82] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-472b1f82] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-472b1f82] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-472b1f82] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-472b1f82] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-472b1f82] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-472b1f82] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-472b1f82] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-472b1f82] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-472b1f82] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-472b1f82] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-472b1f82] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-472b1f82] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-472b1f82] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-472b1f82] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-472b1f82] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-472b1f82] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-472b1f82] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-472b1f82] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-472b1f82] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-472b1f82] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-472b1f82] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-472b1f82] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-472b1f82] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-472b1f82] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-472b1f82] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-472b1f82] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-472b1f82] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-472b1f82] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-472b1f82] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-472b1f82] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-472b1f82] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-472b1f82] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-472b1f82] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-472b1f82] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-472b1f82] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-472b1f82] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-472b1f82] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-472b1f82] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-472b1f82] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-472b1f82] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-472b1f82] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-472b1f82] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-472b1f82] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-472b1f82] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-472b1f82] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-472b1f82] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-472b1f82] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-472b1f82] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-472b1f82] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-472b1f82] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-472b1f82] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-472b1f82] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-472b1f82] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-472b1f82] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-472b1f82] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-472b1f82] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-472b1f82] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-472b1f82] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-472b1f82] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-472b1f82] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-472b1f82] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-472b1f82] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-472b1f82] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-472b1f82] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-472b1f82] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-472b1f82] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-472b1f82] {\n  background-color: #202024;\n}\n.theme-light .mining[data-v-472b1f82] {\n  background: #F8F9FA;\n}\n.theme-light .mining .van-progress[data-v-472b1f82] {\n  border-radius: 0.27rem;\n  background: #F4F5FA;\n}\n.theme-light .mining .mining-wrap-one[data-v-472b1f82] {\n  background: #fff;\n}\n.theme-light .mining .mining-wrap-one .produced[data-v-472b1f82] :first-child {\n  color: #919899;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header[data-v-472b1f82] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-472b1f82] {\n  color: #9CA5B3;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-472b1f82] {\n  color: #2AC8DD;\n  background: rgba(28,189,181,0.1);\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-472b1f82] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-472b1f82] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-startCountdown[data-v-472b1f82] {\n  color: #919899;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-time[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-day[data-v-472b1f82] {\n  color: #919899;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-title[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-amount[data-v-472b1f82] {\n  color: #919899;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-number[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol[data-v-472b1f82] {\n  color: #919899;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-todyVolue[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol[data-v-472b1f82] {\n  color: #919899;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number-last[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-text[data-v-472b1f82] {\n  color: #515556;\n}\n.theme-light .line[data-v-472b1f82] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .setLightColor[data-v-472b1f82] {\n  color: #515556;\n}\n.theme-light .setDarkColor[data-v-472b1f82] {\n  color: #0E0E0E;\n}\n.theme-light .setColor[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-light .setFontFamily[data-v-472b1f82] {\n  font-family: \"bitkeep DIN\";\n}\n.theme-light .setFontWeight[data-v-472b1f82] {\n  font-size: 0.43rem;\n  font-weight: 600;\n  color: #0E0E0E;\n}\n.theme-light .wrap-bottom[data-v-472b1f82] {\n  background: #fff;\n  border-top: 0.03rem solid #F8F9FA;\n}\n.theme-light .wrap-bottom .swap-btn[data-v-472b1f82] {\n  color: #fff;\n}\n.theme-light .wrap-bottom .setColorSwap[data-v-472b1f82] {\n  background: #7524f9;\n}\n.theme-light .wrap-bottom .setColorClaim[data-v-472b1f82] {\n  background: #2AC8DD;\n}\n.theme-dark .mining[data-v-472b1f82] {\n  background: #0A0E1F;\n}\n.theme-dark .mining .van-progress[data-v-472b1f82] {\n  border-radius: 0.27rem;\n  background: #1F212E;\n}\n.theme-dark .mining .mining-wrap-one[data-v-472b1f82] {\n  background: #171A26;\n}\n.theme-dark .mining .mining-wrap-one .produced[data-v-472b1f82] :first-child {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining_trans[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header[data-v-472b1f82] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-472b1f82] {\n  color: #6D707D;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-472b1f82] {\n  color: #2AC8DD;\n  background: rgba(28,189,181,0.1);\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-472b1f82] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-472b1f82] {\n  color: #6D707D;\n  background: #212331;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-startCountdown[data-v-472b1f82] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-time[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-day[data-v-472b1f82] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-title[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-amount[data-v-472b1f82] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-number[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol[data-v-472b1f82] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-todyVolue[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol[data-v-472b1f82] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number-last[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-text[data-v-472b1f82] {\n  color: #9CA5B3;\n}\n.theme-dark .line[data-v-472b1f82] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .setdarkColor[data-v-472b1f82] {\n  color: #9CA5B3;\n}\n.theme-dark .setDarkColor[data-v-472b1f82] {\n  color: #DFE0E3;\n}\n.theme-dark .setColor[data-v-472b1f82] {\n  color: #7524f9;\n}\n.theme-dark .setFontFamily[data-v-472b1f82] {\n  font-family: \"bitkeep DIN\";\n}\n.theme-dark .setFontWeight[data-v-472b1f82] {\n  font-size: 0.43rem;\n  font-weight: 600;\n  color: #DFE0E3;\n}\n.theme-dark .wrap-bottom[data-v-472b1f82] {\n  background: #171A26;\n  border-top: 0.03rem solid #212331;\n}\n.theme-dark .wrap-bottom .swap-btn[data-v-472b1f82] {\n  color: #fff;\n}\n.theme-dark .wrap-bottom .setColorSwap[data-v-472b1f82] {\n  background: #7524f9;\n}\n.theme-dark .wrap-bottom .setColorClaim[data-v-472b1f82] {\n  background: #2AC8DD;\n}\n.loading[data-v-472b1f82] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.setMingMargin[data-v-472b1f82] {\n  margin-top: 0.27rem;\n  font-size: 0.53rem;\n}\n.mining .mining-wrap .img img[data-v-472b1f82] {\n  width: 100%;\n}\n.mining .mining-wrap .mining-wrap-one[data-v-472b1f82] {\n  margin: 0.4rem 0.43rem 0;\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .produced[data-v-472b1f82] {\n  font-size: 0.37rem;\n  display: flex;\n  justify-content: space-between;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header[data-v-472b1f82] {\n  display: flex;\n  justify-content: space-between;\n  height: 1.07rem;\n  line-height: 1.07rem;\n  padding: 0 0.21rem 0 0.4rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title img[data-v-472b1f82] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title .setImg[data-v-472b1f82] {\n  width: 0.43rem;\n  height: 0.43rem;\n  vertical-align: middle;\n  margin-left: 0.16rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-472b1f82] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  vertical-align: text-bottom;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-472b1f82] {\n  padding-right: 0.19rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-472b1f82] {\n  font-size: 0.27rem;\n  margin: 0.08rem 0.05rem 0 0;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-472b1f82] {\n  height: 0.64rem;\n  line-height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body[data-v-472b1f82] {\n  padding: 0 0.4rem 0.19rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-line[data-v-472b1f82] {\n  margin-top: 0.4rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-startCountdown[data-v-472b1f82] {\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-time[data-v-472b1f82] {\n  font-size: 0.53rem;\n  line-height: 0.53rem;\n  display: inline-block;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-day[data-v-472b1f82] {\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-title[data-v-472b1f82] {\n  font-size: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-amount[data-v-472b1f82] {\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  margin: 0.53rem 0 0.4rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-number[data-v-472b1f82] {\n  font-size: 0.53rem;\n  line-height: 0.53rem;\n  font-family: \"bitkeep DIN\";\n  padding-bottom: 0.27rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading[data-v-472b1f82] {\n  display: flex;\n  justify-content: space-between;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol[data-v-472b1f82] {\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n  text-align: right;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number[data-v-472b1f82] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-last[data-v-472b1f82] {\n  text-align: right;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-todyVolue[data-v-472b1f82] {\n  text-align: right;\n  font-size: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards[data-v-472b1f82] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 0.27rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol[data-v-472b1f82] {\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number[data-v-472b1f82] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number-last[data-v-472b1f82] {\n  text-align: right;\n  font-size: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-text[data-v-472b1f82] {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.mining .mining-wrap .mining-wrap-one .mining-setP[data-v-472b1f82] {\n  padding: 0 0.4rem 0.03rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining_trans[data-v-472b1f82] {\n  margin: 0.53rem 0 !important;\n}\n.mining .mining-wrap .mining-wrap-one .mbottom[data-v-472b1f82] {\n  margin-bottom: 0.4rem !important;\n}\n.warp-invite-link-btn[data-v-472b1f82] {\n  height: 1.33rem;\n  line-height: 1.33rem;\n  color: #fff;\n  text-align: center;\n  border-radius: 0.27rem;\n  margin-bottom: 0.53rem;\n  font-size: 0.43rem;\n  margin: 0 0.4rem 0.4rem;\n}\n.invitation[data-v-472b1f82] {\n  padding-bottom: 0.13rem;\n}\n.wrap-bottom[data-v-472b1f82] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding: 0.29rem 0.43rem 0.91rem;\n}\n.wrap-bottom .swap-btn[data-v-472b1f82] {\n  height: 1.33rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  font-weight: 500;\n  font-size: 0.43rem;\n  width: 4.43rem;\n  z-index: 0;\n}\n.wrap-bottom .setColorSwap[data-v-472b1f82] {\n  margin-left: 0.19rem;\n  display: inline-block;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/index.vue?vue&type=template&id=472b1f82&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mining"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-472b1f82>","</div>",[_c('van-loading',{attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_c('van-pull-refresh',{attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.getInfo},model:{value:(_vm.refreshLoading),callback:function ($$v) {_vm.refreshLoading=$$v},expression:"refreshLoading"}},[_c('div',{staticClass:"mining-wrap"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_377ba750-a4d6-11ec-a2df-753bd9da2557.png","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header",staticStyle:{"padding-right":"0"}},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e64f7b40-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.coundown")))])]),_vm._v(" "),(_vm.activityStatus == 1)?_c('div',{staticClass:"mining-wrap-one-header-about inProgress"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.inProgress")))])]):(_vm.activityStatus == 0)?_c('div',{staticClass:"mining-wrap-one-header-about comingsoon"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.comingsoon")))])]):_c('div',{staticClass:"mining-wrap-one-header-about activityEnd"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.activity")))])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('p',{staticClass:"mining-wrap-one-body-startCountdown"},[(_vm.activityStatus == 0)?_c('span',[_vm._v(_vm._s(_vm.$t("mining.startCountdown")))]):_c('span',[_vm._v(_vm._s(_vm.$t("mining.endCountdown")))])]),_vm._v(" "),(_vm.countDown > 0)?_c('div',[_c('span',[_c('van-count-down',{staticClass:"mining-wrap-one-body-time setFontFamily",attrs:{"time":_vm.countDown,"format":_vm.formatEn}})],1)]):_c('div',{staticClass:"textPrimary0"},[_vm._v("--")])]),_vm._v(" "),_c('div',{staticClass:"mining-setP"},[_c('div',{staticClass:"produced mining_trans"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.startTime")))]),_vm._v(" "),_c('span',{staticClass:"setFontFamily"},[_vm._v(_vm._s(_vm.fixdStartTime)+"(GMT+8)")])]),_vm._v(" "),_c('div',{staticClass:"produced mining_trans mbottom"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.overTime")))]),_vm._v(" "),_c('span',{staticClass:"setFontFamily"},[_vm._v(_vm._s(_vm.fixdEndTime)+"(GMT+8)")])])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e650dad0-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.rewardPool")))])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-header-update"})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('div',{staticClass:"mining-wrap-one-body-trading mbottom"},[_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"left"}},[_vm._v("\n                "+_vm._s(_vm.$t("mining.totalDistributed"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[_c('span',{staticClass:"setW"},[_vm._v(_vm._s(_vm.currencyPool))]),_vm._v(" BKB\n              ")])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.yesterday"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number-todyVolue\n                  setFontFamily"},[_c('span',{staticClass:"setW"},[_vm._v(_vm._s(_vm.yesCurrencyPool))]),_vm._v(" BKB\n              ")])])])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e651ec40-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.tradingVolume")))])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-header-update"})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('p',{staticClass:"mining-wrap-one-body-day"},[_vm._v(_vm._s(_vm.$t("mining.tradingIn")))]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-number"},[_c('span',{staticClass:"setFontFamily"},[_vm._v(_vm._s(_vm.activityStatus != 0 ? "$" + _vm.allTodayTrading : '--'))])])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e6523a60-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.myRewards")))]),_vm._v(" "),_c('img',{staticClass:"setImg",attrs:{"src":_vm.question,"alt":""},on:{"click":_vm.ruleDetail}})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-header-update"})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('div',{staticClass:"mining-wrap-one-body-trading"},[_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"left"}},[_vm._v("\n                "+_vm._s(_vm.$t("mining.totalTrading"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[_c('span',{staticClass:"setW"},[_vm._v("$"+_vm._s(_vm.userTodayTrading))])])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.userTodayValue"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"\n                  mining-wrap-one-body-vol-number-todyVolue\n                  setFontFamily"},[_vm._v(_vm._s(_vm.activityStatus != 0 ? "$" + _vm.userTodayValue: '--')+"\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"line mining-wrap-one-body-line"}),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-rewards"},[_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.totalRewards"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[_c('span',{staticClass:"setW"},[_vm._v(_vm._s(_vm.userTotalBkbReward))]),_vm._v(" BKB\n              ")])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"right"}},[_vm._v("\n                "+_vm._s(_vm.$t("mining.yesterdayRewards"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number-last setFontFamily"},[_vm._v("\n                "+_vm._s(_vm.activityStatus != 0 ? "+" + _vm.userTodayDayBkbReward + " BKB" : "0 BKB")+"\n              ")])])])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e650dad0-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.invitationPool")))]),_vm._v(" "),_c('img',{staticClass:"setImg",attrs:{"src":_vm.question,"alt":""},on:{"click":_vm.inviteRuleDetail}})])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('div',{staticClass:"setMingMargin"},[_c('span',{staticClass:"setFontFamily textPrimary0"},[_vm._v(_vm._s(_vm.activity_rewardPool + ' BKB'))])]),_vm._v(" "),_c('p',{staticClass:"mining-wrap-one-body-day textPrimary0"},[_vm._v(_vm._s(_vm.$t("mining.invitationPoolContent")))])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one invitation"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e65101e0-a110-11ec-b65f-cd102ebe79d3.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.invitationReward")))])]),_vm._v(" "),_c('div',{staticClass:"colorPrimary",on:{"click":_vm.inviteRewards}},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.viewDetails")))])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('div',{staticClass:"mining-wrap-one-body-trading"},[_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"left"}},[_vm._v("\n                "+_vm._s(_vm.$t("mining.inviteNumber1"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[_c('span',{staticClass:"setW",staticStyle:{"color":"#7524f9"}},[_vm._v(_vm._s(_vm.activityInviteDonereward)+" BKB")])])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.inviteNumber2"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"\n                  mining-wrap-one-body-vol-number-todyVolue\n                  setFontFamily",staticStyle:{"color":"#7524f9"}},[_vm._v(_vm._s(_vm.activityStatus != 0 ? "+" + _vm.activityTradingBkbReward + ' BKB' : '0 BKB')+"\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"line mining-wrap-one-body-line"}),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-rewards"},[_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.inviteNumber3"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[_c('span',{staticClass:"setW"},[_vm._v(_vm._s(_vm.activityDoneTradingBkbReward))]),_vm._v(" BKB\n              ")])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol",staticStyle:{"text-align":"right"}},[_vm._v("\n                "+_vm._s(_vm.$t("mining.inviteNumber4"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number-last setFontFamily"},[_vm._v("\n                "+_vm._s(_vm.activityStatus != 0 ? "+" + _vm.activityInviteReward + " BKB" : "0 BKB")+"\n              ")])])])]),_vm._v(" "),_c('div',{staticClass:"warp-invite-link-btn colorBackgroundPrimary",on:{"click":_vm.inviteFirends}},[_vm._v("\n          "+_vm._s(_vm.$t("mining.inviteFriendsNow"))+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_82d44c70-a111-11ec-8c7a-8d02428f9af4.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.miningRuleTitle")))])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"mining-wrap-one-header-right",on:{"click":_vm.learnMore}},[_vm._v(_vm._s(_vm.$t("mining.learnMore")))])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body",on:{"click":_vm.learnMore}},[_c('p',{staticClass:"mining-wrap-one-body-text"},[_vm._v("\n            "+_vm._s(_vm.$t("mining.miningRule"))+"\n          ")])])]),_vm._v(" "),_c('activity-com'),_vm._v(" "),_c('div',{staticClass:"wrap-bottom"},[_c('van-button',{staticClass:"swap-btn setColorClaim",on:{"click":_vm.claim}},[_vm._v(_vm._s(_vm.$t("mining.claim")))]),_vm._v(" "),_c('van-button',{staticClass:"swap-btn setColorSwap",on:{"click":_vm.swap}},[_vm._v(_vm._s(_vm.$t("mining.swapNow")))])],1)],1)]),_vm._ssrNode(" "),_c('pup-protocol',{key:new Date().getTime(),attrs:{"show":_vm.show,"unclaimReward":_vm.unclaimReward,"sumReward":_vm.sum_activity_today_reward,"theme":_vm.theme},on:{"close":_vm.close}}),_vm._ssrNode(" "),_c('ruleDetail',{attrs:{"ruleDetailFlag":_vm.ruleDetailFlag,"theme":_vm.theme},on:{"ruleDetailClose":_vm.ruleDetailClose}}),_vm._ssrNode(" "),_c('inviteRuleDetail',{attrs:{"inviteRuleDetailFlag":_vm.inviteRuleDetailFlag,"theme":_vm.theme},on:{"closeInvite":_vm.closeInvite}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/index.vue?vue&type=template&id=472b1f82&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(111);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./components/activity/index.vue + 4 modules
var activity = __webpack_require__(273);

// EXTERNAL MODULE: ./pages/activity/mining/protocol.vue + 4 modules
var protocol = __webpack_require__(274);

// EXTERNAL MODULE: ./pages/activity/mining/RuleDetail.vue + 4 modules
var RuleDetail = __webpack_require__(275);

// EXTERNAL MODULE: ./pages/activity/mining/inviteRuleDetail.vue + 4 modules
var inviteRuleDetail = __webpack_require__(276);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var miningvue_type_script_lang_js_ = ({
  name: "mining",

  data() {
    return {
      currencyPool: 0,
      yesCurrencyPool: 0,
      rewardPooln: 33600000,
      allTodayTrading: 0,
      userTodayTrading: 0,
      userTodayValue: 0,
      userTotalBkbReward: 0,
      userTodayDayBkbReward: 0,
      unclaimReward: 0,
      activityTradingBkbReward: 0,
      activityDoneTradingBkbReward: 0,
      activity_rewardPool: 0,
      activityInviteReward: 0,
      activityInviteDonereward: 0,
      sum_activity_today_reward: 0,
      status: false,
      show: false,
      ruleDetailFlag: false,
      inviteRuleDetailFlag: false,
      isLoading: true,
      refreshLoading: false,
      startTime: null,
      endTime: null,
      fixdStartTime: '--',
      fixdEndTime: '--',
      formatEn: "DDd HHh mmm sss",
      phase: "1",
      countDown: 0,
      activityStatus: 0,
      theme: 0,
      question: 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png'
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },
  components: {
    activityCom: activity["default"],
    pupProtocol: protocol["default"],
    inviteRuleDetail: inviteRuleDetail["default"],
    ruleDetail: RuleDetail["default"]
  },

  mounted() {
    // this.startTime = this.countDown(this.fixdStartTime);
    // this.endTime = this.countDown(this.fixdEndTime);
    // if (this.startTime < 0) {
    //   this.status = true;
    //   this.startTime = this.endTime;
    // }
    this.getInfo();
    this.setIcon();
  },

  methods: {
    // 获取信息
    async getInfo() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].miningInfo();

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.fixdStartTime = data.miningStartTime;
      this.fixdEndTime = data.miningEndTime;
      this.unclaimReward = data.unclaimReward;
      this.currencyPool = this.milliFormat(data.currencyPool);
      this.yesCurrencyPool = this.milliFormat(data.yesCurrencyPool);
      this.allTodayTrading = this.milliFormat(data.AllTodayTrading);
      this.userTodayTrading = this.milliFormat(data.userTodayTrading);
      this.userTodayValue = this.milliFormat(data.userTodayValue);
      this.userTotalBkbReward = this.milliFormat(data.userTotalBkbReward);
      this.userTodayDayBkbReward = this.milliFormat(data.userTodayDayBkbReward);
      this.activityTradingBkbReward = this.milliFormat(data.activity_TradingBkbReward);
      this.activityInviteReward = this.milliFormat(data.activity_invite_reward);
      this.activityDoneTradingBkbReward = this.milliFormat(data.activity_DoneTradingBkbReward);
      this.activityInviteDonereward = this.milliFormat(data.activity_invite_Donereward);
      this.sum_activity_today_reward = data.sum_activity_today_reward;
      this.activity_rewardPool = this.milliFormat(data.activity_rewardPool);
      this.countDown = data.countdown;
      this.activityStatus = data.activityStatus; // this.startTime = this.countDown(data.miningStartTime);
      // this.endTime = this.countDown(data.miningEndTime);
      // if (this.countDown < 0) {
      //   this.status = true;
      //   this.startTime = this.endTime;
      // }

      this.isLoading = false;
      this.refreshLoading = false;
    },

    ruleDetail() {
      this.ruleDetailFlag = true;
    },

    ruleDetailClose() {
      this.ruleDetailFlag = false;
    },

    inviteRuleDetail() {
      this.inviteRuleDetailFlag = true;
    },

    closeInvite() {
      this.inviteRuleDetailFlag = false;
    },

    inviteRewards() {
      this.$router.push('/activity/blindboxInvite/rewardList');
    },

    inviteFirends() {
      this.$router.push('/activity/blindboxInvite');
    },

    setIcon() {
      BitKeepInvoke.setTitle(this.$t("mining.miningTitle")); // window.addEventListener("load", () => {

      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("mining.miningTitle")); //设置主题

        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              this.theme = 1;
              this.question = 'https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png';
              body.setAttribute("class", "theme-dark");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png", () => {
                  this.$router.push("/activity/mining/history");
                });
              }, 500);
            } else {
              this.theme = 0;
              this.question = 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
              body.setAttribute("class", "theme-light");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png", () => {
                  this.$router.push("/activity/mining/history"); //   let routeUrl = this.$router.resolve({
                  //      path: "/activity/mining/history"
                  //    });
                  //    window.open(routeUrl.href, '_blank');
                });
              }, 500);
            }
          });
        });
      }); // });
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
          this.getInfo();
        }, 500);
      }

      this.show = false;
    },

    swap() {
      BitKeepInvoke.nativeApp();
    },

    // countDown(times) {
    //   let nowTime = Date.now(); //当前时间
    //   let setDate = new Date(times.replace(/-/g, "/"));
    //   let setTime = setDate.getTime(); //设定的时间
    //   //获取剩余时间总秒数
    //   return setTime - nowTime;
    // },
    learnMore() {
      this.$router.push("/activity/mining/miningRule");
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/mining/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_miningvue_type_script_lang_js_ = (miningvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(303)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(305)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_miningvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "472b1f82",
  "fb9660d0"
  
)

/* harmony default export */ var mining = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map