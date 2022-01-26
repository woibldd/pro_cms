exports.ids = [43];
exports.modules = {

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("26d6e8bc", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("7981a2c1", content, true, context)
};

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0 {\n  color: #080D21;\n}\n.theme-light .textSecond1 {\n  color: #4B5373;\n}\n.theme-light .textSecond2 {\n  color: #7F828F;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary {\n  color: #495BFF;\n}\n.theme-light .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n}\nbody::-webkit-scrollbar {\n  display: none;\n}\np {\n  margin: 0;\n  padding: 0;\n}\n.van-dialog .van-dialog__content .van-dialog__message {\n  overflow-y: clip;\n}\n.Novicebenefits {\n  min-height: 100vh;\n}\n.Novicebenefits-box {\n  padding: 0.27rem 0.43rem 1.44rem 0.43rem;\n}\n.Novicebenefits-title {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  font-size: 0.37rem;\n  font-weight: 500;\n}\n.Novicebenefits-title .van-image {\n  width: 0.43rem;\n  height: 0.43rem;\n  margin: 0 0 0 0.16rem;\n}\n.Novicebenefits-title-not {\n  margin-top: 0.27rem;\n}\n.Novicebenefits-sign {\n  width: 100%;\n  height: 4.85rem;\n  border-radius: 0.27rem;\n}\n.theme-light .Novicebenefits-sign-top-signlist {\n  border-bottom: 0.05rem solid #F4F5FA;\n}\n.theme-dark .Novicebenefits-sign-top-signlist {\n  border-bottom: 0.05rem solid #1F212E;\n}\n.Novicebenefits-sign-top {\n  height: 2.93rem;\n}\n.Novicebenefits-sign-top .Novicebenefits-sign-top-signlist {\n  margin: 0 0.4rem 0 0.4rem;\n  height: 2.13rem;\n  display: flex;\n  justify-content: space-around;\n}\n.Novicebenefits-sign-top .Novicebenefits-sign-top-signlist .Novicebenefits-sign-item {\n  padding: 0.4rem 0;\n}\n.Novicebenefits-sign-top .Novicebenefits-sign-top-signlist .Novicebenefits-sign-item .Novicebenefits-sign-item-img {\n  width: 1.07rem;\n  height: 1.07rem;\n  position: relative;\n  text-align: center;\n}\n.Novicebenefits-sign-top .Novicebenefits-sign-top-signlist .Novicebenefits-sign-item .Novicebenefits-sign-item-img .van-image {\n  width: 1.07rem;\n  height: 1.07rem;\n}\n.Novicebenefits-sign-top .Novicebenefits-sign-top-signlist .Novicebenefits-sign-item .Novicebenefits-sign-item-img .Novicebenefits-sign-item-img-obtain {\n  display: inline-block;\n  position: absolute;\n  top: -0.21rem;\n  width: 1.07rem;\n  height: 0.48rem;\n  border-radius: 0.53rem;\n  text-align: center;\n  font-size: 0.29rem;\n  line-height: 0.48rem;\n  z-index: 999;\n}\n.Novicebenefits-sign-top-bottom {\n  height: 1.87rem;\n  display: flex;\n  align-items: center;\n}\n.Novicebenefits-sign-title {\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  padding: 0.4rem 0 0 0.4rem;\n  font-weight: 500;\n}\n.Novicebenefits-sign-top-bottom-content-span {\n  display: inline-block;\n  margin: 0 0.08rem;\n  line-height: 0.53rem;\n}\n.Novicebenefits-sign-top-bottom {\n  display: flex;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-img-left {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-img {\n  padding: 0.64rem 0.53rem 0.64rem 0.53rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-img .van-image {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn {\n  margin: 0.64rem 0.43rem 0.56rem 0;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .standard {\n  display: inline-block;\n  width: 1.87rem;\n  height: 0.75rem;\n  margin-left: 0.27rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .Novicebenefits-sign-top-bottom-btn-span {\n  max-width: 1.81rem;\n  height: 0.75rem;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 0.75rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .draw-btn {\n  width: 1.87rem;\n  height: 0.75rem;\n  font-size: 0.32rem;\n  line-height: 0.75rem;\n  border-radius: 2.67rem;\n  border: none;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .draw-btn .van-button__text {\n  width: 1.87rem;\n  height: 0.75rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .textbtn {\n  width: 1.87rem;\n  height: 0.75rem;\n  font-size: 0.32rem;\n  line-height: 0.75rem;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .textbtn .van-button__text {\n  width: 1.87rem;\n  height: 0.75rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .alreadydraw-btn {\n  width: 1.87rem;\n  height: 0.75rem;\n  text-align: center;\n  line-height: 0.75rem;\n  font-size: 0.32rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .alreadydraw-btn .van-button__text {\n  width: 1.87rem;\n  height: 0.75rem;\n}\n.Novicebenefits-sign-top-bottom .Novicebenefits-sign-top-bottom-btn .van-button--normal {\n  padding: 0;\n}\n.Novicebenefits-sign-item-result {\n  text-align: center;\n  font-size: 0.29rem;\n}\n.Novicebenefits-sign-item-day {\n  font-size: 0.29rem;\n  color: #7F828F;\n}\n.Novicebenefits-sign-top-bottom-content {\n  flex: 1;\n  margin: 0.45rem 0;\n}\n.Novicebenefits-sign-top-bottom-content .Novicebenefits-sign-top-bottom-img-right {\n  width: 0.4rem;\n  height: 0.4rem;\n  margin-left: 0.13rem;\n}\n.Novicebenefits-sign-top-bottom-content .Novicebenefits-sign-top-bottom-content-top {\n  display: flex;\n  align-items: center;\n}\n.Novicebenefits-sign-top-bottom-content p:nth-child(1) {\n  font-size: 0.37rem;\n  padding: 0;\n  margin: 0;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 4.8rem;\n}\n.Novicebenefits-sign-top-bottom-content p:nth-child(2) {\n  font-size: 0.32rem;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 5.07rem;\n}\n.Novicebenefits-reward {\n  display: flex;\n  background: #ffffff;\n  border-radius: 0.27rem;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.Novicebenefits-reward .Novicebenefits-reward-item {\n  width: 100%;\n  height: 1.87rem;\n  display: flex;\n  align-items: center;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0 {\n  color: #080D21;\n}\n.theme-light .textSecond1 {\n  color: #4B5373;\n}\n.theme-light .textSecond2 {\n  color: #7F828F;\n}\n.theme-light .textSecond3 {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1 {\n  background-color: #fff;\n}\n.theme-light .colorBackground2 {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3 {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary {\n  color: #495BFF;\n}\n.theme-light .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-light .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-light .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03 {\n  color: #26BC80;\n}\n.theme-light .colorSecond04 {\n  color: #FF8146;\n}\n.theme-light .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07 {\n  color: #F04E98;\n}\n.theme-light .colorBlack {\n  color: #000;\n}\n.theme-light .colorwhite {\n  color: #fff;\n}\n.theme-light .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0 {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1 {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2 {\n  color: #7F828F;\n}\n.theme-dark .textSecond3 {\n  color: #6D707D;\n}\n.theme-dark .colorDisable {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0 {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1 {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2 {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3 {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01 {\n  color: #1CBDB5;\n}\n.theme-dark .backgroundSecond01 {\n  background-color: #1CBDB5;\n}\n.theme-dark .colorSecond02 {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03 {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04 {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05 {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06 {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07 {\n  color: #F04E98;\n}\n.theme-dark .colorBlack {\n  color: #000;\n}\n.theme-dark .colorwhite {\n  color: #fff;\n}\n.theme-dark .colorSecond10 {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11 {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12 {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13 {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14 {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15 {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .van-dialog,\n.theme-light .van-dialog__footer,\n.theme-light .van-dialog .van-button--default {\n  background: #fff;\n}\n.theme-light .van-dialog [class*=van-hairline]::after,\n.theme-light .van-dialog__footer [class*=van-hairline]::after,\n.theme-light .van-dialog .van-button--default [class*=van-hairline]::after {\n  border: 0.03rem solid #F4F5FA;\n}\n.theme-light .van-dialog .van-dialog__header,\n.theme-light .van-dialog__footer .van-dialog__header,\n.theme-light .van-dialog .van-button--default .van-dialog__header {\n  color: #080D21;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.theme-light .van-dialog .popBox,\n.theme-light .van-dialog__footer .popBox,\n.theme-light .van-dialog .van-button--default .popBox {\n  color: #080D21;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.theme-light .van-dialog .van-dialog__confirm,\n.theme-light .van-dialog__footer .van-dialog__confirm,\n.theme-light .van-dialog .van-button--default .van-dialog__confirm {\n  color: #080D21;\n}\n.theme-light .van-dialog .van-dialog__confirm:active,\n.theme-light .van-dialog__footer .van-dialog__confirm:active,\n.theme-light .van-dialog .van-button--default .van-dialog__confirm:active {\n  color: #080D21;\n}\n.theme-light .trading-wrap-status .setBorder {\n  border-bottom: 0.06rem solid #080D21;\n  font-weight: 500;\n}\n.theme-dark .van-dialog,\n.theme-dark .van-dialog__footer,\n.theme-dark .van-dialog .van-button--default {\n  background: #171A26;\n}\n.theme-dark .van-dialog .van-dialog__header,\n.theme-dark .van-dialog__footer .van-dialog__header,\n.theme-dark .van-dialog .van-button--default .van-dialog__header {\n  color: #7F828F;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.theme-dark .van-dialog .popBox,\n.theme-dark .van-dialog__footer .popBox,\n.theme-dark .van-dialog .van-button--default .popBox {\n  color: #7F828F;\n  font-size: 0.43rem;\n  font-weight: 500;\n}\n.theme-dark .van-dialog [class*=van-hairline]::after,\n.theme-dark .van-dialog__footer [class*=van-hairline]::after,\n.theme-dark .van-dialog .van-button--default [class*=van-hairline]::after {\n  border: 0.03rem solid #1F212E;\n}\n.theme-dark .van-dialog .van-dialog__confirm,\n.theme-dark .van-dialog__footer .van-dialog__confirm,\n.theme-dark .van-dialog .van-button--default .van-dialog__confirm {\n  color: #DFE0E3;\n}\n.theme-dark .van-dialog .van-dialog__confirm:active,\n.theme-dark .van-dialog__footer .van-dialog__confirm:active,\n.theme-dark .van-dialog .van-button--default .van-dialog__confirm:active {\n  color: #DFE0E3;\n}\n.theme-dark .trading-wrap-status .setBorder {\n  border-bottom: 0.06rem solid #DFE0E3;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/noviceBenefits/index.vue?vue&type=template&id=0f00155a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Novicebenefits colorBackground0"},[_vm._ssrNode("<div class=\"Novicebenefits-box\">","</div>",[_vm._ssrNode("<div class=\"Novicebenefits-title textPrimary0\">","</div>",[_vm._ssrNode(_vm._ssrEscape("\n              "+_vm._s(_vm.$t('noviceBenefits.sign'))+"\n              ")),_c('van-image',{attrs:{"src":_vm.question},on:{"click":function($event){_vm.firstEnter(_vm.$t('noviceBenefits.Tips'),_vm.$t('noviceBenefits.Cumulative'))}}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Novicebenefits-sign colorBackground1\">","</div>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top\">","</div>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-title textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.alreadySignedin')))+"<span class=\"setFontFamily colorPrimary Novicebenefits-sign-top-bottom-content-span\">"+_vm._ssrEscape(_vm._s(_vm.signDay))+"</span>"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.day')))+"</div> "),_vm._ssrNode("<div class=\"Novicebenefits-sign-top-signlist\">","</div>",_vm._l((_vm.signList.list),function(item,index){return _vm._ssrNode("<div class=\"Novicebenefits-sign-item\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-item-img\">","</div>",[_vm._ssrNode(((item.day === 4 || item.day === 7)?("<span class=\"Novicebenefits-sign-item-img-obtain backgroundSecond01\"><i class=\"colorwhite\" style=\"font-style:normal;\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.obtain')))+"</i></span>"):"<!---->")+" "),(!item.isSignin)?_c('van-image',{attrs:{"src":(item.day === 4 || item.day === 7) && index === _vm.signDay && !_vm.signList.todayIsSgin ? 'https://cdn.bitkeep.vip/u_b_aa80c7c0-7615-11ec-9d29-f144d09ca5ed.png' : index === _vm.signDay && !_vm.signList.todayIsSgin? 'https://cdn.bitkeep.vip/u_b_56e30a70-7448-11ec-a3df-456c694c3f18.png' : (item.day === 4 || item.day === 7) ? 'https://cdn.bitkeep.vip/u_b_65c04710-7448-11ec-a3df-456c694c3f18.png' : 'https://cdn.bitkeep.vip/u_b_5457fe50-743e-11ec-a3df-456c694c3f18.png'}}):_c('van-image',{attrs:{"src":(item.day === 4 || item.day === 7) ? 'https://cdn.bitkeep.vip/u_b_78224830-7449-11ec-a3df-456c694c3f18.png' : 'https://cdn.bitkeep.vip/u_b_384a1810-7448-11ec-a3df-456c694c3f18.png'}})],2),_vm._ssrNode(" "+((index === _vm.signDay && !_vm.signList.todayIsSgin)?("<p class=\"Novicebenefits-sign-item-result colorPrimary\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Signedin')))+"</p>"):("<p"+(_vm._ssrClass(null,index < _vm.signDay  ? 'Novicebenefits-sign-item-result Novicebenefits-sign-item-day colorPrimary':'Novicebenefits-sign-item-result Novicebenefits-sign-item-day textSecond2 setFontFamily'))+">"+_vm._ssrEscape(" "+_vm._s(item.day + _vm.$t('noviceBenefits.day')))+"</p>")))],2)])}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom\">","</div>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-img\">","</div>",[_c('van-image',{staticClass:"Novicebenefits-sign-top-bottom-img-left",attrs:{"src":"https://cdn.bitkeep.vip/u_b_ae5cdb10-79e7-11ec-9d29-f144d09ca5ed.png"}})],1),_vm._ssrNode(" <div class=\"Novicebenefits-sign-top-bottom-content\"><p class=\"textPrimary0 Novicebenefits-sign-top-bottom-content-top\">"+_vm._ssrEscape("\n                      "+_vm._s(_vm.$t('noviceBenefits.Currently'))+" \n                      ")+"<span class=\"colorPrimary Novicebenefits-sign-top-bottom-content-span setFontFamily\">"+_vm._ssrEscape(" "+_vm._s(_vm.signList.lottery)+" ")+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('noviceBenefits.zhang'))+"\n                  ")+"<img"+(_vm._ssrAttr("src",_vm.question))+" class=\"Novicebenefits-sign-top-bottom-img-right\"></p> <p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Participate')))+"<span class=\"setFontFamily\">"+_vm._ssrEscape(_vm._s(_vm.signList.reward_pool))+"</span>  BKB！</p></div> "),_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_c('van-button',{staticClass:"draw-btn colorBackgroundPrimary",on:{"click":function($event){return _vm.drawClick()}}},[_c('span',{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[_vm._v(_vm._s(_vm.$t('noviceBenefits.Draw')))])])],1)],2)],2),_vm._ssrNode(" <div class=\"Novicebenefits-title Novicebenefits-title-not textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Novice')))+"</div> "),_vm._ssrNode("<ul class=\"Novicebenefits-reward Novicebenefits-sign-top-bottom colorBackground1\">","</ul>",[_vm._ssrNode("<li class=\"Novicebenefits-reward-item Novicebenefits-sign-top-bottom\">","</li>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-img\">","</div>",[_c('van-image',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_ce1f5eb0-72a7-11ec-bb03-832c5d2a67c5.png"}})],1),_vm._ssrNode(" <div class=\"Novicebenefits-sign-top-bottom-content\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Telegram')))+"</p> <p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Reward'))+" BKB +1")+"</p></div> "),(!_vm.newUser.isNewUser)?_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_vm._ssrNode("<span class=\"alreadydraw-btn textSecond3\">"+_vm._ssrEscape("  "+_vm._s(_vm.$t('noviceBenefits.incompatible')))+"</span>")],2):_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[(!!_vm.newUser.isDoneTelJob)?_vm._ssrNode("<span class=\"alreadydraw-btn textSecond3\">","</span>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.alreadyReceived'))))],2):_c('van-button',{staticClass:"draw-btn colorBackgroundPrimary",on:{"click":function($event){return _vm.joinTelegram()}}},[_c('span',{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[_c('span',{staticClass:"colorwhite"},[_vm._v(" "+_vm._s(!!_vm.joinTelegramflag ?  _vm.$t('noviceBenefits.Getitnow') : _vm.$t('noviceBenefits.Join')))])])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"Novicebenefits-reward-item Novicebenefits-sign-top-bottom \">","</li>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-img\">","</div>",[_c('van-image',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_3badf390-79da-11ec-a1dc-431b57c20695.png"}})],1),_vm._ssrNode(" <div class=\"Novicebenefits-sign-top-bottom-content\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.swap')))+"</p> <p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.raffle')))+"</p></div> "),(!_vm.newUser.isNewUser)?_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_vm._ssrNode("<span class=\"alreadydraw-btn textSecond3\">"+_vm._ssrEscape(" "+_vm._s(_vm.$t('noviceBenefits.incompatible')))+"</span>")],2):_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[(!!_vm.newUser.isDoneSwap)?_vm._ssrNode("<span class=\"alreadydraw-btn textSecond3\">","</span>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.alreadyReceived'))))],2):_c('van-button',{staticClass:"draw-btn colorBackgroundPrimary",on:{"click":function($event){return _vm.SwapTransaction()}}},[_c('span',{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[_vm._v(" "+_vm._s(_vm.newUser.isUpToSwap ?  _vm.$t('noviceBenefits.Getitnow') : _vm.$t('noviceBenefits.Immediate')))])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"Novicebenefits-reward-item Novicebenefits-sign-top-bottom\">","</li>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-img\">","</div>",[_c('van-image',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_cb358fc0-72a8-11ec-bb03-832c5d2a67c5.png"}})],1),_vm._ssrNode(" <div class=\"Novicebenefits-sign-top-bottom-content\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.USDT')))+"</p> <p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Reward'))+" BKB + 1")+"</p></div> "),(!_vm.newUser.isNewUser)?_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_vm._ssrNode("<span class=\"alreadydraw-btn textSecond3\">"+_vm._ssrEscape(" "+_vm._s(_vm.$t('noviceBenefits.incompatible')))+"</span>")],2):_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_vm._ssrNode(((!!_vm.newUser.isDone50U)?("<span class=\"alreadydraw-btn textSecond3\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.alreadyReceived')))+"</span>"):(!_vm.newUser.isUpTo50U)?("<span class=\" alreadydraw-btn textbtn textSecond3 standard\">"+_vm._ssrEscape(" "+_vm._s(_vm.$t('noviceBenefits.standard')))+"</span>"):"<!---->")+" "),(_vm.newUser.isUpTo50U)?_c('van-button',{staticClass:"draw-btn colorBackgroundPrimary",on:{"click":function($event){return _vm.UpTo50U()}}},[_c('span',{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[_vm._v(" "+_vm._s(_vm.$t('noviceBenefits.Getitnow')))])]):_vm._e()],2)],2)],2),_vm._ssrNode(" <div class=\"Novicebenefits-title Novicebenefits-title-not textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Morebenefits')))+"</div> "),_vm._ssrNode("<ul class=\"Novicebenefits-reward Novicebenefits-sign-top-bottom colorBackground1\">","</ul>",[_vm._ssrNode("<li class=\"Novicebenefits-reward-item Novicebenefits-sign-top-bottom\">","</li>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-img\">","</div>",[_c('van-image',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_68daa940-78e4-11ec-9d29-f144d09ca5ed.png"}})],1),_vm._ssrNode(" <div class=\"Novicebenefits-sign-top-bottom-content\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Airdropactivity')))+"</p> <p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Access')))+"</p></div> "),_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_c('van-button',{staticClass:"draw-btn colorBackgroundPrimary",on:{"click":function($event){return _vm.viewairdrop()}}},[_c('span',{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[_vm._v(" "+_vm._s(_vm.$t('noviceBenefits.Viewnow')))])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"Novicebenefits-reward-item Novicebenefits-sign-top-bottom\">","</li>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-img\">","</div>",[_c('van-image',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_45ecb4a0-78e4-11ec-9d29-f144d09ca5ed.png"}})],1),_vm._ssrNode(" <div class=\"Novicebenefits-sign-top-bottom-content\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Blindboxactivity')))+"</p> <p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.AccessNFT')))+"</p></div> "),_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_c('van-button',{staticClass:"draw-btn colorBackgroundPrimary",on:{"click":function($event){return _vm.viewblindbox()}}},[_c('span',{staticClass:"colorwhite Novicebenefits-sign-top-bottom-btn-span"},[_vm._v(" "+_vm._s(_vm.$t('noviceBenefits.Viewnow')))])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"Novicebenefits-reward-item Novicebenefits-sign-top-bottom\">","</li>",[_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-img\">","</div>",[_c('van-image',{attrs:{"src":"https://cdn.bitkeep.vip/u_b_81d17ff0-78e4-11ec-9d29-f144d09ca5ed.png"}})],1),_vm._ssrNode(" <div class=\"Novicebenefits-sign-top-bottom-content\"><p class=\"textPrimary0\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Invitation')))+"</p> <p class=\"textSecond2\">"+_vm._ssrEscape(_vm._s(_vm.$t('noviceBenefits.Invitefriends')))+"</p></div> "),_vm._ssrNode("<div class=\"Novicebenefits-sign-top-bottom-btn\">","</div>",[_c('van-button',{staticClass:"draw-btn colorBackgroundPrimary Novicebenefits-sign-top-bottom-btn-span",on:{"click":function($event){return _vm.viewblindboxInvite()}}},[_c('span',{staticClass:"colorwhite"},[_vm._v(" "+_vm._s(_vm.$t('noviceBenefits.Viewnow')))])])],1)],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/noviceBenefits/index.vue?vue&type=template&id=0f00155a&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(68);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(1);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/noviceBenefits/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var noviceBenefitsvue_type_script_lang_js_ = ({
  name: "Novicebenefits",

  data() {
    return {
      isLoading: true,
      question: 'https://cdn.bitkeep.vip/u_b_af43f280-78f1-11ec-9d29-f144d09ca5ed.png',
      signList: {
        reward_pool: 0,
        lottery: 0,
        todayIsSgin: false,
        list: [{
          day: 1,
          isSignin: false
        }, {
          day: 2,
          isSignin: false
        }, {
          day: 3,
          isSignin: false
        }, {
          day: 4,
          isSignin: false
        }, {
          day: 5,
          isSignin: false
        }, {
          day: 6,
          isSignin: false
        }, {
          day: 7,
          isSignin: false
        }]
      },
      signNums: 1,
      joinTelegramflag: false,
      SwapTransactionflag: false,
      newUser: {
        isNewUser: false,
        isDoneTelJob: false,
        isDoneSwap: false,
        isUpToSwap: false,
        isUpTo50U: false,
        isDone50U: false,
        isAlterReward: false,
        // 是否弹出最近一次中奖信息
        yestdaycode: '',
        // 最近一次中奖期号
        yestdayRewardPool: 0 // 最近一次中奖奖池

      },
      telegramUrl: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["local"]),

    locale() {
      return this.local.locale;
    },

    isBitKeep() {
      return this.local.UA.isBitKeep;
    },

    signDay() {
      let day = [];
      day = this.signList.list.filter(item => item.isSignin);
      return day.length;
    },

    signimg(item, index) {
      return (item.day === 4 || item.day === 7) && index === this.signDay ? 'https://cdn.bitkeep.vip/u_b_aa80c7c0-7615-11ec-9d29-f144d09ca5ed.png' : index === this.signDay ? 'https://cdn.bitkeep.vip/u_b_56e30a70-7448-11ec-a3df-456c694c3f18.png' : item.day === 4 || item.day === 7 ? 'https://cdn.bitkeep.vip/u_b_65c04710-7448-11ec-a3df-456c694c3f18.png' : 'https://cdn.bitkeep.vip/u_b_5457fe50-743e-11ec-a3df-456c694c3f18.png';
    }

  },
  components: {},

  mounted() {
    this.joinTelegramflag = localStorage.getItem('joinTelegram') || false;
    this.SwapTransactionflag = localStorage.getItem('SwapTransaction') || false;
    this.getInfo();
    this.setIcon();
    this.info();
    this.islanguage();
  },

  methods: {
    firstEnter(title, message, type) {
      let mes = "<div class='popBox'><p>" + message + "</p></div>";
      this.$dialog.alert({
        title: title || '',
        message: mes,
        confirmButtonText: this.$t("CbkbExchange.know"),
        confirmButtonColor: "#495BFF"
      }).then(() => {
        if (type && type === "prize") {
          this.$router.push("/activity/noviceBenefits/lotteryresults");
        }
      });
    },

    // 初始化
    info() {
      this.newUserRewardJobs();
      this.getSignInDetailByUser();
    },

    islanguage() {
      //   中文:https://t.me/BitKeep_Official
      // 英文：https://t.me/bitkeep
      // 尼日利亚：https://t.me/bitkeepng
      // 越南：https://t.me/BitKeep_Vietnam
      //菲律宾： https://t.me/BitKeep_Philippines
      // 巴基斯坦：https://t.me/Bitkeep_Pak
      // 南亚：https://t.me/BitkeepSouthAsia
      if (this.locale == 'zh') {
        this.telegramUrl = 'https://t.me/BitKeep_Official';
      } else if (this.locale === 'en' || this.locale === 'ko' || this.locale == 'ja') {
        this.telegramUrl = 'https://t.me/bitkeep';
      } else if (this.locale == 'vi') {
        this.telegramUrl = 'https://t.me/BitKeep_Vietnam';
      } else if (this.locale == 'id') {
        this.telegramUrl = 'https://t.me/bitkeepng';
      } else {
        this.telegramUrl = 'https://t.me/bitkeep';
      }
    },

    async viewblindbox() {
      // 查看盲盒
      window.location.href = window.location.origin + '/activity/blindbox/list';
    },

    async viewairdrop() {
      // 查看空投
      window.location.href = 'https://h5.bitkeep.biz/airdropClaim.html#/?_needChain=all&lang=en';
    },

    async viewblindboxInvite() {
      // 查看邀请
      window.location.href = window.location.origin + '/activity/blindboxInvite';
    },

    // 新手任务已经是否是新用户
    async newUserRewardJobs() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].newUserRewardJobs();

      if (data) {
        this.newUser = data;

        if (!!data.isAlterReward) {
          this.firstEnter('', this.$t('noviceBenefits.congratulations') + data.yestdaycode + this.$t('noviceBenefits.winningthelottery') + data.yestdayRewardPool + 'BKB!', prize);
        }
      }
    },

    async UpTo50U() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getFirst50UJob();

      if (data.success === true && !!data.isActivate) {
        this.firstEnter('', this.$t('noviceBenefits.receiveSuccess'));
        this.info();
      } else if (!data.isActivate) {
        this.firstEnter('', this.$t('noviceBenefits.Cloudwallet'));
      } else {
        this.firstEnter('', this.$t('noviceBenefits.receiveError'));
      }
    },

    async SwapTransaction() {
      // SWAP交易
      if (!this.newUser.isUpToSwap) {
        BitKeepInvoke.nativeApp();
        localStorage.setItem('SwapTransaction', true);
      } else {
        if (!!this.newUser.isUpTo50U) {
          const {
            data,
            status
          } = await client["a" /* USER_API */].getFirstSwapJob();

          if (data.success === true && !!data.isActivate) {
            this.firstEnter('', this.$t('noviceBenefits.receiveSuccess'));
            this.info();
          } else if (!data.isActivate) {
            this.firstEnter('', this.$t('noviceBenefits.Cloudwallet'));
          } else {
            this.firstEnter('', this.$t('noviceBenefits.receiveError'));
          }
        } else {
          // 钱包资产需高于50u
          this.firstEnter('', this.$t('noviceBenefits.50u'));
        }
      }
    },

    async joinTelegram() {
      // 加入Telegram
      if (!this.joinTelegramflag) {
        // 立即加入
        window.location.href = this.telegramUrl;
        this.joinTelegramflag = true;
        localStorage.setItem('joinTelegram', true);
      } else {
        // 立即领取
        if (!!this.newUser.isUpTo50U) {
          const {
            data,
            status
          } = await client["a" /* USER_API */].getJoinTeleJob();

          if (data.success === true && !!data.isActivate) {
            this.firstEnter('', this.$t('noviceBenefits.receiveSuccess'));
            this.info();
          } else if (!data.isActivate) {
            this.firstEnter('', this.$t('noviceBenefits.Cloudwallet'));
          } else {
            this.firstEnter('', this.$t('noviceBenefits.receiveError'));
          }
        } else {
          // 钱包资产需高于50u
          this.firstEnter('', this.$t('noviceBenefits.50u'));
        }
      }
    },

    async welfareSignInfunc(index) {
      if (index !== this.signDay && index < this.signDay || this.signList.todayIsSgin) return;
      const {
        data,
        status
      } = await client["a" /* USER_API */].welfareSignIn();

      if (data === true) {
        this.getSignInDetailByUser();
        this.firstEnter('', this.$t('noviceBenefits.signSuccess'));
      } else {
        this.getSignInDetailByUser();
        this.firstEnter('', this.$t('noviceBenefits.signError'));
      }
    },

    // 获取某人的签到详情
    async getSignInDetailByUser() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].getSignInDetailByUser();

      if (data) {
        this.signList = data;
      }
    },

    drawClick() {
      this.$router.push("/activity/noviceBenefits/drawluckly");
    },

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

      this.isLoading = false;
    },

    setIcon() {
      // window.addEventListener("load", () => {
      this.isBitKeep && BitKeepInvoke.onLoadReady(() => {
        BitKeepInvoke.setTitle(this.$t('noviceBenefits.WelfareCenter')); //设置主题

        this.$nextTick(() => {
          BitKeepInvoke.appMode((err, res) => {
            let body = document.getElementsByTagName("body")[0];

            if (res == 1) {
              this.theme = 1;
              this.question = 'https://cdn.bitkeep.vip/u_b_cac9ff90-78f1-11ec-9d29-f144d09ca5ed.png';
              body.setAttribute("class", "theme-dark");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("");
              }, 500);
            } else {
              this.theme = 0;
              this.question = 'https://cdn.bitkeep.vip/u_b_af43f280-78f1-11ec-9d29-f144d09ca5ed.png';
              body.setAttribute("class", "theme-light");
              setTimeout(() => {
                BitKeepInvoke.setIconAction("");
              }, 500);
            }
          });
        });
      }); // });
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/noviceBenefits/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_noviceBenefitsvue_type_script_lang_js_ = (noviceBenefitsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/noviceBenefits/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(207)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(209)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_noviceBenefitsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "33fa6c28"
  
)

/* harmony default export */ var noviceBenefits = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
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
  // 新手福利
  welfareSignIn: (data, headers = {}) => host_user_instance.post('welfare/signIn', data),
  // 签到 
  getRewardDetail: (data, headers = {}) => host_user_instance.post('welfare/getRewardDetail', data),
  //每日抽奖详情
  getSignInDetailByUser: (data, headers = {}) => host_user_instance.post('welfare/getSignInDetailByUser', data),
  // 获取某人的签到详情
  getRewardResult: (data, headers = {}) => host_user_instance.post('welfare/getRewardResult', data),
  // 获取抽奖结果
  getRewardDetail: (data, headers = {}) => host_user_instance.post('welfare/getRewardDetail', data),
  // 每日抽奖详情页
  pushPapersIn: (data, headers = {}) => host_user_instance.post('welfare/pushPapersIn', data),
  // 立即投入
  getJoinTeleJob: (data, headers = {}) => host_user_instance.post('welfare/getJoinTeleJob', data),
  // 加入电报 
  getFirstSwapJob: (data, headers = {}) => host_user_instance.post('welfare/getFirstSwapJob', data),
  // swap首次交易
  getFirst50UJob: (data, headers = {}) => host_user_instance.post('welfare/getFirst50UJob', data),
  // 领取50u
  newUserRewardJobs: (data, headers = {}) => host_user_instance.post('welfare/newUserRewardJobs', data) // 新手任务

};

/***/ })

};;
//# sourceMappingURL=index.js.map