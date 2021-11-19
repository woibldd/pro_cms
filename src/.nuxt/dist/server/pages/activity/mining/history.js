exports.ids = [25];
exports.modules = {

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("6bef7738", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_26a8bbe9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_26a8bbe9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_26a8bbe9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_26a8bbe9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_26a8bbe9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-26a8bbe9] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-26a8bbe9] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-26a8bbe9] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-26a8bbe9] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-26a8bbe9] {\n  background-color: #DADBDE;\n}\n.theme-light .colorBackground0[data-v-26a8bbe9] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground1[data-v-26a8bbe9] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-26a8bbe9] {\n  background-color: #ECEDEE;\n}\n.theme-light .colorBackground3[data-v-26a8bbe9] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackgroundPrimary[data-v-26a8bbe9] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-26a8bbe9] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-26a8bbe9] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-26a8bbe9] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-26a8bbe9] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-26a8bbe9] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-26a8bbe9] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-26a8bbe9] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-26a8bbe9] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-26a8bbe9] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-26a8bbe9] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-26a8bbe9] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-26a8bbe9] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-26a8bbe9] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-26a8bbe9] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-26a8bbe9] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-26a8bbe9] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-26a8bbe9] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-26a8bbe9] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-26a8bbe9] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-26a8bbe9] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-26a8bbe9] {\n  background-color: #5F626D;\n}\n.theme-dark .colorBackground0[data-v-26a8bbe9] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-26a8bbe9] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-26a8bbe9] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-26a8bbe9] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-26a8bbe9] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-26a8bbe9] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-26a8bbe9] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-26a8bbe9] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-26a8bbe9] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-26a8bbe9] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-26a8bbe9] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-26a8bbe9] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-26a8bbe9] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-26a8bbe9] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-26a8bbe9] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-26a8bbe9] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-26a8bbe9] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-26a8bbe9] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-26a8bbe9] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-26a8bbe9] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-26a8bbe9] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .hisory-wrap[data-v-26a8bbe9] {\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one[data-v-26a8bbe9] {\n  background: #fff;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-26a8bbe9] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-26a8bbe9] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-26a8bbe9] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-26a8bbe9] {\n  color: #495BFF;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-26a8bbe9] {\n  color: #9CA5B3;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-26a8bbe9] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .produced[data-v-26a8bbe9] {\n  color: #7F828F;\n}\n.theme-light .hisory-wrap .line[data-v-26a8bbe9] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-dark .hisory-wrap[data-v-26a8bbe9] {\n  background: #0A0E1F;\n}\n.theme-dark .hisory-wrap .mining-wrap-one[data-v-26a8bbe9] {\n  background: #171A26;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-26a8bbe9] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-26a8bbe9] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-26a8bbe9] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-26a8bbe9] {\n  color: #495BFF;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-26a8bbe9] {\n  color: #6D707D;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-26a8bbe9] {\n  color: #6D707D;\n  background: #212331;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .produced[data-v-26a8bbe9] {\n  color: #7F828F;\n}\n.theme-dark .hisory-wrap .line[data-v-26a8bbe9] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.hisory-wrap[data-v-26a8bbe9] {\n  min-height: 100vh;\n  padding: 0.4rem 0.43rem 1.07rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-26a8bbe9]:not(:first-child) {\n  margin-top: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-26a8bbe9] {\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-26a8bbe9] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  padding: 0 0.21rem 0 0.45rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title img[data-v-26a8bbe9] {\n  width: 0.4rem;\n  height: 0.4rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-26a8bbe9] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-26a8bbe9] {\n  padding-right: 0.4rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-26a8bbe9] {\n  font-size: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-26a8bbe9] {\n  width: 2.56rem;\n  height: 0.53rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.53rem;\n  text-align: center;\n  padding: 0.05rem 0.19rem;\n  border-radius: 0.11rem;\n  margin-top: 0.17rem;\n}\n.hisory-wrap .mining-wrap-one .produced[data-v-26a8bbe9] {\n  font-size: 0.37rem;\n  display: flex;\n  justify-content: space-between;\n}\n.hisory-wrap .mining-wrap-one .mining-setP[data-v-26a8bbe9] {\n  padding: 0 0.4rem 0.03rem;\n}\n.hisory-wrap .mining-wrap-one .line[data-v-26a8bbe9] {\n  border-bottom: 0.03rem solid #dadbde;\n}\n.hisory-wrap .mining-wrap-one .mining_trans[data-v-26a8bbe9] {\n  margin: 0.53rem 0 !important;\n}\n.hisory-wrap .mining-wrap-one .mbottom[data-v-26a8bbe9] {\n  margin-bottom: 0.4rem !important;\n}\n.hisory-wrap .mining-wrap-one .setFontFamily[data-v-26a8bbe9] {\n  font-family: \"bitkeep DIN\";\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/history.vue?vue&type=template&id=26a8bbe9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hisory-wrap"},[_vm._ssrNode((_vm._ssrList((_vm.historyPhaseList),function(item,index){return ("<div class=\"mining-wrap-one\" data-v-26a8bbe9><div class=\"mining-wrap-one-header\" data-v-26a8bbe9><div class=\"mining-wrap-one-header-title\" data-v-26a8bbe9><span class=\"setFontFamily\" data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.phase", { v: item.phase })))+"</span></div> <div class=\"mining-wrap-one-header-about\" data-v-26a8bbe9>"+((item.isActivity == 0)?("<span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.comingsoon")))+"</span>"):"<!---->")+" "+((item.isActivity == 1)?("<span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.inProgress")))+"</span>"):"<!---->")+" "+((item.isActivity == 2)?("<span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.activity")))+"</span>"):"<!---->")+"</div></div> <div class=\"mining-setP\" data-v-26a8bbe9><div class=\"produced mining_trans\" data-v-26a8bbe9><span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.startTime")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(item.startTime)+"(UTC)")+"</span></div> <div class=\"produced\" data-v-26a8bbe9><span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.overTime")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(item.endTime)+"(UTC)")+"</span></div></div> <div class=\"mining-setP\" data-v-26a8bbe9><div class=\"produced mining_trans\" data-v-26a8bbe9><span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeValue")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(item.tradeValue))+"</span></div> <div class=\"produced mining_trans\" data-v-26a8bbe9><span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeReward")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(item.tradeReward))+"</span></div> <div class=\"produced mining_trans\" data-v-26a8bbe9><span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeUser")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(item.tradeUser))+"</span></div> <div class=\"produced mining_trans mbottom\" data-v-26a8bbe9><span data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.myTraded")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-26a8bbe9>"+_vm._ssrEscape(_vm._s(item.userReward))+"</span></div></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/history.vue?vue&type=template&id=26a8bbe9&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(65);

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

/* harmony default export */ var historyvue_type_script_lang_js_ = ({
  data() {
    return {
      historyPhaseList: []
    };
  },

  beforeMount() {
    BitKeepInvoke.setTitle(this.$t("mining.historyTitle", {
      v: this.phase
    }));
  },

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
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "#495BFF"
        });
      }

      this.historyPhaseList = data;
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/mining/history.vue?vue&type=script&lang=js&
 /* harmony default export */ var mining_historyvue_type_script_lang_js_ = (historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/history.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mining_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26a8bbe9",
  "4378f1ce"
  
)

/* harmony default export */ var mining_history = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);


 // import { debug } from 'debug'
// const requestlog = debug('bit-activity-request')
// const responselog = debug('bit-activity-response')
// const isProduction = process.env.NODE_ENV == "production";
// const HOST_URL = process.env.HOST_URL || process.env.baseURL

const host_user_instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "/",
  timeout: 60000,
  headers: {
    token: "",
    // token: "",
    language: "zh",
    currency: "",
    brand: "",
    os: "",
    package: "",
    clientversion: "",
    im: ""
  }
});
host_user_instance.interceptors.request.use(function (config) {
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
  console.error("___", error); // Do omething with response error

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
  miningInfo: (data, headers = {}) => host_user_instance.post("mining/info", data),
  historyPhase: (data, headers = {}) => host_user_instance.post("/mining/historyPhase", data)
};

/***/ })

};;
//# sourceMappingURL=history.js.map