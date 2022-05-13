exports.ids = [13];
exports.modules = {

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3c1a625d", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_ee515146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".InvitedBox[data-v-ee515146] {\n  width: 8.4rem;\n  height: 14.85rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.InvitedBox .content[data-v-ee515146] {\n  padding: 0.53rem;\n  box-sizing: border-box;\n}\n.InvitedBox .content .title[data-v-ee515146] {\n  font-size: 0.43rem;\n  font-weight: 400;\n  color: #fff;\n}\n.InvitedBox .content .title span[data-v-ee515146] {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.InvitedBox .content .Invitedlist[data-v-ee515146] {\n  width: 100%;\n  height: 12.11rem;\n  overflow: auto;\n  border-top: 0.03rem solid #49494D;\n}\n.InvitedBox .content .Invitedlist .item[data-v-ee515146] {\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n  margin-top: 0.53rem;\n}\n.InvitedBox .content .Invitedlist .item .address[data-v-ee515146] {\n  word-wrap: break-word;\n  word-break: normal;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/InvitedCard.vue?vue&type=template&id=ee515146&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","close-on-click-overlay":false,"closeable":""},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"InvitedBox"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title TTORegular"},[_vm._v("当前邀请成功人数 "),_c('span',{staticClass:"TTOMedium"},[_vm._v("2")])]),_vm._v(" "),_c('div',{staticClass:"title TTORegular"},[_vm._v("领取空投概率 "),_c('span',{staticClass:"TTOMedium"},[_vm._v("50%")])]),_vm._v(" "),_c('div',{staticClass:"Invitedlist TTORegular"},[_c('div',{staticClass:"item TTORegular"},[_c('div',{staticClass:"item"},[_vm._v("\n            被邀请人地址\n          ")]),_vm._v(" "),_c('div',{staticClass:"address"},[_vm._v("\n            0x2558248b1b72163Cff35658C707168879788997d\n          ")])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/InvitedCard.vue?vue&type=template&id=ee515146&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/InvitedCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InvitedCardvue_type_script_lang_js_ = ({
  name: "InvitedCard",
  props: {
    showInvitedlist: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showInvitedlist
    };
  },

  watch: {
    showInvitedlist(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeInvitedCard", false);
    }

  }
});
// CONCATENATED MODULE: ./components/polygon/InvitedCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_InvitedCardvue_type_script_lang_js_ = (InvitedCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/InvitedCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_InvitedCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ee515146",
  "9d742436"
  
)

/* harmony default export */ var InvitedCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=polygon-invited-card.js.map