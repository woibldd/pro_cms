exports.ids = [45];
exports.modules = {

/***/ 215:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_4a17343d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_4a17343d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_4a17343d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_4a17343d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_4a17343d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/history.vue?vue&type=template&id=4a17343d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hisory-wrap"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-4a17343d>","</div>",[_c('van-loading',{attrs:{"color":"#7524f9","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):(_vm.historyPhaseList.length>0)?_vm._ssrNode(("<div data-v-4a17343d>"+(_vm._ssrList((_vm.historyPhaseList),function(item,index){return ("<div class=\"mining-wrap-one\" data-v-4a17343d><div class=\"mining-wrap-one-header\" data-v-4a17343d><div class=\"mining-wrap-one-header-title\" data-v-4a17343d><span class=\"setFontFamily\" data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.phase", { v: item.phase })))+"</span></div> "+((item.isActivity == 0)?("<div class=\"mining-wrap-one-header-about comingsoon\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.comingsoon")))+"</span></div>"):"<!---->")+" "+((item.isActivity == 1)?("<div class=\"mining-wrap-one-header-about inProgress\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.inProgress")))+"</span></div>"):"<!---->")+" "+((item.isActivity == 2)?("<div class=\"mining-wrap-one-header-about activityEnd\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.activity")))+"</span></div>"):"<!---->")+"</div> <div class=\"mining-setP\" data-v-4a17343d><div class=\"produced mining_trans\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.startTime")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-4a17343d>"+_vm._ssrEscape(_vm._s(item.startTime)+"(UTC)")+"</span></div> <div class=\"produced\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.overTime")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-4a17343d>"+_vm._ssrEscape(_vm._s(item.endTime)+"(UTC)")+"</span></div></div> <div class=\"mining-setP\" data-v-4a17343d><div class=\"produced mining_trans\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeValue")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-4a17343d>"+_vm._ssrEscape(_vm._s(item.tradeValue))+"</span></div> <div class=\"produced mining_trans\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeReward")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-4a17343d>"+_vm._ssrEscape(_vm._s(item.tradeReward))+"</span></div> <div class=\"produced mining_trans\" data-v-4a17343d><span data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeUser")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-4a17343d>"+_vm._ssrEscape(_vm._s(item.tradeUser))+"</span></div></div></div>")}))+"</div>")):_vm._ssrNode(("<div class=\"noData\" data-v-4a17343d><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-4a17343d> <p class=\"textSecond3\" data-v-4a17343d>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/history.vue?vue&type=template&id=4a17343d&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(86);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/history.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var historyvue_type_script_lang_js_ = ({
  data() {
    return {
      historyPhaseList: [],
      isLoading: true
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    isBitKeep() {
      return this.local.UA.isBitKeep;
    }

  },

  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("mining.historyTitle"));
      BitKeepInvoke.setIconAction('');
      BitKeepInvoke.appMode((err, res) => {
        let body = document.getElementsByTagName("body")[0];

        if (res == 1) {
          this.theme = 1;
          body.setAttribute("class", "theme-dark");
        } else {
          this.theme = 0;
          body.setAttribute("class", "theme-light");
        }
      });
    });
  },

  // beforeMount() {
  // BitKeepInvoke.setTitle(this.$t("mining.historyTitle"));
  //     BitKeepInvoke.setIconAction();
  // window.addEventListener("load", () => {
  //     BitKeepInvoke.onLoadReady(() => {
  //     //????????????
  //       this.$nextTick(() => {
  //         BitKeepInvoke.appMode((err, res) => {
  //           let body = document.getElementsByTagName("body")[0];
  //           if (res == 1) {
  //             this.theme = 1;
  //             body.setAttribute("class", "theme-dark");
  //           } else {
  //             this.theme = 0;
  //             body.setAttribute("class", "theme-light");
  //           }
  //         });
  //     })
  //   });
  // });
  // },
  mounted() {
    this.historyPhase();
  },

  methods: {
    async historyPhase() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].historyPhase();

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#7524f9"
        });
      }

      this.historyPhaseList = data;
      this.isLoading = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/mining/history.vue?vue&type=script&lang=js&
 /* harmony default export */ var mining_historyvue_type_script_lang_js_ = (historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/history.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(270)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mining_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a17343d",
  "67c9724c"
  
)

/* harmony default export */ var mining_history = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
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
  baseURL: "https://b1.bitkeep.top",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "en",
    currency: "",
    brand: "web",
    os: "",
    package: "",
    clientVersion: "",
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

  let message = '??????????????????';

  if (false) {}

  return Promise.resolve({
    status: 1,
    data: message
  });
});
const USER_API = {
  //????????????
  mBoxList: (data, headers = {}) => host_user_instance.get("user/activity/mBoxList", {
    params: data,
    headers
  }),
  // ??????????????
  openMBox: (data, headers = {}) => host_user_instance.get("user/activity/openMBox", {
    params: data
  }),
  //??????????????????
  helpMBox: (data, headers = {}) => host_user_instance.get("user/activity/helpMBox", {
    params: data
  }),
  //????????????????????????
  userInviteList: (data, headers = {}) => host_user_instance.get("user/activity/inviteList", {
    params: data
  }),
  mBoxDetail: (data, headers = {}) => host_user_instance.get("user/activity/mBoxDetail", {
    params: data
  }),
  //cbkb????????????
  getCbkbSwapInfo: (data, headers = {}) => host_user_instance.get("user/cloudwallet/getCbkbSwapInfo", {
    params: data
  }),
  swapBkb: (data, headers = {}) => host_user_instance.get("user/cloudwallet/swapBkb", {
    params: data
  }),
  //BKB??????
  getAirDropCount: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDropCount", data),
  getAirDrop: (data, headers = {}) => host_user_instance.post("user/cloudwallet/getAirDrop", data),
  // ????????????
  miningInfo: (data, headers = {}) => host_user_instance.post("swap/mining/info", data),
  historyPhase: (data, headers = {}) => host_user_instance.post("swap/mining/historyPhase", data),
  receiveAward: (data, headers = {}) => host_user_instance.post("swap/mining/receiveAward", data),
  // ????????????
  getInviteList: (data, headers = {}) => host_user_instance.post('user/friendship/getInviteList', data),
  certifyFriendship: (data, headers = {}) => host_user_instance.post('user/friendship/certifyFriendship', data),
  activityDoneRewardList: (data, headers = {}) => host_user_instance.post('swap/mining/activityDoneRewardList', data),
  //??????bkb
  // ???????????????
  poolList: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/poolList', data),
  // ?????????????????????
  myPool: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/myPool', data),
  // ?????????????????????
  stakeHistory: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/stakeHistory', data),
  // ????????????
  receiveStakingReward: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/receiveStakingReward', data),
  //????????????
  staking: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/staking', data),
  //??????token
  handleGetToken: (data, headers = {}) => host_user_instance.post('/user/cloudstaking/getToken', data),
  //trading ????????????
  tradingGetList: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/getList', data),
  //?????????
  tradingWaitClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/waitClaim', data),
  //??????
  tradingClaim: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/claim', data),
  //????????????
  tradingSummary: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/summary', data),
  //??????list
  tradingHistory: (data, headers = {}) => host_user_instance.post('swap/tradeCompetition/history', data),
  // ????????????
  welfareSignIn: (data, headers = {}) => host_user_instance.post('user/welfare/signIn', data),
  // ??????
  getRewardDetail: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardDetail', data),
  //??????????????????
  getSignInDetailByUser: (data, headers = {}) => host_user_instance.post('user/welfare/getSignInDetailByUser', data),
  // ???????????????????????????
  getRewardResult: (data, headers = {}) => host_user_instance.post('user/welfare/getRewardResult', data),
  // ??????????????????
  // getRewardDetail: (data,headers={}) => host_user_instance.post('user/welfare/getRewardDetail',data), // ?????????????????????
  pushPapersIn: (data, headers = {}) => host_user_instance.post('user/welfare/pushPapersIn', data),
  // ????????????
  getJoinTeleJob: (data, headers = {}) => host_user_instance.post('user/welfare/getJoinTeleJob', data),
  // ????????????
  getFirstSwapJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirstSwapJob', data),
  // swap????????????
  getFirst50UJob: (data, headers = {}) => host_user_instance.post('user/welfare/getFirst50UJob', data),
  // ??????50u
  newUserRewardJobs: (data, headers = {}) => host_user_instance.post('user/welfare/newUserRewardJobs', data),
  // ????????????
  // NFTMint
  //??????????????????
  nftMintGetInfo: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getInfo", data),
  //??????????????????
  nftMintInvite: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/invite", data),
  //??????TX
  buildNftMintTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMintTxs", data),
  //??????token
  nftMintGetToken: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/getToken", data),
  //????????????????????????
  nftMintLotteryList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/LotteryList", data),
  //??????TX
  nftMintbuildNftMeltTxs: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/buildNftMeltTxs", data),
  //???????????????NTT??????
  nftMintnftList: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/nftList", data),
  //??????Mint???????????????
  nftMintcheckTransaction: (data, headers = {}) => host_user_instance.post("/operationweb/nftmint/checkTransaction", data)
};

/***/ })

};;
//# sourceMappingURL=history.js.map