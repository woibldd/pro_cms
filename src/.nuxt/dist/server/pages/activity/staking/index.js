exports.ids = [44,47];
exports.modules = {

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("224cdde4", content, true, context)
};

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b75d8f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b75d8f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b75d8f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b75d8f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b75d8f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-b75d8f8e] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-b75d8f8e] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-b75d8f8e] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-b75d8f8e] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-b75d8f8e] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-b75d8f8e] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-b75d8f8e] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-b75d8f8e] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-b75d8f8e] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-b75d8f8e] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-b75d8f8e] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-b75d8f8e] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-b75d8f8e] {\n  background-color: #495BFF;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-b75d8f8e] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-b75d8f8e] {\n  background-color: #1CBDB5;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-b75d8f8e] {\n  background-color: #080D21;\n}\n.theme-light .colorPrimary[data-v-b75d8f8e] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-b75d8f8e] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-b75d8f8e] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-b75d8f8e] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-b75d8f8e] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-b75d8f8e] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-b75d8f8e] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-b75d8f8e] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-b75d8f8e] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-b75d8f8e] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-b75d8f8e] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-b75d8f8e] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-b75d8f8e] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-b75d8f8e] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-b75d8f8e] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-b75d8f8e] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-b75d8f8e] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-b75d8f8e] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-b75d8f8e] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-b75d8f8e] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-b75d8f8e] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-b75d8f8e] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-b75d8f8e] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-b75d8f8e] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-b75d8f8e] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-b75d8f8e] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-b75d8f8e] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-b75d8f8e] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-b75d8f8e] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-b75d8f8e] {\n  background-color: #495BFF;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-b75d8f8e] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-b75d8f8e] {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-b75d8f8e] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-b75d8f8e] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-b75d8f8e] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-b75d8f8e] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-b75d8f8e] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-b75d8f8e] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-b75d8f8e] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-b75d8f8e] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-b75d8f8e] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-b75d8f8e] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-b75d8f8e] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-b75d8f8e] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-b75d8f8e] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-b75d8f8e] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-b75d8f8e] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-b75d8f8e] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-b75d8f8e] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-b75d8f8e] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-b75d8f8e] {\n  background-color: rgba(255,184,0,0.1);\n}\n.staking-wrap[data-v-b75d8f8e] {\n  min-height: 100vh;\n}\n.staking-wrap .loading[data-v-b75d8f8e] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.staking-wrap .staking-wrap-line[data-v-b75d8f8e] {\n  width: 100%;\n  height: 0.03rem;\n}\n.staking-wrap .staking-wrap-banner[data-v-b75d8f8e] {\n  position: relative;\n}\n.staking-wrap .staking-wrap-banner img[data-v-b75d8f8e] {\n  width: 100%;\n}\n.staking-wrap .staking-wrap-banner .staking-wrap-imgText[data-v-b75d8f8e] {\n  position: absolute;\n  bottom: 0.43rem;\n  left: 0.43rem;\n}\n.staking-wrap .staking-wrap-banner .staking-wrap-imgText .imgTextTitle[data-v-b75d8f8e] {\n  font-size: 0.69rem;\n  font-weight: bold;\n  line-height: 0.75rem;\n  width: 3.73rem;\n  color: #080d21;\n}\n.staking-wrap .staking-wrap-box[data-v-b75d8f8e] {\n  padding: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce[data-v-b75d8f8e] {\n  border-radius: 0.21rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-title[data-v-b75d8f8e] {\n  height: 0.96rem;\n  line-height: 0.96rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-title img[data-v-b75d8f8e] {\n  width: 0.53rem;\n  height: 0.53rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: sub;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-title span[data-v-b75d8f8e] {\n  font-weight: 600;\n  font-size: 0.43rem;\n  margin-left: 0.13rem;\n  display: inline-block;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .staking-wrap-box-Introduce-content[data-v-b75d8f8e] {\n  padding: 0.27rem 0.4rem 0;\n  font-size: 0.32rem;\n  line-height: 0.53rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Introduce .viewAll[data-v-b75d8f8e] {\n  text-align: right;\n  font-size: 0.37rem;\n  line-height: 0.32rem;\n  margin: 0.16rem 0.4rem 0;\n  padding-bottom: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data[data-v-b75d8f8e] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-title[data-v-b75d8f8e] {\n  height: 0.96rem;\n  line-height: 0.96rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-title img[data-v-b75d8f8e] {\n  width: 0.53rem;\n  height: 0.53rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: sub;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-title span[data-v-b75d8f8e] {\n  font-weight: 600;\n  font-size: 0.43rem;\n  margin-left: 0.13rem;\n  display: inline-block;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content[data-v-b75d8f8e] {\n  padding: 0.27rem 0.4rem 0.53rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex[data-v-b75d8f8e] {\n  display: flex;\n  justify-content: space-between;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-left[data-v-b75d8f8e] {\n  text-align: left;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-left[data-v-b75d8f8e] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-left[data-v-b75d8f8e] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-right[data-v-b75d8f8e] {\n  text-align: right;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-right[data-v-b75d8f8e] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-Data .staking-wrap-box-Data-content .staking-wrap-box-Data-flex .staking-wrap-box-Data-right[data-v-b75d8f8e] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool[data-v-b75d8f8e] {\n  border-radius: 0.21rem;\n  margin-top: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title[data-v-b75d8f8e] {\n  display: flex;\n  height: 1.44rem;\n  align-items: center;\n  position: relative;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title .bigImg[data-v-b75d8f8e] {\n  width: 0.8rem;\n  height: 0.8rem;\n  display: inline-block;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title .smallImg[data-v-b75d8f8e] {\n  position: absolute;\n  bottom: 0.27rem;\n  width: 0.37rem;\n  height: 0.37rem;\n  border-radius: 50%;\n  left: 0.91rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex[data-v-b75d8f8e] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-left[data-v-b75d8f8e] :first-child {\n  font-weight: 600;\n  font-size: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-left[data-v-b75d8f8e] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-b75d8f8e] {\n  text-align: right;\n  position: absolute;\n  right: 0.4rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-b75d8f8e] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-title-flex .staking-wrap-box-pool-title-right[data-v-b75d8f8e] :last-child {\n  font-size: 0.32rem;\n  margin-top: 0.05rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content[data-v-b75d8f8e] {\n  padding: 0.27rem 0.4rem 0.53rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex[data-v-b75d8f8e] {\n  display: flex;\n  justify-content: space-between;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-left[data-v-b75d8f8e] {\n  text-align: left;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-left[data-v-b75d8f8e] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-left[data-v-b75d8f8e] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-right[data-v-b75d8f8e] {\n  text-align: right;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-right[data-v-b75d8f8e] :first-child {\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-flex .staking-wrap-box-pool-right[data-v-b75d8f8e] :last-child {\n  font-size: 0.43rem;\n  margin-top: 0.13rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration[data-v-b75d8f8e] {\n  margin-top: 0.53rem;\n  font-size: 0.32rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration-box[data-v-b75d8f8e] {\n  margin-top: 0.27rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration-box .staking-wrap-box-pool-duration-smallBox[data-v-b75d8f8e] {\n  display: inline-block;\n  text-align: center;\n  height: 0.75rem;\n  width: 1.6rem;\n  line-height: 0.75rem;\n  border-radius: 0.11rem;\n  margin-right: 0.21rem;\n  font-size: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-duration-box .setBorderColor[data-v-b75d8f8e] {\n  border: 0.03rem solid #495BFF;\n  color: #495BFF;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-stake[data-v-b75d8f8e] {\n  margin-top: 0.53rem;\n  width: 100%;\n  height: 1.33rem;\n  line-height: 1.33rem;\n  text-align: center;\n  border-radius: 0.27rem;\n  font-weight: 500;\n  font-size: 0.43rem;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-stake-now[data-v-b75d8f8e] {\n  background: #495BFF;\n  color: #fff;\n}\n.staking-wrap .staking-wrap-box .staking-wrap-box-pool .staking-wrap-box-pool-content .staking-wrap-box-pool-stake-soon[data-v-b75d8f8e] {\n  color: #9CA5B3;\n}\n.theme-light .staking-wrap-box-pool-duration-smallBox[data-v-b75d8f8e] {\n  border: 0.03rem solid #F0F0F0;\n}\n.theme-dark .staking-wrap-box-pool-duration-smallBox[data-v-b75d8f8e] {\n  border: 0.03rem solid #2A2D3D;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/staking/index.vue?vue&type=template&id=b75d8f8e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"staking-wrap colorBackground0"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-b75d8f8e>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_c('van-pull-refresh',{attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.getInfo},model:{value:(_vm.refreshLoading),callback:function ($$v) {_vm.refreshLoading=$$v},expression:"refreshLoading"}},[_c('div',{staticClass:"staking-wrap colorBackground0"},[_c('div',{staticClass:"staking-wrap-banner"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_e5be40b0-6468-11ec-a2a9-47db2a9d25c4.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-imgText"},[_c('div',{staticClass:"imgTextTitle"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box"},[_c('div',{staticClass:"staking-wrap-box-Introduce colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-Introduce-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_9976a830-647e-11ec-8dc3-6956fa76f0cf.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.Introduce')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Introduce-content textSecond2"},[_vm._v("\n            "+_vm._s(_vm.$t('staking.content'))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"viewAll colorPrimary",on:{"click":_vm.viewAll}},[_vm._v("\n            "+_vm._s(!this.flag ? _vm.$t("mining.viewAll") : _vm.$t("mining.pickUp"))+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Data colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-Data-title"},[_c('img',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_554d2280-6481-11ec-8561-09279f51a681.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.Data')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Data-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-Data-flex"},[_c('div',{staticClass:"staking-wrap-box-Data-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.StakedBKB')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("\n                  "+_vm._s(_vm.milliFormat(
                      _vm.listInfo.list.length > 0
                        ? _vm.listInfo.list[0].allStakeAmount.toFixed(0)
                        : 0
                    ))+"BKB\n                ")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-Data-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.totalSupply')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("\n                  "+_vm._s(_vm.milliFormat(
                      _vm.listInfo.list.length > 0
                        ? _vm.listInfo.list[0].bkbTotalSuperAmount
                        : 0
                    ))+"\n                  BKB\n                ")])])])])]),_vm._v(" "),_vm._l((_vm.listInfo.list),function(item,index){return _c('div',{key:index,staticClass:"staking-wrap-box-pool colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-pool-title"},[_c('img',{staticClass:"bigImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-title-left"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.EndsIn')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v(_vm._s(_vm.ends))])])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-pool-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.APY')))]),_vm._v(" "),_c('div',{staticClass:"colorSecond01 setFontFamily"},[_vm._v(_vm._s(_vm.apy))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.YourStakeAmount')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("\n                  "+_vm._s(item.myAllStaking.toFixed(2))+" BKB\n                ")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration textSecond2"},[_vm._v("\n              "+_vm._s(_vm.$t('staking.Duration'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration-box"},_vm._l((item.config),function(sitem,i){return _c('span',{key:i,staticClass:"staking-wrap-box-pool-duration-smallBox setFontFamily",class:[
                  _vm.isActiveSaleOut(sitem) ? 'textSecond3' : 'textSecond1',
                  i == _vm.setBorderColor ? 'setBorderColor' : '' ],on:{"click":function($event){return _vm.handlePoolTimeTab(sitem, i)}}},[_vm._v(_vm._s(sitem.time))])}),0),_vm._v(" "),_c('div',{staticClass:"\n                staking-wrap-box-pool-stake\n              ",class:_vm.btn == ("" + (_vm.$t('staking.StakeNow')))
                  ? 'staking-wrap-box-pool-stake-now'
                  : 'textSecond3 colorBackground2',on:{"click":_vm.stakeNow}},[_vm._v("\n              "+_vm._s(_vm.btn)+"\n            ")])])])}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-pool-title"},[_c('img',{staticClass:"bigImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"smallImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_090033d0-5104-11ec-be10-ddc2856c6ac6.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-title-left"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.EthereumChainPool')))]),_vm._v(" "),_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.EndsIn')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("--")])])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-pool-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.APY')))]),_vm._v(" "),_c('div',{staticClass:"colorSecond01 setFontFamily"},[_vm._v("15.48%")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.YourStakeAmount')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("0 BKB")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration textSecond2"},[_vm._v("\n              "+_vm._s(_vm.$t('staking.Duration'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration-box"},[_c('span',{staticClass:"\n                  staking-wrap-box-pool-duration-smallBox\n                  textSecond1\n                  setBorderColor\n                "},[_vm._v("7")])]),_vm._v(" "),_c('div',{staticClass:"\n                staking-wrap-box-pool-stake textSecond3 colorBackground2\n              "},[_vm._v("\n              "+_vm._s(_vm.$t('staking.ComingSoon'))+"\n            ")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool colorBackground1"},[_c('div',{staticClass:"staking-wrap-box-pool-title"},[_c('img',{staticClass:"bigImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_a6bdfc60-5113-11ec-be10-ddc2856c6ac6.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"smallImg",attrs:{"src":"https://cdn.bitkeep.vip/u_b_bc5504d0-567a-11ec-a2f6-c30da61fc62b.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-title-left"},[_c('div',{staticClass:"textPrimary0"},[_vm._v(_vm._s(_vm.$t('staking.BSCChainPool')))]),_vm._v(" "),_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.stakingImg')))])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-title-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.EndsIn')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("--")])])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-line colorLine"}),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-content textSecond2"},[_c('div',{staticClass:"staking-wrap-box-pool-flex"},[_c('div',{staticClass:"staking-wrap-box-pool-left"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.APY')))]),_vm._v(" "),_c('div',{staticClass:"colorSecond01 setFontFamily"},[_vm._v("17.85%")])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-right"},[_c('div',{staticClass:"textSecond2"},[_vm._v(_vm._s(_vm.$t('staking.YourStakeAmount')))]),_vm._v(" "),_c('div',{staticClass:"textPrimary0 setFontFamily"},[_vm._v("0 BKB")])])]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration textSecond2"},[_vm._v("\n              "+_vm._s(_vm.$t('staking.Duration'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"staking-wrap-box-pool-duration-box"},[_c('span',{staticClass:"\n                  staking-wrap-box-pool-duration-smallBox\n                  textSecond1\n                  setBorderColor\n                "},[_vm._v("7")])]),_vm._v(" "),_c('div',{staticClass:"\n                staking-wrap-box-pool-stake textSecond3 colorBackground2\n              "},[_vm._v("\n              "+_vm._s(_vm.$t('staking.ComingSoon'))+"\n            ")])])])],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/staking/index.vue?vue&type=template&id=b75d8f8e&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(67);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(64);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./pages/activity/staking/wallet.js
var wallet = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/staking/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var stakingvue_type_script_lang_js_ = ({
  name: "staking",

  data() {
    return {
      isLoading: true,
      refreshLoading: false,
      flag: false,
      theme: 0,
      setBorderColor: 0,
      apy: "20%",
      yourAmount: "0",
      ends: "--",
      btn: "Stake now",
      address: '',
      listInfo: {
        list: [{
          allStakeAmount: 0,
          bkbTotalSuperAmount: 0,
          config: []
        }]
      },
      question: "https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png"
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

  mounted() {
    this.setIcon();
    if (!this.isBitKeep) this.getInfo();
  },

  methods: {
    async getInfo() {
      if (!this.isBitKeep) this.address = await wallet["wallet"].connect();
      const {
        data,
        status
      } = await client["a" /* USER_API */].poolList({
        userid: this.address
      });

      if (status == 1) {
        this.isLoading = false;
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("staking.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.isLoading = false;
      this.listInfo = data;
      this.listInfo.list = data.list;
      let prames = data.list && data.list[0].config[0];
      this.refreshLoading = false;
      this.handlePoolTimeTab(prames, 0);
    },

    isActiveSaleOut(sitem) {
      return sitem.allStake >= sitem.limit || external_moment_default()(sitem.lastStakeTime).isBefore(external_moment_default()(this.listInfo.list[0].serverTime));
    },

    stakeNow() {
      if (this.btn == this.$t('staking.SoldOut')) return;
      this.$router.push("/activity/staking/addPool");
    },

    handlePoolTimeTab(item, index) {
      this.setBorderColor = index;
      this.apy = (item.apy * 100).toFixed(2) + "%"; // this.yourAmount = this.milliFormat(item.limit);

      this.ends = external_moment_default()(item.lastStakeTime).format("YYYY-MM-DD HH:mm");
      this.btn = !this.isActiveSaleOut(item) ? this.$t('staking.StakeNow') : this.$t('staking.SoldOut');
    },

    setIcon() {
      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t("staking.stakingTitle"));
        BitKeepInvoke.getAddress(async (err, data) => {
          if (err) {
            return this.$toast(err);
          }

          this.addresses = data;
          this.address = this.addresses["eth"] || "--";
          this.getInfo();
        }); //设置主题

        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              this.theme = 1;
              this.question = "https://cdn.bitkeep.vip/u_b_47485390-4f90-11ec-ace3-97579b99c357.png";
              body.setAttribute("class", "theme-dark");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_09035ca0-4dd9-11ec-a555-07d5354e6fab.png", () => {
                  this.$router.push("/activity/staking/myPool");
                });
              }, 500);
            } else {
              this.theme = 0;
              this.question = "https://cdn.bitkeep.vip/u_b_99107f80-356f-11ec-8c2d-251a27ef7eba.png";
              body.setAttribute("class", "theme-light");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("https://cdn.bitkeep.vip/u_b_2bb4fa20-3b86-11ec-8e63-1db435df936c.png", () => {
                  this.$router.push("/activity/staking/myPool");
                });
              }, 500);
            }
          });
        });
      });
    },

    viewAll() {
      this.flag = !this.flag;
      let dom = document.getElementsByClassName("staking-wrap-box-Introduce-content")[0];

      if (this.flag) {
        dom.setAttribute("style", "-webkit-line-clamp:20");
      } else {
        dom.setAttribute("style", "-webkit-line-clamp:3");
      }
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/staking/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_stakingvue_type_script_lang_js_ = (stakingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/staking/index.vue



function injectStyles (context) {
  
  var style1 = __webpack_require__(227)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_stakingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b75d8f8e",
  "5c7ef534"
  
)

/* harmony default export */ var staking = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer16", function() { return transfer16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wallet", function() { return wallet; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
// import detectEthereumProvider from '@metamask/detect-provider';
 // import { transfer16 } from '../common/common'

function transfer16(val = '1') {
  val = isNaN(Number(val)) ? 1 : Number(val);
  return "0x" + val.toString(16);
}

class Wallet extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor() {
    super();
    this._accounts = [];
    this._chainId = 0;
    this._walletPlatform = 'bitkeep';
  } // 是否安装 bitkeep 钱包


  isInstall() {
    const isInstalled = !!window.ethereum && !!window.isBitKeep;
    !isInstalled && console.warn("no installed bitkeep");
    return isInstalled;
  } // 是否连接中


  isConnected() {
    return window.ethereum && window.ethereum.isConnected();
  } // 连接钱包


  async connect() {
    if (this.isInstall()) {
      const Accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      this.initEvent();
      return Accounts[0];
    } else {
      return {
        status: 50001,
        message: 'please download bitkeep chrome '
      };
    }
  } // 切换地址


  selectedAddress() {
    return window.ethereum && ethereum.selectedAddress;
  } // 获取钱包信息


  getWalletInfo() {
    return {
      address: window.ethereum && ethereum.selectedAddress,
      chainName: window.ethereum && window.ethereum.chainName || 'eth',
      chainId: window.ethereum && window.ethereum.chainId || '1',
      walletId: '',
      walletPlatform: this.getWalletPlatform()
    };
  } // 获取 chain ID


  async getChainId() {
    return window.ethereum && window.ethereum.request({
      method: 'eth_chainId'
    });
  } // 切换 chain ID


  async switchChainId(chainId, address) {
    if (!address) {
      const [nAddress] = await this.getAccounts();
      address = nAddress;
    }

    return window.ethereum && window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: transfer16(chainId)
      }, address]
    });
  } // 获取钱包标识


  getWalletPlatform() {
    return this._walletPlatform;
  } // 获取钱包账号


  async getAccounts() {
    return window.ethereum ? window.ethereum.request({
      method: "eth_accounts"
    }) : [];
  } // 登录签名


  async LoginSign(dataToSign, address) {
    console.log(dataToSign, address, 'dataToSign, addressdataToSign, addressdataToSign, address');
    return await window.ethereum.request({
      method: "personal_sign",
      params: [dataToSign, address],
      from: address
    }); // return await window.ethereum.signMessage({ data: dataToSign })
  }

  initEvent() {
    ethereum.removeAllListeners && ethereum.removeAllListeners(); // ethereum.removeListener && ethereum.removeListener('chainChanged')

    ethereum.on('accountsChanged', async (...arg) => {
      this.emit('accountsChanged', ...arg);
    });
    ethereum.on('chainChanged', async (...arg) => {
      this.emit('chainChanged', ...arg);
    });
  }

}

const wallet = new Wallet();

/***/ })

};;
//# sourceMappingURL=index.js.map