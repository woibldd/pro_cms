exports.ids = [18];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c9302282", content, true, context)
};

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_b5b92e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_b5b92e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_b5b92e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_b5b92e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Whitelistcard_vue_vue_type_style_index_0_id_b5b92e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".WhitelistBox[data-v-b5b92e76] {\n  width: 8.4rem;\n  height: 355;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.WhitelistBox .content[data-v-b5b92e76] {\n  padding: 0.8rem 0.53rem;\n  box-sizing: border-box;\n}\n.WhitelistBox .content h1[data-v-b5b92e76] {\n  font-size: 0.53rem;\n  font-weight: 400;\n  line-height: 1.7em;\n  color: #fff;\n}\n.WhitelistBox .content div[data-v-b5b92e76] {\n  font-size: 0.43rem;\n  font-weight: 400;\n  line-height: 1.7em;\n  color: #fff;\n  margin-top: 0.13rem;\n  word-wrap: break-word;\n  word-break: normal;\n}\n.WhitelistBox .content .title2[data-v-b5b92e76] {\n  width: 100%;\n  margin-top: 0.8rem;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Whitelistcard.vue?vue&type=template&id=b5b92e76&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","closeable":"","close-on-click-overlay":false},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"WhitelistBox"},[_c('div',{staticClass:"content TTORegular"},[_c('h1',{staticClass:"TTORegular title1"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTitle')))]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTips1')))]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTips2')))]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTips3')))]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTips4')))]),_vm._v(" "),_c('h1',{staticClass:"TTORegular title2"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTips9')))]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTips5')))]),_vm._v(" "),_c('div',{staticClass:"TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.whiteTips6')))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/Whitelistcard.vue?vue&type=template&id=b5b92e76&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/Whitelistcard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Whitelistcardvue_type_script_lang_js_ = ({
  name: "WhitelistCard",
  props: {
    showWhitelist: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showWhitelist
    };
  },

  watch: {
    showWhitelist(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeWhitelistcard", false);
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/Whitelistcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_Whitelistcardvue_type_script_lang_js_ = (Whitelistcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/polygon/Whitelistcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(159)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_Whitelistcardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b5b92e76",
  "2faccc51"
  
)

/* harmony default export */ var Whitelistcard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=polygon-whitelistcard.js.map