exports.ids = [14];
exports.modules = {

/***/ 100:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvitedCard_vue_vue_type_style_index_0_id_0a4149d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 148:
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
  
  var style0 = __webpack_require__(116)
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
  "9d742436"
  
)

/* harmony default export */ var InvitedCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=polygon-invited-card.js.map