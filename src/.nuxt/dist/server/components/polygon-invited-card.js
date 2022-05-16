exports.ids = [14];
exports.modules = {

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b0c9abf0", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".InvitedBox[data-v-0a4149d6] {\n  width: 8.4rem;\n  background: #202024;\n  box-sizing: border-box;\n  border: 0.03rem solid #49494D;\n}\n.InvitedBox .content[data-v-0a4149d6] {\n  padding: 1.07rem 0.53rem 0.53rem 0.53rem;\n  box-sizing: border-box;\n}\n.InvitedBox .content .title[data-v-0a4149d6] {\n  font-size: 0.43rem;\n  font-weight: 400;\n  color: #fff;\n}\n.InvitedBox .content .title span[data-v-0a4149d6] {\n  font-size: 0.53rem;\n  color: #09EFBD;\n}\n.InvitedBox .content .Invitedlist[data-v-0a4149d6] {\n  width: 100%;\n  height: 12.11rem;\n  overflow: auto;\n  border-top: 0.03rem solid #49494D;\n}\n.InvitedBox .content .Invitedlist .item[data-v-0a4149d6] {\n  font-size: 0.37rem;\n  color: #fff;\n  font-weight: 400;\n  margin-top: 0.53rem;\n}\n.InvitedBox .content .Invitedlist .item .address[data-v-0a4149d6] {\n  word-wrap: break-word;\n  word-break: normal;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/polygon/InvitedCard.vue?vue&type=template&id=0a4149d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","close-on-click-overlay":false,"closeable":""},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"InvitedBox"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.inviteCount'))+" "),_c('span',{staticClass:"TTOMedium"},[_vm._v(_vm._s(_vm.inviteNum))])]),_vm._v(" "),_c('div',{staticClass:"title TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.inviteTips2'))),_c('span',{staticClass:"TTOMedium "},[_vm._v(_vm._s(_vm.luckRate)+"%")])]),_vm._v(" "),_c('div',{staticClass:"Invitedlist TTORegular"},_vm._l((_vm.inviteAddress),function(item,index){return _c('div',{key:index,staticClass:"item TTORegular"},[_c('div',{staticClass:"TTORegular Invitedlabel"},[_vm._v("\n            "+_vm._s(_vm.$t('polygon.inviteAddress'))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"address TTORegular"},[_vm._v("\n            "+_vm._s(item)+"\n          ")])])}),0)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/InvitedCard.vue?vue&type=template&id=0a4149d6&scoped=true&

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
    },
    inviteAddress: {
      type: Array,
      default: () => []
    },
    inviteNum: {
      type: Number,
      default: 0
    },
    luckRate: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
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
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_InvitedCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a4149d6",
  "5fc0679d"
  
)

/* harmony default export */ var InvitedCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=polygon-invited-card.js.map