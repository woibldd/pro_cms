exports.ids = [10];
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
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_2_2_1_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_2_2_1_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_2_2_1_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_2_2_1_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_2_2_1_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_AirdropAddressCard_vue_vue_type_style_index_0_id_15a011ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.2.1@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./components/polygon/AirdropAddressCard.vue?vue&type=template&id=15a011ee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-popup',{attrs:{"close-icon-position":"top-right","close-on-click-overlay":false,"closeable":""},on:{"click-close-icon":_vm.close},model:{value:(_vm.visables),callback:function ($$v) {_vm.visables=$$v},expression:"visables"}},[_c('div',{staticClass:"AirdropAddressBox"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"title TTORegular"},[_vm._v(_vm._s(_vm.$t('polygon.airdropTips1'))+" "),_c('span',{staticClass:"TTOMedium"},[_vm._v("BKB"+_vm._s(_vm.$t('polygon.airdropTips2')))])]),_vm._v(" "),_c('div',{staticClass:"getTime TTORegular"},[_vm._v(_vm._s(_vm._f("timeFilter")(((new Date).getTime())-86400000)))]),_vm._v(" "),_c('div',{staticClass:"list"},[_c('div',{staticClass:"Addresslist",on:{"touchmove":function($event){$event.stopPropagation();return _vm.touchmove.apply(null, arguments)}}},_vm._l((_vm.LotteryList),function(item,index){return _c('div',{key:index,staticClass:"item TTORegular"},[_vm._v(" \n            "+_vm._s(item)+" \n          ")])}),0)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue?vue&type=template&id=15a011ee&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.5@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.2.1@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./components/polygon/AirdropAddressCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AirdropAddressCardvue_type_script_lang_js_ = ({
  name: "AirdropAddressCard",
  props: {
    showAirdropAddress: {
      type: Boolean,
      default: false
    },
    LotteryList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      MintNum: 0,
      visables: this.showAirdropAddress
    };
  },

  computed: {
    showList() {
      const list = [];
      let dr = [];

      for (let i = 0; i < this.LotteryList.length; i++) {
        if (dr.length < 3) {
          dr.push(this.LotteryList[i]);
        }

        if (i % 3 === 2) {
          list.push(dr);
          dr = [];
        }
      }

      return list;
    }

  },
  watch: {
    showAirdropAddress(n) {
      this.visables = n;
    }

  },
  methods: {
    close() {
      this.$emit("closeAirdropAddressCard", false);
    },

    touchmove(event) {}

  },

  async mounted() {}

});
// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var polygon_AirdropAddressCardvue_type_script_lang_js_ = (AirdropAddressCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/polygon/AirdropAddressCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  polygon_AirdropAddressCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15a011ee",
  "921791b8"
  
)

/* harmony default export */ var AirdropAddressCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=polygon-airdrop-address-card.js.map