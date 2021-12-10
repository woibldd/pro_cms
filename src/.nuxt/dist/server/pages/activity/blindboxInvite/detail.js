exports.ids = [28];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("3c3fe792", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_4e8a2c9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_4e8a2c9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_4e8a2c9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_4e8a2c9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_4e8a2c9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-4e8a2c9a] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-4e8a2c9a] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-4e8a2c9a] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-4e8a2c9a] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-4e8a2c9a] {\n  background-color: #DADBDE;\n}\n.theme-light .colorLine[data-v-4e8a2c9a] {\n  background-color: #F4F5FA;\n}\n.theme-light .colorBackground0[data-v-4e8a2c9a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackground1[data-v-4e8a2c9a] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-4e8a2c9a] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground3[data-v-4e8a2c9a] {\n  background-color: #F8F9FA;\n}\n.theme-light .colorBackgroundWhite[data-v-4e8a2c9a] {\n  background-color: #fff;\n}\n.theme-light .colorBackgroundPrimary[data-v-4e8a2c9a] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-4e8a2c9a] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-4e8a2c9a] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-4e8a2c9a] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-4e8a2c9a] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-4e8a2c9a] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-4e8a2c9a] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-4e8a2c9a] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-4e8a2c9a] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-4e8a2c9a] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-4e8a2c9a] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-4e8a2c9a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-4e8a2c9a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-4e8a2c9a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-4e8a2c9a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-4e8a2c9a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-4e8a2c9a] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-4e8a2c9a] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-4e8a2c9a] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-4e8a2c9a] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-4e8a2c9a] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-4e8a2c9a] {\n  background-color: #5F626D;\n}\n.theme-dark .colorLine[data-v-4e8a2c9a] {\n  background-color: #1F212E;\n}\n.theme-dark .colorBackground0[data-v-4e8a2c9a] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-4e8a2c9a] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-4e8a2c9a] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-4e8a2c9a] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-4e8a2c9a] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-4e8a2c9a] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-4e8a2c9a] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-4e8a2c9a] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-4e8a2c9a] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-4e8a2c9a] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-4e8a2c9a] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-4e8a2c9a] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-4e8a2c9a] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-4e8a2c9a] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-4e8a2c9a] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-4e8a2c9a] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-4e8a2c9a] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-4e8a2c9a] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-4e8a2c9a] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-4e8a2c9a] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-4e8a2c9a] {\n  color: rgba(47,128,237,0.1);\n}\n.detail_box .detail_box_header[data-v-4e8a2c9a] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0.21rem 0.59rem 0.21rem 0.43rem;\n  align-items: center;\n}\n.detail_box .detail_box_header img[data-v-4e8a2c9a] {\n  width: 2.88rem;\n  height: 0.75rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox[data-v-4e8a2c9a] {\n  box-sizing: border-box;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .curLang[data-v-4e8a2c9a] {\n  font-size: 0.37rem;\n}\n.detail_box .detail_box_header .detail_box_lang .langBox .icon[data-v-4e8a2c9a] {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n}\n.detail_box .detail_box_header .detail_box_lang .langList[data-v-4e8a2c9a] {\n  display: none;\n  position: absolute;\n  right: 0.43rem;\n  overflow: hidden;\n  padding: 0.32rem 0.59rem;\n  background: #fff;\n  border-radius: 0.3rem;\n  box-shadow: 0 0.8rem 1.07rem 0 #0e1b400d;\n  font-size: 0.37rem;\n  line-height: 0.8rem;\n  text-align: center;\n}\n.detail_box .detail_box_text[data-v-4e8a2c9a] {\n  width: 100%;\n  margin: 0.75rem 0.43rem 0;\n}\n.detail_box .detail_box_text p[data-v-4e8a2c9a] {\n  width: 6.13rem;\n  font-weight: bold;\n  font-size: 0.64rem;\n  line-height: 0.64rem;\n}\n.detail_box a[data-v-4e8a2c9a] {\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  -moz-tap-highlight-color: transparent;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/detail.vue?vue&type=template&id=4e8a2c9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail_box"},[_vm._ssrNode("<div class=\"detail_box_header\" data-v-4e8a2c9a>","</div>",[_vm._ssrNode("<div data-v-4e8a2c9a><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" data-v-4e8a2c9a></div> "),_vm._ssrNode("<div class=\"detail_box_lang\" data-v-4e8a2c9a>","</div>",[_vm._ssrNode("<div id=\"showLang\" class=\"langBox\" data-v-4e8a2c9a>","</div>",[_vm._ssrNode("<span class=\"curLang\" data-v-4e8a2c9a>中文</span> "),_c('van-icon',{staticClass:"icon",attrs:{"name":"play"}})],2),_vm._ssrNode(" <ul id=\"langList\" class=\"langList\" data-v-4e8a2c9a><li data-val=\"zh\" data=\"中文\" class=\"langItem\" data-v-4e8a2c9a>中文</li> <li data-val=\"en\" data=\"English\" class=\"langItem\" data-v-4e8a2c9a>English</li></ul>")],2)],2),_vm._ssrNode(" <div class=\"detail_box_text\" data-v-4e8a2c9a><p class=\"textPrimary0\" data-v-4e8a2c9a>The most trusted &amp; secure crypto wallet</p></div> <div class=\"detail_box_flex\" data-v-4e8a2c9a><div class=\"detail_box_flex\" data-v-4e8a2c9a><div data-v-4e8a2c9a></div> <div data-v-4e8a2c9a></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue?vue&type=template&id=4e8a2c9a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/blindboxInvite/detail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var blindboxInvite_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/blindboxInvite/detail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blindboxInvite_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4e8a2c9a",
  "53d94acd"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo@2.ca1f304.png";

/***/ })

};;
//# sourceMappingURL=detail.js.map