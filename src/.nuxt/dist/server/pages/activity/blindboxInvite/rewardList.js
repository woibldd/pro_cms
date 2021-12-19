exports.ids = [33];
exports.modules = {

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("15f1582e", content, true, context)
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rewardList_vue_vue_type_style_index_0_id_61fb047a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rewardList_vue_vue_type_style_index_0_id_61fb047a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rewardList_vue_vue_type_style_index_0_id_61fb047a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rewardList_vue_vue_type_style_index_0_id_61fb047a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rewardList_vue_vue_type_style_index_0_id_61fb047a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-61fb047a] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-61fb047a] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-61fb047a] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-61fb047a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-61fb047a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-61fb047a] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-61fb047a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-61fb047a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-61fb047a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-61fb047a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-61fb047a] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-61fb047a] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-61fb047a] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-61fb047a] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-61fb047a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-61fb047a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-61fb047a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-61fb047a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-61fb047a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-61fb047a] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-61fb047a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-61fb047a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-61fb047a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-61fb047a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-61fb047a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-61fb047a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-61fb047a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-61fb047a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-61fb047a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-61fb047a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-61fb047a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-61fb047a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-61fb047a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-61fb047a] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-61fb047a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-61fb047a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-61fb047a] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-61fb047a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-61fb047a] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-61fb047a] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-61fb047a] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-61fb047a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-61fb047a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-61fb047a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-61fb047a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-61fb047a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-61fb047a] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-61fb047a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-61fb047a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-61fb047a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-61fb047a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-61fb047a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-61fb047a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-61fb047a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-61fb047a] {\n  color: rgba(47,128,237,0.1);\n}\n.rewards-list[data-v-61fb047a] {\n  min-height: 100vh;\n}\n.rewards-list-box .loading[data-v-61fb047a] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rewards-list-box .setHeight[data-v-61fb047a] {\n  min-height: 100vh;\n}\n.rewards-list-box .rewards-row-data[data-v-61fb047a] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0.43rem;\n  height: 1.6rem;\n  align-items: center;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-left .rewards-row-data-left-title[data-v-61fb047a] {\n  font-size: 0.37rem;\n  font-weight: 500;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-left .rewards-row-data-left-time[data-v-61fb047a] {\n  font-size: 0.32rem;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-right .rewards-row-data-right-content[data-v-61fb047a] {\n  display: flex;\n  align-items: center;\n  font-size: 0.37rem;\n}\n.rewards-list-box .rewards-row-data .rewards-row-data-right .rewards-row-data-right-content img[data-v-61fb047a] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: sub;\n}\n.rewards-list-box .noData[data-v-61fb047a] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.rewards-list-box .noData img[data-v-61fb047a] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.rewards-list-box .noData p[data-v-61fb047a] {\n  font-size: 0.37rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/rewardList.vue?vue&type=template&id=61fb047a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rewards-list colorBackground3"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-61fb047a>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div class=\"rewards-list-box\" data-v-61fb047a>","</div>",[(_vm.rewardsList.length > 0)?_vm._ssrNode("<div data-v-61fb047a>","</div>",[_c('van-pull-refresh',{staticClass:"setHeight",on:{"refresh":_vm.onRefresh},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[_c('van-list',{attrs:{"finished":_vm.finished,"immediate-check":false},on:{"load":_vm.getRewardsList},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},_vm._l((_vm.rewardsList),function(item){return _c('div',{key:item.number,staticClass:"rewards-row-data"},[_c('div',{staticClass:"rewards-row-data-left"},[_c('div',{staticClass:"rewards-row-data-left-title textPrimary0"},[_vm._v("\n                "+_vm._s(_vm.$t('mining.invitationRewards'))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"rewards-row-data-left-time textSecond3"},[_vm._v("\n                "+_vm._s(item.create_time)+"\n              ")])]),_vm._v(" "),_c('div',{staticClass:"rewards-row-data-right"},[_c('div',{staticClass:"\n                  rewards-row-data-right-content\n                  textPrimary0\n                  setFontFamily\n                "},[_c('img',{attrs:{"src":"http://cdn.bitkeep.vip/u_b_04e2ea10-596d-11ec-bdbc-7722494dfa58.png","alt":""}}),_vm._v("\n                  +"+_vm._s(item.reward)+" BKB\n              ")])])])}),0)],1)],1):_vm._ssrNode(("<div class=\"noData\" data-v-61fb047a><img src=\"http://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-61fb047a> <p class=\"textSecond3\" data-v-61fb047a>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/rewardList.vue?vue&type=template&id=61fb047a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/rewardList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var rewardListvue_type_script_lang_js_ = ({
  data() {
    return {
      isLoading: true,
      finished: false,
      loading: false,
      refreshing: false,
      rewardsList: [],
      start: 0,
      limit: 20
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

  async created() {
    this.isLoading = false;
  },

  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("blindboxInvite.rewardTitle"));
      BitKeepInvoke.setIconAction();
      this.$nextTick(() => {
        BitKeepInvoke.appMode((err, res) => {
          let body = document.getElementsByTagName("body")[0];

          if (res == 1) {
            body.setAttribute("class", "theme-dark");
          } else {
            body.setAttribute("class", "theme-light");
          }
        });
      });
    });
  },

  mounted() {
    this.getRewardsList();
  },

  methods: {
    async getRewardsList() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].activityDoneRewardList({
        start: this.start * this.limit,
        limit: this.limit
      });

      if (status == 1) {
        this.isLoading = false;
        this.loading = true;
        return this.$toast(data);
      }

      var moreList = data;
      moreList && this.rewardsList.push(...moreList);
      this.isLoading = false;
      this.$toast.clear();
      this.loading = false;
      this.start++;

      if (this.rewardsList.length >= data.total_count) {
        this.finished = true;
      }
    },

    async onRefresh() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].activityDoneRewardList({
        start: 0,
        limit: this.limit
      });

      if (status == 1) {
        this.refreshing = false;
        return this.$toast(data);
      }

      this.rewardsList = data.data;
      this.refreshing = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/rewardList.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindboxInvite_rewardListvue_type_script_lang_js_ = (rewardListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/rewardList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindboxInvite_rewardListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61fb047a",
  "8571922e"
  
)

/* harmony default export */ var rewardList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
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
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "a59bea3932ee4cf9c8bb9aa2ddc5278f",
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
  activityDoneRewardList: (data, headers = {}) => host_user_instance.post('swap/mining/activityDoneRewardList', data)
};

/***/ })

};;
//# sourceMappingURL=rewardList.js.map