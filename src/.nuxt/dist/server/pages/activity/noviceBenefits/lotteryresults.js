exports.ids = [54];
exports.modules = {

/***/ 220:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lotteryresults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lotteryresults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lotteryresults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lotteryresults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lotteryresults_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/noviceBenefits/lotteryresults.vue?vue&type=template&id=6d4fed83&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lotteryresults colorBackground1"},[_vm._ssrNode("<div class=\"lotteryresults-content\"></div> <div class=\"lotteryresults-summary colorBackground3\"><div class=\"lotteryresults-summary-item\"><p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.participationperiods')))+"</p> <p class=\"textPrimary0 setFontFamily\">"+_vm._ssrEscape(_vm._s(_vm.resultList.pushTimes || 0))+"</p></div> <div class=\"lotteryresults-summary-item\"><p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.ticketsinvested')))+"</p> <p class=\"textPrimary0 setFontFamily\">"+_vm._ssrEscape(_vm._s(_vm.resultList.pushPapers || 0))+"</p></div> <div class=\"lotteryresults-summary-item\"><p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.obtainBKB')))+"</p> <p class=\"textPrimary0 setFontFamily\">"+_vm._ssrEscape(_vm._s(_vm.resultList.allReward || 0))+"</p></div></div> "+((!!_vm.resultList.list.length)?("<ul class=\"lotteryresults-list\">"+(_vm._ssrList((_vm.resultList.list),function(item,index){return ("<li class=\"lotteryresults-list-item\"><div class=\"lotteryresults-list-left\"><p class=\"lotteryresults-list-itemNums textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.investment'))+" ")+"<span class=\"setFontFamily\">"+_vm._ssrEscape(_vm._s(item.pushPapers))+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('noviceBenefits.araffleticket')))+"</p> <p class=\"lotteryresults-list-item-result textSecond3\">"+_vm._ssrEscape(_vm._s(item.code))+"</p></div> "+((Number(item.isReward) == 1 )?("<div class=\"lotteryresults-list-left\"><p class=\"lotteryresults-list-itemNums textPrimary0\">"+_vm._ssrEscape("???? "+_vm._s(_vm.$t('noviceBenefits.Congratulations')))+"</p> <p class=\"lotteryresults-list-item-result colorPrimary\" style=\"text-align:right \">+ <span class=\"setFontFamily\">"+_vm._ssrEscape(_vm._s(item.reward))+"</span> BKB</p></div>"):"<!---->")+" "+((Number(item.isReward) == 0 )?("<div class=\"lotteryresults-list-item-result lotteryresults-list-right textSecond3\">"+_vm._ssrEscape("\n                 "+_vm._s(_vm.$t('noviceBenefits.Failedto'))+"\n             ")+"</div>"):"<!---->")+" "+((Number(item.isReward) == 2 )?("<div class=\"lotteryresults-list-item-result lotteryresults-list-right textSecond3\">"+_vm._ssrEscape("\n                 "+_vm._s(_vm.$t('noviceBenefits.Tobewon'))+"\n             ")+"</div>"):"<!---->")+"</li>")}))+"</ul>"):"<!---->")+" "+((!_vm.resultList.list.length)?("<div class=\"lotteryresults-nodata\"><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt> <p class=\"textSecond3\">"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/noviceBenefits/lotteryresults.vue?vue&type=template&id=6d4fed83&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(86);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/noviceBenefits/lotteryresults.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lotteryresultsvue_type_script_lang_js_ = ({
  name: "Novicebenefits",

  data() {
    return {
      isLoading: true,
      CouponsNums: '',
      resultList: {
        pushTimes: 0,
        pushPapers: 0,
        allReward: 0,
        list: []
      }
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
  components: {},

  mounted() {
    this.getInfo();
    this.setIcon();
    this.getRewardResult();
  },

  methods: {
    async getRewardResult() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getRewardResult();

      if (data) {
        this.resultList = data;
      }
    },

    // ????????????
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

      this.isLoading = false;
    },

    setIcon() {
      // window.addEventListener("load", () => {
      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t('noviceBenefits.Lotteryresults')); //????????????

        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              this.theme = 1;
              this.question = 'https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png';
              body.setAttribute("class", "theme-dark"); // setTimeout(()=>{
              //   BitKeepInvoke.setIconAction("");
              // },500)
            } else {
              this.theme = 0;
              this.question = 'https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png';
              body.setAttribute("class", "theme-light"); // setTimeout(()=>{
              //   BitKeepInvoke.setIconAction("");
              // },500)
            }
          });
        });
      }); // });
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/noviceBenefits/lotteryresults.vue?vue&type=script&lang=js&
 /* harmony default export */ var noviceBenefits_lotteryresultsvue_type_script_lang_js_ = (lotteryresultsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/noviceBenefits/lotteryresults.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(275)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  noviceBenefits_lotteryresultsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4133bcd5"
  
)

/* harmony default export */ var lotteryresults = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=lotteryresults.js.map