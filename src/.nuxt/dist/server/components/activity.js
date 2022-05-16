exports.ids = [1];
exports.modules = {

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ff7373b2", content, true, context)
};

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f07a04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .textSecond1[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .textSecond2[data-v-41f07a04] {\n  color: #919899;\n}\n.theme-light .textSecond3[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-41f07a04] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-41f07a04] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorLine1[data-v-41f07a04] {\n  background-color: #F0F0F0;\n}\n.theme-light .colorBackground0[data-v-41f07a04] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-41f07a04] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-41f07a04] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-41f07a04] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-41f07a04] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-41f07a04] {\n  background-color: #7524f9;\n}\n.theme-light .colorBackgroundColorSecond11[data-v-41f07a04] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-light .colorBackgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorBackgroundTextPrimary0[data-v-41f07a04] {\n  background-color: #0E0E0E;\n}\n.theme-light .colorPrimary[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-light .colorSecond01[data-v-41f07a04] {\n  color: #2AC8DD;\n}\n.theme-light .backgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-light .colorSecond02[data-v-41f07a04] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-41f07a04] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-41f07a04] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-41f07a04] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-41f07a04] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-41f07a04] {\n  color: #F04E98;\n}\n.theme-light .colorSecond08[data-v-41f07a04] {\n  color: #FFB800;\n}\n.theme-light .colorBlack[data-v-41f07a04] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-41f07a04] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-41f07a04] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-41f07a04] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-41f07a04] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-41f07a04] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-41f07a04] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-41f07a04] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .colorSecond18[data-v-41f07a04] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-dark .textPrimary0[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-41f07a04] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-41f07a04] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-41f07a04] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-41f07a04] {\n  background-color: #1F212E;\n}\n.theme-dark .colorLine1[data-v-41f07a04] {\n  background-color: #2A2D3D;\n}\n.theme-dark .colorBackground0[data-v-41f07a04] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-41f07a04] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-41f07a04] {\n  background-color: #212331;\n}\n.theme-dark .colorBackground3[data-v-41f07a04] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-41f07a04] {\n  background-color: #7524f9;\n}\n.theme-dark .colorBackgroundColorSecond11[data-v-41f07a04] {\n  background-color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorBackgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorBackgroundTextPrimary0[data-v-41f07a04] {\n  background-color: #DFE0E3;\n}\n.theme-dark .colorPrimary[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-dark .colorSecond01[data-v-41f07a04] {\n  color: #2AC8DD;\n}\n.theme-dark .backgroundSecond01[data-v-41f07a04] {\n  background-color: #2AC8DD;\n}\n.theme-dark .colorSecond02[data-v-41f07a04] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-41f07a04] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-41f07a04] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-41f07a04] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-41f07a04] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-41f07a04] {\n  color: #F04E98;\n}\n.theme-dark .colorSecond08[data-v-41f07a04] {\n  color: #FFB800;\n}\n.theme-dark .colorBlack[data-v-41f07a04] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-41f07a04] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-41f07a04] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-41f07a04] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-41f07a04] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-41f07a04] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-41f07a04] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-41f07a04] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .colorSecond18[data-v-41f07a04] {\n  background-color: rgba(255,184,0,0.1);\n}\n.theme-light .Background0[data-v-41f07a04] {\n  background-color: #fafafa;\n}\n.theme-light .Background0[data-v-41f07a04] {\n  background-color: #F8F8F9;\n}\n.theme-dark .Background0[data-v-41f07a04] {\n  background-color: #17171A;\n}\n.theme-dark .Background1[data-v-41f07a04] {\n  background-color: #202024;\n}\n.theme-light .wrap-min[data-v-41f07a04] {\n  background: #fff;\n}\n.theme-light .line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .wrap[data-v-41f07a04] {\n  background: #fff;\n}\n.theme-light .about .about-wrap[data-v-41f07a04] {\n  background: #F8F9FA;\n}\n.theme-light .about .about-wrap-pos[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .about .about-wrap-pos p[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .about .about-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .about .about-con[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .about .viewAll[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-light .distribution .distribution-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .hold .hold-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .exchangeTotal[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .total[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .total span[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .distribution-man[data-v-41f07a04] {\n  background: #F8F9FA;\n}\n.theme-light .distribution-man .data div[data-v-41f07a04]:last-child {\n  color: #0E0E0E;\n}\n.theme-light .distribution-man .data>div[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .distribution-man .data>div[data-v-41f07a04] :last-child {\n  color: #0E0E0E;\n}\n.theme-light .hold .hold-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .appreciation .appreciation-title[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .appreciation-grid .appreciation-grid-flex div span[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .setIcon[data-v-41f07a04] {\n  color: #999ba3;\n}\n.theme-light .setLightColor[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-light .setDarkColor[data-v-41f07a04] {\n  color: #515556;\n}\n.theme-light .more .more-title[data-v-41f07a04] {\n  color: #0E0E0E;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .more .more-line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .more .more-line span[data-v-41f07a04] {\n  color: #0E0E0E;\n}\n.theme-dark .wrap-min[data-v-41f07a04] {\n  background: #171A26;\n}\n.theme-dark .line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .wrap[data-v-41f07a04] {\n  background: #fff;\n}\n.theme-dark .about .about-wrap[data-v-41f07a04] {\n  background: #0A0E1F;\n}\n.theme-dark .about .about-wrap-pos[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-wrap-pos p[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-con[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .about .viewAll[data-v-41f07a04] {\n  color: #7524f9;\n}\n.theme-dark .distribution .distribution-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .hold .hold-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .exchangeTotal[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .total[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .total span[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .distribution-man[data-v-41f07a04] {\n  background: #212331;\n}\n.theme-dark .distribution-man .data[data-v-41f07a04] :last-child {\n  color: #DFE0E3;\n}\n.theme-dark .distribution-man .data>div[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .distribution-man .data>div span[data-v-41f07a04]:last-child {\n  color: #9CA5B3;\n}\n.theme-dark .hold .hold-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .appreciation .appreciation-title[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .appreciation-grid .appreciation-grid-flex div span[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .setIcon[data-v-41f07a04] {\n  color: #999ba3;\n}\n.theme-dark .setdarkColor[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.theme-dark .setDarkColor[data-v-41f07a04] {\n  color: #9CA5B3;\n}\n.theme-dark .more .more-title[data-v-41f07a04] {\n  color: #DFE0E3;\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .more .more-line[data-v-41f07a04] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .more .more-line span[data-v-41f07a04] {\n  color: #DFE0E3;\n}\n.statusM[data-v-41f07a04] {\n  padding-bottom: 1.39rem;\n}\n.hold-content img[data-v-41f07a04] {\n  width: 1.07rem !important;\n  height: 1.07rem !important;\n}\n.about .about-wrap[data-v-41f07a04] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.07rem;\n}\n.about .about-wrap-pos[data-v-41f07a04] {\n  text-align: center;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  direction: cloumn;\n}\n.about .about-wrap-pos img[data-v-41f07a04] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.about .about-wrap-pos p[data-v-41f07a04] {\n  margin-top: 0.13rem;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  font-weight: 600;\n}\n.about .about-content[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.about .about-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.about .about-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.about .about-con[data-v-41f07a04] {\n  padding-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.about .viewAll[data-v-41f07a04] {\n  text-align: right;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  margin-top: 0.16rem;\n}\n.distribution[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.distribution .distribution-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.distribution .distribution-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.distribution .charts-img[data-v-41f07a04] {\n  text-align: center;\n  margin: 0.53rem;\n}\n.distribution .charts-img img[data-v-41f07a04] {\n  width: 2.93rem;\n  height: 2.93rem;\n}\n.distribution .charts-img .exchangeTotal[data-v-41f07a04] {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n}\n.distribution .charts-img .total[data-v-41f07a04] {\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n.distribution .distribution-man[data-v-41f07a04] {\n  margin-bottom: 0.8rem;\n  border-radius: 0.21rem;\n  padding: 0.27rem;\n}\n.distribution .distribution-man .data[data-v-41f07a04] {\n  display: flex;\n  justify-content: space-between;\n}\n.distribution .distribution-man .data div[data-v-41f07a04]:last-child {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n}\n.distribution .distribution-man .data>div[data-v-41f07a04] {\n  font-size: 0.37rem;\n  line-height: 0.91rem;\n  vertical-align: middle;\n}\n.distribution .distribution-man .data>div span[data-v-41f07a04]:first-child {\n  display: inline-block;\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n}\n.distribution .distribution-man .data>div span[data-v-41f07a04]:last-child {\n  vertical-align: middle;\n}\n.hold[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.hold .hold-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #0E0E0E;\n  vertical-align: middle;\n}\n.hold .hold-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.appreciation[data-v-41f07a04] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.appreciation .appreciation-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #0E0E0E;\n  vertical-align: middle;\n}\n.appreciation .appreciation-title img[data-v-41f07a04] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.appreciation-grid[data-v-41f07a04] {\n  width: 100%;\n  text-align: center;\n}\n.appreciation-grid .appreciation-grid-flex[data-v-41f07a04] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.53rem;\n}\n.appreciation-grid .appreciation-grid-flex div[data-v-41f07a04] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 50%;\n  float: left;\n}\n.appreciation-grid .appreciation-grid-flex div img[data-v-41f07a04] {\n  margin-top: 0.13rem;\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.appreciation-grid .appreciation-grid-flex div span[data-v-41f07a04] {\n  font-size: 0.37rem;\n  color: #515556;\n  width: 3.73rem;\n  margin-top: 0.13rem;\n  line-height: 0.48rem;\n}\n.setFontFamily[data-v-41f07a04] {\n  font-family: \"bitkeep DIN\";\n}\n.more[data-v-41f07a04] {\n  margin: 0 0.43rem 1.09rem;\n}\n.more .more-title[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 1.2rem;\n  font-weight: 600;\n  color: #0E0E0E;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.more .more-line[data-v-41f07a04] {\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  height: 1.33rem;\n  border-bottom: 0.03rem solid #F4F5FA;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.more .more-line a[data-v-41f07a04] {\n  flex: 1;\n}\n.more .more-line img[data-v-41f07a04] {\n  width: 0.64rem;\n  height: 0.64rem;\n  vertical-align: middle;\n}\n.more .more-line span[data-v-41f07a04] {\n  color: #0E0E0E;\n  display: inline-block;\n  margin-left: 0.27rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 306:
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/activity/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(214)
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
  "329c9f9a"
  
)

/* harmony default export */ var activity = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=activity.js.map