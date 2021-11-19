exports.ids = [28];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("c99ee446", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("7c93bf97", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0 {\n  color: #080D21;\n}\n.theme-light .textSecond1 {\n  color: #4B5373;\n}\n.theme-light .textSecond2 {\n  color: #7F828F;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorBackground0 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #ECEDEE;\n}\n.theme-light .colorBackground3 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary {\n  color: #495BFF;\n}\n.theme-light .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.van-dialog .van-dialog__header {\n  padding: 0.53rem 0.64rem 0;\n  font-size: 0.48rem;\n}\n.van-dialog .van-dialog__message {\n  padding: 0.53rem 0.64rem;\n}\n.van-dialog .van-button__text {\n  color: #495bff;\n  font-weight: 500;\n}\n.van-dialog img {\n  width: 1.6rem;\n  height: 1.6rem;\n}\n.van-dialog .content {\n  color: #080D21;\n  font-family: \"bitkeep DIN\";\n  font-size: 0.43rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_597f3d1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_597f3d1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_597f3d1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_597f3d1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_597f3d1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-597f3d1a] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-597f3d1a] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-597f3d1a] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-597f3d1a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-597f3d1a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorBackground0[data-v-597f3d1a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground1[data-v-597f3d1a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-597f3d1a] {\n  background-color: #ECEDEE;\n}\n.theme-light .colorBackground3[data-v-597f3d1a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackgroundPrimary[data-v-597f3d1a] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-597f3d1a] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-597f3d1a] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-597f3d1a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-597f3d1a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-597f3d1a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-597f3d1a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-597f3d1a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-597f3d1a] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-597f3d1a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-597f3d1a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-597f3d1a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-597f3d1a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-597f3d1a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-597f3d1a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-597f3d1a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-597f3d1a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-597f3d1a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-597f3d1a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-597f3d1a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-597f3d1a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-597f3d1a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorBackground0[data-v-597f3d1a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-597f3d1a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-597f3d1a] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-597f3d1a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-597f3d1a] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-597f3d1a] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-597f3d1a] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-597f3d1a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-597f3d1a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-597f3d1a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-597f3d1a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-597f3d1a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-597f3d1a] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-597f3d1a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-597f3d1a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-597f3d1a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-597f3d1a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-597f3d1a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-597f3d1a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-597f3d1a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-597f3d1a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .warp-nft[data-v-597f3d1a] {\n  background: #0A0E1F;\n}\n.warp-nft[data-v-597f3d1a] {\n  min-height: 100vh;\n}\n.warp-nft .loading[data-v-597f3d1a] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.warp-nft .warp[data-v-597f3d1a] {\n  padding-bottom: 0.67rem;\n}\n.warp-nft .banner[data-v-597f3d1a] {\n  height: 3.73rem;\n}\n.warp-nft .banner img[data-v-597f3d1a] {\n  width: 100%;\n}\n.warp-nft .text[data-v-597f3d1a] {\n  margin: 0.53rem 0 0.8rem;\n  text-align: center;\n}\n.warp-nft .text .swap-btn[data-v-597f3d1a] {\n  border: none;\n  width: 4.43rem;\n  height: 1.33rem;\n  margin: 0.53rem auto;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  display: block;\n}\n.warp-nft .text .disabled[data-v-597f3d1a] {\n  opacity: 0.5;\n}\n.warp-nft .countdown[data-v-597f3d1a] {\n  text-align: center;\n  margin-top: 0.8rem;\n}\n.warp-nft .countdown .countdown-con[data-v-597f3d1a] {\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n}\n.warp-nft .countdown .van-count-down[data-v-597f3d1a] {\n  font-size: 0.53rem !important;\n}\n.warp-nft .countdown .countdown-time[data-v-597f3d1a] {\n  line-height: 0.53rem;\n  margin-top: 0.13rem;\n  display: inline-block;\n  font-family: \"bitkeep DIN\";\n}\n.warp-nft .countdown .mining-wrap-one-body-time[data-v-597f3d1a] {\n  display: inline-block;\n}\n.warp-nft .countdown .time[data-v-597f3d1a] {\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.warp-nft .warp-content[data-v-597f3d1a] {\n  margin: 0 0.43rem 0.4rem;\n  border-radius: 0.21rem;\n  padding: 0.05rem 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.warp-nft .warp-content .warp-content-title[data-v-597f3d1a] {\n  font-weight: 600;\n}\n.warp-nft .warp-content .ruleContent[data-v-597f3d1a] {\n  line-height: 0.48rem;\n}\n.warp-nft .warp-content .ruleContent-list[data-v-597f3d1a] {\n  text-indent: -0.35rem;\n  padding-left: 0.35rem;\n  line-height: 0.48rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/nftLottery/index.vue?vue&type=template&id=597f3d1a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"warp-nft"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-597f3d1a>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_vm._ssrNode("<div data-v-597f3d1a>","</div>",[_vm._ssrNode("<div class=\"warp\" data-v-597f3d1a>","</div>",[_vm._ssrNode("<div class=\"banner\" data-v-597f3d1a><img"+(_vm._ssrAttr("src",_vm.locale == 'en'
              ? 'http://cdn.bitkeep.vip/u_b_6ab42f50-412d-11ec-84b4-35a471e98238.png'
              : 'http://cdn.bitkeep.vip/u_b_6ab42f50-412d-11ec-84b4-35a471e98238.png'))+" data-v-597f3d1a></div> "),_vm._ssrNode("<div class=\"countdown\" data-v-597f3d1a>","</div>",[_vm._ssrNode("<div class=\"countdown-con textSecond2\" data-v-597f3d1a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("nft.endCountdown"))+"\n        ")+"</div> "),_vm._ssrNode("<div class=\"countdown-time\" data-v-597f3d1a>","</div>",[_c('van-count-down',{staticClass:"mining-wrap-one-body-time textPrimary0",attrs:{"time":_vm.startTime,"format":_vm.formatEn}}),_vm._ssrNode("<span class=\"time textPrimary0\" data-v-597f3d1a>S</span>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text\" data-v-597f3d1a>","</div>",[(!_vm.status)?_c('van-button',{staticClass:"swap-btn colorwhite colorBackgroundPrimary",on:{"click":_vm.getEligibility}},[_vm._v(_vm._s(_vm.$t("nft.getEligibility")))]):_vm._e(),_vm._ssrNode(" "),(_vm.status)?_c('van-button',{staticClass:"swap-btn colorwhite colorBackgroundPrimary",on:{"click":_vm.getEligibility}},[_vm._v(_vm._s(_vm.$t("nft.drawNow")))]):_vm._e()],2),_vm._ssrNode(" <div class=\"warp-content colorBackground3\" data-v-597f3d1a><div class=\"warp-content-con\" data-v-597f3d1a><p class=\"warp-content-title textPrimary0\" data-v-597f3d1a>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$t("nft.qualificationTime"))+"\n          ")+"</p> <p class=\"textSecond1\" data-v-597f3d1a>"+_vm._ssrEscape(_vm._s(_vm.fixdStartTime))+"</p></div> <div class=\"warp-content-con\" data-v-597f3d1a><p class=\"warp-content-title textPrimary0\" data-v-597f3d1a>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$t("nft.lotteryTime"))+"\n          ")+"</p> <p class=\"textSecond1\" data-v-597f3d1a>"+_vm._ssrEscape(_vm._s(_vm.fixdEndTime))+"</p></div></div> <div class=\"warp-content colorBackground3\" data-v-597f3d1a><p class=\"warp-content-title textPrimary0\" data-v-597f3d1a>"+_vm._ssrEscape(_vm._s(_vm.$t("nft.rules")))+"</p> <div class=\"ruleContent\" data-v-597f3d1a><p class=\"textSecond1\" data-v-597f3d1a>"+_vm._ssrEscape(_vm._s(_vm.$t("nft.rule1")))+"</p> <div class=\"ruleContent-list\" data-v-597f3d1a><p class=\"textSecond1\" data-v-597f3d1a>"+_vm._ssrEscape(_vm._s(_vm.$t("nft.rule2")))+"</p> <p class=\"textSecond1\" data-v-597f3d1a>"+_vm._ssrEscape(_vm._s(_vm.$t("nft.rule3")))+"</p></div> <p class=\"textSecond1\" data-v-597f3d1a>"+_vm._ssrEscape(_vm._s(_vm.$t("nft.rule4")))+"</p></div> <p class=\"textSecond3\" style=\"line-height: 18px\" data-v-597f3d1a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("nft.note"))+"\n        ")+"</p></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/nftLottery/index.vue?vue&type=template&id=597f3d1a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/nftLottery/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { USER_API } from "@/api/client";
// import { debounce } from "../../../tools/common";

/* harmony default export */ var nftLotteryvue_type_script_lang_js_ = ({
  name: "nftLottery",

  data() {
    return {
      isLoading: true,
      formatEn: "DDd HHh mmm ss",
      fixdStartTime: "2021/11/12 12:00 - 2021/11/12 12:00",
      fixdEndTime: "2021/11/12 12:00 - 2021/11/13 12:00",
      startTime: null,
      endTime: null,
      status: false
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
    await this.$nextTick();
    this.isLoading = false;
    this.startTime = this.countDown(this.fixdStartTime);
    this.endTime = this.countDown(this.fixdEndTime);

    if (this.startTime < 0) {
      this.status = true;
      this.startTime = this.endTime;
    }
  },

  beforeMount() {
    this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
      BitKeepInvoke.setTitle(this.$t("nft.nftTitle"));
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

  methods: {
    getEligibility() {
      this.getDialog();
    },

    getDialog() {
      this.$dialog.alert({
        title: this.$t("nft.dialogTitle"),
        message: `<img src='http://cdn.bitkeep.vip/u_b_817d2120-413b-11ec-84b4-35a471e98238.png'/><div class='content'>BoredNessApeClubBoredNessApeClubBoredNessApeClub</div>`,
        confirmButtonText: this.$t("nft.btn"),
        getContainer: () => document.querySelector("body")
      });
    },

    countDown(times) {
      let time = times.split("-")[1];
      let nowTime = Date.now(); //当前时间

      let setDate = new Date(time.replace(/-/g, "/"));
      let setTime = setDate.getTime(); //设定的时间
      //获取剩余时间总秒数

      return setTime - nowTime;
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/nftLottery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_nftLotteryvue_type_script_lang_js_ = (nftLotteryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/nftLottery/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(154)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_nftLotteryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "597f3d1a",
  "9c32c218"
  
)

/* harmony default export */ var nftLottery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map