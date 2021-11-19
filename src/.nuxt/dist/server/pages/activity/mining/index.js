exports.ids = [26,1];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("70044200", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("559a9e45", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/activity/index.vue?vue&type=template&id=79beb144&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrap-min",class:[_vm.status ? 'statusM' : '']},[_vm._ssrNode("<div class=\"about\" data-v-79beb144><div class=\"about-wrap\" data-v-79beb144><div class=\"about-wrap-pos\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_0978f140-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-79beb144> <p data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.about")))+"</p></div></div> <div class=\"about-content\" data-v-79beb144><div class=\"about-title\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_d9de0340-3b9e-11ec-8e63-1db435df936c.png\" data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.Introduce")))+"</span></div> <div class=\"about-con\" data-v-79beb144><span data-v-79beb144>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("mining.aboutContent1"))+"\n        ")+"</span> <span data-v-79beb144>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("mining.aboutContent2"))+"\n        ")+"</span></div> <div class=\"viewAll\" data-v-79beb144>"+_vm._ssrEscape("\n        "+_vm._s(!this.flag ? _vm.$t("mining.viewAll") : _vm.$t("mining.pickUp"))+"\n      ")+"</div></div></div> <div class=\"line\" data-v-79beb144></div> <div class=\"distribution\" data-v-79beb144><div class=\"distribution-title\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_244b3eb0-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.distribution")))+"</span></div> <div class=\"charts-img\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_9aa7b0e0-3dec-11ec-91b2-899abceaa0ac.png\" alt data-v-79beb144> <p class=\"total\" data-v-79beb144>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t("mining.total")))+"<span class=\"exchangeTotal\" data-v-79beb144>600,000,000</span></p></div> <div class=\"distribution-man\" data-v-79beb144><div class=\"data\" data-v-79beb144><div data-v-79beb144><span style=\"background: #495bff\" data-v-79beb144></span> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.mining")))+"</span></div> <div class=\"textPrimary0\" data-v-79beb144>50%</div></div> <div class=\"data\" data-v-79beb144><div data-v-79beb144><span style=\"background: #1cbdb5\" data-v-79beb144></span> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.eco")))+"</span></div> <div class=\"textPrimary0\" data-v-79beb144>20%</div></div> <div class=\"data\" data-v-79beb144><div data-v-79beb144><span style=\"background: #ff8146\" data-v-79beb144></span> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.community"))+" ")+"</span></div> <div class=\"textPrimary0\" data-v-79beb144>15%</div></div> <div class=\"data\" data-v-79beb144><div data-v-79beb144><span style=\"background: #f04e98\" data-v-79beb144></span> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.partner")))+"</span></div> <div class=\"textPrimary0\" data-v-79beb144>10%</div></div> <div class=\"data\" data-v-79beb144><div data-v-79beb144><span style=\"background: rgba(191, 203, 224, 0.7)\" data-v-79beb144></span> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.tram")))+"</span></div> <div class=\"textPrimary0\" data-v-79beb144>5%</div></div></div></div> <div class=\"line\" data-v-79beb144></div> <div class=\"hold\" data-v-79beb144><div class=\"hold-title\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_5930f660-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold")))+"</span></div> <div class=\"appreciation-grid hold-content\" data-v-79beb144><div class=\"appreciation-grid-flex\" data-v-79beb144><div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_87307190-3e1f-11ec-b9aa-f704e635d485.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold1")))+"</span></div> <div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_872e75c0-3e1f-11ec-b9aa-f704e635d485.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold2")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-79beb144><div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_872f8730-3e1f-11ec-b9aa-f704e635d485.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold3")))+"</span></div> <div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_872f6020-3e1f-11ec-b9aa-f704e635d485.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold4")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-79beb144><div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_3bc4bc20-3e1f-11ec-901e-77de61c391e4.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold5")))+"</span></div> <div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_3bc1d5f0-3e1f-11ec-901e-77de61c391e4.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold6")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-79beb144><div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_3bc33580-3e1f-11ec-901e-77de61c391e4.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold7")))+"</span></div> <div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_3bc2e760-3e1f-11ec-901e-77de61c391e4.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.hold8")))+"</span></div></div></div></div> <div class=\"line\" data-v-79beb144></div> <div class=\"appreciation\" data-v-79beb144><div class=\"appreciation-title\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_dfdfdf40-3e1c-11ec-9b39-4f7f91c175c3.png\" data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciation")))+"</span></div> <div class=\"appreciation-grid\" data-v-79beb144><div class=\"appreciation-grid-flex\" data-v-79beb144><div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_9f4a5d20-3e1c-11ec-9b39-4f7f91c175c3.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationSwap")))+"</span></div> <div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_9f4a3610-3e1c-11ec-9b39-4f7f91c175c3.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationCoin")))+"</span></div></div> <div class=\"appreciation-grid-flex\" data-v-79beb144><div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_9f494bb0-3e1c-11ec-9b39-4f7f91c175c3.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationPool")))+"</span></div> <div data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_9f4a3611-3e1c-11ec-9b39-4f7f91c175c3.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.appreciationValut")))+"</span></div></div></div></div> <div class=\"line\" data-v-79beb144></div> "),_vm._ssrNode("<div class=\"more\" data-v-79beb144>","</div>",[_vm._ssrNode("<div class=\"more-title\" data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.more")))+"</div> "),_vm._ssrNode("<div class=\"more-line\" data-v-79beb144>","</div>",[_vm._ssrNode("<a href=\"https://www.bitkeep.com/\" target=\"_blank\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_ddcf2860-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-79beb144><span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.website")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"more-line\" data-v-79beb144>","</div>",[_vm._ssrNode("<a href=\"https://twitter.com/BitKeepOS\" target=\"_blank\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_ddcf4f71-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.twitter")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"more-line\" data-v-79beb144>","</div>",[_vm._ssrNode("<a href=\"https://t.me/bitkeep\" target=\"_blank\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_ddcf0150-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.telegram")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"more-line\" data-v-79beb144>","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.src))+" target=\"_blank\" data-v-79beb144><img src=\"http://cdn.bitkeep.vip/u_b_ddceda40-2bec-11ec-b5c0-c1ce5b0a2535.png\" alt data-v-79beb144> <span data-v-79beb144>"+_vm._ssrEscape(_vm._s(_vm.$t("mining.explorer")))+"</span></a> "),_c('van-icon',{staticClass:"setIcon",attrs:{"name":"arrow"}})],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/activity/index.vue?vue&type=template&id=79beb144&scoped=true&

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
      src: "https://cn.etherscan.com/address/0xa286035a1e60abf172524bdbfd224abeef6ce362",
      flag: false
    };
  },

  props: ["status"],
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/activity/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_activityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "79beb144",
  "d889970c"
  
)

/* harmony default export */ var activity = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-dialog__message {\n  font-size: 0.43rem !important;\n  padding-left: 0.64rem !important;\n  padding-right: 0.64rem !important;\n  font-weight: 500;\n  line-height: 0.53rem;\n}\n.van-dialog__confirm {\n  font-weight: 500;\n  font-size: 0.45rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_dcad1536_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_dcad1536_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_dcad1536_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_dcad1536_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_dcad1536_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-dcad1536] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-dcad1536] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-dcad1536] {\n  background-color: #DADBDE;\n}\n.theme-light .colorBackground0[data-v-dcad1536] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground1[data-v-dcad1536] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-dcad1536] {\n  background-color: #ECEDEE;\n}\n.theme-light .colorBackground3[data-v-dcad1536] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackgroundPrimary[data-v-dcad1536] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-dcad1536] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-dcad1536] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-dcad1536] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-dcad1536] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-dcad1536] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-dcad1536] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-dcad1536] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-dcad1536] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-dcad1536] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-dcad1536] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-dcad1536] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-dcad1536] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-dcad1536] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-dcad1536] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-dcad1536] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-dcad1536] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-dcad1536] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-dcad1536] {\n  background-color: #5F626D;\n}\n.theme-dark .colorBackground0[data-v-dcad1536] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-dcad1536] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-dcad1536] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-dcad1536] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-dcad1536] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-dcad1536] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-dcad1536] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-dcad1536] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-dcad1536] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-dcad1536] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-dcad1536] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-dcad1536] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-dcad1536] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-dcad1536] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-dcad1536] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-dcad1536] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-dcad1536] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-dcad1536] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-dcad1536] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-dcad1536] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .mining[data-v-dcad1536] {\n  background: #F3F5F6;\n}\n.theme-light .mining .van-progress[data-v-dcad1536] {\n  border-radius: 0.27rem;\n  background: #F4F5FA;\n}\n.theme-light .mining .mining-wrap-one[data-v-dcad1536] {\n  background: #fff;\n}\n.theme-light .mining .mining-wrap-one .produced[data-v-dcad1536] :first-child {\n  color: #7F828F;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header[data-v-dcad1536] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-dcad1536] {\n  color: #9CA5B3;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-dcad1536] {\n  color: #26BC80;\n  background: rgba(38,188,128,0.1);\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-dcad1536] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-dcad1536] {\n  color: #9CA5B3;\n  background: #F3F5F6;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-startCountdown[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-time[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-day[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-title[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-amount[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-number[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-todyVolue[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number-last[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-light .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-text[data-v-dcad1536] {\n  color: #4B5373;\n}\n.theme-light .line[data-v-dcad1536] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .setLightColor[data-v-dcad1536] {\n  color: #4B5373;\n}\n.theme-light .setDarkColor[data-v-dcad1536] {\n  color: #080D21;\n}\n.theme-light .setColor[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-light .setFontFamily[data-v-dcad1536] {\n  font-family: \"bitkeep DIN\";\n}\n.theme-light .setFontWeight[data-v-dcad1536] {\n  font-size: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n}\n.theme-light .wrap-bottom[data-v-dcad1536] {\n  background: #fff;\n  border-top: 0.03rem solid #F3F5F6;\n}\n.theme-light .wrap-bottom .swap-btn[data-v-dcad1536] {\n  background: #495BFF;\n  color: #fff;\n}\n.theme-dark .mining[data-v-dcad1536] {\n  background: #0A0E1F;\n}\n.theme-dark .mining .van-progress[data-v-dcad1536] {\n  border-radius: 0.27rem;\n  background: #1F212E;\n}\n.theme-dark .mining .mining-wrap-one[data-v-dcad1536] {\n  background: #171A26;\n}\n.theme-dark .mining .mining-wrap-one .produced[data-v-dcad1536] :first-child {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining_trans[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header[data-v-dcad1536] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-dcad1536] {\n  color: #6D707D;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .inProgress[data-v-dcad1536] {\n  color: #26BC80;\n  background: rgba(38,188,128,0.1);\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .comingsoon[data-v-dcad1536] {\n  color: #FF8146;\n  background: rgba(255,129,70,0.1);\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-header .activityEnd[data-v-dcad1536] {\n  color: #6D707D;\n  background: #212331;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-startCountdown[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-time[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-day[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-title[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-amount[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-number[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-todyVolue[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol[data-v-dcad1536] {\n  color: #7F828F;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number-last[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-dark .mining .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-text[data-v-dcad1536] {\n  color: #9CA5B3;\n}\n.theme-dark .line[data-v-dcad1536] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .setdarkColor[data-v-dcad1536] {\n  color: #9CA5B3;\n}\n.theme-dark .setDarkColor[data-v-dcad1536] {\n  color: #DFE0E3;\n}\n.theme-dark .setColor[data-v-dcad1536] {\n  color: #495BFF;\n}\n.theme-dark .setFontFamily[data-v-dcad1536] {\n  font-family: \"bitkeep DIN\";\n}\n.theme-dark .setFontWeight[data-v-dcad1536] {\n  font-size: 0.43rem;\n  font-weight: 600;\n  color: #DFE0E3;\n}\n.theme-dark .wrap-bottom[data-v-dcad1536] {\n  background: #171A26;\n  border-top: 0.03rem solid #212331;\n}\n.theme-dark .wrap-bottom .swap-btn[data-v-dcad1536] {\n  background: #495BFF;\n  color: #fff;\n}\n.loading[data-v-dcad1536] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.mining .mining-wrap .img img[data-v-dcad1536] {\n  width: 100%;\n}\n.mining .mining-wrap .mining-wrap-one[data-v-dcad1536] {\n  margin: 0.4rem 0.43rem 0;\n  border-radius: 0.21rem;\n  font-size: 0.37rem;\n  line-height: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .produced[data-v-dcad1536] {\n  font-size: 0.37rem;\n  display: flex;\n  justify-content: space-between;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header[data-v-dcad1536] {\n  display: flex;\n  justify-content: space-between;\n  height: 1.07rem;\n  line-height: 1.07rem;\n  padding: 0 0.21rem 0 0.4rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title img[data-v-dcad1536] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: sub;\n  margin-right: 0.11rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-title span[data-v-dcad1536] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  vertical-align: text-bottom;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-right[data-v-dcad1536] {\n  padding-right: 0.19rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-update[data-v-dcad1536] {\n  font-size: 0.27rem;\n  margin: 0.08rem 0.05rem 0 0;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-header .mining-wrap-one-header-about[data-v-dcad1536] {\n  width: 2.56rem;\n  height: 0.64rem;\n  line-height: 0.64rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center;\n  padding: 0.05rem 0.21rem;\n  border-radius: 0.11rem;\n  margin-top: 0.19rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body[data-v-dcad1536] {\n  padding: 0 0.4rem 0.19rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-line[data-v-dcad1536] {\n  margin-top: 0.4rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-startCountdown[data-v-dcad1536] {\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-time[data-v-dcad1536] {\n  font-size: 0.53rem;\n  line-height: 0.53rem;\n  display: inline-block;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-day[data-v-dcad1536] {\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-title[data-v-dcad1536] {\n  font-size: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-amount[data-v-dcad1536] {\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  margin: 0.53rem 0 0.4rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-number[data-v-dcad1536] {\n  font-size: 0.53rem;\n  line-height: 0.53rem;\n  font-family: \"bitkeep DIN\";\n  padding-bottom: 0.27rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading[data-v-dcad1536] {\n  display: flex;\n  justify-content: space-between;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol[data-v-dcad1536] {\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n  text-align: right;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number[data-v-dcad1536] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-last[data-v-dcad1536] {\n  text-align: right;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-trading .mining-wrap-one-body-vol-number-todyVolue[data-v-dcad1536] {\n  text-align: right;\n  font-size: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards[data-v-dcad1536] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 0.27rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol[data-v-dcad1536] {\n  font-size: 0.32rem;\n  line-height: 0.37rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number[data-v-dcad1536] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-rewards .mining-wrap-one-body-vol-number-last[data-v-dcad1536] {\n  text-align: right;\n  font-size: 0.43rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining-wrap-one-body .mining-wrap-one-body-text[data-v-dcad1536] {\n  font-size: 0.37rem;\n  line-height: 0.48rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.mining .mining-wrap .mining-wrap-one .mining-setP[data-v-dcad1536] {\n  padding: 0 0.4rem 0.03rem;\n}\n.mining .mining-wrap .mining-wrap-one .mining_trans[data-v-dcad1536] {\n  margin: 0.53rem 0 !important;\n}\n.mining .mining-wrap .mining-wrap-one .mbottom[data-v-dcad1536] {\n  margin-bottom: 0.4rem !important;\n}\n.wrap-bottom[data-v-dcad1536] {\n  height: 1.28rem;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  position: fixed;\n  padding-bottom: 0.91rem;\n}\n.wrap-bottom .swap-btn[data-v-dcad1536] {\n  height: 1.17rem;\n  border-radius: 0.27rem;\n  text-align: center;\n  line-height: 1.17rem;\n  border: none;\n  position: fixed;\n  font-weight: 500;\n  bottom: 0.75rem;\n  font-size: 0.43rem;\n  width: 7.57rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 0;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/index.vue?vue&type=template&id=dcad1536&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mining"},[(_vm.isLoading)?_vm._ssrNode("<div class=\"loading\" data-v-dcad1536>","</div>",[_c('van-loading',{attrs:{"color":"#1989fa","vertical":""}},[_vm._v(_vm._s(_vm.$t("base.loading"))+"...")])],1):_c('van-pull-refresh',{attrs:{"success-text":_vm.$t('mining.success'),"loading-text":_vm.$t('mining.loading'),"loosing-text":_vm.$t('mining.loading')},on:{"refresh":_vm.getInfo},model:{value:(_vm.refreshLoading),callback:function ($$v) {_vm.refreshLoading=$$v},expression:"refreshLoading"}},[_c('div',{staticClass:"mining-wrap"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":_vm.locale == 'en'
              ? 'http://cdn.bitkeep.vip/u_b_62c2dea0-3baa-11ec-b6dc-f5798cff9565.png'
              : 'http://cdn.bitkeep.vip/u_b_62c2dea0-3baa-11ec-b6dc-f5798cff9565.png',"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"http://cdn.bitkeep.vip/u_b_d9de7871-3b9e-11ec-8e63-1db435df936c.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.coundown")))])]),_vm._v(" "),(_vm.status && _vm.startTime > 0)?_c('div',{staticClass:"mining-wrap-one-header-about inProgress"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.inProgress")))])]):(!_vm.status)?_c('div',{staticClass:"mining-wrap-one-header-about comingsoon"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.comingsoon")))])]):_c('div',{staticClass:"mining-wrap-one-header-about activityEnd"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.activity")))])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('p',{staticClass:"mining-wrap-one-body-startCountdown"},[(!_vm.status)?_c('span',[_vm._v(_vm._s(_vm.$t("mining.startCountdown")))]):_c('span',[_vm._v(_vm._s(_vm.$t("mining.endCountdown")))])]),_vm._v(" "),(_vm.startTime > 0)?_c('div',[_c('span',[_c('van-count-down',{staticClass:"mining-wrap-one-body-time setFontFamily",attrs:{"time":_vm.startTime,"format":_vm.formatEn}}),_c('span',{staticClass:"setFontFamily textPrimary0"},[_vm._v("S")])],1)]):_c('div',{staticClass:"textPrimary0"},[_vm._v("--")])]),_vm._v(" "),_c('div',{staticClass:"mining-setP"},[_c('div',{staticClass:"produced mining_trans"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.startTime")))]),_vm._v(" "),_c('span',{staticClass:"setFontFamily"},[_vm._v(_vm._s(_vm.fixdStartTime)+"(UTC+8)")])]),_vm._v(" "),_c('div',{staticClass:"produced mining_trans mbottom"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.overTime")))]),_vm._v(" "),_c('span',{staticClass:"setFontFamily"},[_vm._v(_vm._s(_vm.fixdEndTime)+"(UTC+8)")])])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"http://cdn.bitkeep.vip/u_b_d9ddb520-3b9e-11ec-8e63-1db435df936c.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.rewardPool")))])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-header-update"})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('p',{staticClass:"mining-wrap-one-body-title setFontFamily"},[(_vm.status)?_c('span',{staticClass:"setColor"},[_vm._v(_vm._s(_vm.currencyPool))]):_vm._e(),_vm._v("\n            / "+_vm._s(_vm.rewardPool)+" BKB\n          ")]),_vm._v(" "),_c('van-progress',{attrs:{"percentage":(_vm.currencyPooln / _vm.rewardPooln) * 100,"stroke-width":"8","color":"$theme-light-colorPrimary","show-pivot":false}}),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-amount"},[_c('span',[_vm._v(_vm._s(_vm.$t("mining.will")))])])],1)]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"http://cdn.bitkeep.vip/u_b_381594a0-3b9f-11ec-8e63-1db435df936c.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.tradingVolume")))])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-header-update"})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('p',{staticClass:"mining-wrap-one-body-day"},[_vm._v(_vm._s(_vm.$t("mining.tradingIn")))]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-number"},[_c('span',{staticClass:"setFontFamily"},[_vm._v(_vm._s(_vm.status ? "$" + _vm.allTodayTrading : "--"))])])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"http://cdn.bitkeep.vip/u_b_d9de5160-3b9e-11ec-8e63-1db435df936c.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.myRewards")))])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-header-update"})]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body"},[_c('div',{staticClass:"mining-wrap-one-body-trading"},[_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.totalTrading"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[_vm._v("\n                $"+_vm._s(_vm.userTodayTrading)+"\n              ")])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.tradingIn"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"\n                  mining-wrap-one-body-vol-number-todyVolue\n                  setFontFamily\n                "},[_vm._v("\n                "+_vm._s(_vm.status ? "$" + _vm.userTodayValue : "--")+"\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"line mining-wrap-one-body-line"}),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-rewards"},[_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.totalRewards"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number setFontFamily"},[_vm._v("\n                "+_vm._s(_vm.userTotalBkbReward)+"BKB\n              ")])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"mining-wrap-one-body-vol"},[_vm._v("\n                "+_vm._s(_vm.$t("mining.yesterdayRewards"))+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body-vol-number-last setFontFamily"},[_vm._v("\n                "+_vm._s(_vm.status ? "+" + _vm.userTodayDayBkbReward + "BKB" : "--")+"\n              ")])])])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one"},[_c('div',{staticClass:"mining-wrap-one-header"},[_c('div',{staticClass:"mining-wrap-one-header-title"},[_c('img',{attrs:{"src":"http://cdn.bitkeep.vip/u_b_d9de7870-3b9e-11ec-8e63-1db435df936c.png","alt":""}}),_vm._v(" "),_c('span',{staticClass:"setFontWeight"},[_vm._v(_vm._s(_vm.$t("mining.miningRuleTitle")))])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"mining-wrap-one-header-right",on:{"click":_vm.learnMore}},[_vm._v(_vm._s(_vm.$t("mining.learnMore")))])])]),_vm._v(" "),_c('div',{staticClass:"mining-wrap-one-body",on:{"click":_vm.learnMore}},[_c('p',{staticClass:"mining-wrap-one-body-text"},[_vm._v("\n            "+_vm._s(_vm.$t("mining.miningRule"))+"\n          ")])])]),_vm._v(" "),_c('activity-com',{attrs:{"status":_vm.status}}),_vm._v(" "),(_vm.status)?_c('div',{staticClass:"wrap-bottom"},[_c('van-button',{staticClass:"swap-btn",on:{"click":_vm.swap}},[_vm._v(_vm._s(_vm.$t("mining.swapNow")))])],1):_vm._e()],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activity/mining/index.vue?vue&type=template&id=dcad1536&scoped=true&

// EXTERNAL MODULE: ./api/client.js
var client = __webpack_require__(65);

// EXTERNAL MODULE: ./tools/common.js
var common = __webpack_require__(16);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/activity/index.vue + 4 modules
var activity = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activity/mining/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var miningvue_type_script_lang_js_ = ({
  name: "mining",

  data() {
    return {
      currencyPool: 0,
      currencyPooln: 0,
      rewardPool: 0,
      rewardPooln: 33600000,
      allTodayTrading: 0,
      userTodayTrading: 0,
      userTodayValue: 0,
      userTotalBkbReward: 0,
      userTodayDayBkbReward: 0,
      status: false,
      isLoading: true,
      refreshLoading: false,
      startTime: null,
      endTime: null,
      fixdStartTime: "2021-11-03 11:00",
      fixdEndTime: "2021-11-12 14:24",
      formatEn: "DDd HHh mmm ss",
      formatZh: "DD 天 HH 时 mm 分 ss 秒",
      phase: "1"
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
  components: {
    activityCom: activity["default"]
  },

  async created() {
     false && false;
  },

  mounted() {
    this.startTime = this.countDown(this.fixdStartTime);
    this.endTime = this.countDown(this.fixdEndTime);

    if (this.startTime < 0) {
      this.status = true;
      this.startTime = this.endTime;
    }

    this.getInfo();
    this.$nextTick();
    this.isLoading = false;
  },

  methods: {
    // 获取信息
    async getInfo() {
      const {
        data,
        status
      } = await client["a" /* USER_API */].miningInfo();

      if (status == 1) {
        return this.$dialog.alert({
          message: data,
          confirmButtonText: this.$t("CbkbExchange.know"),
          confirmButtonColor: "$theme-light-colorPrimary"
        });
      }

      this.fixdStartTime = data.miningStartTime;
      this.fixdEndTime = data.miningEndTime;
      this.currencyPool = this.milliFormat(data.currencyPool);
      this.currencyPooln = data.currencyPool;
      this.rewardPooln = data.rewardPool;
      this.rewardPool = this.milliFormat(data.rewardPool);
      this.allTodayTrading = this.milliFormat(data.AllTodayTrading);
      this.userTodayTrading = this.milliFormat(data.userTodayTrading);
      this.userTodayValue = this.milliFormat(data.userTodayValue);
      this.userTotalBkbReward = this.milliFormat(data.userTotalBkbReward);
      this.userTodayDayBkbReward = this.milliFormat(data.userTodayDayBkbReward);
      this.startTime = this.countDown(data.miningStartTime);
      this.endTime = this.countDown(data.miningEndTime);

      if (this.startTime < 0) {
        this.status = true;
        this.startTime = this.endTime;
      }

      this.refreshLoading = false;
    },

    milliFormat(num) {
      return num && num.toString().replace(/^\d+/g, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ","));
    },

    swap: Object(common["b" /* debounce */])(async function () {
      BitKeepInvoke.nativeApp();
    }),

    countDown(times) {
      let nowTime = Date.now(); //当前时间

      let setDate = new Date(times.replace(/-/g, "/"));
      let setTime = setDate.getTime(); //设定的时间
      //获取剩余时间总秒数

      return setTime - nowTime;
    },

    learnMore() {
      this.$router.push("/activity/mining/miningRule");
    }

  }
});
// CONCATENATED MODULE: ./pages/activity/mining/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var activity_miningvue_type_script_lang_js_ = (miningvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/activity/mining/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(148)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(150)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  activity_miningvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dcad1536",
  "6cc3d8d2"
  
)

/* harmony default export */ var mining = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("5f5bb2a8", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79beb144_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79beb144_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79beb144_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79beb144_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79beb144_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme-light .textPrimary0[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .textSecond1[data-v-79beb144] {\n  color: #4B5373;\n}\n.theme-light .textSecond2[data-v-79beb144] {\n  color: #7F828F;\n}\n.theme-light .textSecond3[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-light .colorDisable[data-v-79beb144] {\n  background-color: #DADBDE;\n}\n.theme-light .colorBackground0[data-v-79beb144] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackground1[data-v-79beb144] {\n  background-color: #fff;\n}\n.theme-light .colorBackground2[data-v-79beb144] {\n  background-color: #ECEDEE;\n}\n.theme-light .colorBackground3[data-v-79beb144] {\n  background-color: #F3F5F6;\n}\n.theme-light .colorBackgroundPrimary[data-v-79beb144] {\n  background-color: #495BFF;\n}\n.theme-light .colorPrimary[data-v-79beb144] {\n  color: #495BFF;\n}\n.theme-light .colorSecond01[data-v-79beb144] {\n  color: #1CBDB5;\n}\n.theme-light .colorSecond02[data-v-79beb144] {\n  color: #F04A4A;\n}\n.theme-light .colorSecond03[data-v-79beb144] {\n  color: #26BC80;\n}\n.theme-light .colorSecond04[data-v-79beb144] {\n  color: #FF8146;\n}\n.theme-light .colorSecond05[data-v-79beb144] {\n  color: #2F80ED;\n}\n.theme-light .colorSecond06[data-v-79beb144] {\n  color: #4A2FD2;\n}\n.theme-light .colorSecond07[data-v-79beb144] {\n  color: #F04E98;\n}\n.theme-light .colorBlack[data-v-79beb144] {\n  color: #000;\n}\n.theme-light .colorwhite[data-v-79beb144] {\n  color: #fff;\n}\n.theme-light .colorSecond10[data-v-79beb144] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-light .colorSecond11[data-v-79beb144] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-light .colorSecond12[data-v-79beb144] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-light .colorSecond13[data-v-79beb144] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-light .colorSecond14[data-v-79beb144] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-light .colorSecond15[data-v-79beb144] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-dark .textPrimary0[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .textSecond1[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-dark .textSecond2[data-v-79beb144] {\n  color: #7F828F;\n}\n.theme-dark .textSecond3[data-v-79beb144] {\n  color: #6D707D;\n}\n.theme-dark .colorDisable[data-v-79beb144] {\n  background-color: #5F626D;\n}\n.theme-dark .colorBackground0[data-v-79beb144] {\n  background-color: #0A0E1F;\n}\n.theme-dark .colorBackground1[data-v-79beb144] {\n  background-color: #171A26;\n}\n.theme-dark .colorBackground2[data-v-79beb144] {\n  background-color: #131620;\n}\n.theme-dark .colorBackground3[data-v-79beb144] {\n  background-color: #212331;\n}\n.theme-dark .colorBackgroundPrimary[data-v-79beb144] {\n  background-color: #495BFF;\n}\n.theme-dark .colorPrimary[data-v-79beb144] {\n  color: #495BFF;\n}\n.theme-dark .colorSecond01[data-v-79beb144] {\n  color: #1CBDB5;\n}\n.theme-dark .colorSecond02[data-v-79beb144] {\n  color: #F04A4A;\n}\n.theme-dark .colorSecond03[data-v-79beb144] {\n  color: #26BC80;\n}\n.theme-dark .colorSecond04[data-v-79beb144] {\n  color: #FF8146;\n}\n.theme-dark .colorSecond05[data-v-79beb144] {\n  color: #2F80ED;\n}\n.theme-dark .colorSecond06[data-v-79beb144] {\n  color: #4A2FD2;\n}\n.theme-dark .colorSecond07[data-v-79beb144] {\n  color: #F04E98;\n}\n.theme-dark .colorBlack[data-v-79beb144] {\n  color: #000;\n}\n.theme-dark .colorwhite[data-v-79beb144] {\n  color: #fff;\n}\n.theme-dark .colorSecond10[data-v-79beb144] {\n  color: rgba(73,91,255,0.1);\n}\n.theme-dark .colorSecond11[data-v-79beb144] {\n  color: rgba(28,189,181,0.1);\n}\n.theme-dark .colorSecond12[data-v-79beb144] {\n  color: rgba(240,74,74,0.1);\n}\n.theme-dark .colorSecond13[data-v-79beb144] {\n  color: rgba(38,188,128,0.1);\n}\n.theme-dark .colorSecond14[data-v-79beb144] {\n  color: rgba(255,129,70,0.1);\n}\n.theme-dark .colorSecond15[data-v-79beb144] {\n  color: rgba(47,128,237,0.1);\n}\n.theme-light .wrap-min[data-v-79beb144] {\n  background: #fff;\n}\n.theme-light .line[data-v-79beb144] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .wrap[data-v-79beb144] {\n  background: #fff;\n}\n.theme-light .about .about-wrap[data-v-79beb144] {\n  background: #F3F5F6;\n}\n.theme-light .about .about-wrap-pos[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .about .about-wrap-pos p[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .about .about-title[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .about .about-con[data-v-79beb144] {\n  color: #4B5373;\n}\n.theme-light .about .viewAll[data-v-79beb144] {\n  color: #495BFF;\n}\n.theme-light .distribution .distribution-title[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .hold .hold-title[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .exchangeTotal[data-v-79beb144] {\n  color: #4B5373;\n}\n.theme-light .total[data-v-79beb144] {\n  color: #4B5373;\n}\n.theme-light .total span[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .distribution-man[data-v-79beb144] {\n  background: #F3F5F6;\n}\n.theme-light .distribution-man .data div[data-v-79beb144]:last-child {\n  color: #080D21;\n}\n.theme-light .distribution-man .data>div[data-v-79beb144] {\n  color: #4B5373;\n}\n.theme-light .distribution-man .data>div[data-v-79beb144] :last-child {\n  color: #080D21;\n}\n.theme-light .hold .hold-title[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .appreciation .appreciation-title[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .appreciation-grid .appreciation-grid-flex div span[data-v-79beb144] {\n  color: #4B5373;\n}\n.theme-light .setIcon[data-v-79beb144] {\n  color: #999ba3;\n}\n.theme-light .setLightColor[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-light .setDarkColor[data-v-79beb144] {\n  color: #4B5373;\n}\n.theme-light .more .more-title[data-v-79beb144] {\n  color: #080D21;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .more .more-line[data-v-79beb144] {\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.theme-light .more .more-line span[data-v-79beb144] {\n  color: #080D21;\n}\n.theme-dark .wrap-min[data-v-79beb144] {\n  background: #171A26;\n}\n.theme-dark .line[data-v-79beb144] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .wrap[data-v-79beb144] {\n  background: #fff;\n}\n.theme-dark .about .about-wrap[data-v-79beb144] {\n  background: #0A0E1F;\n}\n.theme-dark .about .about-wrap-pos[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-wrap-pos p[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-title[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .about .about-con[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-dark .about .viewAll[data-v-79beb144] {\n  color: #495BFF;\n}\n.theme-dark .distribution .distribution-title[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .hold .hold-title[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .exchangeTotal[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-dark .total[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-dark .total span[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .distribution-man[data-v-79beb144] {\n  background: #212331;\n}\n.theme-dark .distribution-man .data[data-v-79beb144] :last-child {\n  color: #DFE0E3;\n}\n.theme-dark .distribution-man .data>div[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-dark .distribution-man .data>div span[data-v-79beb144]:last-child {\n  color: #9CA5B3;\n}\n.theme-dark .hold .hold-title[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .appreciation .appreciation-title[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .appreciation-grid .appreciation-grid-flex div span[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-dark .setIcon[data-v-79beb144] {\n  color: #999ba3;\n}\n.theme-dark .setdarkColor[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.theme-dark .setDarkColor[data-v-79beb144] {\n  color: #9CA5B3;\n}\n.theme-dark .more .more-title[data-v-79beb144] {\n  color: #DFE0E3;\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .more .more-line[data-v-79beb144] {\n  border-bottom: 0.03rem solid #1F212E;\n}\n.theme-dark .more .more-line span[data-v-79beb144] {\n  color: #DFE0E3;\n}\n.statusM[data-v-79beb144] {\n  padding-bottom: 1.39rem;\n}\n.hold-content img[data-v-79beb144] {\n  width: 1.07rem !important;\n  height: 1.07rem !important;\n}\n.about .about-wrap[data-v-79beb144] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.07rem;\n}\n.about .about-wrap-pos[data-v-79beb144] {\n  text-align: center;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  direction: cloumn;\n}\n.about .about-wrap-pos img[data-v-79beb144] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.about .about-wrap-pos p[data-v-79beb144] {\n  margin-top: 0.13rem;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  font-weight: 600;\n}\n.about .about-content[data-v-79beb144] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.about .about-title[data-v-79beb144] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.about .about-title img[data-v-79beb144] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.about .about-con[data-v-79beb144] {\n  padding-top: 0.4rem;\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.about .viewAll[data-v-79beb144] {\n  text-align: right;\n  font-size: 0.37rem;\n  line-height: 0.37rem;\n  margin-top: 0.16rem;\n}\n.distribution[data-v-79beb144] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.distribution .distribution-title[data-v-79beb144] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.distribution .distribution-title img[data-v-79beb144] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.distribution .charts-img[data-v-79beb144] {\n  text-align: center;\n  margin: 0.53rem;\n}\n.distribution .charts-img img[data-v-79beb144] {\n  width: 2.93rem;\n  height: 2.93rem;\n}\n.distribution .charts-img .exchangeTotal[data-v-79beb144] {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n}\n.distribution .charts-img .total[data-v-79beb144] {\n  font-size: 0.37rem;\n  line-height: 0.53rem;\n}\n.distribution .distribution-man[data-v-79beb144] {\n  margin-bottom: 0.8rem;\n  border-radius: 0.21rem;\n  padding: 0.27rem;\n}\n.distribution .distribution-man .data[data-v-79beb144] {\n  display: flex;\n  justify-content: space-between;\n}\n.distribution .distribution-man .data div[data-v-79beb144]:last-child {\n  font-family: bitkeep DIN;\n  font-size: 0.37rem;\n}\n.distribution .distribution-man .data>div[data-v-79beb144] {\n  font-size: 0.37rem;\n  line-height: 0.91rem;\n  vertical-align: middle;\n}\n.distribution .distribution-man .data>div span[data-v-79beb144]:first-child {\n  display: inline-block;\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 0.11rem;\n}\n.distribution .distribution-man .data>div span[data-v-79beb144]:last-child {\n  vertical-align: middle;\n}\n.hold[data-v-79beb144] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.hold .hold-title[data-v-79beb144] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.hold .hold-title img[data-v-79beb144] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.appreciation[data-v-79beb144] {\n  margin: 0.32rem 0.43rem 0.8rem;\n}\n.appreciation .appreciation-title[data-v-79beb144] {\n  font-size: 0.43rem;\n  line-height: 0.43rem;\n  font-weight: 600;\n  color: #080D21;\n  vertical-align: middle;\n}\n.appreciation .appreciation-title img[data-v-79beb144] {\n  width: 0.53rem;\n  height: 0.53rem;\n  vertical-align: text-top;\n  margin-right: 0.13rem;\n}\n.appreciation-grid[data-v-79beb144] {\n  width: 100%;\n  text-align: center;\n}\n.appreciation-grid .appreciation-grid-flex[data-v-79beb144] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.53rem;\n}\n.appreciation-grid .appreciation-grid-flex div[data-v-79beb144] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 50%;\n  float: left;\n}\n.appreciation-grid .appreciation-grid-flex div img[data-v-79beb144] {\n  margin-top: 0.13rem;\n  width: 0.64rem;\n  height: 0.64rem;\n}\n.appreciation-grid .appreciation-grid-flex div span[data-v-79beb144] {\n  font-size: 0.37rem;\n  color: #4B5373;\n  width: 3.73rem;\n  margin-top: 0.13rem;\n  line-height: 0.48rem;\n}\n.setFontFamily[data-v-79beb144] {\n  font-family: \"bitkeep DIN\";\n}\n.more[data-v-79beb144] {\n  margin: 0 0.43rem 0.8rem;\n}\n.more .more-title[data-v-79beb144] {\n  font-size: 0.43rem;\n  line-height: 1.2rem;\n  font-weight: 600;\n  color: #080D21;\n  border-bottom: 0.03rem solid #F4F5FA;\n}\n.more .more-line[data-v-79beb144] {\n  font-size: 0.43rem;\n  line-height: 1.33rem;\n  height: 1.33rem;\n  border-bottom: 0.03rem solid #F4F5FA;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.more .more-line a[data-v-79beb144] {\n  flex: 1;\n}\n.more .more-line img[data-v-79beb144] {\n  width: 0.64rem;\n  height: 0.64rem;\n  vertical-align: middle;\n}\n.more .more-line span[data-v-79beb144] {\n  color: #080D21;\n  display: inline-block;\n  margin-left: 0.27rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map