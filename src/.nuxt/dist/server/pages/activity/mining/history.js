exports.ids = [37];
exports.modules = {

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("1be4b016", content, true, context)
};

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_355e922d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_355e922d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_355e922d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_355e922d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_style_index_0_id_355e922d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-355e922d] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-355e922d] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-355e922d] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-355e922d] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-355e922d] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-355e922d] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-355e922d] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-355e922d] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-355e922d] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-355e922d] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-355e922d] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-355e922d] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-355e922d] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-355e922d] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-355e922d] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-355e922d] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-355e922d] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-355e922d] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-355e922d] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-355e922d] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-355e922d] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-355e922d] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-355e922d] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-355e922d] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-355e922d] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-355e922d] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-355e922d] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-355e922d] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-355e922d] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-355e922d] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-355e922d] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-355e922d] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-355e922d] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-355e922d] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-355e922d] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-355e922d] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-355e922d] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-355e922d] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-355e922d] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-355e922d] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-355e922d] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-355e922d] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-355e922d] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-355e922d] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-355e922d] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-355e922d] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-355e922d] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-355e922d] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-355e922d] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-355e922d] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-355e922d] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-355e922d] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-355e922d] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-355e922d] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-355e922d] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-355e922d] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-355e922d] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-355e922d] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-355e922d] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-355e922d] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-355e922d] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-355e922d] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-355e922d] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-355e922d] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-355e922d] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-355e922d] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-355e922d] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .hisory-wrap[data-v-355e922d] {\n  background: #F8F9FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one[data-v-355e922d] {\n  background: #fff;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-355e922d] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-355e922d] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-355e922d] {\n  color: #080D21;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-355e922d] {\n  color: #495BFF;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-355e922d] {\n  color: #9CA5B3;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-355e922d] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-355e922d] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-355e922d] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-light .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-355e922d] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .hisory-wrap .mining-wrap-one .produced[data-v-355e922d] {\n  color: #7F828F;\n}\n.theme-light .hisory-wrap .line[data-v-355e922d] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-dark .hisory-wrap[data-v-355e922d] {\n  background: #0A0E1F;\n}\n.theme-dark .hisory-wrap .mining-wrap-one[data-v-355e922d] {\n  background: #171A26;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-355e922d] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title[data-v-355e922d] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title spam[data-v-355e922d] {\n  color: #DFE0E3;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-355e922d] {\n  color: #495BFF;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-355e922d] {\n  color: #6D707D;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-355e922d] {\n  color: #6D707D;\n  background: #212331;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-355e922d] {\n  color: #1CBDB5;\n  background: rgba(28,189,181,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-355e922d] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-dark .hisory-wrap .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-355e922d] {\n  color: #6D707D;\n  background: #212331;\n}\n.theme-dark .hisory-wrap .mining-wrap-one .produced[data-v-355e922d] {\n  color: #7F828F;\n}\n.theme-dark .hisory-wrap .line[data-v-355e922d] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.hisory-wrap[data-v-355e922d] {\n  min-height: 100vh;\n  padding: 0.4rem 0.43rem 1.07rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-355e922d]:not(:first-child) {\n  margin-top: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one[data-v-355e922d] {\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header[data-v-355e922d] {\n  display: flex;\n  justify-content: space-between;\n  height: 0.96rem;\n  line-height: 0.96rem;\n  padding-left: 0.45rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title img[data-v-355e922d] {\n  width: 0.4rem;\n  height: 0.4rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-355e922d] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  vertical-align: text-bottom;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-355e922d] {\n  padding-right: 0.4rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-355e922d] {\n  font-size: 0.27rem;\n}\n.hisory-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-355e922d] {\n  height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.64rem;\n  text-align: center;\n  padding: 0.05rem 0.32rem;\n  border-top-right-radius: 0.21rem;\n  border-bottom-left-radius: 0.21rem;\n}\n.hisory-wrap .mining-wrap-one .produced[data-v-355e922d] {\n  font-size: 0.37rem;\n  display: flex;\n  justify-content: space-between;\n}\n.hisory-wrap .mining-wrap-one .mining-setP[data-v-355e922d] {\n  padding: 0 0.4rem 0.03rem;\n}\n.hisory-wrap .mining-wrap-one .line[data-v-355e922d] {\n  border-bottom: 0.03rem solid #dadbde;\n}\n.hisory-wrap .mining-wrap-one .mining_trans[data-v-355e922d] {\n  margin: 0.53rem 0 !important;\n}\n.hisory-wrap .mining-wrap-one .mbottom[data-v-355e922d] {\n  margin-bottom: 0.4rem !important;\n}\n.hisory-wrap .mining-wrap-one .setFontFamily[data-v-355e922d] {\n  font-family: \"bitkeep DIN\";\n}\n.loading[data-v-355e922d] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.noData[data-v-355e922d] {\n  min-height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.noData img[data-v-355e922d] {\n  width: 2.67rem;\n  height: 2.67rem;\n}\n.noData p[data-v-355e922d] {\n  font-size: 0.37rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/history.vue?vue&type=template&id=355e922d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hisory-wrap"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-355e922d>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):(_vm.historyPhaseList.length>0)?_vm._ssrNode(("<div data-v-355e922d>"+(_vm._ssrList((_vm.historyPhaseList),function(item,index){return ("<div class=\"mining-wrap-one\" data-v-355e922d><div class=\"mining-wrap-one-header\" data-v-355e922d><div class=\"mining-wrap-one-header-title\" data-v-355e922d><span class=\"setFontFamily\" data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.phase", { v: item.phase })))+"</span></div> "+((item.isActivity == 0)?("<div class=\"mining-wrap-one-header-about comingsoon\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.comingsoon")))+"</span></div>"):"<!---->")+" "+((item.isActivity == 1)?("<div class=\"mining-wrap-one-header-about inProgress\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.inProgress")))+"</span></div>"):"<!---->")+" "+((item.isActivity == 2)?("<div class=\"mining-wrap-one-header-about activityEnd\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.activity")))+"</span></div>"):"<!---->")+"</div> <div class=\"mining-setP\" data-v-355e922d><div class=\"produced mining_trans\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.startTime")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-355e922d>"+_vm._ssrEscape(_vm._s(item.startTime)+"(UTC)")+"</span></div> <div class=\"produced\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.overTime")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-355e922d>"+_vm._ssrEscape(_vm._s(item.endTime)+"(UTC)")+"</span></div></div> <div class=\"mining-setP\" data-v-355e922d><div class=\"produced mining_trans\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeValue")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-355e922d>"+_vm._ssrEscape(_vm._s(item.tradeValue))+"</span></div> <div class=\"produced mining_trans\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeReward")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-355e922d>"+_vm._ssrEscape(_vm._s(item.tradeReward))+"</span></div> <div class=\"produced mining_trans\" data-v-355e922d><span data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tradeUser")))+"</span> <span class=\"setFontFamily textPrimary0\" data-v-355e922d>"+_vm._ssrEscape(_vm._s(item.tradeUser))+"</span></div></div></div>")}))+"</div>")):_vm._ssrNode(("<div class=\"noData\" data-v-355e922d><img src=\"https://cdn.bitkeep.vip/u_b_eeb7a7d0-4797-11ec-8e77-6dd2cb9eb50d.png\" alt data-v-355e922d> <p class=\"textSecond3\" data-v-355e922d>"+_vm._ssrEscape(_vm._s(_vm.$t('mining.noData')))+"</p></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/history.vue?vue&type=template&id=355e922d&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(67);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

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
  //     //设置主题
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
          confirmButtonColor: "#495BFF"
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
  
  var style0 = __webpack_require__(255)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mining_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "355e922d",
  "4378f1ce"
  
)

/* harmony default export */ var mining_history = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
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
    token: "c8ff79c0aff1c702d3c73f0874add811",
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
  tradingGetList: (data, headers = {}) => host_user_instance.post('/tradeCompetition/getList', data),
  //待领取
  tradingWaitClaim: (data, headers = {}) => host_user_instance.post('/tradeCompetition/waitClaim', data),
  //领取
  tradingClaim: (data, headers = {}) => host_user_instance.post('/tradeCompetition/claim', data),
  //历史汇总
  tradingSummary: (data, headers = {}) => host_user_instance.post('/tradeCompetition/summary', data),
  //历史list
  tradingHistory: (data, headers = {}) => host_user_instance.post('/tradeCompetition/history', data)
};

/***/ })

};;
//# sourceMappingURL=history.js.map