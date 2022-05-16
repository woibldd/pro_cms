exports.ids = [32];
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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2@3.fb021ce.png";

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("62cae448", content, true, context)
};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6c68f110", content, true, context)
};

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".firenddivst .van-tabs__nav {\n  background-color: #3d0b88;\n}\n.firenddivst .van-tab {\n  color: #9ca5b3;\n  font-size: 0.43rem;\n}\n.firenddivst .van-tabs__line {\n  display: none;\n  background-color: #3d0b88 !important;\n}\n.firenddivst .van-tab--active {\n  color: #fff;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_1_id_2368e260_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_1_id_2368e260_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_1_id_2368e260_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_1_id_2368e260_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_firendList_vue_vue_type_style_index_1_id_2368e260_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".firenddivst[data-v-2368e260] {\n  background: #3d0b88;\n  min-height: 100vh;\n}\n.firenddivst .loading[data-v-2368e260] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firenddivst .blindbox_list_content[data-v-2368e260] {\n  min-height: 100vh;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con[data-v-2368e260] {\n  border-radius: 0.43rem;\n  margin: 0.43rem;\n  padding: 0.53rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst[data-v-2368e260] {\n  padding: 0.43rem;\n  background: #ffffff;\n  border-radius: 0.21rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst span[data-v-2368e260] {\n  font-size: 0.32rem;\n  color: #4b5373;\n  font-weight: 500;\n  line-height: 0.48rem;\n}\n.firenddivst .firenddivst-tab .firenddivst-tab-con .firenddivst-tab-divst .firenddivst-tab-address[data-v-2368e260] {\n  word-break: break-all;\n  margin-top: 0.13rem;\n  line-height: 0.48rem;\n  color: #4b5373;\n  font-weight: 400;\n}\n.firenddivst .block_page_footer[data-v-2368e260] {\n  padding: 1.07rem 0 0.72rem;\n  box-sizing: border-box;\n}\n.firenddivst .block_page_footer .block_header[data-v-2368e260] {\n  margin: 0 auto;\n  width: 2.4rem;\n  height: 0.64rem;\n}\n.firenddivst .block_page_footer .block_header img[data-v-2368e260] {\n  width: 100%;\n  height: 100%;\n}\n.firenddivst .noDataBox[data-v-2368e260] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firenddivst .noData[data-v-2368e260] {\n  background: url(\"https://cdn.bitkeep.vip/u_b_652ddc30-572a-11ec-9c68-896cd381f4ca.png\") center center no-repeat;\n  background-size: 100% 100%;\n  height: 5.28rem;\n  width: 5.33rem;\n  position: relative;\n}\n.firenddivst .noData p[data-v-2368e260] {\n  width: 3.63rem;\n  font-size: 0.48rem;\n  line-height: 0.64rem;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #0C0998;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/firendList.vue?vue&type=template&id=2368e260&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"firenddivst"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-2368e260>","</div>",[_c('van-loading',{attrs:{"color":"#7524f9"}})],1):_vm._ssrNode("<div class=\"firenddivst-tab\" data-v-2368e260>","</div>",[_c('van-pull-refresh',{staticClass:"blindbox_list_content",on:{"refresh":_vm.userInvite},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[(_vm.inviteList.length > 0)?_c('div',{staticClass:"firenddivst-tab-con radial-gradient"},[_c('div',{staticClass:"firenddivst-tab-divst"},[_c('span',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxDetail.HelpSuccessETH")+ '（'+ _vm.helpNum + '）:'))]),_vm._v(" "),_c('div',{staticClass:"firenddivst-tab-address"},_vm._l((_vm.inviteList),function(item,index){return _c('div',{key:index},[_vm._v("\n                "+_vm._s(index + 1)+". "+_vm._s(item)+"\n              ")])}),0)])]):_c('div',{staticClass:"noDataBox"},[_c('div',{staticClass:"noData"},[_c('p',[_vm._v(_vm._s(_vm.$t("ActivityBlindbox.ActivityBlindboxList.noHelper")))])])]),_vm._v(" "),(_vm.inviteList.length > 0)?_c('div',{staticClass:"block_page_footer"},[_c('div',{staticClass:"block_warpper"},[_c('div',{staticClass:"block_header"},[_c('img',{attrs:{"src":__webpack_require__(204)}})])])]):_vm._e()])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindbox/firendList.vue?vue&type=template&id=2368e260&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindbox/firendList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var firendListvue_type_script_lang_js_ = ({
  name: "firendList",

  data() {
    return {
      active: 0,
      inviteNum: 0,
      helpNum: 0,
      isLoading: true,
      refreshing: false,
      inviteList: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    isBitKeep() {
      return this.local.UA.isBitKeep;
    },

    locale() {
      return this.local.locale;
    }

  },

  mounted() {
    this.isBitKeep && BitKeepInvoke.setTitle(this.$t("ActivityBlindbox.ActivityBlindboxList.friendList"));
    this.userInvite();
  },

  methods: {
    async userInvite() {
      let {
        data,
        status
      } = await client["a" /* USER_API */].userInviteList({
        type: this.active + 1
      });

      if (status == 1) {
        return this.$toast(data);
      }

      this.inviteList = data.list;
      this.inviteNum = data.invite_number;
      this.helpNum = data.help_number;
      this.isLoading = false;
      this.refreshing = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindbox/firendList.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindbox_firendListvue_type_script_lang_js_ = (firendListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindbox/firendList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(343)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(345)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindbox_firendListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2368e260",
  "5676f2ce"
  
)

/* harmony default export */ var firendList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=firendList.js.map